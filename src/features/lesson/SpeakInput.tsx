import { useEffect, useRef, useState } from 'react';
import type { SpeakExercise } from '../../content/types';
import { isBlockingError, sttSupported, startListening, type Listening } from '../../speech/stt';
import type { ExerciseProps } from './ExerciseView';
import { AudioPrompt } from './AudioPrompt';
import { SaysPrompt } from './ExerciseView';
import { MicIcon, StopIcon } from '../../ui/Icons';
import { stopSpeaking } from '../../speech/tts';

type Status = 'idle' | 'listening' | 'done' | 'fallback';

const ERROR_TEXT: Record<string, string> = {
  'no-speech': 'Je n’ai rien entendu. Réessaie en parlant un peu plus fort.',
  network: 'La reconnaissance vocale a besoin d’internet. Réessaie ou utilise la dictée du clavier.',
  aborted: '',
};

export function SpeakInput({ exercise, locked, onChange, say, lang, onSkipSpeaking }: ExerciseProps & { exercise: SpeakExercise }) {
  const [status, setStatus] = useState<Status>(sttSupported() ? 'idle' : 'fallback');
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const listening = useRef<Listening | null>(null);

  useEffect(() => () => listening.current?.abort(), []);
  useEffect(() => {
    if (locked) listening.current?.stop();
  }, [locked]);

  const publish = (t: string) => onChange(t.trim() ? { kind: 'speech', transcript: t } : null);

  function start() {
    setError(null);
    setText('');
    onChange(null);
    stopSpeaking();
    const l = startListening(lang, {
      onText: (t) => setText(t),
      onEnd: (t) => {
        listening.current = null;
        setStatus((s) => (s === 'fallback' ? s : 'done'));
        publish(t);
      },
      onError: (code) => {
        if (isBlockingError(code)) {
          setStatus('fallback');
          setError('Le micro n’est pas disponible ici. Utilise la dictée (icône micro) du clavier pour parler.');
        } else if (ERROR_TEXT[code] !== '') {
          setError(ERROR_TEXT[code] ?? `Erreur de reconnaissance (${code}).`);
        }
      },
    });
    if (l) {
      listening.current = l;
      setStatus('listening');
    } else {
      setStatus('fallback');
    }
  }

  function stop() {
    listening.current?.stop();
  }

  return (
    <>
      {exercise.mode === 'repeat' && (
        <>
          <p className="prompt">{exercise.prompt}</p>
          <AudioPrompt text={exercise.prompt} say={say} />
        </>
      )}
      {exercise.mode === 'translate' && <SaysPrompt text={exercise.prompt} />}
      {exercise.mode === 'answer' && (
        <>
          <p className="prompt">{exercise.prompt}</p>
          <AudioPrompt text={exercise.prompt} say={say} autoPlay={false} />
        </>
      )}

      {status !== 'fallback' ? (
        <div className="stack" style={{ alignItems: 'center', gap: 14 }}>
          <button
            className={`mic-btn${status === 'listening' ? ' on' : ''}`}
            disabled={locked}
            onClick={() => (status === 'listening' ? stop() : start())}
            aria-label={status === 'listening' ? 'Arrêter' : 'Parler'}
          >
            {status === 'listening' ? <StopIcon /> : <MicIcon />}
          </button>
          <p className="small muted center" style={{ fontWeight: 700 }}>
            {status === 'listening'
              ? 'Je t’écoute… touche le bouton quand tu as fini.'
              : status === 'done'
                ? 'Touche le micro pour recommencer, ou vérifie.'
                : 'Touche le micro et parle.'}
          </p>
          {text && <p className="transcript">« {text} »</p>}
        </div>
      ) : (
        <div className="stack">
          <textarea
            className="field"
            rows={3}
            value={text}
            disabled={locked}
            placeholder="Touche la zone, puis le micro du clavier, et parle en anglais…"
            lang="en"
            autoCapitalize="sentences"
            onChange={(e) => {
              setText(e.target.value);
              publish(e.target.value);
            }}
          />
          <p className="note">
            Dicte avec la touche micro du clavier iOS (clavier réglé en anglais pour de meilleurs résultats). Écrire à la main fausse l’exercice.
          </p>
        </div>
      )}

      {error && <p className="small" style={{ color: 'var(--danger)' }}>{error}</p>}
      {!locked && (
        <button className="btn ghost small" style={{ alignSelf: 'center' }} onClick={onSkipSpeaking}>
          Je ne peux pas parler maintenant
        </button>
      )}
    </>
  );
}
