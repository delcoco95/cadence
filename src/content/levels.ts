import type { LevelModule } from './level';
import { B1 } from './b1';
import { B2 } from './b2';
import { C1 } from './c1';
import { C2 } from './c2';

/** Niveaux au-delà de A2, dans l'ordre du parcours. */
export const LEVELS: LevelModule[] = [B1, B2, C1, C2];
