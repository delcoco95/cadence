/**
 * Maîtrise par notion (knowledge component), modèle type Elo / Rasch :
 * P(réussite) = σ(θ − b), où b est la difficulté de l'exercice.
 */
export interface KcState {
  kcId: string;
  theta: number;
  attempts: number;
  correct: number;
  lastAt: number;
}

export const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export function initialKc(kcId: string): KcState {
  return { kcId, theta: 0, attempts: 0, correct: 0, lastAt: 0 };
}

/** Pas d'apprentissage élevé au début (on découvre le niveau), puis de plus en plus stable. */
export function updateKc(s: KcState, difficulty: number, score: number, now = Date.now()): KcState {
  const k = Math.max(0.25, 1.2 / Math.sqrt(1 + s.attempts));
  const p = sigmoid(s.theta - difficulty);
  return {
    ...s,
    theta: s.theta + k * (score - p),
    attempts: s.attempts + 1,
    correct: s.correct + (score >= 0.8 ? 1 : 0),
    lastAt: now,
  };
}

/** Difficulté de référence d'une notion A2 : un exercice « moyen » du niveau. */
const REF_DIFFICULTY = 0;

/**
 * Maîtrise 0..1 : probabilité de réussir un exercice moyen, atténuée tant qu'on
 * a peu de preuves (moins de 6 tentatives).
 */
export function mastery(s: KcState): number {
  if (s.attempts === 0) return 0;
  return sigmoid(s.theta - REF_DIFFICULTY) * Math.min(1, s.attempts / 6);
}

export const isMastered = (s: KcState) => s.attempts >= 8 && mastery(s) >= 0.85;
export const isWeak = (s: KcState) => s.attempts >= 3 && mastery(s) < 0.6;
