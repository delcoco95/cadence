import { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

/**
 * Mise à jour de l'app sans interrompre une leçon : la nouvelle version est téléchargée en arrière-plan,
 * puis proposée sur l'accueil. Elle n'est appliquée (rechargement) que sur demande.
 */
let needRefresh = false;
const listeners = new Set<(v: boolean) => void>();
let apply: (reload?: boolean) => Promise<void> = async () => undefined;

export function startUpdates(): void {
  apply = registerSW({
    immediate: true,
    onNeedRefresh() {
      needRefresh = true;
      listeners.forEach((l) => l(true));
    },
    onRegisteredSW(_url, registration) {
      // iOS garde la PWA ouverte des jours : on vérifie les mises à jour à chaque retour dans l'app.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') void registration?.update();
      });
    },
  });
}

export function applyUpdate(): void {
  void apply(true);
}

/** true quand une nouvelle version est prête à être appliquée. */
export function useUpdateAvailable(): boolean {
  const [ready, setReady] = useState(needRefresh);
  useEffect(() => {
    listeners.add(setReady);
    return () => {
      listeners.delete(setReady);
    };
  }, []);
  return ready;
}
