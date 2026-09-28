import type { CSSProperties } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { getLesson } from '../../content';
import { greeting } from '../../core/dates';
import { loadStats } from '../../db/activity';
import { useSettings, useToday } from '../../db/hooks';
import { nextLessonId } from '../../db/progress';
import { ERROR_LABELS } from '../../core/errors';
import { learningStats } from '../../db/learning';
import { kcLabel } from '../../content/kcs';
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
  const learning = useLiveQuery(() => learningStats());
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

      {learning && (
        <section className="card stack">
          <div className="row spread">
            <h3>↻ Séance du jour</h3>
            {learning.dueCount > 0 && <span className="chip amber">{learning.dueCount} à revoir</span>}
          </div>
          <p className="small muted">
            {learning.dueCount > 0
              ? 'Révisions espacées, nouveaux mots et verbes, exercices sur tes points faibles.'
              : 'Aucune révision en attente : la séance te présente de nouveaux mots et verbes.'}
          </p>
          <Link className="btn secondary" to="/practice/all">Lancer la séance</Link>
        </section>
      )}

      {learning && (learning.persistent.length > 0 || learning.weak.length > 0 || learning.forgetting.length > 0) && (
        <section className="card stack">
          <h3>🎯 À travailler</h3>
          {learning.persistent.slice(0, 2).map((p) => (
            <div key={p.kcId + p.tag} className="row spread small" style={{ alignItems: 'flex-start' }}>
              <span><b>Difficulté persistante</b> · {ERROR_LABELS[p.tag]}<br /><span className="muted">{kcLabel(p.kcId)}</span></span>
              <span className="chip amber">{p.count}× / 14 j</span>
            </div>
          ))}
          {learning.weak.slice(0, 3).map((w) => (
            <div key={w.kcId} className="stack" style={{ '--gap': '6px' } as CSSProperties}>
              <div className="row spread small">
                <span>{kcLabel(w.kcId)}</span>
                <span className="muted">maîtrise {Math.round((w.summary.value ?? 0) * 100)} %</span>
              </div>
              <ProgressBar value={w.summary.value ?? 0} thin />
            </div>
          ))}
          {learning.forgetting.slice(0, 2).map((f) => (
            <p key={f.kcId} className="small">
              <b>À réviser</b> · {kcLabel(f.kcId)} <span className="muted">(maîtrise {Math.round((f.summary.value ?? 0) * 100)} %, rétention {Math.round((f.retention ?? 0) * 100)} %)</span>
            </p>
          ))}
          <Link className="btn secondary small" to="/practice/weak">S’entraîner sur mes points faibles</Link>
        </section>
      )}

      {learning && (
        <section className="card stack">
          <div className="row spread">
            <h3>Ta progression réelle</h3>
            {learning.retention !== null && <span className="chip">rétention {Math.round(learning.retention * 100)} %</span>}
          </div>
          <div className="stats">
            <div className="stat"><b>{learning.byState.mastered}</b><span>notions maîtrisées</span></div>
            <div className="stat"><b>{learning.byState.developing + learning.byState.practicing}</b><span>notions en cours</span></div>
            <div className="stat"><b>📚 {learning.wordsActive}</b><span>mots actifs ({learning.wordsPassive} reconnus seulement)</span></div>
            <div className="stat"><b>🔤 {learning.verbsLearned}</b><span>verbes irréguliers retenus</span></div>
          </div>
          <p className="tiny muted" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>
            Une notion n’est « maîtrisée » qu’après des réussites en production, à plusieurs jours d’intervalle. Un mot est « actif » quand tu sais le retrouver ou le dire, pas seulement le reconnaître.
          </p>
          <Link className="btn ghost small" to="/progress">Voir le détail par notion</Link>
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
    </div>
  );
}
