import { describe, expect, it } from 'vitest';
import { pathState, unitsValidatedByJump, type LessonRecord, type UnitRecord } from './units';
import { UNITS, CHECKPOINTS, getExercise } from '../content';
import { kcById } from '../content/kcs';
import { referenceResponse } from '../content/validate';
import { gradeExercise } from './exercise';
import { resolveExercise } from '../db/meta';

const lessons = (ids: string[], score = 0.9) =>
  new Map<string, LessonRecord>(ids.map((id) => [id, { status: 'completed', bestScore: score }]));
const [u0, u1, u2] = UNITS;

describe('enchaînement des unités', () => {
  it('démarre sur la première leçon, unités suivantes verrouillées', () => {
    const s = pathState(UNITS, new Map(), new Map());
    expect(s.next).toMatchObject({ kind: 'lesson', lessonId: u0.lessonIds[0] });
    expect(s.units[0].unlocked).toBe(true);
    expect(s.units[1].unlocked).toBe(false);
    expect(s.units[1].steps.every((st) => st.status === 'locked')).toBe(true);
  });

  it('impose entraînement puis défi avant l’unité suivante', () => {
    const done = lessons(u0.lessonIds);
    let s = pathState(UNITS, done, new Map());
    expect(s.next).toMatchObject({ kind: 'practice', unitId: u0.id });
    expect(s.units[0].steps.find((x) => x.kind === 'challenge')!.status).toBe('locked');

    s = pathState(UNITS, done, new Map([[u0.id, { unitId: u0.id, practiceDoneAt: 1 }]]));
    expect(s.next).toMatchObject({ kind: 'challenge', unitId: u0.id });
    expect(s.units[1].unlocked).toBe(false);

    s = pathState(UNITS, done, new Map([[u0.id, { unitId: u0.id, practiceDoneAt: 1, validatedAt: 2, via: 'challenge' }]]));
    expect(s.units[1].unlocked).toBe(true);
    expect(s.next).toMatchObject({ kind: 'lesson', lessonId: u1.lessonIds[0] });
  });

  it('garde ouvertes les unités déjà commencées avant l’arrivée des défis', () => {
    const s = pathState(UNITS, lessons([u2.lessonIds[0]]), new Map());
    expect(s.units[2].unlocked).toBe(true);
  });

  it('un saut valide l’unité visée et celles d’avant', () => {
    const records = new Map<string, UnitRecord>([[u0.id, { unitId: u0.id, validatedAt: 1 }]]);
    expect(unitsValidatedByJump(UNITS, u2.id, records)).toEqual([u1.id, u2.id]);
  });
});

describe('défis d’unité', () => {
  const all = Object.values(CHECKPOINTS).flat();

  it('existent pour chaque unité, avec des items d’évaluation variés', () => {
    for (const u of UNITS) {
      const items = CHECKPOINTS[u.id] ?? [];
      expect(items.length, u.id).toBeGreaterThanOrEqual(5);
      expect(new Set(items.map((e) => e.type)).size, u.id).toBeGreaterThanOrEqual(3);
      expect(u.canDo?.length, u.id).toBeGreaterThan(0);
    }
  });

  it('ont des identifiants uniques, distincts des leçons, et des notions existantes', () => {
    expect(new Set(all.map((e) => e.id)).size).toBe(all.length);
    for (const e of all) {
      expect(getExercise(e.id), e.id).toBeUndefined();
      expect(e.role).toBe('assessment');
      for (const kc of e.kcIds) expect(kcById.has(kc), `${e.id} → ${kc}`).toBe(true);
      expect(resolveExercise(e.id)?.id).toBe(e.id);
    }
  });

  it('acceptent leur réponse de référence', () => {
    for (const e of all) {
      const ref = referenceResponse(e);
      expect(ref, e.id).toBeDefined();
      expect(gradeExercise(e, ref!).verdict, e.id).toBe('correct');
    }
  });
});
