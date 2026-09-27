import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { CEFR_LEVELS } from '../../content/types';
import { getLesson, unitsForLevel } from '../../content';
import { db } from '../../db/db';
import { nextLessonId } from '../../db/progress';

export function PathScreen() {
  const progress = useLiveQuery(async () => new Map((await db.lessonProgress.toArray()).map((p) => [p.lessonId, p])));
  const nextId = useLiveQuery(() => nextLessonId());

  return (
    <div className="screen">
      <header>
        <p className="muted small">Parcours</p>
        <h1>A2 → C2</h1>
      </header>
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
