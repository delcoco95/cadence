import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const PAST = 'it.b2.grammar.subjunctive_past';
const IMPF = 'it.b2.grammar.subjunctive_imperfect';
const PLUP = 'it.b2.grammar.subjunctive_pluperfect';
const SEQ = 'it.b2.grammar.sequence_of_tenses';

export const congiuntivo1: Lesson = {
  id: 'it-b2-congiuntivo-1',
  cefr: 'B2',
  unitId: 'it-b2-congiuntivo',
  title: 'Congiuntivo passato et imperfetto',
  subtitle: 'Penso che sia partito, volevo che tu venissi',
  kcIds: [PAST, IMPF],
  estMinutes: 9,
  explanation: [
    {
      title: 'Le congiuntivo passato : une action déjà accomplie',
      body: 'Subjonctif présent de avere ou essere + participe passé. On l’emploie quand la principale est au présent et que l’action de la subordonnée est antérieure.',
      table: [
        ['io / tu / lui, lei', 'abbia parlato', 'sia partito / partita'],
        ['noi', 'abbiamo parlato', 'siamo partiti / partite'],
        ['voi', 'abbiate parlato', 'siate partiti / partite'],
        ['loro', 'abbiano parlato', 'siano partiti / partite'],
      ],
      examples: [
        { en: 'Penso che Marco sia già partito.', fr: 'Je pense que Marco est déjà parti.' },
        { en: 'Mi dispiace che tu non abbia potuto venire.', fr: 'Je regrette que tu n’aies pas pu venir.' },
      ],
      tip: 'Après penso che, credo che, mi sembra che, l’italien veut le subjonctif là où le français garde l’indicatif : « je crois qu’il est parti » → credo che sia partito (et non « che è partito » à l’écrit).',
    },
    {
      title: 'Le congiuntivo imperfetto',
      body: 'Radical de l’imparfait + -ssi, -ssi, -sse, -ssimo, -ste, -ssero. Il s’emploie quand la principale est au passé ou au conditionnel et que les deux actions sont simultanées.',
      table: [
        ['parlare', 'parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero'],
        ['credere / dormire', 'credessi… / dormissi…'],
        ['essere', 'fossi, fossi, fosse, fossimo, foste, fossero'],
        ['fare, dire, bere', 'facessi, dicessi, bevessi'],
        ['dare, stare', 'dessi, stessi'],
      ],
      examples: [
        { en: 'Volevo che tu venissi con noi.', fr: 'Je voulais que tu viennes avec nous.' },
        { en: 'Vorrei che i miei figli leggessero di più.', fr: 'Je voudrais que mes enfants lisent davantage.' },
      ],
      tip: 'Le français parlé met un subjonctif présent après un passé (« je voulais que tu viennes ») ; l’italien exige l’imperfetto : volevo che tu venissi, jamais « che tu venga ». Même règle après vorrei che.',
    },
  ],
  exercises: exercises('it-b2-congiuntivo-1', 'B2', { kc: PAST, tense: 'congiuntivo_passato' })
    .cloze('Spero che tu ___ bene ieri notte.', ['abbia dormito'],
      'Principale au présent (spero), action passée (ieri notte) → congiuntivo passato : abbia dormito.', { hint: 'dormire', d: 0.6 })
    .mcq('Volevo che tu ___ con noi alla festa.', ['venga', 'venissi', 'verrai'], 1,
      'Principale au passé (volevo) → congiuntivo imperfetto : venissi.', { kc: IMPF, tense: 'congiuntivo_imperfetto', d: 0.8 })
    .mcq('Vorrei che i miei figli ___ più tempo all’aria aperta.', ['passino', 'passassero', 'passerebbero'], 1,
      'Vorrei che est toujours suivi du congiuntivo imperfetto : passassero.', { kc: IMPF, tense: 'congiuntivo_imperfetto', d: 0.9 })
    .cloze('Era necessario che tutti ___ il modulo entro venerdì.', ['compilassero'],
      'Era necessario (passé) → congiuntivo imperfetto, 3e personne du pluriel : compilassero.', { kc: IMPF, tense: 'congiuntivo_imperfetto', hint: 'compilare', d: 0.8 })
    .type('Conjugue essere au congiuntivo imperfetto, 1re personne du pluriel (che noi…).', ['fossimo', 'che noi fossimo'],
      'essere : fossi, fossi, fosse, fossimo, foste, fossero.', { kc: IMPF, tense: 'congiuntivo_imperfetto', d: 0.7 })
    .type('« Credo che (loro) ___ ieri. » Écris partire au congiuntivo passato.', ['siano partiti', 'siano partite'],
      'partire se conjugue avec essere : siano partiti (ou partite), accordé avec le sujet.', { d: 0.8 })
    .order('Je ne crois pas qu’ils aient compris la question.', 'Non credo che abbiano capito la domanda.',
      'Non credo che + congiuntivo passato : abbiano capito.', { distractors: ['hanno', 'avessero'], d: 0.8 })
    .listen('Mi dispiace che tu non abbia potuto venire alla cena di ieri.', 'Che cosa dispiace a chi parla?',
      ['Che l’altra persona non sia venuta alla cena', 'Che la cena sia stata annullata', 'Di non aver potuto cucinare'], 0,
      'non abbia potuto venire : l’autre personne n’a pas pu venir.', { d: 0.7 })
    .listen('Credevo che il museo fosse aperto anche il lunedì, invece era chiuso.', 'Che cosa pensava chi parla?',
      ['Che il museo fosse aperto il lunedì', 'Che il museo fosse chiuso il lunedì', 'Che il museo avesse cambiato indirizzo'], 0,
      'Credevo che fosse aperto : il croyait que le musée était ouvert, ce qui était faux.', { kc: IMPF, d: 0.8 })
    .dictation('Era importante che tutti sapessero la verità.',
      'sapere → sapessi, sapesse, sapessero : congiuntivo imperfetto après une principale au passé.', { kc: IMPF, d: 0.8 })
    .tr('Je suis {content|contente} que tu sois venu.',
      ['Sono contento che tu sia venuto.', 'Sono contenta che tu sia venuto.', 'Sono contento che sia venuto.', 'Sono contenta che sia venuto.',
        'Sono felice che tu sia venuto.', 'Sono felice che sia venuto.', 'Sono contento che tu sia venuta.', 'Sono contenta che tu sia venuta.'],
      'Essere contento che + congiuntivo passato : che tu sia venuto.', { d: 0.8 })
    .tr('Il fallait que je parte tôt.',
      ['Bisognava che partissi presto.', 'Bisognava che io partissi presto.', 'Era necessario che partissi presto.', 'Era necessario che io partissi presto.',
        'Occorreva che partissi presto.', 'Dovevo partire presto.'],
      'Bisognava che (passé) → congiuntivo imperfetto : partissi. On peut aussi dire simplement dovevo partire presto.', { kc: IMPF, d: 0.9 })
    .repeat('Speravo che tu mi chiamassi prima di partire.',
      'Speravo che + congiuntivo imperfetto : chiamassi. Les doubles consonnes -ss- se prononcent longues.', { kc: IMPF, d: 0.6 })
    .say('Je doute qu’il ait dit la vérité.',
      ['Dubito che abbia detto la verità', 'Dubito che lui abbia detto la verità', 'Non sono sicuro che abbia detto la verità', 'Non sono sicura che abbia detto la verità'],
      'Dubitare che + subjonctif, comme en français : abbia detto.', { d: 0.9 })
    .answer('Che cosa speravi che succedesse quando eri bambino o bambina?',
      'Quando ero bambino speravo che i miei genitori mi comprassero un cane e che non ci fosse mai scuola.',
      'Speravo che / volevo che + congiuntivo imperfetto (comprassero, ci fosse).',
      { kc: [IMPF, PAST], keywords: [['speravo', 'volevo', 'desideravo', 'sognavo'], ['che']], minWords: 12, d: 1.1 })
    .build(),
};

export const congiuntivo2: Lesson = {
  id: 'it-b2-congiuntivo-2',
  cefr: 'B2',
  unitId: 'it-b2-congiuntivo',
  title: 'Trapassato et concordance des temps',
  subtitle: 'Pensavo che fosse già partito',
  kcIds: [PLUP, SEQ],
  estMinutes: 9,
  explanation: [
    {
      title: 'Le congiuntivo trapassato',
      body: 'Subjonctif imparfait de avere ou essere + participe passé : avessi parlato, fossi partito. Il marque une action antérieure quand la principale est au passé ou au conditionnel.',
      examples: [
        { en: 'Pensavo che fossero già partiti.', fr: 'Je pensais qu’ils étaient déjà partis.' },
        { en: 'Credevo che avessi capito.', fr: 'Je croyais que tu avais compris.' },
      ],
      tip: 'Là où le français met un plus-que-parfait de l’indicatif (« je pensais qu’il était parti »), l’italien met le trapassato du subjonctif : pensavo che fosse partito.',
    },
    {
      title: 'La concordance des temps',
      body: 'Le temps du subjonctif dépend du temps de la principale et du rapport chronologique.',
      table: [
        ['principale', 'simultanéité', 'antériorité', 'postériorité'],
        ['présent : penso che…', 'sia malato', 'sia stato malato', 'sarà malato'],
        ['passé ou conditionnel : pensavo che…', 'fosse malato', 'fosse stato malato', 'sarebbe stato malato'],
      ],
      examples: [
        { en: 'Speravo che tu mi chiamassi.', fr: 'J’espérais que tu m’appellerais.' },
        { en: 'Ero sicuro che sarebbe arrivato in tempo.', fr: 'J’étais sûr qu’il arriverait à l’heure.' },
      ],
      tip: 'Futur vu du passé = condizionale passato : « je pensais qu’il viendrait » → pensavo che sarebbe venuto. Le conditionnel présent (« che verrebbe ») est un calque du français.',
    },
  ],
  exercises: exercises('it-b2-congiuntivo-2', 'B2', { kc: PLUP, tense: 'congiuntivo_trapassato' })
    .cloze('Pensavo che Marta ___ già partita.', ['fosse'],
      'Principale au passé, action antérieure → trapassato : fosse partita.', { hint: 'essere', d: 0.8 })
    .mcq('Speravo che tu mi ___ prima di prendere una decisione.', ['chiami', 'chiamassi', 'abbia chiamato'], 1,
      'Speravo (passé) + action simultanée → congiuntivo imperfetto : chiamassi.', { kc: SEQ, d: 0.8 })
    .cloze('Ero sicuro che Luca ___ in tempo, invece è arrivato tardissimo.', ['sarebbe arrivato'],
      'Futur vu du passé → condizionale passato : sarebbe arrivato (essere sicuro prend l’indicatif).', { kc: SEQ, hint: 'arrivare', d: 1.1 })
    .type('Écris dimenticare au congiuntivo trapassato, 2e personne du singulier (che tu…).', ['avessi dimenticato', 'che tu avessi dimenticato'],
      'avessi + participe passé : avessi dimenticato.', { d: 0.8 })
    .type('« Penso che i ragazzi abbiano già mangiato. » → « Pensavo che i ragazzi ___ già mangiato. » Écris l’auxiliaire.', ['avessero'],
      'Principale au passé : le congiuntivo passato (abbiano mangiato) devient trapassato (avessero mangiato).', { kc: SEQ, d: 1.0 })
    .order('Je pensais que tu avais déjà fini.', 'Pensavo che avessi già finito.',
      'Pensavo che + trapassato : avessi finito.', { distractors: ['abbia', 'hai'], d: 0.9 })
    .mcq('Perché Elena è arrivata tardi alla festa?',
      ['Si era sbagliata sull’orario', 'Silvia le aveva dato l’orario sbagliato', 'Aveva perso il treno'], 0,
      '« Credevo che me l’avessi scritto… ho capito che mi ero confusa io » : l’erreur venait d’Elena.',
      {
        kc: [PLUP, SEQ],
        d: 1.0,
        passage:
          'Cara Silvia, ti scrivo per scusarmi. Sabato pensavo che la festa fosse alle nove, invece era alle sette: quando sono arrivata, molti invitati se n’erano già andati. Credevo che me l’avessi scritto nel messaggio, ma poi l’ho riletto e ho capito che mi ero confusa io. Mi dispiace davvero che tu ci sia rimasta male. Vorrei che ci vedessimo presto per farmi perdonare. Un abbraccio, Elena',
      })
    .listen('Pensavo che avessi già prenotato il ristorante, e invece non c’è nessun tavolo per noi.', 'Qual è il problema?',
      ['Nessuno ha prenotato il ristorante', 'Il ristorante è chiuso', 'Sono arrivati in ritardo'], 0,
      'Pensavo che avessi prenotato : il croyait que c’était fait, mais personne n’avait réservé.', { d: 0.9 })
    .listen('Mi aveva promesso che avrebbe finito il lavoro entro lunedì, ma è ancora a metà.', 'Che cosa aveva promesso?',
      ['Di finire il lavoro entro lunedì', 'Di cominciare il lavoro lunedì', 'Di lavorare anche il lunedì'], 0,
      'avrebbe finito : futur dans le passé → condizionale passato.', { kc: SEQ, d: 1.0 })
    .dictation('Sembrava che nessuno si fosse accorto di niente.',
      'Sembrava che + trapassato : si fosse accorto.', { d: 1.1 })
    .tr('Je croyais que tu avais oublié.',
      ['Credevo che avessi dimenticato.', 'Credevo che tu avessi dimenticato.', 'Pensavo che avessi dimenticato.', 'Pensavo che tu avessi dimenticato.',
        'Credevo che te ne fossi dimenticato.', 'Credevo che te ne fossi dimenticata.', 'Pensavo che te ne fossi dimenticato.', 'Pensavo che te ne fossi dimenticata.'],
      'Credevo che + trapassato : avessi dimenticato (ou te ne fossi dimenticato).', { d: 0.9 })
    .tr('Il voulait que nous restions dîner.',
      ['Voleva che restassimo a cena.', 'Voleva che rimanessimo a cena.', 'Voleva che noi restassimo a cena.', 'Voleva che noi rimanessimo a cena.',
        'Lui voleva che restassimo a cena.', 'Voleva che restassimo per cena.', 'Voleva che rimanessimo per cena.'],
      'Voleva (passé) → congiuntivo imperfetto : restassimo, rimanessimo.', { kc: SEQ, d: 0.9 })
    .repeat('Era come se il tempo si fosse fermato.',
      'Come se + congiuntivo : si fosse fermato.', { d: 0.7 })
    .say('Je croyais qu’il viendrait.',
      ['Credevo che sarebbe venuto', 'Pensavo che sarebbe venuto', 'Credevo che lui sarebbe venuto', 'Pensavo che lui sarebbe venuto', 'Credevo che venisse', 'Pensavo che venisse'],
      'Conditionnel présent français = condizionale passato italien pour le futur dans le passé : sarebbe venuto.', { kc: SEQ, d: 1.1 })
    .answer('Racconta una situazione in cui ti sei sbagliato o sbagliata su qualcuno. Che cosa pensavi?',
      'Pensavo che il mio nuovo collega fosse antipatico, ma poi ho scoperto che era solo timido e che aveva avuto una settimana difficile.',
      'Pensavo che / credevo che + congiuntivo imperfetto ou trapassato.',
      { kc: [PLUP, SEQ], keywords: [['pensavo', 'credevo', 'immaginavo'], ['fosse', 'avesse', 'fossero', 'avessero', 'fossi', 'avessi']], minWords: 14, d: 1.2 })
    .build(),
};
