import { useLiveQuery } from 'dexie-react-hooks';
import { db, getSettings, type Settings } from './db';
import { dayKey } from '../core/dates';

/** Réglages réactifs ; `undefined` pendant le premier chargement. */
export function useSettings(): Settings | undefined {
  return useLiveQuery(() => getSettings());
}

export function useToday() {
  return useLiveQuery(() => db.dailyActivity.get(dayKey()));
}
