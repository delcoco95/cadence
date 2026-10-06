import { useCallback } from 'react';
import { genderize, pick, type Gender } from '../core/gender';
import { useSettings } from '../db/hooks';
import type { Motivation } from '../db/db';

export interface ProfileText {
  gender: Gender;
  name: string;
  /** Choisit la forme accordée : g('prêt', 'prête') */
  g: (m: string, f: string, n?: string) => string;
  /** Résout les {m|f} d'un texte */
  t: (text: string) => string;
}

export function useProfileText(): ProfileText {
  const settings = useSettings();
  const gender = settings?.gender ?? 'n';
  const g = useCallback((m: string, f: string, n?: string) => pick(gender, m, f, n), [gender]);
  const t = useCallback((text: string) => genderize(text, gender), [gender]);
  return { gender, name: settings?.firstName.trim() ?? '', g, t };
}

/** Variation déterministe dans une liste (même phrase pendant tout un rendu). */
export function vary<T>(list: T[], seed: number): T {
  return list[Math.abs(seed) % list.length];
}

const withName = (name: string, sep = ' ') => (name ? `${sep}${name}` : '');

/* ───────── Encouragements après une réponse ───────── */

export function praise(p: ProfileText, seed: number): string {
  return vary(
    [
      'Excellent !',
      'Bravo !',
      'Parfait !',
      `Bien joué${withName(p.name)} !`,
      'Super !',
      'Exactement !',
      'Tu gères !',
      p.t('Trop {fort|forte|fort·e} !'),
      'Nickel !',
      'Impeccable !',
    ],
    seed,
  );
}

export function nudge(seed: number): string {
  return vary(
    [
      'Pas tout à fait…',
      'Presque !',
      'On y est presque.',
      'Ce n’est pas grave, on recommence.',
      'Bonne tentative !',
      'Une erreur, c’est un pas en avant.',
    ],
    seed,
  );
}

export function comboText(n: number): string {
  if (n >= 15) return `${n} d’affilée, inarrêtable !`;
  if (n >= 10) return `${n} d’affilée, en feu !`;
  if (n >= 5) return `${n} bonnes réponses d’affilée !`;
  return `${n} d’affilée !`;
}

/* ───────── Accueil ───────── */

export function hello(p: ProfileText, hour: number): string {
  const name = withName(p.name);
  if (hour < 5) return `Encore debout${name} ? Une petite leçon ?`;
  if (hour < 12) return `Good morning${name}!`;
  if (hour < 18) return `Hello${name}!`;
  return `Good evening${name}!`;
}

export function homeLine(p: ProfileText, state: { goalMet: boolean; started: boolean; streak: number }, seed: number): string {
  if (state.goalMet) {
    return vary(
      [
        p.t('Objectif atteint ! Je suis {fier|fière|fier·e} de toi… enfin, de nous deux.'),
        'Objectif du jour bouclé. Chaque minute en plus, c’est du bonus.',
        p.t('Tu as fait ta part aujourd’hui. {Content|Contente|Content·e} ?'),
      ],
      seed,
    );
  }
  if (state.started) return 'On continue ? Tu es sur la bonne voie.';
  if (state.streak >= 2) return `Série de ${state.streak} jours ! Ne la laisse pas filer.`;
  return vary(
    [
      p.t('{Prêt|Prête|Prêt·e} pour quelques minutes d’anglais ?'),
      'Un peu chaque jour, c’est comme ça qu’on progresse.',
      'Let’s go ! Ta leçon t’attend.',
    ],
    seed,
  );
}

export const MAX_MOTIVATIONS = 3;

export const MOTIVATIONS: Record<Motivation, { label: string; line: string }> = {
  travel: { label: 'Voyager', line: 'pour voyager sans stress' },
  work: { label: 'Mon travail', line: 'pour être à l’aise au travail' },
  studies: { label: 'Mes études', line: 'pour réussir tes études' },
  culture: { label: 'Films, séries, musique', line: 'pour profiter des films et séries en VO' },
  people: { label: 'Parler avec des gens', line: 'pour discuter avec le monde entier' },
  brain: { label: 'Entraîner mon cerveau', line: 'pour garder un esprit vif' },
};

/* ───────── Fin de séance ───────── */

export function summaryTitle(p: ProfileText, pct: number, empty?: boolean): string {
  if (empty) return 'Séance terminée !';
  if (pct >= 95) return p.t('Sans faute ! Tu es {un champion|une championne|imbattable} !');
  if (pct >= 80) return `Excellent travail${withName(p.name, ', ')} !`;
  if (pct >= 60) return 'Bien joué !';
  return 'Leçon terminée !';
}

export function summaryLine(p: ProfileText, pct: number): string {
  if (pct >= 80) return 'Tu progresses vraiment. Continue comme ça !';
  if (pct >= 60) return 'Bon rythme. Tes erreurs reviendront bientôt, sous une autre forme.';
  return p.t('C’était difficile, mais tu as tenu bon : je te prépare des révisions sur mesure. Ne lâche rien, tu es sur la bonne voie.');
}
