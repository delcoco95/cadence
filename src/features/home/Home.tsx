import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { getLesson, UNITS } from '../../content';
import { lessonsDoneToday, loadStats, weekActivity } from '../../db/activity';
import { useSettings, useToday } from '../../db/hooks';
import { nextStep, stepPath } from '../../db/units';
import { ERROR_LABELS } from '../../core/errors';
import { learningStats } from '../../db/learning';
import { kcLabel } from '../../content/kcs';
import { dayKey } from '../../core/dates';
import { ProgressBar } from '../../ui/ProgressBar';
import { Ring } from '../../ui/Ring';
import { MascotSays } from '../../ui/Mascot';
import { hello, homeLine, useProfileText } from '../../ui/profile';
import { unitLabel, unitStyle } from '../../ui/units';
import {
  BoltIcon, BookIcon, BrainIcon, CheckIcon, ChevronIcon, DumbbellIcon, FlameIcon, LetterIcon, RefreshIcon, StarIcon, TargetIcon, TrophyIcon,
} from '../../ui/Icons';
import { UnlockCard } from '../focus/UnlockCard';

const QUEST_XP = 50;

export function Home() {
  const settings = useSettings();
  const today = useToday();
  const stats = useLiveQuery(() => loadStats());
  const week = useLiveQuery(() => weekActivity());
  const lessonsToday = useLiveQuery(() => lessonsDoneToday());
  const step = useLiveQuery(() => nextStep());
  const learning = useLiveQuery(() => learningStats());
  const p = useProfileText();
  const lesson = step?.kind === 'lesson' ? getLesson(step.lessonId!) : undefined;
  const unit = step ? UNITS.find((u) => u.id === step.unitId) : undefined;

  const goalMinutes = settings?.dailyGoalMinutes ?? 5;
  const goalSeconds = today?.goalSeconds ?? goalMinutes * 60;
  const active = today?.activeSeconds ?? 0;
  const goalMet = !!today?.goalMetAt;
  const pct = Math.min(1, active / goalSeconds);
  const streak = stats?.streak.current ?? 0;
  const xpToday = today?.xp ?? 0;
  const seed = Number(dayKey().replaceAll('-', ''));
  const minutesDone = Math.floor(active / 60);
  const minutesLeft = Math.max(1, Math.ceil((goalSeconds - active) / 60));
  const lessonStarted = (lessonsToday ?? 0) > 0;

  const quests = [
    { icon: <TargetIcon />, tone: 'tone-sun', label: `Pratiquer ${goalMinutes} min`, value: active / goalSeconds, count: `${Math.min(minutesDone, goalMinutes)} / ${goalMinutes}` },
    { icon: <BookIcon />, tone: 'tone-primary', label: 'Terminer une leçon', value: Math.min(1, lessonsToday ?? 0), count: `${Math.min(1, lessonsToday ?? 0)} / 1` },
    { icon: <BoltIcon />, tone: 'tone-sky', label: `Gagner ${QUEST_XP} XP`, value: xpToday / QUEST_XP, count: `${Math.min(xpToday, QUEST_XP)} / ${QUEST_XP}` },
  ];

  return (
    <div className="screen">
      <header className="topbar">
        <span className="pill level">{settings?.estimatedBand ?? settings?.startLevel ?? 'A2'}</span>
        <div className="pills">
          <span className={`pill flame${stats?.streak.todayDone ? '' : ' off'}`} aria-label={`Série de ${streak} jours`}>
            <FlameIcon /> {streak}
          </span>
          <span className="pill bolt" aria-label={`${xpToday} XP aujourd’hui`}>
            <BoltIcon /> {xpToday}
          </span>
        </div>
      </header>

      <MascotSays mood={goalMet ? 'cheer' : 'happy'}>
        <span className="muted small" style={{ display: 'block', fontWeight: 800 }}>{hello(p, new Date().getHours())}</span>
        {homeLine(p, { goalMet, started: active > 30 || lessonStarted, streak }, seed)}
      </MascotSays>

      {settings && !settings.firstName && (
        <Link to="/profile" className="card soft list-link" style={{ borderBottomWidth: 2 }}>
          <span className="icon-tile tone-primary"><StarIcon /></span>
          <span className="grow">
            <b>Fais connaissance avec Coco</b>
            <span className="note" style={{ display: 'block' }}>Ton prénom et ton genre, pour des phrases bien accordées.</span>
          </span>
          <ChevronIcon />
        </Link>
      )}

      <section className="card goal-card">
        <Ring value={pct} size={92} stroke={11} tone={goalMet ? 'success' : 'primary'}>
          {goalMet ? (
            <CheckIcon style={{ width: 38, height: 38, color: 'var(--success)' }} />
          ) : (
            <div><b>{minutesDone}</b><span>/ {goalMinutes} min</span></div>
          )}
        </Ring>
        <div className="grow stack" style={{ gap: 4 }}>
          <h3>{goalMet ? 'Objectif atteint !' : 'Objectif du jour'}</h3>
          <p className="small muted">
            {goalMet
              ? 'Tout ce que tu fais maintenant, c’est du bonus pour ton cerveau.'
              : `Encore ${minutesLeft} min de pratique active pour garder ta série.`}
          </p>
        </div>
      </section>

      <UnlockCard />

      {step && unit && (
        <section className="cta-card" style={unitStyle(unit.id)}>
          <p className="tiny">{unitLabel(unit.id)} · {unit.title}</p>
          {step.kind === 'lesson' && lesson ? (
            <div className="stack" style={{ gap: 4 }}>
              <h2>{lesson.title}</h2>
              <p>{lesson.subtitle} · {lesson.estMinutes} min</p>
            </div>
          ) : (
            <div className="row">
              <span className="icon-tile" style={{ background: 'rgb(255 255 255 / .2)', color: '#fff' }}>
                {step.kind === 'challenge' ? <TrophyIcon /> : <DumbbellIcon />}
              </span>
              <div className="stack grow" style={{ gap: 2 }}>
                <h2>{step.kind === 'challenge' ? 'Défi de l’unité' : 'Entraînement'}</h2>
                <p>{step.kind === 'challenge' ? 'Réussis-le pour débloquer l’unité suivante.' : 'Toutes les notions de l’unité, mélangées.'}</p>
              </div>
            </div>
          )}
          <Link className="btn white" to={stepPath(step)}>
            {step.kind === 'challenge' ? 'Relever le défi' : goalMet ? 'Continuer à apprendre' : lessonStarted ? 'Étape suivante' : 'C’est parti !'}
          </Link>
        </section>
      )}

      {settings && !settings.estimatedBand && (
        <Link to="/placement" className="card list-link" style={{ padding: 16 }}>
          <span className="icon-tile tone-sun"><TargetIcon /></span>
          <span className="grow">
            <b style={{ display: 'block' }}>Passe le test de niveau</b>
            <span className="note">10 minutes pour connaître ton niveau et sauter ce que tu sais déjà.</span>
          </span>
          <ChevronIcon />
        </Link>
      )}

      <section className="card">
        <div className="section-title" style={{ marginBottom: 4 }}>
          <h3><TrophyIcon style={{ color: 'var(--sun)' }} />Quêtes du jour</h3>
          <span className="chip sun">{quests.filter((q) => q.value >= 1).length} / 3</span>
        </div>
        {quests.map((q) => (
          <div key={q.label} className={`quest${q.value >= 1 ? ' done' : ''}`}>
            <span className={`icon-tile ${q.tone}`}>{q.value >= 1 ? <CheckIcon /> : q.icon}</span>
            <div className="grow">
              <div className="row spread"><b>{q.label}</b><span className="count">{q.count}</span></div>
              <ProgressBar value={q.value} tone="sun" thin />
            </div>
          </div>
        ))}
      </section>

      {week && (
        <section className="card stack">
          <div className="section-title">
            <h3><FlameIcon style={{ color: 'var(--flame)' }} />{streak > 0 ? `${streak} jour${streak > 1 ? 's' : ''} de série` : 'Lance ta série'}</h3>
            {(stats?.streak.best ?? 0) > 0 && <span className="chip">record : {stats!.streak.best}</span>}
          </div>
          <div className="week">
            {week.map((d) => (
              <div key={d.date} className={`${d.done ? 'done' : ''}${d.isToday ? ' today' : ''}`}>
                <span>{d.label}</span>
                <i>{d.done && <FlameIcon />}</i>
              </div>
            ))}
          </div>
        </section>
      )}

      {learning && (
        <Link to="/practice/all" className="card list-link" style={{ padding: 16 }}>
          <span className="icon-tile tone-sky"><RefreshIcon /></span>
          <span className="grow">
            <b style={{ display: 'block' }}>Séance de révision</b>
            <span className="note">
              {learning.dueCount > 0 ? `${learning.dueCount} élément${learning.dueCount > 1 ? 's' : ''} à revoir aujourd’hui` : 'Nouveaux mots et verbes à découvrir'}
            </span>
          </span>
          {learning.dueCount > 0 && <span className="chip sky">{learning.dueCount}</span>}
          <ChevronIcon />
        </Link>
      )}

      {learning && (learning.persistent.length > 0 || learning.weak.length > 0 || learning.forgetting.length > 0) && (
        <section className="card stack">
          <div className="section-title">
            <h3><TargetIcon style={{ color: 'var(--danger)' }} />À travailler</h3>
          </div>
          {learning.persistent.slice(0, 2).map((x) => (
            <div key={x.kcId + x.tag} className="row" style={{ alignItems: 'flex-start' }}>
              <span className="grow small"><b>{ERROR_LABELS[x.tag]}</b><br /><span className="muted">{kcLabel(x.kcId)}</span></span>
              <span className="chip danger">{x.count}× en 14 j</span>
            </div>
          ))}
          {learning.weak.slice(0, 3).map((w) => (
            <div key={w.kcId} className="stack" style={{ gap: 6 }}>
              <div className="row spread small">
                <b>{kcLabel(w.kcId)}</b>
                <span className="muted">{Math.round((w.summary.value ?? 0) * 100)} %</span>
              </div>
              <ProgressBar value={w.summary.value ?? 0} tone="primary" thin />
            </div>
          ))}
          {learning.forgetting.slice(0, 2).map((f) => (
            <p key={f.kcId} className="small">
              <b>À réviser :</b> {kcLabel(f.kcId)} <span className="muted">(tu t’en souviens à {Math.round((f.retention ?? 0) * 100)} %)</span>
            </p>
          ))}
          <Link className="btn secondary small" style={{ width: '100%' }} to="/practice/weak">M’entraîner sur ces points</Link>
        </section>
      )}

      {learning && (
        <section className="stack" style={{ gap: 10 }}>
          <div className="section-title" style={{ padding: '0 4px' }}>
            <h3>Ta progression</h3>
            <Link to="/progress" className="chip primary" style={{ textDecoration: 'none' }}>Détail</Link>
          </div>
          <div className="stats">
            <div className="stat"><span className="icon-tile tone-success"><StarIcon /></span><div><b>{learning.byState.mastered}</b><span>notions maîtrisées</span></div></div>
            <div className="stat"><span className="icon-tile tone-primary"><BrainIcon /></span><div><b>{learning.byState.developing + learning.byState.practicing}</b><span>en cours</span></div></div>
            <div className="stat"><span className="icon-tile tone-pink"><BookIcon /></span><div><b>{learning.wordsActive}</b><span>mots actifs</span></div></div>
            <div className="stat"><span className="icon-tile tone-teal"><LetterIcon /></span><div><b>{learning.verbsLearned}</b><span>verbes irréguliers</span></div></div>
          </div>
          <p className="note" style={{ padding: '0 4px' }}>
            Un mot est « actif » quand tu sais le retrouver ou le dire ({learning.wordsPassive} autres reconnus seulement).
          </p>
        </section>
      )}
    </div>
  );
}
