import { db } from './db';

// kcMastery a été remplacée par kcEvidence (v3) : l'exporter faisait échouer la sauvegarde.
const TABLES = [
  'settings', 'dailyActivity', 'attempts', 'lessonProgress', 'srsCards', 'kcEvidence', 'errorEvents', 'unitProgress', 'assessments',
] as const;

export async function exportBackup(): Promise<Blob> {
  const data: Record<string, unknown[]> = {};
  for (const t of TABLES) data[t] = await db.table(t).toArray();
  const payload = { app: 'cadence', version: 1, exportedAt: new Date().toISOString(), data };
  return new Blob([JSON.stringify(payload)], { type: 'application/json' });
}

export async function importBackup(file: File): Promise<void> {
  const payload = JSON.parse(await file.text());
  if (payload?.app !== 'cadence' || typeof payload.data !== 'object') throw new Error('Fichier de sauvegarde invalide');
  await db.transaction('rw', TABLES.map((t) => db.table(t)), async () => {
    for (const t of TABLES) {
      const rows = payload.data[t];
      if (!Array.isArray(rows)) continue;
      await db.table(t).clear();
      await db.table(t).bulkPut(rows);
    }
  });
}
