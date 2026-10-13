import { afterEach, describe, expect, it } from 'vitest';
import { setActiveLang } from './lang';
import { gradeText, normalize } from './grading';
import { detectTextErrors } from './errors';
import { matchSpeech } from './speaking';
import { irregularExercise, vocabExercise } from './generators';
import type { Exercise, IrregularVerb, VocabEntry } from '../content/types';
import { makeExercises } from '../content/builders';

const ex = { kcIds: [] } as unknown as Exercise;

afterEach(() => setActiveLang('en'));

describe('correction en italien et en espagnol', () => {
  it('ignore ¿ et ¡', () => {
    setActiveLang('es');
    expect(normalize('¿Dónde está la estación?')).toBe('dónde está la estación');
    expect(gradeText('Donde esta la estacion', ['¿Dónde está la estación?']).verdict).toBe('typo');
    expect(gradeText('¡Hola!', ['Hola']).verdict).toBe('correct');
  });

  it('compte un oubli d’accent comme une faute légère, même en mode strict', () => {
    setActiveLang('it');
    expect(gradeText('perche', ['perché'], true)).toMatchObject({ verdict: 'typo', score: 0.8 });
    expect(gradeText('citta', ['città']).verdict).toBe('typo');
    expect(gradeText('fato', ['fatto'], true).verdict).toBe('wrong');
  });

  it('ne développe les contractions qu’en anglais', () => {
    expect(normalize("I'm here")).toBe('i am here');
    setActiveLang('it');
    expect(normalize("L'acqua è fredda")).toBe("l'acqua è fredda");
  });

  it('lit les nombres dans la langue apprise', () => {
    setActiveLang('es');
    expect(matchSpeech('Tengo tres hermanos', 'tengo 3 hermanos').score).toBe(1);
    setActiveLang('it');
    expect(matchSpeech('Ho due gatti', 'ho 2 gatti').score).toBe(1);
  });
});

describe('détection d’erreurs en italien et en espagnol', () => {
  it('reconnaît un accord en genre', () => {
    setActiveLang('it');
    expect(detectTextErrors('Sono stanca', 'Sono stanco', ex)).toContain('gender_agreement');
    expect(detectTextErrors('La casa è bella', 'Il casa è bella', ex)).toContain('gender_agreement');
    setActiveLang('es');
    expect(detectTextErrors('Estamos cansadas', 'Estamos cansados', ex)).toContain('gender_agreement');
  });

  it('reconnaît ser à la place de estar', () => {
    setActiveLang('es');
    expect(detectTextErrors('Estoy cansado', 'Soy cansado', ex)).toEqual(['ser_estar']);
  });

  it('reconnaît un pronom complément', () => {
    setActiveLang('it');
    expect(detectTextErrors('Ne voglio due', 'Lo voglio due', ex)).toContain('clitic_pronoun');
    setActiveLang('es');
    expect(detectTextErrors('Se lo doy', 'Le lo doy', ex)).toContain('clitic_pronoun');
  });

  it('n’applique pas les détecteurs anglais', () => {
    setActiveLang('it');
    expect(detectTextErrors('Lui lavora', 'Lui lavoras', ex)).not.toContain('third_person_s');
  });
});

describe('générateurs et constructeurs selon la langue', () => {
  const entry: VocabEntry = { id: 'it-a1-a1_food-il-pane', en: 'il pane', fr: 'le pain', cefr: 'A1', theme: 'a1_food', example: 'Compro il pane.' };
  const verb: IrregularVerb = { id: 'it-andare', base: 'andare', past: 'vado', participle: 'andato', fr: 'aller', cefr: 'A1' };

  it('donne des consignes dans la langue du cours', () => {
    setActiveLang('it');
    expect(vocabExercise(entry, [entry], 'fr_en').instruction).toBe('Comment dit-on en italien ?');
    const e = irregularExercise(verb, 'past');
    expect(e.instruction).toContain('présent');
    expect(e.type === 'type_answer' && e.accepted).toEqual(['vado']);
    expect(makeExercises('es')('es-x-1', 'A1', { kc: 'k' }).tr('Bonjour', ['Hola'], 'x').build()[0].instruction).toBe('Traduis en espagnol.');
  });

  it('n’enlève pas « to » hors de l’anglais', () => {
    setActiveLang('it');
    const e = vocabExercise({ ...entry, en: 'to / a' }, [entry], 'fr_en');
    expect(e.type === 'type_answer' && e.accepted).toEqual(['to', 'a']);
  });
});

describe('oral sans accents', () => {
  it('reconnaît un mot transcrit sans accent', () => {
    setActiveLang('es');
    expect(matchSpeech('Ayer cené en casa', 'ayer cene en casa').score).toBe(1);
  });
});
