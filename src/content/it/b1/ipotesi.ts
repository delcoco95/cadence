import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const REAL = 'it.b1.grammar.hypothesis_real';
const CONG_IMP = 'it.b1.mood.imperfect_subjunctive';
const POSS = 'it.b1.grammar.hypothesis_possible';

export const ipotesi1: Lesson = {
  id: 'it-b1-ipotesi-1',
  cefr: 'B1',
  unitId: 'it-b1-ipotesi',
  title: 'Hypothèse réelle et subjonctif imparfait',
  subtitle: 'se piove, resto a casa · se avessi…',
  kcIds: [REAL, CONG_IMP],
  estMinutes: 10,
  explanation: [
    {
      title: 'L’hypothèse réelle',
      body: 'Condition probable : se + présent, puis présent, futur ou impératif. Si la suite est au futur, se peut aussi prendre le futur.',
      examples: [
        { en: 'Se piove, restiamo a casa.', fr: 'S’il pleut, nous restons à la maison.' },
        { en: 'Se hai fame, mangia qualcosa.', fr: 'Si tu as faim, mange quelque chose.' },
        { en: 'Se verrai a Roma, ti farò vedere la città.', fr: 'Si tu viens à Rome, je te ferai visiter la ville.' },
      ],
      tip: 'En français, jamais de futur après si (« si tu viendras » ✗) ; en italien, se + futur est correct quand la suite est au futur : Se finirai presto, ti chiamerò.',
    },
    {
      title: 'Le subjonctif imparfait',
      body: 'On remplace -re de l’infinitif par -ssi, -ssi, -sse, -ssimo, -ste, -ssero.',
      table: [
        ['parlare', 'parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero'],
        ['prendere', 'prendessi, prendessi, prendesse, prendessimo, prendeste, prendessero'],
        ['partire', 'partissi, partissi, partisse, partissimo, partiste, partissero'],
        ['essere', 'fossi, fossi, fosse, fossimo, foste, fossero'],
        ['fare · dire · bere', 'facessi · dicessi · bevessi'],
        ['dare · stare', 'dessi · stessi'],
      ],
      examples: [
        { en: 'Se avessi tempo…', fr: 'Si j’avais le temps…' },
        { en: 'Se fossimo più vicini…', fr: 'Si nous étions plus proches…' },
      ],
      tip: 'Il ressemble à l’imparfait du subjonctif français (qu’il parlât), mais il est bien vivant en italien : on l’emploie tous les jours après se. io et tu ont la même forme : se io fossi, se tu fossi.',
    },
  ],
  exercises: exercises('it-b1-ipotesi-1', 'B1', { kc: CONG_IMP, tense: 'congiuntivo_imperfetto' })
    .mcq('Se domani ___ bel tempo, andiamo al mare.', ['fa', 'facesse', 'farebbe'], 0, 'Condition probable, suite au présent → se + présent : fa.', { kc: REAL, d: -0.4 })
    .mcq('Se tu ___ più tempo, che cosa faresti?', ['avessi', 'avresti', 'hai'], 0, 'faresti (conditionnel) → se + subjonctif imparfait : avessi.', { d: -0.3 })
    .cloze('Se ___ stanco, riposati un po’.', ['sei'], 'Hypothèse réelle + impératif → se + présent.', { kc: REAL, hint: 'essere, tu', d: -0.4 })
    .cloze('Se noi ___ più vicini, ci vedremmo più spesso.', ['abitassimo'], 'abitare → abitassimo (noi).', { hint: 'abitare', d: 0 })
    .type('Subjonctif imparfait de « essere » avec « io ».', ['fossi', 'io fossi', 'se io fossi', 'se fossi'], 'essere → fossi.', { d: -0.3 })
    .type('Subjonctif imparfait de « fare » avec « loro ».', ['facessero', 'loro facessero', 'se facessero', 'se loro facessero'], 'fare → facess- (radical fac-) : facessero.', { d: 0.1 })
    .order('Si tu as besoin d’aide, appelle-moi.', 'Se hai bisogno di aiuto, chiamami.', 'se + présent, puis impératif.', { kc: REAL, distractors: ['avessi'], d: -0.3 })
    .tr('Si tu finis tôt, nous irons au cinéma.', ['Se finisci presto, andremo al cinema.', 'Se finisci presto, andiamo al cinema.', 'Se finirai presto, andremo al cinema.', 'Se tu finisci presto, andremo al cinema.', 'Se finisci presto, noi andremo al cinema.'],
      'se + présent (ou futur) → futur.', { kc: REAL, d: -0.2 })
    .tr('S’il pleut demain, je reste à la maison.', ['Se domani piove, resto a casa.', 'Se piove domani, resto a casa.', 'Se domani piove, rimango a casa.', 'Se piove domani, rimango a casa.', 'Se domani piove, io resto a casa.', 'Se domani pioverà, resterò a casa.'],
      'se + présent → présent.', { kc: REAL, d: -0.4 })
    .listen('Se trovi le chiavi, lasciale sul tavolo, per favore.', 'Que doit-il faire s’il trouve les clés ?', ['Les laisser sur la table', 'Les donner au voisin', 'Les garder dans sa poche'], 0,
      'lasciale = laisse-les (impératif + pronom).', { kc: REAL, d: -0.3 })
    .listen('Se parlassi più lentamente, ti capirei meglio.', 'Que souhaite-t-il ?', ['Qu’on lui parle plus lentement', 'Qu’on parle plus fort', 'Qu’on répète en français'], 0,
      'se parlassi più lentamente = si tu parlais plus lentement.', { d: 0 })
    .dictation('Se avessimo una macchina, potremmo partire subito.', 'avere → avessimo.', { d: 0.1 })
    .repeat('Se fossi ricco, comprerei una casa a Venezia.', 'fossi : double s bien tenu, « fos-si ».', { d: -0.2 })
    .say('Si tu veux, je t’accompagne.', ['Se vuoi, ti accompagno.', 'Se vuoi, ti accompagno io.', 'Se tu vuoi, ti accompagno.', 'Se vuoi, ti accompagnerò.'], 'se + présent → présent.', { kc: REAL, d: -0.4 })
    .answer('Che cosa fai se domani piove?', 'Se domani piove, resto a casa, leggo un libro e cucino qualcosa di buono.',
      'Hypothèse réelle : se + présent, puis présent ou futur.',
      { kc: REAL, keywords: [['se'], ['resto', 'rimango', 'vado', 'guardo', 'leggo', 'dormo', 'studio', 'faccio', 'cucino', 'esco', 'resterò', 'andrò', 'guarderò', 'leggerò', 'farò']], minWords: 8, d: -0.2 })
    .build(),
};

export const ipotesi2: Lesson = {
  id: 'it-b1-ipotesi-2',
  cefr: 'B1',
  unitId: 'it-b1-ipotesi',
  title: 'Hypothèse possible : se + subjonctif imparfait',
  subtitle: 'se potessi, andrei · se fossi in te',
  kcIds: [POSS, CONG_IMP],
  estMinutes: 10,
  explanation: [
    {
      title: 'Se + subjonctif imparfait, conditionnel',
      body: 'Pour une hypothèse peu probable ou imaginaire au présent : se + congiuntivo imperfetto, puis condizionale presente. L’ordre des deux parties est libre.',
      examples: [
        { en: 'Se vincessi alla lotteria, smetterei di lavorare.', fr: 'Si je gagnais au loto, j’arrêterais de travailler.' },
        { en: 'Se fossi in te, accetterei.', fr: 'Si j’étais toi, j’accepterais.' },
        { en: 'Che cosa faresti se perdessi il lavoro?', fr: 'Que ferais-tu si tu perdais ton travail ?' },
      ],
      tip: 'Piège n° 1 : « si j’avais » → se avessi (subjonctif imparfait), jamais « se avrei » (faute grave) ni « se avevo » (familier). Le conditionnel va dans l’autre partie de la phrase.',
    },
    {
      title: 'Réelle ou possible ?',
      body: 'Le choix dépend de ce que pense celui qui parle.',
      examples: [
        { en: 'Se ho tempo, vengo.', fr: 'Si j’ai le temps, je viens. (c’est probable)' },
        { en: 'Se avessi tempo, verrei.', fr: 'Si j’avais le temps, je viendrais. (mais je n’en ai pas)' },
      ],
      tip: 'Se fossi in te (si j’étais toi) = al posto tuo : deux façons de donner un conseil.',
    },
  ],
  exercises: exercises('it-b1-ipotesi-2', 'B1', { kc: POSS, tense: 'periodo_ipotetico' })
    .mcq('Se ___ alla lotteria, comprerei una casa al mare.', ['vincessi', 'vincerei', 'vinco'], 0, 'Après se, subjonctif imparfait (vincessi), jamais le conditionnel.', { d: -0.3 })
    .mcq('Se fossi in te, non ___ quel lavoro.', ['accetterei', 'accettassi', 'accetto'], 0, 'se + subjonctif imparfait → conditionnel : accetterei.', { d: -0.2 })
    .mcq('Qu’est-ce qui empêche Elena de réaliser son projet ?', ['Elle n’a pas assez d’argent', 'Elle ne parle pas japonais', 'Sa famille ne veut pas'], 0,
      'Se avessi abbastanza soldi… Ma purtroppo non li ho! = mais malheureusement je ne les ai pas.',
      { kc: [POSS, CONG_IMP], passage: 'Sondaggio: «Che cosa faresti se avessi un anno libero?» Paola, 34 anni: «Se potessi, farei il giro del mondo in barca a vela.» Marco, 52 anni: «Io resterei a casa con la mia famiglia e imparerei a suonare il pianoforte.» Elena, 19 anni: «Se avessi abbastanza soldi, andrei a studiare in Giappone. Ma purtroppo non li ho!»', d: 0 })
    .cloze('Che cosa ___ se perdessi il lavoro?', ['faresti'], 'se perdessi → conditionnel : faresti.', { hint: 'fare, tu', d: -0.1 })
    .type('Complète : « Se io ___ (sapere) la risposta, te la direi. »', ['sapessi'], 'sapere → sapessi.', { kc: [POSS, CONG_IMP], d: 0 })
    .type('Complète : « Se i miei genitori abitassero più vicino, li ___ (vedere, io) ogni giorno. »', ['vedrei'], 'vedere → vedr- : vedrei.', { d: 0.2 })
    .order('Si j’étais toi, je partirais demain.', 'Se fossi in te, partirei domani.', 'se fossi in te + conditionnel.', { distractors: ['ero'], d: -0.2 })
    .tr('Si j’avais le temps, j’apprendrais le piano.', ['Se avessi tempo, imparerei il pianoforte.', 'Se avessi tempo, imparerei a suonare il pianoforte.', 'Se avessi il tempo, imparerei il pianoforte.', 'Se avessi il tempo, imparerei a suonare il pianoforte.', 'Se avessi tempo, imparerei il piano.', 'Se avessi tempo, imparerei a suonare il piano.', 'Se io avessi tempo, imparerei il pianoforte.'],
      'si j’avais → se avessi ; j’apprendrais → imparerei.', { d: 0 })
    .tr('Que ferais-tu si tu étais riche ?', ['Che cosa faresti se fossi ricco?', 'Cosa faresti se fossi ricco?', 'Che faresti se fossi ricco?', 'Che cosa faresti se fossi ricca?', 'Cosa faresti se fossi ricca?', 'Che faresti se fossi ricca?', 'Se fossi ricco, che cosa faresti?', 'Se fossi ricca, che cosa faresti?', 'Se fossi ricco, cosa faresti?', 'Se fossi ricca, cosa faresti?'],
      'faresti + se fossi (subjonctif imparfait, pas « se saresti »).', { d: 0.1 })
    .listen('Se avessi una settimana di ferie, andrei in Sardegna, ma quest’anno devo lavorare.', 'Va-t-elle partir en Sardaigne ?', ['Non, cette année elle doit travailler', 'Oui, pour une semaine', 'Oui, l’année prochaine'], 0,
      'Hypothèse imaginaire : ma quest’anno devo lavorare.', { d: 0 })
    .listen('Se il treno non fosse in ritardo, saremmo già a casa.', 'Où en sont-ils ?', ['Ils ne sont pas encore chez eux : le train est en retard', 'Ils sont déjà à la maison', 'Leur train est annulé'], 0,
      'se non fosse in ritardo = s’il n’était pas en retard → il l’est.', { d: 0.2 })
    .dictation('Se potessi scegliere, vivrei in montagna.', 'potessi (subj. imparfait) ; vivrei (conditionnel).', { d: 0 })
    .repeat('Se fossi in te, ci penserei due volte.', 'penserei : accent sur « rei ».', { d: -0.1 })
    .say('S’il faisait beau, nous mangerions dehors.', ['Se facesse bel tempo, mangeremmo fuori.', 'Se facesse bello, mangeremmo fuori.', 'Mangeremmo fuori se facesse bel tempo.', 'Se facesse bel tempo, mangeremmo all’aperto.', 'Se ci fosse il sole, mangeremmo fuori.', 'Se facesse bel tempo, noi mangeremmo fuori.'],
      'se facesse bel tempo → mangeremmo.', { d: 0.2 })
    .answer('Che cosa faresti se vincessi un milione di euro?', 'Se vincessi un milione di euro, comprerei una casa per i miei genitori e farei un lungo viaggio.',
      'se + subjonctif imparfait, puis conditionnel.',
      { kc: [POSS, CONG_IMP], keywords: [['se'], ['vincessi', 'avessi', 'fossi', 'potessi'], ['comprerei', 'farei', 'andrei', 'viaggerei', 'darei', 'smetterei', 'aiuterei', 'regalerei', 'metterei', 'aprirei', 'vivrei']], minWords: 12, d: 0.4 })
    .build(),
};
