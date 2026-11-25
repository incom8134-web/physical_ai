import assert from 'node:assert/strict';
import { test, after } from 'node:test';
import { build } from 'vite';

async function loadInquiry(key) {
  const result = await build({
    configFile: false,
    envFile: false,
    logLevel: 'silent',
    define: { 'import.meta.env.VITE_WEB3FORMS_KEY': JSON.stringify(key) },
    build: { write: false, lib: { entry: 'src/inquiry.ts', formats: ['es'] } },
  });
  const output = Array.isArray(result) ? result[0] : result;
  return import(
    `data:text/javascript;base64,${Buffer.from(output.output[0].code).toString('base64')}`
  );
}

const configured = await loadInquiry('test-key');
const unconfigured = await loadInquiry('');
const originalFetch = globalThis.fetch;
after(() => {
  globalThis.fetch = originalFetch;
});
const payload = {
  name: 'Visitor',
  org: 'Example',
  email: 'visitor@example.com',
  message: 'Hello & 안녕하세요\nSecond line',
  type: 'Rental',
};

for (const lang of ['ko', 'en']) {
  test(`inquiry ${lang} sends the visitor reply address and message`, async () => {
    let request;
    globalThis.fetch = async (url, options) => {
      request = { url, ...options, body: JSON.parse(options.body) };
      return { ok: true, json: async () => ({ success: true }) };
    };
    assert.deepEqual(await configured.sendInquiry(payload, lang), { ok: true });
    assert.equal(request.url, 'https://api.web3forms.com/submit');
    assert.equal(request.method, 'POST');
    assert.equal(request.body.replyto, payload.email);
    assert.equal(request.body[lang === 'ko' ? '문의 내용' : 'Message'], payload.message);
    assert.ok(request.body.subject.includes(payload.name));
    assert.ok(request.body.subject.includes(payload.type));
  });

  test(`inquiry ${lang} mail fallback preserves Unicode and line breaks`, () => {
    const url = new URL(unconfigured.mailtoFallback(payload, lang));
    assert.equal(url.protocol, 'mailto:');
    assert.equal(url.pathname, 'incom2794@naver.com');
    assert.ok(url.searchParams.get('subject').includes(payload.name));
    assert.equal(url.searchParams.get('body'), unconfigured.plainInquiry(payload, lang));
    assert.ok(url.searchParams.get('body').includes(payload.message));
  });
}

test('missing relay key and honeypot never call the network', async () => {
  globalThis.fetch = () => {
    assert.fail('Network must not be used');
  };
  assert.deepEqual(await unconfigured.sendInquiry(payload, 'en'), {
    ok: false,
    reason: 'not-configured',
  });
  assert.deepEqual(await configured.sendInquiry({ ...payload, company: 'bot' }, 'ko'), {
    ok: true,
  });
});

test('relay rejection, malformed response and network errors remain recoverable', async () => {
  for (const response of [
    { ok: false, status: 403, json: async () => ({ message: 'Rejected' }) },
    { ok: true, status: 200, json: async () => ({ success: false }) },
    {
      ok: false,
      status: 502,
      json: async () => {
        throw new Error('Invalid JSON');
      },
    },
  ]) {
    globalThis.fetch = async () => response;
    const result = await configured.sendInquiry(payload, 'en');
    assert.equal(result.ok, false);
    assert.equal(result.reason, 'rejected');
  }
  globalThis.fetch = async () => {
    throw new Error('Offline');
  };
  assert.deepEqual(await configured.sendInquiry(payload, 'en'), {
    ok: false,
    reason: 'network',
    detail: 'Offline',
  });
});
