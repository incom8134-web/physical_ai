import { useState } from 'react';
import type { Lang } from './i18n';
import { consultingAudiences, consultingProcess, consultingTopics } from './data';
import { Reveal } from './useReveal';
import { asset } from './asset';
import { Breadcrumb, PageHero, SectionHeading, StepRail, FinalCta, mono } from './pageUtils';

export default function ConsultingPage({ lang, t, onContact }: { lang: Lang; t: any; onContact: () => void }) {
  const p = t.pages.consulting;
  const [activeKey, setActiveKey] = useState(consultingAudiences[0].key);
  const active = consultingAudiences.find(a => a.key === activeKey)!;

  return (
    <>
      <Breadcrumb label={lang === 'ko' ? '지니에듀테크' : 'JINIE EDUTECH'} eyebrow={p.eyebrow} />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        ctaPrimaryLabel={p.ctaPrimary}
        onCtaPrimary={onContact}
        ctaSecondaryLabel={p.ctaSecondary}
        onCtaSecondary={() => document.getElementById('consulting-audience')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--amp)"
      />

      {/* AUDIENCE SEGMENTS */}
      <section id="consulting-audience" className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.audienceEyebrow} title={p.audienceTitle} />

          <div className="flex gap-2 flex-wrap mt-10 mb-8">
            {consultingAudiences.map(a => {
              const on = a.key === activeKey;
              return (
                <button
                  key={a.key}
                  onClick={() => setActiveKey(a.key)}
                  className="step-btn"
                  style={{
                    ...mono('0.72rem'), padding: '0.6rem 1.1rem', borderRadius: 999, cursor: 'pointer',
                    border: '1px solid', borderColor: on ? 'var(--amp)' : 'var(--rail)',
                    background: on ? 'var(--amp)' : 'transparent',
                    color: on ? '#1a1200' : 'var(--dim)', fontWeight: on ? 700 : 400,
                  }}
                >
                  {lang === 'ko' ? a.label : a.labelEn}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <Reveal key={active.key}>
                <span style={{ ...mono('0.68rem'), color: 'var(--amp)' }}>{active.eyebrow}</span>
                <h3 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', lineHeight: 1.25, fontWeight: 700, letterSpacing: '-0.02em', margin: '0.5rem 0 1.2rem', whiteSpace: 'pre-line' }}>
                  {lang === 'ko' ? active.headline : active.headlineEn}
                </h3>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.85, color: 'var(--dim)', fontWeight: 300, maxWidth: '48ch' }}>
                  {lang === 'ko' ? active.desc : active.descEn}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="card" style={{ padding: '1.9rem' }}>
                <div style={{ ...mono('0.66rem'), color: 'var(--faint)', marginBottom: '1.2rem' }}>
                  {lang === 'ko' ? '제공 서비스' : 'What we offer'}
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {(lang === 'ko' ? active.offers : active.offersEn).map((o, j) => (
                    <li key={j} style={{ fontSize: '0.92rem', padding: '0.75rem 0', color: 'var(--text)', fontWeight: 300, borderTop: j === 0 ? 'none' : '1px solid var(--rail-soft)', display: 'flex', gap: '0.7rem' }}>
                      <span style={{ color: 'var(--amp)', flexShrink: 0 }}>/</span>{o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS COVERED */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.topicsEyebrow} title={p.topicsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {consultingTopics.map((tp, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card card-hover" style={{ padding: '1.6rem', height: '100%' }}>
                  <span style={{ ...mono('0.68rem'), color: 'var(--beam)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ fontSize: '1.02rem', fontWeight: 600, margin: '0.6rem 0 0.5rem' }}>{lang === 'ko' ? tp.title : tp.titleEn}</div>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 300, margin: 0 }}>{lang === 'ko' ? tp.desc : tp.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP POSTER */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={p.posterEyebrow} title={p.posterTitle} subtitle={p.posterSubtitle} />
              <Reveal delay={180}>
                <div
                  className="card"
                  style={{ marginTop: '2rem', padding: '1.3rem 1.5rem', borderLeft: '3px solid var(--amp)' }}
                >
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text)', fontWeight: 400, margin: 0 }}>
                    {p.posterCaption}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <button
                  onClick={onContact}
                  className="btn btn-primary"
                  style={{ marginTop: '1.4rem', padding: '0.8rem 1.6rem', fontSize: '0.88rem', border: 'none' }}
                >
                  {p.ctaPrimary}
                </button>
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-7">
              <div
                className="card"
                style={{ padding: '0.75rem', background: 'var(--panel)', overflow: 'hidden' }}
              >
                <img
                  src={asset('images/consulting-poster.jpg')}
                  alt={p.posterAlt}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.processEyebrow} title={p.processTitle} />
          <div className="mt-10">
            <StepRail steps={consultingProcess.map(s => ({ step: s.step, title: lang === 'ko' ? s.title : s.titleEn, desc: lang === 'ko' ? s.desc : s.descEn }))} />
          </div>
        </div>
      </section>

      <FinalCta title={p.finalTitle} subtitle={p.finalSubtitle} ctaLabel={t.pages.contactCta} onCta={onContact} />
    </>
  );
}
