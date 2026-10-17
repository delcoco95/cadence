import type { Scene, SceneIntent, SceneTurn } from '../content/scenes/types';
import { levenshtein } from './grading';
import { words } from './speaking';

/**
 * Moteur des scènes, sans IA ni serveur : la réponse de l'apprenant est rapprochée des intentions
 * attendues par mots-clés, avec tolérance aux erreurs de reconnaissance vocale (une lettre sur un mot long,
 * pluriels, terminaisons). Le but est de valider le SENS, pas une phrase exacte.
 */

/** Racine grossière : retire les terminaisons fréquentes pour que « booked » et « booking » se rejoignent. */
export function stem(w: string): string {
  if (w.length <= 4) return w;
  for (const suffix of ['ing', 'ed', 'es', 's']) if (w.endsWith(suffix) && w.length - suffix.length >= 3) return w.slice(0, -suffix.length);
  return w;
}

function matchesWord(token: string, pattern: string): boolean {
  if (pattern.endsWith('*')) return token.startsWith(pattern.slice(0, -1));
  if (token === pattern) return true;
  const a = stem(token);
  const b = stem(pattern);
  if (a === b) return true;
  // Une lettre d'écart sur un mot long, mais même initiale : « light » ne doit pas valoir « right ».
  return b.length >= 5 && a[0] === b[0] && levenshtein(a, b) <= 1;
}

/** Une variante (mot ou expression) est-elle présente dans la suite de mots ? */
export function hasVariant(tokens: string[], variant: string): boolean {
  const parts = words(variant.replace(/\*$/, '')).map((p, i, all) => (i === all.length - 1 && variant.endsWith('*') ? `${p}*` : p));
  if (!parts.length) return false;
  for (let i = 0; i + parts.length <= tokens.length; i++) if (parts.every((p, j) => matchesWord(tokens[i + j], p))) return true;
  return false;
}

export interface IntentMatch {
  intent: SceneIntent | null;
  /** Part des groupes satisfaits pour la meilleure intention (0..1) */
  score: number;
}

export function matchIntent(turn: SceneTurn, utterance: string): IntentMatch {
  const tokens = words(utterance);
  let best: IntentMatch = { intent: null, score: 0 };
  for (const intent of turn.expect) {
    if (intent.none?.some((n) => hasVariant(tokens, n))) continue;
    const satisfied = intent.any.filter((group) => group.some((v) => hasVariant(tokens, v))).length;
    const score = intent.any.length ? satisfied / intent.any.length : 0;
    if (score === 1) return { intent, score };
    if (score > best.score) best = { intent: null, score };
  }
  return best;
}

/** Part des formes visées présentes dans la réponse (1 si le tour n'en fixe pas). */
export function targetScore(turn: SceneTurn, utterance: string): number {
  if (!turn.targets?.length) return 1;
  const tokens = words(utterance);
  return turn.targets.filter((t) => hasVariant(tokens, t)).length / turn.targets.length;
}

/** Ce qui s'est passé à un tour, pour le bilan. */
export interface TurnRecord {
  turnId: string;
  /** Ce que l'apprenant a dit (dernière tentative comprise, ou dernière tentative) */
  said: string;
  understood: boolean;
  attempts: number;
  /** Nombre d'aides affichées (0 à 3) */
  hints: number;
  /** A fini par lire le modèle */
  usedModel: boolean;
  precision: number;
}

export interface SceneDebrief {
  goalReached: boolean;
  /** Compris du premier coup */
  comprehension: number;
  /** Formes visées employées */
  precision: number;
  /** Sans aide */
  autonomy: number;
  /** Score global 0..1 (pour l'XP et la maîtrise) */
  overall: number;
}

export function debrief(records: TurnRecord[], goalReached: boolean): SceneDebrief {
  if (!records.length) return { goalReached, comprehension: 0, precision: 0, autonomy: 0, overall: 0 };
  const n = records.length;
  const comprehension = records.filter((r) => r.understood && r.attempts === 1).length / n;
  const precision = records.reduce((a, r) => a + (r.understood ? r.precision : 0), 0) / n;
  const autonomy = records.reduce((a, r) => a + (r.usedModel ? 0 : 1 - r.hints / 3), 0) / n;
  const overall = goalReached ? 0.4 * comprehension + 0.3 * precision + 0.3 * autonomy : 0.5 * (0.4 * comprehension + 0.3 * precision + 0.3 * autonomy);
  return { goalReached, comprehension, precision, autonomy, overall };
}

/**
 * Aides par défaut selon le nombre de passages déjà réussis : la traduction et le sous-titre disparaissent
 * au fil des répétitions, pour passer de la compréhension guidée à la conversation autonome.
 */
export interface AidLevel {
  showTranslation: boolean;
  showSubtitle: boolean;
}

export function aidLevel(completedRuns: number): AidLevel {
  if (completedRuns === 0) return { showTranslation: true, showSubtitle: true };
  if (completedRuns === 1) return { showTranslation: false, showSubtitle: true };
  return { showTranslation: false, showSubtitle: false };
}

/** Tours de la scène dans l'ordre de parcours du chemin principal (premier choix à chaque tour). */
export function mainPath(scene: Scene): string[] {
  const out: string[] = [];
  for (let id = scene.start; id !== 'end' && scene.turns[id] && !out.includes(id); id = scene.turns[id].expect[0]?.next ?? 'end') out.push(id);
  return out;
}

/** Problèmes de cohérence d'une scène (tours manquants, modèle non reconnu par son propre tour…). */
export function sceneProblems(scene: Scene): string[] {
  const problems: string[] = [];
  if (!scene.turns[scene.start]) problems.push(`tour de départ inexistant : ${scene.start}`);
  for (const [id, t] of Object.entries(scene.turns)) {
    if (!t.expect.length) problems.push(`${id} : aucune intention attendue`);
    for (const i of t.expect) if (i.next !== 'end' && !scene.turns[i.next]) problems.push(`${id}/${i.id} : tour suivant inexistant (${i.next})`);
    if (!matchIntent(t, t.model).intent) problems.push(`${id} : la réponse modèle n'est pas reconnue (« ${t.model} »)`);
    if (!matchIntent(t, t.hints[2]).intent) problems.push(`${id} : la troisième aide n'est pas reconnue (« ${t.hints[2]} »)`);
    if (!t.choice && matchIntent(t, t.npc).intent) problems.push(`${id} : la réplique du personnage suffit à valider le tour (on pourrait la répéter)`);
  }
  // Tous les tours doivent être atteignables, et la scène doit pouvoir finir.
  const reachable = new Set<string>();
  const stack = [scene.start];
  while (stack.length) {
    const id = stack.pop()!;
    if (reachable.has(id) || !scene.turns[id]) continue;
    reachable.add(id);
    for (const i of scene.turns[id].expect) if (i.next !== 'end') stack.push(i.next);
  }
  for (const id of Object.keys(scene.turns)) if (!reachable.has(id)) problems.push(`${id} : tour inatteignable`);
  if (!Object.values(scene.turns).some((t) => t.expect.some((i) => i.next === 'end'))) problems.push('la scène ne se termine jamais');
  return problems;
}
