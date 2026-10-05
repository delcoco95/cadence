import { describe, expect, it } from 'vitest';
import { genderize, genderizeDeep, genderVariants, inclusive } from './gender';
import { gradeExercise } from './exercise';
import type { Exercise } from '../content/types';
import { VOCAB_A2 } from '../content';
import { vocabExercise } from './generators';

describe('accord en genre', () => {
  it('choisit la forme du profil', () => {
    expect(genderize('Je suis {prêt|prête}.', 'm')).toBe('Je suis prêt.');
    expect(genderize('Je suis {prêt|prête}.', 'f')).toBe('Je suis prête.');
  });

  it('déduit une forme inclusive lisible pour le neutre', () => {
    expect(genderize('Je suis {occupé|occupée}.', 'n')).toBe('Je suis occupé·e.');
    expect(genderize('{heureux|heureuse}', 'n')).toBe('heureux / heureuse');
    expect(genderize('{Prêt|Prête|Prêt·e} ?', 'n')).toBe('Prêt·e ?');
    expect(inclusive('drôle', 'drôle')).toBe('drôle');
  });

  it('laisse intact un texte sans accolades', () => {
    expect(genderize('I am ready.', 'f')).toBe('I am ready.');
    expect(genderVariants('ready')).toEqual(['ready']);
  });

  it('garde les deux formes dans les réponses acceptées', () => {
    const ex = { accepted: ['Je suis {prêt|prête}.'], source: 'Tu es {prêt|prête} ?' };
    const out = genderizeDeep(ex, 'm');
    expect(out.source).toBe('Tu es prêt ?');
    expect(out.accepted).toEqual(['Je suis prêt.', 'Je suis prête.']);
  });

  it('accepte un accord féminin même si le profil est masculin', () => {
    const ex = {
      id: 't', type: 'translate', direction: 'en_fr', source: 'I am tired.', accepted: ['Je suis {fatigué|fatiguée}.'],
      cefr: 'A2', skill: 'writing', kcIds: [], difficulty: 0, instruction: '', explanation: '',
    } as unknown as Exercise;
    const shown = genderizeDeep(ex, 'm');
    expect(gradeExercise(shown, { kind: 'text', value: 'Je suis fatiguée' }).verdict).toBe('correct');
    expect(gradeExercise(shown, { kind: 'text', value: 'Je suis fatigué' }).verdict).toBe('correct');
  });

  it("n'affiche jamais d'accolades dans un exercice de vocabulaire accordé", () => {
    const tired = VOCAB_A2.find((v) => v.en === 'tired')!;
    for (const g of ['m', 'f', 'n'] as const) {
      const shown = genderizeDeep(vocabExercise(tired, VOCAB_A2, 'fr_en'), g);
      const texts = Object.values(shown).flat().filter((v): v is string => typeof v === 'string');
      expect(texts.some((t) => /[{}|]/.test(t))).toBe(false);
      expect(shown.explanation).toContain(g === 'f' ? 'fatiguée' : g === 'm' ? 'fatigué.' : 'fatigué·e');
    }
  });
});
