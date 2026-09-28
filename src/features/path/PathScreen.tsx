import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { CEFR_LEVELS } from '../../content/types';
import { getLesson, unitsForLevel, VOCAB_A2, IRREGULAR_VERBS, TOTAL_EXERCISES } from '../../content';
import { learningStats } from '../../db/learning';
import { db } from '../../db/db';
import { nextLessonId } from '../../db/progress';

export function PathScreen() {
  const progress = useLiveQuery(async () => new Map((await db.lessonProgress.toArray()).map((p) => [p.lessonId, p])));
  const nextId = useLiveQuery(() => nextLessonId());
  const stats = useLiveQuery(() => learningStats());

  return (
    <div className="screen">
      <header>
        <p className="muted small">Parcours</p>
        <h1>A2 → C2</h1>
        <p className="small muted">{TOTAL_EXERCISES} exercices de leçon, {VOCAB_A2.length} mots, {IRREGULAR_VERBS.length} verbes irréguliers</p>
      </header>

      <section className="stack">
        <p className="tiny muted">Entraînement libre</p>
        <div className="module-grid">
          <Link className="module" to="/practice/all">
            <b>↻ Séance du jour</b>
            <span className="small muted">{stats?.dueCount ?? 0} à revoir</span>
          </Link>
          <Link className="module" to="/practice/vocab">
            <b>📚 Vocabulaire</b>
            <span className="small muted">{stats?.wordsStarted ?? 0} / {VOCAB_A2.length} mots</span>
          </Link>
          <Link className="module" to="/practice/irregular">
            <b>🔤 Verbes irréguliers</b>
            <span className="small muted">{stats?.verbsStarted ?? 0} / {IRREGULAR_VERBS.length} verbes</span>
          </Link>
          <Link className="module" to="/practice/weak">
            <b>🎯 Points faibles</b>
            <span className="small muted">{stats?.weak.length ?? 0} notion(s)</span>
          </Link>
        </div>
      </section>
      {CEFR_LEVELS.map((level) => {
        const units = unitsForLevel(level);
        return (
          <section key={level} className="stack">
            <div className="row">
              <span className="chip accent">{level}</span>
              {units.length === 0 && <span className="muted small">Contenu à venir</span>}
            </div>
            {units.map((u) => (
              <div key={u.id} className="card">
                <h3>{u.title}</h3>
                <p className="muted small" style={{ marginBottom: 6 }}>{u.description}</p>
                {u.lessonIds.map((id, i) => {
                  const lesson = getLesson(id)!;
                  const p = progress?.get(id);
                  const done = p?.status === 'completed';
                  const isNext = id === nextId && !done;
                  return (
                    <Link key={id} to={`/lesson/${id}`} className="lesson-row">
                      <span className={`dot${done ? ' done' : isNext ? ' next' : ''}`}>{done ? '✓' : i + 1}</span>
                      <div className="grow">
                        <p style={{ fontWeight: 600 }}>{lesson.title}</p>
                        <p className="small muted">{lesson.subtitle}</p>
                      </div>
                      {done && <span className="small muted">{Math.round(p!.bestScore * 100)} %</span>}
                    </Link>
                  );
                })}
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
