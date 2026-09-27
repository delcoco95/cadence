import { describe, expect, it } from 'vitest';
import { LESSONS, UNITS, PATH, getLesson } from './index';
import { gradeExercise } from '../core/exercise';

describe('content integrity', () => {
  const exercises = LESSONS.flatMap((l) => l.exercises);

  it('has unique exercise ids', () => {
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('references existing lessons from units', () => {
    for (const u of UNITS) for (const id of u.lessonIds) expect(getLesson(id), id).toBeDefined();
    expect(PATH.length).toBe(LESSONS.length);
  });

  it('has well-formed exercises whose reference answer grades as correct', () => {
    for (const e of exercises) {
      expect(e.explanation, e.id).not.toBe('');
      if (e.type === 'cloze') expect(e.sentence.split('___').length, e.id).toBe(2);
      switch (e.type) {
        case 'mcq':
          expect(e.answer, e.id).toBeLessThan(e.options.length);
          expect(gradeExercise(e, { kind: 'choice', index: e.answer }).verdict).toBe('correct');
          break;
        case 'cloze':
        case 'type_answer':
        case 'translate':
          expect(e.accepted.length, e.id).toBeGreaterThan(0);
          for (const a of e.accepted) expect(gradeExercise(e, { kind: 'text', value: a }).verdict, `${e.id}: ${a}`).toBe('correct');
          break;
        case 'word_bank':
          expect(gradeExercise(e, { kind: 'tokens', tokens: e.tokens }).verdict).toBe('correct');
          break;
      }
    }
  });
});
