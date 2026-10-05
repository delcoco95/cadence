import type { ReactNode } from 'react';

/** Anneau de progression (objectif du jour). */
export function Ring({ value, size = 96, stroke = 10, tone = 'primary', children }: {
  value: number;
  size?: number;
  stroke?: number;
  tone?: 'primary' | 'success' | 'sun';
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value));
  return (
    <div className={`ring tone-${tone}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="ring-track" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="ring-value"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-center">{children}</div>
    </div>
  );
}
