import { useCallback, useEffect, useRef, useState } from 'react';
import type { Lang } from './i18n';
import { posterCards, type PosterCard } from './data';
import { useOutsideClick } from './useOutsideClick';
import { mono } from './pageUtils';
import { asset } from './asset';

/**
 * Horizontally scrolling poster strip. Tapping a card expands it into a
 * centred panel with the full image and its explanation; the panel closes on
 * an outside press (useOutsideClick), on Escape, or via the close button.
 */
export default function PosterCarousel({
  lang,
  labels,
}: {
  lang: Lang;
  labels: { open: string; close: string; hint: string };
}) {
  const [active, setActive] = useState<PosterCard | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);

  useOutsideClick(panelRef, close, active !== null);

  // Escape to close, and keep the page behind the panel from scrolling.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  const scrollBy = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <span style={{ ...mono('0.62rem'), color: 'var(--faint)' }}>{labels.hint}</span>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => scrollBy(-1)} aria-label="Previous" style={arrowBtn}>←</button>
          <button onClick={() => scrollBy(1)} aria-label="Next" style={arrowBtn}>→</button>
        </div>
      </div>

      <div
        ref={railRef}
        className="poster-rail flex gap-4 pb-3"
        style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', scrollPaddingLeft: '0.25rem' }}
      >
        {posterCards.map(card => (
          <button
            key={card.key}
            onClick={e => {
              lastTrigger.current = e.currentTarget;
              setActive(card);
            }}
            className="card card-hover poster-card"
            style={{
              flex: '0 0 auto',
              width: 'min(76vw, 268px)',
              padding: 0,
              overflow: 'hidden',
              cursor: 'pointer',
              textAlign: 'left',
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden', background: 'var(--panel)' }}>
              <img
                src={asset(card.image)}
                alt=""
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
              <span
                aria-hidden
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(5,8,15,0) 45%, rgba(5,8,15,0.85) 100%)',
                }}
              />
            </div>
            <div style={{ padding: '1rem 1.1rem 1.2rem', borderTop: '1px solid var(--rail)' }}>
              <span style={{ ...mono('0.6rem'), color: 'var(--lock)' }}>
                {lang === 'ko' ? card.category : card.categoryEn}
              </span>
              <div
                style={{
                  fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.5,
                  margin: '0.45rem 0 0.7rem', color: 'var(--text)',
                }}
              >
                {lang === 'ko' ? card.title : card.titleEn}
              </div>
              <span style={{ ...mono('0.62rem'), color: 'var(--beam)' }}>{labels.open} →</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'ko' ? active.title : active.titleEn}
          style={{
            position: 'fixed', inset: 0, zIndex: 120,
            background: 'rgba(4,6,12,0.82)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.25rem',
            overflowY: 'auto',
          }}
        >
          <div
            ref={panelRef}
            className="card latch"
            style={{ maxWidth: 940, width: '100%', overflow: 'hidden', margin: 'auto' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div
                className="md:col-span-6"
                style={{ background: 'var(--panel)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={asset(active.image)}
                  alt={lang === 'ko' ? active.title : active.titleEn}
                  style={{ width: '100%', maxHeight: '62vh', objectFit: 'contain', display: 'block', borderRadius: 6 }}
                />
              </div>
              <div
                className="md:col-span-6 p-6 md:p-8"
                style={{ borderTop: '1px solid var(--rail)', display: 'flex', flexDirection: 'column' }}
              >
                <span style={{ ...mono('0.62rem'), color: 'var(--lock)' }}>
                  {lang === 'ko' ? active.category : active.categoryEn}
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)', fontWeight: 700,
                    letterSpacing: '-0.015em', lineHeight: 1.35, margin: '0.5rem 0 1rem',
                  }}
                >
                  {lang === 'ko' ? active.title : active.titleEn}
                </h3>
                {(lang === 'ko' ? active.body : active.bodyEn).map((para, i) => (
                  <p
                    key={i}
                    style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--dim)', fontWeight: 300, margin: i ? '0.9rem 0 0' : 0 }}
                  >
                    {para}
                  </p>
                ))}
                <button
                  onClick={close}
                  className="btn btn-ghost"
                  style={{ marginTop: '1.8rem', padding: '0.7rem 1.3rem', fontSize: '0.85rem', alignSelf: 'flex-start' }}
                >
                  {labels.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const arrowBtn: React.CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: 999,
  border: '1px solid var(--rail)',
  background: 'transparent',
  color: 'var(--dim)',
  cursor: 'pointer',
  fontSize: '0.85rem',
  lineHeight: 1,
};
