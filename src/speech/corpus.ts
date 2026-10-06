import type { Exercise } from '../content/types';
import { CHECKPOINTS, IRREGULAR_VERBS, LESSONS, VOCAB } from '../content';
import { PLACEMENT_ITEMS } from '../content/placement';
import { irregularExercise, irregularIntro, vocabExercise, vocabIntro, type IrregularMode, type VocabMode } from '../core/generators';
import { reformat } from '../core/retry';
import { speechKey } from './audioKey';
import { VOICE_SAMPLE } from './audio';

/**
 * Tous les textes que l'app peut lire à voix haute. Sert à pré-générer l'audio (tools/voices)
 * et, dans les tests, à vérifier qu'aucun texte lu n'a été oublié.
 */

function exerciseTexts(e: Exercise): string[] {
  const out = [e.speak];
  if (e.type === 'listen_mcq' || e.type === 'dictation') out.push(e.audio);
  if (e.type === 'speak' && e.mode !== 'translate') out.push(e.prompt);
  const harder = reformat(e);
  if (harder) out.push(harder.speak);
  return out.filter((t): t is string => !!t);
}

const VOCAB_MODES: VocabMode[] = ['en_fr', 'listen', 'fr_en', 'cloze', 'say'];
const IRREGULAR_MODES: IrregularMode[] = ['past', 'participle', 'three', 'say'];

export function speechCorpus(): string[] {
  const texts: string[] = [VOICE_SAMPLE];
  for (const l of LESSONS) {
    for (const e of l.exercises) texts.push(...exerciseTexts(e));
    for (const s of l.explanation) for (const ex of s.examples ?? []) texts.push(ex.en);
  }
  for (const e of Object.values(CHECKPOINTS).flat()) texts.push(...exerciseTexts(e));
  for (const e of PLACEMENT_ITEMS) texts.push(...exerciseTexts(e));
  for (const v of VOCAB) {
    texts.push(vocabIntro(v).speak);
    for (const m of VOCAB_MODES) texts.push(...exerciseTexts(vocabExercise(v, VOCAB, m)));
  }
  for (const v of IRREGULAR_VERBS) {
    texts.push(irregularIntro(v).speak);
    for (const m of IRREGULAR_MODES) texts.push(...exerciseTexts(irregularExercise(v, m)));
  }
  // Une entrée par clé : deux écritures du même texte (apostrophes, espaces) partagent le même fichier.
  const byKey = new Map<string, string>();
  for (const t of texts) if (!byKey.has(speechKey(t))) byKey.set(speechKey(t), t);
  return [...byKey.values()];
}
