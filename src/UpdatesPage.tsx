import type { Lang, Translations } from './i18n';
import { updates } from './updates';
import { asset } from './asset';
import { Reveal } from './useReveal';
import { Breadcrumb, PageHero, SectionHeading, FinalCta, mono } from './pageUtils';

const PHONE = '010-4588-2794';
const PHONE_TEL = 'tel:+821045882794';

/** 2026-11-22 → 2026.11.22 (ko) / 2026-11-22 (en). */
function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split('-');
  return lang === 'ko' ? `${y}.${m}.${d}` : `${y}-${m}-${d}`;
}

export default function UpdatesPage({
  lang,
  t,
  onContact,
}: {
  lang: Lang;
  t: Translations;
  onContact: () => void;
}) {
  const p = t.pages.updates;
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
        onCtaSecondary={() =>
          document.getElementById('updates-list')?.scrollIntoView({ behavior: 'smooth' })
        }
      />

      <section
        id="updates-list"
        className="px-5 md:px-10 py-20 md:py-24"
        style={{ borderBottom: '1px solid var(--rail)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <SectionHeading eyebrow={p.listEyebrow} title={p.listTitle} />

          <div style={{ marginTop: '2.5rem', display: 'grid', gap: '1.5rem' }}>
            {updates.map((u, idx) => (
              <Reveal key={u.slug} delay={idx * 60}>
                <article className="card" style={{ overflow: 'hidden' }}>
                  <span
                    aria-hidden
                    style={{ display: 'block', height: 3, background: 'var(--beam)' }}
                  />
                  <div className="p-6 md:p-10">
                    <header>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span style={{ ...mono('0.84rem'), color: 'var(--beam)' }}>
                          {formatDate(u.date, lang)}
                        </span>
                        <span
                          style={{
                            ...mono('0.78rem'),
                            color: 'var(--dim)',
                            border: '1px solid var(--rail)',
                            padding: '0.18rem 0.55rem',
                            borderRadius: 999,
                          }}
                        >
                          {ko ? u.tag : u.tagEn}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.45rem, 3.2vw, 2.15rem)',
                          lineHeight: 1.3,
                          fontWeight: 800,
                          letterSpacing: '-0.025em',
                          margin: '0.7rem 0 0',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {ko ? u.title : u.titleEn}
                      </h3>
                    </header>

                    <div
                      style={{
                        marginTop: '1.25rem',
                        display: 'grid',
                        gap: '0.7rem',
                        maxWidth: '68ch',
                      }}
                    >
                      {(ko ? u.body : u.bodyEn).map((line, i) => (
                        <p
                          key={i}
                          style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.9,
                            color: 'var(--dim)',
                            fontWeight: 500,
                            margin: 0,
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                      style={{ marginTop: '2rem' }}
                    >
                      {u.images.map((im) => (
                        <figure key={im.src} style={{ margin: 0 }}>
                          <div
                            style={{
                              // A poster single image reads better tall; photo sets stay 4:3.
                              aspectRatio: u.images.length === 1 ? '4 / 5' : '4 / 3',
                              overflow: 'hidden',
                              borderRadius: 10,
                              border: '1px solid var(--rail)',
                              background: 'var(--panel)',
                            }}
                          >
                            <img
                              src={asset(im.src)}
                              alt={ko ? im.alt : im.altEn}
                              loading="lazy"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                          </div>
                          <figcaption
                            style={{
                              fontSize: '0.84rem',
                              lineHeight: 1.6,
                              color: 'var(--faint)',
                              marginTop: '0.55rem',
                            }}
                          >
                            {ko ? im.caption : im.captionEn}
                          </figcaption>
                        </figure>
                      ))}
                    </div>

                    {/* Inquiry line — the same words as the post, with the phone and the site as links */}
                    <div
                      style={{
                        marginTop: '2rem',
                        padding: '1.15rem 1.35rem',
                        borderRadius: 10,
                        border: '1px solid var(--rail)',
                        borderLeft: '4px solid var(--beam)',
                        background: 'var(--panel)',
                      }}
                    >
                      <div style={{ ...mono('0.78rem'), color: 'var(--faint)' }}>
                        {p.contactLabel}
                      </div>
                      <p
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.8,
                          color: 'var(--text)',
                          fontWeight: 600,
                          margin: '0.35rem 0 0',
                        }}
                      >
                        {ko
                          ? '도입·협업·교육 문의: '
                          : 'Inquiries (adoption · collaboration · training): '}
                        <a
                          href={PHONE_TEL}
                          style={{ color: 'var(--beam)', fontWeight: 800, textDecoration: 'none' }}
                        >
                          {ko ? PHONE : '+82 10-4588-2794'}
                        </a>
                        {ko ? ' (이성웅 대표)' : ' (CEO Lee Seong-ung)'}
                        {' · '}
                        <a
                          href="https://www.haebotai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                          style={{ color: 'var(--beam)', fontWeight: 700, textDecoration: 'none' }}
                        >
                          https://www.haebotai.com
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: 'var(--faint)',
                marginTop: '1.5rem',
              }}
            >
              {p.note}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={p.finalTitle}
        subtitle={p.finalSubtitle}
        ctaLabel={t.pages.contactCta}
        onCta={onContact}
      />
    </>
  );
}
