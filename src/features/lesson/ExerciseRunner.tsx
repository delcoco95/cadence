import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react';
import type { ErrorTag, Exercise } from '../../content/types';
import { gradeExercise, xpFor, type ExerciseResponse, type ExerciseResult } from '../../core/exercise';
import type { IntroCard, SessionItem } from '../../core/session';
import { detectErrors, ERROR_LABELS } from '../../core/errors';
import { evidenceOf } from '../../core/evidence';
import { genderizeDeep } from '../../core/gender';
import { recordResult, retryItem, type Confidence } from '../../db/learning';
import { IRREGULAR_FORMS } from '../../db/meta';
import type { Attempt } from '../../db/db';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { ProgressBar } from '../../ui/ProgressBar';
import { CheckIcon, CloseIcon, FlameIcon, SparkleIcon, SpeakerIcon } from '../../ui/Icons';
import { MascotSays } from '../../ui/Mascot';
import { comboText, nudge, praise, useProfileText, type ProfileText } from '../../ui/profile';
import { sfx } from '../../ui/sfx';
import { ExerciseView } from './ExerciseView';
import { AudioPrompt } from './AudioPrompt';

export interface RunSummary {
  /** Réussite moyenne au premier essai, 0..1 */
  score: number;
  xp: number;
  /** exerciseId → score au premier essai */
  firstTry: Map<string, number>;
  answered: number;
  /** Plus longue série de bonnes réponses */
  bestCombo: number;
  durationMs: number;
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

type ExerciseItem = SessionItem & { kind: 'exercise' };

interface Pending {
  item: ExerciseItem;
  result: ExerciseResult;
  response: ExerciseResponse;
  durationMs: number;
  firstTry: boolean;
  errorTags: ErrorTag[];
  askConfidence: boolean;
}

/** Un repêchage revient au moins 3 items plus tard : on doit retrouver la règle, pas la réponse. */
const RETRY_GAP = 3;
const COMBO_MILESTONES = new Set([3, 5, 10, 15, 20, 30]);

const SOURCE_CHIPS: Record<string, { text: string; cls: string } | undefined> = {
  review: { text: 'Révision', cls: 'chip sky' },
  drill: { text: 'Point faible', cls: 'chip danger' },
  recap: { text: 'Récap du jour · sans aide', cls: 'chip primary' },
  retry: { text: 'Nouvelle tentative', cls: 'chip sun' },
};

export function ExerciseRunner({ items, context, lessonId, onExit, onFinish, banner, onActivity }: Props) {
  const settings = useSettings();
  const profile = useProfileText();
  const [queue, setQueue] = useState<SessionItem[]>(items);
  const [pos, setPos] = useState(0);
  const [response, setResponse] = useState<ExerciseResponse | null>(null);
  const [pending, setPending] = useState<Pending | null>(null);
  const [combo, setCombo] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const firstTry = useRef(new Map<string, number>());
  const usedIds = useRef(new Set<string>());
  const retries = useRef(new Map<string, number>());
  const correctCount = useRef(0);
  const bestCombo = useRef(0);
  const xp = useRef(0);
  const startedAt = useRef(Date.now());
  const sessionStart = useRef(Date.now());

  const accent = settings?.accent ?? 'en-GB';
  const rate = settings?.speechRate ?? 0.9;
  const voiceName = settings?.voiceName;
  const voiceGender = settings?.voiceGender ?? 'any';
  const say = useCallback(
    (text: string, slow?: boolean) => {
      onActivity?.();
      speak(text, accent, { rate: slow ? 0.6 : rate, voice: { name: voiceName, gender: voiceGender } });
    },
    [accent, rate, voiceName, voiceGender, onActivity],
  );

  const current = queue[pos];
  const progress = (pos + (pending ? 1 : 0)) / Math.max(1, queue.length);
  // L'accord en genre ne touche que l'affichage : la correction garde l'exercice d'origine.
  const shown = useMemo(
    () => (current?.kind === 'exercise' ? genderizeDeep(current.exercise, profile.gender) : undefined),
    [current, profile.gender],
  );

  function finish() {
    const scores = [...firstTry.current.values()];
    onFinish({
      score: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 1,
      xp: xp.current,
      firstTry: firstTry.current,
      answered: scores.length,
      bestCombo: bestCombo.current,
      durationMs: Date.now() - sessionStart.current,
    });
  }

  async function commit(p: Pending, confidence?: Confidence) {
    await recordResult({
      exercise: p.item.exercise,
      result: p.result,
      durationMs: p.durationMs,
      context: p.item.source === 'lesson' ? context : p.item.source,
      lessonId,
      cardId: p.item.source === 'retry' ? undefined : p.item.cardId,
      firstTry: p.firstTry,
      response: JSON.stringify(p.response),
      errorTags: p.errorTags,
      confidence,
    });
  }

  function advance(confidence?: Confidence) {
    if (pending) void commit(pending, confidence);
    setPending(null);
    setResponse(null);
    startedAt.current = Date.now();
    if (pos + 1 < queue.length) setPos(pos + 1);
    else finish();
  }

  function check() {
    if (!current || current.kind !== 'exercise' || !response || pending) return;
    const ex = current.exercise;
    const result = gradeExercise(ex, response);
    const errorTags = detectErrors(ex, response, result, { irregulars: IRREGULAR_FORMS });
    const isFirst = !firstTry.current.has(ex.id) && current.source !== 'retry';
    usedIds.current.add(ex.id);
    if (isFirst) {
      firstTry.current.set(ex.id, result.score);
      xp.current += xpFor(ex, result.score);
    }

    if (result.verdict === 'wrong') {
      sfx.wrong();
      setCombo(0);
      // Repêchage varié, inséré plus loin dans la séance (au plus 2 par item).
      const key = current.source === 'retry' ? ex.kcIds[0] ?? ex.id : ex.id;
      const n = (retries.current.get(key) ?? 0) + 1;
      if (n <= 2) {
        retries.current.set(key, n);
        // Exclure aussi ce qui reste à venir : sinon le repêchage ferait doublon avec un item de la leçon.
        const upcoming = queue.slice(pos + 1).flatMap((i) => (i.kind === 'exercise' ? [i.exercise.id] : []));
        const retry = retryItem(ex, current, new Set([...usedIds.current, ...upcoming]), n);
        setQueue((q) => {
          const at = Math.min(q.length, pos + 1 + RETRY_GAP);
          return [...q.slice(0, at), retry, ...q.slice(at)];
        });
      }
    } else {
      const next = combo + 1;
      setCombo(next);
      bestCombo.current = Math.max(bestCombo.current, next);
      if (COMBO_MILESTONES.has(next)) {
        sfx.combo();
        setToast(comboText(next));
        window.setTimeout(() => setToast(null), 1800);
      } else if (result.verdict === 'typo') sfx.typo();
      else sfx.correct();
    }

    // « Sûr de toi ? » : environ une bonne réponse sur 4, en rappel ou production.
    let ask = false;
    if (result.verdict === 'correct' && settings?.askConfidence !== false && evidenceOf(ex) !== 'recognition') {
      correctCount.current++;
      ask = correctCount.current % 4 === 1;
    }
    setPending({ item: current, result, response, durationMs: Date.now() - startedAt.current, firstTry: isFirst, errorTags, askConfidence: ask });
  }

  /** « Je ne peux pas parler » : on retire tous les exercices oraux restants de la séance. */
  function skipSpeaking() {
    const rest = queue.slice(pos + 1).filter((i) => !(i.kind === 'exercise' && i.exercise.type === 'speak'));
    const next = [...queue.slice(0, pos), ...rest];
    setQueue(next);
    setResponse(null);
    if (pos >= next.length) finish();
  }

  function exit() {
    if (pending) void commit(pending);
    onExit();
  }

  if (!current) return null;
  const chip = current.kind === 'exercise' ? SOURCE_CHIPS[current.source] : undefined;

  return (
    <div className="screen full" style={{ paddingBottom: pending ? 340 : undefined }}>
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter" onClick={exit}>
          <CloseIcon />
        </button>
        <ProgressBar value={progress} label="Progression de la séance" />
        <span className={`combo${combo >= 3 ? ' hot' : ''}`} key={combo} aria-label={`${combo} bonnes réponses d’affilée`}>
          {combo >= 2 && <><FlameIcon />{combo}</>}
        </span>
      </div>
      {banner}
      {toast && (
        <div className="combo-toast" role="status"><FlameIcon />{toast}</div>
      )}

      {current.kind === 'intro' ? (
        <IntroView
          key={`intro-${pos}`}
          intro={genderizeDeep(current.intro, profile.gender)}
          say={say}
          onNext={() => advance()}
        />
      ) : (
        <>
          {chip && <span className={`${chip.cls} source-chip`}>{chip.text}</span>}
          <ExerciseView
            key={`${current.exercise.id}-${pos}`}
            exercise={shown as Exercise}
            locked={!!pending}
            revealIndex={current.exercise.type === 'mcq' || current.exercise.type === 'listen_mcq' ? current.exercise.answer : undefined}
            onChange={setResponse}
            onSubmit={check}
            say={say}
            lang={accent}
            onSkipSpeaking={skipSpeaking}
            shuffleSeed={current.shuffleSeed}
          />
          {!pending && (
            <div className="bottom-action">
              <button className="btn success" disabled={!response} onClick={check}>Vérifier</button>
            </div>
          )}
          {pending && (
            <Feedback
              pending={pending}
              shown={shown as Exercise}
              profile={profile}
              seed={pos}
              onNext={advance}
              onSpeak={say}
            />
          )}
        </>
      )}
    </div>
  );
}

function IntroView({ intro, say, onNext }: { intro: IntroCard; say: (t: string, slow?: boolean) => void; onNext: () => void }) {
  return (
    <>
      <div className="stack" style={{ gap: 16 }}>
        <span className="chip primary source-chip"><SparkleIcon />{intro.label}</span>
        <MascotSays mood="wow" size={72}>Nouveau ! Écoute bien et répète dans ta tête.</MascotSays>
        <div className="card stack pop" style={{ padding: 22, gap: 12, alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: 34 }}>{intro.title}</h1>
          <p className="muted" style={{ fontSize: 19, fontWeight: 700 }}>{intro.subtitle}</p>
          <AudioPrompt text={intro.speak} say={say} compact />
        </div>
        {intro.lines?.map((l, i) => (
          <div key={i} className="example">
            <p>{l.en}</p>
            {l.fr && <p className="small muted">{l.fr}</p>}
          </div>
        ))}
      </div>
      <div className="bottom-action">
        <button className="btn" onClick={onNext}>Compris !</button>
      </div>
    </>
  );
}

function Feedback({
  pending, shown, profile, seed, onNext, onSpeak,
}: {
  pending: Pending;
  shown: Exercise;
  profile: ProfileText;
  seed: number;
  onNext: (c?: Confidence) => void;
  onSpeak: (t: string) => void;
}) {
  const { result, errorTags } = pending;
  const exercise = shown;
  const isSpeak = exercise.type === 'speak';
  const title =
    result.verdict === 'correct'
      ? isSpeak ? 'Bien dit !' : praise(profile, seed)
      : result.verdict === 'typo'
        ? isSpeak ? 'Presque ! Quelques mots n’ont pas été compris.' : 'Presque ! Attention à l’orthographe.'
        : isSpeak ? 'Pas encore compréhensible' : nudge(seed);
  const showExpected = !isSpeak && (result.verdict !== 'correct' || exercise.type === 'translate');
  const missing = new Set(result.speech?.missing ?? []);
  const shownErrors = errorTags.filter((t) => t !== 'wrong_choice' && t !== 'spelling');
  const confidence: { value: Confidence; label: string }[] = [
    { value: 1, label: 'J’ai deviné' },
    { value: 2, label: profile.g('Pas sûr', 'Pas sûre', 'Pas sûr·e') },
    { value: 3, label: profile.g('Plutôt sûr', 'Plutôt sûre', 'Plutôt sûr·e') },
    { value: 4, label: profile.g('Certain', 'Certaine', 'Certain·e') },
  ];

  return (
    <div className={`feedback ${result.verdict}`} role="status">
      <div className="feedback-inner">
        <div className="feedback-head">
          <span className="fb-icon">{result.verdict === 'wrong' ? <CloseIcon /> : <CheckIcon />}</span>
          <h3>{title}</h3>
          {exercise.speak && (
            <button className="icon-btn" aria-label="Écouter la phrase" onClick={() => onSpeak(exercise.speak!)}><SpeakerIcon /></button>
          )}
        </div>
        <div className="fb-body">
          {showExpected && (
            <p className="fb-answer">
              {result.verdict === 'correct' ? 'Réponse de référence : ' : 'Bonne réponse : '}
              {profile.t(result.expected)}
            </p>
          )}
          {shownErrors.length > 0 && (
            <p className="small"><b>Erreur repérée : </b>{shownErrors.map((t) => ERROR_LABELS[t]).join(' · ')}</p>
          )}
          {result.speech && (
            <>
              <p className="small"><b>Entendu : </b>« {result.speech.heard || '…'} »</p>
              {exercise.type === 'speak' && exercise.mode !== 'answer' && (
                <p className="small">
                  <b>Attendu : </b>
                  {result.expected.split(' ').map((w, i) => (
                    <span key={i} style={missing.has(w.toLowerCase().replace(/[.,!?]/g, '')) ? { color: 'var(--danger)', fontWeight: 800, textDecoration: 'underline' } : undefined}>
                      {w}{' '}
                    </span>
                  ))}
                </p>
              )}
              {result.speech.note && <p className="small">{result.speech.note}</p>}
              {exercise.type === 'speak' && exercise.mode === 'answer' && (
                <p className="small"><b>Exemple : </b>{profile.t(result.expected)}</p>
              )}
            </>
          )}
          <p className="small">{exercise.explanation}</p>
          {result.verdict === 'wrong' && <p className="note">Pas de souci : cette notion reviendra un peu plus loin, sous une autre forme.</p>}
        </div>
        {pending.askConfidence ? (
          <div className="stack" style={{ gap: 8 }}>
            <p className="small" style={{ fontWeight: 900 }}>{profile.g('Sûr de toi ?', 'Sûre de toi ?', 'Sûr·e de toi ?')}</p>
            <div className="confidence">
              {confidence.map((c) => (
                <button key={c.value} className="option" onClick={() => onNext(c.value)}>{c.label}</button>
              ))}
            </div>
          </div>
        ) : (
          <button className={`btn ${result.verdict === 'wrong' ? 'danger' : result.verdict === 'typo' ? 'sun' : 'success'}`} onClick={() => onNext()} autoFocus>
            Continuer
          </button>
        )}
      </div>
    </div>
  );
}
