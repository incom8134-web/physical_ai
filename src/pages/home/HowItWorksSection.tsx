import { useEffect, useState } from 'react';
import { Reveal } from '../../components/Reveal';
import { monoText } from '../../components/typography';
import { useLanguage } from '../../i18n/LanguageProvider';

/** Sense → decide → act → improve, as tabs that advance on their own until the visitor picks one. */
export function HowItWorksSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const stepCount = t.howItWorks.steps.length;
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActiveStep(step => (step + 1) % stepCount), 3200);
    return () => clearInterval(timer);
  }, [autoPlay, stepCount]);

  return (
    <section className="px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <Reveal>
            <span style={{ ...monoText('0.84rem'), color: 'var(--green)' }}>{t.physicalAi.loopEyebrow}</span>
          </Reveal>
          <Reveal delay={60}>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                lineHeight: 1.3,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '0.4rem 0 0',
                whiteSpace: 'pre-line',
              }}
            >
              {t.howItWorks.title}
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                fontWeight: 500,
                marginTop: '1rem',
                marginBottom: '2.8rem',
                maxWidth: '52ch',
              }}
            >
              {t.howItWorks.subtitle}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="card" style={{ overflow: 'hidden' }}>
              {/* loop rail */}
              <div className="flex" style={{ borderBottom: '1px solid var(--border)' }}>
                {t.howItWorks.steps.map((s, i) => {
                  const on = i === activeStep;
                  return (
                    <button
                      key={s.key}
                      role="tab"
                      aria-selected={on}
                      className="tab-button"
                      onClick={() => {
                        setAutoPlay(false);
                        setActiveStep(i);
                      }}
                      style={{
                        flex: 1,
                        border: 'none',
                        borderRight: i < t.howItWorks.steps.length - 1 ? '1px solid var(--border)' : 'none',
                        padding: '1rem 0.5rem',
                        cursor: 'pointer',
                        background: on ? 'var(--accent)' : 'var(--surface-muted)',
                        color: on ? '#ffffff' : 'var(--text-muted)',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ ...monoText('0.78rem'), opacity: 0.75 }}>{String(i + 1).padStart(2, '0')}</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '0.2rem' }}>{s.title}</div>
                    </button>
                  );
                })}
              </div>

              <div key={activeStep} className="fade-in-up grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
                <div className="md:col-span-7">
                  <p
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: 1.85,
                      color: 'var(--text)',
                      fontWeight: 500,
                      margin: 0,
                      maxWidth: '48ch',
                    }}
                  >
                    {t.howItWorks.steps[activeStep].desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {t.howItWorks.steps[activeStep].tech.map((tx, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.92rem',
                          padding: '0.32rem 0.7rem',
                          border: '1px solid var(--border)',
                          borderRadius: 4,
                          color: 'var(--text)',
                        }}
                      >
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
      </div>
    </section>
  );
}

function LoopDiagram({ active, total }: { active: number; total: number }) {
  const size = 260;
  const r = 92;
  const cx = size / 2;
  const cy = size / 2;
  const pts = Array.from({ length: total }, (_, i) => {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-hidden="true">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--text-subtle)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeDasharray="2 6"
      />
      {pts.map((p, i) => {
        const next = pts[(i + 1) % total];
        const on = i === active;
        return (
          <g key={i}>
            <line
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke="var(--text-subtle)"
              strokeOpacity="0.35"
              strokeWidth="1.4"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={on ? 17 : 13}
              fill={on ? 'var(--accent)' : 'var(--surface-muted)'}
              stroke={on ? 'var(--accent)' : 'var(--text-subtle)'}
              strokeOpacity={on ? 1 : 0.5}
              strokeWidth="1.6"
              style={{ transition: 'r 0.3s, fill 0.3s' }}
            />
            <text
              x={p.x}
              y={p.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 14,
                fill: on ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 800,
              }}
            >
              {i + 1}
            </text>
          </g>
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r={34}
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeOpacity="0.4"
        strokeWidth="1.4"
      />
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 16, fill: 'var(--accent)', fontWeight: 800 }}
      >
        AI
      </text>
    </svg>
  );
}
