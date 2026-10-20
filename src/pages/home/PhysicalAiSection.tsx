import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';

/** Blue band explaining what physical AI is: comparison table and survey figures. */
export function PhysicalAiSection() {
  const { t } = useLanguage();
  return (
    <section id="physical-ai" className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto mb-12 md:mb-16">
        <Reveal>
          <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>{t.physicalAi.eyebrow}</span>
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
            {t.physicalAi.title}
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
              maxWidth: '56ch',
            }}
          >
            {t.physicalAi.subtitle}
          </p>
        </Reveal>
      </div>
      {/* WHAT IS PHYSICAL AI */}
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Reveal>
                <h3
                  style={{
                    fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                    lineHeight: 1.3,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {t.whatIs.title}
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <p
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    marginTop: '1.4rem',
                    maxWidth: '46ch',
                  }}
                >
                  {t.whatIs.body1}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    color: 'var(--text)',
                    fontWeight: 500,
                    marginTop: '1.1rem',
                    maxWidth: '46ch',
                  }}
                >
                  {t.whatIs.body2}
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10">
                  <div style={{ ...monoText('0.84rem'), color: 'var(--text-subtle)', marginBottom: '0.8rem' }}>
                    {t.whatIs.compareTitle}
                  </div>
                  <div className="card" style={{ overflow: 'hidden' }}>
                    <div
                      className="grid grid-cols-3"
                      style={{ background: 'var(--surface-muted)', borderBottom: '1px solid var(--border)' }}
                    >
                      <div style={{ padding: '0.7rem 0.9rem' }} />
                      <div style={{ padding: '0.7rem 0.9rem', ...monoText('0.78rem'), color: 'var(--text-subtle)' }}>
                        SOFTWARE AI
                      </div>
                      <div style={{ padding: '0.7rem 0.9rem', ...monoText('0.78rem'), color: 'var(--accent)' }}>
                        PHYSICAL AI
                      </div>
                    </div>
                    {t.whatIs.compare.map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3"
                        style={{ borderTop: i ? '1px solid var(--border-soft)' : 'none' }}
                      >
                        <div
                          style={{
                            padding: '0.8rem 0.9rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                          }}
                        >
                          {row.label}
                        </div>
                        <div
                          style={{
                            padding: '0.8rem 0.9rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-subtle)',
                            fontWeight: 500,
                          }}
                        >
                          {row.software}
                        </div>
                        <div
                          style={{
                            padding: '0.8rem 0.9rem',
                            fontSize: '0.92rem',
                            color: 'var(--text)',
                            fontWeight: 500,
                          }}
                        >
                          {row.physical}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="card" style={{ padding: 0 }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span style={{ ...monoText('0.84rem'), color: 'var(--text-muted)' }}>{t.whatIs.statsTitle}</span>
                </div>
                <div className="p-5">
                  {t.whatIs.stats.map((stat, i) => (
                    <div key={i} style={{ marginTop: i ? '1.3rem' : 0 }}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>{stat.label}</span>
                        <span
                          style={{
                            ...monoText('1rem'),
                            fontWeight: 800,
                            color: i === 1 ? 'var(--orange)' : 'var(--accent)',
                          }}
                        >
                          {stat.percent}%
                        </span>
                      </div>
                      <div
                        style={{ height: 4, background: 'var(--surface-muted)', borderRadius: 2, overflow: 'hidden' }}
                      >
                        <div
                          className="bar-grow"
                          style={{
                            width: `${stat.percent}%`,
                            height: '100%',
                            background: i === 1 ? 'var(--orange)' : 'var(--accent)',
                            borderRadius: 2,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  <p
                    style={{
                      ...monoText('0.78rem'),
                      color: 'var(--text-subtle)',
                      marginTop: '1.6rem',
                      marginBottom: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {t.whatIs.source}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
