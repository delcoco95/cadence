import { describe, expect, it } from 'vitest';
import { aidLevel, debrief, hasVariant, matchIntent, sceneProblems, targetScore, type TurnRecord } from './scene';
import { words } from './speaking';
import type { Scene, SceneTurn } from '../content/scenes/types';

const turn: SceneTurn = {
  npc: 'Do you have a booking?',
  npcFr: '',
  taskFr: '',
  expect: [
    { id: 'no', any: [['no', 'not'], ['book*', 'reserv*']], next: 'end' },
    { id: 'yes', any: [['yes', 'under the name']], none: ['not', 'no'], next: 'end' },
  ],
  fallback: 'Sorry?',
  hints: ['no · booking', 'No, I…', 'No, I haven’t booked.'],
  model: 'No, I haven’t booked a table.',
  targets: ['could', 'please'],
};

describe('reconnaissance d’intention des scènes', () => {
  it('accepte des formulations variées du même sens', () => {
    expect(matchIntent(turn, "No, I haven't booked anything").intent?.id).toBe('no');
    expect(matchIntent(turn, 'I do not have a reservation').intent?.id).toBe('no');
    expect(matchIntent(turn, 'Yes, under the name Martin').intent?.id).toBe('yes');
  });

  it('distingue oui et non grâce aux mots exclus', () => {
    expect(matchIntent(turn, 'yes but not under my name').intent?.id).not.toBe('yes');
  });

  it('refuse une réponse hors sujet et indique un score partiel', () => {
    const m = matchIntent(turn, 'no idea');
    expect(m.intent).toBeNull();
    expect(m.score).toBeCloseTo(0.5);
  });

  it('tolère une lettre de travers sur un mot long, mais pas un autre mot', () => {
    expect(hasVariant(words('the reservaton'), 'reservation')).toBe(true);
    expect(hasVariant(words('turn right'), 'light')).toBe(false);
    expect(hasVariant(words('reserved'), 'reserv*')).toBe(true);
  });

  it('mesure les formes visées', () => {
    expect(targetScore(turn, 'Could we sit outside, please?')).toBe(1);
    expect(targetScore(turn, 'Outside.')).toBe(0);
  });
});

describe('bilan et aides', () => {
  const rec = (o: Partial<TurnRecord>): TurnRecord => ({ turnId: 't', said: 'x', understood: true, attempts: 1, hints: 0, usedModel: false, precision: 1, ...o });

  it('sépare compréhension, précision et autonomie', () => {
    const d = debrief([rec({}), rec({ attempts: 2, hints: 3, usedModel: true, precision: 0 })], true);
    expect(d.comprehension).toBe(0.5);
    expect(d.precision).toBe(0.5);
    expect(d.autonomy).toBe(0.5);
    expect(d.overall).toBeCloseTo(0.5);
  });

  it('pénalise un objectif non atteint', () => {
    expect(debrief([rec({})], false).overall).toBeLessThan(debrief([rec({})], true).overall);
  });

  it('retire la traduction puis les sous-titres au fil des parties réussies', () => {
    expect(aidLevel(0)).toEqual({ showTranslation: true, showSubtitle: true });
    expect(aidLevel(1)).toEqual({ showTranslation: false, showSubtitle: true });
    expect(aidLevel(5)).toEqual({ showTranslation: false, showSubtitle: false });
  });

  it('signale une scène mal construite', () => {
    const bad: Scene = {
      id: 'x', lang: 'en', cefr: 'A2', title: '', situation: '', goal: '', character: { name: 'Ana', role: '', voice: 'female' },
      kcIds: [], start: 'a', closing: '', phrases: [],
      turns: { a: { ...turn, expect: [{ id: 'i', any: [['booking']], next: 'missing' }] }, orphan: turn },
    };
    const problems = sceneProblems(bad).join(' | ');
    expect(problems).toContain('tour suivant inexistant');
    expect(problems).toContain('inatteignable');
    expect(problems).toContain('la réplique du personnage suffit');
  });
});
