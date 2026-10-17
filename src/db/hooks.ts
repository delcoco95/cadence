import { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, getSettings, type Settings } from './db';
import { dayKey } from '../core/dates';

/** Réglages réactifs ; `undefined` pendant le premier chargement. */
export function useSettings(): Settings | undefined {
  return useLiveQuery(() => getSettings());
}

/**
 * Jour courant (AAAA-MM-JJ) qui change vraiment à minuit, même si l'app reste ouverte ou suspendue la nuit :
 * les requêtes qui en dépendent (objectif, série, déblocage) le passent en dépendance pour se relancer.
 */
export function useDayKey(): string {
  const [day, setDay] = useState(dayKey);
  useEffect(() => {
    const refresh = () => setDay(dayKey());
    const nextMidnight = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      return midnight.getTime() - now.getTime();
    };
    let timer = window.setTimeout(function tick() {
      refresh();
      timer = window.setTimeout(tick, nextMidnight());
    }, nextMidnight());
    // Au retour d'une mise en veille (iOS suspend les minuteurs), on relit la date.
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('focus', refresh);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('focus', refresh);
    };
  }, []);
  return day;
}

export function useToday() {
  const day = useDayKey();
  return useLiveQuery(() => db.dailyActivity.get(day), [day]);
}
