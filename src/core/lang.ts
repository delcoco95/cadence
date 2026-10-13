import type { Lang } from '../content/types';
import { LANGUAGES } from '../content/languages';

/**
 * Langue du cours actif. Le moteur (correction, oral, générateurs) en dépend sans qu'on ait à la
 * passer partout : elle change seulement quand l'apprenant change de langue, et l'app est alors remontée.
 */
let current: Lang = 'en';

export const activeLang = (): Lang => current;
export const activeLanguage = () => LANGUAGES[current];

export function setActiveLang(lang: Lang): void {
  current = lang;
}
