import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const DISL = 'it.c1.grammar.dislocation';
const FOCUS = 'it.c1.grammar.marked_order';
const CLEFT = 'it.c1.grammar.cleft_sentences';

export const enfasi1: Lesson = {
  id: 'it-c1-enfasi-1',
  cefr: 'C1',
  unitId: 'it-c1-enfasi',
  title: 'Dislocations et sujet postposé',
  subtitle: 'Il caffè lo prendo amaro, pago io',
  kcIds: [DISL, FOCUS],
  estMinutes: 11,
  explanation: [
    {
      title: 'La dislocation avec reprise',
      body: 'On détache un complément en tête (ou en fin) de phrase, et on le reprend par un pronom clitique. C’est très fréquent à l’oral et dans l’écrit expressif.',
      examples: [
        { en: 'Il caffè lo prendo amaro.', fr: 'Le café, je le prends sans sucre.' },
        { en: 'Le chiavi le ho lasciate sul tavolo.', fr: 'Les clés, je les ai laissées sur la table.' },
        { en: 'Di soldi non ne ho.', fr: 'De l’argent, je n’en ai pas.' },
        { en: 'A Roma ci vado domani.', fr: 'À Rome, j’y vais demain.' },
        { en: 'Lo conosci, Marco?', fr: 'Tu le connais, Marco ?' },
      ],
      tip: 'Même mécanisme qu’en français. Mais un COD placé en tête SANS pronom de reprise devient un contraste fort : IL CAFFÈ prendo, non il tè. Avec un partitif, ne est obligatoire : di amici ne ho pochi. Le participe s’accorde avec le pronom : le chiavi le ho lasciate.',
    },
    {
      title: 'Le sujet après le verbe',
      table: [
        ['C’est moi qui paie.', 'Pago io.'],
        ['C’est lui qui l’a dit.', 'L’ha detto lui.'],
        ['Qui vient ? — C’est Marta.', 'Chi viene? — Viene Marta.'],
        ['Le colis est arrivé. (info nouvelle)', 'È arrivato il pacco.'],
        ['Ça, c’est un vrai problème !', 'Questo sì che è un problema!'],
      ],
      tip: 'Là où le français utilise « c’est… qui », l’italien se contente souvent de placer le sujet après le verbe : pago io est plus naturel que sono io che pago.',
    },
  ],
  exercises: exercises('it-c1-enfasi-1', 'C1', { kc: DISL })
    .mcq('La pasta, ___ compro sempre al mercato.', ['la', 'lo', 'ne'], 0,
      'Reprise de la pasta (féminin singulier) → la.', { d: 1.4 })
    .mcq('Di libri, in casa mia ___ sono tantissimi.', ['ce ne', 'ci', 'li'], 0,
      'Partitif repris par ne, avec esserci → ce ne sono.', { d: 1.7 })
    .cloze('I documenti, ___ hai già spediti?', ['li'],
      'Reprise de i documenti → li (et accord : spediti).', { hint: 'pronom', d: 1.5 })
    .cloze('Tranquillo, stasera offro ___.', ['io'],
      'Sujet postposé = focalisation : offro io (c’est moi qui offre).', { kc: FOCUS, hint: 'c’est moi qui…', d: 1.5 })
    .type('« Des amis, j’en ai peu. » → « Di amici, ___ ho pochi. »', ['ne'],
      'Partitif disloqué → reprise obligatoire par ne.', { d: 1.5 })
    .type('« C’est lui qui l’a dit, pas moi. » → « L’ha detto ___, non io. »', ['lui'],
      'Sujet postposé pour la focalisation : l’ha detto lui.', { kc: FOCUS, d: 1.4 })
    .order('Ce film, je l’ai déjà vu deux fois.', 'Questo film l’ho già visto due volte.',
      'Dislocation à gauche : questo film… l’ho visto.', { distractors: ['lo', 'ne'], d: 1.5 })
    .tr('Ton frère, je ne l’ai pas vu depuis des années.',
      ['Tuo fratello non lo vedo da anni.', 'Tuo fratello non lo vedo da tanti anni.', 'Tuo fratello non lo vedo da molti anni.',
        'Tuo fratello sono anni che non lo vedo.', 'Non vedo tuo fratello da anni.', 'Sono anni che non vedo tuo fratello.'],
      'Dislocation + reprise lo ; « depuis » avec une négation → présent : non lo vedo da anni.', { d: 1.8 })
    .tr('C’est moi qui paie ce soir.',
      ['Stasera pago io.', 'Pago io stasera.', 'Stasera offro io.', 'Offro io stasera.', 'Sono io che pago stasera.', 'Stasera sono io che pago.', 'Stasera tocca a me pagare.'],
      'Focalisation par le sujet postposé : pago io.', { kc: FOCUS, d: 1.5 })
    .listen('Il vino rosso, sinceramente, non lo bevo quasi mai: preferisco il bianco.', 'Che cosa preferisce chi parla?',
      ['Il vino bianco', 'Il vino rosso', 'La birra'], 0,
      'Il vino rosso… non lo bevo : dislocation.', { d: 1.4 })
    .listen('Chi ha rotto il vaso? — Non guardare me: è stato il gatto, l’ho visto io!', 'Chi ha rotto il vaso?',
      ['Il gatto', 'Chi parla', 'Nessuno, è caduto da solo'], 0,
      'l’ho visto io : sujet postposé, insistance sur le témoin.', { kc: FOCUS, d: 1.5 })
    .dictation('Di questa storia non ne voglio più sentir parlare.',
      'Complément en di repris par ne.', { d: 1.7 })
    .repeat('Questo sì che è un bel problema!',
      'sì che renforce l’affirmation.', { kc: FOCUS, d: 1.4 })
    .say('Les clés, je les ai laissées sur la table.',
      ['Le chiavi le ho lasciate sul tavolo', 'Le chiavi le ho lasciate sulla tavola', 'Ho lasciato le chiavi sul tavolo', 'Ho lasciato le chiavi sulla tavola'],
      'Reprise le + accord du participe : le ho lasciate.', { d: 1.5 })
    .answer('Che cosa pensi del caffè, del tè e della cioccolata? Rispondi usando delle dislocazioni (per esempio: il caffè lo bevo…).',
      'Il caffè lo bevo ogni mattina, il tè invece lo prendo solo quando sono raffreddato, e la cioccolata calda la preparo d’inverno per i miei nipoti.',
      'Dislocation + pronom de reprise : il caffè lo bevo, la cioccolata la preparo.',
      { keywords: [['lo', 'la', 'li', 'le', 'ne']], minWords: 18, d: 1.8 })
    .build(),
};

export const enfasi2: Lesson = {
  id: 'it-c1-enfasi-2',
  cefr: 'C1',
  unitId: 'it-c1-enfasi',
  title: 'Les phrases clivées',
  subtitle: 'È stato lui a, sono io che, quello che conta è',
  kcIds: [CLEFT],
  estMinutes: 12,
  explanation: [
    {
      title: 'È… che et è… a + infinitif',
      table: [
        ['È Marco che ha chiamato.', 'C’est Marco qui a appelé.'],
        ['È stato Marco a chiamare.', 'idem, forme implicite très italienne'],
        ['Sei tu a dover decidere.', 'C’est toi qui dois décider.'],
        ['È qui che abito.', 'C’est ici que j’habite.'],
        ['È per questo che sono venuto.', 'C’est pour cela que je suis venu.'],
        ['È da tre anni che vivo qui.', 'Cela fait trois ans que je vis ici.'],
      ],
      tip: 'Essere s’accorde avec l’élément mis en relief : sono io che…, sei tu a…, siamo stati noi a…, sono stati i vicini a… Ne dis jamais « è io che » sur le modèle de « c’est moi qui ».',
    },
    {
      title: 'Pseudo-clivées et autres tours',
      table: [
        ['Quello che / ciò che mi preoccupa è il tempo.', 'Ce qui m’inquiète, c’est le temps.'],
        ['Chi ha ragione è lei.', 'Celle qui a raison, c’est elle.'],
        ['Se c’è una cosa che odio, è…', 'S’il y a une chose que je déteste, c’est…'],
        ['Non è che + subj., è che…', 'Ce n’est pas que…, c’est que…'],
      ],
      tip: '« Ce qui me plaît, c’est… » → quello che mi piace è… : un seul è, sans reprendre « c’est » une deuxième fois.',
    },
  ],
  exercises: exercises('it-c1-enfasi-2', 'C1', { kc: CLEFT })
    .mcq('___ stati i vicini a chiamare la polizia.', ['Sono', 'È', 'Hanno'], 0,
      'essere s’accorde avec l’élément focalisé (i vicini) : sono stati.', { d: 1.6 })
    .mcq('Secondo il testo, che cosa rese famoso Marconi?',
      ['La capacità di trasformare scoperte altrui in un sistema funzionante', 'La scoperta delle onde elettromagnetiche', 'Il fatto di aver lavorato da solo'], 0,
      '« È proprio questa capacità pratica che lo rese famoso. »',
      {
        kc: [CLEFT, DISL],
        d: 1.8,
        passage:
          'Molti pensano che sia stato Marconi, da solo, a inventare la radio. In realtà, quello che fece Marconi fu soprattutto mettere insieme scoperte altrui e trasformarle in un sistema funzionante. È proprio questa capacità pratica che lo rese famoso. Le onde elettromagnetiche, infatti, le aveva già studiate Hertz qualche anno prima, e altri scienziati lavoravano allo stesso problema.',
      })
    .cloze('___ io che devo chiedere scusa, non tu.', ['Sono'],
      'Accord de essere avec io : sono io che…', { d: 1.5 })
    .cloze('Quello che mi preoccupa ___ la mancanza di tempo.', ['è'],
      'Pseudo-clivée : quello che… è…', { d: 1.4 })
    .type('« C’est pour cela que je suis venu. » → « È per ___ che sono venuto. »', ['questo', 'ciò'],
      'è per questo che = c’est pour cela que.', { d: 1.5 })
    .type('« C’est toi qui dois choisir. » → « ___ tu a dover scegliere. »', ['Sei'],
      'Clivée implicite : sei tu a + infinitif.', { d: 1.6 })
    .order('Cela fait trois ans que je vis à Bologne.', 'È da tre anni che vivo a Bologna.',
      'è da + durée + che = cela fait… que.', { distractors: ['fa', 'ci'], d: 1.6 })
    .tr('C’est Paolo qui a gagné la course.',
      ['È stato Paolo a vincere la gara.', 'È stato Paolo a vincere la corsa.', 'È Paolo che ha vinto la gara.', 'È Paolo che ha vinto la corsa.',
        'È stato Paolo che ha vinto la gara.', 'La gara l’ha vinta Paolo.', 'La corsa l’ha vinta Paolo.'],
      'È stato Paolo a vincere (clivée implicite) ou È Paolo che ha vinto.', { d: 1.6 })
    .tr('Ce qui m’étonne, c’est son silence.',
      ['Quello che mi stupisce è il suo silenzio.', 'Ciò che mi stupisce è il suo silenzio.', 'Quel che mi stupisce è il suo silenzio.',
        'Quello che mi sorprende è il suo silenzio.', 'Ciò che mi sorprende è il suo silenzio.', 'Quel che mi sorprende è il suo silenzio.',
        'Quello che mi meraviglia è il suo silenzio.', 'Ciò che mi meraviglia è il suo silenzio.'],
      'Pseudo-clivée : quello che / ciò che… è (un seul è).', { d: 1.7 })
    .listen('Non è che non mi piaccia il tuo progetto: è che in questo momento non abbiamo i fondi per realizzarlo.', 'Perché il progetto non si farà?',
      ['Per mancanza di soldi', 'Perché non piace', 'Perché è arrivato in ritardo'], 0,
      'non è che + congiuntivo… è che… : ce n’est pas que…, c’est que…', { d: 1.6 })
    .listen('Se c’è una cosa che non sopporto, è la gente che parla al telefono al cinema.', 'Che cosa dà fastidio a chi parla?',
      ['Chi telefona durante il film', 'I film troppo lunghi', 'Il prezzo del biglietto'], 0,
      'se c’è una cosa che…, è… : mise en relief.', { d: 1.5 })
    .dictation('Sono stati proprio i dipendenti a proporre la riduzione dell’orario.',
      'Clivée implicite avec accord : sono stati i dipendenti a proporre.', { d: 1.8 })
    .repeat('È qui che ci siamo conosciuti, vent’anni fa.',
      'Clivée de lieu : è qui che…', { d: 1.5 })
    .say('C’est nous qui avons organisé la fête.',
      ['Siamo noi che abbiamo organizzato la festa', 'Siamo stati noi a organizzare la festa', 'Siamo state noi a organizzare la festa',
        'Siamo stati noi ad organizzare la festa', 'Siamo state noi ad organizzare la festa', 'Siamo noi ad aver organizzato la festa',
        'La festa l’abbiamo organizzata noi', 'Abbiamo organizzato noi la festa'],
      'Accord de essere : siamo (stati) noi a / che…', { d: 1.8 })
    .answer('Qual è la cosa che apprezzi di più nella tua città e quale quella che ti dà più fastidio?',
      'Quello che apprezzo di più è la vita nei quartieri, mentre ciò che mi dà più fastidio è il traffico: è per questo che mi sposto quasi sempre in bicicletta.',
      'Pseudo-clivées (quello che… è) et clivée (è per questo che).',
      { keywords: [['quello', 'ciò', 'quel']], minWords: 18, d: 1.9 })
    .build(),
};
