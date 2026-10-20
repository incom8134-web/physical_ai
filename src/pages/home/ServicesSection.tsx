import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';
import { asset } from '../../lib/asset';
import type { Page } from '../../lib/navigation';

/** Colour of each service card, matching its own subpage. */
const serviceAccents: Record<string, { color: string; soft: string; ink: string }> = {
  Education: { color: 'var(--accent)', soft: 'rgba(29,91,214,0.07)', ink: '#ffffff' },
  Consulting: { color: 'var(--orange)', soft: 'rgba(180,95,6,0.07)', ink: '#ffffff' },
  Support: { color: 'var(--cyan)', soft: 'rgba(14,116,144,0.07)', ink: '#ffffff' },
  Rental: { color: 'var(--green)', soft: 'rgba(10,138,95,0.07)', ink: '#ffffff' },
};

/** Subpage behind each service card's "learn more" button. */
const servicePages: Record<string, Page> = {
  Education: 'education',
  Consulting: 'consulting',
  Support: 'support',
  Rental: 'rental',
};

/** The four services (education, consulting, CS/AS, rental) with the company intro video above them. */
export function ServicesSection({ onOpenPage }: { onOpenPage: (page: Page) => void }) {
  const { language, t } = useLanguage();
  return (
    <section id="services" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>{t.services.eyebrow}</span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                style={{
                  fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
                  lineHeight: 1.2,
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  margin: '0.4rem 0 0',
                  whiteSpace: 'pre-line',
                }}
              >
                {t.services.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                fontWeight: 500,
                maxWidth: '36ch',
                margin: 0,
              }}
            >
              {t.services.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div style={{ marginBottom: '2.5rem' }}>
            <IntroVideo labels={t.services.video} large />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {t.services.items.map((s, i) => {
            const accent = serviceAccents[s.tag] ?? serviceAccents.Education;
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
                    ['--card-accent' as string]: accent.color,
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
                          ...monoText('0.78rem'),
                          color: accent.ink,
                          background: accent.color,
                          padding: '0.22rem 0.55rem',
                          borderRadius: 3,
                          fontWeight: 800,
                        }}
                      >
                        {s.tagLabel}
                      </span>
                      <span style={{ ...monoText('0.78rem'), color: accent.color }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div
                      style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.015em', marginBottom: '0.5rem' }}
                    >
                      {s.title}
                    </div>
                    <div className="flex gap-1.5 flex-wrap mb-4">
                      {s.audience.map((a, j) => (
                        <span
                          key={j}
                          style={{
                            ...monoText('0.78rem'),
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border)',
                            padding: '0.2rem 0.45rem',
                            borderRadius: 2,
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        marginBottom: '1.4rem',
                      }}
                    >
                      {s.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.4rem' }}>
                      {s.points.map((p, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: '0.92rem',
                            padding: '0.5rem 0',
                            color: 'var(--text)',
                            fontWeight: 500,
                            borderTop: '1px solid var(--border-soft)',
                            display: 'flex',
                            gap: '0.6rem',
                          }}
                        >
                          <span style={{ color: accent.color, flexShrink: 0 }}>/</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    {servicePages[s.tag] && (
                      <button
                        onClick={() => onOpenPage(servicePages[s.tag])}
                        className="btn"
                        style={{
                          marginTop: 'auto',
                          paddingTop: '0.65rem',
                          paddingBottom: '0.65rem',
                          fontSize: '0.92rem',
                          width: '100%',
                          background: 'transparent',
                          color: accent.color,
                          border: `1px solid ${accent.color}`,
                        }}
                      >
                        {language === 'ko' ? '자세히 보기' : 'Learn more'}
                        <span aria-hidden style={{ marginLeft: 4 }}>
                          →
                        </span>
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
  );
}

/**
 * Company intro film. It starts muted (browsers only autoplay silent video)
 * and plays while on screen; the viewer can turn the sound on or pause it.
 */
function IntroVideo({
  labels,
  large,
}: {
  labels: { title: string; soundOn: string; soundOff: string; play: string; pause: string };
  large?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  // Paused by the viewer: don't restart it when it scrolls back into view.
  const userPaused = useRef(false);
  const [allowMotion] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (allowMotion && !userPaused.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowMotion]);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // Turning the sound on is a request to hear it, so start playback too.
    if (!v.muted && v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  // Sizes live in index.css (.video-control): the large variant only grows from tablet width up.
  const ctrl = `video-control${large ? ' video-control-large' : ''}`;

  return (
    <div className="card" style={{ padding: large ? '0.75rem' : '0.6rem', overflow: 'hidden' }}>
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          borderRadius: large ? 12 : 10,
          overflow: 'hidden',
          background: '#eef2f8',
        }}
      >
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset('video/haebot-intro-poster.jpg')}
          aria-label={labels.title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={e => setMuted(e.currentTarget.muted)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          {/* WebM first (also plays in Chromium builds without H.264), MP4 for Safari */}
          <source src={asset('video/haebot-intro.webm')} type="video/webm" />
          <source src={asset('video/haebot-intro.mp4')} type="video/mp4" />
        </video>
        <div className={`video-controls${large ? ' video-controls-large' : ''}`}>
          <button type="button" onClick={togglePlay} className={ctrl} aria-label={playing ? labels.pause : labels.play}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              {playing ? (
                <>
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </>
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>
          <button type="button" onClick={toggleSound} className={ctrl} aria-pressed={!muted}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
              {muted ? (
                <>
                  <path d="M22 9l-6 6" />
                  <path d="M16 9l6 6" />
                </>
              ) : (
                <>
                  <path d="M15.5 8.5a5 5 0 010 7" />
                  <path d="M18.5 5.5a9 9 0 010 13" />
                </>
              )}
            </svg>
            {muted ? labels.soundOn : labels.soundOff}
          </button>
        </div>
      </div>
    </div>
  );
}
