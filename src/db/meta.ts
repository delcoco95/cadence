import { getExercise, irregularById, vocabById, VOCAB_A2, IRREGULAR_VERBS } from '../content';
import type { Exercise } from '../content/types';
import { irregularExercise, vocabExercise, type IrregularMode, type VocabMode } from '../core/generators';
import { reformat } from '../core/retry';
import type { IrregularForms } from '../core/errors';

/** Formes des irréguliers pour les détecteurs d'erreurs. */
export const IRREGULAR_FORMS: IrregularForms = new Map(
  IRREGULAR_VERBS.map((v) => [
    v.base,
    { past: v.past.split('/').map((s) => s.trim()), participle: v.participle.split('/').map((s) => s.trim()) },
  ]),
);

const VOCAB_MODES: VocabMode[] = ['en_fr', 'listen', 'fr_en', 'cloze', 'say'];
const IRR_MODES: Record<string, IrregularMode> = { past: 'past', pp: 'participle', three: 'three', say: 'say' };

/**
 * Retrouve un exercice à partir de son identifiant, y compris les exercices générés
 * (gen-v-<mot>-<mode>, gen-irr-<verbe>-<mode>) et reformatés (<id>~recall).
 * Les QCM générés sont reconstruits avec un ordre d'options neutre.
 */
export function resolveExercise(id: string): Exercise | undefined {
  if (id.endsWith('~recall')) {
    const original = resolveExercise(id.slice(0, -'~recall'.length));
    return original && reformat(original);
  }
  const lesson = getExercise(id);
  if (lesson) return lesson;
  if (id.startsWith('gen-v-')) {
    const rest = id.slice('gen-v-'.length);
    const mode = VOCAB_MODES.find((m) => rest.endsWith(`-${m}`));
    const entry = mode && vocabById.get(rest.slice(0, -(mode.length + 1)));
    return entry && mode ? vocabExercise(entry, VOCAB_A2, mode) : undefined;
  }
  if (id.startsWith('gen-irr-')) {
    const rest = id.slice('gen-irr-'.length);
    const suffix = Object.keys(IRR_MODES).find((m) => rest.endsWith(`-${m}`));
    const verb = suffix && irregularById.get(rest.slice(0, -(suffix.length + 1)));
    return verb && suffix ? irregularExercise(verb, IRR_MODES[suffix]) : undefined;
  }
  return undefined;
}

/** Mot de vocabulaire et mode d'un exercice généré (pour distinguer vocabulaire passif / actif). */
export function vocabAttemptInfo(exerciseId: string): { vocabId: string; mode: VocabMode } | undefined {
  if (!exerciseId.startsWith('gen-v-')) return undefined;
  const rest = exerciseId.slice('gen-v-'.length);
  const mode = VOCAB_MODES.find((m) => rest.endsWith(`-${m}`));
  return mode ? { vocabId: rest.slice(0, -(mode.length + 1)), mode } : undefined;
}
