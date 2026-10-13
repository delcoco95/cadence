import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const NUM = 'it.a1.vocabulary.numbers';
const TIME = 'it.a1.function.telling_time';
const DAYS = 'it.a1.vocabulary.days_months';
const PREP = 'it.a1.grammar.basic_prepositions';

export const time1: Lesson = {
  id: 'it-a1-time-1',
  cefr: 'A1',
  unitId: 'it-a1-time',
  title: 'Les nombres et l’heure',
  subtitle: 'Da zero a mille · Che ore sono?',
  kcIds: [NUM, TIME],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les nombres',
      table: [
        ['0 – 10', 'zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci'],
        ['11 – 19', 'undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove'],
        ['20 – 29', 'venti, ventuno, ventidue, ventitré, … ventotto, ventinove'],
        ['dizaines', 'trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta'],
        ['100 · 1000', 'cento, duecento… · mille, duemila'],
      ],
      body: 'Devant uno et otto, la dizaine perd sa voyelle : ventuno, ventotto, trentuno. Avec tre, on met un accent : ventitré, trentatré. Les nombres s’écrivent en un seul mot : centocinquanta.',
      tip: 'Au-delà de 16, on assemble « dix + sept » : diciassette (17), diciotto (18), diciannove (19). Pas de « soixante-dix » ni de « quatre-vingts » : settanta, ottanta, novanta.',
    },
    {
      title: 'L’heure',
      table: [
        ['Che ore sono? · Che ora è?', 'Quelle heure est-il ?'],
        ['È l’una. · È mezzogiorno. · È mezzanotte.', 'Il est une heure. · Il est midi. · Il est minuit.'],
        ['Sono le due, le tre…', 'Il est deux heures, trois heures…'],
        ['e un quarto · e mezza · meno un quarto', 'et quart · et demie · moins le quart'],
        ['A che ora…? — Alle otto. · All’una.', 'À quelle heure… ? — À huit heures. · À une heure.'],
      ],
      examples: [
        { en: 'Sono le sette e mezza.', fr: 'Il est sept heures et demie.' },
        { en: 'Il treno parte alle nove meno dieci.', fr: 'Le train part à neuf heures moins dix.' },
      ],
      tip: '« Il est trois heures » = Sono le tre : verbe au pluriel et pas de mot « ore ». Seule une heure est au singulier : È l’una.',
    },
  ],
  exercises: exercises('it-a1-time-1', 'A1', { kc: TIME })
    .mcq('Comment dit-on 17 ?', ['diciassette', 'settedici', 'diecisette'], 0, '17 = diciassette (dieci + sette, en un seul mot).', { kc: NUM, d: -2.0 })
    .mcq('Il est 15 h 30 : Sono le tre e ___', ['mezza', 'quarto', 'metà'], 0, 'et demie = e mezza (ou e trenta).', { d: -2.0 })
    .cloze('___ l’una e dieci.', ['È'], 'Une heure → singulier : È l’una.', { d: -1.8 })
    .cloze('Il treno parte ___ otto e mezza.', ['alle'], 'à + heure → alle (a + le).', { hint: 'à', d: -1.7 })
    .type('Écris en lettres : 28', ['ventotto'], 'venti + otto → ventotto (le i tombe).', { kc: NUM, d: -1.8 })
    .type('Écris en lettres : 33', ['trentatré'], 'trenta + tre → trentatré, avec accent.', { kc: NUM, d: -1.7 })
    .order('Il est neuf heures moins le quart.', 'Sono le nove meno un quarto.', 'Sono le + heure + meno un quarto.', { distractors: ['è'], d: -1.8 })
    .tr('Il est midi.', ['È mezzogiorno.', 'Sono le dodici.'], 'mezzogiorno = midi (singulier : è).', { d: -2.2 })
    .tr('À quelle heure commence le film ?', ['A che ora comincia il film?', 'A che ora inizia il film?', 'Il film a che ora comincia?', 'Il film a che ora inizia?'],
      'A che ora… ? ; cominciare ou iniziare = commencer.', { d: -1.7 })
    .listen('Il mio numero è tre tre otto, quattro cinque sei, due sette uno nove.', 'Quel est le numéro ?', ['338 456 2719', '338 465 2719', '383 456 2719'], 0,
      'tre tre otto · quattro cinque sei · due sette uno nove.', { kc: NUM, d: -1.7 })
    .listen('Scusi, che ore sono? — Sono le sei e un quarto.', 'Quelle heure est-il ?', ['6 h 15', '6 h 45', '7 h 15'], 0, 'le sei e un quarto = six heures et quart.', { d: -1.9 })
    .dictation('Sono le undici e venti.', 'undici = 11 ; e venti = et vingt.', { kc: [TIME, NUM], d: -1.8 })
    .repeat('Uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci.', 'quattro : « kouattro » ; cinque : « tchinkoué » ; tt bien tenus dans sette, otto.', { kc: NUM, d: -2.6 })
    .say('Quelle heure est-il ?', ['Che ore sono?', 'Che ora è?'], 'Les deux formes sont correctes.', { d: -2.2 })
    .say('J’ai vingt et un ans.', ['Ho ventun anni.', 'Ho ventuno anni.', 'Io ho ventun anni.'], 'ventuno devant anni devient souvent ventun.', { kc: NUM, d: -1.7 })
    .build(),
};

export const time2: Lesson = {
  id: 'it-a1-time-2',
  cefr: 'A1',
  unitId: 'it-a1-time',
  title: 'Jours, mois et prépositions',
  subtitle: 'Lunedì, gennaio… a, in, di, da',
  kcIds: [DAYS, PREP],
  estMinutes: 9,
  explanation: [
    {
      title: 'Jours, mois, saisons',
      table: [
        ['jours', 'lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica'],
        ['mois', 'gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre'],
        ['saisons', 'la primavera, l’estate (f.), l’autunno, l’inverno'],
      ],
      body: 'Ils s’écrivent avec une minuscule. lunedì = lundi (ce lundi-ci) ; il lunedì = le lundi (chaque lundi). La date : il 5 maggio, il primo maggio (le 1er). En mars : a marzo ou in marzo.',
      examples: [
        { en: 'Il lunedì vado in palestra.', fr: 'Le lundi, je vais à la salle de sport.' },
        { en: 'Il mio compleanno è il tre aprile.', fr: 'Mon anniversaire est le trois avril.' },
      ],
      tip: 'Les jours en -dì sont accentués sur la fin : lu-ne-DÌ. Et domenica est féminin : la domenica.',
    },
    {
      title: 'a, in, di, da',
      table: [
        ['a', 'ville, maison, heure : a Roma, a casa, alle otto'],
        ['in', 'pays, région, transport, lieu, saison : in Italia, in treno, in ufficio, in estate'],
        ['di', 'appartenance, origine : il libro di Marco, sono di Lione'],
        ['da', 'provenance, chez quelqu’un, depuis : vengo da Parigi, vado da Luca, da due anni'],
      ],
      examples: [
        { en: 'Abito in Francia, a Lione.', fr: 'J’habite en France, à Lyon.' },
        { en: 'Studio l’italiano da tre mesi.', fr: 'J’étudie l’italien depuis trois mois.' },
      ],
      tip: '« Chez Luca » = da Luca. « Depuis deux ans » = da due anni, avec le verbe au présent comme en français.',
    },
  ],
  exercises: exercises('it-a1-time-2', 'A1', { kc: PREP })
    .mcq('Abito ___ Francia, ___ Lione.', ['in / a', 'a / in', 'in / in'], 0, 'Pays → in ; ville → a.', { d: -1.8 })
    .cloze('Stasera vado ___ Marco: c’è una festa.', ['da'], 'Chez quelqu’un → da.', { hint: 'chez', d: -1.7 })
    .cloze('Vado in ufficio ___ bicicletta.', ['in'], 'Moyen de transport → in : in bicicletta, in treno, in macchina.', { d: -1.8 })
    .mcq('Quand Chiara va-t-elle chez sa grand-mère ?', ['Le jeudi', 'Le mardi', 'Le dimanche'], 0,
      'Il giovedì va da sua nonna = le jeudi, elle va chez sa grand-mère.',
      { kc: [DAYS, PREP], passage: 'Il lunedì e il mercoledì Chiara va in palestra. Il martedì studia inglese. Il giovedì va da sua nonna. Il venerdì sera esce con gli amici e il sabato dorme fino a tardi. La domenica pranza con la famiglia.', d: -1.7 })
    .type('Quel jour vient après « venerdì » ?', ['sabato'], 'venerdì → sabato (samedi).', { kc: DAYS, d: -2.1 })
    .type('Comment dit-on « juillet » ?', ['luglio'], 'luglio : gli = « ly ».', { kc: DAYS, d: -1.8 })
    .order('Je suis de Lyon mais j’habite à Turin.', 'Sono di Lione ma abito a Torino.', 'Origine → di ; ville où l’on habite → a.', { distractors: ['da'], d: -1.8 })
    .tr('J’étudie l’italien depuis deux ans.', ['Studio l’italiano da due anni.', 'Studio italiano da due anni.', 'Io studio l’italiano da due anni.', 'Studio l’italiano da 2 anni.'],
      'depuis + durée → da, avec le présent.', { d: -1.6 })
    .tr('Mon anniversaire est le 5 mai.', ['Il mio compleanno è il 5 maggio.', 'Il mio compleanno è il cinque maggio.'], 'La date : il + nombre + mois.', { kc: DAYS, d: -1.6 })
    .listen('Il museo è chiuso il lunedì. Apre martedì alle nove.', 'Quand le musée est-il fermé ?', ['Le lundi', 'Le mardi', 'Le dimanche'], 0,
      'chiuso il lunedì = fermé le lundi.', { kc: DAYS, d: -1.9 })
    .listen('In agosto andiamo in Sicilia, a Palermo.', 'Où vont-ils en août ?', ['À Palerme, en Sicile', 'À Naples', 'En Sardaigne'], 0,
      'in Sicilia (région) ; a Palermo (ville).', { d: -1.9 })
    .dictation('Arrivo a Roma sabato mattina.', 'a + ville ; sabato mattina = samedi matin.', { kc: [PREP, DAYS], d: -1.8 })
    .repeat('Lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica.', 'Accent final sur les jours en -dì ; SA-ba-to, do-ME-ni-ca.', { kc: DAYS, d: -2.3 })
    .say('Je vais en Italie en été.', ['Vado in Italia in estate.', 'Vado in Italia d’estate.', 'In estate vado in Italia.', 'D’estate vado in Italia.', 'Io vado in Italia in estate.'],
      'in + pays ; in estate ou d’estate = en été.', { d: -1.7 })
    .say('À lundi !', ['A lunedì!', 'Ci vediamo lunedì!'], 'A lunedì ! = à lundi !', { kc: DAYS, d: -2.3 })
    .build(),
};
