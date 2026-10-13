import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const ARE = 'it.a1.grammar.present_are';
const NEG = 'it.a1.grammar.negation';
const QUEST = 'it.a1.grammar.questions';

export const presentAre1: Lesson = {
  id: 'it-a1-present-are-1',
  cefr: 'A1',
  unitId: 'it-a1-present-are',
  title: 'Les verbes en -are',
  subtitle: 'Parlo, parli, parla… et la négation non',
  kcIds: [ARE, NEG],
  estMinutes: 8,
  explanation: [
    {
      title: 'Présent des verbes en -are',
      body: 'On enlève -are et on ajoute la terminaison. Verbes utiles : parlare, abitare, lavorare, mangiare, studiare, ascoltare, guardare, comprare, cercare, pagare, arrivare.',
      table: [
        ['io parlo', 'je parle'],
        ['tu parli', 'tu parles'],
        ['lui / lei / Lei parla', 'il / elle parle · vous parlez'],
        ['noi parliamo', 'nous parlons'],
        ['voi parlate', 'vous parlez'],
        ['loro parlano', 'ils / elles parlent'],
      ],
      examples: [
        { en: 'Abito a Lione e lavoro in una banca.', fr: 'J’habite à Lyon et je travaille dans une banque.' },
        { en: 'Ragazzi, parlate inglese?', fr: 'Les jeunes, vous parlez anglais ?' },
      ],
      tip: 'loro parlano : l’accent tombe sur PAR, pas sur -ano. De même : ABitano, LAvorano.',
    },
    {
      title: 'Orthographe : -care, -gare, -iare',
      table: [
        ['cercare, pagare', 'on ajoute un h devant i : cerchi, cerchiamo · paghi, paghiamo'],
        ['mangiare, studiare', 'un seul i : mangi, mangiamo · studi, studiamo'],
      ],
    },
    {
      title: 'La négation',
      body: 'On place non devant le verbe. Il n’y a pas de second mot comme « pas ».',
      examples: [
        { en: 'Non parlo tedesco.', fr: 'Je ne parle pas allemand.' },
        { en: 'Marta non mangia carne.', fr: 'Marta ne mange pas de viande.' },
      ],
      tip: '« ne… pas » = non tout seul. Et « pas de viande » se dit sans « di » : non mangio carne.',
    },
  ],
  exercises: exercises('it-a1-present-are-1', 'A1', { kc: ARE, tense: 'present' })
    .mcq('Noi ___ italiano.', ['parliamo', 'parlate', 'parlano'], 0, 'noi → -iamo : parliamo.', { d: -2.3 })
    .mcq('Tu ___ in centro?', ['abiti', 'abita', 'abito'], 0, 'tu → -i : abiti.', { d: -2.2 })
    .cloze('Loro ___ in un ristorante.', ['lavorano'], 'loro → -ano : lavorano (accent sur LA).', { hint: 'lavorare', d: -2.0 })
    .cloze('Io ___ mangio carne.', ['non'], 'La négation se place devant le verbe : non mangio.', { kc: NEG, d: -2.6 })
    .type('Conjugue « mangiare » avec « tu ».', ['mangi', 'tu mangi'], 'Un seul i : tu mangi.', { d: -1.7 })
    .type('Conjugue « cercare » avec « noi ».', ['cerchiamo', 'noi cerchiamo'], 'On ajoute un h pour garder le son « k » : cerchiamo.', { d: -1.6 })
    .order('Je ne parle pas allemand.', 'Non parlo tedesco.', 'non devant le verbe, rien après.', { kc: NEG, distractors: ['no'], d: -2.2 })
    .tr('Elle travaille à Milan.', ['Lavora a Milano.', 'Lei lavora a Milano.'], 'lei → lavora ; a + ville.', { d: -2.1 })
    .tr('Nous n’écoutons pas la radio.', ['Non ascoltiamo la radio.', 'Noi non ascoltiamo la radio.'], 'non + ascoltiamo.', { kc: [ARE, NEG], d: -1.8 })
    .listen('Abito a Bologna, ma lavoro a Modena.', 'Où travaille la personne ?', ['À Modène', 'À Bologne', 'À Milan'], 0,
      'abito a Bologna = j’habite à Bologne ; lavoro a Modena = je travaille à Modène.', { d: -2.0 })
    .listen('Non mangio carne, mangio solo pesce e verdura.', 'Que ne mange pas la personne ?', ['De la viande', 'Du poisson', 'Des légumes'], 0,
      'non mangio carne = je ne mange pas de viande.', { kc: NEG, d: -1.9 })
    .dictation('Parlate inglese o francese?', 'voi → parlate ; o = ou.', { d: -1.8 })
    .repeat('Parlo, parli, parla, parliamo, parlate, parlano.', 'Accent : PAR-lo, PAR-li, PAR-la, par-LIA-mo, par-LA-te, PAR-la-no.', { d: -2.2 })
    .say('Je parle un peu italien.', ['Parlo un po’ di italiano.', 'Parlo un po’ l’italiano.', 'Parlo un po’ italiano.', 'Io parlo un po’ di italiano.'],
      'un po’ (di) = un peu (de).', { d: -1.8 })
    .say('Tu ne travailles pas aujourd’hui ?', ['Non lavori oggi?', 'Oggi non lavori?', 'Tu non lavori oggi?'], 'non + lavori ; oggi = aujourd’hui.', { kc: [ARE, NEG], d: -1.8 })
    .build(),
};

export const presentAre2: Lesson = {
  id: 'it-a1-present-are-2',
  cefr: 'A1',
  unitId: 'it-a1-present-are',
  title: 'Poser des questions',
  subtitle: 'Dove, quando, come, perché, quanto…',
  kcIds: [QUEST, ARE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Questions fermées',
      body: 'L’ordre des mots ne change pas : seule l’intonation monte. Parli italiano? = Tu parles italien ?',
      tip: 'Pas d’« est-ce que » ni d’inversion du sujet : « Est-ce que tu habites ici ? » = Abiti qui ?',
    },
    {
      title: 'Les mots interrogatifs',
      table: [
        ['chi ?', 'qui ? (se dit « ki »)'],
        ['che cosa ? · cosa ? · che ?', 'que ? quoi ?'],
        ['dove ?', 'où ?'],
        ['quando ?', 'quand ?'],
        ['come ?', 'comment ?'],
        ['perché ?', 'pourquoi ? (et parce que)'],
        ['quanto, quanta, quanti, quante ?', 'combien (de) ? s’accorde avec le nom'],
        ['quale ? · qual è ?', 'quel ? quelle ? · quel est ?'],
      ],
      examples: [
        { en: 'Dove abita Marco?', fr: 'Où habite Marco ?' },
        { en: 'Quanti anni hai?', fr: 'Quel âge as-tu ?' },
        { en: 'Perché studi l’italiano? — Perché amo l’Italia.', fr: 'Pourquoi tu étudies l’italien ? — Parce que j’aime l’Italie.' },
      ],
      tip: 'Qual è s’écrit sans apostrophe. Et quanto s’accorde : quante persone (f. pl.), quanti euro (m. pl.).',
    },
  ],
  exercises: exercises('it-a1-present-are-2', 'A1', { kc: QUEST, tense: 'present' })
    .mcq('___ abiti? — A Firenze.', ['Dove', 'Quando', 'Chi'], 0, 'La réponse est un lieu → dove.', { d: -2.4 })
    .cloze('___ persone ci sono?', ['Quante'], 'persone est féminin pluriel → quante.', { hint: 'combien de', d: -1.7 })
    .cloze('___ è il tuo numero di telefono?', ['Qual'], 'Qual è, sans apostrophe.', { hint: 'quel', d: -1.6 })
    .mcq('Où sont Elena et Sara ?', ['Au bar, sur la place', 'À la maison', 'Au travail'], 0,
      'siamo al bar Centrale, in piazza = nous sommes au bar Centrale, sur la place.',
      { passage: 'Ciao Luca! Io e Sara siamo al bar Centrale, in piazza. Quando arrivi? Ordiniamo un aperitivo anche per te? A dopo!\nElena', d: -1.9 })
    .type('Comment dit-on « pourquoi » en italien ?', ['perché'], 'perché = pourquoi, et aussi parce que.', { d: -2.3 })
    .type('Mot interrogatif pour « qui » ?', ['chi'], 'chi se prononce « ki ».', { d: -2.2 })
    .order('Où travaille ta sœur ?', 'Dove lavora tua sorella?', 'Mot interrogatif + verbe + sujet.', { distractors: ['che'], d: -1.8 })
    .tr('Qu’est-ce que tu manges ?', ['Che cosa mangi?', 'Cosa mangi?', 'Che mangi?', 'Tu cosa mangi?', 'Che cosa mangi tu?'],
      'Che cosa / cosa / che = qu’est-ce que.', { d: -1.8 })
    .tr('Quand est-ce que vous arrivez ? (plusieurs personnes)', ['Quando arrivate?', 'Voi quando arrivate?', 'Quando arrivate voi?'],
      'quando + verbe ; voi → arrivate.', { kc: [QUEST, ARE], d: -1.8 })
    .listen('Chi è quel ragazzo? — È Paolo, il fratello di Anna.', 'Qui est le garçon ?', ['Le frère d’Anna', 'Le père d’Anna', 'Un ami de Paolo'], 0,
      'il fratello di Anna = le frère d’Anna.', { d: -1.8 })
    .listen('Quanto costa il biglietto? — Due euro.', 'Combien coûte le billet ?', ['2 euros', '12 euros', '20 euros'], 0, 'due euro = 2 euros (euro est invariable).', { d: -2.2 })
    .dictation('Come stai e dove abiti adesso?', 'come = comment ; dove = où ; adesso = maintenant.', { d: -1.7 })
    .repeat('Perché studi l’italiano? — Perché amo l’Italia!', 'perché : ch = « k », é final fermé et accentué.', { d: -2.0 })
    .say('Combien ça coûte ?', ['Quanto costa?', 'Quanto costa questo?', 'Quanto viene?'], 'Quanto costa ? = combien ça coûte ?', { d: -2.2 })
    .say('Où habites-tu ?', ['Dove abiti?', 'Tu dove abiti?', 'Dove abiti tu?'], 'dove + abiti.', { kc: [QUEST, ARE], d: -2.3 })
    .build(),
};
