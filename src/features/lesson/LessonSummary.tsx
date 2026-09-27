import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import type { Lesson } from '../../content/types';
import { useToday } from '../../db/hooks';
import { nextLessonId } from '../../db/progress';
import { ProgressBar } from '../../ui/ProgressBar';
import { UnlockCard } from '../focus/UnlockCard';
import { formatMinutes } from '../../ui/format';

export function LessonSummary({ lesson, score, xp }: { lesson: Lesson; score: number; xp: number }) {
  const today = useToday();
  const nextId = useLiveQuery(() => nextLessonId());
  const pct = Math.round(score * 100);
  const goalPct = today ? today.activeSeconds / today.goalSeconds : 0;
  const verdict = pct >= 90 ? 'Excellent.' : pct >= 70 ? 'Bien joué.' : 'Leçon terminée. Elle reviendra en révision.';
  const goalMet = !!today?.goalMetAt;

  return (
    <div className="screen full">
      <div className="stack celebrate" style={{ marginTop: 24 }}>
        <p className="tiny muted">{lesson.title}</p>
        <h1>{verdict}</h1>
      </div>
      <div className="stats">
        <div className="stat"><b>{pct} %</b><span>réussite au 1ᵉʳ essai</span></div>
        <div className="stat"><b>+{xp}</b><span>XP</span></div>
      </div>
      {today && (
        <div className="card stack">
          <div className="row spread">
            <h3>Objectif du jour</h3>
            <span className="muted small">{formatMinutes(today.activeSeconds)} / {formatMinutes(today.goalSeconds)}</span>
          </div>
          <ProgressBar value={goalPct} tone={goalMet ? 'success' : undefined} />
        </div>
      )}
      <UnlockCard />
      <div className="bottom-action stack">
        {nextId && (
          // App.tsx remonte le lecteur (key = lessonId) : la leçon repart de zéro.
          <Link className={`btn ${goalMet ? 'secondary' : ''}`} to={`/lesson/${nextId}`} replace>
            Leçon suivante
          </Link>
        )}
        <Link className={`btn ${goalMet ? '' : 'secondary'}`} to="/" replace>Retour à l’accueil</Link>
      </div>
    </div>
  );
}
