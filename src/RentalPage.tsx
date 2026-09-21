import type { Lang } from './i18n';
import { rentalRobots, rentalUseCases, rentalProcess } from './data';
import { Reveal } from './useReveal';
import { asset } from './asset';
import { Breadcrumb, PageHero, SectionHeading, StepRail, FinalCta, Chip, mono } from './pageUtils';
import PosterCarousel from './PosterCarousel';

export default function RentalPage({ lang, t, onContact }: { lang: Lang; t: any; onContact: () => void }) {
  const p = t.pages.rental;

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
        onCtaSecondary={() => document.getElementById('rental-robots')?.scrollIntoView({ behavior: 'smooth' })}
        accentColor="var(--lock)"
      />

      {/* USE CASES */}
      <section className="px-5 md:px-10 py-16 md:py-20" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.useCaseEyebrow} title={p.useCaseTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {rentalUseCases.map((u, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card card-hover" style={{ padding: '1.4rem', height: '100%' }}>
                  <span style={{ ...mono('0.65rem'), color: 'var(--lock)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, margin: '0.5rem 0 0.4rem' }}>{lang === 'ko' ? u.title : u.titleEn}</div>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--dim)', fontWeight: 300, margin: 0 }}>{lang === 'ko' ? u.desc : u.descEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROBOTS */}
      <section id="rental-robots" className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.robotsEyebrow} title={p.robotsTitle} />

          <div className="flex flex-col gap-8 mt-10">
            {rentalRobots.map((r, i) => (
              <Reveal key={r.key} delay={i * 100}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-4" style={{ padding: '0.75rem', background: 'radial-gradient(60% 70% at 50% 55%, rgba(69,224,168,0.08), transparent 70%)' }}>
                      <div style={{ aspectRatio: '4 / 3', width: '100%', overflow: 'hidden', borderRadius: 8 }}>
                        <img
                          src={asset(r.image)}
                          alt={lang === 'ko' ? r.name : r.nameEn}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-8 p-6 md:p-8" style={{ borderTop: '1px solid var(--rail)', borderLeft: '1px solid var(--rail)' }}>
                      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                        <div style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{lang === 'ko' ? r.name : r.nameEn}</div>
                        <span style={{ ...mono('0.68rem'), color: 'var(--lock)' }}>{lang === 'ko' ? r.tagline : r.taglineEn}</span>
                      </div>
                      <div className="flex gap-1.5 flex-wrap my-3">
                        {r.specs.map((s, j) => (
                          <Chip key={j}>{lang === 'ko' ? s.label : s.labelEn} · {lang === 'ko' ? s.value : s.valueEn}</Chip>
                        ))}
                      </div>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginBottom: '1.4rem' }}>{lang === 'ko' ? r.desc : r.descEn}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <div style={{ ...mono('0.62rem'), color: 'var(--faint)', marginBottom: '0.6rem' }}>{p.bestForLabel}</div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {(lang === 'ko' ? r.bestFor : r.bestForEn).map((b, j) => (
                              <li key={j} style={{ fontSize: '0.84rem', padding: '0.35rem 0', color: 'var(--text)', fontWeight: 300, display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--lock)', flexShrink: 0 }}>/</span>{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div style={{ ...mono('0.62rem'), color: 'var(--faint)', marginBottom: '0.6rem' }}>{p.includesLabel}</div>
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            {(lang === 'ko' ? r.includes : r.includesEn).map((b, j) => (
                              <li key={j} style={{ fontSize: '0.84rem', padding: '0.35rem 0', color: 'var(--text)', fontWeight: 300, display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--beam)', flexShrink: 0 }}>/</span>{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2.5" style={{ marginTop: '1.6rem' }}>
                        <button onClick={onContact} className="btn btn-primary" style={{ padding: '0.7rem 1.4rem', fontSize: '0.85rem', border: 'none' }}>
                          {p.buyCta}
                        </button>
                        <button onClick={onContact} className="btn btn-ghost" style={{ padding: '0.7rem 1.4rem', fontSize: '0.85rem' }}>
                          {p.rentCta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSTER GALLERY — expandable carousel */}
      <section className="px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.galleryEyebrow} title={p.galleryTitle} subtitle={p.gallerySubtitle} />
          <div className="mt-10">
            <PosterCarousel
              lang={lang}
              labels={{ open: p.galleryOpen, close: p.galleryClose, hint: p.galleryHint }}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sheet-soft px-5 md:px-10 py-20 md:py-28" style={{ borderBottom: '1px solid var(--rail)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.processEyebrow} title={p.processTitle} />
          <div className="mt-10">
            <StepRail steps={rentalProcess.map(s => ({ step: s.step, title: lang === 'ko' ? s.title : s.titleEn, desc: lang === 'ko' ? s.desc : s.descEn }))} />
          </div>
        </div>
      </section>

      <FinalCta title={p.finalTitle} subtitle={p.finalSubtitle} ctaLabel={t.pages.contactCta} onCta={onContact} />
    </>
  );
}
