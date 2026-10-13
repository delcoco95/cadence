import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const REFL = 'it.a1.grammar.reflexive_verbs';
const FREQ = 'it.a1.function.frequency';
const PIACERE = 'it.a1.grammar.piacere';

export const daily1: Lesson = {
  id: 'it-a1-daily-1',
  cefr: 'A1',
  unitId: 'it-a1-daily',
  title: 'Ma journée : verbes pronominaux',
  subtitle: 'Mi sveglio, mi alzo… sempre, spesso, mai',
  kcIds: [REFL, FREQ],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les verbes pronominaux',
      body: 'Le pronom réfléchi se place devant le verbe conjugué. Verbes utiles : chiamarsi, svegliarsi, alzarsi, lavarsi, vestirsi, riposarsi, divertirsi.',
      table: [
        ['io mi alzo', 'je me lève'],
        ['tu ti alzi', 'tu te lèves'],
        ['lui / lei / Lei si alza', 'il / elle se lève · vous vous levez'],
        ['noi ci alziamo', 'nous nous levons'],
        ['voi vi alzate', 'vous vous levez'],
        ['loro si alzano', 'ils / elles se lèvent'],
      ],
      examples: [
        { en: 'Mi sveglio alle sette e mi alzo subito.', fr: 'Je me réveille à sept heures et je me lève tout de suite.' },
        { en: 'La domenica non ci alziamo presto.', fr: 'Le dimanche, nous ne nous levons pas tôt.' },
      ],
      tip: 'Avec noi et voi, le pronom change : ci alziamo, vi alzate (pas « si alziamo »). Et « se coucher » se dit le plus souvent andare a letto.',
    },
    {
      title: 'La fréquence',
      table: [
        ['sempre', 'toujours'],
        ['di solito', 'd’habitude'],
        ['spesso', 'souvent'],
        ['qualche volta · ogni tanto', 'parfois · de temps en temps'],
        ['raramente', 'rarement'],
        ['non… mai', 'ne… jamais'],
      ],
      body: 'Ces adverbes se placent en général après le verbe ; di solito et qualche volta peuvent ouvrir la phrase.',
      examples: [
        { en: 'Faccio sempre colazione al bar.', fr: 'Je prends toujours mon petit-déjeuner au bar.' },
        { en: 'Non bevo mai caffè la sera.', fr: 'Je ne bois jamais de café le soir.' },
      ],
      tip: '« Je ne… jamais » = non + verbe + mai. Le non est obligatoire : « Mangio mai carne » ✗ → « Non mangio mai carne » ✓.',
    },
  ],
  exercises: exercises('it-a1-daily-1', 'A1', { kc: REFL, tense: 'present' })
    .mcq('Io ___ alle sette.', ['mi alzo', 'mi alza', 'si alzo'], 0, 'io → mi alzo.', { d: -2.0 })
    .mcq('In montagna noi ___ molto.', ['ci divertiamo', 'si divertiamo', 'vi divertite'], 0, 'noi → ci + divertiamo.', { d: -1.7 })
    .cloze('Come ___ chiami?', ['ti'], 'tu → ti chiami.', { d: -2.5 })
    .cloze('Non bevo ___ alcol.', ['mai'], 'non… mai = ne… jamais.', { kc: FREQ, hint: 'jamais', d: -1.9 })
    .type('Conjugue « svegliarsi » avec « loro ».', ['si svegliano', 'loro si svegliano'], 'loro → si svegliano (accent sur SVE).', { d: -1.6 })
    .type('Comment dit-on « souvent » ?', ['spesso'], 'spesso = souvent.', { kc: FREQ, d: -2.2 })
    .order('Je me lève toujours à sept heures.', 'Mi alzo sempre alle sette.', 'Pronom + verbe, puis l’adverbe de fréquence.', { kc: [REFL, FREQ], distractors: ['mai'], d: -1.8 })
    .tr('D’habitude, je me couche à onze heures.', ['Di solito vado a letto alle undici.', 'Di solito alle undici vado a letto.', 'Di solito vado a dormire alle undici.', 'Di solito mi corico alle undici.'],
      'se coucher = andare a letto, plus courant que coricarsi.', { kc: FREQ, d: -1.6 })
    .tr('Tu t’habilles vite ?', ['Ti vesti in fretta?', 'Tu ti vesti in fretta?', 'Ti vesti velocemente?', 'Ti vesti veloce?'], 'tu → ti vesti.', { d: -1.7 })
    .listen('La mattina mi sveglio alle sei e mezza, ma mi alzo alle sette.', 'À quelle heure se lève-t-elle ?', ['7 h', '6 h 30', '6 h'], 0,
      'mi sveglio = je me réveille (6 h 30) ; mi alzo = je me lève (7 h).', { d: -1.8 })
    .listen('Qualche volta vado in palestra, ma non nuoto mai.', 'Que ne fait-il jamais ?', ['Nager', 'Aller à la salle de sport', 'Courir'], 0,
      'non nuoto mai = je ne nage jamais.', { kc: FREQ, d: -1.7 })
    .dictation('Ci laviamo e ci vestiamo in fretta.', 'noi → ci laviamo, ci vestiamo.', { d: -1.6 })
    .repeat('Mi sveglio, mi alzo, mi lavo e mi vesto.', 'glio = « lyo » : sveglio se dit « zvélyo ».', { d: -2.0 })
    .say('Je m’amuse beaucoup !', ['Mi diverto molto!', 'Mi diverto tanto!', 'Mi sto divertendo molto!'], 'divertirsi → mi diverto.', { d: -1.8 })
    .say('Je ne regarde jamais la télé.', ['Non guardo mai la televisione.', 'Non guardo mai la tv.', 'Non guardo mai la tivù.', 'Io non guardo mai la televisione.'],
      'non + guardo + mai.', { kc: FREQ, d: -1.8 })
    .build(),
};

export const daily2: Lesson = {
  id: 'it-a1-daily-2',
  cefr: 'A1',
  unitId: 'it-a1-daily',
  title: 'Piacere : dire ce qu’on aime',
  subtitle: 'Mi piace, mi piacciono, anche a me',
  kcIds: [PIACERE, FREQ],
  estMinutes: 9,
  explanation: [
    {
      title: 'Mi piace, mi piacciono',
      body: 'Piacere fonctionne comme « plaire » : ce qu’on aime est le sujet. Singulier ou infinitif → piace ; pluriel → piacciono.',
      table: [
        ['mi piace', 'j’aime (ça me plaît)'],
        ['ti piace', 'tu aimes'],
        ['gli piace · le piace · Le piace', 'il aime · elle aime · vous aimez (vouvoiement)'],
        ['ci piace · vi piace', 'nous aimons · vous aimez'],
        ['gli piace', 'ils / elles aiment'],
        ['a Marco piace…', 'Marco aime…'],
      ],
      examples: [
        { en: 'Mi piace la pizza.', fr: 'J’aime la pizza.' },
        { en: 'Mi piacciono i gatti.', fr: 'J’aime les chats.' },
        { en: 'A Luca piace viaggiare.', fr: 'Luca aime voyager.' },
        { en: 'Non mi piace il caffè.', fr: 'Je n’aime pas le café.' },
      ],
      tip: 'Ne dis pas « Io piaccio i gatti » : ce serait « je plais aux chats » ! On dit Mi piacciono i gatti. Amare s’emploie surtout pour les personnes (Ti amo).',
    },
    {
      title: 'Réagir',
      table: [
        ['Anche a me.', 'Moi aussi. (j’aime aussi)'],
        ['Neanche a me.', 'Moi non plus.'],
        ['A me sì. · A me no.', 'Moi si. · Moi non.'],
      ],
      tip: 'Avec piacere, « moi aussi » se dit Anche a me, pas « Anch’io ».',
    },
  ],
  exercises: exercises('it-a1-daily-2', 'A1', { kc: PIACERE, tense: 'present' })
    .mcq('Mi ___ gli spaghetti.', ['piacciono', 'piace', 'piaccio'], 0, 'gli spaghetti est pluriel → piacciono.', { d: -1.9 })
    .cloze('A Giulia ___ molto leggere.', ['piace'], 'Infinitif → piace.', { d: -1.8 })
    .cloze('___ piace la pizza? — Sì, ci piace tanto!', ['Vi'], 'La réponse est ci (à nous) : la question s’adresse à vous → vi.', { d: -1.6 })
    .mcq('Qu’est-ce que Davide aime faire le soir ?', ['Cuisiner pour ses amis', 'Regarder la télévision', 'Aller au cinéma'], 0,
      'La sera mi piace cucinare per gli amici = le soir, j’aime cuisiner pour mes amis.',
      { kc: [PIACERE, FREQ], passage: 'Ciao! Mi chiamo Davide e ho trent’anni. Di solito mi alzo alle sette e vado al lavoro in bicicletta. La sera mi piace cucinare per gli amici. Mi piacciono molto i film italiani, ma non guardo mai la televisione. Il sabato faccio sempre una passeggiata al mare.', d: -1.7 })
    .type('Complète : « Non ___ piacciono i film dell’orrore. » (à moi)', ['mi'], 'à moi → mi.', { d: -2.0 })
    .type('Complète : « ___ piace il calcio. » (à lui, un seul mot)', ['gli'], 'à lui → gli.', { d: -1.6 })
    .order('Tu aimes les chats ?', 'Ti piacciono i gatti?', 'i gatti est pluriel → piacciono.', { distractors: ['piace'], d: -1.8 })
    .tr('Je n’aime pas le café.', ['Non mi piace il caffè.', 'A me non piace il caffè.', 'Il caffè non mi piace.'], 'non + mi piace + singulier.', { d: -1.8 })
    .tr('Nous aimons beaucoup voyager.', ['Ci piace molto viaggiare.', 'Ci piace tanto viaggiare.', 'A noi piace molto viaggiare.', 'Amiamo viaggiare.'],
      'ci piace + infinitif.', { d: -1.7 })
    .listen('Mi piace molto il mare, ma non mi piacciono le spiagge affollate.', 'Qu’est-ce qu’elle n’aime pas ?', ['Les plages bondées', 'La mer', 'Le soleil'], 0,
      'non mi piacciono le spiagge affollate = je n’aime pas les plages bondées.', { d: -1.7 })
    .listen('A mio fratello piace il calcio, a me no: preferisco il tennis.', 'Quel sport préfère la personne qui parle ?', ['Le tennis', 'Le football', 'La natation'], 0,
      'a me no = moi non ; preferisco il tennis.', { d: -1.7 })
    .dictation('Ci piacciono molto le canzoni italiane.', 'le canzoni est pluriel → piacciono.', { d: -1.6 })
    .repeat('Mi piace la pizza e mi piacciono gli gnocchi.', 'piacciono : cc + io = « tch » appuyé, « piatchono ».', { d: -1.9 })
    .say('Moi aussi ! (en réponse à « Mi piace il gelato! »)', ['Anche a me!', 'Anche a me piace!'], 'Avec piacere : anche a me.', { d: -1.9 })
    .say('J’aime les langues étrangères.', ['Mi piacciono le lingue straniere.', 'A me piacciono le lingue straniere.'], 'Pluriel → mi piacciono.', { d: -1.7 })
    .build(),
};
