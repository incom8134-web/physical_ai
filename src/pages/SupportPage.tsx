import { supportAreas, supportAudiences, supportJourney, supportProcess } from '../content/support';
import { Reveal } from '../components/Reveal';
import { monoText } from '../components/typography';
import { useLanguage } from '../i18n/LanguageProvider';
import { Breadcrumb, PageHero, SectionHeading, ProcessSteps, ClosingCta } from '../components/PageSections';

export function SupportPage({ onContact }: { onContact: () => void }) {
  const { language, t } = useLanguage();
  const copy = t.pages.support;
  const ko = language === 'ko';

  return (
    <>
      <Breadcrumb label={ko ? '지니에듀테크(주)' : 'JINIE EDUTECH'} eyebrow={copy.eyebrow} />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        ctaPrimaryLabel={copy.ctaPrimary}
        onCtaPrimary={onContact}
        ctaSecondaryLabel={copy.ctaSecondary}
        onCtaSecondary={() => document.getElementById('support-areas')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--cyan)"
      />

      {/* WHAT WE SUPPORT — white */}
      <section
        id="support-areas"
        className="px-5 md:px-10 py-20 md:py-28"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.areasEyebrow} title={copy.areasTitle} subtitle={copy.areasSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {supportAreas.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card card-hover" style={{ padding: 0, height: '100%', overflow: 'hidden' }}>
                  <span aria-hidden style={{ display: 'block', height: 3, background: 'var(--cyan)' }} />
                  <div style={{ padding: '1.8rem' }}>
                    <span style={{ ...monoText('1.2rem'), color: 'var(--cyan)', fontWeight: 800 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        margin: '0.7rem 0 0.6rem',
                      }}
                    >
                      {ko ? a.title : a.titleEn}
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
                      {ko ? a.desc : a.descEn}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — blue */}
      <section className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.audienceEyebrow} title={copy.audienceTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {supportAudiences.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card" style={{ padding: '1.6rem', height: '100%' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{ko ? a.title : a.titleEn}</div>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      margin: '0.6rem 0 0',
                    }}
                  >
                    {ko ? a.desc : a.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — white */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.processEyebrow} title={copy.processTitle} />
          <div className="mt-10">
            <ProcessSteps
              steps={supportProcess.map(s => ({
                step: s.step,
                title: ko ? s.title : s.titleEn,
                desc: ko ? s.desc : s.descEn,
              }))}
            />
          </div>
        </div>
      </section>

      {/* WHERE CS/AS FITS + SCOPE — blue */}
      <section className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.journeyEyebrow} title={copy.journeyTitle} subtitle={copy.journeySubtitle} />
          <ol
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10"
            style={{ listStyle: 'none', padding: 0 }}
          >
            {supportJourney.map((j, i) => {
              const on = i === supportJourney.length - 1;
              return (
                <Reveal key={i} delay={i * 60}>
                  <li
                    style={{
                      height: '100%',
                      padding: '1.1rem 1.2rem',
                      borderRadius: 12,
                      border: `1px solid ${on ? 'var(--cyan)' : 'var(--border)'}`,
                      background: on ? 'var(--cyan-soft)' : 'var(--surface)',
                    }}
                  >
                    <span style={{ ...monoText('0.84rem'), color: on ? 'var(--cyan)' : 'var(--text-subtle)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div style={{ fontSize: '1.08rem', fontWeight: 800, marginTop: '0.35rem' }}>
                      {ko ? j.title : j.titleEn}
                    </div>
                    <div
                      style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.2rem' }}
                    >
                      {ko ? j.desc : j.descEn}
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={200}>
            <div
              className="card"
              style={{ marginTop: '2rem', padding: '1.5rem 1.7rem', borderLeft: '4px solid var(--cyan)' }}
            >
              <div style={{ fontSize: '1.08rem', fontWeight: 800 }}>{copy.scopeTitle}</div>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  margin: '0.4rem 0 0',
                }}
              >
                {copy.scopeBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title={copy.finalTitle}
        subtitle={copy.finalSubtitle}
        ctaLabel={t.pages.contactCta}
        onCta={onContact}
      />
    </>
  );
}
