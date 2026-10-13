import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const EREIRE = 'it.a1.grammar.present_ere_ire';
const IRREG = 'it.a1.grammar.irregular_present';
const MODAL = 'it.a1.grammar.modal_verbs';

export const presentEreIre1: Lesson = {
  id: 'it-a1-present-ere-ire-1',
  cefr: 'A1',
  unitId: 'it-a1-present-ere-ire',
  title: 'Les verbes en -ere et -ire',
  subtitle: 'Prendo, dormo, capisco',
  kcIds: [EREIRE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Terminaisons',
      table: [
        ['', 'prendere · dormire · capire (-isc-)'],
        ['io', 'prendo · dormo · capisco'],
        ['tu', 'prendi · dormi · capisci'],
        ['lui / lei / Lei', 'prende · dorme · capisce'],
        ['noi', 'prendiamo · dormiamo · capiamo'],
        ['voi', 'prendete · dormite · capite'],
        ['loro', 'prendono · dormono · capiscono'],
      ],
      body: 'En -ere : prendere, leggere, scrivere, vedere, vivere, chiudere. En -ire : dormire, partire, aprire, sentire. Avec -isc- : capire, finire, preferire, pulire, spedire.',
      examples: [
        { en: 'Prendo un caffè e leggo il giornale.', fr: 'Je prends un café et je lis le journal.' },
        { en: 'Finisco di lavorare alle sei.', fr: 'Je finis de travailler à six heures.' },
      ],
      tip: 'Pas de -isc- avec noi et voi : capiamo, capite. Et sc + i / e se dit « ch » : capisce = « capiché », mais capisco = « capisko ».',
    },
    {
      title: 'Un son qui change dans le même verbe',
      body: 'Le son de c / g suit la voyelle : leggo (« lèggo », g dur), leggi (« lèdji ») ; vinco, vinci. L’orthographe ne change pas, la prononciation si.',
      tip: 'À la 3ᵉ personne du pluriel, l’accent remonte au début du verbe : PREN-do-no, SCRI-vo-no, DOR-mo-no, ca-PI-sco-no.',
    },
  ],
  exercises: exercises('it-a1-present-ere-ire-1', 'A1', { kc: EREIRE, tense: 'present' })
    .mcq('Io ___ il treno alle otto.', ['prendo', 'prende', 'prendi'], 0, 'io → -o : prendo.', { d: -2.3 })
    .mcq('Loro non ___ la domanda.', ['capiscono', 'capono', 'capiscano'], 0, 'capire prend -isc- : loro capiscono.', { d: -1.8 })
    .cloze('Voi ___ bene?', ['dormite'], 'voi → -ite pour les verbes en -ire : dormite.', { hint: 'dormire', d: -2.0 })
    .cloze('Noi ___ il caffè senza zucchero.', ['preferiamo'], 'Pas de -isc- avec noi : preferiamo.', { hint: 'preferire', d: -1.7 })
    .type('Conjugue « finire » avec « lui ».', ['finisce', 'lui finisce'], 'finire prend -isc- : lui finisce.', { d: -1.7 })
    .type('Conjugue « leggere » avec « io ».', ['leggo', 'io leggo'], 'io leggo (g dur).', { d: -2.0 })
    .order('Ils écrivent un message à Marco.', 'Scrivono un messaggio a Marco.', 'loro → scrivono (accent sur SCRI).', { distractors: ['scriviamo'], d: -1.9 })
    .tr('Je ne comprends pas.', ['Non capisco.', 'Io non capisco.'], 'non + capisco.', { d: -2.4 })
    .tr('Tu lis le journal tous les jours ?', ['Leggi il giornale tutti i giorni?', 'Tu leggi il giornale tutti i giorni?', 'Leggi il giornale ogni giorno?', 'Tu leggi il giornale ogni giorno?'],
      'tu leggi ; tutti i giorni ou ogni giorno = tous les jours.', { d: -1.8 })
    .listen('Di solito dormo otto ore, ma oggi sono stanco.', 'Combien d’heures dort-il d’habitude ?', ['Huit', 'Six', 'Dix'], 0, 'dormo otto ore = je dors huit heures.', { d: -2.0 })
    .listen('Finisco di lavorare alle sei e poi prendo l’autobus.', 'Que fait-il après le travail ?', ['Il prend le bus', 'Il prend le train', 'Il dort'], 0,
      'poi prendo l’autobus = ensuite je prends le bus.', { d: -1.8 })
    .dictation('Scusi, non capisco bene.', 'capisco se prononce « capisko ».', { d: -1.8 })
    .repeat('Capisco, capisci, capisce, capiamo, capite, capiscono.', 'sco = « sko » ; sci / sce = « chi » / « ché ».', { d: -1.9 })
    .say('Nous partons demain.', ['Partiamo domani.', 'Noi partiamo domani.', 'Domani partiamo.'], 'noi → partiamo ; domani = demain.', { d: -1.9 })
    .say('Qu’est-ce que tu préfères, le thé ou le café ?', ['Cosa preferisci, il tè o il caffè?', 'Che cosa preferisci, il tè o il caffè?', 'Preferisci il tè o il caffè?', 'Che preferisci, il tè o il caffè?'],
      'preferire prend -isc- : tu preferisci.', { d: -1.7 })
    .build(),
};

export const presentEreIre2: Lesson = {
  id: 'it-a1-present-ere-ire-2',
  cefr: 'A1',
  unitId: 'it-a1-present-ere-ire',
  title: 'Fare, andare, venire, volere, potere, dovere',
  subtitle: 'Les irréguliers indispensables',
  kcIds: [IRREG, MODAL],
  estMinutes: 9,
  explanation: [
    {
      title: 'Irréguliers fréquents',
      table: [
        ['fare (faire)', 'faccio, fai, fa, facciamo, fate, fanno'],
        ['andare (aller)', 'vado, vai, va, andiamo, andate, vanno'],
        ['venire (venir)', 'vengo, vieni, viene, veniamo, venite, vengono'],
      ],
      examples: [
        { en: 'Che cosa fai stasera? — Vado al cinema.', fr: 'Qu’est-ce que tu fais ce soir ? — Je vais au cinéma.' },
        { en: 'Vengo da Parigi, ma vado a Roma in treno.', fr: 'Je viens de Paris, mais je vais à Rome en train.' },
      ],
      tip: 'andare a + ville ou + infinitif (vado a Roma, vado a mangiare) ; andare in + pays ou moyen de transport (vado in Italia, in treno).',
    },
    {
      title: 'Vouloir, pouvoir, devoir',
      table: [
        ['volere (vouloir)', 'voglio, vuoi, vuole, vogliamo, volete, vogliono'],
        ['potere (pouvoir)', 'posso, puoi, può, possiamo, potete, possono'],
        ['dovere (devoir)', 'devo, devi, deve, dobbiamo, dovete, devono'],
      ],
      body: 'Ils sont suivis directement d’un infinitif. Pour demander poliment, on utilise vorrei (je voudrais).',
      examples: [
        { en: 'Posso entrare?', fr: 'Je peux entrer ?' },
        { en: 'Domani dobbiamo partire presto.', fr: 'Demain nous devons partir tôt.' },
        { en: 'Vorrei un bicchiere d’acqua, per favore.', fr: 'Je voudrais un verre d’eau, s’il vous plaît.' },
      ],
      tip: 'Pas de préposition après ces verbes : « Devo di partire » ✗ → « Devo partire » ✓. Et « Voglio… » pour commander sonne brusque : préfère « Vorrei… ».',
    },
  ],
  exercises: exercises('it-a1-present-ere-ire-2', 'A1', { kc: IRREG, tense: 'present' })
    .mcq('Que doit faire Giorgio demain ?', ['Réserver le train', 'Aller à Naples', 'Appeler sa tante'], 0,
      'Devo prenotare il treno domani = je dois réserver le train demain.',
      { kc: [IRREG, MODAL], passage: 'Ciao Marta! Sabato vado a Napoli con Luca. Facciamo un giro in centro e mangiamo una vera pizza. Vuoi venire? Puoi dormire da mia zia. Devo prenotare il treno domani: rispondi presto!\nGiorgio', d: -1.7 })
    .mcq('___ entrare? — Sì, prego!', ['Posso', 'Devo', 'Voglio'], 0, 'Demander la permission → Posso… ? (je peux… ?)', { kc: MODAL, d: -2.1 })
    .cloze('Che cosa ___ questo fine settimana?', ['fai'], 'fare avec tu → fai.', { hint: 'fare, tu', d: -2.0 })
    .cloze('Domani ___ lavorare presto.', ['devo'], 'dovere avec io → devo, puis l’infinitif sans préposition.', { kc: MODAL, hint: 'dovere, io', d: -1.9 })
    .type('Conjugue « venire » avec « io ».', ['vengo', 'io vengo'], 'venire → io vengo.', { d: -1.8 })
    .type('Conjugue « volere » avec « loro ».', ['vogliono', 'loro vogliono'], 'volere → loro vogliono (gli = « ly »).', { kc: MODAL, d: -1.6 })
    .order('Tu veux venir avec nous ?', 'Vuoi venire con noi?', 'vuoi + infinitif, sans préposition.', { kc: [MODAL, IRREG], distractors: ['di'], d: -1.8 })
    .tr('Je vais à Rome en train.', ['Vado a Roma in treno.', 'Io vado a Roma in treno.'], 'andare a + ville ; in + moyen de transport.', { d: -1.9 })
    .tr('Nous ne pouvons pas venir ce soir.', ['Non possiamo venire stasera.', 'Stasera non possiamo venire.', 'Noi non possiamo venire stasera.', 'Non possiamo venire questa sera.'],
      'non possiamo + venire ; stasera = ce soir.', { kc: [MODAL, IRREG], d: -1.6 })
    .listen('Vado al mercato. Vieni anche tu?', 'Que propose la personne ?', ['De venir au marché', 'D’aller au cinéma', 'De faire les courses demain'], 0,
      'Vieni anche tu ? = tu viens aussi ?', { d: -1.9 })
    .listen('Mi dispiace, non posso: devo studiare.', 'Pourquoi refuse-t-elle ?', ['Elle doit étudier', 'Elle est malade', 'Elle travaille'], 0,
      'devo studiare = je dois étudier.', { kc: MODAL, d: -1.7 })
    .dictation('Che cosa fate stasera?', 'fare avec voi → fate.', { d: -1.9 })
    .repeat('Posso venire anch’io? — Certo, vieni!', 'anch’io = moi aussi ; vieni = viens.', { kc: [MODAL, IRREG], d: -1.9 })
    .say('Je voudrais un verre d’eau.', ['Vorrei un bicchiere d’acqua.', 'Vorrei un bicchiere di acqua.', 'Vorrei un bicchiere d’acqua, per favore.'],
      'Vorrei = je voudrais, la forme polie.', { kc: MODAL, d: -1.9 })
    .say('Qu’est-ce que tu fais ?', ['Che cosa fai?', 'Cosa fai?', 'Che fai?', 'Tu cosa fai?'], 'fare avec tu → fai.', { d: -2.2 })
    .build(),
};
