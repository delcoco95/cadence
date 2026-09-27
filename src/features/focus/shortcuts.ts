/** Lance un raccourci iOS par son nom (ouvre l'app Raccourcis). */
export function runShortcut(name: string): void {
  window.location.href = `shortcuts://run-shortcut?name=${encodeURIComponent(name)}`;
}

export const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
