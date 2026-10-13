import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const GENDER = 'it.a1.grammar.noun_gender';
const PLURAL = 'it.a1.grammar.noun_plural';
const INDEF = 'it.a1.grammar.indefinite_articles';

export const nouns1: Lesson = {
  id: 'it-a1-nouns-1',
  cefr: 'A1',
  unitId: 'it-a1-nouns',
  title: 'Masculin, féminin, pluriel',
  subtitle: 'libro, casa, chiave… et leurs pluriels sans -s',
  kcIds: [GENDER, PLURAL],
  estMinutes: 8,
  explanation: [
    {
      title: 'Le genre des noms',
      table: [
        ['-o', 'presque toujours masculin : libro, ragazzo, telefono'],
        ['-a', 'presque toujours féminin : casa, ragazza, pizza'],
        ['-e', 'masculin ou féminin : pane (m.), mare (m.), chiave (f.), notte (f.)'],
      ],
      body: 'Les noms en -e ne disent pas leur genre : apprends-les avec leur article. Quelques exceptions courantes : la mano (la main), il problema, la foto, la radio.',
      tip: 'Le genre ne suit pas toujours le français : il mare (la mer), il fiore (la fleur), il dente (la dent) sont masculins.',
    },
    {
      title: 'Le pluriel : on change la voyelle finale',
      table: [
        ['-o → -i', 'libro → libri · ragazzo → ragazzi'],
        ['-a → -e', 'casa → case · ragazza → ragazze'],
        ['-e → -i', 'chiave → chiavi · studente → studenti'],
        ['-ca / -ga → -che / -ghe', 'amica → amiche · riga → righe (le h garde le son dur)'],
        ['invariables', 'mots accentués (città, caffè), mots étrangers (bar, sport), mots abrégés (foto, cinema)'],
      ],
      examples: [
        { en: 'Un caffè e due cornetti, per favore.', fr: 'Un café et deux croissants, s’il vous plaît.' },
        { en: 'Due pizze e tre birre!', fr: 'Deux pizzas et trois bières !' },
      ],
      tip: 'Jamais de -s au pluriel : « due pizzas » ✗ → « due pizze » ✓, « due caffès » ✗ → « due caffè » ✓.',
    },
  ],
  exercises: exercises('it-a1-nouns-1', 'A1', { kc: PLURAL })
    .mcq('Quel mot est féminin ?', ['casa', 'libro', 'telefono'], 0, 'casa se termine en -a → féminin. libro et telefono (-o) sont masculins.', { kc: GENDER, d: -2.6 })
    .mcq('« Mare » (la mer) est en italien…', ['masculin', 'féminin', 'masculin ou féminin, au choix'], 0,
      'il mare est masculin, contrairement à « la mer ».', { kc: GENDER, d: -1.8 })
    .cloze('Un libro, due ___.', ['libri'], '-o → -i : libro → libri.', { d: -2.5 })
    .cloze('Una chiave, tre ___.', ['chiavi'], 'Les noms en -e font leur pluriel en -i, qu’ils soient masculins ou féminins.', { d: -2.0 })
    .type('Pluriel de « città » ?', ['città'], 'Mot accentué sur la dernière voyelle → invariable : una città, due città.', { d: -1.8 })
    .type('Pluriel de « amica » (amie) ?', ['amiche'], '-ca → -che : le h garde le son « k ».', { d: -1.7 })
    .order('Deux cafés et trois croissants.', 'Due caffè e tre cornetti.', 'caffè est invariable ; cornetto → cornetti.', { distractors: ['caffès'], d: -2.1 })
    .tr('Deux sacs à dos et trois livres.', ['Due zaini e tre libri.', '2 zaini e 3 libri.'], 'zaino → zaini, libro → libri.', { d: -2.0 })
    .tr('Deux garçons et trois filles.', ['Due ragazzi e tre ragazze.', '2 ragazzi e 3 ragazze.'], 'ragazzo → ragazzi (garçons), ragazza → ragazze (filles).', { d: -2.1 })
    .listen('Vorrei due gelati e un caffè.', 'Que commande la personne ?', ['Deux glaces et un café', 'Une glace et deux cafés', 'Deux cafés et un gâteau'], 0,
      'due gelati = deux glaces ; un caffè = un café. Vorrei = je voudrais.', { d: -2.2 })
    .listen('Due cappuccini e tre cornetti, per favore.', 'Combien de croissants ?', ['Trois', 'Deux', 'Un'], 0, 'tre cornetti = trois croissants.', { d: -2.4 })
    .dictation('Due ragazze e tre ragazzi.', '-a → -e au féminin, -o → -i au masculin.', { kc: [GENDER, PLURAL], d: -1.9 })
    .repeat('Una pizza, due pizze. Un gelato, due gelati.', 'zz se prononce « dz » appuyé ; le e final se prononce toujours.', { kc: [GENDER, PLURAL], d: -2.3 })
    .say('Deux cafés, s’il vous plaît.', ['Due caffè, per favore.', 'Due caffè, per piacere.'], 'caffè est invariable au pluriel.', { d: -2.3 })
    .say('Deux pizzas et trois bières.', ['Due pizze e tre birre.', 'Due pizze e tre birre, per favore.'], 'pizza → pizze, birra → birre.', { d: -2.0 })
    .build(),
};

export const nouns2: Lesson = {
  id: 'it-a1-nouns-2',
  cefr: 'A1',
  unitId: 'it-a1-nouns',
  title: 'Un, uno, una, un’',
  subtitle: 'L’article indéfini et les premières commandes',
  kcIds: [INDEF, GENDER],
  estMinutes: 8,
  explanation: [
    {
      title: 'L’article indéfini',
      table: [
        ['un', 'masculin, cas général : un libro, un amico'],
        ['uno', 'masculin devant s + consonne, z, gn, ps, y : uno studente, uno zaino, uno psicologo'],
        ['una', 'féminin devant consonne : una casa, una studentessa'],
        ['un’', 'féminin devant voyelle : un’amica, un’arancia'],
      ],
      examples: [
        { en: 'Ho un amico a Roma e un’amica a Milano.', fr: 'J’ai un ami à Rome et une amie à Milan.' },
        { en: 'Ecco uno zaino e una borsa.', fr: 'Voici un sac à dos et un sac à main.' },
      ],
      tip: 'Pas d’apostrophe au masculin (un amico), apostrophe au féminin (un’amica). À l’écrit, l’apostrophe indique le genre.',
    },
    {
      title: 'Commander poliment',
      body: 'Vorrei… = je voudrais… est la formule la plus utile au bar et au restaurant. Ecco… = voici… / voilà…',
      examples: [
        { en: 'Vorrei un caffè e una spremuta, per favore.', fr: 'Je voudrais un café et un jus d’orange pressé, s’il vous plaît.' },
        { en: 'Ecco un cappuccino. Altro?', fr: 'Voici un cappuccino. Autre chose ?' },
      ],
      tip: 'Le genre peut différer du français : « une glace » = un gelato (masculin). Et « une orange » = un’arancia, avec apostrophe.',
    },
  ],
  exercises: exercises('it-a1-nouns-2', 'A1', { kc: INDEF })
    .mcq('___ studente', ['uno', 'un', 'una'], 0, 's + consonne (st) → uno studente.', { d: -2.0 })
    .mcq('___ amica', ['un’', 'una', 'un'], 0, 'Féminin devant voyelle → un’amica, avec apostrophe.', { d: -2.0 })
    .cloze('Ecco ___ zaino.', ['uno'], 'Devant z → uno : uno zaino (un sac à dos).', { d: -1.9 })
    .mcq('Que commande le client en plus du café et de la brioche ?', ['Un jus d’orange pressé', 'Une glace', 'Un thé'], 0,
      'una spremuta d’arancia = un jus d’orange pressé. Le client se corrige : spremuta est féminin, donc una.',
      { passage: '— Buongiorno! Un caffè e una brioche, per favore.\n— Ecco un caffè e una brioche. Altro?\n— Sì, uno spremuta… no, scusi: una spremuta d’arancia!\n— Perfetto.', d: -1.9 })
    .type('Article indéfini devant « arancia » (orange, féminin) ?', ['un’', 'un’arancia'], 'Féminin devant voyelle → un’arancia.', { d: -1.8 })
    .type('Article indéfini devant « caffè » ?', ['un', 'un caffè'], 'Masculin devant consonne → un caffè.', { d: -2.5 })
    .order('Je voudrais un café et un jus d’orange pressé.', 'Vorrei un caffè e una spremuta.', 'caffè (m.) → un ; spremuta (f.) → una.', { distractors: ['uno'], d: -2.1 })
    .tr('Une amie et un ami.', ['Un’amica e un amico.', 'Un amico e un’amica.'], 'un’amica (apostrophe, féminin) ; un amico (sans apostrophe, masculin).', { d: -1.9 })
    .tr('Je voudrais une glace, s’il vous plaît.', ['Vorrei un gelato, per favore.', 'Vorrei un gelato, per piacere.'],
      'gelato est masculin : un gelato, alors que « glace » est féminin.', { kc: [INDEF, GENDER], d: -2.0 })
    .listen('Un tè e una spremuta, per favore.', 'Que commande-t-on ?', ['Un thé et un jus d’orange pressé', 'Un café et une glace', 'Deux thés'], 0,
      'un tè = un thé ; una spremuta = un jus pressé.', { d: -2.2 })
    .listen('Ecco uno zaino, un libro e un’agenda.', 'Combien d’objets sont cités ?', ['Trois', 'Deux', 'Quatre'], 0,
      'uno zaino, un libro, un’agenda : trois objets.', { d: -2.0 })
    .dictation('Vorrei un panino e un’aranciata.', 'aranciata est féminin et commence par une voyelle → un’aranciata.', { d: -1.8 })
    .repeat('Uno studente, una studentessa, un’amica.', 'un’amica se prononce d’un seul souffle : « ounamika ».', { d: -2.1 })
    .say('Un café, s’il vous plaît.', ['Un caffè, per favore.', 'Un caffè, per piacere.', 'Vorrei un caffè, per favore.'], 'caffè est masculin → un caffè.', { d: -2.6 })
    .say('Je voudrais une orange et un sandwich.', ['Vorrei un’arancia e un panino.', 'Vorrei un’arancia e un panino, per favore.'],
      'un’arancia (f., voyelle) ; un panino (m.).', { d: -1.8 })
    .build(),
};
