import type { Lesson } from '../types';
import { exercises } from '../builders';

const base = { cefr: 'A2', skill: 'grammar', tense: 'present_continuous' } as const;

export const presentContinuous1: Lesson = {
  id: 'a2-pc-1',
  cefr: 'A2',
  unitId: 'a2-present-continuous',
  title: 'Present Continuous',
  subtitle: 'Ce qui se passe maintenant',
  kcIds: ['tense.present_continuous.form', 'tense.present_continuous.usage', 'tense.contrast.simple_vs_continuous'],
  estMinutes: 6,
  explanation: [
    {
      title: 'Quand l’utiliser',
      body: 'Pour une action en cours au moment où l’on parle, ou une situation temporaire.',
      examples: [
        { en: 'I’m working on a new project this week.', fr: 'Je travaille sur un nouveau projet cette semaine.' },
        { en: 'Look! It’s raining.', fr: 'Regarde ! Il pleut.' },
      ],
    },
    {
      title: 'Structure : be + verbe-ing',
      table: [
        ['I', 'am working'],
        ['he / she / it', 'is working'],
        ['you / we / they', 'are working'],
        ['négation', 'I’m not / she isn’t / they aren’t working'],
        ['question', 'Are you working? / Is he working?'],
      ],
    },
    {
      title: 'Orthographe du -ing',
      table: [
        ['cas général', 'read → reading'],
        ['-e final', 'write → writing, make → making'],
        ['consonne-voyelle-consonne accentuée', 'run → running, sit → sitting'],
        ['-ie', 'lie → lying'],
      ],
    },
    {
      title: 'Simple ou continuous ?',
      body: 'Habitude → present simple (I work from home on Fridays). Maintenant / temporaire → present continuous (I’m working from home today).',
      tip: 'Les verbes d’état (know, like, want, need, believe, understand) ne se mettent généralement pas en -ing : « I’m knowing » ✗ → « I know » ✓.',
    },
  ],
  exercises: [
    {
      ...base, id: 'a2-pc-1-01', type: 'mcq', kcIds: ['tense.present_continuous.form'], difficulty: -2,
      instruction: 'Choisis la bonne forme.', question: 'Be quiet, the baby ___.',
      options: ['sleeps', 'is sleeping', 'are sleeping'], answer: 1, speak: 'Be quiet, the baby is sleeping.',
      explanation: 'Action en cours → is + sleeping.',
    },
    {
      ...base, id: 'a2-pc-1-02', type: 'cloze', kcIds: ['tense.present_continuous.form'], difficulty: -1.5,
      instruction: 'Complète au present continuous.', sentence: 'They ___ football in the park right now.', hint: 'play',
      accepted: ['are playing', "'re playing"], strict: true, speak: 'They are playing football in the park right now.',
      explanation: 'They → are + playing.',
    },
    {
      ...base, id: 'a2-pc-1-03', type: 'cloze', kcIds: ['tense.present_continuous.form'], difficulty: -1,
      instruction: 'Complète au present continuous.', sentence: 'I ___ an email to my manager.', hint: 'write',
      accepted: ['am writing', "'m writing"], strict: true, speak: 'I am writing an email to my manager.',
      explanation: 'write → writing (on supprime le -e).',
    },
    {
      ...base, id: 'a2-pc-1-04', type: 'type_answer', kcIds: ['tense.present_continuous.form'], difficulty: -1,
      instruction: 'Écris la forme en -ing.', question: 'run → ___',
      accepted: ['running'], strict: true,
      explanation: 'Consonne-voyelle-consonne → on double la consonne : running.',
    },
    {
      ...base, id: 'a2-pc-1-05', type: 'mcq', kcIds: ['tense.contrast.simple_vs_continuous'], difficulty: -0.5,
      instruction: 'Simple ou continuous ?', question: 'I usually ___ the bus, but today I ___.',
      options: ['take / walk', 'take / am walking', 'am taking / walk'], answer: 1,
      speak: 'I usually take the bus, but today I am walking.',
      explanation: '« usually » → habitude (take). « today » → temporaire (am walking).',
    },
    {
      ...base, id: 'a2-pc-1-06', type: 'mcq', kcIds: ['tense.contrast.simple_vs_continuous'], difficulty: 0,
      instruction: 'Choisis la phrase correcte.', question: 'Je comprends ta question.',
      options: ['I’m understanding your question.', 'I understand your question.', 'I understanding your question.'], answer: 1,
      speak: 'I understand your question.',
      explanation: '« understand » est un verbe d’état : pas de forme en -ing.',
    },
    {
      ...base, id: 'a2-pc-1-07', type: 'word_bank', kcIds: ['tense.present_continuous.form'], difficulty: -0.5,
      instruction: 'Remets les mots dans l’ordre.', question: 'Est-ce que tu m’écoutes ?',
      tokens: ['Are', 'you', 'listening', 'to', 'me', '?'], distractors: ['Do', 'listen'],
      speak: 'Are you listening to me?',
      explanation: 'Question : be + sujet + verbe-ing. « listen to » + complément.',
    },
    {
      ...base, id: 'a2-pc-1-08', type: 'cloze', kcIds: ['tense.present_continuous.form'], difficulty: -0.5,
      instruction: 'Mets à la forme négative.', sentence: 'She ___ (not / work) today, she’s ill.',
      accepted: ["isn't working", 'is not working', "'s not working"], strict: true,
      speak: 'She isn’t working today, she’s ill.',
      explanation: 'She → isn’t + working.',
    },
    {
      ...base, id: 'a2-pc-1-09', type: 'translate', direction: 'fr_en', kcIds: ['tense.present_continuous.usage'], difficulty: 0,
      instruction: 'Traduis en anglais.', source: 'Nous travaillons sur un nouveau site web en ce moment.',
      accepted: ['We are working on a new website at the moment.', "We're working on a new website at the moment.", 'We are working on a new website right now.', "We're working on a new website right now.", 'We are currently working on a new website.', "We're currently working on a new website."],
      speak: 'We are working on a new website at the moment.',
      explanation: '« en ce moment » → at the moment / right now → present continuous.',
    },
    {
      ...base, id: 'a2-pc-1-10', type: 'mcq', kcIds: ['tense.contrast.simple_vs_continuous'], difficulty: 0,
      instruction: 'Choisis la bonne forme.', question: 'Water ___ at 100°C.',
      options: ['is boiling', 'boils', 'boil'], answer: 1, speak: 'Water boils at 100 degrees.',
      explanation: 'Vérité générale → present simple.',
    },
    {
      ...base, id: 'a2-pc-1-11', type: 'translate', direction: 'fr_en', kcIds: ['tense.contrast.simple_vs_continuous'], difficulty: 0.3,
      instruction: 'Traduis en anglais.', source: 'Il pleut. Il pleut souvent à Brest.',
      accepted: ["It's raining. It often rains in Brest.", 'It is raining. It often rains in Brest.'],
      speak: 'It’s raining. It often rains in Brest.',
      explanation: 'Maintenant → it’s raining. Habitude → it often rains.',
    },
    ...exercises('a2-pc-1-x', 'A2', { kc: 'tense.present_continuous.form', tense: 'present_continuous' })
      .listen('I’m sorry, I can’t talk now. I’m driving.', 'Pourquoi ne peut-il pas parler ?', ['Il conduit', 'Il dort', 'Il est en réunion'], 0,
        'I’m driving = je suis en train de conduire.')
      .dictation('They are waiting for the bus.', 'are + waiting. « wait for » = attendre.', { accepted: ['They are waiting for the bus.', "They're waiting for the bus."] })
      .repeat('What are you doing right now?', 'Question au present continuous : are + you + doing.')
      .say('Je travaille de chez moi aujourd’hui.', ["I'm working from home today", 'I am working from home today', "Today I'm working from home", 'Today I am working from home'],
        'Situation temporaire → present continuous.', { kc: 'tense.contrast.simple_vs_continuous' })
      .answer('Look around you. What are people doing right now?', 'My colleague is typing an email and two people are drinking coffee near the window.',
        'Décris des actions en cours : is / are + verbe-ing.', { keywords: [['is', 'are', "'s", "'re"]], minWords: 8 })
      .build(),
  ],
};
