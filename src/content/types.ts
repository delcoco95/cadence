export type Cefr = 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export const CEFR_LEVELS: Cefr[] = ['A2', 'B1', 'B2', 'C1', 'C2'];

/** Bandes intermédiaires pour une progression plus fine que les 5 niveaux du CECRL. */
export type CefrBand = 'A2' | 'A2+' | 'B1' | 'B1+' | 'B2' | 'B2+' | 'C1' | 'C2';
export const CEFR_BANDS: CefrBand[] = ['A2', 'A2+', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];

export type Skill = 'grammar' | 'vocabulary' | 'listening' | 'reading' | 'writing' | 'speaking';

/** Catégories d'erreurs, détectées automatiquement ou prévues par le contenu. */
export type ErrorTag =
  | 'third_person_s'
  | 'missing_auxiliary'
  | 'auxiliary_with_inflected_verb'
  | 'wrong_auxiliary'
  | 'wrong_tense'
  | 'irregular_form'
  | 'regularized_irregular'
  | 'article_missing'
  | 'article_wrong'
  | 'wrong_preposition'
  | 'word_order'
  | 'plural_form'
  | 'countable_uncountable'
  | 'modal_to'
  | 'wrong_pronoun'
  | 'spelling'
  | 'vocabulary_missing'
  | 'listening_misunderstanding'
  | 'pronunciation_intelligibility'
  | 'insufficient_answer'
  | 'wrong_choice';

/** Piège prévu par l'auteur : si la réponse normalisée contient `match`, on étiquette l'erreur. */
export interface ErrorPattern {
  match: string;
  tag: ErrorTag;
  feedback?: string;
}

interface ExerciseBase {
  /** Niveau de preuve ; déduit du type si absent (voir core/evidence.ts) */
  evidence?: 'recognition' | 'recall' | 'production' | 'free' | 'transfer';
  /** practice (leçons, révisions) ou assessment (jamais vu en pratique : checkpoints, examens) */
  role?: 'practice' | 'assessment';
  /** Variantes équivalentes d'un même item (repêchage sans répétition à l'identique) */
  familyId?: string;
  errorPatterns?: ErrorPattern[];
  id: string;
  cefr: Cefr;
  skill: Skill;
  /** Notions travaillées, ex. 'tense.present_simple.third_person_s' */
  kcIds: string[];
  themeIds?: string[];
  /** Échelle logit ≈ -3 (très facile) … +3 (très difficile) */
  difficulty: number;
  tense?: string;
  /** Consigne affichée au-dessus de l'exercice */
  instruction: string;
  /** Explication montrée après la réponse (FR) */
  explanation: string;
  /** Phrase anglaise lisible par la synthèse vocale */
  speak?: string;
  vocab?: string[];
}

export interface McqExercise extends ExerciseBase {
  type: 'mcq';
  question: string;
  options: string[];
  /** Index de la bonne option */
  answer: number;
}

export interface TypeAnswerExercise extends ExerciseBase {
  type: 'type_answer';
  question: string;
  accepted: string[];
  /** Pas de tolérance aux fautes de frappe (conjugaison) */
  strict?: boolean;
}

export interface ClozeExercise extends ExerciseBase {
  type: 'cloze';
  /** Utiliser ___ pour le trou */
  sentence: string;
  hint?: string;
  accepted: string[];
  strict?: boolean;
}

export interface WordBankExercise extends ExerciseBase {
  type: 'word_bank';
  /** Traduction ou sens à reconstituer */
  question: string;
  /** Mots de la phrase correcte, dans l'ordre */
  tokens: string[];
  distractors?: string[];
  /** Autres ordres corrects (phrases complètes) */
  alternatives?: string[];
}

export interface TranslateExercise extends ExerciseBase {
  type: 'translate';
  direction: 'fr_en' | 'en_fr';
  source: string;
  accepted: string[];
}

/** Écouter (synthèse vocale) puis choisir. Le texte audio n'est pas affiché avant la réponse. */
export interface ListenMcqExercise extends ExerciseBase {
  type: 'listen_mcq';
  audio: string;
  question: string;
  options: string[];
  answer: number;
}

/** Écouter puis écrire ce qui a été entendu. */
export interface DictationExercise extends ExerciseBase {
  type: 'dictation';
  audio: string;
  accepted: string[];
}

/**
 * Parler dans le micro.
 * - repeat : répéter la phrase affichée (et écoutée) ;
 * - translate : dire en anglais la phrase française ;
 * - answer : répondre librement à une question (longueur + mots-clés, exemple de réponse).
 */
export interface SpeakExercise extends ExerciseBase {
  type: 'speak';
  mode: 'repeat' | 'translate' | 'answer';
  prompt: string;
  accepted?: string[];
  sample?: string;
  minWords?: number;
  /** Groupes de mots dont au moins un doit apparaître, ex. [['usually', 'often', 'always']] */
  keywords?: string[][];
}

export type Exercise =
  | McqExercise
  | TypeAnswerExercise
  | ClozeExercise
  | WordBankExercise
  | TranslateExercise
  | ListenMcqExercise
  | DictationExercise
  | SpeakExercise;
export type ExerciseType = Exercise['type'];

export interface VocabEntry {
  id: string;
  en: string;
  fr: string;
  cefr: Cefr;
  theme: string;
  pos?: string;
  example?: string;
  exampleFr?: string;
}

export interface IrregularVerb {
  id: string;
  base: string;
  past: string;
  participle: string;
  fr: string;
  cefr: Cefr;
}

export interface ExplanationSection {
  title: string;
  body?: string;
  /** Tableau de structure, ex. [['I / you / we / they', 'work'], ['he / she / it', 'works']] */
  table?: string[][];
  examples?: { en: string; fr: string }[];
  tip?: string;
}

export interface Lesson {
  id: string;
  cefr: Cefr;
  unitId: string;
  title: string;
  subtitle: string;
  kcIds: string[];
  estMinutes: number;
  explanation: ExplanationSection[];
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  cefr: Cefr;
  title: string;
  description: string;
  lessonIds: string[];
  /** Objectifs « Je peux… » (Can Do) */
  canDo?: string[];
}
