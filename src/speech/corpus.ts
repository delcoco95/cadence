import type { Exercise } from '../content/types';
import { CHECKPOINTS, IRREGULAR_VERBS, LESSONS, PLACEMENT, VOCAB } from '../content';
import { activeLanguage } from '../core/lang';
import { irregularExercise, irregularIntro, vocabExercise, vocabIntro, type IrregularMode, type VocabMode } from '../core/generators';
import { reformat } from '../core/retry';
import { speechKey } from './audioKey';
import type { Scene } from '../content/scenes/types';

/**
 * Tous les textes que l'app peut lire à voix haute dans le cours actif. Sert à pré-générer l'audio
 * (tools/voices) et, dans les tests, à vérifier qu'aucun texte lu n'a été oublié.
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

/** Tout ce qu'une scène fait dire à voix haute : répliques, réactions + réplique suivante, clôture, aides et expressions. */
export function sceneTexts(scenes: Scene[]): string[] {
  const out: string[] = [];
  for (const s of scenes) {
    out.push(s.closing, ...s.phrases.map((p) => p.text));
    for (const t of Object.values(s.turns)) {
      out.push(t.npc, t.fallback, t.hints[2], t.model);
      for (const i of t.expect) {
        if (!i.react) continue;
        out.push(`${i.react} ${i.next === 'end' ? s.closing : s.turns[i.next].npc}`);
      }
    }
  }
  return out;
}

export function speechCorpus(): string[] {
  const texts: string[] = [activeLanguage().voiceSample];
  for (const l of LESSONS) {
    for (const e of l.exercises) texts.push(...exerciseTexts(e));
    for (const s of l.explanation) for (const ex of s.examples ?? []) texts.push(ex.en);
  }
  for (const e of Object.values(CHECKPOINTS).flat()) texts.push(...exerciseTexts(e));
  for (const e of PLACEMENT) texts.push(...exerciseTexts(e));
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
