import type { Lang } from './i18n';
import { supportAreas, supportAudiences, supportJourney, supportProcess } from './data';
import { Reveal } from './useReveal';
import { Breadcrumb, PageHero, SectionHeading, StepRail, FinalCta, mono } from './pageUtils';

export default function SupportPage({ lang, t, onContact }: { lang: Lang; t: any; onContact: () => void }) {
  const p = t.pages.support;
  const ko = lang === 'ko';

  return (
    <>
      <Breadcrumb label={ko ? '지니에듀테크(주)' : 'JINIE EDUTECH'} eyebrow={p.eyebrow} />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        ctaPrimaryLabel={p.ctaPrimary}
        onCtaPrimary={onContact}
        ctaSecondaryLabel={p.ctaSecondary}
        onCtaSecondary={() => document.getElementById('support-areas')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--sky)"
      />

      {/* WHAT WE SUPPORT — white */}
      <section id="support-areas" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.areasEyebrow} title={p.areasTitle} subtitle={p.areasSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {supportAreas.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card card-hover" style={{ padding: 0, height: '100%', overflow: 'hidden' }}>
                  <span aria-hidden style={{ display: 'block', height: 3, background: 'var(--sky)' }} />
                  <div style={{ padding: '1.8rem' }}>
                    <span style={{ ...mono('1.2rem'), color: 'var(--sky)', fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.01em', margin: '0.7rem 0 0.6rem' }}>{ko ? a.title : a.titleEn}</div>
                    <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 500, margin: 0 }}>{ko ? a.desc : a.descEn}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — blue */}
      <section className="sheet theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.audienceEyebrow} title={p.audienceTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {supportAudiences.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card" style={{ padding: '1.6rem', height: '100%' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{ko ? a.title : a.titleEn}</div>
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 500, margin: '0.6rem 0 0' }}>{ko ? a.desc : a.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — white */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.processEyebrow} title={p.processTitle} />
          <div className="mt-10">
            <StepRail steps={supportProcess.map(s => ({ step: s.step, title: ko ? s.title : s.titleEn, desc: ko ? s.desc : s.descEn }))} />
          </div>
        </div>
      </section>

      {/* WHERE CS/AS FITS + SCOPE — blue */}
      <section className="sheet theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.journeyEyebrow} title={p.journeyTitle} subtitle={p.journeySubtitle} />
          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10" style={{ listStyle: 'none', padding: 0 }}>
            {supportJourney.map((j, i) => {
              const on = i === supportJourney.length - 1;
              return (
                <Reveal key={i} delay={i * 60}>
                  <li
                    style={{
                      height: '100%', padding: '1.1rem 1.2rem', borderRadius: 12,
                      border: `1px solid ${on ? 'var(--sky)' : 'var(--rail)'}`,
                      background: on ? 'var(--sky-soft)' : 'var(--deck)',
                    }}
                  >
                    <span style={{ ...mono('0.84rem'), color: on ? 'var(--sky)' : 'var(--faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div style={{ fontSize: '1.08rem', fontWeight: 800, marginTop: '0.35rem' }}>{ko ? j.title : j.titleEn}</div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--dim)', fontWeight: 500, marginTop: '0.2rem' }}>{ko ? j.desc : j.descEn}</div>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={200}>
            <div className="card" style={{ marginTop: '2rem', padding: '1.5rem 1.7rem', borderLeft: '4px solid var(--sky)' }}>
              <div style={{ fontSize: '1.08rem', fontWeight: 800 }}>{p.scopeTitle}</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 500, margin: '0.4rem 0 0' }}>{p.scopeBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta title={p.finalTitle} subtitle={p.finalSubtitle} ctaLabel={t.pages.contactCta} onCta={onContact} />
    </>
  );
}
