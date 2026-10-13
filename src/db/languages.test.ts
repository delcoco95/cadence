import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { db, getSettings, learningDbOf, setLearningLanguage, sharedDb, startCourse, updateSettings } from './db';

beforeEach(async () => {
  setLearningLanguage('en');
  await sharedDb.settings.clear();
  for (const lang of ['en', 'it', 'es'] as const) await learningDbOf(lang).lessonProgress.clear();
});

describe('réglages par langue', () => {
  it('reprend le niveau d’avant les langues comme niveau d’anglais', async () => {
    await sharedDb.settings.put({ id: 'me', onboarded: true, startLevel: 'B1', estimatedBand: 'B1+', createdAt: 1 } as never);
    const s = await getSettings();
    expect(s.language).toBe('en');
    expect(s.courses.en).toMatchObject({ startLevel: 'B1', estimatedBand: 'B1+' });
    expect(s.startLevel).toBe('B1');
  });

  it('enregistre le niveau dans le cours de la langue active, sans toucher aux autres', async () => {
    await updateSettings({ onboarded: true, startLevel: 'B2' });
    await updateSettings({ language: 'it' });
    let s = await getSettings();
    expect(s.courses.it).toBeUndefined();
    expect(s.startLevel).toBe('A1');
    await startCourse('it');
    await updateSettings({ estimatedBand: 'A2' });
    s = await getSettings();
    expect(s.courses.it).toMatchObject({ startLevel: 'A1', estimatedBand: 'A2' });
    expect(s.courses.en?.startLevel).toBe('B2');
    await updateSettings({ language: 'en' });
    expect((await getSettings()).startLevel).toBe('B2');
  });
});

describe('progression séparée par langue', () => {
  it('écrit dans la base de la langue active', async () => {
    await db.lessonProgress.put({ lessonId: 'a2-ps-1', status: 'completed', bestScore: 1, completions: 1, lastAt: 1 });
    setLearningLanguage('it');
    expect(await db.lessonProgress.count()).toBe(0);
    await db.lessonProgress.put({ lessonId: 'it-a1-hello-1', status: 'completed', bestScore: 1, completions: 1, lastAt: 1 });
    await db.transaction('rw', db.lessonProgress, async () => {
      await db.lessonProgress.put({ lessonId: 'it-a1-hello-2', status: 'started', bestScore: 0, completions: 0, lastAt: 1 });
    });
    expect(await learningDbOf('it').lessonProgress.count()).toBe(2);
    expect(await learningDbOf('en').lessonProgress.count()).toBe(1);
    expect(await learningDbOf('es').lessonProgress.count()).toBe(0);
  });

  it('garde les tables communes partagées', async () => {
    setLearningLanguage('es');
    expect(db.settings).toBe(sharedDb.settings);
    expect(db.dailyActivity).toBe(sharedDb.dailyActivity);
  });
});
