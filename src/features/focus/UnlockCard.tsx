import { Link } from 'react-router-dom';
import { useSettings, useToday } from '../../db/hooks';
import { markUnlocked } from '../../db/activity';
import { runShortcut } from './shortcuts';
import { UnlockIcon } from '../../ui/Icons';

/** Carte « Objectif atteint → Débloquer mes apps ». Rien si le blocage n'est pas utilisé. */
export function UnlockCard() {
  const settings = useSettings();
  const today = useToday();
  if (!settings?.blockingEnabled || !today?.goalMetAt) return null;

  if (!settings.blockingSetupDone) {
    return (
      <div className="card stack">
        <p className="small">Le blocage n’est pas encore configuré dans Raccourcis.</p>
        <Link className="btn secondary small" style={{ width: '100%' }} to="/focus">Terminer la configuration</Link>
      </div>
    );
  }

  const unlock = async () => {
    await markUnlocked();
    runShortcut(settings.unlockShortcutName);
  };

  return (
    <div className="card stack pop" style={{ background: 'var(--success-soft)', borderColor: 'transparent' }}>
      <div className="row">
        <span className="icon-tile tone-success"><UnlockIcon /></span>
        <div className="grow">
          <h3 style={{ color: 'var(--success-dark)' }}>Tes apps t’attendent</h3>
          <p className="small">
            {today.unlockedAt
              ? 'Débloquées jusqu’à minuit. Si une app reste bloquée, relance le déblocage.'
              : 'Objectif atteint : tes apps seront accessibles jusqu’à minuit.'}
          </p>
        </div>
      </div>
      <button className={`btn ${today.unlockedAt ? 'secondary' : 'success'}`} onClick={() => void unlock()}>
        {today.unlockedAt ? 'Relancer le déblocage' : 'Débloquer mes apps'}
      </button>
    </div>
  );
}
