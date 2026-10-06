import type { Motivation } from '../db/db';

/** Thèmes de vocabulaire liés à chaque objectif, du plus au moins utile. */
export const MOTIVATION_THEMES: Record<Motivation, string[]> = {
  travel: ['ph_travel', 'travel', 'city', 'food', 'weather', 'shopping'],
  work: ['ph_work', 'work', 'it', 'time'],
  studies: ['ph_studies', 'describe', 'time', 'it'],
  culture: ['ph_culture', 'leisure', 'feelings', 'describe'],
  people: ['ph_people', 'family', 'feelings', 'leisure', 'daily'],
  brain: [],
};

/**
 * Ordre de priorité des thèmes pour plusieurs objectifs : on alterne entre les objectifs
 * (1er thème de chacun, puis 2e…) pour qu'aucun ne soit oublié.
 */
export function priorityThemes(motivations: Motivation[]): string[] {
  const lists = motivations.map((m) => MOTIVATION_THEMES[m] ?? []);
  const out: string[] = [];
  for (let i = 0; i < Math.max(0, ...lists.map((l) => l.length)); i++)
    for (const l of lists) if (l[i] && !out.includes(l[i])) out.push(l[i]);
  return out;
}

/**
 * Remonte en tête les éléments liés aux objectifs, en alternant entre les objectifs
 * (une phrase « voyage », une « travail », une « films »…) pour que chacun progresse chaque jour.
 * À l'intérieur d'un objectif, l'ordre suit ses thèmes puis l'ordre d'apprentissage d'origine.
 * Sans objectif particulier, l'ordre ne change pas.
 */
export function prioritizeByMotivation<T extends { theme: string }>(items: T[], motivations: Motivation[]): T[] {
  const queues = motivations
    .map((m) => MOTIVATION_THEMES[m] ?? [])
    .filter((themes) => themes.length)
    .map((themes) => themes.flatMap((t) => items.filter((i) => i.theme === t)));
  if (!queues.length) return items;
  const picked = new Set<T>();
  const out: T[] = [];
  for (let i = 0; i < Math.max(...queues.map((q) => q.length)); i++)
    for (const q of queues)
      if (q[i] && !picked.has(q[i])) {
        picked.add(q[i]);
        out.push(q[i]);
      }
  return [...out, ...items.filter((i) => !picked.has(i))];
}
