/**
 * Reconnaissance vocale du navigateur (Web Speech API, préfixée webkit sur Safari).
 * Sur iPhone, elle s'appuie sur la reconnaissance d'Apple ; elle peut être indisponible
 * (réglages, mode Web App, pas de réseau) : l'interface propose alors la dictée du clavier.
 */

interface RecognitionResultList {
  length: number;
  [i: number]: { isFinal: boolean; 0: { transcript: string } };
}
interface RecognitionEvent {
  results: RecognitionResultList;
}
interface Recognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: RecognitionEvent) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}
type RecognitionCtor = new () => Recognition;

function ctor(): RecognitionCtor | undefined {
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export const sttSupported = () => typeof window !== 'undefined' && !!ctor();

export interface ListenHandlers {
  /** Transcription complète à ce stade (résultats finaux + provisoires) */
  onText: (text: string) => void;
  onEnd: (text: string) => void;
  /** 'not-allowed', 'service-not-allowed', 'no-speech', 'network', 'audio-capture'… */
  onError: (code: string) => void;
}

export interface Listening {
  stop: () => void;
  abort: () => void;
}

export function startListening(lang: string, h: ListenHandlers): Listening | null {
  const C = ctor();
  if (!C) return null;
  const rec = new C();
  rec.lang = lang;
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  let text = '';
  rec.onresult = (e) => {
    const parts: string[] = [];
    for (let i = 0; i < e.results.length; i++) parts.push(e.results[i][0].transcript);
    text = parts.join(' ').replace(/\s+/g, ' ').trim();
    h.onText(text);
  };
  rec.onerror = (e) => h.onError(e.error);
  rec.onend = () => h.onEnd(text);
  try {
    rec.start();
  } catch {
    h.onError('start-failed');
    return null;
  }
  return { stop: () => rec.stop(), abort: () => rec.abort() };
}

/** Erreurs qui signifient « le micro ne marchera pas ici » (on bascule sur la dictée du clavier). */
export const isBlockingError = (code: string) =>
  ['not-allowed', 'service-not-allowed', 'audio-capture', 'start-failed', 'language-not-supported'].includes(code);
