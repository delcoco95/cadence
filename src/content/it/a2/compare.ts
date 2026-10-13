import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const COMP = 'it.a2.grammar.comparatives';
const SUP = 'it.a2.grammar.superlatives';
const IMP = 'it.a2.grammar.imperative_tu_voi';
const IMP_LEI = 'it.a2.grammar.imperative_lei';

export const compare1: Lesson = {
  id: 'it-a2-compare-1',
  cefr: 'A2',
  unitId: 'it-a2-compare',
  title: 'Comparatifs et superlatifs',
  subtitle: 'più alto di, il più bello, buonissimo, migliore',
  kcIds: [COMP, SUP],
  estMinutes: 9,
  explanation: [
    {
      title: 'Comparer : più, meno, come',
      body: 'più (plus) et meno (moins) se placent devant l’adjectif. « Que » se dit di devant un nom ou un pronom, et che devant un adjectif, un verbe, un adverbe ou une préposition. L’égalité se dit (così)… come ou (tanto)… quanto.',
      table: [
        ['più / meno… di', 'Roma è più grande di Firenze. · Sono più alto di te.'],
        ['più / meno… che', 'È più facile leggere che parlare. · Fa più caldo a Napoli che a Milano.'],
        ['égalité', 'Luca è alto come suo padre. · Lavoro tanto quanto te.'],
      ],
      examples: [
        { en: 'Il treno è più comodo dell’autobus.', fr: 'Le train est plus confortable que le bus.' },
        { en: 'Questo vino è meno caro di quello.', fr: 'Ce vin est moins cher que celui-là.' },
      ],
      tip: '« que » ne se traduit pas par che devant un nom : « più alto che Marco » ✗ → più alto di Marco ✓. di se contracte avec l’article : dell’autobus, del treno.',
    },
    {
      title: 'Superlatifs et formes irrégulières',
      body: 'Le superlatif relatif se forme avec l’article + più / meno ; « de » se dit di (contracté) : la città più bella d’Italia. Le superlatif absolu remplace la voyelle finale par -issimo : buono → buonissimo (très bon). Certains adjectifs ont aussi une forme irrégulière.',
      table: [
        ['buono · cattivo', 'migliore (meilleur) · peggiore (pire)'],
        ['grande · piccolo', 'maggiore (aîné, plus grand) · minore (cadet)'],
        ['bene · male (adverbes)', 'meglio (mieux) · peggio (pire)'],
        ['-issimo', 'bello → bellissimo · facile → facilissimo · lungo → lunghissimo'],
      ],
      examples: [
        { en: 'È il ristorante più famoso della città.', fr: 'C’est le restaurant le plus célèbre de la ville.' },
        { en: 'Mia sorella maggiore canta meglio di me.', fr: 'Ma sœur aînée chante mieux que moi.' },
        { en: 'La pizza era buonissima!', fr: 'La pizza était délicieuse !' },
      ],
      tip: 'L’italien ne répète pas l’article : « le restaurant le plus célèbre » = il ristorante più famoso (et non « il ristorante il più famoso »).',
    },
  ],
  exercises: exercises('it-a2-compare-1', 'A2', { kc: COMP })
    .cloze('Roma è più grande ___ Firenze.', ['di'], 'Devant un nom → di.', { d: -1.4 })
    .cloze('È più facile leggere ___ parlare.', ['che'], 'Entre deux verbes → che.', { d: -0.9 })
    .mcq('Il treno è più comodo ___ autobus.', ['dell’', 'che l’', 'del'], 0, 'di + l’autobus = dell’autobus.', { d: -1.0 })
    .mcq('Mia sorella canta ___ di me.', ['meglio', 'migliore', 'più bene'], 0, 'Adverbe (chanter bien) → meglio = mieux.', { kc: SUP, d: -0.8 })
    .type('Écris le superlatif absolu de « bello » (masculin singulier).', ['bellissimo'], 'bello → bellissimo (très beau).', { kc: SUP, d: -1.4 })
    .type('Complète : Questo è il ristorante più famoso ___ città.', ['della'], 'de la ville = della città (di + la).', { kc: SUP, d: -1.0 })
    .order('Je suis plus grand que mon frère.', 'Sono più alto di mio fratello.', 'più + adjectif + di + nom.', { distractors: ['che', 'come'], d: -1.2 })
    .tr('Ce vin est moins cher que celui-là.', ['Questo vino è meno caro di quello.', 'Questo vino costa meno di quello.'], 'meno + adjectif + di + pronom.', { d: -1.0 })
    .tr('C’est la plus belle ville d’Italie.', ['È la città più bella d’Italia.', 'È la più bella città d’Italia.', 'È la città più bella dell’Italia.', 'È la più bella città dell’Italia.'],
      'article + nom + più + adjectif + di : la città più bella d’Italia.', { kc: SUP, d: -0.9 })
    .listen('Luca è alto come suo padre, ma è più magro.', 'Comment est Luca par rapport à son père ?', ['Aussi grand, mais plus mince', 'Plus grand et plus mince', 'Moins grand mais plus fort'], 0,
      'alto come = aussi grand que ; più magro = plus mince.', { d: -1.1 })
    .listen('Questo è il gelato migliore della città: è buonissimo!', 'Que dit-elle de la glace ?', ['C’est la meilleure de la ville', 'Elle est trop sucrée', 'Elle est moins bonne qu’avant'], 0,
      'il gelato migliore della città = la meilleure glace de la ville.', { kc: SUP, d: -1.0 })
    .dictation('In estate fa più caldo a Napoli che a Milano.', 'Devant une préposition (a Milano) → che.', { d: -0.8 })
    .repeat('Il mio fratello minore è più alto di me.', 'fratello minore = frère cadet ; avec l’adjectif, l’article revient : il mio fratello minore.', { kc: [COMP, SUP], d: -1.1 })
    .say('Ce film est pire que le premier.', ['Questo film è peggiore del primo', 'Questo film è peggio del primo', 'Questo film è più brutto del primo'], 'peggiore (adjectif) ; à l’oral, peggio est fréquent ; di + il primo = del primo.', { kc: [COMP, SUP], d: -0.8 })
    .answer('Preferisci la città o la campagna? Perché?', 'Preferisco la campagna perché è più tranquilla della città e l’aria è migliore.',
      'più / meno… di, migliore, peggiore…', { keywords: [['più', 'meno', 'migliore', 'peggiore', 'meglio', 'peggio', 'come']], minWords: 10, d: -0.7 })
    .build(),
};

export const compare2: Lesson = {
  id: 'it-a2-compare-2',
  cefr: 'A2',
  unitId: 'it-a2-compare',
  title: 'L’impératif',
  subtitle: 'prendi, non andare, mi dica, scusi',
  kcIds: [IMP, IMP_LEI],
  estMinutes: 9,
  explanation: [
    {
      title: 'tu et voi',
      body: 'Pour voi, l’impératif est identique au présent : parlate, prendete, sentite. Pour tu, les verbes en -are se terminent en -a (parla, guarda), les autres en -i (prendi, senti, finisci). À la forme négative, tu prend non + infinitif.',
      table: [
        ['-are', 'tu : guarda! · voi : guardate!'],
        ['-ere, -ire', 'tu : prendi! senti! · voi : prendete! sentite!'],
        ['irréguliers (tu)', 'va’ / vai · fa’ / fai · da’ / dai · sta’ / stai · di’ · abbi · sii'],
        ['négation tu', 'non + infinitif : Non toccare! Non preoccuparti!'],
      ],
      examples: [
        { en: 'Prendi l’ombrello, sta per piovere.', fr: 'Prends le parapluie, il va pleuvoir.' },
        { en: 'Ragazzi, aprite i libri a pagina dieci.', fr: 'Les enfants, ouvrez vos livres à la page dix.' },
        { en: 'Dimmi la verità!', fr: 'Dis-moi la vérité !' },
      ],
      tip: '« Ne parle pas ! » = Non parlare! (infinitif), et non « non parla ». Les pronoms s’attachent à l’impératif tu / voi : dimmi, guardalo, alzati.',
    },
    {
      title: 'Lei : l’impératif de politesse',
      body: 'Pour vouvoyer une personne (Lei), on inverse les terminaisons : -are → -i, -ere / -ire → -a. Les verbes irréguliers partent de la 1re personne du présent. Les pronoms se placent devant le verbe.',
      table: [
        ['-are → -i', 'scusare → scusi · guardare → guardi · girare → giri'],
        ['-ere, -ire → -a', 'prendere → prenda · sentire → senta · aprire → apra'],
        ['irréguliers', 'vada · venga · faccia · dica · stia · abbia · sia'],
        ['avec pronom', 'Mi dica! · Si accomodi!'],
      ],
      examples: [
        { en: 'Scusi, mi può aiutare?', fr: 'Excusez-moi, vous pouvez m’aider ?' },
        { en: 'Prenda la seconda strada a destra.', fr: 'Prenez la deuxième rue à droite.' },
        { en: 'Buongiorno, si accomodi. Mi dica.', fr: 'Bonjour, asseyez-vous. Je vous écoute.' },
      ],
      tip: 'Le « vous » de politesse à une seule personne se dit avec Lei, pas avec voi : « Prenez ! » à un passant = Prenda! (et non « Prendete! », qui s’adresse à plusieurs personnes).',
    },
  ],
  exercises: exercises('it-a2-compare-2', 'A2', { kc: IMP })
    .cloze('___ l’ombrello, sta per piovere!', ['Prendi'], 'tu + prendere → prendi.', { hint: 'prendere, tu', d: -1.3 })
    .mcq('Luca, non ___ la porta, fa freddo!', ['aprire', 'apri', 'apra'], 0, 'Négation avec tu → non + infinitif.', { d: -0.9 })
    .mcq('Scusi signora, ___ la seconda strada a destra.', ['prenda', 'prendi', 'prendete'], 0, 'Lei → prenda (-ere → -a).', { kc: IMP_LEI, d: -0.8 })
    .type('Écris l’impératif de « guardare » avec tu.', ['guarda', 'guarda!'], '-are → -a pour tu : guarda.', { d: -1.4 })
    .type('Écris l’impératif de politesse (Lei) de « venire ».', ['venga', 'venga!'], 'vengo → venga.', { kc: IMP_LEI, d: -0.8 })
    .order('Dis-moi la vérité !', 'Dimmi la verità!', 'di’ + mi = dimmi : le pronom s’attache et la consonne double.', { distractors: ['mi', 'dici'], d: -0.9 })
    .tr('Ne t’inquiète pas !', ['Non preoccuparti!', 'Non ti preoccupare!'], 'Négation tu : non + infinitif ; le pronom s’attache ou se place devant.', { d: -0.8 })
    .tr('Excusez-moi, où est la gare ? (à une personne)', ['Scusi, dov’è la stazione?', 'Scusi, dove è la stazione?', 'Mi scusi, dov’è la stazione?', 'Mi scusi, dove è la stazione?', 'Scusi, dove si trova la stazione?', 'Mi scusi, dove si trova la stazione?'],
      'Vouvoiement d’une personne → Lei : scusi.', { kc: IMP_LEI, d: -1.1 })
    .mcq('Selon le message, que doit faire Sofia en premier ?', ['Donner à manger au chat', 'Arroser les plantes', 'Fermer la porte à clé'], 0, 'Prima di tutto, da’ da mangiare al gatto = avant tout, donne à manger au chat.',
      { kc: IMP, passage: 'Ciao Sofia, grazie per l’aiuto! Prima di tutto, da’ da mangiare al gatto la mattina e la sera. Poi innaffia le piante del balcone ogni due giorni. Non aprire la finestra della cucina: il gatto scappa! Quando esci, chiudi bene la porta a chiave. Se hai problemi, chiamami. A presto, Laura', d: -0.8 })
    .listen('Buongiorno, si accomodi. Mi dica, che cosa desidera?', 'Où se passe probablement la scène ?', ['Dans un magasin ou un bureau, avec un client', 'Entre deux amis à la maison', 'Dans une salle de classe, avec des enfants'], 0,
      'si accomodi, mi dica : impératif de politesse (Lei) adressé à un client.', { kc: IMP_LEI, d: -0.9 })
    .listen('Ragazzi, fate silenzio e ascoltate bene!', 'À qui parle-t-il ?', ['À un groupe de jeunes', 'À une dame âgée', 'À un seul enfant'], 0,
      'Ragazzi + fate, ascoltate : impératif voi.', { d: -1.1 })
    .dictation('Non preoccuparti, va’ pure a casa.', 'non + infinitif ; va’ = impératif de andare (tu).', { accepted: ['Non preoccuparti, va’ pure a casa.', 'Non preoccuparti, vai pure a casa.', 'Non ti preoccupare, va’ pure a casa.'], d: -0.8 })
    .repeat('Senta, scusi, sa dov’è la farmacia?', 'senta, scusi : impératif de politesse.', { kc: IMP_LEI, d: -1.2 })
    .say('Parle plus lentement, s’il te plaît.', ['Parla più lentamente, per favore', 'Parla più piano, per favore', 'Per favore, parla più lentamente', 'Per favore, parla più piano', 'Parla più lentamente, per piacere', 'Parla più piano, per piacere'], 'tu + parlare → parla.', { kc: [IMP, COMP], d: -1.0 })
    .answer('Un amico visita la tua città per la prima volta: dagli tre consigli.', 'Visita il centro storico, mangia in una trattoria tipica e non prendere la macchina in centro.',
      'Impératif tu : visita, mangia, prendi… ; négation : non + infinitif.', { kc: IMP, keywords: [['visita', 'mangia', 'prendi', 'vai', 'va’', 'prova', 'non', 'fai', 'vieni', 'guarda']], minWords: 10, d: -0.6 })
    .build(),
};
