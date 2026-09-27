import { useRef, useState, type CSSProperties } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getLesson } from '../../content';
import type { Exercise, ExplanationSection } from '../../content/types';
import { gradeExercise, xpFor, type ExerciseResponse, type ExerciseResult } from '../../core/exercise';
import { completeLesson, recordAttempt } from '../../db/progress';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { ProgressBar } from '../../ui/ProgressBar';
import { CloseIcon, SpeakerIcon } from '../../ui/Icons';
import { ExerciseView } from './ExerciseView';
import { useActiveTime } from './useActiveTime';
import { LessonSummary } from './LessonSummary';

type Phase = 'intro' | 'exercise' | 'done';

export function LessonPlayer() {
  const { lessonId = '' } = useParams();
  const lesson = getLesson(lessonId);
  const navigate = useNavigate();
  const settings = useSettings();
  const [goalBanner, setGoalBanner] = useState(false);
  const ping = useActiveTime(() => setGoalBanner(true));

  const [phase, setPhase] = useState<Phase>('intro');
  const [queue, setQueue] = useState<Exercise[]>(() => lesson?.exercises ?? []);
  const [pos, setPos] = useState(0);
  const [response, setResponse] = useState<ExerciseResponse | null>(null);
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const firstTry = useRef(new Map<string, number>());
  const startedAt = useRef(Date.now());
  const [summary, setSummary] = useState<{ score: number; xp: number } | null>(null);

  if (!lesson) {
    return (
      <div className="screen full">
        <p>Leçon introuvable.</p>
        <Link className="btn secondary" to="/">Retour</Link>
      </div>
    );
  }

  const current = queue[pos];
  const total = lesson.exercises.length;
  const done = firstTry.current.size;
  const retries = queue.length - total;
  const progress = phase === 'intro' ? 0 : done / total;

  const accent = settings?.accent ?? 'en-GB';
  const rate = settings?.speechRate ?? 0.9;
  const say = (text: string) => {
    ping();
    speak(text, accent, rate);
  };

  async function check() {
    if (!current || !response) return;
    const r = gradeExercise(current, response);
    setResult(r);
    const isFirst = !firstTry.current.has(current.id);
    if (isFirst) {
      firstTry.current.set(current.id, r.score);
      // Une erreur au premier essai : l'exercice revient une fois en fin de leçon.
      if (r.verdict === 'wrong') setQueue((q) => [...q, current]);
    }
    await recordAttempt({
      exerciseId: current.id,
      lessonId: lesson!.id,
      at: Date.now(),
      durationMs: Date.now() - startedAt.current,
      score: r.score,
      verdict: r.verdict,
      response: JSON.stringify(response),
      kcIds: current.kcIds,
      context: 'lesson',
    });
  }

  async function next() {
    setResult(null);
    setResponse(null);
    startedAt.current = Date.now();
    if (pos + 1 < queue.length) {
      setPos(pos + 1);
      return;
    }
    const scores = lesson!.exercises.map((e) => firstTry.current.get(e.id) ?? 0);
    const score = scores.reduce((a, b) => a + b, 0) / scores.length;
    const xp = lesson!.exercises.reduce((a, e) => a + xpFor(e, firstTry.current.get(e.id) ?? 0), 0);
    await completeLesson(lesson!.id, score, xp);
    setSummary({ score, xp });
    setPhase('done');
  }

  if (phase === 'done' && summary) {
    return <LessonSummary lesson={lesson} score={summary.score} xp={summary.xp} />;
  }

  return (
    <div className="screen full" style={{ paddingBottom: result ? 260 : undefined }}>
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={() => navigate('/')}>
          <CloseIcon />
        </button>
        <ProgressBar value={progress} />
        {retries > 0 && phase === 'exercise' && <span className="chip amber">+{retries}</span>}
      </div>

      {goalBanner && (
        <div className="card celebrate row" style={{ background: 'var(--success-soft)', borderColor: 'transparent' }}>
          <span>✅</span>
          <p className="small grow"><b>Objectif du jour atteint.</b> Tu peux continuer ou t’arrêter.</p>
          <button className="btn ghost small" onClick={() => setGoalBanner(false)}>OK</button>
        </div>
      )}

      {phase === 'intro' && (
        <>
          <div className="stack" style={{ '--gap': '4px' } as CSSProperties}>
            <span className="chip accent" style={{ alignSelf: 'flex-start' }}>{lesson.cefr} · {lesson.estMinutes} min</span>
            <h1 style={{ marginTop: 8 }}>{lesson.title}</h1>
            <p className="muted">{lesson.subtitle}</p>
          </div>
          {lesson.explanation.map((s, i) => (
            <ExplanationCard key={i} section={s} onSpeak={say} />
          ))}
          <div className="bottom-action">
            <button className="btn" onClick={() => setPhase('exercise')}>Commencer les exercices</button>
          </div>
        </>
      )}

      {phase === 'exercise' && current && (
        <>
          <ExerciseView
            key={`${current.id}-${pos}`}
            exercise={current}
            locked={!!result}
            revealIndex={current.type === 'mcq' ? current.answer : undefined}
            onChange={setResponse}
            onSubmit={() => void check()}
          />
          {!result && (
            <div className="bottom-action">
              <button className="btn" disabled={!response} onClick={() => void check()}>Vérifier</button>
            </div>
          )}
          {result && <Feedback exercise={current} result={result} onNext={() => void next()} onSpeak={say} />}
        </>
      )}
    </div>
  );
}

function ExplanationCard({ section, onSpeak }: { section: ExplanationSection; onSpeak: (t: string) => void }) {
  return (
    <section className="card stack explain">
      <h3>{section.title}</h3>
      {section.body && <p>{section.body}</p>}
      {section.table && (
        <table>
          <tbody>
            {section.table.map((row, i) => (
              <tr key={i}>{row.map((c, j) => <td key={j}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
      {section.examples?.map((ex, i) => (
        <div key={i} className="example row" style={{ alignItems: 'flex-start' }}>
          <div className="grow">
            <p>{ex.en}</p>
            <p className="small muted">{ex.fr}</p>
          </div>
          <button className="icon-btn" aria-label="Écouter" onClick={() => onSpeak(ex.en)}><SpeakerIcon /></button>
        </div>
      ))}
      {section.tip && <p className="tip">💡 {section.tip}</p>}
    </section>
  );
}

function Feedback({ exercise, result, onNext, onSpeak }: {
  exercise: Exercise; result: ExerciseResult; onNext: () => void; onSpeak: (t: string) => void;
}) {
  const title = result.verdict === 'correct' ? 'Correct' : result.verdict === 'typo' ? 'Presque : attention à l’orthographe' : 'Pas tout à fait';
  const showExpected = result.verdict !== 'correct' || exercise.type === 'translate';
  return (
    <div className={`feedback ${result.verdict}`}>
      <div className="feedback-inner">
        <div className="row spread">
          <h3>{title}</h3>
          {exercise.speak && (
            <button className="icon-btn" aria-label="Écouter la phrase" onClick={() => onSpeak(exercise.speak!)}><SpeakerIcon /></button>
          )}
        </div>
        {showExpected && <p><span className="muted small">Réponse : </span><b>{result.expected}</b></p>}
        <p className="small">{exercise.explanation}</p>
        <button className={`btn ${result.verdict === 'wrong' ? 'danger' : 'success'}`} onClick={onNext} autoFocus>Continuer</button>
      </div>
    </div>
  );
}
