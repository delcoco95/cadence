import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const AVERE = 'it.a1.grammar.avere';
const ADJ = 'it.a1.grammar.adjective_agreement';
const MOLTO = 'it.a1.grammar.molto';

export const avere1: Lesson = {
  id: 'it-a1-avere-1',
  cefr: 'A1',
  unitId: 'it-a1-avere',
  title: 'Le verbe avere',
  subtitle: 'Ho, hai, ha… l’âge, la faim, le froid',
  kcIds: [AVERE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Conjugaison',
      table: [
        ['io ho', 'j’ai'],
        ['tu hai', 'tu as'],
        ['lui / lei / Lei ha', 'il / elle a · vous avez (vouvoiement)'],
        ['noi abbiamo', 'nous avons'],
        ['voi avete', 'vous avez'],
        ['loro hanno', 'ils / elles ont'],
      ],
      examples: [
        { en: 'Ho un fratello e una sorella.', fr: 'J’ai un frère et une sœur.' },
        { en: 'Avete una camera libera?', fr: 'Vous avez une chambre libre ?' },
      ],
      tip: 'Le h ne se prononce jamais : ho = « o », hai = « aï », hanno = « anno ». Il sert à distinguer ho (j’ai) de o (ou), ha (il a) de a (à).',
    },
    {
      title: 'L’âge et les sensations',
      body: 'Comme en français, l’âge se dit avec avere : Quanti anni hai ? — Ho trent’anni. Les sensations aussi, sans article : avere fame (faim), sete (soif), caldo (chaud), freddo (froid), sonno (sommeil), fretta (être pressé), ragione (raison).',
      examples: [
        { en: 'Quanti anni ha tua figlia? — Ha sei anni.', fr: 'Quel âge a ta fille ? — Elle a six ans.' },
        { en: 'Abbiamo fame e sete.', fr: 'Nous avons faim et soif.' },
      ],
      tip: '« Je suis pressé » se dit avec avere : Ho fretta. Et « j’ai chaud » = Ho caldo, sans article.',
    },
  ],
  exercises: exercises('it-a1-avere-1', 'A1', { kc: AVERE })
    .mcq('Io ___ fame.', ['ho', 'ha', 'hai'], 0, 'io → ho.', { d: -2.5 })
    .mcq('Loro ___ due figli.', ['hanno', 'avete', 'abbiamo'], 0, 'loro → hanno.', { d: -2.2 })
    .cloze('Quanti anni ___? — Ho venticinque anni.', ['hai'], 'Question à tu → hai.', { d: -2.1 })
    .cloze('Noi ___ sete.', ['abbiamo'], 'noi → abbiamo.', { d: -2.0 })
    .type('Conjugue avere avec « voi ».', ['avete', 'voi avete'], 'voi avete = vous avez.', { d: -2.0 })
    .type('Comment dit-on « j’ai froid » ?', ['ho freddo', 'io ho freddo'], 'avere freddo, sans article.', { d: -1.9 })
    .order('Mon frère a dix-huit ans.', 'Mio fratello ha diciotto anni.', 'L’âge → avere + anni, comme en français.', { distractors: ['è'], d: -1.8 })
    .tr('Tu as faim ?', ['Hai fame?', 'Tu hai fame?'], 'avere fame = avoir faim.', { d: -2.3 })
    .tr('Nous avons un chat et un chien.', ['Abbiamo un gatto e un cane.', 'Noi abbiamo un gatto e un cane.'], 'noi → abbiamo ; un gatto, un cane.', { d: -2.0 })
    .listen('Ho sonno e ho anche freddo.', 'Comment se sent la personne ?', ['Elle a sommeil et froid', 'Elle a faim et soif', 'Elle est pressée'], 0,
      'avere sonno = avoir sommeil ; avere freddo = avoir froid.', { d: -2.0 })
    .listen('Quanti anni ha tua nonna? — Ha novant’anni!', 'Quel âge a la grand-mère ?', ['90 ans', '19 ans', '60 ans'], 0,
      'novanta = 90 ; novant’anni = 90 ans.', { d: -1.8 })
    .dictation('Abbiamo fretta, ciao!', 'avere fretta = être pressé.', { d: -1.8 })
    .repeat('Ho, hai, ha, abbiamo, avete, hanno.', 'Le h est muet : « o, aï, a, abbiamo, avete, anno ».', { d: -2.4 })
    .say('J’ai trente ans.', ['Ho trent’anni.', 'Io ho trent’anni.', 'Ho trenta anni.'], 'trenta + anni → trent’anni.', { d: -2.0 })
    .say('Vous avez raison ! (vouvoiement)', ['Ha ragione!', 'Lei ha ragione!'], 'avere ragione = avoir raison ; Lei → ha.', { d: -1.8 })
    .build(),
};

export const avere2: Lesson = {
  id: 'it-a1-avere-2',
  cefr: 'A1',
  unitId: 'it-a1-avere',
  title: 'Décrire : adjectifs, couleurs, molto',
  subtitle: 'Una macchina rossa, le scarpe blu, molto bello',
  kcIds: [ADJ, MOLTO],
  estMinutes: 9,
  explanation: [
    {
      title: 'L’accord de l’adjectif',
      table: [
        ['-o / -a / -i / -e', 'rosso, rossa, rossi, rosse · alto, alta, alti, alte'],
        ['-e / -e / -i / -i', 'verde, verde, verdi, verdi · grande, grandi · francese, francesi'],
        ['invariables', 'blu, rosa, viola : le scarpe blu, una borsa rosa'],
      ],
      body: 'L’adjectif se place en général après le nom : una macchina rossa. Couleurs : rosso, giallo, verde, blu, nero, bianco, grigio, marrone, arancione, rosa, viola. Les yeux bleu clair : azzurri.',
      examples: [
        { en: 'Ho una macchina rossa e una bici verde.', fr: 'J’ai une voiture rouge et un vélo vert.' },
        { en: 'Giulia ha gli occhi neri e i capelli biondi.', fr: 'Giulia a les yeux noirs et les cheveux blonds.' },
      ],
      tip: 'Les adjectifs en -e ne changent pas au féminin : « una casa grande », jamais « granda ». bianco → bianche, comme amica → amiche.',
    },
    {
      title: 'molto : très ou beaucoup de',
      table: [
        ['molto + adjectif (très)', 'invariable : è molto bella, sono molto stanchi'],
        ['molto + nom (beaucoup de)', 's’accorde : molto tempo, molta acqua, molti amici, molte persone'],
      ],
      examples: [
        { en: 'Il film è molto bello.', fr: 'Le film est très beau.' },
        { en: 'Oggi c’è molta gente in centro.', fr: 'Aujourd’hui il y a beaucoup de monde en ville.' },
      ],
      tip: 'Pas de « di » après molto : « beaucoup d’amis » = molti amici, pas « molto di amici ».',
    },
  ],
  exercises: exercises('it-a1-avere-2', 'A1', { kc: ADJ })
    .mcq('Due macchine ___', ['rosse', 'rossi', 'rossa'], 0, 'macchine est féminin pluriel → rosse.', { d: -1.9 })
    .cloze('Le scarpe di Anna sono ___.', ['blu'], 'blu est invariable.', { hint: 'bleues', d: -1.8 })
    .cloze('Ho ___ amici a Roma.', ['molti', 'tanti'], 'Devant un nom masculin pluriel → molti (beaucoup de). tanti est un synonyme.', { kc: MOLTO, hint: 'beaucoup de', d: -1.7 })
    .mcq('De quelle couleur sont les yeux de Giulia ?', ['Verts', 'Noirs', 'Bleus'], 0,
      'gli occhi verdi = les yeux verts ; i capelli neri = les cheveux noirs.',
      { passage: 'Questa è la mia amica Giulia. Ha ventotto anni, è alta e ha i capelli neri e gli occhi verdi. È molto simpatica. Ha un cane piccolo e bianco.', d: -1.8 })
    .type('Féminin pluriel de « bianco » ?', ['bianche'], '-co → -che au féminin pluriel : le h garde le son « k ».', { d: -1.6 })
    .type('Complète « Elle est très sympathique » : Lei è ___ simpatica.', ['molto'], 'Devant un adjectif, molto = très, invariable.', { kc: MOLTO, d: -2.2 })
    .order('Marco a un très beau chat noir.', 'Marco ha un gatto nero molto bello.', 'Les adjectifs suivent le nom ; molto devant l’adjectif.', { kc: [ADJ, MOLTO], distractors: ['nera'], d: -1.8 })
    .tr('Les filles sont très contentes.', ['Le ragazze sono molto contente.', 'Le ragazze sono molto felici.', 'Le ragazze sono contentissime.'],
      'ragazze (f. pl.) → contente ; molto ne bouge pas devant un adjectif.', { kc: [ADJ, MOLTO], d: -1.7 })
    .tr('J’ai une voiture rouge.', ['Ho una macchina rossa.', 'Io ho una macchina rossa.', 'Ho un’auto rossa.', 'Ho un’automobile rossa.'],
      'macchina (f.) → rossa, après le nom.', { d: -2.0 })
    .listen('Cerco una borsa nera, non marrone.', 'Quel sac cherche-t-elle ?', ['Un sac noir', 'Un sac marron', 'Un sac rouge'], 0, 'nera = noire ; non marrone = pas marron.', { d: -2.0 })
    .listen('Oggi c’è molta gente in centro.', 'Que dit-on du centre-ville ?', ['Il y a beaucoup de monde', 'Il est très calme', 'Il est fermé'], 0,
      'molta gente = beaucoup de monde (gente est féminin singulier).', { kc: MOLTO, d: -1.7 })
    .dictation('Ho gli occhi azzurri e i capelli biondi.', 'occhi (pl. de occhio) → azzurri ; capelli → biondi.', { d: -1.7 })
    .repeat('Rosso, giallo, verde, blu, bianco e nero.', 'gia = « dja » : giallo ; les doubles ss et ll se tiennent.', { d: -2.3 })
    .say('C’est très bon !', ['È molto buono!', 'È buonissimo!', 'Molto buono!'], 'molto + adjectif, ou le superlatif -issimo.', { kc: MOLTO, d: -2.2 })
    .say('Les chaussures sont noires.', ['Le scarpe sono nere.'], 'scarpe (f. pl.) → nere.', { d: -1.9 })
    .build(),
};
