import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FORM = 'it.a2.grammar.articulated_prepositions';
const PART = 'it.a2.grammar.partitive';
const PLACES = 'it.a2.grammar.prepositions_places';
const MEANS = 'it.a2.grammar.prepositions_da_transport';

export const prepositions1: Lesson = {
  id: 'it-a2-prepositions-1',
  cefr: 'A2',
  unitId: 'it-a2-prepositions',
  title: 'Prépositions articulées',
  subtitle: 'al, nel, dal, sul, del : préposition + article',
  kcIds: [FORM, PART],
  estMinutes: 8,
  explanation: [
    {
      title: 'Préposition + article = un seul mot',
      body: 'Les prépositions di, a, da, in, su se soudent à l’article défini qui suit. La forme dépend de l’article : il, lo, l’, la, i, gli, le.',
      table: [
        ['', 'il · lo · l’ · la · i · gli · le'],
        ['di (de)', 'del · dello · dell’ · della · dei · degli · delle'],
        ['a (à)', 'al · allo · all’ · alla · ai · agli · alle'],
        ['da (de, chez)', 'dal · dallo · dall’ · dalla · dai · dagli · dalle'],
        ['in (dans, en)', 'nel · nello · nell’ · nella · nei · negli · nelle'],
        ['su (sur)', 'sul · sullo · sull’ · sulla · sui · sugli · sulle'],
      ],
      examples: [
        { en: 'Il libro è sul tavolo.', fr: 'Le livre est sur la table.' },
        { en: 'Le chiavi sono nello zaino.', fr: 'Les clés sont dans le sac à dos.' },
        { en: 'È la macchina degli amici di Marco.', fr: 'C’est la voiture des amis de Marco.' },
      ],
      tip: 'En français, seuls « à » et « de » se contractent avec le et les (au, du, aux, des). En italien, in et su se contractent aussi : « dans le » = nel, jamais « in il ». Et con, per restent séparés : con il treno, per la mamma.',
    },
    {
      title: 'Le partitif : del pane, dei biscotti',
      body: 'di + article sert aussi de partitif, comme « du, de la, des » : une quantité indéterminée. On peut aussi dire un po’ di (un peu de), ou ne rien mettre.',
      examples: [
        { en: 'Vorrei del pane, per favore.', fr: 'Je voudrais du pain, s’il vous plaît.' },
        { en: 'Ho comprato delle mele e dei pomodori.', fr: 'J’ai acheté des pommes et des tomates.' },
        { en: 'Ho comprato degli spinaci.', fr: 'J’ai acheté des épinards.' },
      ],
      tip: 'À la négation, pas de partitif : « Je n’ai pas de pain » = Non ho pane (et non « non ho del pane »).',
    },
  ],
  exercises: exercises('it-a2-prepositions-1', 'A2', { kc: FORM })
    .cloze('Il libro è ___ tavolo.', ['sul'], 'su + il = sul.', { hint: 'su + il', d: -1.5 })
    .mcq('Le chiavi sono ___ zaino.', ['nello', 'nel', 'nell’'], 0, 'zaino commence par z → article lo → in + lo = nello.', { d: -1.0 })
    .cloze('Vorrei ___ pane, per favore.', ['del'], 'Partitif : di + il = del (du pain).', { kc: PART, hint: 'du', d: -1.2 })
    .mcq('Al mercato ho comprato ___ spinaci.', ['degli', 'dei', 'delle'], 0, 'spinaci prend l’article gli (s + consonne) → di + gli = degli.', { kc: PART, d: -0.8 })
    .type('Écris la forme contractée : di + le', ['delle'], 'di + le = delle.', { d: -1.5 })
    .type('Écris la forme contractée : in + gli', ['negli'], 'in + gli = negli (negli Stati Uniti, negli occhi).', { d: -1.3 })
    .order('Les clés sont dans le tiroir de la cuisine.', 'Le chiavi sono nel cassetto della cucina.', 'in + il = nel ; di + la = della.', { distractors: ['in', 'di'], d: -1.0 })
    .tr('Le chat dort sur le canapé.', ['Il gatto dorme sul divano.', 'Il gatto sta dormendo sul divano.'], 'sur le = sul (su + il).', { d: -1.1 })
    .tr('Je voudrais de l’eau et des biscuits.', ['Vorrei dell’acqua e dei biscotti.', 'Vorrei un po’ d’acqua e dei biscotti.', 'Vorrei acqua e biscotti.', 'Vorrei dell’acqua e qualche biscotto.', 'Vorrei un po’ di acqua e dei biscotti.'],
      'de l’ = dell’ (di + l’) ; des = dei (di + i).', { kc: PART, d: -0.8 })
    .listen('Il telefono è sulla sedia, vicino alla finestra.', 'Où est le téléphone ?', ['Sur la chaise, près de la fenêtre', 'Sur la table, près de la porte', 'Dans le sac, sous la chaise'], 0,
      'sulla sedia = sur la chaise ; vicino alla finestra = près de la fenêtre.', { d: -1.3 })
    .listen('Al mercato ho comprato delle mele e del formaggio.', 'Qu’a-t-il acheté au marché ?', ['Des pommes et du fromage', 'Des poires et du jambon', 'Du pain et du lait'], 0,
      'delle mele = des pommes ; del formaggio = du fromage.', { kc: PART, d: -1.2 })
    .dictation('Metto i bicchieri nell’armadio.', 'in + l’ = nell’ devant une voyelle (armadio).', { d: -1.0 })
    .repeat('Il museo è nel centro della città.', 'nel centro = in + il ; della città = di + la.', { d: -1.4 })
    .say('Le livre est sur la table.', ['Il libro è sul tavolo', 'Il libro è sulla tavola', 'Il libro sta sul tavolo'], 'sur la table = sul tavolo (tavolo est masculin).', { d: -1.2 })
    .answer('Dove sono le tue chiavi adesso? E il tuo telefono?', 'Le mie chiavi sono nella borsa e il mio telefono è sul tavolo della cucina.',
      'Utilise nel, nella, sul, sulla… selon l’article du nom.', { keywords: [['nel', 'nella', 'nello', 'nei', 'nelle', 'sul', 'sulla', 'sullo', 'sui', 'sulle']], minWords: 10, d: -0.7 })
    .build(),
};

export const prepositions2: Lesson = {
  id: 'it-a2-prepositions-2',
  cefr: 'A2',
  unitId: 'it-a2-prepositions',
  title: 'Lieux et déplacements',
  subtitle: 'a Roma, in Italia, al cinema, dal medico, in treno',
  kcIds: [PLACES, MEANS],
  estMinutes: 8,
  explanation: [
    {
      title: 'a, in ou da ?',
      body: 'Le même choix vaut pour « aller » (andare) et « être » (essere, stare).',
      table: [
        ['a + ville, a + quelques lieux', 'a Roma, a Parigi · a casa, a scuola, a letto, a teatro'],
        ['in + pays, région, et beaucoup de lieux', 'in Italia, in Toscana · in banca, in farmacia, in ufficio, in centro, in montagna, in vacanza'],
        ['a + article (al, allo, alla…)', 'al cinema, al mare, al bar, al supermercato, allo stadio, alla stazione'],
        ['da + personne (= chez)', 'dal medico, dal dentista, da Marco, dai nonni, da me'],
      ],
      examples: [
        { en: 'Mia sorella abita in Spagna, a Madrid.', fr: 'Ma sœur habite en Espagne, à Madrid.' },
        { en: 'Domani vado dal medico, poi passo in farmacia.', fr: 'Demain je vais chez le médecin, puis je passe à la pharmacie.' },
        { en: 'Stasera restiamo a casa.', fr: 'Ce soir, nous restons à la maison.' },
      ],
      tip: '« Chez » se dit da : chez le dentiste = dal dentista, chez Marco = da Marco. « Je vais à la maison » = vado a casa (sans article), jamais « vado alla casa ».',
    },
    {
      title: 'Origine, durée et transports',
      body: 'da indique aussi la provenance (vengo da Milano) et le point de départ d’une durée, avec le présent : abito qui da tre anni = j’habite ici depuis trois ans. Pour l’origine, on dit aussi sono di Milano (je suis de Milan). Les moyens de transport prennent in, sauf à pied.',
      table: [
        ['in + transport', 'in treno, in macchina, in autobus, in aereo, in bici'],
        ['a + pied, cheval', 'a piedi, a cavallo'],
        ['da + durée', 'studio italiano da due anni'],
      ],
      examples: [
        { en: 'Sono di Torino, ma vivo a Londra da sette anni.', fr: 'Je suis de Turin, mais je vis à Londres depuis sept ans.' },
        { en: 'In estate andiamo al mare in macchina.', fr: 'En été, nous allons à la mer en voiture.' },
      ],
      tip: '« Depuis » + durée = da, sans article, et le verbe reste au présent comme en français : lavoro qui da un mese (et non « lavoro qui per un mese »).',
    },
  ],
  exercises: exercises('it-a2-prepositions-2', 'A2', { kc: PLACES })
    .cloze('Stasera vado ___ cinema con Giulia.', ['al'], 'al cinema = a + il.', { d: -1.4 })
    .cloze('Ho mal di denti: domani vado ___ dentista.', ['dal'], 'chez + profession = da + article : dal dentista.', { hint: 'chez le', d: -1.1 })
    .mcq('Mia sorella abita ___ Spagna, ___ Madrid.', ['in / a', 'a / in', 'nella / a'], 0, 'Pays → in Spagna ; ville → a Madrid.', { d: -1.2 })
    .type('Comment dit-on « à pied » en italien ?', ['a piedi'], 'à pied = a piedi (au pluriel).', { kc: MEANS, d: -1.4 })
    .type('Traduis « depuis deux ans » : Studio italiano …', ['da due anni', 'da 2 anni'], 'depuis + durée = da + durée, sans article.', { kc: MEANS, d: -1.0 })
    .order('Ce soir je dîne chez mes parents.', 'Stasera ceno dai miei genitori.', 'chez mes parents = da + i miei genitori = dai miei genitori.', { distractors: ['a', 'casa'], d: -0.8 })
    .tr('Je vais en Italie en train.', ['Vado in Italia in treno.', 'Io vado in Italia in treno.', 'Vado in treno in Italia.', 'Io vado in treno in Italia.'], 'Pays → in Italia ; transport → in treno.', { kc: [PLACES, MEANS], d: -1.2 })
    .tr('Nous sommes à la maison ce soir.', ['Siamo a casa stasera.', 'Stasera siamo a casa.', 'Noi siamo a casa stasera.', 'Stasera noi siamo a casa.', 'Stiamo a casa stasera.', 'Stasera stiamo a casa.'],
      'à la maison = a casa, sans article.', { d: -1.3 })
    .mcq('Comment Luca va-t-il au bureau ?', ['À vélo', 'En bus', 'À pied'], 0, 'vado in ufficio in bici = je vais au bureau à vélo.',
      { kc: MEANS, passage: 'Ciao, sono Luca. Sono di Napoli, ma abito a Bologna da cinque anni. La mattina vado in ufficio in bici. Il venerdì sera vado al cinema o da mia sorella, che abita in centro. A dicembre vado in Germania per lavoro: prendo l’aereo da Bologna.', d: -1.0 })
    .listen('Domani mattina vado dal medico, poi passo in farmacia.', 'Où va-t-elle demain matin ?', ['Chez le médecin, puis à la pharmacie', 'À la pharmacie, puis chez le médecin', 'À la banque, puis au bureau'], 0,
      'dal medico = chez le médecin ; in farmacia = à la pharmacie.', { d: -1.1 })
    .listen('Sono di Torino, ma vivo a Londra da sette anni.', 'Qu’est-ce qui est vrai ?', ['Il est de Turin et vit à Londres depuis sept ans', 'Il est de Londres et vit à Turin', 'Il vit à Turin depuis sept ans'], 0,
      'sono di Torino = origine ; vivo a Londra da sette anni = depuis sept ans.', { kc: MEANS, d: -1.0 })
    .dictation('In estate andiamo al mare in macchina.', 'al mare (a + il) ; in macchina sans article.', { kc: MEANS, d: -1.1 })
    .repeat('Questo fine settimana vado in montagna da mio zio.', 'in montagna ; da mio zio = chez mon oncle.', { d: -1.3 })
    .say('Je vais chez Marco.', ['Vado da Marco', 'Io vado da Marco', 'Vado a casa di Marco', 'Io vado a casa di Marco'], 'chez + personne = da : vado da Marco.', { d: -1.0 })
    .answer('Dove vai di solito il sabato? E con quale mezzo?', 'Il sabato di solito vado al mercato in bici e la sera vado al cinema con gli amici.',
      'Lieux : al, alla, in, da… ; transport : in bici, in macchina, a piedi.', { keywords: [['al', 'alla', 'allo', 'in', 'a', 'da', 'dal', 'dalla', 'dai']], minWords: 10, d: -0.7 })
    .build(),
};
