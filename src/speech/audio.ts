import { speechKey } from './audioKey';

/**
 * Voix de Cadence : audio pré-généré (Kokoro, tools/voices), identique sur tous les téléphones.
 * public/audio/manifest.json liste les textes disponibles ; un texte absent passe par la synthèse du téléphone.
 */

export type CadenceVoice = 'female' | 'male';
export type CadenceAccent = 'en-US' | 'en-GB';

export interface CadenceVoiceInfo {
  id: string;
  name: string;
  label: string;
}

export const CADENCE_VOICES: Record<CadenceAccent, Record<CadenceVoice, CadenceVoiceInfo>> = {
  'en-US': {
    female: { id: 'af_heart', name: 'Lily', label: 'Voix féminine' },
    male: { id: 'am_michael', name: 'Michael', label: 'Voix masculine' },
  },
  'en-GB': {
    female: { id: 'bf_emma', name: 'Emma', label: 'Voix féminine' },
    male: { id: 'bm_george', name: 'George', label: 'Voix masculine' },
  },
};

export const ACCENT_LABELS: Record<CadenceAccent, string> = { 'en-US': 'Américain', 'en-GB': 'Britannique' };

/** Phrase d'écoute du choix de voix (incluse dans le corpus généré). */
export const VOICE_SAMPLE = 'Hello! Welcome to Cadence. Let’s learn English together.';

const BASE = 'audio/';
/** Clés disponibles par voix (manifeste v2) ; v1 listait les clés communes à toutes les voix. */
let available: Map<string, Set<string>> | null = null;
const manifest: Promise<Map<string, Set<string>>> =
  typeof fetch === 'undefined'
    ? Promise.resolve(new Map())
    : fetch(`${BASE}manifest.json`)
        .then((r) => (r.ok ? r.json() : {}))
        .then((m: { voices?: Record<string, string[]> | string[]; keys?: string[] }) => {
          const map = new Map<string, Set<string>>();
          if (m.voices && !Array.isArray(m.voices)) for (const [v, keys] of Object.entries(m.voices)) map.set(v, new Set(keys));
          else if (Array.isArray(m.voices) && m.keys) for (const v of m.voices) map.set(v, new Set(m.keys));
          return (available = map);
        })
        .catch(() => (available = new Map()));

export const audioReady = () => manifest;
export const hasClip = (text: string, voiceId: string) => !!available?.get(voiceId)?.has(speechKey(text));
export const clipCount = (voiceId: string) => available?.get(voiceId)?.size ?? 0;
export const clipUrl = (text: string, voiceId: string) => `${BASE}${voiceId}/${speechKey(text)}.mp3`;

// Un seul élément audio, « débloqué » au premier toucher : iOS refuse ensuite les lectures automatiques
// d'un nouvel élément, mais pas celles d'un élément déjà autorisé.
let player: HTMLAudioElement | null = null;
function getPlayer(): HTMLAudioElement {
  player ??= new Audio();
  return player;
}

if (typeof window !== 'undefined') {
  const unlock = () => {
    const p = getPlayer();
    p.muted = true;
    p.play()
      .catch(() => undefined)
      .finally(() => {
        p.pause();
        p.muted = false;
      });
    window.removeEventListener('pointerdown', unlock);
  };
  window.addEventListener('pointerdown', unlock);
}

/** Fichiers récents gardés en mémoire (lecture instantanée au réécoute, sans réseau). */
const blobs = new Map<string, string>();

async function blobUrl(url: string): Promise<string> {
  const cached = blobs.get(url);
  if (cached) return cached;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`audio ${res.status}`);
  const obj = URL.createObjectURL(await res.blob());
  blobs.set(url, obj);
  if (blobs.size > 40) {
    const [oldest, objUrl] = blobs.entries().next().value!;
    URL.revokeObjectURL(objUrl);
    blobs.delete(oldest);
  }
  return obj;
}

/**
 * Joue le clip d'un texte avec la voix demandée ; si cette voix n'a pas encore le fichier, la même voix
 * (femme ou homme) de l'autre accent prend le relais. Renvoie false si aucun clip n'existe.
 */
export async function playClip(text: string, accent: CadenceAccent, gender: CadenceVoice, rate = 1): Promise<boolean> {
  await manifest;
  const other: CadenceAccent = accent === 'en-US' ? 'en-GB' : 'en-US';
  const voice = [CADENCE_VOICES[accent][gender], CADENCE_VOICES[other][gender]].find((v) => hasClip(text, v.id));
  if (!voice) return false;
  try {
    const p = getPlayer();
    p.pause();
    p.src = await blobUrl(clipUrl(text, voice.id));
    p.playbackRate = rate;
    // Ralentir sans rendre la voix grave.
    (p as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
    (p as HTMLAudioElement & { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
    await p.play();
    return true;
  } catch {
    return false;
  }
}

export function stopClip(): void {
  player?.pause();
}

/** Télécharge toute une voix pour l'utiliser hors ligne (le service worker met chaque fichier en cache). */
export async function downloadVoice(voiceId: string, onProgress: (done: number, total: number) => void): Promise<void> {
  const keys = [...((await manifest).get(voiceId) ?? [])];
  let done = 0;
  const queue = [...keys];
  const worker = async () => {
    for (let key = queue.shift(); key; key = queue.shift()) {
      await fetch(`${BASE}${voiceId}/${key}.mp3`).catch(() => undefined);
      onProgress(++done, keys.length);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
}
