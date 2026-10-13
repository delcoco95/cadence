import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const GREET = 'it.a1.function.greetings';
const PRON = 'it.a1.pronunciation.sounds';
const ESSERE = 'it.a1.grammar.essere';
const SUBJ = 'it.a1.grammar.subject_pronouns';

export const hello1: Lesson = {
  id: 'it-a1-hello-1',
  cefr: 'A1',
  unitId: 'it-a1-hello',
  title: 'Saluer et se présenter',
  subtitle: 'Ciao, buongiorno, mi chiamo… et les sons de l’italien',
  kcIds: [GREET, PRON],
  estMinutes: 8,
  explanation: [
    {
      title: 'Saluer',
      table: [
        ['ciao', 'salut / au revoir (entre amis, on se tutoie)'],
        ['buongiorno', 'bonjour (le matin et l’après-midi)'],
        ['buonasera', 'bonsoir (à partir de 17 h environ)'],
        ['buonanotte', 'bonne nuit (en allant se coucher)'],
        ['salve', 'bonjour (neutre, ni familier ni formel)'],
        ['arrivederci · ArrivederLa', 'au revoir · au revoir (formel, à une personne qu’on vouvoie)'],
      ],
      examples: [
        { en: 'Ciao, come stai? — Bene, grazie. E tu?', fr: 'Salut, comment vas-tu ? — Bien, merci. Et toi ?' },
        { en: 'Buongiorno, signora. Come sta?', fr: 'Bonjour, madame. Comment allez-vous ?' },
      ],
      tip: '« Ciao » veut dire bonjour ET au revoir, mais seulement avec les gens que tu tutoies. Avec un inconnu, un serveur ou un collègue âgé : « Buongiorno » et le vouvoiement.',
    },
    {
      title: 'Se présenter',
      body: 'Mi chiamo… = je m’appelle… On demande Come ti chiami ? (tu) ou Come si chiama ? (vous, formel). On répond à une présentation par Piacere ! (enchanté).',
      examples: [
        { en: 'Mi chiamo Luca. E tu, come ti chiami?', fr: 'Je m’appelle Luca. Et toi, comment tu t’appelles ?' },
        { en: 'Piacere! Io sono Anna.', fr: 'Enchantée ! Moi, c’est Anna.' },
        { en: 'Grazie! — Prego!', fr: 'Merci ! — De rien !' },
      ],
    },
    {
      title: 'Prononciation : ce qui change du français',
      table: [
        ['c, g + e / i', '« tch », « dj » : cena, ciao, gelato, giorno'],
        ['ch, gh + e / i', '« k », « g » dur : chiave, che, spaghetti, ghiaccio'],
        ['gli', '« ly » mouillé : famiglia, figlio'],
        ['gn', 'comme dans « montagne » : gnocchi, bagno'],
        ['sc + e / i', '« ch » : pesce, sciare'],
        ['u · e', 'u = « ou » (tu, uno) ; le e final se prononce toujours (sette)'],
        ['consonnes doubles', 'tenues plus longtemps : pala / palla, caro / carro'],
      ],
      tip: 'Le piège n°1 : lire « ch » à la française. En italien, chi = « ki » : Chiara se dit « Kiara », Michele « Mikélé ». À l’inverse, « ci » se dit « tchi » : ciao = « tchao ».',
    },
  ],
  exercises: exercises('it-a1-hello-1', 'A1', { kc: GREET })
    .mcq('Il est 9 h du matin, tu entres dans une boulangerie. Tu dis :', ['Buongiorno!', 'Buonanotte!', 'Arrivederci!'], 0,
      'Buongiorno = bonjour. Buonanotte = bonne nuit (au coucher) ; arrivederci = au revoir.', { d: -2.7 })
    .mcq('Dans « Chiara », le groupe « ch » se prononce comme…', ['« k » dans « kilo »', '« ch » dans « chat »', '« tch » dans « tchèque »'], 0,
      'ch + i / e = « k » : Chiara se dit « Kiara ».', { kc: PRON, d: -2.2 })
    .cloze('Mi ___ Giulia. E tu?', ['chiamo'], 'Mi chiamo = je m’appelle.', { hint: 'je m’appelle', d: -2.5 })
    .cloze('Ciao, come ___? — Bene, grazie!', ['stai'], 'Come stai ? = comment vas-tu ? Au vouvoiement : Come sta ?', { hint: 'vas-tu', d: -2.2 })
    .type('Comment dit-on « au revoir » en italien (neutre, poli) ?', ['arrivederci', 'arrivederla'], 'Arrivederci = au revoir ; ArrivederLa est la forme très polie, à une seule personne.', { d: -2.3 })
    .type('On te dit « Grazie! ». Que réponds-tu ? (de rien)', ['prego', 'di niente', 'di nulla'], 'Prego = de rien (on entend aussi « di niente »).', { d: -2.1 })
    .order('Je m’appelle Marco, et toi ?', 'Mi chiamo Marco e tu?', 'Mi chiamo + prénom ; e tu ? = et toi ?', { distractors: ['ti'], d: -2.3 })
    .tr('Bonsoir, comment allez-vous ? (vouvoiement)', ['Buonasera, come sta?', 'Buonasera, come sta Lei?', 'Buonasera, Lei come sta?'],
      'Buonasera le soir ; vouvoiement → come sta ? (3ᵉ personne du singulier).', { d: -2.0 })
    .tr('Salut, je m’appelle Sophie.', ['Ciao, mi chiamo Sophie.', 'Ciao, io mi chiamo Sophie.', 'Ciao, sono Sophie.', 'Ciao, io sono Sophie.'],
      'Mi chiamo… ou sono… (je suis…) pour se présenter.', { d: -2.4 })
    .listen('Buonasera, signora Rossi! Come sta?', 'Que dit-on à Mme Rossi ?', ['Bonsoir, comment allez-vous ?', 'Bonjour, comment vas-tu ?', 'Bonne nuit, à demain !'], 0,
      'Buonasera = bonsoir ; come sta ? = comment allez-vous ?', { d: -2.2 })
    .listen('Ciao, io sono Matteo. Piacere!', 'Que fait Matteo ?', ['Il se présente', 'Il dit au revoir', 'Il demande l’heure'], 0,
      'Io sono Matteo = moi, c’est Matteo ; piacere = enchanté.', { d: -2.6 })
    .dictation('Buongiorno, mi chiamo Chiara.', 'Chiara s’écrit avec « ch » (son « k »).', { kc: [GREET, PRON], d: -1.9 })
    .repeat('Ciao! Mi chiamo Gianni. Piacere!', 'gia = « dja » : Gianni se dit « Djanni », avec le n double bien tenu.', { kc: PRON, d: -2.2 })
    .repeat('Cena, chiave, gelato, spaghetti, famiglia, gnocchi.', 'ce = « tché », chia = « kia », ge = « djé », ghe = « gué », glia = « lya », gno = « gno ».', { kc: PRON, d: -2.0 })
    .say('{Enchanté|Enchantée} ! Comment vas-tu ?', ['Piacere! Come stai?', 'Piacere! Tu come stai?', 'Molto piacere! Come stai?'],
      'Piacere = enchanté (invariable) ; come stai ? = comment vas-tu ?', { d: -2.1 })
    .build(),
};

export const hello2: Lesson = {
  id: 'it-a1-hello-2',
  cefr: 'A1',
  unitId: 'it-a1-hello',
  title: 'Essere et les pronoms sujets',
  subtitle: 'Io sono, tu sei, Lei è… et les nationalités',
  kcIds: [ESSERE, SUBJ],
  estMinutes: 8,
  explanation: [
    {
      title: 'Le verbe essere (être)',
      table: [
        ['io sono', 'je suis'],
        ['tu sei', 'tu es'],
        ['lui / lei è', 'il / elle est'],
        ['Lei è', 'vous êtes (vouvoiement d’une personne)'],
        ['noi siamo', 'nous sommes'],
        ['voi siete', 'vous êtes (plusieurs personnes)'],
        ['loro sono', 'ils / elles sont'],
      ],
      examples: [
        { en: 'Sono francese, di Lione.', fr: 'Je suis {français|française}, de Lyon.' },
        { en: 'Marco è italiano e Ana è spagnola.', fr: 'Marco est italien et Ana est espagnole.' },
        { en: 'Di dove siete? — Siamo di Torino.', fr: 'D’où êtes-vous ? — Nous sommes de Turin.' },
      ],
      tip: 'è (il est) porte un accent grave ; e sans accent veut dire « et » : « Marco è alto e simpatico. »',
    },
    {
      title: 'Les pronoms sujets',
      body: 'La terminaison du verbe indique déjà la personne : on omet donc le plus souvent le pronom. Sono stanco = je suis fatigué. On l’exprime pour insister ou opposer : Io sono francese, lui è italiano. Pour vouvoyer une personne, on utilise Lei (souvent avec une majuscule) et le verbe à la 3ᵉ personne du singulier.',
      examples: [
        { en: 'Lei è italiano, signor Bianchi?', fr: 'Vous êtes italien, monsieur Bianchi ?' },
        { en: 'Io sono di Parigi, e tu?', fr: 'Moi, je suis de Paris, et toi ?' },
      ],
      tip: 'Ne mets pas « io » devant chaque verbe comme on met « je » en français : cela sonne insistant. Et attention, sono = « je suis » ou « ils sont » : le contexte tranche.',
    },
    {
      title: 'Nationalités',
      table: [
        ['-o / -a', 'italiano, italiana · spagnolo, spagnola · tedesco, tedesca (allemand)'],
        ['-e (masculin = féminin)', 'francese · inglese · svizzero, svizzera (suisse) · belga'],
      ],
      body: 'Les nationalités s’écrivent avec une minuscule. Pour la ville d’origine : essere di + ville (sono di Marsiglia).',
    },
  ],
  exercises: exercises('it-a1-hello-2', 'A1', { kc: ESSERE })
    .mcq('Qui est français ?', ['Pierre', 'Sofia', 'Personne'], 0,
      'Pierre è francese = Pierre est français. Sofia è italiana.',
      { passage: 'Ciao! Mi chiamo Sofia. Sono italiana, di Torino, e sono studentessa. Il mio amico Pierre è francese, di Lione. Adesso siamo a Roma in vacanza.', d: -2.3 })
    .mcq('Comment dire à une seule personne, poliment : « Vous êtes français ? »', ['Lei è francese?', 'Voi siete francese?', 'Tu sei francese?'], 0,
      'Vouvoiement d’une personne → Lei + 3ᵉ personne du singulier. Voi = plusieurs personnes.', { kc: SUBJ, d: -1.8 })
    .cloze('Marco e Anna ___ di Roma.', ['sono'], 'Marco e Anna = loro (ils) → sono.', { d: -2.2 })
    .cloze('Noi ___ francesi, e voi?', ['siamo'], 'noi → siamo.', { d: -2.4 })
    .type('Quel pronom sujet va avec « siete » ?', ['voi'], 'voi siete = vous êtes (plusieurs personnes).', { kc: SUBJ, d: -2.0 })
    .type('Conjugue essere avec « tu ».', ['sei', 'tu sei'], 'tu sei = tu es.', { d: -2.5 })
    .order('Je suis française et lui est italien.', 'Io sono francese e lui è italiano.', 'On exprime les pronoms pour opposer deux personnes.', { kc: [ESSERE, SUBJ], distractors: ['sei'], d: -2.0 })
    .tr('Nous sommes de Lyon.', ['Siamo di Lione.', 'Noi siamo di Lione.', 'Siamo di Lyon.', 'Noi siamo di Lyon.'],
      'essere di + ville ; Lyon se dit Lione en italien.', { d: -2.0 })
    .tr('Tu es fatigué ?', ['Sei stanco?', 'Tu sei stanco?', 'Sei stanca?', 'Tu sei stanca?'],
      'Sei stanco ? (à un homme) · Sei stanca ? (à une femme). Le pronom tu est facultatif.', { d: -2.0 })
    .listen('Ciao, sono Laura. Sono spagnola, di Madrid.', 'D’où vient Laura ?', ['D’Espagne', 'D’Italie', 'De France'], 0,
      'spagnola = espagnole ; di Madrid = de Madrid.', { d: -2.4 })
    .listen('Voi siete inglesi? — No, siamo tedeschi.', 'Quelle est leur nationalité ?', ['Ils sont allemands', 'Ils sont anglais', 'Ils sont français'], 0,
      'tedeschi = allemands ; inglesi = anglais.', { d: -2.0 })
    .dictation('Lui è italiano e lei è francese.', 'è (est) prend un accent grave ; e (et) n’en a pas.', { kc: [ESSERE, SUBJ], d: -1.8 })
    .repeat('Siamo di Napoli. E voi, di dove siete?', 'Di dove siete ? = d’où êtes-vous ? Accent tonique sur NA : NA-po-li.', { d: -2.0 })
    .say('Je suis {français|française}.', ['Sono francese.', 'Io sono francese.'], 'francese ne change pas au féminin.', { d: -2.6 })
    .say('Vous êtes italien ? (vouvoiement, à un homme)', ['Lei è italiano?', 'È italiano?', 'È italiano Lei?'], 'Vouvoiement → (Lei) è + adjectif.', { kc: SUBJ, d: -1.9 })
    .build(),
};
