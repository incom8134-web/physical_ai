import { rentalRobots, rentalUseCases, rentalProcess } from '../content/rental';
import { Reveal } from '../components/Reveal';
import { monoText } from '../components/typography';
import { useLanguage } from '../i18n/LanguageProvider';
import { asset } from '../lib/asset';
import { Breadcrumb, PageHero, SectionHeading, ProcessSteps, ClosingCta, Chip } from '../components/PageSections';
import { PosterCarousel } from '../components/PosterCarousel';

export function RentalPage({ onContact }: { onContact: () => void }) {
  const { language, t } = useLanguage();
  const copy = t.pages.rental;

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
        onCtaSecondary={() => document.getElementById('rental-robots')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--green)"
      />

      {/* USE CASES */}
      <section className="px-5 md:px-10 py-16 md:py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.useCaseEyebrow} title={copy.useCaseTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {rentalUseCases.map((u, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card card-hover" style={{ padding: '1.4rem', height: '100%' }}>
                  <span style={{ ...monoText('0.78rem'), color: 'var(--green)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ fontSize: '1.08rem', fontWeight: 700, margin: '0.5rem 0 0.4rem' }}>
                    {language === 'ko' ? u.title : u.titleEn}
                  </div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {language === 'ko' ? u.desc : u.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROBOTS */}
      <section id="rental-robots" className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.robotsEyebrow} title={copy.robotsTitle} />

          <div className="flex flex-col gap-8 mt-10">
            {rentalRobots.map((r, i) => (
              <Reveal key={r.key} delay={i * 100}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div
                      className="md:col-span-4"
                      style={{
                        padding: '0.75rem',
                        background: 'radial-gradient(60% 70% at 50% 55%, rgba(10,138,95,0.06), transparent 70%)',
                      }}
                    >
                      <div style={{ aspectRatio: '4 / 3', width: '100%', overflow: 'hidden', borderRadius: 8 }}>
                        <img
                          src={asset(r.image)}
                          alt={language === 'ko' ? r.name : r.nameEn}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    </div>
                    <div
                      className="md:col-span-8 p-6 md:p-8"
                      style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                          {language === 'ko' ? r.name : r.nameEn}
                        </div>
                        <span style={{ ...monoText('0.84rem'), color: 'var(--green)' }}>
                          {language === 'ko' ? r.tagline : r.taglineEn}
                        </span>
                      </div>
                      <div className="flex gap-1.5 flex-wrap my-3">
                        {r.specs.map((s, j) => (
                          <Chip key={j}>
                            {language === 'ko' ? s.label : s.labelEn} · {language === 'ko' ? s.value : s.valueEn}
                          </Chip>
                        ))}
                      </div>
                      <p
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.8,
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                          marginBottom: '1.4rem',
                        }}
                      >
                        {language === 'ko' ? r.desc : r.descEn}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <div style={{ ...monoText('0.78rem'), color: 'var(--text-subtle)', marginBottom: '0.6rem' }}>
                            {copy.bestForLabel}
                          </div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {(language === 'ko' ? r.bestFor : r.bestForEn).map((b, j) => (
                              <li
                                key={j}
                                style={{
                                  fontSize: '0.92rem',
                                  padding: '0.35rem 0',
                                  color: 'var(--text)',
                                  fontWeight: 500,
                                  display: 'flex',
                                  gap: '0.5rem',
                                }}
                              >
                                <span style={{ color: 'var(--green)', flexShrink: 0 }}>/</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div style={{ ...monoText('0.78rem'), color: 'var(--text-subtle)', marginBottom: '0.6rem' }}>
                            {copy.includesLabel}
                          </div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {(language === 'ko' ? r.includes : r.includesEn).map((b, j) => (
                              <li
                                key={j}
                                style={{
                                  fontSize: '0.92rem',
                                  padding: '0.35rem 0',
                                  color: 'var(--text)',
                                  fontWeight: 500,
                                  display: 'flex',
                                  gap: '0.5rem',
                                }}
                              >
                                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>/</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Each card is one way to get Haebot, so it gets the one button that matches it. */}
                      <button
                        onClick={onContact}
                        className="btn btn-primary"
                        style={{ marginTop: '1.6rem', padding: '0.7rem 1.4rem', fontSize: '0.92rem', border: 'none' }}
                      >
                        {r.key === 'purchase' ? copy.buyCta : copy.rentCta}
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSTER GALLERY — expandable carousel */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.galleryEyebrow} title={copy.galleryTitle} subtitle={copy.gallerySubtitle} />
          <div className="mt-10">
            <PosterCarousel
              language={language}
              labels={{ open: copy.galleryOpen, close: copy.galleryClose, hint: copy.galleryHint }}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="grid-bg theme-dark px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={copy.processEyebrow} title={copy.processTitle} />
          <div className="mt-10">
            <ProcessSteps
              steps={rentalProcess.map(s => ({
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
