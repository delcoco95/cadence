import { useEffect, useRef } from 'react';
import { ActiveTimeTracker } from '../../core/activeTime';
import { addActivity } from '../../db/activity';

/**
 * Compte le temps actif pendant que le composant est monté et l'enregistre
 * toutes les 5 s. `onGoalMet` est appelé quand l'objectif du jour vient d'être atteint.
 */
export function useActiveTime(onGoalMet?: () => void) {
  const trackerRef = useRef<ActiveTimeTracker | null>(null);
  const carryMs = useRef(0);
  const goalCb = useRef(onGoalMet);
  goalCb.current = onGoalMet;

  useEffect(() => {
    const tracker = new ActiveTimeTracker();
    trackerRef.current = tracker;
    const interact = () => tracker.interact();
    const onVisibility = () => {
      tracker.setVisible(document.visibilityState === 'visible');
      if (document.visibilityState === 'hidden') void flush();
    };

    async function flush() {
      const total = carryMs.current + tracker.drainMs();
      const seconds = Math.floor(total / 1000);
      carryMs.current = total - seconds * 1000;
      if (seconds > 0 && (await addActivity(seconds))) goalCb.current?.();
    }

    window.addEventListener('pointerdown', interact);
    window.addEventListener('keydown', interact);
    document.addEventListener('visibilitychange', onVisibility);
    const id = window.setInterval(() => void flush(), 5000);
    return () => {
      window.removeEventListener('pointerdown', interact);
      window.removeEventListener('keydown', interact);
      document.removeEventListener('visibilitychange', onVisibility);
      window.clearInterval(id);
      void flush();
    };
  }, []);

  /** Pour signaler une activité non tactile (lecture audio, etc.). */
  return () => trackerRef.current?.interact();
}
