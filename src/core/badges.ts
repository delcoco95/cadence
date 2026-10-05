/** Badges : objectifs à long terme calculés à partir des statistiques, sans stockage propre. */

export interface BadgeInput {
  lessonsDone: number;
  bestStreak: number;
  wordsActive: number;
  verbsLearned: number;
  mastered: number;
  totalSeconds: number;
  totalXp: number;
}

export type BadgeIcon = 'book' | 'flame' | 'letter' | 'brain' | 'clock' | 'bolt' | 'crown' | 'star';

export interface BadgeDef {
  id: string;
  title: string;
  hint: string;
  icon: BadgeIcon;
  tone: string;
  target: number;
  value: (s: BadgeInput) => number;
}

export const BADGES: BadgeDef[] = [
  { id: 'first-lesson', title: 'Premier pas', hint: '1 leçon', icon: 'star', tone: 'tone-primary', target: 1, value: (s) => s.lessonsDone },
  { id: 'streak-3', title: 'Sur la lancée', hint: '3 jours de série', icon: 'flame', tone: 'tone-flame', target: 3, value: (s) => s.bestStreak },
  { id: 'streak-7', title: 'Une semaine', hint: '7 jours de série', icon: 'flame', tone: 'tone-flame', target: 7, value: (s) => s.bestStreak },
  { id: 'words-50', title: 'Collectionneur', hint: '50 mots actifs', icon: 'book', tone: 'tone-pink', target: 50, value: (s) => s.wordsActive },
  { id: 'verbs-20', title: 'Irrégulier', hint: '20 verbes retenus', icon: 'letter', tone: 'tone-teal', target: 20, value: (s) => s.verbsLearned },
  { id: 'mastered-5', title: 'Maîtrise', hint: '5 notions maîtrisées', icon: 'brain', tone: 'tone-success', target: 5, value: (s) => s.mastered },
  { id: 'hour-1', title: 'Une heure', hint: '1 h de pratique', icon: 'clock', tone: 'tone-sky', target: 3600, value: (s) => s.totalSeconds },
  { id: 'xp-1000', title: 'Mille éclairs', hint: '1 000 XP', icon: 'bolt', tone: 'tone-sun', target: 1000, value: (s) => s.totalXp },
  { id: 'streak-30', title: 'Inarrêtable', hint: '30 jours de série', icon: 'crown', tone: 'tone-sun', target: 30, value: (s) => s.bestStreak },
];

export function badgeProgress(def: BadgeDef, s: BadgeInput): { unlocked: boolean; ratio: number } {
  const ratio = Math.min(1, def.value(s) / def.target);
  return { unlocked: ratio >= 1, ratio };
}
