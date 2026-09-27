import type { Accent } from '../db/db';

let voices: SpeechSynthesisVoice[] = [];

function loadVoices() {
  if (typeof speechSynthesis === 'undefined') return;
  voices = speechSynthesis.getVoices();
}
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

export const ttsAvailable = () => typeof speechSynthesis !== 'undefined';

/** Choisit une voix de l'accent demandé, en privilégiant les voix « enhanced/premium » d'iOS. */
function pickVoice(accent: Accent): SpeechSynthesisVoice | undefined {
  const lang = accent.toLowerCase();
  const matching = voices.filter((v) => v.lang.replace('_', '-').toLowerCase() === lang);
  const score = (v: SpeechSynthesisVoice) => (/premium/i.test(v.name) ? 2 : /enhanced|améliorée/i.test(v.name) ? 1 : 0);
  return matching.sort((a, b) => score(b) - score(a))[0] ?? voices.find((v) => v.lang.startsWith('en'));
}

export function speak(text: string, accent: Accent, rate = 0.9): void {
  if (!ttsAvailable()) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickVoice(accent);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? accent;
  u.rate = rate;
  speechSynthesis.speak(u);
}
