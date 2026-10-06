import { describe, expect, it } from 'vitest';
import {
  MAX_ITEMS, SECTIONS, bandOf, estimate, nextPlacementItem, pCorrect, placementResult, testedOutUnits,
  type PlacementItemMeta, type PlacementResponse,
} from './placement';
import { PLACEMENT_ITEMS } from '../content/placement';
import { UNITS } from '../content';
import { gradeExercise } from './exercise';

/** Générateur pseudo-aléatoire reproductible (mulberry32). */
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function simulate(trueTheta: number, pool: PlacementItemMeta[], seed: number) {
  const r = rng(seed);
  const responses: PlacementResponse[] = [];
  for (let item = nextPlacementItem(responses, pool, r); item; item = nextPlacementItem(responses, pool, r)) {
    responses.push({ ...item, correct: r() < pCorrect(trueTheta, item.b, item.guess) });
  }
  return responses;
}

const POOL = PLACEMENT_ITEMS.map((e) => e.placement);
const ORDER = ['A1', 'A2', 'A2+', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];

describe('placement : bandes', () => {
  it('convertit θ en bande CECRL', () => {
    expect(bandOf(-3)).toBe('A1');
    expect(bandOf(-1.2)).toBe('A2');
    expect(bandOf(0)).toBe('B1');
    expect(bandOf(1.5)).toBe('B2');
    expect(bandOf(2.8)).toBe('C1');
  });

  it('estime plus haut quand on réussit plus', () => {
    const items = [-1, 0, 1].map((b) => ({ b, guess: 0.25 }));
    const low = estimate(items.map((i) => ({ ...i, correct: false })));
    const high = estimate(items.map((i) => ({ ...i, correct: true })));
    expect(high.theta).toBeGreaterThan(low.theta + 1);
  });
});

describe('placement : déroulé adaptatif', () => {
  it('suit les sections dans l’ordre, respecte les bornes et se termine', () => {
    const responses = simulate(0, POOL, 1);
    expect(responses.length).toBeLessThanOrEqual(MAX_ITEMS);
    const order = responses.map((r) => r.section);
    expect([...new Set(order)]).toEqual(SECTIONS.map((s) => s.section));
    for (const s of SECTIONS) {
      const n = order.filter((x) => x === s.section).length;
      expect(n).toBeGreaterThanOrEqual(s.min);
      expect(n).toBeLessThanOrEqual(s.max);
    }
    expect(new Set(responses.map((r) => r.id)).size).toBe(responses.length);
  });

  it('retrouve le niveau d’apprenants simulés (A2, B1, B2) à une bande près', () => {
    for (const trueTheta of [-1.2, 0.2, 1.6]) {
      const runs = Array.from({ length: 60 }, (_, i) => placementResult(simulate(trueTheta, POOL, 100 + i), []));
      const meanError = runs.reduce((a, r) => a + Math.abs(r.theta - trueTheta), 0) / runs.length;
      expect(meanError, `θ = ${trueTheta}`).toBeLessThan(0.75);
      const target = ORDER.indexOf(bandOf(trueTheta));
      const close = runs.filter((r) => Math.abs(ORDER.indexOf(r.band) - target) <= 1).length / runs.length;
      expect(close, `θ = ${trueTheta}`).toBeGreaterThanOrEqual(0.8);
    }
  });

  it('ne pose pas deux fois le même test', () => {
    const a = simulate(0, POOL, 7).map((r) => r.id).join();
    const b = simulate(0, POOL, 8).map((r) => r.id).join();
    expect(a).not.toBe(b);
  });
});

describe('placement : plafond', () => {
  it('ne donne jamais un niveau au-delà de ce que la banque mesure', () => {
    const perfect = simulate(9, POOL, 3);
    expect(perfect.every((r) => r.correct)).toBe(true);
    expect(placementResult(perfect, []).band).toBe('C1');
  });
});

describe('placement : dispense d’unités', () => {
  const units = UNITS.map((u) => u.id);
  let n = 0;
  const grammar = (b: number, correct: boolean, unitId?: string): PlacementResponse => ({
    id: `g${n++}`, section: 'grammar', b, guess: 0.25, correct, unitId,
  });

  it('ne dispense de rien un niveau débutant', () => {
    const rs = [grammar(-2, false, 'a2-basics'), grammar(-1.5, false), grammar(-1, false)];
    expect(testedOutUnits(rs, units)).toEqual([]);
  });

  it('dispense un niveau avancé, mais jamais d’une unité ratée ni au-delà d’une lacune', () => {
    const rs = [
      grammar(-2, true, 'a2-basics'), grammar(-1, true, 'a2-present-simple'), grammar(0, true), grammar(1, true),
      grammar(1.5, true), grammar(1.3, true), grammar(-1, false, 'a2-questions'),
    ];
    const out = testedOutUnits(rs, units);
    expect(out.slice(0, 3)).toEqual(['a2-basics', 'a2-present-simple', 'a2-present-continuous']);
    expect(out).not.toContain('a2-questions');
    expect(out).not.toContain('a2-past-simple');
  });
});

describe('placement : banque d’items', () => {
  it('a des identifiants uniques et des réponses de référence valides', () => {
    expect(new Set(PLACEMENT_ITEMS.map((e) => e.id)).size).toBe(PLACEMENT_ITEMS.length);
    for (const e of PLACEMENT_ITEMS) {
      expect(new Set(e.options).size, e.id).toBe(e.options.length);
      expect(e.answer, e.id).toBeLessThan(e.options.length);
      expect(gradeExercise(e, { kind: 'choice', index: e.answer }).verdict, e.id).toBe('correct');
      expect(e.role).toBe('assessment');
      if (e.placement.unitId) expect(UNITS.some((u) => u.id === e.placement.unitId), e.id).toBe(true);
    }
  });

  it('couvre de A1 à C1 dans chaque section', () => {
    for (const s of SECTIONS) {
      const bs = POOL.filter((p) => p.section === s.section).map((p) => p.b);
      expect(bs.length, s.section).toBeGreaterThanOrEqual(s.max + 2);
      expect(Math.min(...bs), s.section).toBeLessThan(-1.5);
      expect(Math.max(...bs), s.section).toBeGreaterThan(2.5);
    }
  });
});
