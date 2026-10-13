import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const REPORT = 'it.b2.grammar.reported_statements';
const DEIXIS = 'it.b2.grammar.reported_time_place';
const QUEST = 'it.b2.grammar.reported_questions';
const ORD = 'it.b2.grammar.reported_commands';

export const indiretto1: Lesson = {
  id: 'it-b2-indiretto-1',
  cefr: 'B2',
  unitId: 'it-b2-indiretto',
  title: 'Rapporter des paroles au passé',
  subtitle: 'Ha detto che era stanca',
  kcIds: [REPORT, DEIXIS],
  estMinutes: 9,
  explanation: [
    {
      title: 'La concordance dans le discours indirect',
      body: 'Quand le verbe introducteur est au passé (ha detto, disse, aveva spiegato), les temps reculent d’un cran. S’il est au présent (dice che), rien ne change.',
      table: [
        ['discours direct', 'discours indirect (ha detto che…)'],
        ['presente : « Sono stanco. »', 'imperfetto : era stanco'],
        ['passato prossimo : « Ho finito. »', 'trapassato : aveva finito'],
        ['futuro : « Verrò. »', 'condizionale passato : sarebbe venuto'],
        ['condizionale : « Vorrei un caffè. »', 'condizionale passato : avrebbe voluto (ou voleva)'],
        ['congiuntivo : « Penso che sia vero. »', 'congiuntivo imperfetto : pensava che fosse vero'],
      ],
      tip: 'Le futur devient condizionale passato, pas conditionnel présent comme en français : « il a dit qu’il viendrait » → ha detto che sarebbe venuto. Avec le même sujet, on peut aussi employer di + infinitif : ha detto di essere stanco.',
    },
    {
      title: 'Les repères de temps et de lieu',
      table: [
        ['oggi', 'quel giorno'],
        ['ieri', 'il giorno prima'],
        ['domani', 'il giorno dopo, l’indomani'],
        ['la settimana prossima', 'la settimana successiva, dopo'],
        ['adesso, ora', 'allora, in quel momento'],
        ['qui, qua', 'lì, là'],
        ['questo', 'quello'],
      ],
      examples: [
        { en: '« Torno domani. » → Ha detto che sarebbe tornato il giorno dopo.', fr: '« Je reviens demain. » → Il a dit qu’il reviendrait le lendemain.' },
      ],
      tip: 'Les personnes changent aussi : io → lui / lei, mio → suo ; et venire devient souvent andare.',
    },
  ],
  exercises: exercises('it-b2-indiretto-1', 'B2', { kc: REPORT, tense: 'discorso_indiretto' })
    .mcq('« Sono stanca. » → Anna ha detto che ___ stanca.', ['era', 'è stata', 'sarà'], 0,
      'Présent → imperfetto après un verbe introducteur au passé.', { d: 0.6 })
    .mcq('« Ho perso il treno. » → Marco ha spiegato che ___ il treno.', ['aveva perso', 'avrebbe perso', 'perdesse'], 0,
      'Passato prossimo → trapassato prossimo : aveva perso.', { d: 0.8 })
    .cloze('« Ti chiamerò. » → Mi ha detto che mi ___.', ['avrebbe chiamato', 'avrebbe chiamata'],
      'Futur → condizionale passato : avrebbe chiamato.', { hint: 'chiamare', d: 0.9 })
    .cloze('« Torno domani. » → Ha detto che sarebbe tornato ___.', ['il giorno dopo', 'l’indomani', 'il giorno seguente', 'il giorno successivo'],
      'domani → il giorno dopo / l’indomani.', { kc: DEIXIS, d: 0.9 })
    .type('« Ci vediamo qui. » → Ha detto che ci saremmo visti ___.', ['lì', 'là'],
      'qui → lì / là.', { kc: DEIXIS, d: 0.8 })
    .type('« Vorrei un caffè. » → Ha detto che ___ un caffè. (volere)', ['avrebbe voluto', 'voleva'],
      'Conditionnel → condizionale passato (avrebbe voluto) ; à l’oral, voleva est très courant.', { d: 1.0 })
    .order('Il a dit qu’il avait déjà mangé.', 'Ha detto che aveva già mangiato.',
      'Passato prossimo (ho mangiato) → trapassato (aveva mangiato).', { distractors: ['avesse', 'mangiava'], d: 0.8 })
    .listen('Giulia mi ha detto che quel giorno non sarebbe venuta in ufficio perché aveva la febbre.', 'Che cosa ha detto Giulia?',
      ['Che non sarebbe andata al lavoro perché era malata', 'Che sarebbe arrivata in ritardo', 'Che aveva avuto la febbre la settimana prima'], 0,
      'non sarebbe venuta in ufficio (« non verrò ») ; aveva la febbre (« ho la febbre »).', { d: 0.9 })
    .listen('Il professore ci ha detto che l’esame sarebbe stato la settimana successiva.', 'Quando sarebbe stato l’esame?',
      ['La settimana dopo quella in cui ha parlato il professore', 'Il giorno stesso', 'Il mese successivo'], 0,
      'la settimana successiva = la semaine suivante (« la settimana prossima » au discours direct).', { kc: DEIXIS, d: 0.9 })
    .dictation('Mi ha confessato che non aveva mai visto il mare.',
      '« Non ho mai visto il mare » → non aveva mai visto.', { d: 0.8 })
    .tr('Elle a dit qu’elle était fatiguée.',
      ['Ha detto che era stanca.', 'Lei ha detto che era stanca.', 'Ha detto di essere stanca.', 'Disse che era stanca.', 'Ha detto che era affaticata.'],
      'Présent → imperfetto : era stanca ; ou di + infinitif avec le même sujet.', { d: 0.7 })
    .tr('Ils m’ont dit qu’ils viendraient le lendemain.',
      ['Mi hanno detto che sarebbero venuti il giorno dopo.', 'Mi hanno detto che sarebbero venuti l’indomani.', 'Mi hanno detto che sarebbero venuti il giorno seguente.',
        'Mi hanno detto che sarebbero venuti il giorno successivo.', 'Loro mi hanno detto che sarebbero venuti il giorno dopo.'],
      'viendraient → sarebbero venuti ; le lendemain → il giorno dopo, l’indomani.', { kc: [REPORT, DEIXIS], d: 1.0 })
    .repeat('Ha detto che quel giorno non poteva uscire perché doveva studiare.',
      'oggi → quel giorno ; « non posso, devo » → non poteva, doveva.', { kc: [REPORT, DEIXIS], d: 0.8 })
    .say('Il m’a dit qu’il avait trouvé un nouveau travail.',
      ['Mi ha detto che aveva trovato un nuovo lavoro', 'Lui mi ha detto che aveva trovato un nuovo lavoro', 'Mi ha detto di aver trovato un nuovo lavoro',
        'Mi ha detto di avere trovato un nuovo lavoro', 'Mi ha detto che aveva trovato un lavoro nuovo'],
      'Trapassato (aveva trovato) ou infinitif passé (di aver trovato).', { d: 0.9 })
    .answer('Racconta una cosa che ti ha detto un amico o un collega di recente. Usa il discorso indiretto.',
      'Ieri la mia collega mi ha detto che aveva trovato un appartamento in centro e che si sarebbe trasferita il mese successivo.',
      'Ha detto che + imperfetto, trapassato ou condizionale passato, et les repères décalés (il mese successivo).',
      { kc: [REPORT, DEIXIS], keywords: [['detto', 'raccontato', 'spiegato', 'scritto'], ['che']], minWords: 12, d: 1.1 })
    .build(),
};

export const indiretto2: Lesson = {
  id: 'it-b2-indiretto-2',
  cefr: 'B2',
  unitId: 'it-b2-indiretto',
  title: 'Questions et ordres rapportés',
  subtitle: 'Mi ha chiesto se ero libero, mi ha detto di aspettare',
  kcIds: [QUEST, ORD],
  estMinutes: 9,
  explanation: [
    {
      title: 'Rapporter une question',
      body: 'Question fermée → se ; question ouverte → le mot interrogatif (dove, quando, perché, che cosa…). Le verbe suit la concordance ; à l’écrit soigné, on met souvent le subjonctif.',
      examples: [
        { en: '« Sei libero? » → Mi ha chiesto se ero (fossi) libero.', fr: '« Tu es libre ? » → Il m’a demandé si j’étais libre.' },
        { en: '« Dove abiti? » → Mi ha chiesto dove abitavo (abitassi).', fr: '« Où habites-tu ? » → Il m’a demandé où j’habitais.' },
      ],
      tip: 'Le français n’accepte que l’indicatif ; l’italien admet les deux : mi ha chiesto se ero / se fossi libero. Le subjonctif est plus soutenu.',
    },
    {
      title: 'Rapporter un ordre ou une proposition',
      body: 'Impératif → di + infinitif (ou, plus formel, che + subjonctif imparfait). Les pronoms changent de personne.',
      table: [
        ['« Chiudi la porta! »', 'Mi ha detto di chiudere la porta.'],
        ['« Non toccare! »', 'Mi ha detto di non toccare.'],
        ['« Aspettami! »', 'Mi ha chiesto di aspettarlo / aspettarla.'],
        ['« Andiamo al cinema? »', 'Ha proposto di andare al cinema.'],
      ],
      tip: 'Comme en français (« il m’a dit de fermer »), mais sans article ni préposition superflue : dire a qualcuno di fare qualcosa.',
    },
  ],
  exercises: exercises('it-b2-indiretto-2', 'B2', { kc: QUEST, tense: 'discorso_indiretto' })
    .mcq('« Sei libero stasera? » → Mi ha chiesto ___ libero quella sera.', ['se ero', 'che ero', 'se sono stato'], 0,
      'Question fermée → se ; présent → imperfetto.', { d: 0.7 })
    .mcq('« Chiudi la finestra! » → Mi ha detto ___ la finestra.', ['di chiudere', 'chiudere', 'che chiudo'], 0,
      'Ordre rapporté → di + infinitif.', { kc: ORD, d: 0.7 })
    .cloze('« Dove abiti? » → Mi ha chiesto dove ___.', ['abitavo', 'abitassi'],
      'Imperfetto de l’indicatif ou du subjonctif (plus soutenu).', { hint: 'abitare', d: 0.8 })
    .type('« Che cosa farai domani? » → Mi ha chiesto che cosa ___ il giorno dopo. (fare)', ['avrei fatto'],
      'Futur → condizionale passato : avrei fatto ; domani → il giorno dopo.', { d: 1.0 })
    .type('« Aspettami! » (dit par Luca) → Luca mi ha chiesto di ___.', ['aspettarlo'],
      'L’impératif devient di + infinitif, et « mi » (Luca) devient « lo » : aspettarlo.', { kc: ORD, d: 1.0 })
    .order('Il m’a demandé si j’avais faim.', 'Mi ha chiesto se avevo fame.',
      'Question fermée → se + imperfetto.', { distractors: ['che', 'avrei'], d: 0.8 })
    .mcq('Che cosa deve fare il narratore?',
      ['Riflettere e rispondere entro la fine del mese', 'Partire subito per Barcellona', 'Imparare lo spagnolo entro lunedì'], 0,
      '« Mi ha detto di pensarci con calma e di dargli una risposta entro la fine del mese. »',
      {
        kc: [ORD, QUEST],
        d: 1.0,
        passage:
          'Lunedì il mio capo mi ha chiamato nel suo ufficio. Mi ha chiesto se fossi soddisfatto del mio lavoro e se avessi mai pensato di trasferirmi all’estero. Gli ho risposto che ci avevo pensato, ma che non ero sicuro di essere pronto. Allora mi ha spiegato che l’azienda avrebbe aperto una nuova sede a Barcellona l’anno successivo e che cercavano qualcuno che parlasse spagnolo. Mi ha detto di pensarci con calma e di dargli una risposta entro la fine del mese.',
      })
    .listen('Il vigile mi ha chiesto dove stessi andando così di fretta e mi ha detto di mostrargli la patente.', 'Che cosa ha chiesto il vigile?',
      ['Dove andava e di vedere la patente', 'Se aveva bisogno di aiuto', 'Di parcheggiare più lontano'], 0,
      'dove stessi andando (question) + di mostrargli la patente (ordre).', { kc: [QUEST, ORD], d: 1.0 })
    .listen('Luca ci ha proposto di andare al mare il fine settimana dopo, ma Sara ha chiesto se non fosse meglio aspettare il bel tempo.', 'Che cosa ha proposto Luca?',
      ['Di andare al mare', 'Di aspettare il bel tempo', 'Di restare in città'], 0,
      'proporre di + infinitif : di andare al mare. C’est Sara qui veut attendre.', { kc: ORD, d: 1.0 })
    .dictation('Mi ha chiesto se potevo aiutarlo con il trasloco.',
      '« Puoi aiutarmi? » → se potevo aiutarlo.', { d: 0.8 })
    .tr('Elle m’a demandé pourquoi j’étais en retard.',
      ['Mi ha chiesto perché ero in ritardo.', 'Mi ha chiesto perché fossi in ritardo.', 'Lei mi ha chiesto perché ero in ritardo.', 'Lei mi ha chiesto perché fossi in ritardo.',
        'Mi ha domandato perché ero in ritardo.', 'Mi ha domandato perché fossi in ritardo.'],
      'perché + imperfetto (indicatif ou subjonctif).', { d: 0.9 })
    .tr('Le médecin m’a dit de ne pas fumer.',
      ['Il medico mi ha detto di non fumare.', 'Il dottore mi ha detto di non fumare.', 'Il medico mi ha consigliato di non fumare.', 'Il dottore mi ha consigliato di non fumare.'],
      'Ordre négatif → di non + infinitif.', { kc: ORD, d: 0.8 })
    .repeat('Ci hanno chiesto se volessimo restare a cena.',
      'se + congiuntivo imperfetto : registre soigné.', { d: 0.8 })
    .say('Il m’a demandé de l’appeler.',
      ['Mi ha chiesto di chiamarlo', 'Lui mi ha chiesto di chiamarlo', 'Mi ha detto di chiamarlo'],
      'chiedere di + infinitif, pronom soudé : chiamarlo.', { kc: ORD, d: 0.9 })
    .answer('Che cosa ti chiedevano o ti dicevano di fare i tuoi genitori quando eri piccolo o piccola?',
      'Mia madre mi chiedeva sempre se avessi fatto i compiti e mi diceva di non guardare troppo la televisione.',
      'Mi chiedeva se + imperfetto ou trapassato ; mi diceva di + infinitif.',
      { kc: [QUEST, ORD], keywords: [['chiedeva', 'diceva', 'chiedevano', 'dicevano', 'domandava'], ['se', 'di']], minWords: 12, d: 1.1 })
    .build(),
};
