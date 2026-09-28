import type { Exercise } from '../content/types';

/**
 * Niveau de preuve apporté par un exercice : reconnaître une bonne réponse ne prouve
 * pas qu'on sait la produire. La maîtrise dépend surtout des niveaux élevés.
 */
export type Evidence = 'recognition' | 'recall' | 'production' | 'free' | 'transfer';

export const EVIDENCE_LEVELS: Evidence[] = ['recognition', 'recall', 'production', 'free', 'transfer'];

export const EVIDENCE_LABELS: Record<Evidence, string> = {
  recognition: 'Reconnaissance',
  recall: 'Rappel',
  production: 'Production guidée',
  free: 'Production libre',
  transfer: 'Transfert',
};

/** Niveau de preuve d'un exercice : explicite dans le contenu, sinon déduit du type. */
export function evidenceOf(ex: Exercise): Evidence {
  if (ex.evidence) return ex.evidence;
  switch (ex.type) {
    case 'mcq':
    case 'listen_mcq':
      return 'recognition';
    case 'cloze':
    case 'type_answer':
    case 'word_bank':
    case 'dictation':
      return 'recall';
    case 'translate':
      return 'production';
    case 'speak':
      // Répéter une phrase prouve l'intelligibilité, pas la maîtrise de la structure.
      return ex.mode === 'repeat' ? 'recognition' : ex.mode === 'translate' ? 'production' : 'free';
  }
}

export const isProductive = (e: Evidence) => e === 'production' || e === 'free' || e === 'transfer';
