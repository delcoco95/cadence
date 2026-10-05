export function ProgressBar({ value, tone, thin, label }: { value: number; tone?: 'success' | 'primary' | 'sun' | 'sky'; thin?: boolean; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={`bar${tone && tone !== 'success' ? ' ' + tone : ''}${thin ? ' thin' : ''}`}
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <i style={{ width: `${pct}%`, minWidth: pct > 0 ? (thin ? 10 : 16) : 0 }} />
    </div>
  );
}
