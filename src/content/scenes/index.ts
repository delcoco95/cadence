import type { Lang } from '../types';
import type { Scene } from './types';
import { SCENES_EN } from './en';

export type { Scene } from './types';

/** Scènes de conversation d'une langue ; l'italien et l'espagnol sont chargés à la demande. */
export async function loadScenes(lang: Lang): Promise<Scene[]> {
  if (lang === 'it') return (await import('./it')).SCENES_IT;
  if (lang === 'es') return (await import('./es')).SCENES_ES;
  return SCENES_EN;
}
