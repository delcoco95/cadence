import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import type { Exercise, McqExercise, WordBankExercise } from '../../content/types';
import { seededShuffle, type ExerciseResponse } from '../../core/exercise';

interface Props {
  exercise: Exercise;
  locked: boolean;
  /** Bonne option à mettre en évidence après correction (QCM) */
  revealIndex?: number;
  onChange: (r: ExerciseResponse | null) => void;
  onSubmit: () => void;
}

export function ExerciseView(props: Props) {
  const { exercise: ex } = props;
  return (
    <div className="stack" style={{ '--gap': '20px' } as CSSProperties}>
      <p className="tiny muted">{ex.instruction}</p>
      {ex.type === 'mcq' && <Mcq {...props} exercise={ex} />}
      {ex.type === 'word_bank' && <WordBank {...props} exercise={ex} />}
      {(ex.type === 'type_answer' || ex.type === 'cloze' || ex.type === 'translate') && <TextAnswer {...props} />}
    </div>
  );
}

function Mcq({ exercise, locked, revealIndex, onChange }: Props & { exercise: McqExercise }) {
  const [selected, setSelected] = useState<number | null>(null);
  const order = useMemo(() => seededShuffle(exercise.options.map((_, i) => i), exercise.id), [exercise]);
  return (
    <>
      <p className="prompt">{exercise.question}</p>
      <div className="stack" style={{ '--gap': '10px' } as CSSProperties}>
        {order.map((i) => {
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
                setSelected(i);
                onChange({ kind: 'choice', index: i });
              }}
            >
              {exercise.options[i]}
            </button>
          );
        })}
      </div>
    </>
  );
}

function TextAnswer({ exercise, locked, onChange, onSubmit }: Props) {
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
    prompt = <p className="prompt">{exercise.source}</p>;
    placeholder = exercise.direction === 'fr_en' ? 'In English…' : 'En français…';
  } else if (exercise.type === 'type_answer') {
    prompt = <p className="prompt">{exercise.question}</p>;
  }
  const multiline = exercise.type === 'translate';
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

function WordBank({ exercise, locked, onChange }: Props & { exercise: WordBankExercise }) {
  const bank = useMemo(
    () => seededShuffle([...exercise.tokens, ...(exercise.distractors ?? [])], exercise.id),
    [exercise],
  );
  const [picked, setPicked] = useState<number[]>([]);
  const emit = (next: number[]) => {
    setPicked(next);
    onChange(next.length ? { kind: 'tokens', tokens: next.map((i) => bank[i]) } : null);
  };
  return (
    <>
      <p className="prompt">{exercise.question}</p>
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
            onClick={() => emit([...picked, i])}
          >
            {t}
          </button>
        ))}
      </div>
    </>
  );
}
