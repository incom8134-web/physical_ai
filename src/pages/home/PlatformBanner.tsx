import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';
import { asset } from '../../lib/asset';

/** White band over a photo of robots: one robot from classroom to industry. */
export function PlatformBanner() {
  const { t } = useLanguage();
  return (
    <section className="theme-light" style={{ position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
      <div style={{ position: 'relative', minHeight: 340 }}>
        <img
          src={asset('images/platforms-bg.jpg')}
          alt=""
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 100%)',
          }}
        />
        <div
          className="max-w-screen-xl mx-auto px-5 md:px-10 h-full flex items-center"
          style={{ position: 'relative', minHeight: 340 }}
        >
          <Reveal>
            <div style={{ maxWidth: '32ch' }}>
              <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>{t.banner.eyebrow}</span>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  margin: '0.5rem 0 0',
                }}
              >
                {t.banner.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  marginTop: '1rem',
                }}
              >
                {t.banner.subtitle}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
