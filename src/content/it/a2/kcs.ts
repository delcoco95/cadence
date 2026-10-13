import type { KcDef } from '../../level';

/** Notions du niveau A2 d'italien (préfixe `it.a2.`), prérequis internes au niveau. */
export const KCS_A2: Record<string, KcDef> = {
  // Unité 1 : prépositions articulées
  'it.a2.grammar.articulated_prepositions': {
    label: 'Prépositions articulées : al, nel, dal, sul, del…', band: 'A2', domain: 'grammar',
    errorTags: ['wrong_preposition', 'article_wrong'], lessonId: 'it-a2-prepositions-1',
  },
  'it.a2.grammar.partitive': {
    label: 'Le partitif : del pane, dei biscotti', band: 'A2', domain: 'grammar',
    pre: ['it.a2.grammar.articulated_prepositions'], errorTags: ['article_wrong', 'countable_uncountable'], lessonId: 'it-a2-prepositions-1',
  },
  'it.a2.grammar.prepositions_places': {
    label: 'Lieux : a, in, da (a Roma, in Italia, al cinema, dal medico)', band: 'A2', domain: 'grammar',
    pre: ['it.a2.grammar.articulated_prepositions'], errorTags: ['wrong_preposition', 'article_wrong'], lessonId: 'it-a2-prepositions-2',
  },
  'it.a2.grammar.prepositions_da_transport': {
    label: 'Origine, « depuis » (da) et transports (in treno, a piedi)', band: 'A2', domain: 'grammar',
    pre: ['it.a2.grammar.prepositions_places'], errorTags: ['wrong_preposition', 'wrong_tense'], lessonId: 'it-a2-prepositions-2',
  },
  // Unité 2 : possessifs et démonstratifs
  'it.a2.grammar.possessives': {
    label: 'Possessifs avec article : il mio, la tua, i suoi', band: 'A2', domain: 'grammar',
    errorTags: ['article_missing', 'gender_agreement'], lessonId: 'it-a2-possessives-1',
  },
  'it.a2.grammar.possessives_family': {
    label: 'Possessifs et famille : mia madre, mais i miei fratelli, il loro figlio', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.possessives'], errorTags: ['article_wrong', 'article_missing'], lessonId: 'it-a2-possessives-1',
  },
  'it.a2.grammar.demonstratives': {
    label: 'Démonstratifs : questo ou quello ?', band: 'A2', domain: 'grammar',
    errorTags: ['gender_agreement', 'wrong_choice'], lessonId: 'it-a2-possessives-2',
  },
  'it.a2.grammar.quello_forms': {
    label: 'Formes de quello : quel, quello, quell’, quei, quegli, quelle', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.demonstratives'], errorTags: ['article_wrong', 'gender_agreement'], lessonId: 'it-a2-possessives-2',
  },
  // Unité 3 : passato prossimo avec avere
  'it.a2.tense.passato_avere_form': {
    label: 'Passato prossimo avec avere : ho parlato, ho venduto, ho dormito', band: 'A2', domain: 'grammar',
    errorTags: ['missing_auxiliary', 'wrong_auxiliary', 'spelling'], lessonId: 'it-a2-passato-avere-1',
  },
  'it.a2.tense.irregular_participles': {
    label: 'Participes irréguliers : fatto, detto, preso, visto, messo…', band: 'A2', domain: 'grammar',
    pre: ['it.a2.tense.passato_avere_form'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'it-a2-passato-avere-2',
  },
  'it.a2.tense.passato_markers': {
    label: 'Marqueurs du passé : ieri, fa, già, non… ancora, non… mai', band: 'A2', domain: 'grammar',
    pre: ['it.a2.tense.passato_avere_form'], errorTags: ['word_order', 'wrong_tense'], lessonId: 'it-a2-passato-avere-1',
  },
  // Unité 4 : passato prossimo avec essere
  'it.a2.tense.passato_essere': {
    label: 'Passato prossimo avec essere : sono andato, è nata, sono stato', band: 'A2', domain: 'grammar',
    pre: ['it.a2.tense.passato_avere_form'], errorTags: ['wrong_auxiliary'], lessonId: 'it-a2-passato-essere-1',
  },
  'it.a2.grammar.participle_agreement': {
    label: 'Accord du participe avec essere : partito, partita, partiti, partite', band: 'A2', domain: 'grammar',
    pre: ['it.a2.tense.passato_essere'], errorTags: ['gender_agreement'], lessonId: 'it-a2-passato-essere-1',
  },
  'it.a2.tense.passato_reflexive': {
    label: 'Passato prossimo des verbes pronominaux : mi sono alzato', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.participle_agreement'], errorTags: ['wrong_auxiliary', 'gender_agreement', 'clitic_pronoun'], lessonId: 'it-a2-passato-essere-2',
  },
  'it.a2.tense.auxiliary_choice': {
    label: 'essere ou avere ? (è piaciuto, è costato, è durato, è cominciato)', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.tense.passato_essere'], errorTags: ['wrong_auxiliary', 'gender_agreement'], lessonId: 'it-a2-passato-essere-2',
  },
  // Unité 5 : imperfetto
  'it.a2.tense.imperfetto_form': {
    label: 'Imperfetto : formation (parlavo, ero, facevo)', band: 'A2', domain: 'grammar',
    errorTags: ['irregular_form', 'spelling'], lessonId: 'it-a2-imperfetto-1',
  },
  'it.a2.tense.imperfetto_uses': {
    label: 'Imperfetto : habitudes et descriptions', band: 'A2', domain: 'grammar',
    pre: ['it.a2.tense.imperfetto_form'], errorTags: ['wrong_tense'], lessonId: 'it-a2-imperfetto-1',
  },
  'it.a2.tense.imperfetto_vs_passato': {
    label: 'Imperfetto ou passato prossimo ? (mentre, décor et événement)', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.tense.imperfetto_uses', 'it.a2.tense.passato_essere'], errorTags: ['wrong_tense'], lessonId: 'it-a2-imperfetto-2',
  },
  // Unité 6 : pronoms compléments
  'it.a2.grammar.direct_pronouns': {
    label: 'Pronoms COD : mi, ti, lo, la, ci, vi, li, le', band: 'A2', domain: 'grammar',
    errorTags: ['clitic_pronoun', 'wrong_pronoun', 'word_order'], lessonId: 'it-a2-pronouns-1',
  },
  'it.a2.grammar.direct_pronouns_agreement': {
    label: 'Pronom COD au passato prossimo : l’ho vista, li ho presi', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.direct_pronouns', 'it.a2.tense.irregular_participles'], errorTags: ['gender_agreement', 'clitic_pronoun'], lessonId: 'it-a2-pronouns-1',
  },
  'it.a2.grammar.indirect_pronouns': {
    label: 'Pronoms COI : mi, ti, gli, le, Le, ci, vi', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.direct_pronouns'], errorTags: ['clitic_pronoun', 'wrong_pronoun'], lessonId: 'it-a2-pronouns-2',
  },
  'it.a2.grammar.ne_ci': {
    label: 'ne (quantité, « en ») et ci (lieu, « y »)', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.direct_pronouns'], errorTags: ['clitic_pronoun'], lessonId: 'it-a2-pronouns-2',
  },
  // Unité 7 : futur, stare per, stare + gérondif
  'it.a2.tense.futuro_regular': {
    label: 'Futur simple régulier : parlerò, prenderò, partirò', band: 'A2', domain: 'grammar',
    errorTags: ['spelling', 'wrong_tense'], lessonId: 'it-a2-future-1',
  },
  'it.a2.tense.futuro_irregular': {
    label: 'Futurs irréguliers : sarò, avrò, andrò, farò, verrò', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.tense.futuro_regular'], errorTags: ['irregular_form', 'regularized_irregular'], lessonId: 'it-a2-future-1',
  },
  'it.a2.grammar.stare_per': {
    label: 'stare per + infinitif (être sur le point de)', band: 'A2', domain: 'grammar',
    errorTags: ['wrong_preposition', 'wrong_tense'], lessonId: 'it-a2-future-2',
  },
  'it.a2.grammar.stare_gerund': {
    label: 'stare + gérondif (être en train de)', band: 'A2', domain: 'grammar',
    errorTags: ['irregular_form', 'wrong_tense'], lessonId: 'it-a2-future-2',
  },
  // Unité 8 : comparer et conseiller
  'it.a2.grammar.comparatives': {
    label: 'Comparatifs : più / meno… di ou che, come, quanto', band: 'A2', domain: 'grammar',
    errorTags: ['wrong_preposition', 'wrong_choice'], lessonId: 'it-a2-compare-1',
  },
  'it.a2.grammar.superlatives': {
    label: 'Superlatifs : il più bello, -issimo, migliore, meglio', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.comparatives'], errorTags: ['irregular_form', 'article_wrong'], lessonId: 'it-a2-compare-1',
  },
  'it.a2.grammar.imperative_tu_voi': {
    label: 'Impératif tu et voi, négation non + infinitif', band: 'A2', domain: 'grammar',
    errorTags: ['irregular_form', 'clitic_pronoun'], lessonId: 'it-a2-compare-2',
  },
  'it.a2.grammar.imperative_lei': {
    label: 'Impératif de politesse (Lei) : scusi, prenda, venga', band: 'A2+', domain: 'grammar',
    pre: ['it.a2.grammar.imperative_tu_voi'], errorTags: ['irregular_form', 'wrong_choice'], lessonId: 'it-a2-compare-2',
  },
};
