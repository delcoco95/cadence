import { speechKey } from './audioKey';
import type { Lang } from '../content/types';
import { LANGUAGES } from '../content/languages';

/**
 * Voix de Cadence : audio pré-généré (Kokoro, tools/voices), identique sur tous les téléphones.
 * public/audio/manifest.json liste les textes disponibles ; un texte absent passe par la synthèse du téléphone.
 */

export type CadenceVoice = 'female' | 'male';
/** Langue et accent d'une voix : sert aussi à la reconnaissance vocale. */
export type CadenceAccent = 'en-US' | 'en-GB' | 'it-IT' | 'es-ES';

export interface CadenceVoiceInfo {
  id: string;
  name: string;
  label: string;
}

export const CADENCE_VOICES: Record<CadenceAccent, Record<CadenceVoice, CadenceVoiceInfo>> = {
  'en-US': {
    female: { id: 'af_heart', name: 'Nora', label: 'Voix féminine' },
    male: { id: 'am_michael', name: 'Michael', label: 'Voix masculine' },
  },
  'en-GB': {
    female: { id: 'bf_emma', name: 'Emma', label: 'Voix féminine' },
    male: { id: 'bm_george', name: 'George', label: 'Voix masculine' },
  },
  'it-IT': {
    female: { id: 'if_sara', name: 'Sara', label: 'Voix féminine' },
    male: { id: 'im_nicola', name: 'Nicola', label: 'Voix masculine' },
  },
  'es-ES': {
    female: { id: 'ef_dora', name: 'Dora', label: 'Voix féminine' },
    male: { id: 'em_alex', name: 'Alex', label: 'Voix masculine' },
  },
};

/** Accents au choix en anglais ; l'italien et l'espagnol n'en ont qu'un. */
export const ACCENT_LABELS: Partial<Record<CadenceAccent, string>> = { 'en-US': 'Américain', 'en-GB': 'Britannique' };
export const ACCENT_NAMES: Record<CadenceAccent, string> = {
  'en-US': 'anglais américain',
  'en-GB': 'anglais britannique',
  'it-IT': 'italien',
  'es-ES': 'espagnol d’Espagne',
};

/** Voix d'une langue : l'accent choisi en anglais, l'accent unique sinon. */
export const speechLocale = (lang: Lang, englishAccent: 'en-US' | 'en-GB'): CadenceAccent =>
  lang === 'it' ? 'it-IT' : lang === 'es' ? 'es-ES' : englishAccent;

/** Phrase d'écoute du choix de voix (incluse dans le corpus généré). */
export const voiceSample = (accent: CadenceAccent) => LANGUAGES[accent === 'it-IT' ? 'it' : accent === 'es-ES' ? 'es' : 'en'].voiceSample;

// Dossier des voix ; l'aperçu d'une branche (/preview/) réutilise celles de l'app principale (../audio/).
const BASE: string = import.meta.env.VITE_AUDIO_BASE ?? 'audio/';
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
        // Ne pas couper un vrai clip qui aurait démarré entre-temps (Safari résout ce play() en retard).
        if (!p.getAttribute('src')) p.pause();
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
 * Jeton de lecture : chaque nouvelle demande (ou un arrêt) invalide les précédentes. Une lecture dont le
 * téléchargement se termine en retard ne démarre donc jamais par-dessus la suivante, ni pendant le micro.
 */
let generation = 0;

/** played : lu · missing : pas de fichier (la synthèse du téléphone peut prendre le relais) · cancelled : remplacé ou arrêté · failed : erreur de lecture. */
export type ClipResult = 'played' | 'missing' | 'cancelled' | 'failed';

/**
 * Joue le clip d'un texte avec la voix demandée ; si cette voix n'a pas encore le fichier, l'autre voix
 * de la même langue prend le relais (en anglais : d'abord la même voix de l'autre accent).
 */
export async function playClip(text: string, accent: CadenceAccent, gender: CadenceVoice, rate = 1): Promise<ClipResult> {
  const my = ++generation;
  await manifest;
  if (my !== generation) return 'cancelled';
  const other: CadenceVoice = gender === 'female' ? 'male' : 'female';
  const candidates =
    accent === 'en-US' || accent === 'en-GB'
      ? [CADENCE_VOICES[accent][gender], CADENCE_VOICES[accent === 'en-US' ? 'en-GB' : 'en-US'][gender]]
      : [CADENCE_VOICES[accent][gender], CADENCE_VOICES[accent][other]];
  const voice = candidates.find((v) => hasClip(text, v.id));
  if (!voice) return 'missing';
  try {
    const p = getPlayer();
    p.pause();
    const src = await blobUrl(clipUrl(text, voice.id));
    if (my !== generation) return 'cancelled';
    p.src = src;
    p.playbackRate = rate;
    // Ralentir sans rendre la voix grave.
    (p as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
    (p as HTMLAudioElement & { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
    await p.play();
    return my === generation ? 'played' : 'cancelled';
  } catch (e) {
    if (my !== generation || (e as Error)?.name === 'AbortError') return 'cancelled';
    return 'failed';
  }
}

/**
 * Après le micro, l'élément audio peut rester rattaché à l'ancienne sortie et ne plus rien jouer :
 * on le vide pour que le prochain clip reparte sur la sortie normale, sans perdre le déblocage iOS.
 */
export function resetPlayer(): void {
  generation++;
  if (!player) return;
  player.pause();
  player.removeAttribute('src');
  player.load();
}

export function stopClip(): void {
  generation++;
  player?.pause();
}

/** Télécharge toute une voix pour l'utiliser hors ligne (le service worker met chaque fichier en cache). */
export async function downloadVoice(
  voiceId: string,
  onProgress: (done: number, total: number) => void,
): Promise<{ done: number; failed: number }> {
  const keys = [...((await manifest).get(voiceId) ?? [])];
  let done = 0;
  let failed = 0;
  const queue = [...keys];
  const worker = async () => {
    for (let key = queue.shift(); key; key = queue.shift()) {
      // Seuls les fichiers réellement reçus comptent : une erreur réseau ne doit pas afficher « disponible hors ligne ».
      const ok = await fetch(`${BASE}${voiceId}/${key}.mp3`).then((r) => r.ok, () => false);
      if (ok) done++;
      else failed++;
      onProgress(done, keys.length);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return { done, failed };
}
