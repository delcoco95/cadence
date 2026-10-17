import { afterAll, describe, expect, it } from 'vitest';
import { activateCourse, loadCourse } from '../index';
import { loadScenes } from './index';
import { mainPath, matchIntent, sceneProblems } from '../../core/scene';
import type { Lang } from '../types';

/** Noms et marques de concurrents à ne jamais reprendre (personnages, fonctionnalités). */
const FORBIDDEN_NAMES = ['duo', 'lily', 'zari', 'oscar', 'eddy', 'lin', 'falstaff', 'bea', 'junior', 'vikram', 'membot'];

describe.each(['en', 'it', 'es'] as Lang[])('scènes (%s)', (lang) => {
  it('sont cohérentes, rattachées à de vraies notions, et jouables jusqu’au bout', async () => {
    const [course, scenes] = await Promise.all([loadCourse(lang), loadScenes(lang)]);
    // La normalisation des mots dépend de la langue active (accents, nombres).
    activateCourse(course);
    const kcs = new Set(course.kcs.map((k) => k.id));
    expect(scenes.length).toBeGreaterThanOrEqual(4);
    expect(new Set(scenes.map((s) => s.id)).size).toBe(scenes.length);
    for (const s of scenes) {
      expect(s.lang, s.id).toBe(lang);
      expect(course.levels, s.id).toContain(s.cefr);
      for (const kc of s.kcIds) expect(kcs.has(kc), `${s.id} : notion inexistante ${kc}`).toBe(true);
      expect(sceneProblems(s), s.id).toEqual([]);
      expect(Object.keys(s.turns).length, s.id).toBeGreaterThanOrEqual(3);
      expect(s.phrases.length, s.id).toBeGreaterThanOrEqual(3);
      expect(FORBIDDEN_NAMES, `${s.id} : nom de personnage réservé`).not.toContain(s.character.name.toLowerCase());
      // Le chemin principal, joué avec les réponses modèles, mène à la fin.
      const path = mainPath(s);
      const last = s.turns[path[path.length - 1]];
      expect(last.expect.some((i) => i.next === 'end') || path.length > 0, s.id).toBe(true);
    }
  });
});

afterAll(async () => activateCourse(await loadCourse('en')));

describe('reconnaissance d’intention', () => {
  it('accepte plusieurs formulations et tolère les petites erreurs de reconnaissance', async () => {
    activateCourse(await loadCourse('en'));
    const [scene] = await loadScenes('en');
    const first = scene.turns[scene.start];
    expect(matchIntent(first, first.model).intent).not.toBeNull();
    expect(matchIntent(first, 'banana').intent).toBeNull();
  });
});
