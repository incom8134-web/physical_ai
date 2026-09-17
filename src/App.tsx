import { useEffect, useRef, useState } from 'react';
import { useLang, type Lang } from './i18n';
import { sendInquiry, mailtoFallback, CONTACT_EMAIL, type InquiryPayload } from './inquiry';
import { Reveal } from './useReveal';
import EducationPage from './EducationPage';
import ConsultingPage from './ConsultingPage';
import RentalPage from './RentalPage';

export type Page = 'home' | 'education' | 'consulting' | 'rental';

function pageFromHash(): Page {
  const h = window.location.hash;
  if (h.startsWith('#/education')) return 'education';
  if (h.startsWith('#/consulting')) return 'consulting';
  if (h.startsWith('#/rental')) return 'rental';
  return 'home';
}

const mono = (size = '0.7rem'): React.CSSProperties => ({
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: size,
  letterSpacing: '0.06em',
});

// Heabot AI — JINIE EDUTECH's own platform, in the three configurations shown
// in the robots section, in the same order as t.robots.items.
const robotMedia: { src: string; position: string }[] = [
  { src: '/images/heabot-field.jpg', position: 'center 42%' },
  { src: '/images/heabot-modular.jpg', position: 'center center' },
  { src: '/images/heabot-kit.jpg', position: 'center center' },
];

function RobotMedia({ src, position, alt }: { src: string; position: string; alt: string }) {
  return (
    <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 8, background: 'var(--panel)' }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }}
      />
    </div>
  );
}

// Accent per service card, matching each page's own accent colour.
const serviceAccent: Record<string, { color: string; soft: string; ink: string }> = {
  Education: { color: 'var(--beam)', soft: 'rgba(92,139,255,0.10)', ink: '#04070d' },
  Consulting: { color: 'var(--amp)', soft: 'rgba(255,194,75,0.10)', ink: '#1a1200' },
  Rental: { color: 'var(--lock)', soft: 'rgba(69,224,168,0.10)', ink: '#04140e' },
};

export default function App() {
  const { lang, t, toggle } = useLang();
  const [activeSection, setActiveSection] = useState('');
  const [navSolid, setNavSolid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [stepPlaying, setStepPlaying] = useState(true);
  const [page, setPage] = useState<Page>(() => pageFromHash());
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingScroll = useRef<string | null>(null);

  const sectionIds = ['what-is', 'how-it-works', 'services', 'robots', 'contact'];

  const goToPage = (p: Page) => {
    setPage(p);
    window.location.hash = p === 'home' ? '' : `/${p}`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const goToSection = (id: string) => {
    if (page !== 'home') {
      pendingScroll.current = id;
      goToPage('home');
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (page === 'home' && pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      });
    }
  }, [page]);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 },
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stepCount = t.howItWorks.steps.length;
  useEffect(() => {
    if (!stepPlaying) return;
    const id = setInterval(() => setActiveStep(s => (s + 1) % stepCount), 3200);
    return () => clearInterval(id);
  }, [stepPlaying, stepCount]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--void)', color: 'var(--text)' }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-16"
        style={{
          borderBottom: '1px solid var(--rail)',
          background: navSolid ? 'rgba(5,8,15,0.86)' : 'rgba(5,8,15,0.35)',
          backdropFilter: 'blur(12px)',
          transition: 'background 0.3s ease',
        }}
      >
        <a
          href="#top"
          onClick={e => { e.preventDefault(); if (page !== 'home') { pendingScroll.current = 'top'; goToPage('home'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
          className="flex items-center gap-3"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img src="/logo-mark.png" alt={t.contact.company} style={{ height: 30, width: 'auto' }} />
          <span style={{ fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{lang === 'ko' ? '지니에듀테크' : 'JINIE EDUTECH'}</span>
        </a>
        <div className="hidden md:flex items-center gap-7" style={{ fontSize: '0.86rem', color: 'var(--dim)' }}>
          {t.nav.items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => { e.preventDefault(); goToSection(item.href.slice(1)); }}
              className={`link-underline ${page === 'home' && activeSection === item.href.slice(1) ? 'active' : ''}`}
              style={{ color: page === 'home' && activeSection === item.href.slice(1) ? 'var(--text)' : 'inherit' }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            style={{
              ...mono('0.7rem'),
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              border: '1px solid var(--rail)',
              borderRadius: 999,
              padding: '0.3rem 0.2rem',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--dim)',
            }}
          >
            <span style={{ padding: '0.15rem 0.5rem', borderRadius: 999, background: lang === 'ko' ? 'var(--beam)' : 'transparent', color: lang === 'ko' ? '#04070d' : 'var(--dim)', fontWeight: lang === 'ko' ? 700 : 400, transition: 'all 0.2s' }}>KO</span>
            <span style={{ padding: '0.15rem 0.5rem', borderRadius: 999, background: lang === 'en' ? 'var(--beam)' : 'transparent', color: lang === 'en' ? '#04070d' : 'var(--dim)', fontWeight: lang === 'en' ? 700 : 400, transition: 'all 0.2s' }}>EN</span>
          </button>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); goToSection('contact'); }}
            className="btn btn-primary nav-cta"
            style={{ fontSize: '0.85rem', padding: '0.55rem 1.15rem' }}
          >
            {t.nav.cta}
          </a>
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            style={{
              width: 38, height: 38, borderRadius: 6, border: '1px solid var(--rail)',
              background: 'transparent', color: 'var(--text)', cursor: 'pointer',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden latch"
          style={{
            position: 'fixed', top: 64, left: 0, right: 0, zIndex: 45,
            background: 'rgba(5,8,15,0.97)', backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--rail)', padding: '0.5rem 1.25rem 1.25rem',
          }}
        >
          {t.nav.items.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => { e.preventDefault(); setMenuOpen(false); goToSection(item.href.slice(1)); }}
              style={{
                display: 'block', padding: '0.95rem 0', fontSize: '0.98rem',
                color: 'var(--text)', textDecoration: 'none',
                borderBottom: '1px solid var(--rail-soft)',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); setMenuOpen(false); goToSection('contact'); }}
            className="btn btn-primary"
            style={{ marginTop: '1.1rem', padding: '0.8rem 1.2rem', fontSize: '0.9rem', width: '100%' }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}

      {page === 'home' && <>
      {/* HERO */}
      <section id="top" className="sheet px-5 md:px-10 pt-32 md:pt-40 pb-16" style={{ borderBottom: '1px solid var(--rail)', position: 'relative', overflow: 'hidden' }}>
        {/* Analytical → Generative → Agentic → Physical AI, re-toned for the dark canvas */}
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 68%',
            opacity: 0.38,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background:
              'linear-gradient(90deg, rgba(5,8,15,0.97) 0%, rgba(5,8,15,0.90) 46%, rgba(5,8,15,0.45) 100%),' +
              'linear-gradient(180deg, rgba(5,8,15,0.92) 0%, rgba(5,8,15,0.25) 40%, rgba(5,8,15,0.95) 100%)',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(60% 55% at 22% 8%, rgba(92,139,255,0.15), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="spin-slow"
          style={{
            position: 'absolute', top: '-10%', right: '-6%', width: 420, height: 420,
            border: '1px dashed var(--rail)', borderRadius: '50%', pointerEvents: 'none',
          }}
        />
        <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 mb-7" style={{ border: '1px solid var(--rail)', background: 'var(--deck)', padding: '0.3rem 0.8rem', borderRadius: 999 }}>
                  <span className="blip" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lock)' }} />
                  <span style={{ ...mono('0.68rem'), color: 'var(--dim)' }}>{t.hero.eyebrow}</span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.2rem)', lineHeight: 0.98, fontWeight: 700, letterSpacing: '-0.035em', margin: 0 }}>
                  {t.hero.titleTop}<br />
                  <span style={{ color: 'var(--beam)' }}>{t.hero.titleAccent}</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.85, color: 'var(--dim)', fontWeight: 300, marginTop: '1.6rem', maxWidth: '46ch' }}>
                  {t.hero.subtitle}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href="#services" className="btn btn-primary" style={{ padding: '0.85rem 1.7rem', fontSize: '0.92rem' }}>{t.hero.ctaPrimary}</a>
                  <a href="#contact" className="btn btn-ghost" style={{ padding: '0.85rem 1.7rem', fontSize: '0.92rem' }}>{t.hero.ctaSecondary}</a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
                  {t.hero.stats.map((s, i) => (
                    <div key={i}>
                      <div style={{ ...mono('1.4rem'), fontWeight: 700, color: 'var(--beam)' }}>{s.n}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--faint)', marginTop: '0.2rem', lineHeight: 1.4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5" style={{ position: 'relative', zIndex: 1 }}>
              <Reveal delay={200}>
                <div style={{ position: 'relative' }}>
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute', inset: '-8%',
                      background: 'radial-gradient(50% 50% at 50% 45%, rgba(92,139,255,0.30), transparent 70%)',
                      filter: 'blur(10px)',
                    }}
                  />
                  <div
                    className="card hero-float"
                    style={{ position: 'relative', padding: '0.6rem', overflow: 'hidden' }}
                  >
                    <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: 7, background: 'var(--panel)' }}>
                      <img
                        src="/images/heabot-field.jpg"
                        alt="Heabot AI (해봇 AI) — 지니에듀테크 자체 개발 양팔 이동형 로봇"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 px-2 pt-3 pb-1">
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Heabot AI</span>
                      <span style={{ ...mono('0.6rem'), color: 'var(--lock)' }}>해봇 AI</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: 'var(--deck)', borderBottom: '1px solid var(--rail)', overflow: 'hidden', padding: '0.7rem 0' }}>
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {['PHYSICAL AI', 'VLA', 'SENSE · DECIDE · ACT', 'EDUCATION', 'CONSULTING', 'ROBOT RENTAL', 'HEABOT AI', '해봇 AI', 'DUAL-ARM MOBILE', 'MODULAR BUILD', 'DEVELOPER KIT'].map((tx, j) => (
                <span key={j} style={{ ...mono('0.72rem'), color: 'var(--faint)', whiteSpace: 'nowrap', padding: '0 1.8rem' }}>
                  {tx}<span style={{ color: 'var(--beam)', marginLeft: '1.8rem', opacity: 0.5 }}>/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHAT IS PHYSICAL AI */}
      <section id="what-is" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <Reveal>
            <span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{t.whatIs.eyebrow}</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-4">
            <div>
              <Reveal>
                <h2 style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.025em', margin: 0, whiteSpace: 'pre-line' }}>
                  {t.whatIs.title}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--dim)', fontWeight: 300, marginTop: '1.4rem', maxWidth: '46ch' }}>
                  {t.whatIs.body1}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text)', fontWeight: 400, marginTop: '1.1rem', maxWidth: '46ch' }}>
                  {t.whatIs.body2}
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10">
                  <div style={{ ...mono('0.68rem'), color: 'var(--faint)', marginBottom: '0.8rem' }}>{t.whatIs.compareTitle}</div>
                  <div className="card" style={{ overflow: 'hidden' }}>
                    <div className="grid grid-cols-3" style={{ background: 'var(--panel)', borderBottom: '1px solid var(--rail)' }}>
                      <div style={{ padding: '0.7rem 0.9rem' }} />
                      <div style={{ padding: '0.7rem 0.9rem', ...mono('0.62rem'), color: 'var(--faint)' }}>SOFTWARE AI</div>
                      <div style={{ padding: '0.7rem 0.9rem', ...mono('0.62rem'), color: 'var(--beam)' }}>PHYSICAL AI</div>
                    </div>
                    {t.whatIs.compare.map((row, i) => (
                      <div key={i} className="grid grid-cols-3" style={{ borderTop: i ? '1px solid var(--rail-soft)' : 'none' }}>
                        <div style={{ padding: '0.8rem 0.9rem', fontSize: '0.8rem', color: 'var(--dim)', fontWeight: 500 }}>{row.label}</div>
                        <div style={{ padding: '0.8rem 0.9rem', fontSize: '0.82rem', color: 'var(--faint)', fontWeight: 300 }}>{row.software}</div>
                        <div style={{ padding: '0.8rem 0.9rem', fontSize: '0.82rem', color: 'var(--text)', fontWeight: 400 }}>{row.physical}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="card" style={{ padding: 0 }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--rail)' }}>
                  <span style={{ ...mono('0.68rem'), color: 'var(--dim)' }}>{t.whatIs.statsTitle}</span>
                </div>
                <div className="p-5">
                  {t.whatIs.stats.map((r, i) => (
                    <div key={i} style={{ marginTop: i ? '1.3rem' : 0 }}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 300 }}>{r.l}</span>
                        <span style={{ ...mono('0.95rem'), fontWeight: 700, color: i === 1 ? 'var(--amp)' : 'var(--beam)' }}>{r.v}%</span>
                      </div>
                      <div style={{ height: 4, background: 'var(--panel)', borderRadius: 2, overflow: 'hidden' }}>
                        <div className="sweep" style={{ width: `${r.v}%`, height: '100%', background: i === 1 ? 'var(--amp)' : 'var(--beam)', borderRadius: 2 }} />
                      </div>
                    </div>
                  ))}
                  <p style={{ ...mono('0.6rem'), color: 'var(--faint)', marginTop: '1.6rem', marginBottom: 0, lineHeight: 1.6 }}>{t.whatIs.source}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <Reveal><span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{t.howItWorks.eyebrow}</span></Reveal>
          <Reveal delay={60}>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.025em', margin: '0.4rem 0 0', whiteSpace: 'pre-line' }}>
              {t.howItWorks.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem', marginBottom: '2.8rem', maxWidth: '52ch' }}>
              {t.howItWorks.subtitle}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="card" style={{ overflow: 'hidden' }}>
              {/* loop rail */}
              <div className="flex" style={{ borderBottom: '1px solid var(--rail)' }}>
                {t.howItWorks.steps.map((s, i) => {
                  const on = i === activeStep;
                  return (
                    <button
                      key={s.key}
                      role="tab"
                      aria-selected={on}
                      className="step-btn"
                      onClick={() => { setStepPlaying(false); setActiveStep(i); }}
                      style={{
                        flex: 1,
                        border: 'none',
                        borderRight: i < t.howItWorks.steps.length - 1 ? '1px solid var(--rail)' : 'none',
                        padding: '1rem 0.5rem',
                        cursor: 'pointer',
                        background: on ? 'var(--beam)' : 'var(--panel)',
                        color: on ? '#04070d' : 'var(--dim)',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ ...mono('0.62rem'), opacity: 0.75 }}>{String(i + 1).padStart(2, '0')}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, marginTop: '0.2rem' }}>{s.title}</div>
                    </button>
                  );
                })}
              </div>

              <div key={activeStep} className="latch grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
                <div className="md:col-span-7">
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text)', fontWeight: 300, margin: 0, maxWidth: '48ch' }}>
                    {t.howItWorks.steps[activeStep].desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {t.howItWorks.steps[activeStep].tech.map((tx, i) => (
                      <span key={i} style={{ fontSize: '0.8rem', padding: '0.32rem 0.7rem', border: '1px solid var(--rail)', borderRadius: 4, color: 'var(--text)' }}>
                        {tx}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 flex items-center justify-center">
                  <LoopDiagram active={activeStep} total={t.howItWorks.steps.length} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Reveal><span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{t.services.eyebrow}</span></Reveal>
              <Reveal delay={60}>
                <h2 style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.025em', margin: '0.4rem 0 0', whiteSpace: 'pre-line' }}>
                  {t.services.title}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, maxWidth: '36ch', margin: 0 }}>
                {t.services.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.services.items.map((s, i) => {
              const accent = serviceAccent[s.tag] ?? serviceAccent.Education;
              return (
              <Reveal key={i} delay={i * 90}>
                <div
                  className="card card-hover service-card"
                  style={{
                    padding: 0,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    ['--accent' as string]: accent.color,
                  }}
                >
                  <span aria-hidden style={{ display: 'block', height: 3, background: accent.color }} />
                  <div
                    style={{
                      padding: '1.9rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      background: `linear-gradient(180deg, ${accent.soft} 0%, transparent 42%)`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-5">
                      <span
                        style={{
                          ...mono('0.62rem'),
                          color: accent.ink,
                          background: accent.color,
                          padding: '0.22rem 0.55rem',
                          borderRadius: 3,
                          fontWeight: 700,
                        }}
                      >
                        {s.tag}
                      </span>
                      <span style={{ ...mono('0.65rem'), color: accent.color }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: '0.5rem' }}>{s.title}</div>
                    <div className="flex gap-1.5 flex-wrap mb-4">
                      {s.audience.map((a, j) => (
                        <span key={j} style={{ ...mono('0.6rem'), color: 'var(--dim)', border: '1px solid var(--rail)', padding: '0.2rem 0.45rem', borderRadius: 2 }}>{a}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 300, marginBottom: '1.4rem' }}>{s.desc}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.4rem' }}>
                      {s.points.map((p, j) => (
                        <li key={j} style={{ fontSize: '0.85rem', padding: '0.5rem 0', color: 'var(--text)', fontWeight: 300, borderTop: '1px solid var(--rail-soft)', display: 'flex', gap: '0.6rem' }}>
                          <span style={{ color: accent.color, flexShrink: 0 }}>/</span>{p}
                        </li>
                      ))}
                    </ul>
                    {(s.tag === 'Education' || s.tag === 'Consulting' || s.tag === 'Rental') && (
                      <button
                        onClick={() => goToPage(s.tag === 'Education' ? 'education' : s.tag === 'Consulting' ? 'consulting' : 'rental')}
                        className="btn"
                        style={{
                          marginTop: 'auto',
                          paddingTop: '0.65rem',
                          paddingBottom: '0.65rem',
                          fontSize: '0.82rem',
                          width: '100%',
                          background: 'transparent',
                          color: accent.color,
                          border: `1px solid ${accent.color}`,
                        }}
                      >
                        {lang === 'ko' ? '자세히 보기' : 'Learn more'}
                        <span aria-hidden style={{ marginLeft: 4 }}>→</span>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROBOTS */}
      <section id="robots" className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <Reveal><span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{t.robots.eyebrow}</span></Reveal>
          <Reveal delay={60}>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.025em', margin: '0.4rem 0 0', whiteSpace: 'pre-line' }}>
              {t.robots.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem', marginBottom: '3rem', maxWidth: '52ch' }}>
              {t.robots.subtitle}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.robots.items.map((r, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="card card-hover" style={{ overflow: 'hidden', height: '100%' }}>
                  <div style={{ padding: '0.6rem' }}>
                    <RobotMedia src={robotMedia[i].src} position={robotMedia[i].position} alt={`${r.name} — ${r.type}`} />
                  </div>
                  <div className="p-5" style={{ borderTop: '1px solid var(--rail)' }}>
                    <div style={{ fontWeight: 600, fontSize: '1.02rem', letterSpacing: '-0.01em' }}>{r.name}</div>
                    <div className="flex items-center gap-2 mt-1.5 mb-3.5 flex-wrap">
                      <span style={{ ...mono('0.62rem'), color: 'var(--beam)' }}>{r.type}</span>
                      <span style={{ color: 'var(--rail)' }}>|</span>
                      <span style={{ ...mono('0.62rem'), color: 'var(--faint)' }}>{r.spec}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 300, margin: 0 }}>{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <p style={{ ...mono('0.64rem'), color: 'var(--faint)', marginTop: '1.6rem', lineHeight: 1.7 }}>{t.robots.note}</p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY BANNER */}
      <section style={{ position: 'relative', borderBottom: '1px solid var(--rail)', overflow: 'hidden' }}>
        <div style={{ position: 'relative', minHeight: 340 }}>
          <img
            src="/images/platforms-bg.jpg"
            alt=""
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(5,8,15,0.94) 0%, rgba(5,8,15,0.62) 45%, rgba(5,8,15,0.2) 100%)',
            }}
          />
          <div className="max-w-screen-xl mx-auto px-5 md:px-10 h-full flex items-center" style={{ position: 'relative', minHeight: 340 }}>
            <Reveal>
              <div style={{ maxWidth: '32ch' }}>
                <span style={{ ...mono('0.68rem'), color: 'var(--beam)' }}>{t.banner.eyebrow}</span>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, margin: '0.5rem 0 0' }}>
                  {t.banner.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem' }}>
                  {t.banner.subtitle}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sheet px-5 md:px-10 py-20 md:py-28" style={{ position: 'relative' }}>
        <div
          aria-hidden
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(50% 60% at 50% 100%, rgba(92,139,255,0.14), transparent 70%)' }}
        />
        <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
          <Reveal><span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{t.contact.eyebrow}</span></Reveal>
          <Reveal delay={60}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1.15, fontWeight: 700, letterSpacing: '-0.03em', margin: '0.4rem 0 0', whiteSpace: 'pre-line' }}>
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem', marginBottom: '3rem', maxWidth: '44ch' }}>
              {t.contact.subtitle}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Reveal delay={160} className="lg:col-span-7">
              <ContactForm t={t} lang={lang} />
            </Reveal>

            <Reveal delay={220} className="lg:col-span-5">
              <div className="card" style={{ padding: '1.9rem', height: '100%' }}>
                <div style={{ ...mono('0.68rem'), color: 'var(--faint)', marginBottom: '1.4rem' }}>{t.contact.infoTitle}</div>

                <div style={{ marginBottom: '1.6rem' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>{t.contact.company}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--faint)', marginTop: '0.15rem' }}>{t.contact.companyEn}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.4rem' }}>{t.contact.ceo} · {t.contact.ceoName}</div>
                </div>

                <InfoRow icon="mail" label={t.contact.email} value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
                <InfoRow icon="phone" label={t.contact.phone} value="010-4588-2794" href="tel:010-4588-2794" />
                <InfoRow icon="phone" label={t.contact.phone} value="051-331-0110" href="tel:051-331-0110" />
                <InfoRow icon="globe" label={t.contact.website} value="jcodeedu.com" href="http://jcodeedu.com" />
                <InfoRow
                  icon="pin"
                  label={t.contact.hq}
                  value={t.contact.hqAddr}
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(t.contact.hqAddr)}`}
                  newTab
                />
                <InfoRow
                  icon="pin"
                  label={t.contact.lab}
                  value={t.contact.labAddr}
                  href={`https://map.naver.com/p/search/${encodeURIComponent(t.contact.labAddr)}`}
                  newTab
                  last
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      </>}

      {page === 'education' && <EducationPage lang={lang} t={t} onContact={() => goToSection('contact')} />}
      {page === 'consulting' && <ConsultingPage lang={lang} t={t} onContact={() => goToSection('contact')} />}
      {page === 'rental' && <RentalPage lang={lang} t={t} onContact={() => goToSection('contact')} />}

      {/* FOOTER */}
      <footer className="px-5 md:px-10 py-10" style={{ background: 'var(--void)', borderTop: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="" style={{ height: 24, width: 'auto' }} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{t.contact.company}</div>
              <div style={{ ...mono('0.6rem'), color: 'var(--faint)', marginTop: '0.1rem' }}>{t.contact.ceo} {t.contact.ceoName}</div>
            </div>
          </div>
          <div style={{ ...mono('0.6rem'), color: 'var(--faint)' }}>© 2026 {t.contact.company} — {t.footer.rights}</div>
          <div className="flex gap-5" style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>
            <a href="#" className="link-underline">{t.footer.privacy}</a>
            <a href="#" className="link-underline">{t.footer.terms}</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">{t.contact.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoopDiagram({ active, total }: { active: number; total: number }) {
  const size = 220;
  const r = 82;
  const cx = size / 2;
  const cy = size / 2;
  const pts = Array.from({ length: total }, (_, i) => {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--rail)" strokeWidth="1" strokeDasharray="2 6" />
      {pts.map((p, i) => {
        const next = pts[(i + 1) % total];
        const on = i === active;
        return (
          <g key={i}>
            <line x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="var(--rail)" strokeWidth="1" />
            <circle cx={p.x} cy={p.y} r={on ? 10 : 7} fill={on ? 'var(--beam)' : 'var(--panel)'} stroke={on ? 'var(--beam)' : 'var(--rail)'} strokeWidth="1.4" style={{ transition: 'r 0.3s, fill 0.3s' }} />
            <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fill: on ? '#04070d' : 'var(--faint)', fontWeight: 700 }}>
              {i + 1}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={26} fill="var(--void)" stroke="var(--rail)" strokeWidth="1" />
      <text x={cx} y={cy + 4} textAnchor="middle" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fill: 'var(--beam)', fontWeight: 700 }}>
        AI
      </text>
    </svg>
  );
}

function InfoRow({ icon, label, value, href, last, newTab }: { icon: 'mail' | 'phone' | 'globe' | 'pin'; label: string; value: string; href?: string; last?: boolean; newTab?: boolean }) {
  const icons: Record<string, React.ReactNode> = {
    mail: <path d="M3 5h18v14H3z M3 5l9 7 9-7" />,
    phone: <path d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    pin: <><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.2" /></>,
  };
  const content = (
    <div className="flex items-start gap-3" style={{ padding: '0.7rem 0', borderBottom: last ? 'none' : '1px solid var(--rail-soft)' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--beam)" strokeWidth="1.6" style={{ marginTop: 2, flexShrink: 0 }}>{icons[icon]}</svg>
      <div>
        <div style={{ fontSize: '0.68rem', color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginTop: '0.1rem', lineHeight: 1.5 }}>{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      style={{ textDecoration: 'none', display: 'block' }}
      className="link-underline"
    >
      {content}
    </a>
  ) : content;
}

type FormState =
  | { phase: 'idle' }
  | { phase: 'sending' }
  | { phase: 'sent' }
  | { phase: 'error'; reason: 'not-configured' | 'rejected' | 'network'; payload: InquiryPayload };

function ContactForm({ t, lang }: { t: any; lang: Lang }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ phase: 'idle' });
  const f = t.contact.form;

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.phase === 'sending') return;

    const data = new FormData(e.currentTarget);
    const payload: InquiryPayload = {
      name: ((data.get('name') as string) || '').trim(),
      org: ((data.get('org') as string) || '').trim(),
      email: ((data.get('email') as string) || '').trim(),
      message: ((data.get('message') as string) || '').trim(),
      company: ((data.get('company') as string) || '').trim(),
    };

    setState({ phase: 'sending' });
    const result = await sendInquiry(payload, lang);

    if (result.ok) {
      formRef.current?.reset();
      setState({ phase: 'sent' });
    } else {
      setState({ phase: 'error', reason: result.reason, payload });
    }
  };

  if (state.phase === 'sent') {
    return (
      <div className="card latch" style={{ padding: '2.4rem 1.9rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            width: 48, height: 48, borderRadius: '50%', marginBottom: '1.2rem',
            background: 'rgba(69,224,168,0.12)', border: '1px solid var(--lock)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lock)" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{f.sentTitle}</div>
        <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '0.6rem' }}>
          {f.sentBody}
        </p>
        <button
          onClick={() => setState({ phase: 'idle' })}
          className="btn btn-ghost"
          style={{ marginTop: '1.6rem', padding: '0.7rem 1.4rem', fontSize: '0.85rem', alignSelf: 'flex-start' }}
        >
          {f.again}
        </button>
      </div>
    );
  }

  const sending = state.phase === 'sending';
  const errorText =
    state.phase === 'error'
      ? state.reason === 'network'
        ? f.failNetwork
        : state.reason === 'not-configured'
          ? f.failNotConfigured
          : f.failRejected
      : null;

  return (
    <form ref={formRef} onSubmit={submit} className="card" style={{ padding: '1.9rem' }}>
      <div style={{ ...mono('0.68rem'), color: 'var(--faint)', marginBottom: '1.4rem' }}>{t.contact.formTitle}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.contact.fields.name} name="name" required />
        <Field label={t.contact.fields.org} name="org" />
      </div>
      <div className="mt-4">
        <Field label={t.contact.fields.email} name="email" type="email" required />
      </div>
      <div className="mt-4">
        <label style={fieldLabel} htmlFor="inquiry-message">{t.contact.fields.message}</label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          rows={5}
          style={{ ...fieldInput, resize: 'vertical', fontFamily: 'inherit' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--beam)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--rail)')}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {errorText && state.phase === 'error' && (
        <div
          role="alert"
          className="latch"
          style={{
            marginTop: '1.4rem', padding: '1rem 1.1rem', borderRadius: 6,
            border: '1px solid var(--amp)', background: 'rgba(255,194,75,0.08)',
          }}
        >
          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--amp)' }}>{f.failTitle}</div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text)', fontWeight: 300, margin: '0.4rem 0 0.9rem' }}>
            {errorText}
          </p>
          <a
            href={mailtoFallback(state.payload, lang)}
            className="btn btn-ghost"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}
          >
            {f.mailFallback}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn btn-primary mt-6"
        style={{ padding: '0.85rem 1.8rem', fontSize: '0.92rem', width: '100%', opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}
      >
        {sending ? f.sending : state.phase === 'error' ? f.retry : t.contact.fields.submit}
      </button>
      <p style={{ fontSize: '0.72rem', color: 'var(--faint)', textAlign: 'center', margin: '0.9rem 0 0', lineHeight: 1.6 }}>
        {f.privacy}
      </p>
    </form>
  );
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label style={fieldLabel}>{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        style={fieldInput}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--beam)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--rail)')}
      />
    </div>
  );
}

const fieldLabel: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  color: 'var(--faint)',
  marginBottom: '0.4rem',
  letterSpacing: '0.02em',
};

const fieldInput: React.CSSProperties = {
  width: '100%',
  background: 'var(--panel)',
  border: '1px solid var(--rail)',
  borderRadius: 6,
  padding: '0.65rem 0.85rem',
  color: 'var(--text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};
