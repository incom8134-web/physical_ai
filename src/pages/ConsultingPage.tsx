import { useState } from 'react';
import { consultingAudiences, consultingProcess, consultingTopics } from '../content/consulting';
import { Reveal } from '../components/Reveal';
import { monoText } from '../components/typography';
import { useLanguage } from '../i18n/LanguageProvider';
import { asset } from '../lib/asset';
import { Breadcrumb, PageHero, SectionHeading, ProcessSteps, ClosingCta } from '../components/PageSections';

export function ConsultingPage({ onContact }: { onContact: () => void }) {
  const { language, t } = useLanguage();
  const copy = t.pages.consulting;
  const [activeKey, setActiveKey] = useState(consultingAudiences[0].key);
  const active = consultingAudiences.find(a => a.key === activeKey)!;

  return (
    <>
      <Breadcrumb label={language === 'ko' ? '지니에듀테크(주)' : 'JINIE EDUTECH'} eyebrow={copy.eyebrow} />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        ctaPrimaryLabel={copy.ctaPrimary}
        onCtaPrimary={onContact}
        ctaSecondaryLabel={copy.ctaSecondary}
        onCtaSecondary={() => document.getElementById('consulting-audience')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--orange)"
      />

      {/* AUDIENCE SEGMENTS */}
      <section
        id="consulting-audience"
        className="px-5 md:px-10 py-20 md:py-28"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.audienceEyebrow} title={copy.audienceTitle} />

          <div className="flex gap-2 flex-wrap mt-10 mb-8">
            {consultingAudiences.map(a => {
              const on = a.key === activeKey;
              return (
                <button
                  key={a.key}
                  onClick={() => setActiveKey(a.key)}
                  className="tab-button"
                  style={{
                    ...monoText('0.84rem'),
                    padding: '0.6rem 1.1rem',
                    borderRadius: 999,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: on ? 'var(--orange)' : 'var(--border)',
                    background: on ? 'var(--orange)' : 'transparent',
                    color: on ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: on ? 800 : 500,
                  }}
                >
                  {language === 'ko' ? a.label : a.labelEn}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <Reveal key={active.key}>
                <span style={{ ...monoText('0.84rem'), color: 'var(--orange)' }}>{active.eyebrow}</span>
                <h3
                  style={{
                    fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
                    lineHeight: 1.25,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    margin: '0.5rem 0 1.2rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {language === 'ko' ? active.headline : active.headlineEn}
                </h3>
                <p
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    maxWidth: '48ch',
                  }}
                >
                  {language === 'ko' ? active.desc : active.descEn}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="card" style={{ padding: '1.9rem' }}>
                <div style={{ ...monoText('0.78rem'), color: 'var(--text-subtle)', marginBottom: '1.2rem' }}>
                  {language === 'ko' ? '제공 서비스' : 'What we offer'}
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {(language === 'ko' ? active.offers : active.offersEn).map((o, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: '1rem',
                        padding: '0.75rem 0',
                        color: 'var(--text)',
                        fontWeight: 500,
                        borderTop: j === 0 ? 'none' : '1px solid var(--border-soft)',
                        display: 'flex',
                        gap: '0.7rem',
                      }}
                    >
                      <span style={{ color: 'var(--orange)', flexShrink: 0 }}>/</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS COVERED */}
      <section className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.topicsEyebrow} title={copy.topicsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {consultingTopics.map((tp, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card card-hover" style={{ padding: '1.6rem', height: '100%' }}>
                  <span style={{ ...monoText('0.84rem'), color: 'var(--accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, margin: '0.6rem 0 0.5rem' }}>
                    {language === 'ko' ? tp.title : tp.titleEn}
                  </div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.75,
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {language === 'ko' ? tp.desc : tp.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP POSTER */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={copy.posterEyebrow} title={copy.posterTitle} subtitle={copy.posterSubtitle} />
              <Reveal delay={180}>
                <div
                  className="card"
                  style={{ marginTop: '2rem', padding: '1.3rem 1.5rem', borderLeft: '3px solid var(--orange)' }}
                >
                  <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text)', fontWeight: 500, margin: 0 }}>
                    {copy.posterCaption}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <button
                  onClick={onContact}
                  className="btn btn-primary"
                  style={{ marginTop: '1.4rem', padding: '0.8rem 1.6rem', fontSize: '1rem', border: 'none' }}
                >
                  {copy.ctaPrimary}
                </button>
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-7">
              <div
                className="card"
                style={{ padding: '0.75rem', background: 'var(--surface-muted)', overflow: 'hidden' }}
              >
                <img
                  src={asset('images/consulting-poster.jpg')}
                  alt={copy.posterAlt}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.processEyebrow} title={copy.processTitle} />
          <div className="mt-10">
            <ProcessSteps
              steps={consultingProcess.map(s => ({
                step: s.step,
                title: language === 'ko' ? s.title : s.titleEn,
                desc: language === 'ko' ? s.desc : s.descEn,
              }))}
            />
          </div>
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
