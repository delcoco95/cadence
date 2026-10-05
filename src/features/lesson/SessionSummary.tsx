import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { useToday } from '../../db/hooks';
import { nextLessonId } from '../../db/progress';
import { ProgressBar } from '../../ui/ProgressBar';
import { UnlockCard } from '../focus/UnlockCard';
import { formatMinutes } from '../../ui/format';
import { Mascot } from '../../ui/Mascot';
import { Confetti } from '../../ui/Confetti';
import { sfx } from '../../ui/sfx';
import { summaryLine, summaryTitle, useProfileText } from '../../ui/profile';
import { BoltIcon, ClockIcon, FlameIcon, TargetIcon } from '../../ui/Icons';
import type { RunSummary } from './ExerciseRunner';

/** Compte de 0 à `to` en ~0,8 s (effet « machine à sous » des récompenses). */
function useCountUp(to: number, delay = 300): number {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (t: number) => {
      const k = Math.min(1, Math.max(0, (t - start) / 800));
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // requestAnimationFrame est suspendu quand la page est masquée : la valeur finale doit s'afficher quand même.
    const done = window.setTimeout(() => setN(to), delay + 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, [to, delay]);
  return n;
}

function formatDuration(ms: number): string {
  const s = Math.max(1, Math.round(ms / 1000));
  return s < 60 ? `${s} s` : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function SessionSummary({ title, summary, empty }: { title: string; summary: RunSummary; empty?: boolean }) {
  const today = useToday();
  const nextId = useLiveQuery(() => nextLessonId());
  const p = useProfileText();
  const pct = Math.round(summary.score * 100);
  const xp = useCountUp(summary.xp);
  const acc = useCountUp(pct, 450);
  const goalPct = today ? today.activeSeconds / today.goalSeconds : 0;
  const goalMet = !!today?.goalMetAt;

  useEffect(() => {
    if (!empty) sfx.complete();
  }, [empty]);

  return (
    <div className="screen full">
      {!empty && <Confetti />}
      <div className="stack center" style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
        <Mascot mood={empty ? 'happy' : pct >= 60 ? 'cheer' : 'happy'} size={140} />
        <p className="tiny muted">{title}</p>
        <h1 className="pop" style={{ color: 'var(--sun-dark)' }}>{summaryTitle(p, pct, empty)}</h1>
        {!empty && <p className="muted" style={{ fontWeight: 700, maxWidth: 360 }}>{summaryLine(p, pct)}</p>}
      </div>

      {!empty && (
        <div className="result-tiles">
          <div className="result-tile" style={{ '--tile': 'var(--sun)' } as CSSProperties}>
            <span>XP gagnés</span>
            <div><BoltIcon />{xp}</div>
          </div>
          <div className="result-tile" style={{ '--tile': 'var(--success)' } as CSSProperties}>
            <span>Précision</span>
            <div><TargetIcon />{acc} %</div>
          </div>
          <div className="result-tile" style={{ '--tile': 'var(--sky)' } as CSSProperties}>
            <span>Temps</span>
            <div><ClockIcon />{formatDuration(summary.durationMs)}</div>
          </div>
        </div>
      )}

      {summary.bestCombo >= 3 && (
        <p className="chip sun" style={{ alignSelf: 'center', fontSize: 14, padding: '6px 14px' }}>
          <FlameIcon style={{ color: 'var(--flame)' }} /> Meilleure série : {summary.bestCombo} d’affilée
        </p>
      )}

      {today && (
        <div className="card stack">
          <div className="row spread">
            <h3>{goalMet ? 'Objectif du jour atteint !' : 'Objectif du jour'}</h3>
            <span className="muted small" style={{ fontWeight: 800 }}>{formatMinutes(today.activeSeconds)} / {formatMinutes(today.goalSeconds)}</span>
          </div>
          <ProgressBar value={goalPct} tone={goalMet ? 'success' : 'primary'} />
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
