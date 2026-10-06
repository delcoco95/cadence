import { describe, expect, it } from 'vitest';
import { speechCorpus } from './corpus';
import { normalizeSpeech, speechKey } from './audioKey';
import { VOICE_SAMPLE } from './audio';
import { IRREGULAR_VERBS, LESSONS, VOCAB_A2 } from '../content';
import { irregularIntro, vocabIntro } from '../core/generators';

describe('voix pré-générées : corpus', () => {
  const corpus = speechCorpus();
  const keys = new Set(corpus.map(speechKey));

  it('n’a aucune collision de nom de fichier', () => {
    expect(keys.size).toBe(corpus.length);
  });

  it('partage le même fichier entre deux écritures du même texte', () => {
    expect(speechKey('I don’t  know.')).toBe(speechKey("I don't know."));
    expect(normalizeSpeech(' a  b ')).toBe('a b');
  });

  it('couvre tout ce que l’app lit à voix haute', () => {
    const spoken = [
      VOICE_SAMPLE,
      ...LESSONS.flatMap((l) => l.exercises.map((e) => e.speak).filter((t): t is string => !!t)),
      ...LESSONS.flatMap((l) => l.explanation.flatMap((s) => (s.examples ?? []).map((x) => x.en))),
      ...VOCAB_A2.map((v) => vocabIntro(v).speak),
      ...IRREGULAR_VERBS.map((v) => irregularIntro(v).speak),
    ];
    for (const t of spoken) expect(keys.has(speechKey(t)), t).toBe(true);
  });

  it('lit « was/were » avec des espaces', () => {
    const be = IRREGULAR_VERBS.find((v) => v.base === 'be')!;
    expect(irregularIntro(be).speak).toBe('be, was or were, been');
  });
});
