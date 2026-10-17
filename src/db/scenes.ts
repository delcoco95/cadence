import { db, type SceneRun } from './db';
import { addActivity } from './activity';
import { recordResult } from './learning';
import type { Scene } from '../content/scenes/types';
import type { Cefr, SpeakExercise } from '../content/types';
import type { SceneDebrief, TurnRecord } from '../core/scene';

/** Difficulté (échelle logit) d'une réplique selon le niveau de la scène. */
const DIFFICULTY: Record<Cefr, number> = { A1: -1.5, A2: -0.8, B1: 0, B2: 0.8, C1: 1.5, C2: 2.2 };

/**
 * Une réplique de scène vue comme un exercice oral libre : elle nourrit la maîtrise des notions de la scène.
 * Preuve « production libre » et non « transfert » : la reconnaissance par mots-clés est volontairement
 * tolérante, elle ne vaut pas une évaluation complète.
 */
export function turnExercise(scene: Scene, turnId: string): SpeakExercise {
  const turn = scene.turns[turnId];
  return {
    id: `scene-${scene.id}-${turnId}`,
    type: 'speak',
    mode: 'answer',
    evidence: 'free',
    prompt: turn.npc,
    sample: turn.model,
    cefr: scene.cefr,
    skill: 'speaking',
    kcIds: scene.kcIds,
    difficulty: DIFFICULTY[scene.cefr] ?? 0,
    instruction: turn.taskFr,
    explanation: turn.model,
  };
}

/** Score d'une réplique : comprise, avec les formes visées, sans aide. */
export function turnScore(r: TurnRecord): number {
  if (!r.understood) return 0;
  if (r.usedModel) return 0.3;
  return Math.max(0.4, Math.min(1, 0.5 + 0.5 * r.precision - 0.1 * r.hints - 0.1 * (r.attempts - 1)));
}

export async function saveSceneRun(scene: Scene, records: TurnRecord[], result: SceneDebrief, durationMs: number): Promise<number> {
  const perTurn = Math.round(durationMs / Math.max(1, records.length));
  for (const r of records) {
    const score = turnScore(r);
    await recordResult({
      exercise: turnExercise(scene, r.turnId),
      result: {
        verdict: score >= 0.8 ? 'correct' : score > 0 ? 'typo' : 'wrong',
        score,
        expected: scene.turns[r.turnId].model,
        speech: { heard: r.said, missing: [] },
      },
      durationMs: perTurn,
      context: 'scene',
      firstTry: true,
      response: JSON.stringify({ kind: 'speech', transcript: r.said }),
      errorTags: r.understood ? [] : ['insufficient_answer'],
    });
  }
  const run: SceneRun = { sceneId: scene.id, at: Date.now(), turns: records, ...result };
  const id = await db.sceneRuns.add(run);
  // Une scène réussie rapporte comme une leçon ; l'XP reste un bonus de motivation, pas une mesure de niveau.
  await addActivity(0, Math.round(20 + 40 * result.overall));
  return id as number;
}

export interface SceneStats {
  runs: number;
  /** Parties où l'objectif a été atteint (sert à retirer les aides au fil des répétitions) */
  completed: number;
  best: number;
  lastAt: number;
}

export async function sceneStats(): Promise<Map<string, SceneStats>> {
  const runs = await db.sceneRuns.toArray();
  const out = new Map<string, SceneStats>();
  for (const r of runs) {
    const s = out.get(r.sceneId) ?? { runs: 0, completed: 0, best: 0, lastAt: 0 };
    s.runs++;
    if (r.goalReached) s.completed++;
    s.best = Math.max(s.best, r.overall);
    s.lastAt = Math.max(s.lastAt, r.at);
    out.set(r.sceneId, s);
  }
  return out;
}
