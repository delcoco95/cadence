import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const CAUSE = 'it.b1.discourse.cause_consequence';
const CONTRAST = 'it.b1.discourse.contrast_concession';
const REP = 'it.b1.discourse.reported_statements';
const REPQ = 'it.b1.discourse.reported_questions';

export const discorso1: Lesson = {
  id: 'it-b1-discorso-1',
  cefr: 'B1',
  unitId: 'it-b1-discorso',
  title: 'Connecteurs : cause, conséquence, opposition',
  subtitle: 'perché, siccome, quindi, però, mentre, anche se',
  kcIds: [CAUSE, CONTRAST],
  estMinutes: 10,
  explanation: [
    {
      title: 'Cause et conséquence',
      table: [
        ['perché', 'parce que (et « pourquoi ? »)'],
        ['siccome', 'comme (en début de phrase)'],
        ['dato che · visto che', 'étant donné que · vu que'],
        ['quindi · perciò · per questo', 'donc · c’est pourquoi'],
        ['così · allora', 'alors, si bien que'],
      ],
      examples: [
        { en: 'Siccome pioveva, siamo rimasti a casa.', fr: 'Comme il pleuvait, nous sommes restés à la maison.' },
        { en: 'Ho studiato molto, quindi ho superato l’esame.', fr: 'J’ai beaucoup étudié, donc j’ai réussi l’examen.' },
      ],
      tip: '« Comme » causal en début de phrase = siccome, pas come : « Come pioveva… » ✗ → Siccome pioveva… ✓.',
    },
    {
      title: 'Opposition et concession',
      table: [
        ['ma · però', 'mais'],
        ['invece', 'en revanche, au contraire'],
        ['mentre', 'alors que ; pendant que'],
        ['anche se', 'même si (+ indicatif)'],
        ['comunque', 'de toute façon ; cependant'],
      ],
      examples: [
        { en: 'Io amo il mare, mentre mio fratello preferisce la montagna.', fr: 'Moi, j’aime la mer, alors que mon frère préfère la montagne.' },
        { en: 'Anche se è tardi, ti chiamo.', fr: 'Même s’il est tard, je t’appelle.' },
      ],
      tip: 'anche se se construit avec l’indicatif, comme « même si ». Ne le confonds pas avec sebbene / benché (bien que), qui demandent le subjonctif.',
    },
  ],
  exercises: exercises('it-b1-discorso-1', 'B1', { kc: CAUSE, tense: 'present' })
    .mcq('___ non avevo l’ombrello, mi sono bagnato tutto.', ['Siccome', 'Quindi', 'Anche se'], 0, 'Cause en début de phrase → siccome.', { d: -0.3 })
    .mcq('Mio fratello ama il mare, ___ io preferisco la montagna.', ['mentre', 'perché', 'quindi'], 0, 'Opposition entre deux personnes → mentre (alors que).', { kc: CONTRAST, d: -0.4 })
    .cloze('Il ristorante era pieno, ___ siamo andati in pizzeria.', ['quindi', 'perciò', 'così', 'allora', 'per questo'], 'Conséquence → quindi, perciò, così…', { d: -0.4 })
    .cloze('___ sono stanca, stasera esco con le amiche.', ['Anche se'], 'Concession → anche se + indicatif.', { kc: CONTRAST, hint: 'même si', d: -0.3 })
    .type('Traduis le connecteur « étant donné que » (deux mots).', ['dato che', 'visto che'], 'étant donné que = dato che / visto che.', { d: -0.2 })
    .type('Relie avec « anche se » : « Piove. Vado a correre. »', ['Anche se piove, vado a correre.', 'Vado a correre anche se piove.'], 'anche se + indicatif : anche se piove.', { kc: CONTRAST, d: -0.1 })
    .order('Il a beaucoup étudié, donc il a réussi l’examen.', 'Ha studiato molto, quindi ha superato l’esame.', 'quindi introduit la conséquence ; réussir un examen = superare un esame.', { distractors: ['perché'], d: -0.3 })
    .tr('Comme il faisait froid, nous sommes restés à la maison.', ['Siccome faceva freddo, siamo rimasti a casa.', 'Siccome faceva freddo, siamo rimaste a casa.', 'Siccome faceva freddo, siamo restati a casa.', 'Dato che faceva freddo, siamo rimasti a casa.', 'Visto che faceva freddo, siamo rimasti a casa.', 'Siamo rimasti a casa perché faceva freddo.'],
      'comme (cause) → siccome ; rester = rimanere.', { d: -0.1 })
    .tr('Le film était long, mais intéressant.', ['Il film era lungo, ma interessante.', 'Il film era lungo, però interessante.'], 'mais → ma / però.', { kc: CONTRAST, d: -0.5 })
    .listen('Volevo comprare quella giacca, però costava troppo, quindi ho preso un maglione.', 'Qu’a-t-elle acheté ?', ['Un pull', 'La veste', 'Rien'], 0,
      'però costava troppo, quindi ho preso un maglione = mais elle coûtait trop cher, donc j’ai pris un pull.', { kc: [CAUSE, CONTRAST], d: -0.2 })
    .listen('Io lavoro dalle nove alle cinque, mia moglie invece lavora di notte.', 'Quand sa femme travaille-t-elle ?', ['La nuit', 'De 9 h à 17 h', 'Le week-end'], 0,
      'invece = en revanche ; di notte = la nuit.', { kc: CONTRAST, d: -0.3 })
    .dictation('Visto che hai tempo, perché non mi aiuti?', 'visto che = vu que ; perché = pourquoi.', { d: -0.2 })
    .repeat('Anche se è difficile, non mi arrendo.', 'arrendo : r roulé, double r appuyé.', { kc: CONTRAST, d: -0.4 })
    .say('Je suis en retard parce que j’ai raté le bus.', ['Sono in ritardo perché ho perso l’autobus.', 'Sono in ritardo perché ho perso il bus.', 'Io sono in ritardo perché ho perso l’autobus.', 'Sono in ritardo perché ho perduto l’autobus.'],
      'rater le bus = perdere l’autobus ; parce que = perché.', { d: -0.3 })
    .answer('Ti piace la tua città? Spiega perché, con « perché », « però » o « anche se ».', 'Mi piace la mia città perché è tranquilla, però d’inverno è un po’ triste anche se ci sono tanti eventi.',
      'Relie tes idées : perché, quindi, però, anche se, mentre.',
      { kc: [CAUSE, CONTRAST], keywords: [['perché', 'siccome', 'dato che', 'visto che', 'quindi'], ['però', 'ma', 'anche se', 'invece', 'mentre']], minWords: 12, d: 0.1 })
    .build(),
};

export const discorso2: Lesson = {
  id: 'it-b1-discorso-2',
  cefr: 'B1',
  unitId: 'it-b1-discorso',
  title: 'Rapporter des paroles au présent',
  subtitle: 'dice che…, mi chiede se…, dice di…',
  kcIds: [REP, REPQ],
  estMinutes: 10,
  explanation: [
    {
      title: 'Rapporter une affirmation ou un ordre',
      body: 'Avec un verbe introducteur au présent (dice, scrive, racconta che…), le temps ne change pas, mais les personnes, les pronoms et les possessifs changent. Un ordre devient dire di + infinitif.',
      table: [
        ['« Sono stanco. »', 'Dice che è stanco.'],
        ['« Il mio treno è in ritardo. »', 'Dice che il suo treno è in ritardo.'],
        ['« Ti chiamo io. »', 'Dice che mi chiama lui.'],
        ['« Chiudi la porta! »', 'Mi dice di chiudere la porta.'],
      ],
      tip: 'Pour un ordre, dire di + infinitif, comme « il me dit de fermer ». Ne garde pas l’impératif : « Mi dice che chiudi la porta » ✗.',
    },
    {
      title: 'Rapporter une question',
      body: 'chiedere / domandare / voler sapere + se (question fermée) ou + mot interrogatif (dove, quando, perché, come, che cosa).',
      examples: [
        { en: '« Vieni? » → Mi chiede se vengo.', fr: '« Tu viens ? » → Il me demande si je viens.' },
        { en: '« Dove abiti? » → Mi domanda dove abito.', fr: '« Où habites-tu ? » → Il me demande où j’habite.' },
        { en: '« Che cosa fai? » → Vuole sapere che cosa faccio.', fr: '« Que fais-tu ? » → Il veut savoir ce que je fais.' },
      ],
      tip: 'Pas d’inversion ni de « est-ce que » : Mi chiede se ho fame. « Ce que » dans une question rapportée = che cosa / cosa.',
    },
  ],
  exercises: exercises('it-b1-discorso-2', 'B1', { kc: REP, tense: 'reported_speech' })
    .mcq('« Sono stanca. » → Giulia dice che ___ stanca.', ['è', 'sono', 'sei'], 0, 'io → lei : sono devient è.', { d: -0.5 })
    .mcq('« Hai fame? » → Mia madre mi chiede ___ ho fame.', ['se', 'che', 'cosa'], 0, 'Question fermée → chiedere se.', { kc: REPQ, d: -0.4 })
    .mcq('Que demande Paolo ?', ['Déplacer le dîner à dimanche', 'Annuler la fête', 'Faire la fête chez lui'], 0,
      'Mi chiede se possiamo spostare la cena a domenica = il me demande si nous pouvons déplacer le dîner à dimanche.',
      { kc: [REP, REPQ], passage: 'Messaggio di Luca a Sara: «Ciao Sara, sono Luca. Ti scrivo perché Paolo dice che sabato non può venire alla festa: ha un esame lunedì e vuole studiare. Mi chiede se possiamo spostare la cena a domenica. Per me va bene. Tu che cosa ne pensi? Fammi sapere!»', d: 0 })
    .cloze('« Chiudi la finestra! » → Il professore mi dice ___ chiudere la finestra.', ['di'], 'Ordre rapporté → dire di + infinitif.', { d: -0.2 })
    .type('Rapporte : « Dove abiti? » → Mi chiede…', ['Mi chiede dove abito.'], 'dove + verbe à la 1re personne : dove abito.', { kc: REPQ, d: -0.1 })
    .type('Complète : « Il mio treno è in ritardo. » → Marco dice che ___', ['il suo treno è in ritardo'], 'il mio → il suo (le train de Marco).', { d: 0 })
    .order('Elle veut savoir à quelle heure commence le film.', 'Vuole sapere a che ora comincia il film.', 'voler sapere + mot interrogatif, sans inversion.', { kc: REPQ, distractors: ['se'], d: -0.1 })
    .tr('Il me dit qu’il m’aime.', ['Mi dice che mi ama.', 'Dice che mi ama.', 'Lui mi dice che mi ama.', 'Mi dice che mi vuole bene.', 'Dice che mi vuole bene.'], 'dire che + indicatif ; m’aime = mi ama / mi vuole bene.', { d: -0.3 })
    .tr('Ils nous demandent si nous voulons dîner avec eux.', ['Ci chiedono se vogliamo cenare con loro.', 'Ci domandano se vogliamo cenare con loro.', 'Loro ci chiedono se vogliamo cenare con loro.'], 'chiedere se + indicatif ; avec eux = con loro.', { kc: REPQ, d: 0.1 })
    .listen('La guida dice di non toccare i quadri e di restare vicino al gruppo.', 'Que demande le guide ?', ['Ne pas toucher les tableaux et rester près du groupe', 'Prendre des photos', 'Attendre à la sortie'], 0,
      'dice di non toccare = il dit de ne pas toucher.', { d: -0.2 })
    .listen('Il cliente vuole sapere quando arriva il suo pacco e perché è in ritardo.', 'Que veut savoir le client ?', ['Quand son colis arrive et pourquoi il est en retard', 'Combien coûte la livraison', 'Où se trouve le magasin'], 0,
      'vuole sapere quando… e perché… = il veut savoir quand… et pourquoi…', { kc: REPQ, d: -0.1 })
    .dictation('Mi domanda sempre come sto.', 'domandare + come : question rapportée.', { kc: REPQ, d: -0.4 })
    .repeat('Anna scrive che è arrivata a Roma e che fa caldo.', 'scrive che… e che… : on répète che.', { d: -0.3 })
    .say('Elle me demande ce que je fais ce soir.', ['Mi chiede che cosa faccio stasera.', 'Mi chiede cosa faccio stasera.', 'Mi chiede che faccio stasera.', 'Mi domanda che cosa faccio stasera.', 'Mi domanda cosa faccio stasera.', 'Lei mi chiede che cosa faccio stasera.'],
      'ce que (question rapportée) → che cosa / cosa.', { kc: REPQ, d: 0 })
    .answer('Un amico ti ha mandato un messaggio. Riferisci che cosa dice e che cosa ti chiede.', 'Il mio amico dice che è in vacanza in Puglia e mi chiede se voglio raggiungerlo questo fine settimana.',
      'dice che… ; mi chiede se… / vuole sapere…',
      { kc: [REP, REPQ], keywords: [['dice', 'scrive', 'racconta'], ['chiede', 'domanda', 'vuole sapere']], minWords: 12, d: 0.3 })
    .build(),
};
