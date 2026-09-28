export function GoalBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="card celebrate row" style={{ background: 'var(--success-soft)', borderColor: 'transparent' }}>
      <span>✅</span>
      <p className="small grow"><b>Objectif du jour atteint.</b> Tu peux continuer ou t’arrêter.</p>
      <button className="btn ghost small" onClick={onClose}>OK</button>
    </div>
  );
}
