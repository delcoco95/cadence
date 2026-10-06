import { useState, type ReactNode } from 'react';
import { DEFAULT_SETTINGS, requestPersistentStorage, updateSettings, type Motivation, type Settings } from '../../db/db';
import { applyGoalToToday } from '../../db/activity';
import { pick, type Gender } from '../../core/gender';
import { FocusGuide } from '../focus/FocusGuide';
import { isIOS, isStandalone } from '../focus/shortcuts';
import { GENDER_OPTIONS, GOAL_OPTIONS } from '../profile/Profile';
import { VoicePicker } from '../profile/VoicePicker';
import { Mascot, MascotSays } from '../../ui/Mascot';
import { MOTIVATIONS, MAX_MOTIVATIONS } from '../../ui/profile';
import { applyChosenLevel, LEVEL_CHOICES, type LevelChoice } from '../../db/units';
import { ProgressBar } from '../../ui/ProgressBar';
import { sfx } from '../../ui/sfx';
import {
  BackIcon, BrainIcon, BriefcaseIcon, CapIcon, ChatIcon, CheckIcon, FilmIcon, PlaneIcon, ProfileIcon, SparkleIcon, TargetIcon,
} from '../../ui/Icons';

type Step = 'welcome' | 'name' | 'gender' | 'motivation' | 'install' | 'level' | 'goal' | 'voice' | 'blocking' | 'guide';

const MOTIVATION_ICONS: Record<Motivation, { icon: ReactNode; tone: string }> = {
  travel: { icon: <PlaneIcon />, tone: 'tone-sky' },
  work: { icon: <BriefcaseIcon />, tone: 'tone-primary' },
  studies: { icon: <CapIcon />, tone: 'tone-teal' },
  culture: { icon: <FilmIcon />, tone: 'tone-pink' },
  people: { icon: <ChatIcon />, tone: 'tone-success' },
  brain: { icon: <BrainIcon />, tone: 'tone-sun' },
};

const GOAL_LABELS: Record<number, string> = { 5: 'Tranquille', 10: 'Régulier', 15: 'Sérieux', 20: 'Intense', 30: 'Marathon' };

type VoiceSettings = Pick<Settings, 'accent' | 'voiceId' | 'voiceGender' | 'speechRate'>;

export function Onboarding() {
  const needsInstall = isIOS() && !isStandalone();
  const flow: Step[] = ['welcome', 'name', 'gender', 'motivation', ...(needsInstall ? ['install' as const] : []), 'level', 'goal', 'voice', 'blocking'];
  const [step, setStep] = useState<Step>('welcome');
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [motivations, setMotivations] = useState<Motivation[]>([]);
  const [goal, setGoal] = useState(10);
  const [level, setLevel] = useState<LevelChoice | null>(null);
  const [voice, setVoice] = useState<VoiceSettings>({
    accent: DEFAULT_SETTINGS.accent,
    voiceId: undefined,
    voiceGender: DEFAULT_SETTINGS.voiceGender,
    speechRate: DEFAULT_SETTINGS.speechRate,
  });

  const g = (m: string, f: string, n?: string) => pick(gender ?? 'n', m, f, n);
  const name = firstName.trim();
  const index = flow.indexOf(step === 'guide' ? 'blocking' : step);
  const next = () => {
    sfx.tap();
    setStep(flow[Math.min(flow.length - 1, index + 1)]);
  };
  const back = () => setStep(step === 'guide' ? 'blocking' : flow[Math.max(0, index - 1)]);

  async function finish(patch: { blockingEnabled: boolean; blockingSetupDone: boolean }) {
    // Le routeur lit l'adresse à son montage, juste après l'onboarding : le test s'ouvre directement.
    if (level === 'test') window.location.hash = '#/placement';
    await requestPersistentStorage();
    await updateSettings({
      ...patch,
      ...voice,
      firstName: name,
      gender: gender ?? 'n',
      motivations,
      dailyGoalMinutes: goal,
      onboarded: true,
      createdAt: Date.now(),
    });
    await applyGoalToToday(goal);
    if (level && level !== 'test') await applyChosenLevel(level);
    sfx.complete();
  }

  return (
    <div className="screen full">
      {step !== 'welcome' && (
        <div className="ob-top">
          <button className="icon-btn" aria-label="Retour" onClick={back}><BackIcon /></button>
          <ProgressBar value={index / (flow.length - 1)} label="Progression de l’inscription" />
        </div>
      )}

      {step === 'welcome' && (
        <div className="ob-body welcome">
          <Mascot mood="cheer" size={170} />
          <div className="stack" style={{ gap: 8 }}>
            <h1>Salut, moi c’est <span className="brand">Coco</span> !</h1>
            <p className="muted" style={{ fontWeight: 700, fontSize: 18 }}>
              Je vais t’accompagner pour parler anglais avec assurance, quelques minutes par jour.
            </p>
          </div>
          <div className="stack" style={{ width: '100%', marginTop: 12 }}>
            <button className="btn" onClick={next}>C’est parti</button>
            <p className="note">Grammaire, vocabulaire, écoute et oral. Tes révisions s’adaptent à tes erreurs.</p>
          </div>
        </div>
      )}

      {step === 'name' && (
        <div className="ob-body top">
          <MascotSays mood="happy">Comment je peux t’appeler ?</MascotSays>
          <input
            className="field"
            autoFocus
            value={firstName}
            maxLength={24}
            autoComplete="given-name"
            placeholder="Ton prénom"
            onChange={(e) => setFirstName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && next()}
          />
          <div className="bottom-action stack">
            <button className="btn" onClick={next}>{name ? 'Continuer' : 'Passer'}</button>
          </div>
        </div>
      )}

      {step === 'gender' && (
        <div className="ob-body top">
          <MascotSays mood="think">
            {name ? `Enchanté, ${name} ! ` : ''}En français, j’accorde mes phrases : « tu es prêt » ou « tu es prête ». Que préfères-tu ?
          </MascotSays>
          <div className="stack" style={{ gap: 10 }}>
            {GENDER_OPTIONS.map((o) => (
              <button
                key={o.value}
                className={`choice wide${gender === o.value ? ' selected' : ''}`}
                onClick={() => {
                  sfx.tap();
                  setGender(o.value);
                }}
              >
                <span className={`icon-tile ${o.value === 'f' ? 'tone-pink' : o.value === 'm' ? 'tone-sky' : 'tone-primary'}`}><ProfileIcon /></span>
                <span className="grow">
                  {o.label}
                  <span className="note" style={{ display: 'block', fontWeight: 600 }}>{o.example}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="note">Cela ne sert qu’aux accords. Tu peux le changer à tout moment dans ton profil.</p>
          <div className="bottom-action">
            <button className="btn" disabled={!gender} onClick={next}>Continuer</button>
          </div>
        </div>
      )}

      {step === 'motivation' && (
        <div className="ob-body top">
          <MascotSays mood="happy">Pourquoi veux-tu apprendre l’anglais ? Choisis jusqu’à {MAX_MOTIVATIONS} objectifs : j’adapterai tes cours.</MascotSays>
          <div className="choice-grid">
            {(Object.keys(MOTIVATIONS) as Motivation[]).map((m) => {
              const on = motivations.includes(m);
              const full = !on && motivations.length >= MAX_MOTIVATIONS;
              return (
                <button
                  key={m}
                  className={`choice${on ? ' selected' : ''}`}
                  aria-pressed={on}
                  disabled={full}
                  style={full ? { opacity: 0.5 } : undefined}
                  onClick={() => {
                    sfx.tap();
                    setMotivations((list) => (on ? list.filter((x) => x !== m) : [...list, m]));
                  }}
                >
                  <span className={`icon-tile ${MOTIVATION_ICONS[m].tone}`}>{on ? <CheckIcon /> : MOTIVATION_ICONS[m].icon}</span>
                  {MOTIVATIONS[m].label}
                </button>
              );
            })}
          </div>
          <p className="note center">{motivations.length} / {MAX_MOTIVATIONS} choisi{motivations.length > 1 ? 's' : ''}</p>
          <div className="bottom-action">
            <button className="btn" disabled={motivations.length === 0} onClick={next}>Continuer</button>
          </div>
        </div>
      )}

      {step === 'install' && (
        <div className="ob-body top">
          <MascotSays mood="wow">Petite astuce : installe-moi sur ton écran d’accueil, c’est plus pratique !</MascotSays>
          <div className="card">
            <ol className="steps">
              <li>Touche le bouton <b>Partager</b> de Safari (carré avec une flèche).</li>
              <li>Choisis <b>Sur l’écran d’accueil</b>, puis <b>Ajouter</b>.</li>
              <li>Ouvre Cadence depuis sa nouvelle icône.</li>
            </ol>
          </div>
          <p className="note">
            Important : sur iPhone, l’app installée a son propre stockage. Ce que tu fais ici, dans Safari, ne sera pas repris dans l’app installée.
          </p>
          <div className="bottom-action">
            <button className="btn secondary" onClick={next}>Continuer dans Safari</button>
          </div>
        </div>
      )}

      {step === 'level' && (
        <div className="ob-body top">
          <MascotSays mood="think">Quel est ton niveau d’anglais ? Pas sûr ? Le test le trouve pour toi.</MascotSays>
          <div className="stack" style={{ gap: 10 }}>
            {LEVEL_CHOICES.map((c) => (
              <button
                key={c.value}
                className={`choice wide${level === c.value ? ' selected' : ''}`}
                onClick={() => {
                  sfx.tap();
                  setLevel(c.value);
                }}
              >
                <span className={`icon-tile ${c.tone}`}>{c.value === 'test' ? <TargetIcon /> : <b style={{ fontSize: 15 }}>{c.value}</b>}</span>
                <span className="grow">
                  {c.label}
                  <span className="note" style={{ display: 'block', fontWeight: 600 }}>{c.hint}</span>
                </span>
              </button>
            ))}
          </div>
          {(level === 'B1' || level === 'B2') && (
            <p className="tip"><SparkleIcon />Le parcours B1 et B2 est en préparation. En attendant, tout le niveau A2 sera ouvert : révise à ton rythme et teste-toi avec les défis.</p>
          )}
          <div className="bottom-action">
            <button className="btn" disabled={!level} onClick={next}>Continuer</button>
          </div>
        </div>
      )}

      {step === 'goal' && (
        <div className="ob-body top">
          <MascotSays mood="happy">
            {motivations.length ? `Super, ${MOTIVATIONS[motivations[0]].line} ! ` : ''}Combien de temps par jour ?
          </MascotSays>
          <div className="stack" style={{ gap: 8 }}>
            {GOAL_OPTIONS.map((m) => (
              <button
                key={m}
                className={`option${goal === m ? ' selected' : ''}`}
                onClick={() => {
                  sfx.tap();
                  setGoal(m);
                }}
              >
                <span className="grow">{m} min par jour</span>
                <span className="note" style={{ fontWeight: 800 }}>{GOAL_LABELS[m]}</span>
              </button>
            ))}
          </div>
          <p className="note">Seul le temps de pratique active compte. Tu pourras changer d’objectif plus tard.</p>
          <div className="bottom-action">
            <button className="btn" onClick={next}>Continuer</button>
          </div>
        </div>
      )}

      {step === 'voice' && (
        <div className="ob-body top">
          <MascotSays mood="happy">Choisis la voix qui te lira les phrases. Touche une voix pour l’écouter.</MascotSays>
          <VoicePicker value={voice} onChange={(patch) => setVoice((v) => ({ ...v, ...patch }))} />
          <div className="bottom-action">
            <button className="btn" onClick={next}>Continuer</button>
          </div>
        </div>
      )}

      {step === 'blocking' && (
        <div className="ob-body">
          <Mascot mood="think" size={120} style={{ alignSelf: 'center' }} />
          <h2 className="center">{g('Prêt', 'Prête', 'Prêt·e')} à te motiver pour de bon ?</h2>
          <p className="muted center" style={{ fontWeight: 700 }}>
            Chaque jour, Cadence peut bloquer les apps de ton choix (Instagram, TikTok, YouTube…) jusqu’à ce que tu aies fait tes {goal} minutes d’anglais.
          </p>
          <div className="stack">
            <button className="btn" onClick={() => setStep('guide')}>Oui, bloquer mes apps</button>
            <button className="btn secondary" onClick={() => void finish({ blockingEnabled: false, blockingSetupDone: false })}>
              Pas maintenant
            </button>
          </div>
        </div>
      )}

      {step === 'guide' && (
        <>
          <h2>Configurer le blocage</h2>
          <FocusGuide onDone={() => void finish({ blockingEnabled: true, blockingSetupDone: true })} />
          <button className="btn ghost" onClick={() => void finish({ blockingEnabled: true, blockingSetupDone: false })}>
            Je le ferai plus tard
          </button>
        </>
      )}
    </div>
  );
}
