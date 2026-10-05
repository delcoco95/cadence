/**
 * Effets sonores synthétisés (Web Audio) : aucun fichier à télécharger, fonctionne hors ligne.
 * Sur iOS, le contexte audio ne démarre qu'après un geste : on le crée au premier son.
 */

let ctx: AudioContext | null = null;
let enabled = true;

export function setSoundEnabled(on: boolean) {
  enabled = on;
}

function audio(): AudioContext | null {
  if (!enabled || typeof window === 'undefined') return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  ctx ??= new Ctor();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function tone(ac: AudioContext, freq: number, start: number, duration: number, type: OscillatorType = 'sine', volume = 0.18) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + start);
  gain.gain.setValueAtTime(0.0001, ac.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(volume, ac.currentTime + start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + duration);
  osc.connect(gain).connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + duration + 0.05);
}

// Chrome refuse (et signale) une vibration tant que l'utilisateur n'a pas touché la page.
const vibrate = (pattern: number | number[]) => {
  if (navigator.userActivation?.hasBeenActive === false) return;
  navigator.vibrate?.(pattern);
};

export const sfx = {
  tap() {
    const ac = audio();
    if (ac) tone(ac, 660, 0, 0.06, 'triangle', 0.05);
  },
  correct() {
    const ac = audio();
    if (ac) {
      tone(ac, 784, 0, 0.14, 'triangle');
      tone(ac, 1175, 0.09, 0.22, 'triangle');
    }
    vibrate(15);
  },
  typo() {
    const ac = audio();
    if (ac) {
      tone(ac, 660, 0, 0.12, 'triangle', 0.12);
      tone(ac, 880, 0.1, 0.16, 'triangle', 0.12);
    }
  },
  wrong() {
    const ac = audio();
    if (ac) {
      tone(ac, 311, 0, 0.16, 'sine', 0.16);
      tone(ac, 233, 0.12, 0.26, 'sine', 0.16);
    }
    vibrate([20, 40, 20]);
  },
  combo() {
    const ac = audio();
    if (ac) [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, i * 0.07, 0.18, 'triangle', 0.14));
  },
  complete() {
    const ac = audio();
    if (ac) {
      [523, 659, 784].forEach((f, i) => tone(ac, f, i * 0.11, 0.2, 'triangle', 0.16));
      tone(ac, 1047, 0.36, 0.5, 'triangle', 0.18);
      tone(ac, 1319, 0.36, 0.5, 'sine', 0.08);
    }
    vibrate([30, 60, 30]);
  },
};
