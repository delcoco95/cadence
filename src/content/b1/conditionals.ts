import type { Lesson } from '../types';
import { exercises } from '../builders';

const ZERO = 'b1.grammar.conditional.zero';
const FIRST = 'b1.grammar.conditional.first';
const UNLESS = 'b1.grammar.conditional.unless';
const SECOND = 'b1.grammar.conditional.second';
const FVS = 'b1.grammar.conditional.first_vs_second';

export const conditionals1: Lesson = {
  id: 'b1-conditionals-1',
  cefr: 'B1',
  unitId: 'b1-conditionals',
  title: 'Conditionnels zéro et premier · unless',
  subtitle: 'If it rains, we’ll stay at home',
  kcIds: [ZERO, FIRST, UNLESS],
  estMinutes: 8,
  explanation: [
    {
      title: 'Zéro et premier conditionnel',
      table: [
        ['zéro : vérité générale', 'If + présent, présent : If you heat ice, it melts.'],
        ['premier : situation réelle et possible', 'If + présent, will : If it rains, we’ll stay at home.'],
        ['premier avec impératif', 'If you need help, call me.'],
      ],
      examples: [
        { en: 'If I drink coffee at night, I can’t sleep.', fr: 'Si je bois du café le soir, je n’arrive pas à dormir.' },
        { en: 'If you leave now, you’ll catch the train.', fr: 'Si tu pars maintenant, tu auras le train.' },
      ],
      tip: 'Jamais de will après if : « If it will rain » ✗ → « If it rains » ✓. Comme en français : « si il pleuvra » ✗.',
    },
    {
      title: 'unless = if… not',
      examples: [
        { en: 'We’ll be late unless we take a taxi.', fr: 'Nous serons en retard à moins de prendre un taxi.' },
        { en: 'I don’t drink coffee unless I’m really tired.', fr: 'Je ne bois pas de café, sauf si je suis vraiment {fatigué|fatiguée}.' },
      ],
      tip: 'unless est déjà négatif : « unless you don’t hurry » ✗ → « unless you hurry » ✓.',
    },
  ],
  exercises: exercises('b1-conditionals-1', 'B1', { kc: FIRST, tense: 'conditional' })
    .mcq('If you heat ice, it ___.', ['melts', 'melted', 'melting'], 0, 'Vérité générale → if + présent, présent.', { kc: ZERO, d: -0.4 })
    .cloze('If I ___ too much coffee, I can’t sleep.', ['drink'], 'Généralité → présent dans les deux propositions.', { kc: ZERO, hint: 'drink', d: -0.4 })
    .cloze('If it ___ tomorrow, we’ll cancel the picnic.', ['rains'], 'Pas de will après if : if it rains.', { hint: 'rain', d: -0.4 })
    .mcq('If you leave now, you ___ the train.', ['’ll catch', 'caught', 'would caught'], 0, 'Situation réelle → if + présent, will.', { d: -0.3 })
    .order('Si tu as besoin d’aide, appelle-moi.', 'If you need help, call me.', 'If + présent, puis un impératif.', { distractors: ['will'], d: -0.1 })
    .mcq('You won’t pass the exam ___ you study harder.', ['unless', 'if', 'when'], 0, 'unless = à moins que, sauf si.', { kc: UNLESS, d: -0.1 })
    .cloze('We’ll be late ___ we take a taxi.', ['unless'], 'Sauf si nous prenons un taxi → unless.', { kc: UNLESS, d: 0.1 })
    .type('Réécris avec unless : If you don’t hurry, you’ll miss the bus.', ["Unless you hurry, you'll miss the bus.", 'Unless you hurry, you will miss the bus.', "You'll miss the bus unless you hurry.", 'You will miss the bus unless you hurry.'],
      'if you don’t hurry = unless you hurry (sans négation).', { kc: UNLESS, loose: true, d: 0.5 })
    .tr('Si tu chauffes l’eau à 100 degrés, elle bout.', ['If you heat water to 100 degrees, it boils.', 'If you heat water to a hundred degrees, it boils.', 'If you heat water to one hundred degrees, it boils.', 'Water boils if you heat it to 100 degrees.', 'If you heat water to 100 degrees, it will boil.'],
      'Vérité scientifique → conditionnel zéro.', { kc: ZERO, d: 0.3 })
    .tr('Si je finis tôt, je passerai te voir.', ["If I finish early, I'll come and see you.", 'If I finish early, I will come and see you.', "If I finish early, I'll come to see you.", "If I finish early, I'll drop by.", "If I finish early, I'll come by.", "If I finish early, I'll stop by.", "If I finish early, I'll visit you.", "I'll come and see you if I finish early."],
      'if + présent, will.', { d: 0.4 })
    .listen('If you don’t book a table, you won’t get in on a Saturday night.', 'Que conseille-t-elle ?', ['Réserver une table', 'Venir un autre jour', 'Arriver tôt'], 0,
      'Sinon, on n’entre pas le samedi soir → il faut réserver.', { d: -0.1 })
    .listen('We’ll have the meeting outside unless it rains.', 'Dans quel cas la réunion sera-t-elle à l’intérieur ?', ['S’il pleut', 'S’il fait beau', 'Jamais'], 0,
      'unless it rains = sauf s’il pleut.', { kc: UNLESS, d: 0.2 })
    .dictation('If you press this button, the machine stops.', 'Fonctionnement d’une machine → conditionnel zéro.', { kc: ZERO, d: 0 })
    .say('S’il fait beau demain, on ira à la plage.', ["If it's sunny tomorrow, we'll go to the beach", 'If it is sunny tomorrow, we will go to the beach', "If the weather is nice tomorrow, we'll go to the beach", "If the weather's nice tomorrow, we'll go to the beach", "If it's nice tomorrow, we'll go to the beach", "If the weather is good tomorrow, we'll go to the beach"],
      'if + présent, will.', { d: 0.3 })
    .answer('What will you do if it rains this weekend?', 'If it rains this weekend, I will stay at home and watch a series.', 'If it rains, I will…', { keywords: [['if', 'unless'], ['will']], minWords: 10, d: 0.5 })
    .build(),
};

export const conditionals2: Lesson = {
  id: 'b1-conditionals-2',
  cefr: 'B1',
  unitId: 'b1-conditionals',
  title: 'Deuxième conditionnel',
  subtitle: 'If I won the lottery, I would…',
  kcIds: [SECOND, FVS],
  estMinutes: 8,
  explanation: [
    {
      title: 'Imaginer',
      body: 'If + prétérit, would + base : une situation imaginaire ou peu probable, au présent ou au futur.',
      table: [
        ['hypothèse', 'If I had more time, I would learn Italian.'],
        ['conseil', 'If I were you, I’d talk to her.'],
        ['question', 'What would you do if you lost your job?'],
      ],
      examples: [
        { en: 'If I lived by the sea, I’d go swimming every day.', fr: 'Si j’habitais au bord de la mer, j’irais nager tous les jours.' },
        { en: 'If I were you, I wouldn’t accept.', fr: 'À ta place, je n’accepterais pas.' },
      ],
      tip: 'Comme en français (« si j’avais… je ferais »), pas de conditionnel après if : « If I would have » ✗ → « If I had » ✓.',
    },
    {
      title: 'Réel ou imaginaire ?',
      table: [
        ['possible, probable', 'If I get the job, I’ll celebrate. (j’ai un entretien)'],
        ['imaginaire, peu probable', 'If I got a job in Japan, I’d learn Japanese. (pure hypothèse)'],
      ],
      tip: 'If I were you est la forme standard du conseil ; If I was you s’entend à l’oral.',
    },
  ],
  exercises: exercises('b1-conditionals-2', 'B1', { kc: SECOND, tense: 'conditional' })
    .cloze('If I ___ more time, I’d learn the guitar.', ['had'], 'Hypothèse → if + prétérit.', { hint: 'have', d: -0.3 })
    .cloze('If she lived closer, we ___ see each other more often.', ['would', "'d", 'could'], 'Principale → would (ou could) + base.', { d: -0.3 })
    .mcq('If I ___ you, I’d talk to your manager.', ['were', 'am', 'would be'], 0, 'Conseil → If I were you.', { d: -0.2 })
    .mcq('What would you do if you ___ the lottery?', ['won', 'win', 'would win'], 0, 'if + prétérit : won.', { d: -0.3 })
    .mcq('If I find your keys, I ___ you.', ["'ll text", "'d text", 'texted'], 0, 'if + présent (find) → situation réelle → will.', { kc: FVS, d: 0.2 })
    .mcq('Quelle phrase exprime une situation imaginaire ?', ['If I spoke Chinese, I would work in Shanghai.', 'If I speak to Tom, I’ll tell him.', 'If you mix blue and yellow, you get green.'], 0,
      'if + prétérit, would → hypothèse.', { kc: FVS, d: 0.3 })
    .order('Que ferais-tu à ma place ?', 'What would you do if you were me?', 'What would you do + if you were me?', { distractors: ['will'], d: 0.2 })
    .type('Écris au deuxième conditionnel : I don’t have a car, so I can’t drive to work. (If…)', ['If I had a car, I could drive to work.', 'If I had a car, I would drive to work.', "If I had a car, I'd drive to work."],
      'Situation contraire à la réalité → If I had…, I could / would…', { loose: true, d: 0.6 })
    .tr('Si j’étais riche, j’achèterais une maison au bord de la mer.', ['If I were rich, I would buy a house by the sea.', "If I were rich, I'd buy a house by the sea.", 'If I was rich, I would buy a house by the sea.', "If I was rich, I'd buy a house by the sea.", 'If I were rich, I would buy a house at the seaside.', "If I were rich, I'd buy a house at the seaside.", 'If I were rich, I would buy a house on the coast.', "If I were rich, I'd buy a house on the coast."],
      'if + prétérit (were), would + base.', { d: 0.4 })
    .tr('Si tu le lui demandais, il t’aiderait.', ['If you asked him, he would help you.', "If you asked him, he'd help you.", 'He would help you if you asked him.', "He'd help you if you asked him."],
      'if + prétérit, would + base.', { d: 0.5 })
    .listen('If I didn’t have to work tomorrow, I’d stay at the party longer.', 'Pourquoi part-il tôt ?', ['Il travaille demain', 'Il s’ennuie à la fête', 'Il est malade'], 0,
      'If I didn’t have to work = si je ne devais pas travailler (mais il doit).', { d: 0 })
    .listen('If the tickets are still available, I’ll buy two.', 'Que va-t-elle faire ?', ['Acheter deux billets s’il en reste', 'Rien, elle a déjà ses billets', 'Elle n’achètera pas de billets'], 0,
      'if + présent, will → situation réelle.', { kc: FVS, d: 0.1 })
    .mcq('Quelle est la situation de l’auteur ?', ['Il n’a pas encore décidé d’accepter', 'Il a déjà déménagé à Montréal', 'Il a refusé l’offre'], 0,
      'If I accepted… / if I left… : il imagine les deux options, il n’a pas décidé.',
      { passage: 'Forum post:\nMy company has offered me a job in Montreal. If I accepted, I would earn more and I’d finally live abroad. But if I left, I would miss my family a lot. What would you do in my position?', d: 0.3 })
    .say('Si j’avais le temps, je voyagerais plus.', ['If I had time, I would travel more', "If I had time, I'd travel more", 'If I had the time, I would travel more', "If I had the time, I'd travel more", 'If I had more time, I would travel more'],
      'if + prétérit, would + base.', { d: 0.3 })
    .answer('If you could live in any country, where would you live and why?', 'If I could live in any country, I would live in Canada because I love nature and the people are friendly.',
      'If I could…, I would…', { keywords: [['would']], minWords: 12, d: 0.7 })
    .build(),
};
