import { LEARNING_TABLES, learningDbOf, sharedDb, type Attempt } from './db';
import type { Lang } from '../content/types';
import { replayAttempts } from './replay';
import { activeLang } from '../core/lang';

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

type Rows = Record<string, unknown[]>;

/** Vérifie tout le fichier AVANT d'écrire quoi que ce soit : une sauvegarde invalide ne doit rien effacer. */
function parsePayload(text: string): { data: Rows; languages: Record<string, Rows> } {
  let payload: { app?: unknown; data?: unknown; languages?: unknown };
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error('Fichier de sauvegarde illisible');
  }
  if (payload?.app !== 'cadence' || !payload.data || typeof payload.data !== 'object') throw new Error('Fichier de sauvegarde invalide');
  const data = payload.data as Rows;
  for (const [t, rows] of Object.entries(data)) if (!Array.isArray(rows)) throw new Error(`Table « ${t} » invalide dans la sauvegarde`);
  if (!Array.isArray(data.settings) || data.settings.length === 0) throw new Error('Sauvegarde sans réglages : fichier incomplet');
  const languages = (payload.languages && typeof payload.languages === 'object' ? payload.languages : {}) as Record<string, Rows>;
  for (const tables of Object.values(languages))
    for (const [t, rows] of Object.entries(tables ?? {})) if (!Array.isArray(rows)) throw new Error(`Table « ${t} » invalide dans la sauvegarde`);
  return { data, languages };
}

/**
 * Tables dérivées (maîtrise, erreurs) absentes d'une ancienne sauvegarde : on les reconstruit depuis l'historique
 * des réponses, au lieu de garder celles de l'appareil (mélange de deux progressions).
 * La reconstruction a besoin du cours de la langue : elle n'est faite que pour la langue active.
 */
function withDerived(tables: Rows, lang: Lang): Rows {
  const out = { ...tables };
  const attempts = (tables.attempts ?? []) as Attempt[];
  if (attempts.length && (!tables.kcEvidence || !tables.errorEvents) && lang === activeLang()) {
    const { masteries, errors } = replayAttempts(attempts);
    out.kcEvidence ??= masteries;
    out.errorEvents ??= errors;
  }
  return out;
}

export async function importBackup(file: File): Promise<void> {
  const { data, languages } = parsePayload(await file.text());
  const main = withDerived(data, 'en');
  // Chaque table est vidée, même si la sauvegarde ne la contient pas : « remplacer toutes tes données ».
  await sharedDb.transaction('rw', MAIN_TABLES.map((t) => sharedDb.table(t)), async () => {
    for (const t of MAIN_TABLES) {
      await sharedDb.table(t).clear();
      const rows = main[t];
      if (rows?.length) await sharedDb.table(t).bulkPut(rows);
    }
  });
  // Une sauvegarde d'avant les langues ne contient que l'anglais : les autres langues repartent de zéro.
  for (const lang of OTHER_LANGS) {
    const ldb = learningDbOf(lang);
    const tables = withDerived(languages[lang] ?? {}, lang);
    await ldb.transaction('rw', LEARNING_TABLES.map((t) => ldb.table(t)), async () => {
      for (const t of LEARNING_TABLES) {
        await ldb.table(t).clear();
        if (Array.isArray(tables[t])) await ldb.table(t).bulkPut(tables[t]);
      }
    });
  }
}
