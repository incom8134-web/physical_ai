import assert from 'node:assert/strict';
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { JSDOM, VirtualConsole } from 'jsdom';

const dist = path.resolve(process.env.TEST_DIST || 'dist');
const html = readFileSync(path.join(dist, 'index.html'), 'utf8');
const script = html.match(/<script[^>]*src="([^"]+)"/)[1];
const bundle = readFileSync(path.join(dist, script.replace(/^\//, '')), 'utf8');
const snapshots = {};
const pause = () => new Promise((resolve) => setTimeout(resolve, 40));

async function mount(route = '', reducedMotion = true) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => errors.push(error.message));
  virtualConsole.on('error', (...args) => errors.push(args.join(' ')));
  const dom = new JSDOM(html, {
    url: `https://www.haebotai.com/${route ? `#/${route}` : ''}`,
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    virtualConsole,
  });
  const { window } = dom;
  window.matchMedia = (query) => ({
    matches: reducedMotion && query.includes('reduced-motion'),
  });
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.scrollBy = () => {};
  window.setInterval = () => 1;
  window.fetch = () => {
    throw new Error('Unexpected network request');
  };
  window.eval(bundle);
  const ready = () =>
    window.document.querySelector('h1') &&
    window.document.querySelector('link[rel="canonical"]').href === window.location.href &&
    (!reducedMotion ||
      [...window.document.querySelectorAll('[style*="will-change: opacity"]')].every(
        (el) => el.style.opacity === '1',
      ));
  for (let attempt = 0; attempt < 50; attempt++) {
    await pause();
    if (ready()) break;
  }
  assert.ok(ready(), 'Page and reveal effects finished rendering');
  const document = window.document;
  const click = async (element) => {
    assert.ok(element, 'Expected interactive element');
    element.click();
    await pause();
  };
  const button = (text) =>
    [...document.querySelectorAll('button')].find((el) =>
      text instanceof RegExp ? text.test(el.textContent) : el.textContent.trim() === text,
    );
  const close = () => {
    dom.window.close();
    assert.deepEqual(errors, [], 'No runtime errors');
  };
  return { window, document, click, button, close };
}

for (const route of ['', 'education', 'consulting', 'support', 'rental', 'updates']) {
  for (const lang of ['ko', 'en']) {
    test(`${route || 'home'} renders in ${lang} with valid metadata and media`, async () => {
      const app = await mount(route);
      try {
        if (lang === 'en')
          await app.click(app.document.querySelector('[aria-label="Toggle language"]'));
        assert.ok(app.document.querySelector('h1')?.textContent.trim());
        assert.equal(
          app.document.querySelector('link[rel="canonical"]').href,
          `https://www.haebotai.com/${route ? `#/${route}` : ''}`,
        );
        assert.equal(
          app.document.querySelector('meta[property="og:url"]').content,
          app.document.querySelector('link[rel="canonical"]').href,
        );
        for (const el of app.document.querySelectorAll('img, video[poster], source')) {
          const src =
            el.getAttribute(el.localName === 'video' ? 'poster' : 'src') ||
            el.getAttribute('srcset');
          assert.ok(
            src && existsSync(path.join(dist, src.replace(/^\//, ''))),
            `Missing media: ${el.outerHTML}`,
          );
        }
        snapshots[`${route || 'home'}-${lang}`] = app.document.getElementById('root').innerHTML;
      } finally {
        app.close();
      }
    });
  }
}

test('hash navigation and unknown routes retain home fallback', async () => {
  const app = await mount();
  try {
    app.window.location.hash = '/updates';
    await pause();
    assert.ok(app.document.getElementById('updates-list'));
    app.window.location.hash = '/unknown';
    await pause();
    assert.ok(app.document.getElementById('contact'));
    assert.equal(
      app.document.querySelector('link[rel="canonical"]').href,
      'https://www.haebotai.com/',
    );
  } finally {
    app.close();
  }
});

test('legal dialog opens, locks scrolling and closes with Escape', async () => {
  const app = await mount();
  try {
    for (const label of ['개인정보처리방침', '이용약관']) {
      await app.click(app.button(label));
      assert.ok(app.document.querySelector('[role="dialog"]'));
      assert.equal(app.document.body.style.overflow, 'hidden');
      app.window.dispatchEvent(new app.window.KeyboardEvent('keydown', { key: 'Escape' }));
      await pause();
      assert.equal(app.document.querySelector('[role="dialog"]'), null);
      assert.equal(app.document.body.style.overflow, '');
    }
  } finally {
    app.close();
  }
});

test('locked education module opens the enrollment dialog', async () => {
  const app = await mount('education');
  try {
    await app.click(app.button(/^M2/));
    assert.ok(app.document.querySelector('[role="dialog"]'));
    await app.click(app.document.querySelector('[role="dialog"] button:last-child'));
    assert.equal(app.document.querySelector('[role="dialog"]'), null);
  } finally {
    app.close();
  }
});

test('poster dialog closes on Escape and outside press and restores focus', async () => {
  const app = await mount('rental');
  try {
    const trigger = app.document.querySelector('.poster-card');
    await app.click(trigger);
    assert.ok(app.document.querySelector('[role="dialog"]'));
    app.document.dispatchEvent(new app.window.KeyboardEvent('keydown', { key: 'Escape' }));
    await pause();
    assert.equal(app.document.querySelector('[role="dialog"]'), null);
    assert.equal(app.document.activeElement, trigger);
    await app.click(trigger);
    app.document.body.dispatchEvent(new app.window.MouseEvent('mousedown', { bubbles: true }));
    await pause();
    assert.equal(app.document.querySelector('[role="dialog"]'), null);
    assert.equal(app.document.body.style.overflow, '');
  } finally {
    app.close();
  }
});

test('contact form validates required fields without sending a request', async () => {
  const app = await mount();
  try {
    const form = app.document.querySelector('form');
    assert.equal(form.checkValidity(), false);
    form.elements.name.value = 'Test visitor';
    form.elements.email.value = 'invalid';
    form.elements.message.value = 'Test message';
    assert.equal(form.checkValidity(), false);
    form.elements.email.value = 'test@example.com';
    assert.equal(form.checkValidity(), true);
    assert.equal(form.elements.company.tabIndex, -1);
  } finally {
    app.close();
  }
});

test('reduced motion replaces the autoplay hero with a static background', async () => {
  const still = await mount();
  const moving = await mount('', false);
  try {
    assert.equal(still.document.querySelector('video[autoplay]'), null);
    assert.ok(moving.document.querySelector('video[autoplay]'));
    assert.ok(still.document.querySelector('[style*="hero-bg.jpg"]'));
  } finally {
    still.close();
    moving.close();
  }
});

test('mobile navigation closes after selecting a page', async () => {
  const app = await mount();
  try {
    const toggle = app.document.querySelector('nav button[aria-expanded]');
    await app.click(toggle);
    assert.equal(toggle.getAttribute('aria-expanded'), 'true');
    await app.click(app.document.querySelector('#mobile-nav a[href="#/updates"]'));
    assert.ok(app.document.getElementById('updates-list'));
    assert.equal(toggle.getAttribute('aria-expanded'), 'false');
  } finally {
    app.close();
  }
});

test('consulting audience selection and contact CTA remain interactive', async () => {
  const app = await mount('consulting');
  try {
    const heading = app.document.querySelector('#consulting-audience h3').textContent;
    await app.click(app.document.querySelectorAll('#consulting-audience .step-btn')[1]);
    assert.notEqual(app.document.querySelector('#consulting-audience h3').textContent, heading);
    await app.click(app.document.querySelector('section .btn-primary'));
    assert.ok(app.document.getElementById('contact'));
  } finally {
    app.close();
  }
});

test('optional before/after DOM parity audit', () => {
  if (process.env.WRITE_SNAPSHOTS)
    writeFileSync(process.env.WRITE_SNAPSHOTS, JSON.stringify(snapshots));
  if (process.env.COMPARE_SNAPSHOTS) {
    const original = JSON.parse(readFileSync(process.env.COMPARE_SNAPSHOTS, 'utf8'));
    for (const [page, current] of Object.entries(snapshots)) {
      if (current === original[page]) continue;
      let index = 0;
      while (index < current.length && current[index] === original[page][index]) index++;
      assert.fail(
        `${page} differs at ${index}: before ${original[page].slice(index, index + 150)}; after ${current.slice(index, index + 150)}`,
      );
    }
  }
});
