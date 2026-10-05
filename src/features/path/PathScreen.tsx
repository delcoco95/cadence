import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { CEFR_LEVELS } from '../../content/types';
import { getLesson, unitsForLevel, PATH } from '../../content';
import { db } from '../../db/db';
import { nextLessonId } from '../../db/progress';
import { Mascot } from '../../ui/Mascot';
import { unitStyle } from '../../ui/units';
import { BookIcon, CheckIcon, LockIcon, RefreshIcon, StarIcon } from '../../ui/Icons';
import { ProgressBar } from '../../ui/ProgressBar';

/** Décalage horizontal des pastilles : le chemin serpente. */
const WAVE = [0, 46, 70, 46, 0, -46, -70, -46];

export function PathScreen() {
  const progress = useLiveQuery(async () => new Map((await db.lessonProgress.toArray()).map((p) => [p.lessonId, p])));
  const nextId = useLiveQuery(() => nextLessonId());
  const done = progress ? PATH.filter((id) => progress.get(id)?.status === 'completed').length : 0;
  let step = 0;

  return (
    <div className="screen">
      <header className="stack" style={{ gap: 8 }}>
        <div className="row spread">
          <h1>Ton parcours</h1>
          <span className="pill level">A2 → C2</span>
        </div>
        <div className="row" style={{ gap: 10 }}>
          <div className="grow"><ProgressBar value={done / PATH.length} tone="sun" label="Leçons du niveau A2" /></div>
          <span className="small muted" style={{ fontWeight: 800 }}>{done} / {PATH.length}</span>
        </div>
      </header>

      {CEFR_LEVELS.map((level) => {
        const units = unitsForLevel(level);
        if (units.length === 0) {
          return (
            <div key={level} className="level-soon">
              <span className="icon-tile" style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}><LockIcon /></span>
              <div>
                <b style={{ color: 'var(--text)' }}>Niveau {level}</b>
                <p className="note">Bientôt disponible. Continue le niveau A2 en attendant.</p>
              </div>
            </div>
          );
        }
        return units.map((u, ui) => (
          <section key={u.id} className="unit" style={unitStyle(u.id)}>
            <div className="unit-banner">
              <div className="grow">
                <p className="tiny">{level} · Unité {ui + 1}</p>
                <h2 style={{ fontSize: 21 }}>{u.title}</h2>
                <p>{u.description}</p>
              </div>
              <span className="icon-tile"><BookIcon /></span>
            </div>
            <div className="path-nodes">
              {u.lessonIds.map((id) => {
                const lesson = getLesson(id)!;
                const p = progress?.get(id);
                const isDone = p?.status === 'completed';
                const consolidate = isDone && p!.bestScore < 0.7;
                const isNext = id === nextId && !isDone;
                const offset = WAVE[step++ % WAVE.length];
                const cls = consolidate ? 'consolidate' : isDone ? 'done' : isNext ? 'next' : 'todo';
                const status = consolidate ? 'à consolider' : isDone ? `terminée, ${Math.round(p!.bestScore * 100)} %` : isNext ? 'prochaine leçon' : 'à venir';
                return (
                  <div key={id} className="node-wrap" style={{ transform: `translateX(${offset}px)` }}>
                    {isNext && <span className="node-tip">Commencer</span>}
                    <Link to={`/lesson/${id}`} className={`node ${cls}`} aria-label={`${lesson.title}, ${status}`}>
                      {isNext && <span className="node-ring" />}
                      {consolidate ? <RefreshIcon /> : isDone ? <CheckIcon /> : <StarIcon />}
                    </Link>
                    <span className="node-label">{lesson.title}</span>
                    {isNext && (
                      <span className="path-mascot" style={offset >= 0 ? { right: 'calc(100% + 18px)' } : { left: 'calc(100% + 18px)' }}>
                        <Mascot mood="happy" size={78} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ));
      })}
    </div>
  );
}
