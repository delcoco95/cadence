import type { Exercise, IrregularVerb, Lesson, Unit, VocabEntry } from './types';
import type { KnowledgeComponent } from './kcs';
import { CEFR_BANDS } from './types';
import { gradeExercise, type ExerciseResponse } from '../core/exercise';
import { evidenceOf, isProductive } from '../core/evidence';
import { normalize } from '../core/grading';

/**
 * Validateur pédagogique du contenu. Erreur = contenu cassé (à corriger avant de publier) ;
 * avertissement = contenu à relire (ambiguïté, couverture pédagogique insuffisante…).
 */
export interface Issue {
  level: 'error' | 'warning';
  where: string;
  message: string;
}

export interface ContentBundle {
  lessons: Lesson[];
  units: Unit[];
  kcs: KnowledgeComponent[];
  vocab: VocabEntry[];
  irregulars: IrregularVerb[];
  path: string[];
}

export interface Report {
  issues: Issue[];
  exercises: number;
  /** Exercices sans erreur ni avertissement */
  validExercises: number;
}

/** Réponse de référence d'un exercice, qui doit être acceptée par le correcteur. */
export function referenceResponse(e: Exercise): ExerciseResponse | undefined {
  switch (e.type) {
    case 'mcq':
    case 'listen_mcq':
      return { kind: 'choice', index: e.answer };
    case 'word_bank':
      return { kind: 'tokens', tokens: e.tokens };
    case 'speak': {
      const ref = e.mode === 'answer' ? e.sample : e.mode === 'repeat' ? e.prompt : e.accepted?.[0];
      return ref ? { kind: 'speech', transcript: ref } : undefined;
    }
    default:
      return { kind: 'text', value: e.accepted[0] ?? '' };
  }
}

function findCycle(kcs: KnowledgeComponent[]): string[] | null {
  const byId = new Map(kcs.map((k) => [k.id, k]));
  const state = new Map<string, 'visiting' | 'done'>();
  const stack: string[] = [];
  const visit = (id: string): string[] | null => {
    if (state.get(id) === 'done') return null;
    if (state.get(id) === 'visiting') return [...stack.slice(stack.indexOf(id)), id];
    state.set(id, 'visiting');
    stack.push(id);
    for (const p of byId.get(id)?.prerequisites ?? []) {
      const c = visit(p);
      if (c) return c;
    }
    stack.pop();
    state.set(id, 'done');
    return null;
  };
  for (const k of kcs) {
    const c = visit(k.id);
    if (c) return c;
  }
  return null;
}

/** Notions alimentées par des exercices générés (pas besoin d'items écrits à la main). */
const GENERATED_KCS = (id: string) => id.startsWith('vocab.') || id === 'verbs.irregular';

export function validateContent(c: ContentBundle): Report {
  const issues: Issue[] = [];
  const err = (where: string, message: string) => issues.push({ level: 'error', where, message });
  const warn = (where: string, message: string) => issues.push({ level: 'warning', where, message });
  const kcIds = new Set(c.kcs.map((k) => k.id));
  const kcById = new Map(c.kcs.map((k) => [k.id, k]));
  const exercises = c.lessons.flatMap((l) => l.exercises);

  // Identifiants uniques
  const dupes = (ids: string[], what: string) => {
    const seen = new Set<string>();
    for (const id of ids) {
      if (seen.has(id)) err(id, `${what} en double`);
      seen.add(id);
    }
  };
  dupes(exercises.map((e) => e.id), 'identifiant d’exercice');
  dupes(c.lessons.map((l) => l.id), 'identifiant de leçon');
  dupes(c.kcs.map((k) => k.id), 'notion');
  dupes(c.vocab.map((v) => v.id), 'mot');
  dupes(c.irregulars.map((v) => v.id), 'verbe irrégulier');

  // Notions : prérequis existants, pas de cycle
  for (const k of c.kcs) for (const p of k.prerequisites) if (!kcIds.has(p)) err(k.id, `prérequis inexistant : ${p}`);
  const cycle = findCycle(c.kcs);
  if (cycle) err(cycle[0], `cycle de prérequis : ${cycle.join(' → ')}`);

  // Unités et parcours
  const lessonIds = new Set(c.lessons.map((l) => l.id));
  for (const u of c.units) {
    for (const id of u.lessonIds) if (!lessonIds.has(id)) err(u.id, `leçon inexistante : ${id}`);
    if (!u.canDo?.length) warn(u.id, 'unité sans objectif « Je peux… » (Can Do)');
  }
  for (const l of c.lessons) if (!c.path.includes(l.id)) err(l.id, 'leçon absente du parcours');

  // Exercices
  const flagged = new Set<string>();
  for (const l of c.lessons) {
    if (!l.exercises.some((e) => isProductive(evidenceOf(e)))) warn(l.id, 'aucun exercice de production dans la leçon');
    for (const kc of l.kcIds) if (!kcIds.has(kc)) err(l.id, `notion inexistante : ${kc}`);
  }
  for (const e of exercises) {
    const before = issues.length;
    if (!e.explanation.trim()) err(e.id, 'explication manquante');
    if (!e.kcIds.length) err(e.id, 'exercice sans notion');
    for (const kc of e.kcIds) {
      if (!kcIds.has(kc)) err(e.id, `notion inexistante : ${kc}`);
      const band = kcById.get(kc)?.band;
      if (band && CEFR_BANDS.indexOf(band) - CEFR_BANDS.indexOf(e.cefr) > 2) warn(e.id, `niveau ${e.cefr} bien plus bas que la notion ${kc} (${band})`);
    }
    if (e.type === 'cloze' && e.sentence.split('___').length !== 2) err(e.id, 'le texte à trous doit contenir exactement un ___');
    if (e.type === 'mcq' || e.type === 'listen_mcq') {
      if (e.answer < 0 || e.answer >= e.options.length) err(e.id, 'index de bonne réponse invalide');
      const norm = e.options.map((o) => normalize(o));
      if (new Set(norm).size !== norm.length) err(e.id, 'deux options identiques (réponse ambiguë)');
      if (e.options.length < 2) err(e.id, 'QCM avec moins de 2 options');
    }
    if ('accepted' in e && e.accepted) {
      // Les variantes contractées (It's / It is) sont voulues : seules les copies exactes sont signalées.
      if (new Set(e.accepted).size !== e.accepted.length) warn(e.id, 'réponses acceptées en double');
      if (e.type === 'translate' && e.accepted.length === 1) warn(e.id, 'traduction avec une seule réponse acceptée : risque de refuser une bonne réponse');
      for (const a of e.accepted)
        if (gradeExercise(e, e.type === 'speak' ? { kind: 'speech', transcript: a } : { kind: 'text', value: a }).verdict !== 'correct')
          err(e.id, `réponse acceptée refusée par le correcteur : « ${a} »`);
    }
    const ref = referenceResponse(e);
    if (!ref) err(e.id, 'pas de réponse de référence');
    else if (gradeExercise(e, ref).verdict !== 'correct') err(e.id, 'la réponse de référence n’est pas acceptée (exemple de réponse trop court ou sans les mots-clés ?)');
    if (issues.length > before) flagged.add(e.id);
  }

  // Couverture : assez d'items par notion pour varier (repêchage, révisions)
  const perKc = new Map<string, number>();
  for (const e of exercises) for (const kc of e.kcIds) perKc.set(kc, (perKc.get(kc) ?? 0) + 1);
  for (const k of c.kcs) {
    if (GENERATED_KCS(k.id)) continue;
    const n = perKc.get(k.id) ?? 0;
    if (n === 0) warn(k.id, 'notion sans aucun exercice');
    else if (n < 3) warn(k.id, `seulement ${n} exercice(s) : trop peu pour varier les révisions`);
  }

  // Lexique
  for (const v of c.vocab) if (!v.example) warn(v.id, 'mot sans phrase d’exemple (pas de carte contextualisée)');

  return { issues, exercises: exercises.length, validExercises: exercises.length - flagged.size };
}
