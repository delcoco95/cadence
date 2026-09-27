/**
 * Compte le temps d'apprentissage réellement actif : la page doit être visible
 * et l'utilisateur doit avoir interagi il y a moins de `idleMs`.
 * Horloge injectable pour les tests.
 */
export class ActiveTimeTracker {
  private lastTick: number;
  private lastInteraction: number;
  private visible = true;
  private accumulatedMs = 0;

  constructor(
    private readonly now: () => number = () => Date.now(),
    private readonly idleMs = 60_000,
  ) {
    this.lastTick = now();
    this.lastInteraction = this.lastTick;
  }

  /** À appeler à chaque interaction (tap, frappe, lecture audio…). */
  interact(): void {
    this.tick();
    this.lastInteraction = this.now();
  }

  setVisible(visible: boolean): void {
    this.tick();
    this.visible = visible;
    if (visible) this.lastInteraction = this.now();
  }

  /** Avance l'horloge et comptabilise le temps actif écoulé depuis le dernier tick. */
  tick(): void {
    const t = this.now();
    if (this.visible) {
      const activeUntil = Math.min(t, this.lastInteraction + this.idleMs);
      if (activeUntil > this.lastTick) this.accumulatedMs += activeUntil - this.lastTick;
    }
    this.lastTick = t;
  }

  /** Retire et renvoie le temps actif accumulé (pour l'enregistrer en base). */
  drainMs(): number {
    this.tick();
    const ms = this.accumulatedMs;
    this.accumulatedMs = 0;
    return ms;
  }
}
