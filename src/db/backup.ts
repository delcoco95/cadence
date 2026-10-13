import { LEARNING_TABLES, learningDbOf, sharedDb } from './db';
import type { Lang } from '../content/types';

/**
 * Sauvegarde JSON. `data` garde le format d'origine (tables communes + progression en anglais) ;
 * `languages` ajoute la progression des autres langues (version 2).
 */

// kcMastery a été remplacée par kcEvidence (v3) : l'exporter faisait échouer la sauvegarde.
const MAIN_TABLES = ['settings', 'dailyActivity', ...LEARNING_TABLES] as const;
const OTHER_LANGS: Lang[] = ['it', 'es'];

export async function exportBackup(): Promise<Blob> {
  const data: Record<string, unknown[]> = {};
  for (const t of MAIN_TABLES) data[t] = await sharedDb.table(t).toArray();
  const languages: Record<string, Record<string, unknown[]>> = {};
  for (const lang of OTHER_LANGS) {
    const ldb = learningDbOf(lang);
    languages[lang] = {};
    for (const t of LEARNING_TABLES) languages[lang][t] = await ldb.table(t).toArray();
  }
  const payload = { app: 'cadence', version: 2, exportedAt: new Date().toISOString(), data, languages };
  return new Blob([JSON.stringify(payload)], { type: 'application/json' });
}

export async function importBackup(file: File): Promise<void> {
  const payload = JSON.parse(await file.text());
  if (payload?.app !== 'cadence' || typeof payload.data !== 'object') throw new Error('Fichier de sauvegarde invalide');
  await sharedDb.transaction('rw', MAIN_TABLES.map((t) => sharedDb.table(t)), async () => {
    for (const t of MAIN_TABLES) {
      const rows = payload.data[t];
      if (!Array.isArray(rows)) continue;
      await sharedDb.table(t).clear();
      await sharedDb.table(t).bulkPut(rows);
    }
  });
  // Une sauvegarde d'avant les langues ne contient que l'anglais : les autres langues repartent de zéro.
  for (const lang of OTHER_LANGS) {
    const ldb = learningDbOf(lang);
    const tables = payload.languages?.[lang] ?? {};
    await ldb.transaction('rw', LEARNING_TABLES.map((t) => ldb.table(t)), async () => {
      for (const t of LEARNING_TABLES) {
        await ldb.table(t).clear();
        if (Array.isArray(tables[t])) await ldb.table(t).bulkPut(tables[t]);
      }
    });
  }
}
