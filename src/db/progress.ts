import { db, type Attempt } from './db';
import { PATH, getExercise } from '../content';
import { addActivity } from './activity';

export async function recordAttempt(a: Omit<Attempt, 'id'>): Promise<void> {
  await db.attempts.add(a);
}

export async function completeLesson(lessonId: string, score: number, xp: number): Promise<void> {
  const prev = await db.lessonProgress.get(lessonId);
  await db.lessonProgress.put({
    lessonId,
    status: 'completed',
    bestScore: Math.max(score, prev?.bestScore ?? 0),
    completions: (prev?.completions ?? 0) + 1,
    lastAt: Date.now(),
  });
  await addActivity(0, xp);
}

/** Prochaine leçon du parcours : la première non terminée, sinon la moins bien réussie. */
export async function nextLessonId(): Promise<string> {
  const progress = new Map((await db.lessonProgress.toArray()).map((p) => [p.lessonId, p]));
  const pending = PATH.find((id) => progress.get(id)?.status !== 'completed');
  if (pending) return pending;
  return [...PATH].sort((a, b) => (progress.get(a)?.bestScore ?? 0) - (progress.get(b)?.bestScore ?? 0))[0];
}

/** Précision par compétence sur les 30 derniers jours (null si pas assez de données). */
export async function skillAccuracy(): Promise<Record<string, { accuracy: number; count: number } | null>> {
  const since = Date.now() - 30 * 86400_000;
  const attempts = await db.attempts.where('at').above(since).toArray();
  const bySkill = new Map<string, { sum: number; count: number }>();
  for (const a of attempts) {
    const skill = a.skill ?? getExercise(a.exerciseId)?.skill;
    if (!skill) continue;
    const acc = bySkill.get(skill) ?? { sum: 0, count: 0 };
    acc.sum += a.score;
    acc.count++;
    bySkill.set(skill, acc);
  }
  const out: Record<string, { accuracy: number; count: number } | null> = {};
  for (const skill of ['grammar', 'vocabulary', 'listening', 'reading', 'writing', 'speaking']) {
    const v = bySkill.get(skill);
    out[skill] = v && v.count >= 5 ? { accuracy: v.sum / v.count, count: v.count } : null;
  }
  return out;
}
