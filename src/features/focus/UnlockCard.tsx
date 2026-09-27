import { Link } from 'react-router-dom';
import { useSettings, useToday } from '../../db/hooks';
import { markUnlocked } from '../../db/activity';
import { runShortcut } from './shortcuts';

/** Carte « Objectif atteint → Débloquer mes apps ». Rien si le blocage n'est pas utilisé. */
export function UnlockCard() {
  const settings = useSettings();
  const today = useToday();
  if (!settings?.blockingEnabled || !today?.goalMetAt) return null;

  if (!settings.blockingSetupDone) {
    return (
      <div className="card stack">
        <p className="small">Le blocage n’est pas encore configuré dans Raccourcis.</p>
        <Link className="btn secondary small" to="/focus">Terminer la configuration</Link>
      </div>
    );
  }

  const unlock = async () => {
    await markUnlocked();
    runShortcut(settings.unlockShortcutName);
  };

  return (
    <div className="card stack celebrate" style={{ background: 'var(--success-soft)', borderColor: 'transparent' }}>
      <h3>✅ Objectif quotidien atteint</h3>
      <p className="small">
        {today.unlockedAt
          ? 'Tes apps sont débloquées jusqu’à minuit. Si une app est encore bloquée, relance le déblocage.'
          : 'Lance le déblocage : tes apps seront accessibles jusqu’à minuit.'}
      </p>
      <button className={`btn ${today.unlockedAt ? 'secondary' : 'success'}`} onClick={() => void unlock()}>
        🔓 {today.unlockedAt ? 'Relancer le déblocage' : 'Débloquer mes apps'}
      </button>
    </div>
  );
}
