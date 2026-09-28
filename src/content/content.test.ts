import { describe, expect, it } from 'vitest';
import { LESSONS, UNITS, PATH, getLesson, VOCAB_A2, IRREGULAR_VERBS } from './index';
import { KC_LABELS } from './kcs';
import { gradeExercise } from '../core/exercise';
import { vocabExercise, irregularExercise } from '../core/generators';

describe('content integrity', () => {
  const exercises = LESSONS.flatMap((l) => l.exercises);

  it('has unique ids', () => {
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(LESSONS.length);
    expect(new Set(VOCAB_A2.map((v) => v.id)).size).toBe(VOCAB_A2.length);
    expect(new Set(IRREGULAR_VERBS.map((v) => v.id)).size).toBe(IRREGULAR_VERBS.length);
  });

  it('references existing lessons from units, and every lesson is on the path', () => {
    for (const u of UNITS) for (const id of u.lessonIds) expect(getLesson(id), id).toBeDefined();
    expect(new Set(PATH)).toEqual(new Set(LESSONS.map((l) => l.id)));
  });

  it('labels every knowledge component', () => {
    for (const e of exercises) for (const kc of e.kcIds) expect(KC_LABELS[kc], `${e.id}: ${kc}`).toBeDefined();
  });

  it('has well-formed exercises whose reference answer grades as correct', () => {
    for (const e of exercises) {
      expect(e.explanation, e.id).not.toBe('');
      if (e.type === 'cloze') expect(e.sentence.split('___').length, e.id).toBe(2);
      switch (e.type) {
        case 'mcq':
        case 'listen_mcq':
          expect(e.answer, e.id).toBeLessThan(e.options.length);
          expect(new Set(e.options).size, e.id).toBe(e.options.length);
          break;
        case 'cloze':
        case 'type_answer':
        case 'translate':
        case 'dictation':
          expect(e.accepted.length, e.id).toBeGreaterThan(0);
          for (const a of e.accepted)
            expect(gradeExercise(e, { kind: 'text', value: a }).verdict, `${e.id}: ${a}`).toBe('correct');
          break;
        case 'word_bank':
          expect(gradeExercise(e, { kind: 'tokens', tokens: e.tokens }).verdict, e.id).toBe('correct');
          break;
        case 'speak': {
          const reference = e.mode === 'answer' ? e.sample : e.mode === 'repeat' ? e.prompt : e.accepted?.[0];
          expect(reference, e.id).toBeTruthy();
          // L'exemple de réponse doit lui-même satisfaire les critères (longueur, mots-clés).
          expect(gradeExercise(e, { kind: 'speech', transcript: reference! }).verdict, `${e.id}: ${reference}`).toBe('correct');
          break;
        }
      }
    }
  });

  it('generates valid vocabulary and irregular verb exercises for all entries', () => {
    for (const v of VOCAB_A2)
      for (const mode of ['en_fr', 'fr_en', 'cloze'] as const) {
        const e = vocabExercise(v, VOCAB_A2, mode);
        if (e.type === 'mcq') {
          expect(e.options[e.answer], v.id).toBe(v.fr);
          expect(new Set(e.options).size, v.id).toBe(4);
        }
        if (e.type === 'cloze') expect(e.sentence, v.id).toContain('___');
      }
    for (const v of IRREGULAR_VERBS)
      for (const mode of ['past', 'participle', 'three'] as const) {
        const e = irregularExercise(v, mode);
        if (e.type === 'type_answer')
          expect(gradeExercise(e, { kind: 'text', value: e.accepted[0] }).verdict, `${v.id} ${mode}`).toBe('correct');
      }
  });
});
