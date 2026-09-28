import { useEffect, useRef } from 'react';
import { SpeakerIcon } from '../../ui/Icons';

type Say = (text: string, slow?: boolean) => void;

/** Boutons de lecture (normal + lent), lecture automatique à l'affichage. */
export function AudioPrompt({ text, say, autoPlay = true }: { text: string; say: Say; autoPlay?: boolean }) {
  // Lecture automatique une seule fois par texte (say peut changer d'identité à chaque rendu).
  const sayRef = useRef(say);
  sayRef.current = say;
  useEffect(() => {
    if (!autoPlay) return;
    const t = window.setTimeout(() => sayRef.current(text), 250);
    return () => window.clearTimeout(t);
  }, [text, autoPlay]);
  return (
    <div className="row" style={{ justifyContent: 'center', gap: 16, padding: '8px 0' }}>
      <button className="audio-btn" aria-label="Écouter" onClick={() => say(text)}>
        <SpeakerIcon />
      </button>
      <button className="audio-btn small" aria-label="Écouter lentement" onClick={() => say(text, true)}>
        🐢
      </button>
    </div>
  );
}

