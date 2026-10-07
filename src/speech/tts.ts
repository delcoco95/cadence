import type { Accent, VoicePref } from '../db/db';
import { chooseVoice } from './voices';
import { playClip, stopClip } from './audio';

let voices: SpeechSynthesisVoice[] = [];
// Chrome peut libérer l'énoncé en cours (et couper la phrase) si rien ne le référence.
let current: SpeechSynthesisUtterance | null = null;

function loadVoices() {
  if (typeof speechSynthesis === 'undefined') return;
  voices = speechSynthesis.getVoices();
}
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

export const ttsAvailable = () => typeof speechSynthesis !== 'undefined';

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
 * Lit un texte avec la voix Cadence choisie (audio pré-généré, identique sur tous les téléphones).
 * La synthèse du téléphone n'est qu'un secours invisible, pour un texte qui n'aurait pas encore de fichier.
 * Le débit 0,9 (« normal ») correspond à la vitesse naturelle des voix Cadence, déjà posées.
 */
export function speak(text: string, accent: Accent, opts: SpeakOptions = {}): void {
  stopSpeaking();
  const gender = opts.voice?.gender ?? 'female';
  const rate = Math.min(1.1, (opts.rate ?? 0.9) / 0.9);
  void playClip(text, accent, gender, rate).then((ok) => {
    if (!ok) speakDevice(text, accent, gender, opts.rate ?? 0.9);
  });
}

function speakDevice(text: string, accent: Accent, gender: VoicePref['gender'], rate: number): void {
  if (!ttsAvailable()) return;
  // iOS fournit parfois la liste des voix en retard, sans événement : on la relit avant de choisir.
  if (voices.length === 0) loadVoices();
  const u = new SpeechSynthesisUtterance(text);
  const voice = chooseVoice(voices, accent, gender);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? accent;
  u.rate = rate;
  current = u;
  u.onend = () => {
    if (current === u) current = null;
  };
  speechSynthesis.speak(u);
}
