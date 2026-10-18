import { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

/**
 * Mise à jour de l'app sans interrompre une leçon : la nouvelle version s'installe et prend la main en
 * arrière-plan (sans rechargement), puis l'accueil propose de recharger pour l'afficher.
 */
let needRefresh = false;
const listeners = new Set<(v: boolean) => void>();
let apply: (reload?: boolean) => Promise<void> = async () => undefined;

export function startUpdates(): void {
  // Nouvelle version active en arrière-plan (skipWaiting) : on le signale, le rechargement reste au choix.
  const hadController = !!navigator.serviceWorker?.controller;
  navigator.serviceWorker?.addEventListener('controllerchange', () => {
    if (!hadController) return; // première installation : rien à recharger
    needRefresh = true;
    apply = async () => window.location.reload();
    listeners.forEach((l) => l(true));
  });
  // Un fichier de l'ancienne version introuvable (chargement différé après une mise à jour) : on recharge.
  window.addEventListener('vite:preloadError', () => window.location.reload());
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
