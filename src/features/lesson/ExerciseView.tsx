import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import type { Exercise, ListenMcqExercise, McqExercise, WordBankExercise } from '../../content/types';
import { seededShuffle, type ExerciseResponse } from '../../core/exercise';
import { SpeakInput } from './SpeakInput';
import { AudioPrompt } from './AudioPrompt';
import { Mascot } from '../../ui/Mascot';
import { sfx } from '../../ui/sfx';

export interface ExerciseProps {
  exercise: Exercise;
  locked: boolean;
  /** Bonne option à mettre en évidence après correction (QCM) */
  revealIndex?: number;
  onChange: (r: ExerciseResponse | null) => void;
  onSubmit: () => void;
  /** Lecture par la synthèse vocale (slow = débit réduit) */
  say: (text: string, slow?: boolean) => void;
  /** Langue de reconnaissance vocale, ex. 'en-GB' */
  lang: string;
  /** « Je ne peux pas parler maintenant » */
  onSkipSpeaking: () => void;
  /** Graine de mélange des options (change à chaque repêchage) */
  shuffleSeed?: string;
}
type Props = ExerciseProps;

export function ExerciseView(props: Props) {
  const { exercise: ex } = props;
  return (
    <div className="stack" style={{ '--gap': '20px' } as CSSProperties}>
      <h2 className="instruction">{ex.instruction}</h2>
      {(ex.type === 'mcq' || ex.type === 'listen_mcq') && <Mcq {...props} exercise={ex} />}
      {ex.type === 'word_bank' && <WordBank {...props} exercise={ex} />}
      {(ex.type === 'type_answer' || ex.type === 'cloze' || ex.type === 'translate' || ex.type === 'dictation') && (
        <TextAnswer {...props} />
      )}
      {ex.type === 'speak' && <SpeakInput {...props} exercise={ex} />}
    </div>
  );
}

function Mcq({ exercise, locked, revealIndex, onChange, say, shuffleSeed }: Props & { exercise: McqExercise | ListenMcqExercise }) {
  const [selected, setSelected] = useState<number | null>(null);
  const order = useMemo(() => seededShuffle(exercise.options.map((_, i) => i), shuffleSeed ?? exercise.id), [exercise, shuffleSeed]);
  return (
    <>
      {exercise.type === 'listen_mcq' && <AudioPrompt text={exercise.audio} say={say} />}
      <p className="prompt">{exercise.question}</p>
      {exercise.type === 'listen_mcq' && locked && <p className="muted" style={{ fontWeight: 700 }}>« {exercise.audio} »</p>}
      <div className="stack" style={{ '--gap': '10px' } as CSSProperties}>
        {order.map((i, n) => {
          let cls = 'option';
          if (locked && i === revealIndex) cls += ' correct';
          else if (locked && i === selected) cls += ' wrong';
          else if (i === selected) cls += ' selected';
          return (
            <button
              key={i}
              className={cls}
              disabled={locked}
              onClick={() => {
                sfx.tap();
                setSelected(i);
                onChange({ kind: 'choice', index: i });
              }}
            >
              <span className="key">{n + 1}</span>
              <span>{exercise.options[i]}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function TextAnswer({ exercise, locked, onChange, onSubmit, say }: Props) {
  const [value, setValue] = useState('');
  let prompt: ReactNode = null;
  let placeholder = 'Ta réponse';
  if (exercise.type === 'cloze') {
    const [before, after] = exercise.sentence.split('___');
    prompt = (
      <p className="prompt">
        {before}
        <span className="cloze-blank">{value || ' '}</span>
        {after}
        {exercise.hint && <span className="muted" style={{ fontWeight: 500 }}> ({exercise.hint})</span>}
      </p>
    );
    placeholder = 'Mot(s) manquant(s)';
  } else if (exercise.type === 'translate') {
    prompt = <SaysPrompt text={exercise.source} />;
    placeholder = exercise.direction === 'fr_en' ? 'In English…' : 'En français…';
  } else if (exercise.type === 'type_answer') {
    prompt = <p className="prompt">{exercise.question}</p>;
  } else if (exercise.type === 'dictation') {
    prompt = <AudioPrompt text={exercise.audio} say={say} />;
    placeholder = 'Écris ce que tu entends…';
  }
  const multiline = exercise.type === 'translate' || exercise.type === 'dictation';
  const common = {
    className: 'field',
    value,
    disabled: locked,
    placeholder,
    autoCapitalize: 'off',
    autoCorrect: 'off',
    spellCheck: false,
    autoFocus: true,
    lang: exercise.type === 'translate' && exercise.direction === 'en_fr' ? 'fr' : 'en',
  } as const;
  const update = (v: string) => {
    setValue(v);
    onChange(v.trim() ? { kind: 'text', value: v } : null);
  };
  return (
    <>
      {prompt}
      {multiline ? (
        <textarea
          {...common}
          rows={3}
          onChange={(e) => update(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (value.trim()) onSubmit();
            }
          }}
        />
      ) : (
        <input
          {...common}
          enterKeyHint="done"
          onChange={(e) => update(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && value.trim()) onSubmit();
          }}
        />
      )}
    </>
  );
}

function WordBank({ exercise, locked, onChange, shuffleSeed }: Props & { exercise: WordBankExercise }) {
  const bank = useMemo(
    () => seededShuffle([...exercise.tokens, ...(exercise.distractors ?? [])], shuffleSeed ?? exercise.id),
    [exercise, shuffleSeed],
  );
  const [picked, setPicked] = useState<number[]>([]);
  const emit = (next: number[]) => {
    setPicked(next);
    onChange(next.length ? { kind: 'tokens', tokens: next.map((i) => bank[i]) } : null);
  };
  return (
    <>
      <SaysPrompt text={exercise.question} />
      <div className="answer-line">
        {picked.map((i) => (
          <button key={i} className="token" disabled={locked} onClick={() => emit(picked.filter((p) => p !== i))}>
            {bank[i]}
          </button>
        ))}
      </div>
      <div className="tokens">
        {bank.map((t, i) => (
          <button
            key={i}
            className={`token${picked.includes(i) ? ' used' : ''}`}
            disabled={locked || picked.includes(i)}
            onClick={() => {
              sfx.tap();
              emit([...picked, i]);
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </>
  );
}

/** Phrase à traduire, « dite » par Coco dans une bulle. */
export function SaysPrompt({ text }: { text: string }) {
  return (
    <div className="prompt-card">
      <Mascot mood="idle" size={68} />
      <div className="bubble">{text}</div>
    </div>
  );
}
