import 'fake-indexeddb/auto';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { activateCourse, loadCourse } from '../content';
import { irregularForms } from './meta';
import { detectTextErrors } from '../core/errors';
import { db, learningDbOf, setLearningLanguage, sharedDb, updateSettings, getSettings } from './db';
import { markUnlocked, addActivity } from './activity';
import { exportBackup, importBackup } from './backup';
import { dayKey } from '../core/dates';
import type { Exercise } from '../content/types';

/** Tests de non-régression des bugs relevés par l'audit d'octobre 2026. */

afterAll(async () => {
  activateCourse(await loadCourse('en'));
  setLearningLanguage('en');
});

describe('formes irrégulières du cours actif (bug H2)', () => {
  it('suivent la langue active au lieu de rester anglaises', async () => {
    activateCourse(await loadCourse('en'));
    expect(irregularForms().has('go')).toBe(true);
    const italian = await loadCourse('it');
    activateCourse(italian);
    const forms = irregularForms();
    expect(forms.has('go')).toBe(false);
    expect(forms.size).toBe(italian.verbs.length);
    // Avec la bonne table, une forme irrégulière italienne fautive est repérée.
    const verb = italian.verbs.find((v) => v.participle && v.participle !== v.base)!;
    const ex = { id: 'x', type: 'cloze', kcIds: ['k'], sentence: '___', accepted: [verb.participle], cefr: 'A2', skill: 'grammar', difficulty: 0, instruction: '', explanation: '' } as unknown as Exercise;
    expect(detectTextErrors(`io ho ${verb.participle}`, `io ho ${verb.base}`, ex, { irregulars: forms })).toContain('irregular_form');
  });
});

describe('déblocage des apps (bug H3)', () => {
  beforeEach(async () => {
    setLearningLanguage('en');
    await sharedDb.dailyActivity.clear();
    await sharedDb.settings.clear();
    await updateSettings({ onboarded: true, dailyGoalMinutes: 5 });
  });

  it('est refusé tant que l’objectif du jour n’est pas atteint', async () => {
    // La veille, objectif atteint : cela ne doit pas débloquer aujourd'hui.
    await db.dailyActivity.put({ date: '2020-01-01', activeSeconds: 600, goalSeconds: 300, goalMetAt: 1, xp: 0 });
    expect(await markUnlocked()).toBe(false);
    expect((await db.dailyActivity.get(dayKey()))?.unlockedAt).toBeUndefined();
  });

  it('est accepté une fois l’objectif atteint', async () => {
    await addActivity(301);
    expect(await markUnlocked()).toBe(true);
    expect((await db.dailyActivity.get(dayKey()))?.unlockedAt).toBeTypeOf('number');
  });
});

describe('réglages (bug M7)', () => {
  it('deux modifications simultanées ne s’écrasent pas', async () => {
    await sharedDb.settings.clear();
    await Promise.all([updateSettings({ firstName: 'Nedj' }), updateSettings({ gender: 'm' })]);
    const s = await getSettings();
    expect(s.firstName).toBe('Nedj');
    expect(s.gender).toBe('m');
  });
});

describe('restauration de sauvegarde (bug M1)', () => {
  const file = (payload: unknown) => ({ text: async () => JSON.stringify(payload) }) as unknown as File;

  beforeEach(async () => {
    activateCourse(await loadCourse('en'));
    setLearningLanguage('en');
    await sharedDb.settings.clear();
    await updateSettings({ onboarded: true });
  });

  it('remplace aussi les tables absentes du fichier, au lieu de garder celles de l’appareil', async () => {
    await db.unitProgress.put({ unitId: 'u-de-l-appareil', validatedAt: 1 } as never);
    const backup = JSON.parse(await (await exportBackup()).text());
    delete backup.data.unitProgress;
    delete backup.data.kcEvidence;
    backup.data.attempts = [
      { exerciseId: 'a2-ps-1-01', at: Date.parse('2026-09-27T10:00:00'), durationMs: 3000, score: 1, verdict: 'correct', response: '{}', kcIds: ['tense.present_simple.third_person_s'], context: 'lesson' },
    ];
    await importBackup(file(backup));
    expect(await db.unitProgress.count()).toBe(0);
    // Maîtrise reconstruite depuis l'historique importé
    expect((await db.kcEvidence.get('tense.present_simple.third_person_s'))?.levels.recognition?.n).toBe(1);
  });

  it('ne touche à rien si le fichier est invalide', async () => {
    await db.lessonProgress.put({ lessonId: 'garde-moi', status: 'completed', bestScore: 1, completions: 1, lastAt: 1 });
    await expect(importBackup(file({ app: 'cadence', data: { settings: [], attempts: 'pas un tableau' } }))).rejects.toThrow();
    await expect(importBackup(file({ app: 'autre' }))).rejects.toThrow();
    expect(await db.lessonProgress.get('garde-moi')).toBeDefined();
    expect(await learningDbOf('en').lessonProgress.count()).toBeGreaterThan(0);
  });
});
