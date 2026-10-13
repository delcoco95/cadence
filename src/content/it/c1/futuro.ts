import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const PROB = 'it.c1.grammar.future_probability';
const ANT = 'it.c1.grammar.future_perfect_supposition';
const FUTANT = 'it.c1.grammar.future_perfect_anteriority';
const SEQ = 'it.c1.grammar.full_sequence';

export const futuro1: Lesson = {
  id: 'it-c1-futuro-1',
  cefr: 'C1',
  unitId: 'it-c1-futuro',
  title: 'Supposer avec le futur',
  subtitle: 'Sarà stanco, avrà perso il treno',
  kcIds: [PROB, ANT],
  estMinutes: 11,
  explanation: [
    {
      title: 'Le futur de probabilité (présent)',
      body: 'Le futuro semplice sert à faire une supposition sur le présent : c’est l’équivalent de « il doit être », « sans doute », « probablement ».',
      examples: [
        { en: 'Dov’è Marco? — Sarà in ufficio.', fr: 'Où est Marco ? — Il doit être au bureau.' },
        { en: 'Che ore sono? — Saranno le otto.', fr: 'Quelle heure est-il ? — Il doit être huit heures.' },
        { en: 'Avrà più o meno quarant’anni.', fr: 'Il doit avoir à peu près quarante ans.' },
        { en: 'Sarà anche vero, ma non mi convince.', fr: 'C’est peut-être vrai, mais ça ne me convainc pas.' },
      ],
      tip: 'Faux ami : « sans doute » = probablement (sarà, probabilmente), alors que senza dubbio = sans aucun doute. « Il est sans doute fatigué » → sarà stanco, pas « è senza dubbio stanco ».',
    },
    {
      title: 'Le futur antérieur de supposition (passé)',
      body: 'Pour une supposition sur un fait passé, on emploie le futuro anteriore : avere / essere au futur + participe.',
      table: [
        ['Il a dû rater le train.', 'Avrà perso il treno.'],
        ['Elle a dû sortir.', 'Sarà uscita.'],
        ['Où a-t-il bien pu mettre les clés ?', 'Dove avrà messo le chiavi?'],
        ['Qu’a-t-il bien pu vouloir dire ?', 'Che cosa avrà voluto dire?'],
      ],
      tip: 'Le français possède aussi ce futur antérieur conjectural (« il aura oublié »), mais préfère « il a dû ». En italien, c’est la tournure la plus naturelle. N’oublie pas les accords : le chiavi, le avrai lasciate in macchina.',
    },
  ],
  exercises: exercises('it-c1-futuro-1', 'C1', { kc: PROB, tense: 'futuro' })
    .mcq('Non trovo le chiavi. — Le ___ in macchina, come al solito.', ['avrai lasciate', 'hai lasciate', 'lasceresti'], 0,
      'Supposition sur le passé → futuro anteriore ; le participe s’accorde avec le pronom le : lasciate.', { kc: ANT, d: 1.8 })
    .mcq('Che ore sono? Non ho l’orologio. — Mah, ___ le sei.', ['saranno', 'sarà', 'sono state'], 0,
      'Supposition sur le présent → futuro : saranno le sei (accord avec le ore).', { d: 1.4 })
    .cloze('Giulia non risponde al telefono: ___ già a dormire.', ['sarà andata'],
      'Supposition sur un fait passé → futuro anteriore avec essere, accordé : sarà andata.', { kc: ANT, hint: 'andare', d: 1.7 })
    .cloze('Quel signore ___ almeno novant’anni, eppure cammina come un ragazzo.', ['avrà'],
      'Estimation de l’âge → futuro : avrà novant’anni.', { hint: 'avere', d: 1.5 })
    .type('« Il a dû oublier le rendez-vous. » → « ___ dimenticato l’appuntamento. » Écris l’auxiliaire au futur.', ['Avrà'],
      'il a dû + infinitif passé → futuro anteriore : avrà dimenticato.', { kc: ANT, d: 1.6 })
    .type('« Ils doivent être en train de dîner. » → « ___ cenando. » Écris la forme de stare.', ['Staranno'],
      'stare au futur + gérondif : staranno cenando.', { d: 1.6 })
    .order('Elle a dû rater le train de huit heures.', 'Avrà perso il treno delle otto.',
      'Supposition sur le passé : avrà perso.', { kc: ANT, distractors: ['ha', 'avrebbe'], d: 1.5 })
    .tr('Il est sans doute fatigué après le voyage.',
      ['Sarà stanco dopo il viaggio.', 'Dopo il viaggio sarà stanco.', 'Sarà stanco per il viaggio.', 'Probabilmente è stanco dopo il viaggio.',
        'Dopo il viaggio probabilmente è stanco.', 'Sarà stanco dal viaggio.'],
      '« sans doute » exprime ici une probabilité → futuro : sarà stanco.', { d: 1.5 })
    .tr('Qu’a-t-il bien pu vouloir dire ?',
      ['Che cosa avrà voluto dire?', 'Cosa avrà voluto dire?', 'Che avrà voluto dire?'],
      'Interrogation conjecturale sur le passé → futuro anteriore : avrà voluto dire.', { kc: ANT, d: 1.9 })
    .listen('Sono le nove e Paolo non è ancora arrivato. Ci sarà traffico in tangenziale, oppure si sarà dimenticato della riunione.', 'Che cosa fa chi parla?',
      ['Fa delle ipotesi sul ritardo di Paolo', 'Spiega che Paolo è malato', 'Annuncia che Paolo non verrà'], 0,
      'ci sarà traffico, si sarà dimenticato : deux suppositions.', { kc: ANT, d: 1.6 })
    .listen('Sarà anche un ottimo ristorante, ma per quel prezzo mi aspettavo porzioni più abbondanti.', 'Che cosa pensa del ristorante?',
      ['Forse è buono, ma troppo caro per quello che offre', 'È il miglior ristorante della città', 'Le porzioni erano troppo abbondanti'], 0,
      'sarà anche + adjectif = concession : c’est peut-être…, mais.', { d: 1.9 })
    .dictation('A quest’ora saranno già arrivati a Napoli.',
      'Supposition sur le passé : saranno arrivati (essere, accordé).', { kc: ANT, d: 1.5 })
    .repeat('Chissà dove sarà finito il mio ombrello.',
      'chissà + futuro anteriore : interrogation conjecturale.', { kc: ANT, d: 1.4 })
    .say('Il doit avoir à peu près trente ans.',
      ['Avrà più o meno trent’anni', 'Avrà circa trent’anni', 'Avrà sui trent’anni', 'Avrà una trentina d’anni', 'Avrà trent’anni circa',
        'Deve avere più o meno trent’anni', 'Deve avere circa trent’anni'],
      'Estimation → futuro : avrà ; dovere est possible mais moins naturel.', { d: 1.5 })
    .answer('Non vedi il tuo vicino da tre giorni e le sue finestre sono sempre chiuse. Fai qualche ipotesi.',
      'Sarà partito per qualche giorno, oppure sarà andato a trovare i suoi figli; magari avrà chiesto a qualcuno di dare da mangiare al gatto.',
      'Suppositions sur le passé → futuro anteriore : sarà partito, avrà chiesto.',
      { kc: [ANT, PROB], keywords: [['sarà', 'avrà', 'saranno', 'avranno', 'starà']], minWords: 15, d: 1.8 })
    .build(),
};

export const futuro2: Lesson = {
  id: 'it-c1-futuro-2',
  cefr: 'C1',
  unitId: 'it-c1-futuro',
  title: 'Antériorité et concordance complète',
  subtitle: 'Quando avrai finito, pensavo che sarebbe venuto',
  kcIds: [FUTANT, SEQ],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le futur antérieur d’antériorité',
      body: 'Après quando, appena, dopo che, una volta che, le futuro anteriore exprime une action achevée avant une autre action future.',
      examples: [
        { en: 'Quando avrai finito, chiamami.', fr: 'Quand tu auras fini, appelle-moi.' },
        { en: 'Appena sarò arrivata, ti scriverò.', fr: 'Dès que je serai arrivée, je t’écrirai.' },
        { en: 'Una volta che avranno firmato, potremo cominciare.', fr: 'Une fois qu’ils auront signé, nous pourrons commencer.' },
      ],
      tip: 'À l’oral, l’italien simplifie volontiers : quando finisci, chiamami. Autre différence : après se, l’italien accepte le futur (se verrai, te lo mostrerò), là où le français exige le présent (si tu viens).',
    },
    {
      title: 'La concordance complète',
      table: [
        ['Penso che parta. / che sia partito. / che partirà.', 'simultané / antérieur / postérieur (présent)'],
        ['Pensavo che partisse.', 'simultané (passé)'],
        ['Pensavo che fosse partito.', 'antérieur (passé)'],
        ['Pensavo che sarebbe partito.', 'postérieur : futur dans le passé'],
        ['Ha detto che sarebbe venuto.', 'idem à l’indicatif'],
      ],
      tip: 'Piège majeur : « je pensais qu’il partirait » (conditionnel présent en français) se dit avec le condizionale PASSATO : pensavo che sarebbe partito. « partirebbe » serait une faute.',
    },
  ],
  exercises: exercises('it-c1-futuro-2', 'C1', { kc: FUTANT, tense: 'futuro anteriore' })
    .mcq('Ti restituirò il libro appena lo ___.', ['avrò letto', 'abbia letto', 'leggessi'], 0,
      'Action achevée avant une autre action future → futuro anteriore : avrò letto.', { d: 1.5 })
    .mcq('Perché chi scrive non ha avvisato Matteo di persona?',
      ['Perché tutto è successo molto in fretta', 'Perché aveva paura della sua reazione', 'Perché Matteo era in viaggio'], 0,
      '« è successo tutto così in fretta che non ne ho avuto il tempo ».',
      {
        kc: [SEQ, FUTANT],
        d: 1.8,
        passage:
          'Caro Matteo, quando riceverai questa lettera, sarò già partita per Lisbona. Ti avevo promesso che te l’avrei detto di persona, ma è successo tutto così in fretta che non ne ho avuto il tempo. Non pensavo che mi avrebbero offerto quel posto: ero convinta che avrebbero scelto un candidato più esperto. Appena mi sarò sistemata, ti manderò il mio nuovo indirizzo. Chissà, magari verrai a trovarmi.',
      })
    .cloze('Quando ___ tutti i documenti, potrete presentare la domanda.', ['avrete raccolto'],
      'quando + futuro anteriore (voi) : avrete raccolto.', { hint: 'raccogliere (voi)', d: 1.6 })
    .cloze('Non immaginavo che il viaggio ___ così caro.', ['sarebbe stato', 'fosse', 'fosse stato'],
      'Principale au passé : fosse (simultané) ou sarebbe stato (postérieur).', { kc: SEQ, hint: 'essere', d: 1.8 })
    .type('« Dès que nous serons arrivés, nous vous appellerons. » → « Appena ___ arrivati, vi chiameremo. »', ['saremo'],
      'appena + futuro anteriore avec essere : saremo arrivati.', { d: 1.5 })
    .type('« Il m’a promis qu’il m’aiderait. » → « Mi ha promesso che mi ___. » Écris le verbe au conditionnel passé.', ['avrebbe aiutato', 'avrebbe aiutata'],
      'Futur dans le passé → condizionale passato : avrebbe aiutato.', { kc: SEQ, d: 1.7 })
    .order('Elle a dit qu’elle partirait le lendemain.', 'Ha detto che sarebbe partita il giorno dopo.',
      'Futur dans le passé → sarebbe partita (et non partirebbe).', { kc: SEQ, distractors: ['partirebbe', 'partirà'], d: 1.6 })
    .tr('Quand tu auras terminé, éteins l’ordinateur.',
      ['Quando avrai finito, spegni il computer.', 'Quando avrai terminato, spegni il computer.', 'Quando avrai finito, spegni il pc.',
        'Quando avrai terminato, spegni il pc.', 'Quando hai finito, spegni il computer.', 'Quando hai terminato, spegni il computer.',
        'Spegni il computer quando avrai finito.', 'Spegni il computer quando avrai terminato.'],
      'quando + futuro anteriore : avrai finito (l’oral accepte quando hai finito).', { d: 1.6 })
    .tr('Je savais qu’il ne viendrait pas.',
      ['Sapevo che non sarebbe venuto.', 'Io sapevo che non sarebbe venuto.', 'Lo sapevo che non sarebbe venuto.'],
      'Futur dans le passé → condizionale passato : non sarebbe venuto.', { kc: SEQ, d: 1.8 })
    .listen('Appena avremo ricevuto il pagamento, provvederemo a spedire la merce.', 'Quando verrà spedita la merce?',
      ['Dopo l’arrivo del pagamento', 'Prima del pagamento', 'Entro ventiquattro ore dall’ordine'], 0,
      'appena avremo ricevuto = dès que nous aurons reçu.', { d: 1.6 })
    .listen('Il meteo diceva che sarebbe piovuto tutto il fine settimana, e invece c’è stato un sole splendido.', 'Che tempo ha fatto nel fine settimana?',
      ['Bel tempo, contrariamente alle previsioni', 'Ha piovuto tutto il tempo', 'Ha fatto freddo ed era nuvoloso'], 0,
      'sarebbe piovuto : prévision vue du passé, démentie par les faits.', { kc: SEQ, d: 1.6 })
    .dictation('Credevo che avresti capito da solo.',
      'Futur dans le passé → condizionale passato : avresti capito.', { kc: SEQ, d: 1.8 })
    .repeat('Una volta che avrai preso la patente, potrai usare la mia macchina.',
      'una volta che + futuro anteriore : avrai preso.', { d: 1.5 })
    .say('Je pensais que tu me rappellerais.',
      ['Pensavo che mi avresti richiamato', 'Pensavo che mi avresti richiamata', 'Credevo che mi avresti richiamato', 'Credevo che mi avresti richiamata',
        'Pensavo che mi avresti ritelefonato', 'Credevo che mi avresti ritelefonato'],
      '« rappellerais » → condizionale passato : mi avresti richiamato.', { kc: SEQ, d: 1.9 })
    .answer('Che cosa farai quando avrai raggiunto il tuo prossimo grande obiettivo?',
      'Quando avrò finito questo corso e avrò superato l’esame, mi prenderò una vacanza e andrò finalmente a visitare la Sicilia con i miei amici.',
      'quando + futuro anteriore, puis futuro semplice : quando avrò finito, mi prenderò…',
      { keywords: [['avrò', 'sarò']], minWords: 15, d: 1.9 })
    .build(),
};
