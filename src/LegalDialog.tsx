import { useEffect } from 'react';
import type { Translations } from './i18n';
import { mono } from './pageUtils';

/**
 * Privacy policy and terms, shown over the page. Escape, the close button and a
 * click outside all dismiss it.
 */
export function LegalDialog({
  t,
  doc,
  onClose,
}: {
  t: Translations;
  doc: 'privacy' | 'terms';
  onClose: () => void;
}) {
  const d = t.legal[doc];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={d.title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(6,13,31,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--deck, #fff)',
          width: '100%',
          maxWidth: 720,
          maxHeight: '86vh',
          overflowY: 'auto',
          borderRadius: 10,
          padding: '1.9rem 1.7rem 1.6rem',
          boxShadow: '0 30px 80px rgba(6,13,31,0.35)',
          border: '1px solid var(--rail)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ ...mono('0.8rem'), color: 'var(--faint)' }}>{t.legal.updated}</div>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                margin: '0.3rem 0 0',
                letterSpacing: '-0.02em',
              }}
            >
              {d.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost"
            style={{ padding: '0.45rem 1rem', fontSize: '0.9rem' }}
          >
            {t.legal.close}
          </button>
        </div>
        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.75,
            color: 'var(--dim)',
            margin: '0.9rem 0 1.5rem',
          }}
        >
          {d.lead}
        </p>
        {d.sections.map((sec: { h: string; p: string }) => (
          <section key={sec.h} style={{ marginBottom: '1.15rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{sec.h}</h3>
            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.8,
                color: 'var(--dim)',
                fontWeight: 500,
                margin: '0.35rem 0 0',
              }}
            >
              {sec.p}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
