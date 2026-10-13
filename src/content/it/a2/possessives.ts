import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const POSS = 'it.a2.grammar.possessives';
const FAM = 'it.a2.grammar.possessives_family';
const DEM = 'it.a2.grammar.demonstratives';
const QUELLO = 'it.a2.grammar.quello_forms';

export const possessives1: Lesson = {
  id: 'it-a2-possessives-1',
  cefr: 'A2',
  unitId: 'it-a2-possessives',
  title: 'Les possessifs',
  subtitle: 'il mio libro, la tua casa, mia madre',
  kcIds: [POSS, FAM],
  estMinutes: 8,
  explanation: [
    {
      title: 'Article + possessif',
      body: 'En italien, le possessif est précédé de l’article : il mio libro (litt. « le mon livre »). Il s’accorde avec l’objet possédé, comme en français.',
      table: [
        ['io', 'il mio · la mia · i miei · le mie'],
        ['tu', 'il tuo · la tua · i tuoi · le tue'],
        ['lui, lei, Lei', 'il suo · la sua · i suoi · le sue'],
        ['noi', 'il nostro · la nostra · i nostri · le nostre'],
        ['voi', 'il vostro · la vostra · i vostri · le vostre'],
        ['loro', 'il loro · la loro · i loro · le loro (invariable)'],
      ],
      examples: [
        { en: 'Dove sono i miei occhiali?', fr: 'Où sont mes lunettes ?' },
        { en: 'Paolo vive con la sua ragazza.', fr: 'Paolo vit avec sa copine.' },
        { en: 'Questo libro è mio.', fr: 'Ce livre est à moi.' },
      ],
      tip: 'Ne pas oublier l’article : « mio libro » ✗ → « il mio libro » ✓. Après essere, l’article tombe souvent : è mio = c’est à moi. Et « un de mes amis » = un mio amico.',
    },
    {
      title: 'La famille : mia madre, mais i miei fratelli',
      body: 'Avec un nom de famille au singulier, sans adjectif ni suffixe, on supprime l’article : mia madre, tuo fratello, suo marito. L’article revient au pluriel (i miei fratelli), avec un adjectif ou un diminutif (la mia sorellina, il mio fratello maggiore), avec loro (la loro madre) et avec mamma, papà (la mia mamma).',
      examples: [
        { en: 'Mia sorella e suo marito abitano a Milano.', fr: 'Ma sœur et son mari habitent à Milan.' },
        { en: 'Ecco i miei fratelli.', fr: 'Voici mes frères.' },
        { en: 'Il loro figlio studia a Pisa.', fr: 'Leur fils fait ses études à Pise.' },
      ],
      tip: 'suo veut dire « son, sa » (à lui ou à elle) : la sua macchina = sa voiture, que le propriétaire soit un homme ou une femme. « Leur » = loro, toujours avec l’article.',
    },
  ],
  exercises: exercises('it-a2-possessives-1', 'A2', { kc: POSS })
    .cloze('Dove sono ___ occhiali?', ['i miei'], 'occhiali est masculin pluriel → i miei.', { hint: 'mes', d: -1.2 })
    .cloze('___ madre è insegnante.', ['Mia'], 'Membre de la famille au singulier → pas d’article : mia madre.', { kc: FAM, hint: 'ma', d: -1.3 })
    .mcq('Paolo vive con ___ ragazza.', ['la sua', 'sua', 'la suo'], 0, 'ragazza (copine) n’est pas un lien de parenté → article : la sua.', { d: -1.0 })
    .mcq('Ecco ___ fratelli.', ['i miei', 'miei', 'i mii'], 0, 'Famille au pluriel → l’article revient : i miei fratelli.', { kc: FAM, d: -0.9 })
    .type('Écris « leur fils » en italien.', ['il loro figlio'], 'loro garde toujours l’article, même avec la famille.', { kc: FAM, d: -0.8 })
    .type('Écris « vos amis » (voi) en italien.', ['i vostri amici'], 'amici est masculin pluriel → i vostri.', { d: -1.2 })
    .order('Un de mes amis habite à Florence.', 'Un mio amico abita a Firenze.', 'un de mes amis = un mio amico.', { distractors: ['di', 'il'], d: -0.9 })
    .tr('Ma sœur et son mari habitent à Milan.', ['Mia sorella e suo marito abitano a Milano.', 'Mia sorella e suo marito vivono a Milano.'], 'Famille au singulier → mia sorella, suo marito, sans article.', { kc: FAM, d: -1.0 })
    .tr('Où est ton téléphone ?', ['Dov’è il tuo telefono?', 'Dove è il tuo telefono?', 'Dov’è il tuo cellulare?', 'Dove è il tuo cellulare?', 'Dove sta il tuo telefono?'], 'ton = il tuo (+ article).', { d: -1.2 })
    .listen('Questa è la mia famiglia: mio padre, mia madre e i miei due fratelli.', 'Combien de frères a-t-elle ?', ['Deux', 'Un', 'Trois'], 0, 'i miei due fratelli = mes deux frères.', { kc: FAM, d: -1.4 })
    .listen('Scusi, è Sua questa borsa? — No, la mia è nera.', 'Le sac est-il à la personne interrogée ?', ['Non, le sien est noir', 'Oui, c’est le sien', 'Elle ne sait pas'], 0,
      'la mia è nera = le mien est noir. Sua (majuscule) = votre, vouvoiement.', { d: -0.9 })
    .dictation('I nostri vicini sono molto gentili.', 'vicini est masculin pluriel → i nostri.', { d: -1.2 })
    .repeat('Il loro appartamento è vicino al nostro ufficio.', 'il loro (invariable) ; il nostro ufficio.', { d: -1.1 })
    .say('Mon père travaille à Rome.', ['Mio padre lavora a Roma', 'Mio papà lavora a Roma', 'Il mio papà lavora a Roma'], 'mio padre sans article ; avec papà, l’article est fréquent.', { kc: FAM, d: -1.2 })
    .answer('Parlami della tua famiglia: come si chiamano i tuoi genitori?', 'Mia madre si chiama Anna e mio padre si chiama Pietro. I miei fratelli abitano a Lione.',
      'mia madre, mio padre (sans article) ; i miei fratelli (avec article).', { kc: FAM, keywords: [['mia', 'mio', 'miei', 'mie']], minWords: 10, d: -0.7 })
    .build(),
};

export const possessives2: Lesson = {
  id: 'it-a2-possessives-2',
  cefr: 'A2',
  unitId: 'it-a2-possessives',
  title: 'Questo et quello',
  subtitle: 'ce…-ci, ce…-là : quel libro, quello zaino, quegli amici',
  kcIds: [DEM, QUELLO],
  estMinutes: 8,
  explanation: [
    {
      title: 'questo : ce qui est proche',
      body: 'questo, questa, questi, queste désignent ce qui est près de celui qui parle. Devant une voyelle, au singulier, on élide souvent : quest’anno, quest’estate. Ils s’emploient aussi seuls, comme pronoms : Preferisco questo.',
      examples: [
        { en: 'Quest’anno vado in Sicilia.', fr: 'Cette année, je vais en Sicile.' },
        { en: 'Preferisco questo maglione, non quello.', fr: 'Je préfère ce pull-ci, pas celui-là.' },
      ],
    },
    {
      title: 'quello : ce qui est loin',
      body: 'Devant un nom, quello change de forme comme l’article défini. Employé seul (pronom), il a seulement quatre formes : quello, quella, quelli, quelle.',
      table: [
        ['il → quel', 'quel ragazzo · i → quei ragazzi'],
        ['lo → quello', 'quello zaino · gli → quegli zaini'],
        ['l’ → quell’', 'quell’albero, quell’amica · gli → quegli alberi'],
        ['la → quella', 'quella casa · le → quelle case'],
        ['pronom', 'quello, quella, quelli, quelle : Quale gelato? Quello al cioccolato.'],
      ],
      examples: [
        { en: 'Chi è quell’uomo laggiù?', fr: 'Qui est cet homme là-bas ?' },
        { en: 'Quei libri? Prendo quelli.', fr: 'Ces livres-là ? Je prends ceux-là.' },
      ],
      tip: 'Le français dit « ce, cet, cette, ces » sans distinguer proche et loin ; l’italien choisit : questo (ici) ou quello (là-bas). Erreur fréquente : « quello libro » ✗ → « quel libro » ✓.',
    },
  ],
  exercises: exercises('it-a2-possessives-2', 'A2', { kc: QUELLO })
    .cloze('___ anno vado in Sicilia.', ['Quest’', 'Questo'], 'cette année = quest’anno (élision devant voyelle, la forme pleine est possible).', { kc: DEM, hint: 'cette', speak: 'Quest’anno vado in Sicilia.', d: -1.1 })
    .mcq('Ti piacciono ___ scarpe in vetrina?', ['quelle', 'quei', 'quelli'], 0, 'scarpe est féminin pluriel → quelle.', { d: -1.0 })
    .mcq('Quale gelato vuoi? — ___ al cioccolato.', ['Quello', 'Quel', 'Quell’'], 0, 'Pronom (sans nom après) → quello.', { d: -0.7 })
    .type('Mets au pluriel : quell’albero', ['quegli alberi'], 'l’albero → gli alberi → quegli alberi.', { d: -0.8 })
    .type('Mets au pluriel : questa camera', ['queste camere'], 'questa → queste, camera → camere.', { kc: DEM, d: -1.3 })
    .order('Je préfère ce pull-ci, pas celui-là.', 'Preferisco questo maglione, non quello.', 'questo = proche ; quello seul = pronom.', { kc: DEM, distractors: ['quel'], d: -0.9 })
    .tr('Ces chaussures sont très belles.', ['Queste scarpe sono molto belle.', 'Quelle scarpe sono molto belle.', 'Queste scarpe sono bellissime.', 'Quelle scarpe sono bellissime.'],
      'queste (proches) ou quelle (éloignées) : les deux traduisent « ces ».', { kc: DEM, d: -1.1 })
    .tr('Qui est cet homme là-bas ?', ['Chi è quell’uomo laggiù?', 'Chi è quell’uomo là?', 'Chi è quell’uomo lì?', 'Chi è quell’uomo là in fondo?', 'Chi è quel signore laggiù?', 'Chi è quel signore là?'],
      'uomo commence par une voyelle → quell’uomo.', { d: -0.8 })
    .mcq('Quel sac la cliente achète-t-elle ?', ['Le noir, à 65 euros', 'Le marron, à 80 euros', 'Aucun des deux'], 0, 'Prendo quella nera = je prends le noir (65 euros).',
      { kc: DEM, passage: 'In un negozio.\nCommessa: Buongiorno, posso aiutarla?\nCliente: Sì, cerco un regalo per mia sorella. Quanto costa quella borsa in vetrina?\nCommessa: Quella marrone costa 80 euro. Questa nera, qui, costa 65.\nCliente: Prendo quella nera: è il suo colore preferito.', d: -0.9 })
    .listen('Questo appartamento è piccolo, ma quello al terzo piano è perfetto.', 'Quel appartement est parfait ?', ['Celui du troisième étage', 'Celui-ci, le petit', 'Aucun'], 0,
      'quello al terzo piano = celui du troisième étage.', { kc: DEM, d: -1.0 })
    .listen('Mi dai quel libro? No, non questo: quello rosso sullo scaffale.', 'Quel livre veut-il ?', ['Le rouge, sur l’étagère', 'Celui-ci, sur la table', 'Le bleu, dans le sac'], 0,
      'quello rosso sullo scaffale = le rouge sur l’étagère.', { d: -0.9 })
    .dictation('Quegli studenti vengono da Lisbona.', 'studenti (s + consonne) → gli studenti → quegli studenti.', { d: -0.9 })
    .repeat('Questa sera mangiamo in quel ristorante vicino alla piazza.', 'questa sera (proche) ; quel ristorante (il → quel).', { kc: DEM, d: -1.2 })
    .say('Ce livre est à moi.', ['Questo libro è mio', 'Questo è il mio libro', 'Quel libro è mio'], 'è mio = c’est à moi (sans article après essere).', { kc: [DEM, POSS], d: -1.0 })
    .answer('Descrivi un oggetto vicino a te e uno lontano.', 'Questo computer è nuovo, ma quella lampada vicino alla finestra è molto vecchia.',
      'Proche → questo, questa ; loin → quel, quello, quella…', { kc: DEM, keywords: [['questo', 'questa', 'questi', 'queste'], ['quello', 'quella', 'quel', 'quei', 'quelle', 'quegli', 'quelli']], minWords: 10, d: -0.7 })
    .build(),
};
