import type { ReactNode } from 'react';
import { Reveal } from './useReveal';

export const mono = (size = '0.7rem'): React.CSSProperties => ({
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: size,
  letterSpacing: '0.06em',
});

export function Breadcrumb({ label, eyebrow }: { label: string; eyebrow: string }) {
  return (
    <div className="px-5 md:px-10 pt-24 pb-0">
      <div className="max-w-screen-xl mx-auto flex items-center gap-2" style={{ ...mono('0.7rem'), color: 'var(--faint)' }}>
        <span>{label}</span>
        <span style={{ opacity: 0.5 }}>/</span>
        <span style={{ color: 'var(--beam)' }}>{eyebrow}</span>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaPrimaryLabel,
  onCtaPrimary,
  ctaSecondaryLabel,
  onCtaSecondary,
  accentColor = 'var(--beam)',
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimaryLabel: string;
  onCtaPrimary: () => void;
  ctaSecondaryLabel?: string;
  onCtaSecondary?: () => void;
  accentColor?: string;
}) {
  return (
    <section className="sheet px-5 md:px-10 pt-8 pb-16 md:pb-20" style={{ borderBottom: '1px solid var(--rail)', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(55% 55% at 20% 0%, ${accentColor}22, transparent 70%)`,
        }}
      />
      <div className="max-w-screen-xl mx-auto" style={{ position: 'relative' }}>
        <Reveal>
          <div className="inline-flex items-center gap-2.5 mb-6" style={{ border: '1px solid var(--rail)', background: 'var(--deck)', padding: '0.3rem 0.8rem', borderRadius: 999 }}>
            <span className="blip" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lock)' }} />
            <span style={{ ...mono('0.68rem'), color: 'var(--dim)' }}>{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5.6vw, 4.2rem)', lineHeight: 1.08, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, whiteSpace: 'pre-line', maxWidth: '20ch' }}>
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--dim)', fontWeight: 300, marginTop: '1.5rem', maxWidth: '52ch' }}>
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={onCtaPrimary} className="btn btn-primary" style={{ padding: '0.85rem 1.7rem', fontSize: '0.92rem', border: 'none' }}>
              {ctaPrimaryLabel}
            </button>
            {ctaSecondaryLabel && onCtaSecondary && (
              <button onClick={onCtaSecondary} className="btn btn-ghost" style={{ padding: '0.85rem 1.7rem', fontSize: '0.92rem' }}>
                {ctaSecondaryLabel}
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? '56ch' : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
      <Reveal><span style={{ ...mono('0.7rem'), color: 'var(--beam)' }}>{eyebrow}</span></Reveal>
      <Reveal delay={60}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.025em', margin: '0.4rem 0 0', whiteSpace: 'pre-line' }}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem', maxWidth: '52ch', marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function StepRail({ steps }: { steps: { step: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 90}>
          <div className="card" style={{ padding: '1.5rem', height: '100%', position: 'relative' }}>
            <span style={{ ...mono('1.1rem'), color: 'var(--beam)', fontWeight: 700 }}>{s.step}</span>
            <div style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '0.6rem', marginBottom: '0.4rem' }}>{s.title}</div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--dim)', fontWeight: 300, margin: 0 }}>{s.desc}</p>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden md:block"
                style={{ position: 'absolute', top: '1.6rem', right: -22, color: 'var(--faint)', fontSize: '1.1rem' }}
              >
                →
              </span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCta({
  title,
  subtitle,
  ctaLabel,
  onCta,
}: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCta: () => void;
}) {
  return (
    <section className="sheet px-5 md:px-10 py-20 md:py-28" style={{ position: 'relative', borderTop: '1px solid var(--rail)' }}>
      <div
        aria-hidden
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(50% 60% at 50% 100%, rgba(92,139,255,0.14), transparent 70%)' }}
      />
      <div className="max-w-screen-xl mx-auto text-center" style={{ position: 'relative' }}>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, whiteSpace: 'pre-line' }}>
            {title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--dim)', fontWeight: 300, marginTop: '1rem', maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto' }}>
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <button onClick={onCta} className="btn btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '0.95rem', border: 'none', marginTop: '2rem' }}>
            {ctaLabel}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export function LockModal({
  open,
  title,
  body,
  ctaLabel,
  closeLabel,
  onClose,
  onCta,
}: {
  open: boolean;
  title: string;
  body: string;
  ctaLabel: string;
  closeLabel: string;
  onClose: () => void;
  onCta: () => void;
}) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(4,6,12,0.72)',
        backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="card"
        style={{ maxWidth: 420, width: '100%', padding: '2rem', textAlign: 'center', position: 'relative' }}
      >
        <div
          style={{
            width: 52, height: 52, borderRadius: '50%', margin: '0 auto 1.2rem',
            background: 'var(--panel)', border: '1px solid var(--rail)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amp)" strokeWidth="1.6">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--dim)', fontWeight: 300, marginTop: '0.8rem', marginBottom: '1.6rem' }}>
          {body}
        </p>
        <div className="flex flex-col gap-2.5">
          <button onClick={onCta} className="btn btn-primary" style={{ padding: '0.8rem 1.4rem', fontSize: '0.88rem', border: 'none', width: '100%' }}>
            {ctaLabel}
          </button>
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: '0.7rem 1.4rem', fontSize: '0.84rem', width: '100%' }}>
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span style={{ ...mono('0.62rem'), color: 'var(--dim)', border: '1px solid var(--rail)', padding: '0.2rem 0.5rem', borderRadius: 999, display: 'inline-block' }}>
      {children}
    </span>
  );
}
