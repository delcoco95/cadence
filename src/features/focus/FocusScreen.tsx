import { useNavigate } from 'react-router-dom';
import { updateSettings } from '../../db/db';
import { useSettings } from '../../db/hooks';
import { BackIcon } from '../../ui/Icons';
import { FocusGuide } from './FocusGuide';

export function FocusScreen() {
  const navigate = useNavigate();
  const settings = useSettings();
  if (!settings) return null;

  return (
    <div className="screen full">
      <div className="row">
        <button className="icon-btn" aria-label="Retour" onClick={() => navigate(-1)}><BackIcon /></button>
        <h2>Blocage des apps</h2>
      </div>
      <div className="card setting">
        <div>
          <p style={{ fontWeight: 600 }}>Bloquer mes apps chaque jour</p>
          <p className="small muted">{settings.blockingSetupDone ? 'Configuré dans Raccourcis' : 'Configuration à faire'}</p>
        </div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.blockingEnabled}
            onChange={(e) => void updateSettings({ blockingEnabled: e.target.checked })}
          />
          <span />
        </label>
      </div>
      {settings.blockingEnabled && (
        <FocusGuide
          doneLabel={settings.blockingSetupDone ? 'OK' : 'J’ai tout configuré'}
          onDone={() => {
            void updateSettings({ blockingSetupDone: true });
            navigate('/');
          }}
        />
      )}
      {!settings.blockingEnabled && settings.blockingSetupDone && (
        <p className="small muted">
          Pense aussi à désactiver l’automatisation dans l’app Raccourcis, sinon tes apps resteront bloquées.
        </p>
      )}
    </div>
  );
}
