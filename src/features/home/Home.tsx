import type { CSSProperties } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { getLesson } from '../../content';
import { greeting } from '../../core/dates';
import { loadStats } from '../../db/activity';
import { useSettings, useToday } from '../../db/hooks';
import { nextLessonId, skillAccuracy } from '../../db/progress';
import { ProgressBar } from '../../ui/ProgressBar';
import { formatMinutes } from '../../ui/format';
import { UnlockCard } from '../focus/UnlockCard';

export const SKILL_LABELS: Record<string, string> = {
  grammar: '🧩 Grammar',
  vocabulary: '📚 Vocabulary',
  listening: '🎧 Listening',
  reading: '📖 Reading',
  writing: '✍️ Writing',
  speaking: '🗣️ Speaking',
};

export function Home() {
  const settings = useSettings();
  const today = useToday();
  const stats = useLiveQuery(() => loadStats());
  const nextId = useLiveQuery(() => nextLessonId());
  const skills = useLiveQuery(() => skillAccuracy());
  const lesson = nextId ? getLesson(nextId) : undefined;

  const goalSeconds = today?.goalSeconds ?? (settings?.dailyGoalMinutes ?? 5) * 60;
  const active = today?.activeSeconds ?? 0;
  const goalMet = !!today?.goalMetAt;
  const pct = Math.min(1, active / goalSeconds);

  return (
    <div className="screen">
      <header className="row spread">
        <div>
          <p className="muted small">🇬🇧 {greeting()}!</p>
          <h1>Today</h1>
        </div>
        <span className="chip accent" title="Ton niveau">{settings?.startLevel ?? 'A2'}</span>
      </header>

      <section className="card stack">
        <div className="row spread">
          <h3>{goalMet ? '✅ Objectif atteint' : `Objectif : ${settings?.dailyGoalMinutes ?? 5} min`}</h3>
          <span className="muted small">{Math.round(pct * 100)} %</span>
        </div>
        <ProgressBar value={pct} tone={goalMet ? 'success' : undefined} />
        <p className="small muted">
          {goalMet
            ? `${formatMinutes(active)} aujourd’hui. Tout ce que tu fais en plus est du bonus.`
            : `Encore ${formatMinutes(Math.max(0, goalSeconds - active) + 59)} de pratique active.`}
        </p>
      </section>

      <UnlockCard />

      {lesson && (
        <section className="card accent stack">
          <p className="tiny" style={{ color: 'var(--accent)' }}>Leçon du jour · {lesson.cefr}</p>
          <div>
            <h2>{lesson.title}</h2>
            <p className="muted small">{lesson.subtitle} · ~{lesson.estMinutes} min</p>
          </div>
          <Link className="btn" to={`/lesson/${lesson.id}`}>{goalMet ? 'Continuer à apprendre' : 'START LESSON'}</Link>
        </section>
      )}

      {stats && (
        <section className="stats">
          <div className="stat"><b>🔥 {stats.streak.current}</b><span>jour{stats.streak.current > 1 ? 's' : ''} de série</span></div>
          <div className="stat"><b>🏆 {stats.streak.best}</b><span>meilleure série</span></div>
          <div className="stat"><b>📅 {stats.streak.daysCompleted}</b><span>jours complétés</span></div>
          <div className="stat"><b>⏱️ {formatMinutes(stats.totalSeconds)}</b><span>temps total</span></div>
        </section>
      )}

      {skills && (
        <section className="card stack">
          <h3>Compétences</h3>
          {Object.entries(SKILL_LABELS).map(([key, label]) => {
            const s = skills[key];
            return (
              <div key={key} className="stack" style={{ '--gap': '6px' } as CSSProperties}>
                <div className="row spread small">
                  <span>{label}</span>
                  <span className="muted">{s ? `${Math.round(s.accuracy * 100)} %` : 'pas encore évalué'}</span>
                </div>
                <ProgressBar value={s?.accuracy ?? 0} thin />
              </div>
            );
          })}
          <p className="tiny muted" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>
            Précision sur 30 jours. Le niveau CECRL par compétence arrive avec le test de placement.
          </p>
        </section>
      )}
    </div>
  );
}
