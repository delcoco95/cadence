import type { Accent, VoicePref } from '../db/db';
import { chooseVoice, rankVoices, type RankedVoice } from './voices';

let voices: SpeechSynthesisVoice[] = [];
const listeners = new Set<() => void>();
// Chrome peut libérer l'énoncé en cours (et couper la phrase) si rien ne le référence.
let current: SpeechSynthesisUtterance | null = null;

function loadVoices() {
  if (typeof speechSynthesis === 'undefined') return;
  voices = speechSynthesis.getVoices();
  listeners.forEach((l) => l());
}
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

export const ttsAvailable = () => typeof speechSynthesis !== 'undefined';

/** S'abonne au chargement des voix (asynchrone sur iOS et Chrome). */
export function onVoicesChanged(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function voicesFor(accent: Accent | 'en', pref: VoicePref['gender'] = 'any'): RankedVoice<SpeechSynthesisVoice>[] {
  return rankVoices(voices, accent, pref);
}

export interface SpeakOptions {
  rate?: number;
  voice?: VoicePref;
}

export function speak(text: string, accent: Accent, rateOrOptions: number | SpeakOptions = 0.9): void {
  if (!ttsAvailable()) return;
  const opts = typeof rateOrOptions === 'number' ? { rate: rateOrOptions } : rateOrOptions;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = chooseVoice(voices, accent, opts.voice?.gender ?? 'any', opts.voice?.name);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? accent;
  u.rate = opts.rate ?? 0.9;
  current = u;
  u.onend = () => {
    if (current === u) current = null;
  };
  speechSynthesis.speak(u);
}
