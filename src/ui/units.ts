import type { CSSProperties } from 'react';
import { UNITS } from '../content';

const PALETTE = ['primary', 'sky', 'success', 'pink', 'sun', 'teal'] as const;
export type UnitTone = (typeof PALETTE)[number];

export function unitTone(unitId: string): UnitTone {
  const i = UNITS.findIndex((u) => u.id === unitId);
  return PALETTE[(i < 0 ? 0 : i) % PALETTE.length];
}

/** Variables CSS d'une unité : couleur, ombre 3D, fond doux. */
export function unitStyle(unitId: string): CSSProperties {
  const t = unitTone(unitId);
  return { '--unit': `var(--${t})`, '--unit-dark': `var(--${t}-dark)`, '--unit-soft': `var(--${t}-soft)` } as CSSProperties;
}

export function unitOfLesson(lessonId: string) {
  return UNITS.find((u) => u.lessonIds.includes(lessonId));
}
