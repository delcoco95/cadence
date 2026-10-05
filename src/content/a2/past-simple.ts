import type { Lesson } from '../types';
import { exercises } from '../builders';

const base = { cefr: 'A2', skill: 'grammar', tense: 'past_simple' } as const;

export const pastSimple1: Lesson = {
  id: 'a2-past-1',
  cefr: 'A2',
  unitId: 'a2-past-simple',
  title: 'Past Simple : verbes réguliers',
  subtitle: 'Actions terminées dans le passé',
  kcIds: ['tense.past_simple.regular', 'tense.past_simple.negative', 'tense.past_simple.question'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Quand l’utiliser',
      body: 'Pour une action terminée à un moment précis du passé (yesterday, last week, in 2019, two days ago…).',
      examples: [
        { en: 'I worked late yesterday.', fr: 'J’ai travaillé tard hier.' },
        { en: 'We visited London in 2019.', fr: 'Nous avons visité Londres en 2019.' },
      ],
      tip: 'Le passé composé français (« j’ai travaillé ») se traduit très souvent par le past simple quand le moment est précis.',
    },
    {
      title: 'Structure',
      table: [
        ['affirmation (toutes personnes)', 'verbe + -ed : worked'],
        ['négation', 'didn’t + base : didn’t work'],
        ['question', 'Did + sujet + base : Did you work?'],
      ],
      tip: 'Après did / didn’t, le verbe revient à la base : « Did you worked? » ✗ → « Did you work? » ✓.',
    },
    {
      title: 'Orthographe',
      table: [
        ['cas général', 'play → played'],
        ['-e final', 'live → lived'],
        ['consonne + y', 'study → studied'],
        ['consonne-voyelle-consonne accentuée', 'stop → stopped, plan → planned'],
      ],
    },
  ],
  exercises: [
    {
      ...base, id: 'a2-past-1-01', type: 'cloze', kcIds: ['tense.past_simple.regular'], difficulty: -2,
      instruction: 'Complète au past simple.', sentence: 'I ___ my grandparents last weekend.', hint: 'visit',
      accepted: ['visited'], strict: true, speak: 'I visited my grandparents last weekend.',
      explanation: 'Verbe régulier : visit → visited.',
    },
    {
      ...base, id: 'a2-past-1-02', type: 'cloze', kcIds: ['tense.past_simple.regular'], difficulty: -1.5,
      instruction: 'Complète au past simple.', sentence: 'She ___ French at university.', hint: 'study',
      accepted: ['studied'], strict: true, speak: 'She studied French at university.',
      explanation: 'Consonne + y → -ied : studied.',
    },
    {
      ...base, id: 'a2-past-1-03', type: 'cloze', kcIds: ['tense.past_simple.regular'], difficulty: -1,
      instruction: 'Complète au past simple.', sentence: 'The bus ___ in front of the station.', hint: 'stop',
      accepted: ['stopped'], strict: true, speak: 'The bus stopped in front of the station.',
      explanation: 'Consonne-voyelle-consonne → on double : stopped.',
    },
    {
      ...base, id: 'a2-past-1-04', type: 'mcq', kcIds: ['tense.past_simple.negative'], difficulty: -1,
      instruction: 'Choisis la phrase correcte.', question: 'Je n’ai pas regardé le match.',
      options: ['I didn’t watched the match.', 'I didn’t watch the match.', 'I don’t watched the match.'], answer: 1,
      speak: 'I didn’t watch the match.',
      explanation: 'didn’t + verbe de base : didn’t watch.',
    },
    {
      ...base, id: 'a2-past-1-05', type: 'mcq', kcIds: ['tense.past_simple.question'], difficulty: -1,
      instruction: 'Choisis la question correcte.', question: 'Tu as appelé le client ?',
      options: ['Did you call the client?', 'Did you called the client?', 'Do you called the client?'], answer: 0,
      speak: 'Did you call the client?',
      explanation: 'Did + sujet + verbe de base.',
    },
    {
      ...base, id: 'a2-past-1-06', type: 'word_bank', kcIds: ['tense.past_simple.question'], difficulty: -0.5,
      instruction: 'Remets les mots dans l’ordre.', question: 'Quand as-tu commencé ce travail ?',
      tokens: ['When', 'did', 'you', 'start', 'this', 'job', '?'], distractors: ['started'],
      speak: 'When did you start this job?',
      explanation: 'Mot interrogatif + did + sujet + base.',
    },
    {
      ...base, id: 'a2-past-1-07', type: 'translate', direction: 'fr_en', kcIds: ['tense.past_simple.regular'], difficulty: 0,
      instruction: 'Traduis en anglais.', source: 'Nous avons travaillé jusqu’à 20 h hier.',
      accepted: ['We worked until 8 pm yesterday.', 'We worked until 8 yesterday.', 'We worked until 8 p.m. yesterday.', 'Yesterday we worked until 8 pm.', 'We worked until 8pm yesterday.', "We worked until 8 o'clock yesterday."],
      speak: 'We worked until 8 pm yesterday.',
      explanation: 'Moment précis (yesterday) → past simple, pas « we have worked ».',
    },
    {
      ...base, id: 'a2-past-1-08', type: 'cloze', kcIds: ['tense.past_simple.negative'], difficulty: -0.5,
      instruction: 'Mets à la forme négative.', sentence: 'He ___ (not / answer) my message.',
      accepted: ["didn't answer", 'did not answer'], strict: true, speak: 'He didn’t answer my message.',
      explanation: 'didn’t + answer (base).',
    },
    {
      ...base, id: 'a2-past-1-09', type: 'mcq', kcIds: ['tense.past_simple.regular'], difficulty: -0.5,
      instruction: 'Quel mot-signal va avec le past simple ?', question: 'I cleaned my room ___.',
      options: ['tomorrow', 'every day', 'two days ago'], answer: 2, speak: 'I cleaned my room two days ago.',
      explanation: '« ago » = il y a → moment passé précis.',
    },
    {
      ...base, id: 'a2-past-1-10', type: 'translate', direction: 'fr_en', kcIds: ['tense.past_simple.question'], difficulty: 0.3,
      instruction: 'Traduis en anglais.', source: 'Est-ce qu’elle a aimé le film ?',
      accepted: ['Did she like the film?', 'Did she like the movie?', 'Did she enjoy the film?', 'Did she enjoy the movie?'],
      speak: 'Did she like the film?',
      explanation: 'Did + she + like (base). film (UK) / movie (US).',
    },
    ...exercises('a2-past-1-x', 'A2', { kc: 'tense.past_simple.regular', tense: 'past_simple' })
      .listen('We visited my grandparents last Sunday.', 'Quand sont-ils allés chez les grands-parents ?', ['Dimanche dernier', 'Samedi dernier', 'Ce week-end'], 0,
        'last Sunday = dimanche dernier.')
      .dictation('I called the client yesterday.', 'call → called. yesterday → past simple.')
      .repeat('I watched a film and then I cooked dinner.', 'Le -ed se prononce /t/ après un son sourd : watched /wɒtʃt/, cooked /kʊkt/.')
      .say('Tu as fini le rapport ?', ['Did you finish the report'], 'Did + you + finish (base).', { kc: 'tense.past_simple.question' })
      .answer('What did you do last weekend?', 'Last weekend I visited my parents and on Sunday I watched a football match.',
        'Raconte au past simple (visited, watched, played…).', { keywords: [['last weekend', 'on saturday', 'on sunday', 'yesterday']], minWords: 8 })
      .build(),
  ],
};

export const pastSimple2: Lesson = {
  id: 'a2-past-2',
  cefr: 'A2',
  unitId: 'a2-past-simple',
  title: 'Past Simple : verbes irréguliers',
  subtitle: 'go → went, have → had, take → took…',
  kcIds: ['tense.past_simple.irregular', 'verbs.irregular.top30'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Les irréguliers indispensables',
      body: 'Les verbes les plus fréquents sont irréguliers. Il faut les apprendre par cœur : les révisions espacées s’en chargeront.',
      table: [
        ['be', 'was / were', 'been'],
        ['have', 'had', 'had'],
        ['do', 'did', 'done'],
        ['go', 'went', 'gone'],
        ['make', 'made', 'made'],
        ['take', 'took', 'taken'],
        ['get', 'got', 'got / gotten (US)'],
        ['see', 'saw', 'seen'],
        ['come', 'came', 'come'],
        ['know', 'knew', 'known'],
        ['think', 'thought', 'thought'],
        ['say', 'said', 'said'],
        ['buy', 'bought', 'bought'],
        ['write', 'wrote', 'written'],
      ],
      tip: 'Seule la 2ᵉ colonne (past simple) sert ici. La 3ᵉ (participe passé) servira au present perfect.',
    },
    {
      title: 'Négation et questions : toujours did + base',
      examples: [
        { en: 'I went → I didn’t go → Did you go?', fr: 'Je suis {allé|allée} → je ne suis pas {allé|allée} → es-tu {allé|allée} ?' },
      ],
    },
  ],
  exercises: [
    {
      ...base, id: 'a2-past-2-01', type: 'type_answer', kcIds: ['verbs.irregular.top30'], difficulty: -1.5,
      instruction: 'Écris le past simple.', question: 'go → ___', accepted: ['went'], strict: true, speak: 'go, went, gone',
      explanation: 'go → went → gone.',
    },
    {
      ...base, id: 'a2-past-2-02', type: 'type_answer', kcIds: ['verbs.irregular.top30'], difficulty: -1.5,
      instruction: 'Écris le past simple.', question: 'have → ___', accepted: ['had'], strict: true, speak: 'have, had, had',
      explanation: 'have → had → had.',
    },
    {
      ...base, id: 'a2-past-2-03', type: 'type_answer', kcIds: ['verbs.irregular.top30'], difficulty: -1,
      instruction: 'Écris le past simple.', question: 'take → ___', accepted: ['took'], strict: true, speak: 'take, took, taken',
      explanation: 'take → took → taken.',
    },
    {
      ...base, id: 'a2-past-2-04', type: 'type_answer', kcIds: ['verbs.irregular.top30'], difficulty: -0.8,
      instruction: 'Écris le past simple.', question: 'buy → ___', accepted: ['bought'], strict: true, speak: 'buy, bought, bought',
      explanation: 'buy → bought → bought. Attention : bought (acheter) ≠ brought (apporter).',
    },
    {
      ...base, id: 'a2-past-2-05', type: 'cloze', kcIds: ['tense.past_simple.irregular'], difficulty: -1,
      instruction: 'Complète au past simple.', sentence: 'We ___ a great film last night.', hint: 'see',
      accepted: ['saw'], strict: true, speak: 'We saw a great film last night.',
      explanation: 'see → saw → seen.',
    },
    {
      ...base, id: 'a2-past-2-06', type: 'cloze', kcIds: ['tense.past_simple.irregular'], difficulty: -0.8,
      instruction: 'Complète au past simple.', sentence: 'She ___ me an email this morning.', hint: 'write',
      accepted: ['wrote'], strict: true, speak: 'She wrote me an email this morning.',
      explanation: 'write → wrote → written.',
    },
    {
      ...base, id: 'a2-past-2-07', type: 'cloze', kcIds: ['tense.past_simple.irregular'], difficulty: -0.5,
      instruction: 'Complète au past simple.', sentence: 'I ___ it was a good idea.', hint: 'think',
      accepted: ['thought'], strict: true, speak: 'I thought it was a good idea.',
      explanation: 'think → thought → thought.',
    },
    {
      ...base, id: 'a2-past-2-08', type: 'mcq', kcIds: ['tense.past_simple.irregular'], difficulty: -0.5,
      instruction: 'Choisis la phrase correcte.', question: 'Il n’est pas venu à la réunion.',
      options: ['He didn’t came to the meeting.', 'He didn’t come to the meeting.', 'He not came to the meeting.'], answer: 1,
      speak: 'He didn’t come to the meeting.',
      explanation: 'didn’t + base, même pour les irréguliers : didn’t come.',
    },
    {
      ...base, id: 'a2-past-2-09', type: 'mcq', kcIds: ['tense.past_simple.irregular'], difficulty: 0,
      instruction: 'was ou were ?', question: 'The meetings ___ very long yesterday.',
      options: ['was', 'were', 'been'], answer: 1, speak: 'The meetings were very long yesterday.',
      explanation: 'Pluriel → were. (I / he / she / it → was.)',
    },
    {
      ...base, id: 'a2-past-2-10', type: 'word_bank', kcIds: ['tense.past_simple.irregular'], difficulty: 0,
      instruction: 'Remets les mots dans l’ordre.', question: 'Où es-tu allé en vacances ?',
      tokens: ['Where', 'did', 'you', 'go', 'on', 'holiday', '?'], distractors: ['went'],
      speak: 'Where did you go on holiday?',
      explanation: 'Did + you + go (base, pas went).',
    },
    {
      ...base, id: 'a2-past-2-11', type: 'translate', direction: 'fr_en', kcIds: ['tense.past_simple.irregular'], difficulty: 0.3,
      instruction: 'Traduis en anglais.', source: 'J’ai pris le train à 7 heures.',
      accepted: ['I took the train at 7.', "I took the train at 7 o'clock.", 'I took the train at 7 am.', 'I took the train at seven.', "I took the train at seven o'clock.", 'I took the train at 7 a.m.'],
      speak: 'I took the train at 7 o’clock.',
      explanation: 'take → took. Moment précis → past simple.',
    },
    {
      ...base, id: 'a2-past-2-12', type: 'translate', direction: 'fr_en', kcIds: ['tense.past_simple.irregular'], difficulty: 0.5,
      instruction: 'Traduis en anglais.', source: 'Je savais qu’il avait raison.',
      accepted: ['I knew he was right.', 'I knew that he was right.'], speak: 'I knew he was right.',
      explanation: 'know → knew. « avoir raison » = to be right → he was right.',
    },
    ...exercises('a2-past-2-x', 'A2', { kc: 'tense.past_simple.irregular', tense: 'past_simple' })
      .listen('I bought a new phone because my old one broke.', 'Qu’est-il arrivé à l’ancien téléphone ?', ['Il s’est cassé', 'Il a été volé', 'Il était trop lent'], 0,
        'break → broke → broken. bought = acheté.')
      .dictation('She went to London and saw the Queen’s palace.', 'go → went, see → saw.', { accepted: ["She went to London and saw the Queen's palace."] })
      .repeat('I got up early, had breakfast and took the train.', 'get → got, have → had, take → took.')
      .say('Nous sommes allés au restaurant hier soir.', ['We went to a restaurant last night', 'We went to the restaurant last night', 'Last night we went to a restaurant', 'We went to a restaurant yesterday evening'],
        'go → went. « hier soir » = last night.')
      .say('Je n’ai pas vu le message.', ["I didn't see the message", 'I did not see the message'], 'didn’t + see (base, pas saw).')
      .answer('Tell me about your last holiday. Where did you go? What did you do?', 'Last summer I went to Spain with friends. We swam in the sea and ate a lot of tapas.',
        'Utilise des irréguliers : went, saw, ate, took, had…', { keywords: [['went', 'go'], ['saw', 'ate', 'took', 'had', 'swam', 'did', 'made', 'bought']], minWords: 10 })
      .build(),
  ],
};
