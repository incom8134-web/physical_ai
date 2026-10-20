import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';
import { ExternalLinkIcon } from '../../components/ExternalLinkIcon';
import { MAIN_SITE_URL } from '../../config/site';
import { asset } from '../../lib/asset';

const TICKER_WORDS = [
  '해봇',
  'HAEBOT',
  'PHYSICAL AI',
  'MECANUM WHEELS',
  'DUAL-ARM MOBILE',
  'EDUCATION',
  'CONSULTING',
  'CS · AS',
  'SALES · RENTAL',
  'VLA',
  'SENSE · DECIDE · ACT',
  'OMNIDIRECTIONAL',
];

/** Navy opening band: title, calls to action, main-site card and the Haebot cut-out over a looping video. */
export function HeroSection() {
  const { language, t } = useLanguage();
  return (
    <>
      <section
        id="top"
        className="grid-bg theme-dark px-5 md:px-10 pt-32 md:pt-40 pb-16"
        style={{ borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
      >
        <HeroBackground />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(90deg, rgba(21,44,94,0.92) 0%, rgba(21,44,94,0.72) 45%, rgba(21,44,94,0.3) 100%),' +
              'linear-gradient(180deg, rgba(21,44,94,0.8) 0%, rgba(21,44,94,0.1) 38%, rgba(21,44,94,0.92) 100%)',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(60% 55% at 22% 8%, rgba(59,130,246,0.22), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="spin-slow"
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-6%',
            width: 420,
            height: 420,
            border: '1px dashed var(--border)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <div
                  className="inline-flex items-center gap-2.5 mb-7"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 999,
                  }}
                >
                  <span
                    className="pulse-dot"
                    style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }}
                  />
                  <span style={{ ...monoText('0.84rem'), color: 'var(--text-muted)' }}>{t.hero.eyebrow}</span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 6.2rem)',
                    lineHeight: 0.98,
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    margin: 0,
                  }}
                >
                  {t.hero.titleTop}
                  <br />
                  <span style={{ color: 'var(--accent)' }}>{t.hero.titleAccent}</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.85,
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    marginTop: '1.6rem',
                    maxWidth: '46ch',
                  }}
                >
                  {t.hero.subtitle}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="#services"
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 1.7rem', fontSize: '1rem' }}
                  >
                    {t.hero.ctaPrimary}
                  </a>
                  <a href="#contact" className="btn btn-ghost" style={{ padding: '0.85rem 1.7rem', fontSize: '1rem' }}>
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <a
                  href={MAIN_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover main-site-link theme-light"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginTop: '1.5rem',
                    maxWidth: 460,
                    padding: '0.9rem 1.1rem',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    borderLeft: '4px solid var(--accent)',
                  }}
                >
                  <img src={asset('logo-mark.png')} alt="" style={{ width: 40, height: 40, flexShrink: 0 }} />
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ ...monoText('0.78rem'), color: 'var(--accent)', display: 'block' }}>
                      {t.hero.mainSiteLabel} · jcodeedu.com
                    </span>
                    <span style={{ display: 'block', fontWeight: 800, fontSize: '1.08rem', marginTop: '0.15rem' }}>
                      {t.hero.mainSiteTitle}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.92rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.15rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {t.hero.mainSiteDesc}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="main-site-link-arrow"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--accent)',
                      color: '#ffffff',
                    }}
                  >
                    <ExternalLinkIcon size={15} />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={320}>
                <div className="grid grid-cols-3 gap-4 mt-12 max-w-md">
                  {t.hero.stats.map(stat => (
                    <div key={stat.label}>
                      <div style={{ ...monoText('1.5rem'), fontWeight: 800, color: 'var(--accent)' }}>{stat.value}</div>
                      <div
                        style={{
                          fontSize: '0.84rem',
                          color: 'var(--text-subtle)',
                          marginTop: '0.2rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5" style={{ position: 'relative', zIndex: 1 }}>
              <Reveal delay={200}>
                {/* Haebot cut out of its render backdrop, standing directly on the page */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      left: '-10%',
                      right: '-10%',
                      top: '4%',
                      bottom: '10%',
                      background: 'radial-gradient(48% 46% at 50% 44%, rgba(59,130,246,0.35), transparent 72%)',
                      filter: 'blur(14px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <picture className="hero-float" style={{ position: 'relative', display: 'block' }}>
                    <source srcSet={asset('images/haebot-cutout.webp')} type="image/webp" />
                    <img
                      src={asset('images/haebot-cutout.png')}
                      alt="해봇 (Haebot) — 지니에듀테크(주)가 자체 개발한 메카넘 휠 양팔 이동형 로봇"
                      width={554}
                      height={921}
                      style={{
                        display: 'block',
                        width: 'auto',
                        height: 'auto',
                        maxHeight: 'min(600px, 68vh)',
                        maxWidth: '100%',
                        filter: 'drop-shadow(0 24px 34px rgba(0,0,0,0.5))',
                      }}
                    />
                  </picture>
                  {/* floor shadow under the wheels */}
                  <div
                    aria-hidden
                    style={{
                      width: '62%',
                      height: 26,
                      marginTop: -18,
                      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.55), transparent 72%)',
                    }}
                  />
                  <div
                    className="inline-flex items-center gap-2 mt-3"
                    style={{
                      border: '1px solid var(--border)',
                      background: 'rgba(255,255,255,0.08)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 999,
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>
                      {language === 'ko' ? '해봇' : 'Haebot'}
                    </span>
                    <span style={{ ...monoText('0.78rem'), color: 'var(--green)' }}>
                      {language === 'ko' ? 'Haebot' : '해봇'}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword ticker under the hero */}
      <div
        className="theme-dark"
        style={{ background: '#10244f', borderTop: '1px solid var(--border)', overflow: 'hidden', padding: '0.7rem 0' }}
      >
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {TICKER_WORDS.map((tx, j) => (
                <span
                  key={j}
                  style={{
                    ...monoText('0.84rem'),
                    color: 'var(--text-subtle)',
                    whiteSpace: 'nowrap',
                    padding: '0 1.8rem',
                  }}
                >
                  {tx}
                  <span style={{ color: 'var(--accent)', marginLeft: '1.8rem', opacity: 0.5 }}>/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Looping, muted background video for the hero. Visitors who ask the OS for
 * reduced motion get a still image instead, and the video pauses while
 * the hero is scrolled out of view so it isn't decoding off-screen.
 */
function HeroBackground() {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowMotion] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Autoplay is only permitted while muted; set it as a property too, since
    // React does not always reflect `muted` onto the element in time.
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowMotion]);

  const layer: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  if (!allowMotion) {
    return (
      <div
        aria-hidden
        style={{
          ...layer,
          backgroundImage: `url(${asset('images/hero-bg.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 68%',
          opacity: 0.4,
        }}
      />
    );
  }

  return (
    <video
      ref={ref}
      aria-hidden
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={asset('video/hero-loop-poster.jpg')}
      style={{ ...layer, objectFit: 'cover', objectPosition: 'center center', opacity: 0.85 }}
    >
      {/* WebM first (smaller; also plays in Chromium builds without H.264), MP4 for Safari/older browsers */}
      <source src={asset('video/hero-loop.webm')} type="video/webm" />
      <source src={asset('video/hero-loop.mp4')} type="video/mp4" />
    </video>
  );
}
