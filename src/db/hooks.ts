import { useLiveQuery } from 'dexie-react-hooks';
import { db, DEFAULT_SETTINGS, type Settings } from './db';
import { dayKey } from '../core/dates';

/** Réglages réactifs ; `undefined` pendant le premier chargement. */
export function useSettings(): Settings | undefined {
  return useLiveQuery(async () => (await db.settings.get('me')) ?? DEFAULT_SETTINGS);
}

export function useToday() {
  return useLiveQuery(() => db.dailyActivity.get(dayKey()));
}
