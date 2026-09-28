import { useCallback, useRef, useState, type ReactNode } from 'react';
import type { Exercise } from '../../content/types';
import { gradeExercise, xpFor, type ExerciseResponse, type ExerciseResult } from '../../core/exercise';
import type { IntroCard, SessionItem } from '../../core/session';
import { recordResult } from '../../db/learning';
import type { Attempt } from '../../db/db';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { ProgressBar } from '../../ui/ProgressBar';
import { CloseIcon, SpeakerIcon } from '../../ui/Icons';
import { ExerciseView } from './ExerciseView';
import { AudioPrompt } from './AudioPrompt';

export interface RunSummary {
  /** Réussite moyenne au premier essai, 0..1 */
  score: number;
  xp: number;
  /** exerciseId → score au premier essai */
  firstTry: Map<string, number>;
  answered: number;
}

interface Props {
  items: SessionItem[];
  context: Attempt['context'];
  lessonId?: string;
  onExit: () => void;
  onFinish: (s: RunSummary) => void;
  /** Contenu affiché sous la barre (bannière d'objectif…) */
  banner?: ReactNode;
  /** Appelé à chaque interaction non tactile (lecture audio) pour le temps actif */
  onActivity?: () => void;
}

export function ExerciseRunner({ items, context, lessonId, onExit, onFinish, banner, onActivity }: Props) {
  const settings = useSettings();
  const [queue, setQueue] = useState<SessionItem[]>(items);
  const [pos, setPos] = useState(0);
  const [response, setResponse] = useState<ExerciseResponse | null>(null);
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const firstTry = useRef(new Map<string, number>());
  const xp = useRef(0);
  const startedAt = useRef(Date.now());

  const accent = settings?.accent ?? 'en-GB';
  const rate = settings?.speechRate ?? 0.9;
  const say = useCallback(
    (text: string, slow?: boolean) => {
      onActivity?.();
      speak(text, accent, slow ? 0.6 : rate);
    },
    [accent, rate, onActivity],
  );

  const exerciseCount = new Set(items.filter((i) => i.kind === 'exercise').map((i) => (i.kind === 'exercise' ? i.exercise.id : ''))).size;
  const introCount = items.filter((i) => i.kind === 'intro').length;
  const doneCount = firstTry.current.size + queue.slice(0, pos).filter((i) => i.kind === 'intro').length;
  const progress = doneCount / Math.max(1, exerciseCount + introCount);
  const retries = queue.length - items.length;
  const current = queue[pos];

  function finish() {
    const scores = [...firstTry.current.values()];
    onFinish({
      score: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 1,
      xp: xp.current,
      firstTry: firstTry.current,
      answered: scores.length,
    });
  }

  function advance() {
    setResult(null);
    setResponse(null);
    startedAt.current = Date.now();
    if (pos + 1 < queue.length) setPos(pos + 1);
    else finish();
  }

  async function check() {
    if (!current || current.kind !== 'exercise' || !response) return;
    const ex = current.exercise;
    const r = gradeExercise(ex, response);
    setResult(r);
    const isFirst = !firstTry.current.has(ex.id);
    if (isFirst) {
      firstTry.current.set(ex.id, r.score);
      xp.current += xpFor(ex, r.score);
      // Erreur au premier essai : l'exercice revient une fois plus tard dans la séance.
      if (r.verdict === 'wrong') setQueue((q) => [...q, { ...current }]);
    }
    await recordResult({
      exercise: ex,
      result: r,
      durationMs: Date.now() - startedAt.current,
      context: current.source === 'lesson' ? context : current.source,
      lessonId,
      cardId: current.cardId,
      firstTry: isFirst,
      response: JSON.stringify(response),
    });
  }

  /** « Je ne peux pas parler » : on retire tous les exercices oraux restants de la séance. */
  function skipSpeaking() {
    const rest = queue.slice(pos + 1).filter((i) => !(i.kind === 'exercise' && i.exercise.type === 'speak'));
    const next = [...queue.slice(0, pos), ...rest];
    setQueue(next);
    setResponse(null);
    if (pos >= next.length) finish();
  }

  if (!current) return null;

  return (
    <div className="screen full" style={{ paddingBottom: result ? 300 : undefined }}>
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={onExit}>
          <CloseIcon />
        </button>
        <ProgressBar value={progress} />
        {retries > 0 && <span className="chip amber">+{retries}</span>}
      </div>
      {banner}

      {current.kind === 'intro' ? (
        <IntroView key={`intro-${pos}`} intro={current.intro} say={say} onNext={advance} />
      ) : (
        <>
          {current.source === 'review' && <span className="chip" style={{ alignSelf: 'flex-start' }}>↻ Révision</span>}
          {current.source === 'drill' && <span className="chip amber" style={{ alignSelf: 'flex-start' }}>🎯 Point faible</span>}
          <ExerciseView
            key={`${current.exercise.id}-${pos}`}
            exercise={current.exercise}
            locked={!!result}
            revealIndex={current.exercise.type === 'mcq' || current.exercise.type === 'listen_mcq' ? current.exercise.answer : undefined}
            onChange={setResponse}
            onSubmit={() => void check()}
            say={say}
            lang={accent}
            onSkipSpeaking={skipSpeaking}
          />
          {!result && (
            <div className="bottom-action">
              <button className="btn" disabled={!response} onClick={() => void check()}>Vérifier</button>
            </div>
          )}
          {result && <Feedback exercise={current.exercise} result={result} onNext={advance} onSpeak={say} />}
        </>
      )}
    </div>
  );
}

function IntroView({ intro, say, onNext }: { intro: IntroCard; say: (t: string) => void; onNext: () => void }) {
  return (
    <>
      <div className="card stack celebrate" style={{ padding: 24, gap: 12 }}>
        <p className="tiny" style={{ color: 'var(--accent)' }}>{intro.label}</p>
        <h1>{intro.title}</h1>
        <p className="muted" style={{ fontSize: 19 }}>{intro.subtitle}</p>
        <AudioPrompt text={intro.speak} say={say} />
        {intro.lines?.map((l, i) => (
          <div key={i} className="example">
            <p>{l.en}</p>
            {l.fr && <p className="small muted">{l.fr}</p>}
          </div>
        ))}
      </div>
      <div className="bottom-action">
        <button className="btn" onClick={onNext}>Compris</button>
      </div>
    </>
  );
}

function Feedback({ exercise, result, onNext, onSpeak }: {
  exercise: Exercise; result: ExerciseResult; onNext: () => void; onSpeak: (t: string) => void;
}) {
  const isSpeak = exercise.type === 'speak';
  const title =
    result.verdict === 'correct'
      ? isSpeak ? 'Bien dit !' : 'Correct'
      : result.verdict === 'typo'
        ? isSpeak ? 'Presque : quelques mots n’ont pas été compris' : 'Presque : attention à l’orthographe'
        : isSpeak ? 'Pas encore compréhensible' : 'Pas tout à fait';
  const showExpected = !isSpeak && (result.verdict !== 'correct' || exercise.type === 'translate');
  const missing = new Set(result.speech?.missing ?? []);

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
        {result.speech && (
          <div className="stack" style={{ gap: 6 }}>
            <p className="small"><span className="muted">Entendu : </span>« {result.speech.heard || '…'} »</p>
            {exercise.type === 'speak' && exercise.mode !== 'answer' && (
              <p className="small">
                <span className="muted">Attendu : </span>
                {result.expected.split(' ').map((w, i) => (
                  <span key={i} style={missing.has(w.toLowerCase().replace(/[.,!?]/g, '')) ? { color: 'var(--danger)', fontWeight: 700 } : undefined}>
                    {w}{' '}
                  </span>
                ))}
              </p>
            )}
            {result.speech.note && <p className="small">{result.speech.note}</p>}
            {exercise.type === 'speak' && exercise.mode === 'answer' && (
              <p className="small"><span className="muted">Exemple : </span>{result.expected}</p>
            )}
          </div>
        )}
        <p className="small">{exercise.explanation}</p>
        <button className={`btn ${result.verdict === 'wrong' ? 'danger' : 'success'}`} onClick={onNext} autoFocus>Continuer</button>
      </div>
    </div>
  );
}
