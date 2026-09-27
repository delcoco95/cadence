import { useState, type CSSProperties } from 'react';
import { requestPersistentStorage, updateSettings } from '../../db/db';
import { applyGoalToToday } from '../../db/activity';
import { FocusGuide } from '../focus/FocusGuide';
import { isIOS, isStandalone } from '../focus/shortcuts';
import { GOAL_OPTIONS } from '../profile/Profile';

type Step = 'welcome' | 'install' | 'level' | 'goal' | 'blocking' | 'guide';

export function Onboarding() {
  const [step, setStep] = useState<Step>('welcome');
  const [goal, setGoal] = useState(5);
  const needsInstall = isIOS() && !isStandalone();

  async function finish(patch: { blockingEnabled: boolean; blockingSetupDone: boolean }) {
    await requestPersistentStorage();
    await updateSettings({ ...patch, dailyGoalMinutes: goal, startLevel: 'A2', onboarded: true, createdAt: Date.now() });
    await applyGoalToToday(goal);
  }

  return (
    <div className="screen full" style={{ justifyContent: step === 'guide' ? undefined : 'center' }}>
      {step === 'welcome' && (
        <div className="stack celebrate" style={{ '--gap': '20px' } as CSSProperties}>
          <img src="icons/icon-192.png" alt="" width={72} height={72} style={{ borderRadius: 18 }} />
          <h1>Cadence</h1>
          <p className="muted">
            De A2 à C2, un peu chaque jour. Grammaire, conjugaison, vocabulaire, écoute, lecture, écrit et oral, avec des
            révisions qui s’adaptent à tes erreurs.
          </p>
          <button className="btn" onClick={() => setStep(needsInstall ? 'install' : 'level')}>Commencer</button>
        </div>
      )}

      {step === 'install' && (
        <div className="stack" style={{ '--gap': '16px' } as CSSProperties}>
          <h2>Installe Cadence sur ton écran d’accueil</h2>
          <ol className="steps">
            <li>Touche le bouton <b>Partager</b> de Safari (carré avec une flèche).</li>
            <li>Choisis <b>Sur l’écran d’accueil</b>, puis <b>Ajouter</b>.</li>
            <li>Ouvre Cadence depuis sa nouvelle icône.</li>
          </ol>
          <p className="small muted">
            Important : sur iPhone, l’app installée a son propre stockage. Ce que tu fais ici, dans Safari, ne sera pas
            repris dans l’app installée.
          </p>
          <button className="btn secondary" onClick={() => setStep('level')}>Continuer dans Safari quand même</button>
        </div>
      )}

      {step === 'level' && (
        <div className="stack" style={{ '--gap': '16px' } as CSSProperties}>
          <h2>Ton point de départ</h2>
          <button className="option" disabled style={{ opacity: 0.55 }}>
            <b>Passer le test de niveau</b>
            <br />
            <span className="small muted">Disponible dans une prochaine version</span>
          </button>
          <button className="option selected" onClick={() => setStep('goal')}>
            <b>Commencer au niveau A2</b>
            <br />
            <span className="small muted">Bases solides : présent, passé, questions…</span>
          </button>
        </div>
      )}

      {step === 'goal' && (
        <div className="stack" style={{ '--gap': '16px' } as CSSProperties}>
          <h2>Ton objectif quotidien</h2>
          <p className="muted">Minutes de pratique active par jour. Tu pourras le changer plus tard.</p>
          <div className="stack" style={{ '--gap': '8px' } as CSSProperties}>
            {GOAL_OPTIONS.map((m) => (
              <button key={m} className={`option${goal === m ? ' selected' : ''}`} onClick={() => setGoal(m)}>
                ⏱️ {m} min {m === 5 && <span className="muted small">· recommandé pour commencer</span>}
              </button>
            ))}
          </div>
          <button className="btn" onClick={() => setStep('blocking')}>Continuer</button>
        </div>
      )}

      {step === 'blocking' && (
        <div className="stack" style={{ '--gap': '16px' } as CSSProperties}>
          <p style={{ fontSize: 44 }}>🔒</p>
          <h2>Veux-tu te forcer à apprendre ?</h2>
          <p className="muted">
            Chaque jour à minuit, Cadence peut bloquer les applications de ton choix (Instagram, TikTok, YouTube…)
            jusqu’à ce que tu aies fait tes {goal} minutes d’anglais.
          </p>
          <button className="btn" onClick={() => setStep('guide')}>Oui, bloquer mes apps</button>
          <button
            className="btn secondary"
            onClick={() => void finish({ blockingEnabled: false, blockingSetupDone: false })}
          >
            Pas maintenant
          </button>
        </div>
      )}

      {step === 'guide' && (
        <>
          <h2>Configurer le blocage</h2>
          <FocusGuide onDone={() => void finish({ blockingEnabled: true, blockingSetupDone: true })} />
          <button
            className="btn ghost"
            onClick={() => void finish({ blockingEnabled: true, blockingSetupDone: false })}
          >
            Je le ferai plus tard
          </button>
        </>
      )}
    </div>
  );
}
