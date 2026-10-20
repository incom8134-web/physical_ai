import type { CSSProperties } from 'react';

/** Small monospace label style used for eyebrows, tags and numbers. */
export const monoText = (size = '0.84rem'): CSSProperties => ({
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: size,
  fontWeight: 600,
  letterSpacing: '0.06em',
});
