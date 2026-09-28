import type { Lesson } from '../types';
import { exercises } from '../builders';

const base = { cefr: 'A2', skill: 'grammar', tense: 'present_simple' } as const;

export const presentSimple1: Lesson = {
  id: 'a2-ps-1',
  cefr: 'A2',
  unitId: 'a2-present-simple',
  title: 'Present Simple',
  subtitle: 'Habitudes et vérités générales',
  kcIds: ['tense.present_simple.form', 'tense.present_simple.third_person_s', 'tense.present_simple.usage'],
  estMinutes: 5,
  explanation: [
    {
      title: 'Quand l’utiliser',
      body: 'Pour les habitudes, les routines, les faits permanents et les vérités générales.',
      examples: [
        { en: 'I work in IT.', fr: 'Je travaille dans l’informatique.' },
        { en: 'She drinks coffee every morning.', fr: 'Elle boit du café tous les matins.' },
        { en: 'Water boils at 100 degrees.', fr: 'L’eau bout à 100 degrés.' },
      ],
    },
    {
      title: 'Structure',
      table: [
        ['I / you / we / they', 'work'],
        ['he / she / it', 'works'],
      ],
      tip: 'À la 3ᵉ personne du singulier, on ajoute -s. C’est l’erreur n°1 des francophones : « he work » ✗ → « he works » ✓.',
    },
    {
      title: 'Orthographe du -s',
      table: [
        ['la plupart des verbes', 'work → works, play → plays'],
        ['-s, -sh, -ch, -x, -o', 'watch → watches, go → goes, do → does'],
        ['consonne + y', 'study → studies'],
        ['irrégulier', 'have → has'],
      ],
    },
    {
      title: 'Mots-signaux',
      body: 'always, usually, often, sometimes, never, every day, on Mondays… Les adverbes de fréquence se placent avant le verbe : « I often read ».',
    },
  ],
  exercises: [
    {
      ...base, id: 'a2-ps-1-01', type: 'mcq', kcIds: ['tense.present_simple.third_person_s'], difficulty: -2,
      instruction: 'Choisis la bonne forme.', question: 'She ___ in a bank.',
      options: ['work', 'works', 'working'], answer: 1, speak: 'She works in a bank.',
      explanation: 'He / she / it → verbe + s : she works.',
    },
    {
      ...base, id: 'a2-ps-1-02', type: 'mcq', kcIds: ['tense.present_simple.third_person_s'], difficulty: -2,
      instruction: 'Choisis la bonne forme.', question: 'My parents ___ in Lyon.',
      options: ['lives', 'live', 'living'], answer: 1, speak: 'My parents live in Lyon.',
      explanation: '« My parents » = they → pas de -s : they live.',
    },
    {
      ...base, id: 'a2-ps-1-03', type: 'cloze', kcIds: ['tense.present_simple.third_person_s'], difficulty: -1.5,
      instruction: 'Complète avec le verbe au present simple.', sentence: 'He ___ TV every evening.', hint: 'watch',
      accepted: ['watches'], strict: true, speak: 'He watches TV every evening.',
      explanation: 'Verbe en -ch → on ajoute -es : watch → watches.',
    },
    {
      ...base, id: 'a2-ps-1-04', type: 'cloze', kcIds: ['tense.present_simple.third_person_s'], difficulty: -1,
      instruction: 'Complète avec le verbe au present simple.', sentence: 'My sister ___ law at university.', hint: 'study',
      accepted: ['studies'], strict: true, speak: 'My sister studies law at university.',
      explanation: 'Consonne + y → -ies : study → studies.',
    },
    {
      ...base, id: 'a2-ps-1-05', type: 'cloze', kcIds: ['tense.present_simple.third_person_s'], difficulty: -1,
      instruction: 'Complète avec le verbe au present simple.', sentence: 'Tom ___ two brothers.', hint: 'have',
      accepted: ['has'], strict: true, speak: 'Tom has two brothers.',
      explanation: '« have » est irrégulier à la 3ᵉ personne : he has.',
    },
    {
      ...base, id: 'a2-ps-1-06', type: 'cloze', kcIds: ['tense.present_simple.third_person_s'], difficulty: -1.2,
      instruction: 'Complète avec le verbe au present simple.', sentence: 'The train ___ at 8 o’clock.', hint: 'leave',
      accepted: ['leaves'], strict: true, speak: 'The train leaves at 8 o’clock.',
      explanation: 'Horaires et programmes → present simple. The train = it → leaves.',
    },
    {
      ...base, id: 'a2-ps-1-07', type: 'mcq', kcIds: ['tense.present_simple.usage'], difficulty: -1,
      instruction: 'Où se place l’adverbe ?', question: 'Choisis la phrase correcte.',
      options: ['I drink usually tea.', 'I usually drink tea.', 'Usually I tea drink.'], answer: 1,
      speak: 'I usually drink tea.',
      explanation: 'Les adverbes de fréquence se placent avant le verbe principal : I usually drink.',
    },
    {
      ...base, id: 'a2-ps-1-08', type: 'word_bank', kcIds: ['tense.present_simple.usage'], difficulty: -1,
      instruction: 'Remets les mots dans l’ordre.', question: 'Il va souvent au travail à vélo.',
      tokens: ['He', 'often', 'goes', 'to', 'work', 'by', 'bike'], distractors: ['go'],
      speak: 'He often goes to work by bike.',
      explanation: 'Adverbe avant le verbe, et go → goes à la 3ᵉ personne.',
    },
    {
      ...base, id: 'a2-ps-1-09', type: 'translate', direction: 'fr_en', kcIds: ['tense.present_simple.third_person_s'], difficulty: -0.5,
      instruction: 'Traduis en anglais.', source: 'Elle travaille à la maison le lundi.',
      accepted: ['She works at home on Mondays.', 'She works from home on Mondays.', 'On Mondays she works at home.', 'On Mondays she works from home.', 'She works at home on Monday.', 'She works from home on Monday.'],
      speak: 'She works from home on Mondays.',
      explanation: '« le lundi » (habitude) = on Mondays. Et she → works.',
    },
    {
      ...base, id: 'a2-ps-1-10', type: 'type_answer', kcIds: ['tense.present_simple.third_person_s'], difficulty: -1,
      instruction: 'Écris la forme « he / she / it ».', question: 'do → he ___',
      accepted: ['does'], strict: true,
      explanation: 'Verbe en -o → -es : do → does, go → goes.',
    },
    {
      ...base, id: 'a2-ps-1-11', type: 'mcq', kcIds: ['tense.present_simple.usage'], difficulty: -0.5,
      instruction: 'Quelle phrase exprime une habitude ?', question: 'Choisis.',
      options: ['I am reading a book right now.', 'I read before I go to bed.', 'I am going to read tonight.'], answer: 1,
      explanation: 'Habitude → present simple. « right now » indique une action en cours (present continuous).',
    },
    {
      ...base, id: 'a2-ps-1-12', type: 'translate', direction: 'fr_en', kcIds: ['tense.present_simple.form'], difficulty: 0,
      instruction: 'Traduis en anglais.', source: 'Mon frère répare des ordinateurs.',
      accepted: ['My brother repairs computers.', 'My brother fixes computers.'],
      speak: 'My brother repairs computers.',
      explanation: 'My brother = he → repairs / fixes (fix → fixes, verbe en -x).',
    },
    ...exercises('a2-ps-1-x', 'A2', { kc: 'tense.present_simple.third_person_s', tense: 'present_simple' })
      .listen('He watches the news every evening.', 'Qu’est-ce qu’il fait tous les soirs ?', ['Il regarde les infos', 'Il lit le journal', 'Il écoute la radio'], 0,
        'watches the news = regarde les informations.')
      .dictation('She works in a hospital.', 'works : n’oublie pas le -s à la 3ᵉ personne.')
      .repeat('My sister studies law and works at the weekend.', 'studies (study → studies), works : deux verbes à la 3ᵉ personne.')
      .say('Il boit du thé tous les matins.', ['He drinks tea every morning', 'Every morning he drinks tea'], 'drink → drinks. « tous les matins » = every morning.')
      .answer('What do you usually do on Sundays?', 'On Sundays I usually sleep late, then I go for a walk with my friends.',
        'Utilise le present simple et un adverbe de fréquence (usually, often, sometimes…).',
        { keywords: [['usually', 'often', 'sometimes', 'always', 'never']], kc: 'tense.present_simple.usage' })
      .build(),
  ],
};

export const presentSimple2: Lesson = {
  id: 'a2-ps-2',
  cefr: 'A2',
  unitId: 'a2-present-simple',
  title: 'Present Simple : négation et questions',
  subtitle: 'do / does, don’t / doesn’t',
  kcIds: ['tense.present_simple.negative', 'tense.present_simple.question', 'grammar.auxiliary.do'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Négation',
      table: [
        ['I / you / we / they', 'don’t work'],
        ['he / she / it', 'doesn’t work'],
      ],
      tip: 'Avec doesn’t, le verbe revient à la base : « she doesn’t works » ✗ → « she doesn’t work » ✓. Le -s est déjà dans does.',
    },
    {
      title: 'Questions',
      table: [
        ['Do + I / you / we / they', 'Do you work here?'],
        ['Does + he / she / it', 'Does she work here?'],
        ['Mot interrogatif + do/does', 'Where do you live?'],
      ],
      examples: [
        { en: 'Do you like coffee? — Yes, I do. / No, I don’t.', fr: 'Tu aimes le café ? — Oui. / Non.' },
        { en: 'What does he do?', fr: 'Que fait-il (comme métier) ?' },
      ],
    },
    {
      title: 'Exception : be',
      body: '« be » n’utilise pas do : « Is she French? », « I’m not tired ». Jamais « Do you are… ».',
    },
  ],
  exercises: [
    {
      ...base, id: 'a2-ps-2-01', type: 'mcq', kcIds: ['tense.present_simple.negative'], difficulty: -1.5,
      instruction: 'Choisis la bonne forme.', question: 'He ___ like horror films.',
      options: ['don’t', 'doesn’t', 'isn’t'], answer: 1, speak: 'He doesn’t like horror films.',
      explanation: 'He / she / it → doesn’t + verbe de base.',
    },
    {
      ...base, id: 'a2-ps-2-02', type: 'mcq', kcIds: ['tense.present_simple.negative'], difficulty: -1,
      instruction: 'Choisis la phrase correcte.', question: 'Elle ne parle pas allemand.',
      options: ['She doesn’t speaks German.', 'She doesn’t speak German.', 'She don’t speak German.'], answer: 1,
      speak: 'She doesn’t speak German.',
      explanation: 'Après doesn’t, pas de -s : doesn’t speak.',
    },
    {
      ...base, id: 'a2-ps-2-03', type: 'cloze', kcIds: ['tense.present_simple.question', 'grammar.auxiliary.do'], difficulty: -1,
      instruction: 'Complète avec do ou does.', sentence: '___ your manager work on Fridays?',
      accepted: ['Does'], strict: true, speak: 'Does your manager work on Fridays?',
      explanation: 'Your manager = he/she → Does.',
    },
    {
      ...base, id: 'a2-ps-2-04', type: 'cloze', kcIds: ['tense.present_simple.question', 'grammar.auxiliary.do'], difficulty: -1,
      instruction: 'Complète avec do ou does.', sentence: 'Where ___ you live?',
      accepted: ['do'], strict: true, speak: 'Where do you live?',
      explanation: 'You → do. Structure : mot interrogatif + do + sujet + verbe.',
    },
    {
      ...base, id: 'a2-ps-2-05', type: 'word_bank', kcIds: ['tense.present_simple.question'], difficulty: -0.5,
      instruction: 'Remets les mots dans l’ordre.', question: 'Que fait ta sœur (comme métier) ?',
      tokens: ['What', 'does', 'your', 'sister', 'do', '?'], distractors: ['is', 'does'],
      speak: 'What does your sister do?',
      explanation: '« What does … do? » = question sur le métier. Le 1er does est l’auxiliaire, le 2ᵉ do est le verbe « faire ».',
    },
    {
      ...base, id: 'a2-ps-2-06', type: 'cloze', kcIds: ['tense.present_simple.negative'], difficulty: -0.8,
      instruction: 'Mets la phrase à la forme négative.', sentence: 'We ___ (not / have) a car.',
      accepted: ['do not have', "don't have"], strict: true, speak: 'We don’t have a car.',
      explanation: 'We → don’t + have.',
    },
    {
      ...base, id: 'a2-ps-2-07', type: 'mcq', kcIds: ['grammar.auxiliary.do'], difficulty: -0.5,
      instruction: 'Quelle question est correcte ?', question: 'Choisis.',
      options: ['Do you are tired?', 'Are you tired?', 'Does you tired?'], answer: 1,
      speak: 'Are you tired?',
      explanation: 'Avec « be », pas de do : on inverse sujet et verbe → Are you tired?',
    },
    {
      ...base, id: 'a2-ps-2-08', type: 'translate', direction: 'fr_en', kcIds: ['tense.present_simple.question'], difficulty: 0,
      instruction: 'Traduis en anglais.', source: 'Est-ce qu’il travaille ici ?',
      accepted: ['Does he work here?'], speak: 'Does he work here?',
      explanation: '« Est-ce que » n’a pas d’équivalent mot à mot : Does + sujet + verbe de base.',
    },
    {
      ...base, id: 'a2-ps-2-09', type: 'translate', direction: 'fr_en', kcIds: ['tense.present_simple.negative'], difficulty: 0,
      instruction: 'Traduis en anglais.', source: 'Je ne bois pas de café.',
      accepted: ["I don't drink coffee.", 'I do not drink coffee.'], speak: 'I don’t drink coffee.',
      explanation: '« de café » ne se traduit pas : I don’t drink coffee.',
    },
    {
      ...base, id: 'a2-ps-2-10', type: 'mcq', kcIds: ['tense.present_simple.question'], difficulty: -0.5,
      instruction: 'Choisis la réponse courte correcte.', question: 'Does she speak English? — Yes, she ___.',
      options: ['speaks', 'does', 'is'], answer: 1, speak: 'Does she speak English? Yes, she does.',
      explanation: 'Réponse courte : on reprend l’auxiliaire. Yes, she does. / No, she doesn’t.',
    },
    {
      ...base, id: 'a2-ps-2-11', type: 'cloze', kcIds: ['tense.present_simple.question'], difficulty: 0,
      instruction: 'Complète la question.', sentence: 'How often ___ he go to the gym?',
      accepted: ['does'], strict: true, speak: 'How often does he go to the gym?',
      explanation: 'How often + does + he + go (verbe de base).',
    },
    {
      ...base, id: 'a2-ps-2-12', type: 'word_bank', kcIds: ['tense.present_simple.negative'], difficulty: 0,
      instruction: 'Remets les mots dans l’ordre.', question: 'Mon ordinateur ne démarre pas le matin.',
      tokens: ['My', 'computer', 'doesn’t', 'start', 'in', 'the', 'morning'], distractors: ['starts', 'don’t'],
      speak: 'My computer doesn’t start in the morning.',
      explanation: 'My computer = it → doesn’t + start (sans -s).',
    },
    ...exercises('a2-ps-2-x', 'A2', { kc: 'tense.present_simple.question', tense: 'present_simple' })
      .listen('Does your brother live in Paris?', 'Quelle est la question ?', ['Ton frère habite à Paris ?', 'Ton frère travaille à Paris ?', 'Ton frère aime Paris ?'], 0,
        'Does + your brother + live : question au present simple.')
      .dictation('We don’t work on Saturdays.', 'don’t + base verbale.', { accepted: ["We don't work on Saturdays.", 'We do not work on Saturdays.'], kc: 'tense.present_simple.negative' })
      .repeat('Where do you live? What do you do?', 'Deux questions essentielles : où habites-tu, que fais-tu dans la vie.')
      .say('Est-ce qu’elle parle anglais ?', ['Does she speak English'], 'Does + she + speak (base).')
      .say('Je n’aime pas les réunions longues.', ["I don't like long meetings", 'I do not like long meetings'], 'don’t + like. L’adjectif se place avant le nom : long meetings.',
        { kc: 'tense.present_simple.negative' })
      .answer('What do you do? Do you like your job?', 'I work in IT. Yes, I like my job because I learn new things every day.',
        'Réponds avec le present simple : I work…, I like… / I don’t like…', { keywords: [['work', 'study'], ['like', "don't like", 'love', 'hate']] })
      .build(),
  ],
};
