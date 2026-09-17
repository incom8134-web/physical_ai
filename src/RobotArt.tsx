type Kind = 'humanoid' | 'quadruped' | 'platform';

const S = { fill: 'none', stroke: 'var(--beam)', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const G = { fill: 'none', stroke: 'var(--rail)', strokeWidth: 1 };

export default function RobotArt({ kind }: { kind: Kind }) {
  return (
    <svg viewBox="0 0 240 190" width="100%" height="100%" role="img" aria-hidden="true" style={{ display: 'block' }}>
      {/* measurement grid */}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 24} x2="240" y2={i * 24} {...G} />
      ))}
      {Array.from({ length: 11 }, (_, i) => (
        <line key={`v${i}`} x1={i * 24} y1="0" x2={i * 24} y2="190" {...G} />
      ))}
      {/* ground datum */}
      <line x1="30" y1="160" x2="210" y2="160" stroke="var(--amp)" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

      {kind === 'humanoid' && (
        <g {...S}>
          <rect x="108" y="26" width="24" height="20" rx="4" />
          <circle cx="115" cy="36" r="2" fill="var(--amp)" stroke="none" />
          <circle cx="125" cy="36" r="2" fill="var(--amp)" stroke="none" />
          <line x1="120" y1="46" x2="120" y2="54" />
          <rect x="102" y="54" width="36" height="44" rx="5" />
          <line x1="102" y1="66" x2="86" y2="86" />
          <line x1="86" y1="86" x2="80" y2="112" />
          <circle cx="80" cy="116" r="4" />
          <line x1="138" y1="66" x2="154" y2="86" />
          <line x1="154" y1="86" x2="160" y2="112" />
          <circle cx="160" cy="116" r="4" />
          <line x1="110" y1="98" x2="106" y2="130" />
          <line x1="106" y1="130" x2="108" y2="158" />
          <line x1="100" y1="158" x2="116" y2="158" />
          <line x1="130" y1="98" x2="134" y2="130" />
          <line x1="134" y1="130" x2="132" y2="158" />
          <line x1="124" y1="158" x2="140" y2="158" />
        </g>
      )}

      {kind === 'quadruped' && (
        <g {...S}>
          <rect x="76" y="76" width="92" height="30" rx="6" />
          <rect x="164" y="72" width="22" height="18" rx="4" />
          <circle cx="180" cy="81" r="2.5" fill="var(--amp)" stroke="none" />
          <line x1="122" y1="76" x2="122" y2="64" />
          <circle cx="122" cy="60" r="4" />
          <line x1="88" y1="106" x2="78" y2="128" />
          <line x1="78" y1="128" x2="86" y2="158" />
          <line x1="104" y1="106" x2="96" y2="128" />
          <line x1="96" y1="128" x2="104" y2="158" />
          <line x1="142" y1="106" x2="150" y2="128" />
          <line x1="150" y1="128" x2="142" y2="158" />
          <line x1="158" y1="106" x2="168" y2="128" />
          <line x1="168" y1="128" x2="160" y2="158" />
        </g>
      )}

      {kind === 'platform' && (
        <g {...S}>
          <rect x="94" y="40" width="52" height="16" rx="4" />
          <circle cx="107" cy="48" r="2.5" fill="var(--amp)" stroke="none" />
          <circle cx="133" cy="48" r="2.5" fill="var(--amp)" stroke="none" />
          <line x1="120" y1="56" x2="120" y2="70" />
          <rect x="98" y="70" width="44" height="40" rx="5" />
          <line x1="98" y1="80" x2="74" y2="92" />
          <line x1="74" y1="92" x2="62" y2="112" />
          <circle cx="60" cy="116" r="4" />
          <line x1="142" y1="80" x2="166" y2="92" />
          <line x1="166" y1="92" x2="178" y2="112" />
          <circle cx="180" cy="116" r="4" />
          <path d="M104 110 L96 138 L144 138 L136 110 Z" />
          <circle cx="104" cy="150" r="10" />
          <circle cx="136" cy="150" r="10" />
        </g>
      )}
    </svg>
  );
}
