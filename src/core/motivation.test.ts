import { describe, expect, it } from 'vitest';
import { MOTIVATION_THEMES, prioritizeByMotivation, priorityThemes } from './motivation';
import { THEMES, VOCAB_A2 } from '../content';
import { vocabExercise } from './generators';
import { gradeExercise } from './exercise';

describe('objectifs et cours', () => {
  it('alterne les thèmes de plusieurs objectifs', () => {
    expect(priorityThemes(['travel', 'work']).slice(0, 4)).toEqual(['ph_travel', 'ph_work', 'travel', 'work']);
  });

  it('présente d’abord les mots et phrases liés aux objectifs', () => {
    const first = prioritizeByMotivation(VOCAB_A2, ['work']).slice(0, 10);
    expect(first.every((v) => v.theme === 'ph_work')).toBe(true);
    const mixed = prioritizeByMotivation(VOCAB_A2, ['travel', 'work', 'culture']).slice(0, 6).map((v) => v.theme);
    expect(mixed).toEqual(['ph_travel', 'ph_work', 'ph_culture', 'ph_travel', 'ph_work', 'ph_culture']);
    expect(prioritizeByMotivation(VOCAB_A2, ['travel', 'work'])).toHaveLength(VOCAB_A2.length);
  });

  it('ne change rien sans objectif particulier', () => {
    expect(prioritizeByMotivation(VOCAB_A2, ['brain'])).toEqual(VOCAB_A2);
    expect(prioritizeByMotivation(VOCAB_A2, [])).toEqual(VOCAB_A2);
  });

  it('ne cite que des thèmes qui existent', () => {
    for (const themes of Object.values(MOTIVATION_THEMES)) for (const t of themes) expect(THEMES[t], t).toBeDefined();
  });

  it('les phrases utiles se corrigent comme du vocabulaire', () => {
    for (const v of VOCAB_A2.filter((x) => x.theme.startsWith('ph_'))) {
      const ex = vocabExercise(v, VOCAB_A2, 'fr_en');
      expect(ex.type === 'type_answer' && gradeExercise(ex, { kind: 'text', value: v.en }).verdict, v.id).toBe('correct');
      expect(v.en.includes('/'), v.id).toBe(false);
    }
  });
});
