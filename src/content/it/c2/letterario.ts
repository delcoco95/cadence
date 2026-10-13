import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const TRAP = 'it.c2.grammar.trapassato_remoto';
const ABS = 'it.c2.grammar.absolute_participle';
const LEX = 'it.c2.vocabulary.literary_lexicon';
const SYN = 'it.c2.grammar.literary_syntax';

export const letterario1: Lesson = {
  id: 'it-c2-letterario-1',
  cefr: 'C2',
  unitId: 'it-c2-letterario',
  title: 'Le récit littéraire',
  subtitle: 'Appena ebbe finito, terminata la cena',
  kcIds: [TRAP, ABS],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le trapassato remoto',
      body: 'Auxiliaire au passato remoto + participe : ebbe finito, fu partito. Il marque une antériorité immédiate, uniquement dans une subordonnée de temps (dopo che, appena, non appena, quando, come, allorché) dont la principale est au passato remoto.',
      table: [
        ['Appena ebbe finito di cenare, uscì.', 'Dès qu’il eut fini de dîner, il sortit.'],
        ['Dopo che fu partita, la casa sembrò vuota.', 'Après qu’elle fut partie, la maison sembla vide.'],
        ['Quando ebbero chiuso le porte, il silenzio scese sulla villa.', 'Quand ils eurent fermé les portes, le silence tomba sur la villa.'],
      ],
      tip: 'C’est l’exact équivalent du passé antérieur français (il eut fini). Ne le confonds pas avec le trapassato prossimo (aveva finito), antériorité générale. Dans la prose moderne, on le remplace souvent par le participe ou l’infinitif passé : « Finito di cenare, uscì », « Dopo aver cenato, uscì ».',
    },
    {
      title: 'Le participe absolu',
      body: 'Un participe passé suivi de son nom forme une proposition autonome de temps ou de cause. Le participe s’accorde avec ce nom.',
      table: [
        ['Terminata la cena, gli ospiti si ritirarono.', 'Le dîner terminé, les invités se retirèrent.'],
        ['Partiti gli ultimi clienti, il negozio chiuse.', 'Une fois les derniers clients partis, le magasin ferma.'],
        ['Detto questo / Ciò detto, se ne andò.', 'Cela dit, il s’en alla.'],
        ['Finita la guerra, molti tornarono al paese.', 'La guerre finie, beaucoup rentrèrent au village.'],
      ],
      tip: 'L’ordre est participe + nom (« finita la guerra »), plus rarement l’inverse. Avec un pronom, il se colle au participe : « Salutatolo, uscì » (l’ayant salué, il sortit), registre très soutenu.',
    },
  ],
  exercises: exercises('it-c2-letterario-1', 'C2', { kc: TRAP })
    .mcq('Non appena ___ la lettera, la gettò nel fuoco.', ['ebbe letto', 'ha letto', 'abbia letto', 'avrà letto'], 0,
      'Non appena + trapassato remoto (ebbe letto) quand la principale est au passato remoto (gettò).', { d: 2.3 })
    .cloze('Dopo che tutti ___ usciti, il vecchio spense le luci.', ['furono'],
      'Trapassato remoto avec essere : « furono usciti ». La principale est au passato remoto (spense).', { hint: 'essere au passato remoto', d: 2.4 })
    .mcq('Quale frase usa correttamente il participio assoluto?',
      ['Finita la guerra, molti emigrarono.', 'Finito la guerra, molti emigrarono.', 'Avendo finita la guerra, molti emigrarono.', 'La guerra finendo, molti emigrarono.'], 0,
      'Le participe absolu s’accorde avec son nom : « finita la guerra ».', { kc: ABS, d: 2.3 })
    .type('Mets le verbe entre parenthèses au trapassato remoto : « Quando (lui, finire) di parlare, tutti applaudirono. »', ['ebbe finito'],
      'finire + avere → « ebbe finito ». Antériorité immédiate par rapport à « applaudirono ».', { d: 2.4 })
    .type('Réécris avec un participe absolu : « Dopo che ebbe salutato gli amici, partì. »', ['Salutati gli amici, partì.'],
      'Participe absolu accordé avec « gli amici » : « salutati gli amici ».', { kc: ABS, d: 2.6 })
    .order('À peine fut-elle arrivée qu’il se mit à pleuvoir.', 'Appena fu arrivata, cominciò a piovere.',
      'Trapassato remoto (fu arrivata) après « appena », principale au passato remoto.', { distractors: ['era', 'è'], d: 2.5 })
    .tr('Le dîner terminé, les invités se retirèrent.',
      ['Terminata la cena, gli ospiti si ritirarono.', 'Finita la cena, gli ospiti si ritirarono.', 'Conclusa la cena, gli ospiti si ritirarono.', 'Terminata la cena, gli invitati si ritirarono.',
        'Finita la cena, gli invitati si ritirarono.', 'Conclusa la cena, gli invitati si ritirarono.', 'Dopo che ebbero finito di cenare, gli ospiti si ritirarono.'],
      'Participe absolu « terminata la cena » et passato remoto « si ritirarono ».', { kc: ABS, d: 2.5 })
    .tr('Dès qu’il eut compris la situation, il appela la police.',
      ['Appena ebbe capito la situazione, chiamò la polizia.', 'Non appena ebbe capito la situazione, chiamò la polizia.', 'Appena ebbe compreso la situazione, chiamò la polizia.',
        'Non appena ebbe compreso la situazione, chiamò la polizia.', 'Appena ebbe capito la situazione, telefonò alla polizia.', 'Non appena ebbe capito la situazione, telefonò alla polizia.',
        'Capita la situazione, chiamò la polizia.', 'Compresa la situazione, chiamò la polizia.'],
      'Passé antérieur français = trapassato remoto (« ebbe capito ») ; le participe absolu est aussi possible.', { d: 2.6 })
    .mcq('Che cosa fece Ettore dopo aver letto il biglietto?',
      ['Impallidì e, più tardi, uscì in giardino', 'Lo bruciò nel camino', 'Chiamò la domestica', 'Scrisse subito alla sorella'], 0,
      '« Non appena l’ebbe letto, impallidì » puis « spente le candele, uscì nel giardino ».',
      {
        kc: [TRAP, ABS], d: 2.7,
        passage: 'Era una sera di novembre quando Ettore rientrò alla villa. Deposto il cappello sul tavolino dell’ingresso, si accorse di un biglietto piegato in quattro. Non appena l’ebbe letto, impallidì: la calligrafia era quella di sua sorella, che nessuno vedeva da anni. Rimase a lungo immobile; poi, spente le candele, uscì nel giardino senza dire una parola. Quando la domestica ebbe finito di sparecchiare, la casa era ormai silenziosa, e di Ettore non v’era più traccia.',
      })
    .listen('Come ebbe varcato la soglia, capì che qualcuno era entrato in sua assenza.', 'Quando capì che qualcuno era entrato?',
      ['Subito dopo aver varcato la soglia', 'Prima di arrivare a casa', 'Il giorno seguente', 'Mentre parlava con un vicino'], 0,
      '« Come ebbe varcato » : come + trapassato remoto = dès que, aussitôt que.', { d: 2.6 })
    .listen('Partiti gli ultimi ospiti, la contessa si chiuse nella biblioteca e vi rimase fino all’alba.', 'Che cosa fece la contessa dopo la partenza degli ospiti?',
      ['Si chiuse in biblioteca fino al mattino', 'Accompagnò gli ospiti alla stazione', 'Andò subito a dormire', 'Uscì a fare una passeggiata'], 0,
      '« Partiti gli ultimi ospiti » : participe absolu (une fois les invités partis) ; « vi rimase » = elle y resta.', { kc: ABS, d: 2.5 })
    .dictation('Dopo che ebbero cenato, si sedettero davanti al fuoco a raccontarsi storie.',
      'Trapassato remoto « ebbero cenato », puis passato remoto « si sedettero ».', { d: 2.6 })
    .repeat('Detto ciò, si alzò e lasciò la sala senza voltarsi.',
      '« Detto ciò » : participe absolu figé (cela dit).', { kc: ABS, d: 2.3 })
    .say('La lettre écrite, elle la cacheta.',
      ['Scritta la lettera, la sigillò', 'Scritta la lettera, la chiuse', 'Finita la lettera, la sigillò', 'Dopo aver scritto la lettera, la sigillò', 'Dopo che ebbe scritto la lettera, la sigillò',
        'Scritta la lettera, la chiuse nella busta'],
      'Participe absolu accordé : « scritta la lettera » ; cacheter = sigillare.', { kc: ABS, d: 2.5 })
    .answer('Racconta in due o tre frasi, come in un romanzo, il ritorno di un personaggio in un luogo della sua infanzia. Usa il passato remoto e almeno un participio assoluto o un trapassato remoto.',
      'Arrivato in paese, Giovanni scese dalla corriera e si guardò intorno. Non appena ebbe riconosciuto la vecchia piazza, sentì un nodo alla gola e si sedette sulla panchina dove giocava da bambino.',
      'Participe absolu (arrivato in paese), trapassato remoto (ebbe riconosciuto) et passato remoto (scese, sentì, si sedette).',
      { kc: [TRAP, ABS], d: 2.8, minWords: 20, keywords: [['arrivato', 'arrivata', 'ebbe', 'fu', 'giunto', 'giunta', 'entrato', 'entrata', 'tornato', 'tornata']] })
    .build(),
};

export const letterario2: Lesson = {
  id: 'it-c2-letterario-2',
  cefr: 'C2',
  unitId: 'it-c2-letterario',
  title: 'Le style soutenu',
  subtitle: 'Egli, allorché, giacché, vendesi, non v’è',
  kcIds: [LEX, SYN],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le lexique littéraire',
      table: [
        ['egli, ella, essi, esse', 'il, elle, ils, elles (sujet, écrit soutenu)'],
        ['codesto', 'ce… (près de l’interlocuteur ; toscan et administratif)'],
        ['allorché, allorquando', 'lorsque'],
        ['giacché, poiché', 'puisque'],
        ['ove', 'où ; ou bien « si, au cas où » (= qualora)'],
        ['sovente', 'souvent'],
        ['alquanto', 'quelque peu, assez'],
        ['nondimeno, invero', 'néanmoins, en vérité'],
      ],
      tip: 'Ces mots ne sont pas faux à l’oral, mais ils y sonnent livresques ou ironiques. Lis-les sans les imiter dans une conversation : « sovente » pour « spesso » paraît affecté.',
    },
    {
      title: 'La syntaxe soutenue',
      table: [
        ['Vendesi, affittasi, cercasi', 'à vendre, à louer, on cherche (annonces)'],
        ['Trattasi di…', 'il s’agit de… (administratif)'],
        ['Non v’è nulla da fare. (vi = ci)', 'Il n’y a rien à faire.'],
        ['Disse il vecchio: «…»', 'Dit le vieillard : « … » (inversion)'],
        ['Essendo il tempo incerto, rimasero.', 'Le temps étant incertain, ils restèrent (gérondif absolu).'],
      ],
      tip: 'L’enclise sur un verbe conjugué (vendesi = si vende) ne survit que dans les annonces et quelques formules figées. Le gérondif à sujet propre (« essendo il tempo incerto ») correspond au participe présent absolu français.',
    },
  ],
  exercises: exercises('it-c2-letterario-2', 'C2', { kc: LEX })
    .mcq('___ il sole tramontò, i pastori ricondussero le greggi all’ovile.', ['Allorché', 'Giacché', 'Benché', 'Affinché'], 0,
      '« Allorché » = lorsque (temps). « Giacché » = puisque, « benché » = bien que, « affinché » = afin que.', { d: 2.4 })
    .mcq('In un annuncio immobiliare, « Affittasi bilocale » significa…',
      ['Si affitta un bilocale', 'Ho affittato un bilocale', 'Cerco un bilocale in affitto', 'Il bilocale è già affittato'], 0,
      'Enclise figée des annonces : affittasi = si affitta (à louer).', { kc: SYN, d: 2.2 })
    .cloze('___ era nato in campagna, conosceva il nome di ogni albero.', ['Giacché', 'Poiché', 'Siccome'],
      '« Giacché » (soutenu) ou « poiché » = puisque, étant donné que.', { hint: 'puisque (soutenu)', d: 2.4 })
    .cloze('___ di un errore di stampa, non di una scelta dell’autore.', ['Trattasi', 'Si tratta'],
      '« Trattasi di » : enclise figée de la langue administrative (= si tratta di).', { kc: SYN, hint: 'il s’agit (administratif)', d: 2.5 })
    .type('Donne l’équivalent courant de « sovente » dans : « Egli giungeva sovente in ritardo. »', ['spesso'],
      'sovente = spesso (souvent).', { d: 2.2 })
    .type('Rédige en style d’annonce : « On cherche un cuisinier expérimenté. » → « ___ cuoco esperto. »', ['Cercasi'],
      'Annonce : cercasi = si cerca.', { kc: SYN, d: 2.3 })
    .order('Lui, toutefois, ne répondit rien.', 'Egli tuttavia non rispose nulla.',
      '« Egli » : pronom sujet de l’écrit soutenu ; « rispose » : passato remoto de rispondere.', { distractors: ['ella', 'ebbe'], d: 2.4 })
    .tr('Elle parlait souvent de son enfance.',
      ['Ella parlava sovente della sua infanzia.', 'Ella parlava spesso della sua infanzia.', 'Parlava sovente della sua infanzia.', 'Parlava spesso della sua infanzia.',
        'Lei parlava spesso della sua infanzia.', 'Lei parlava sovente della sua infanzia.', 'Spesso parlava della sua infanzia.'],
      'Registre courant : lei, spesso ; registre littéraire : ella, sovente.', { d: 2.3 })
    .tr('Maison à vendre avec jardin.',
      ['Vendesi casa con giardino.', 'Si vende casa con giardino.', 'Casa con giardino in vendita.', 'Vendesi casa con giardino annesso.'],
      'Style d’annonce : « Vendesi » en tête, sans article.', { kc: SYN, d: 2.3 })
    .listen('Ove fosse necessario, la commissione potrà riunirsi anche di sabato.', 'Che cosa significa « ove » in questa frase?',
      ['Qualora, nel caso in cui', 'Dove, nel luogo in cui', 'Mentre', 'Perché'], 0,
      '« Ove » + subjonctif = qualora (au cas où). Au sens de lieu, il signifie « dove ».', { d: 2.6 })
    .listen('Disse allora il vecchio, levando gli occhi al cielo: «Non v’è più nulla da fare».', 'Che cosa significa « non v’è »?',
      ['Non c’è', 'Non vedo', 'Non vale', 'Non vi dico'], 0,
      'Dans la langue littéraire, « vi » remplace « ci » : non v’è = non c’è. Noter aussi l’inversion « Disse il vecchio ».', { kc: SYN, d: 2.5 })
    .dictation('Codesta lettera, che tieni in mano, mi appartiene.',
      '« Codesto » désigne ce qui est près de l’interlocuteur (toscan, littéraire).', { d: 2.4 })
    .repeat('Essendo il tempo alquanto incerto, decisero di rimandare la partenza.',
      'Gérondif absolu (essendo il tempo…) et « alquanto » (quelque peu).', { kc: [SYN, LEX], d: 2.5 })
    .say('Puisqu’il en est ainsi, je partirai demain.',
      ['Giacché le cose stanno così, partirò domani', 'Poiché le cose stanno così, partirò domani', 'Visto che le cose stanno così, partirò domani', 'Dato che le cose stanno così, partirò domani',
        'Giacché è così, partirò domani', 'Poiché è così, partirò domani', 'Se le cose stanno così, partirò domani'],
      'puisque = giacché, poiché (soutenu) ; visto che, dato che (courant).', { d: 2.4 })
    .answer('Riscrivi in stile letterario questa frase banale e continua la scena con una o due frasi: « Lui è tornato a casa e ha visto che non c’era nessuno ».',
      'Egli fece ritorno a casa sul far della sera; varcata la soglia, si avvide che non v’era alcuno ad attenderlo. Rimase alquanto turbato, giacché la moglie, sovente, lo accoglieva sulla porta.',
      'Passato remoto, egli, participe absolu (varcata la soglia), vi = ci, connecteurs et adverbes soutenus (giacché, sovente, alquanto).',
      { kc: [SYN, LEX], d: 2.9, minWords: 20, keywords: [['egli', 'fece', 'varcata', 'giunto', 'rientrò', 'tornò'], ['giacché', 'sovente', 'alquanto', 'allorché', 'poiché', 'ove', 'nondimeno']] })
    .build(),
};
