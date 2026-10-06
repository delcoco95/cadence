import { speechKey } from './audioKey';

/**
 * Voix de Cadence : audio pré-généré (Kokoro, tools/voices), identique sur tous les téléphones.
 * public/audio/manifest.json liste les textes disponibles ; un texte absent passe par la synthèse du téléphone.
 */

export type CadenceVoice = 'female' | 'male';
export const CADENCE_VOICES: Record<CadenceVoice, { id: string; name: string; label: string }> = {
  female: { id: 'af_heart', name: 'Lily', label: 'Voix féminine' },
  male: { id: 'am_michael', name: 'Michael', label: 'Voix masculine' },
};

/** Phrase d'écoute du choix de voix (incluse dans le corpus généré). */
export const VOICE_SAMPLE = 'Hello! Welcome to Cadence. Let’s learn English together.';

const BASE = 'audio/';
let available: Set<string> | null = null;
const manifest: Promise<Set<string>> =
  typeof fetch === 'undefined'
    ? Promise.resolve(new Set())
    : fetch(`${BASE}manifest.json`)
        .then((r) => (r.ok ? r.json() : { keys: [] }))
        .then((m: { keys: string[] }) => (available = new Set(m.keys)))
        .catch(() => (available = new Set()));

export const audioReady = () => manifest;
export const hasClip = (text: string) => !!available?.has(speechKey(text));
export const clipCount = () => available?.size ?? 0;

export const clipUrl = (text: string, voice: CadenceVoice) => `${BASE}${CADENCE_VOICES[voice].id}/${speechKey(text)}.mp3`;

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

/** Joue le clip d'un texte. Renvoie false s'il n'existe pas ou n'a pas pu être lu (la synthèse prend le relais). */
export async function playClip(text: string, voice: CadenceVoice, rate = 1): Promise<boolean> {
  await manifest;
  if (!hasClip(text)) return false;
  try {
    const p = getPlayer();
    p.pause();
    p.src = await blobUrl(clipUrl(text, voice));
    p.playbackRate = rate;
    // Ralentir sans rendre la voix grave.
    (p as HTMLAudioElement & { preservesPitch?: boolean; webkitPreservesPitch?: boolean }).preservesPitch = true;
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
export async function downloadVoice(voice: CadenceVoice, onProgress: (done: number, total: number) => void): Promise<void> {
  const keys = [...(await manifest)];
  let done = 0;
  const queue = [...keys];
  const worker = async () => {
    for (let key = queue.shift(); key; key = queue.shift()) {
      await fetch(`${BASE}${CADENCE_VOICES[voice].id}/${key}.mp3`).catch(() => undefined);
      onProgress(++done, keys.length);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
}
