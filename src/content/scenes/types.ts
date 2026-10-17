import type { Cefr, Lang } from '../types';

/**
 * Scènes : conversations guidées, jouées à voix haute avec un personnage.
 * Chaque réplique de l'apprenant est reconnue par son INTENTION (groupes de mots-clés),
 * pas par une phrase exacte : plusieurs façons de dire la même chose sont acceptées.
 */

/**
 * Une intention attendue. `any` : liste de groupes, TOUS doivent être présents ; dans un groupe,
 * UNE des variantes suffit. Une variante peut être un mot, une expression (« a table »),
 * ou un début de mot terminé par « * » (« reserv* » couvre reservation, reserved…).
 */
export interface SceneIntent {
  id: string;
  any: string[][];
  /** Mots qui excluent cette intention (ex. « not » pour distinguer oui / non) */
  none?: string[];
  /** Tour suivant, ou 'end' pour terminer la scène */
  next: string;
  /** Réaction du personnage avant sa réplique suivante (reformulation naturelle de ce qu'on a dit) */
  react?: string;
}

export interface SceneTurn {
  /** Réplique du personnage (langue apprise) */
  npc: string;
  /** Sa traduction, affichée seulement au premier passage */
  npcFr: string;
  /** Ce que l'apprenant doit faire, en français (la « mission » du tour) */
  taskFr: string;
  expect: SceneIntent[];
  /** Réplique si la réponse n'est pas comprise : le personnage fait répéter, comme une vraie personne */
  fallback: string;
  /** Aides progressives : mot-clé, début de phrase, phrase complète */
  hints: [string, string, string];
  /** Une réponse naturelle, montrée dans le bilan (« voici comment on le dirait ») */
  model: string;
  /**
   * Reprendre la réplique du personnage fait partie de la tâche : il propose des choix (« small, medium or large? »)
   * ou on doit reformuler ce qu'il vient de dire pour vérifier qu'on a compris.
   */
  choice?: boolean;
  /** Formes à employer dans ce tour (précision) : mots ou expressions, même syntaxe que `any` */
  targets?: string[];
}

export interface Scene {
  id: string;
  lang: Lang;
  cefr: Cefr;
  /** Titre en français */
  title: string;
  /** Mise en situation, en français */
  situation: string;
  /** Objectif à atteindre, en français */
  goal: string;
  character: { name: string; role: string; voice: 'female' | 'male' };
  /** Notions travaillées (doivent exister dans le cours de la langue) */
  kcIds: string[];
  start: string;
  turns: Record<string, SceneTurn>;
  /** Réplique de clôture du personnage */
  closing: string;
  /** Expressions utiles à retenir, proposées dans le bilan */
  phrases: { text: string; fr: string }[];
}
