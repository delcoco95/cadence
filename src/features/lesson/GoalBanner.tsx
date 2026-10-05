import { TrophyIcon } from '../../ui/Icons';

export function GoalBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="card flat row pop" style={{ background: 'var(--success-soft)', borderColor: 'transparent', padding: 12 }}>
      <span className="icon-tile tone-success" style={{ width: 38, height: 38 }}><TrophyIcon /></span>
      <p className="small grow" style={{ color: 'var(--success-dark)' }}><b>Objectif du jour atteint !</b> Continue ou fais une pause.</p>
      <button className="btn ghost small" onClick={onClose}>OK</button>
    </div>
  );
}
