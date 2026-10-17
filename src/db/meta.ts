import { checkpointById, getExercise, irregularById, vocabById, VOCAB, IRREGULAR_VERBS } from '../content';
import type { Exercise } from '../content/types';
import { irregularExercise, vocabExercise, type IrregularMode, type VocabMode } from '../core/generators';
import { reformat } from '../core/retry';
import type { IrregularForms } from '../core/errors';

let formsFor: typeof IRREGULAR_VERBS | null = null;
let forms: IrregularForms = new Map();

/**
 * Formes des irréguliers du cours actif, pour les détecteurs d'erreurs. Recalculées quand la langue change :
 * une table figée au chargement resterait anglaise en italien et en espagnol.
 */
export function irregularForms(): IrregularForms {
  if (formsFor !== IRREGULAR_VERBS) {
    formsFor = IRREGULAR_VERBS;
    forms = new Map(
      IRREGULAR_VERBS.map((v) => [
        v.base,
        { past: v.past.split('/').map((s) => s.trim()), participle: v.participle.split('/').map((s) => s.trim()) },
      ]),
    );
  }
  return forms;
}

const VOCAB_MODES: VocabMode[] = ['en_fr', 'listen', 'fr_en', 'cloze', 'say'];
const IRR_MODES: Record<string, IrregularMode> = { past: 'past', pp: 'participle', three: 'three', say: 'say' };

/**
 * Retrouve un exercice à partir de son identifiant, y compris les exercices générés
 * (gen-v-<mot>-<mode>, gen-irr-<verbe>-<mode>), reformatés (<id>~recall) et des défis d'unité.
 * Les items du test de placement ne sont volontairement pas résolus : ils ne nourrissent pas la maîtrise.
 * Les QCM générés sont reconstruits avec un ordre d'options neutre.
 */
export function resolveExercise(id: string): Exercise | undefined {
  if (id.endsWith('~recall')) {
    const original = resolveExercise(id.slice(0, -'~recall'.length));
    return original && reformat(original);
  }
  const lesson = getExercise(id) ?? checkpointById.get(id);
  if (lesson) return lesson;
  if (id.startsWith('gen-v-')) {
    const rest = id.slice('gen-v-'.length);
    const mode = VOCAB_MODES.find((m) => rest.endsWith(`-${m}`));
    const entry = mode && vocabById.get(rest.slice(0, -(mode.length + 1)));
    return entry && mode ? vocabExercise(entry, VOCAB, mode) : undefined;
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
