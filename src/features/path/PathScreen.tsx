import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link, useNavigate } from 'react-router-dom';
import { CEFR_LEVELS } from '../../content/types';
import { getLesson, UNITS } from '../../content';
import type { Step, UnitView } from '../../core/units';
import { loadPath, stepPath } from '../../db/units';
import { useSettings } from '../../db/hooks';
import { Mascot } from '../../ui/Mascot';
import { unitLabel, unitStyle } from '../../ui/units';
import { BookIcon, CheckIcon, CrownIcon, DumbbellIcon, LockIcon, RefreshIcon, StarIcon, TargetIcon, TrophyIcon } from '../../ui/Icons';
import { ProgressBar } from '../../ui/ProgressBar';

/** Décalage horizontal des pastilles : le chemin serpente. */
const WAVE = [0, 46, 70, 46, 0, -46, -70, -46];

const VIA_LABEL = { challenge: 'Validée', placement: 'Validée par le test', jump: 'Validée (saut)', self: 'Ouverte (niveau choisi)' } as const;

function stepLabel(s: Step): string {
  if (s.kind === 'lesson') return getLesson(s.lessonId!)?.title ?? '';
  return s.kind === 'practice' ? 'Entraînement' : 'Défi de l’unité';
}

function StepIcon({ s }: { s: Step }) {
  if (s.status === 'locked') return <LockIcon />;
  if (s.kind === 'practice') return s.status === 'done' ? <CheckIcon /> : <DumbbellIcon />;
  if (s.kind === 'challenge') return s.status === 'done' ? <CrownIcon /> : <TrophyIcon />;
  if (s.status === 'consolidate') return <RefreshIcon />;
  return s.status === 'done' ? <CheckIcon /> : <StarIcon />;
}

interface Sheet {
  view: UnitView;
  step: Step;
}

export function PathScreen() {
  const path = useLiveQuery(() => loadPath());
  const settings = useSettings();
  const navigate = useNavigate();
  const [sheet, setSheet] = useState<Sheet | null>(null);
  if (!path) return null;
  let wave = 0;
  const next = path.next;
  const isNext = (s: Step) => !!next && next.unitId === s.unitId && next.kind === s.kind && next.lessonId === s.lessonId;

  return (
    <div className="screen">
      <header className="stack" style={{ gap: 8 }}>
        <div className="row spread">
          <h1>Ton parcours</h1>
          <Link to="/placement" className="pill level" style={{ textDecoration: 'none' }}>
            {settings?.estimatedBand ? `Niveau ${settings.estimatedBand}` : 'Test de niveau'}
          </Link>
        </div>
        <div className="row" style={{ gap: 10 }}>
          <div className="grow"><ProgressBar value={path.validatedCount / UNITS.length} tone="sun" label="Unités validées" /></div>
          <span className="small muted" style={{ fontWeight: 800 }}>{path.validatedCount} / {UNITS.length} unités</span>
        </div>
      </header>

      {CEFR_LEVELS.map((level) => {
        const views = path.units.filter((v) => v.unit.cefr === level);
        if (views.length === 0) {
          return (
            <div key={level} className="level-soon">
              <span className="icon-tile" style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}><LockIcon /></span>
              <div>
                <b style={{ color: 'var(--text)' }}>Niveau {level}</b>
                <p className="note">Bientôt disponible.</p>
              </div>
            </div>
          );
        }
        return views.map((v) => {
          return (
            <section key={v.unit.id} className={`unit${v.unlocked ? '' : ' locked'}`} style={unitStyle(v.unit.id)}>
              <div className="unit-banner">
                <div className="grow">
                  <p className="tiny">{unitLabel(v.unit.id)}</p>
                  <h2 style={{ fontSize: 21 }}>{v.unit.title}</h2>
                  <p>{v.unit.description}</p>
                  {v.validated && (
                    <span className="chip" style={{ background: 'rgb(255 255 255 / .22)', color: 'inherit', marginTop: 8 }}>
                      <CrownIcon />{VIA_LABEL[v.via ?? 'challenge']}
                    </span>
                  )}
                </div>
                {v.unlocked ? (
                  <span className="icon-tile">{v.validated ? <CrownIcon /> : <BookIcon />}</span>
                ) : (
                  <Link to={`/unit/${v.unit.id}/challenge?jump=1`} className="btn small secondary" style={{ flex: 'none' }}>Sauter ici</Link>
                )}
              </div>
              <div className="path-nodes">
                {v.steps.map((s) => {
                  const offset = WAVE[wave++ % WAVE.length];
                  const nextHere = isNext(s);
                  const cls = [
                    'node',
                    s.kind !== 'lesson' ? s.kind : '',
                    s.status === 'locked' ? 'locked' : s.status === 'available' ? (nextHere ? 'next' : 'todo') : s.status,
                  ].join(' ');
                  const label = stepLabel(s);
                  const key = `${s.kind}-${s.lessonId ?? s.unitId}`;
                  return (
                    <div key={key} className={`node-wrap${nextHere ? ' has-tip' : ''}`} style={{ transform: `translateX(${offset}px)` }}>
                      {nextHere && <span className="node-tip">{s.kind === 'challenge' ? 'Défi !' : 'Commencer'}</span>}
                      <button
                        className={cls}
                        style={{ border: 'none' }}
                        aria-label={`${label}${s.status === 'locked' ? ', verrouillé' : s.status === 'done' ? ', terminé' : ''}`}
                        onClick={() => (s.status === 'locked' ? setSheet({ view: v, step: s }) : navigate(stepPath(s)))}
                      >
                        {nextHere && <span className="node-ring" />}
                        <StepIcon s={s} />
                      </button>
                      <span className="node-label">
                        {label}
                        {s.kind === 'challenge' && s.score !== undefined && s.status !== 'done' && <><br />meilleur : {Math.round(s.score * 100)} %</>}
                      </span>
                      {nextHere && (
                        <span className="path-mascot" style={offset >= 0 ? { right: 'calc(100% + 18px)' } : { left: 'calc(100% + 18px)' }}>
                          <Mascot mood="happy" size={78} />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        });
      })}

      {sheet && <LockedSheet sheet={sheet} onClose={() => setSheet(null)} />}
    </div>
  );
}

function LockedSheet({ sheet, onClose }: { sheet: Sheet; onClose: () => void }) {
  const { view, step } = sheet;
  const lessons = view.steps.filter((s) => s.kind === 'lesson');
  const done = lessons.filter((s) => s.status === 'done' || s.status === 'consolidate').length;
  let title = 'Unité verrouillée';
  let text = 'Réussis le défi de l’unité précédente pour l’ouvrir. Tu connais déjà ces notions ? Saute jusqu’ici en réussissant son défi.';
  if (view.unlocked && step.kind === 'practice') {
    title = 'Encore un peu de chemin';
    text = `Termine d’abord les leçons de l’unité (${done} / ${lessons.length}). L’entraînement mélange ensuite toutes leurs notions.`;
  } else if (view.unlocked && step.kind === 'challenge') {
    title = 'Le défi se mérite';
    text = 'Fais d’abord l’entraînement de l’unité : c’est lui qui te prépare au défi.';
  }
  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet" role="dialog" aria-label={title}>
        <div className="sheet-inner">
          <div className="row">
            <span className="icon-tile tone-primary"><LockIcon /></span>
            <h3 className="grow">{title}</h3>
          </div>
          <p className="small">{text}</p>
          {!view.unlocked && (
            <Link className="btn sun" to={`/unit/${view.unit.id}/challenge?jump=1`}><TargetIcon />Sauter jusqu’ici</Link>
          )}
          <button className="btn secondary" onClick={onClose}>Compris</button>
        </div>
      </div>
    </>
  );
}
