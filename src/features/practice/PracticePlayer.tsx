import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import type { SessionItem } from '../../core/session';
import { prepareSession, type Focus } from '../../db/learning';
import { addActivity } from '../../db/activity';
import { db, getSettings } from '../../db/db';
import { dayKey } from '../../core/dates';
import { ExerciseRunner, type RunSummary } from '../lesson/ExerciseRunner';
import { GoalBanner } from '../lesson/GoalBanner';
import { useActiveTime } from '../lesson/useActiveTime';
import { SessionSummary } from '../lesson/SessionSummary';

export const FOCUS_TITLES: Record<Focus, string> = {
  all: 'Séance du jour',
  vocab: 'Vocabulaire',
  irregular: 'Verbes irréguliers',
  weak: 'Points faibles',
};

/** Budget de la séance : ce qu'il reste de l'objectif, entre 3 et 10 minutes. */
async function budgetSeconds(): Promise<number> {
  const s = await getSettings();
  const today = await db.dailyActivity.get(dayKey());
  const remaining = (today?.goalSeconds ?? s.dailyGoalMinutes * 60) - (today?.activeSeconds ?? 0);
  return Math.min(600, Math.max(180, remaining));
}

export function PracticePlayer() {
  const { focus = 'all' } = useParams();
  const f = (focus in FOCUS_TITLES ? focus : 'all') as Focus;
  const navigate = useNavigate();
  const [items, setItems] = useState<SessionItem[] | null>(null);
  const [summary, setSummary] = useState<RunSummary | null>(null);
  const [goalBanner, setGoalBanner] = useState(false);
  const ping = useActiveTime(() => setGoalBanner(true));

  useEffect(() => {
    let alive = true;
    void budgetSeconds()
      .then((b) => prepareSession(f, b))
      .then((it) => alive && setItems(it));
    return () => {
      alive = false;
    };
  }, [f]);

  if (!items) return <div className="screen full"><p className="muted">Préparation de la séance…</p></div>;

  if (summary) return <SessionSummary title={FOCUS_TITLES[f]} score={summary.score} xp={summary.xp} empty={summary.answered === 0} />;

  if (items.length === 0) {
    return (
      <div className="screen full" style={{ justifyContent: 'center' }}>
        <div className="stack center" style={{ gap: 12 }}>
          <p style={{ fontSize: 44 }}>🌿</p>
          <h2>Rien à réviser pour l’instant</h2>
          <p className="muted">
            {f === 'weak'
              ? 'Aucun point faible détecté : il faut quelques leçons pour que Cadence repère tes difficultés.'
              : 'Tout est à jour. Continue le parcours : les nouvelles notions rejoindront tes révisions.'}
          </p>
        </div>
        <div className="bottom-action stack">
          <Link className="btn" to="/path">Voir le parcours</Link>
          <Link className="btn secondary" to="/">Accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <ExerciseRunner
      items={items}
      context="review"
      onExit={() => navigate('/')}
      onFinish={(s) => {
        void addActivity(0, s.xp);
        setSummary(s);
      }}
      onActivity={ping}
      banner={goalBanner && <GoalBanner onClose={() => setGoalBanner(false)} />}
    />
  );
}
