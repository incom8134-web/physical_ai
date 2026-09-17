export default function Placeholder({
  ratio = '16 / 10',
  label,
  minHeight,
}: {
  ratio?: string;
  label: string;
  minHeight?: number;
}) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        minHeight,
        borderRadius: 8,
        border: '1.5px dashed var(--rail)',
        background:
          'repeating-linear-gradient(135deg, rgba(92,139,255,0.05) 0px, rgba(92,139,255,0.05) 10px, transparent 10px, transparent 20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: 'var(--faint)',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="4" width="18" height="15" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.6" />
        <path d="M21 15l-5.5-5.5a2 2 0 0 0-2.8 0L3 19" />
      </svg>
      <span style={{ fontSize: '0.76rem', fontWeight: 500, lineHeight: 1.5, maxWidth: '20ch' }}>{label}</span>
    </div>
  );
}
