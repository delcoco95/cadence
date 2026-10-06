import type { Accent, VoicePref } from '../db/db';
import { chooseVoice, rankVoices, type RankedVoice } from './voices';
import { playClip, stopClip } from './audio';

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

/** Voix brutes de l'appareil (diagnostic). */
export const allVoices = (): SpeechSynthesisVoice[] => voices;

export interface SpeakOptions {
  rate?: number;
  voice?: VoicePref;
}

/** Coupe toute lecture en cours (voix Cadence et synthèse du téléphone). */
export function stopSpeaking(): void {
  stopClip();
  if (ttsAvailable()) speechSynthesis.cancel();
}

/**
 * Lit un texte : voix de Cadence pré-générée si elle existe pour ce texte, sinon synthèse du téléphone.
 * Le débit 0,9 (« normal ») correspond à la vitesse naturelle des voix Cadence, déjà posées.
 */
export function speak(text: string, accent: Accent, rateOrOptions: number | SpeakOptions = 0.9): void {
  const opts = typeof rateOrOptions === 'number' ? { rate: rateOrOptions } : rateOrOptions;
  stopSpeaking();
  if (opts.voice?.source !== 'device') {
    const rate = Math.min(1.1, (opts.rate ?? 0.9) / 0.9);
    void playClip(text, opts.voice?.cadence ?? 'female', rate).then((ok) => {
      if (!ok) speakDevice(text, accent, opts);
    });
    return;
  }
  speakDevice(text, accent, opts);
}

function speakDevice(text: string, accent: Accent, opts: SpeakOptions): void {
  if (!ttsAvailable()) return;
  speechSynthesis.cancel();
  // iOS fournit parfois la liste des voix en retard, sans événement : on la relit avant de choisir.
  if (voices.length === 0) loadVoices();
  const u = new SpeechSynthesisUtterance(text);
  const voice = chooseVoice(voices, accent, opts.voice?.gender ?? 'any', opts.voice?.id);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? accent;
  u.rate = opts.rate ?? 0.9;
  current = u;
  u.onend = () => {
    if (current === u) current = null;
  };
  speechSynthesis.speak(u);
}
