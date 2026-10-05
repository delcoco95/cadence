import { useEffect, useRef } from 'react';
import { SpeakerIcon, TurtleIcon } from '../../ui/Icons';

type Say = (text: string, slow?: boolean) => void;

/** Boutons de lecture (normal + lent), lecture automatique à l'affichage. */
export function AudioPrompt({ text, say, autoPlay = true, compact }: { text: string; say: Say; autoPlay?: boolean; compact?: boolean }) {
  // Lecture automatique une seule fois par texte (say peut changer d'identité à chaque rendu).
  const sayRef = useRef(say);
  sayRef.current = say;
  useEffect(() => {
    if (!autoPlay) return;
    const t = window.setTimeout(() => sayRef.current(text), 250);
    return () => window.clearTimeout(t);
  }, [text, autoPlay]);
  return (
    <div className="audio-row">
      <button className={`audio-btn${compact ? ' small' : ''}`} aria-label="Écouter" onClick={() => say(text)}>
        <SpeakerIcon />
      </button>
      <button className="audio-btn small" style={compact ? { width: 48, height: 48, borderRadius: 16 } : undefined} aria-label="Écouter lentement" onClick={() => say(text, true)}>
        <TurtleIcon />
      </button>
    </div>
  );
}
