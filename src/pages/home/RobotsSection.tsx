import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';
import { asset } from '../../lib/asset';

/** Photos of Haebot, in the same order as t.robots.items. */
const haebotPhotos: { src: string; position: string }[] = [
  { src: '/images/haebot-full.jpg', position: 'center center' },
  { src: '/images/haebot-mecanum.jpg', position: 'center center' },
  { src: '/images/haebot-lab.jpg', position: 'center center' },
];

function RobotMedia({ src, position, alt }: { src: string; position: string; alt: string }) {
  return (
    <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 8, background: 'var(--surface-muted)' }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }}
      />
    </div>
  );
}

/** Blue band introducing Haebot, with three photos of the same robot. */
export function RobotsSection() {
  const { t } = useLanguage();
  return (
    <section id="robots" className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto">
        <Reveal>
          <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>{t.robots.eyebrow}</span>
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
            {t.robots.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              fontWeight: 500,
              marginTop: '1rem',
              marginBottom: '3rem',
              maxWidth: '52ch',
            }}
          >
            {t.robots.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.robots.items.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card card-hover" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ padding: '0.6rem' }}>
                  <RobotMedia
                    src={asset(haebotPhotos[i].src)}
                    position={haebotPhotos[i].position}
                    alt={`${r.name} — ${r.type}`}
                  />
                </div>
                <div className="p-5" style={{ borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', letterSpacing: '-0.01em' }}>{r.name}</div>
                  <div className="flex items-center gap-2 mt-1.5 mb-3.5 flex-wrap">
                    <span style={{ ...monoText('0.78rem'), color: 'var(--accent)' }}>{r.type}</span>
                    <span style={{ color: 'var(--border)' }}>|</span>
                    <span style={{ ...monoText('0.78rem'), color: 'var(--text-subtle)' }}>{r.spec}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={320}>
          <p style={{ ...monoText('0.78rem'), color: 'var(--text-subtle)', marginTop: '1.6rem', lineHeight: 1.7 }}>
            {t.robots.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
