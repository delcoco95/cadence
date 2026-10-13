import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const CPAST = 'it.b2.grammar.conditional_past';
const FUTPAST = 'it.b2.grammar.future_in_the_past';
const HEARSAY = 'it.b2.function.unconfirmed_news';

export const condizionalePassato1: Lesson = {
  id: 'it-b2-condizionale-passato-1',
  cefr: 'B2',
  unitId: 'it-b2-condizionale-passato',
  title: 'Regrets et reproches',
  subtitle: 'Avrei voluto, avresti dovuto, sarebbe stato meglio',
  kcIds: [CPAST],
  estMinutes: 8,
  explanation: [
    {
      title: 'Former le condizionale passato',
      body: 'Conditionnel présent de avere ou essere + participe passé. Avec essere, le participe s’accorde avec le sujet.',
      table: [
        ['io', 'avrei parlato', 'sarei andato / andata'],
        ['tu', 'avresti parlato', 'saresti andato / andata'],
        ['lui, lei, Lei', 'avrebbe parlato', 'sarebbe andato / andata'],
        ['noi', 'avremmo parlato', 'saremmo andati / andate'],
        ['voi', 'avreste parlato', 'sareste andati / andate'],
        ['loro', 'avrebbero parlato', 'sarebbero andati / andate'],
      ],
      tip: 'avremmo (conditionnel, deux m) ≠ avremo (futur, un m). La consonne double s’entend : on la tient plus longtemps.',
    },
    {
      title: 'Regretter, reprocher, imaginer',
      body: 'Comme en français, il exprime ce qui aurait pu se passer et ne s’est pas passé.',
      examples: [
        { en: 'Avrei voluto vederti.', fr: 'J’aurais voulu (aimé) te voir.' },
        { en: 'Avresti dovuto dirmelo prima.', fr: 'Tu aurais dû me le dire avant.' },
        { en: 'Sarebbe stato meglio aspettare.', fr: 'Il aurait mieux valu attendre.' },
      ],
      tip: 'Avec dovere, potere, volere suivis d’un verbe à essere, les deux auxiliaires sont admis : sarei dovuto partire / avrei dovuto partire. Les pronoms se collent à l’infinitif (avresti dovuto dirmelo) ou passent devant (me lo avresti dovuto dire).',
    },
  ],
  exercises: exercises('it-b2-condizionale-passato-1', 'B2', { kc: CPAST, tense: 'condizionale_passato' })
    .mcq('Mi dispiace, ___ chiamarti, ma ho perso il telefono.', ['avrei voluto', 'vorrei', 'ho voluto'], 0,
      'Souhait passé non réalisé → condizionale passato : avrei voluto.', { d: 0.7 })
    .cloze('Con quel tempo, ___ meglio restare a casa.', ['sarebbe stato'],
      'Il aurait mieux valu = sarebbe stato meglio.', { hint: 'essere', d: 0.8 })
    .cloze('Noi ___ volentieri, ma nessuno ci ha invitati.', ['saremmo venuti', 'saremmo venute'],
      'venire prend essere : saremmo venuti (ou venute).', { hint: 'venire', d: 0.8 })
    .type('Écris fare au condizionale passato, 2e personne du pluriel (voi…).', ['avreste fatto', 'voi avreste fatto'],
      'avreste + fatto.', { d: 0.6 })
    .type('Écris « tu aurais dû » en italien (dovere avec avere).', ['avresti dovuto', 'tu avresti dovuto'],
      'avresti dovuto + infinitif : reproche.', { d: 0.6 })
    .mcq('Quelle forme est un conditionnel (et non un futur) ?', ['avremmo', 'avremo', 'saremo'], 0,
      'Le conditionnel a deux m : avremmo, saremmo. Avremo et saremo sont des futurs.', { d: 0.5 })
    .order('Tu aurais dû me le dire avant.', 'Avresti dovuto dirmelo prima.',
      'Le pronom groupé (me lo → -melo) se soude à l’infinitif.', { distractors: ['dovresti', 'lo'], d: 0.8 })
    .listen('Che peccato! Saremmo partiti volentieri con voi, ma Marco si è rotto una gamba.', 'Perché non sono partiti?',
      ['Perché Marco si è fatto male', 'Perché non avevano voglia', 'Perché non erano stati invitati'], 0,
      'Saremmo partiti volentieri : ils en avaient envie, mais Marco s’est cassé la jambe.', { d: 0.8 })
    .listen('Avresti potuto avvisarmi che arrivavi tardi: ti ho aspettato un’ora!', 'Di che cosa si lamenta chi parla?',
      ['Di non essere stato avvisato del ritardo', 'Di essere arrivato tardi', 'Di aver dimenticato l’appuntamento'], 0,
      'Avresti potuto avvisarmi = tu aurais pu me prévenir : reproche.', { d: 0.8 })
    .dictation('Avrei voluto dirti la verità, ma non ne ho avuto il coraggio.',
      'avrei voluto + infinitif ; ne = de cela (il coraggio di dirla).', { d: 0.9 })
    .tr('J’aurais aimé te voir.',
      ['Avrei voluto vederti.', 'Mi sarebbe piaciuto vederti.', 'Io avrei voluto vederti.', 'Ti avrei voluto vedere.', 'Avrei tanto voluto vederti.'],
      'J’aurais aimé = avrei voluto ou mi sarebbe piaciuto.', { d: 0.8 })
    .tr('Ils auraient pu gagner.',
      ['Avrebbero potuto vincere.', 'Loro avrebbero potuto vincere.'],
      'avrebbero potuto + infinitif.', { d: 0.7 })
    .repeat('Sarebbe stato bello passare le vacanze insieme.',
      'sarebbe stato bello + infinitif : regret.', { d: 0.6 })
    .say('Vous auriez dû partir plus tôt.',
      ['Avreste dovuto partire prima', 'Sareste dovuti partire prima', 'Sareste dovute partire prima', 'Avrebbe dovuto partire prima', 'Sarebbe dovuto partire prima',
        'Sarebbe dovuta partire prima', 'Avreste dovuto partire più presto', 'Avrebbe dovuto partire più presto'],
      'Avec dovere + partire : avreste dovuto ou sareste dovuti. Vous = voi (plusieurs) ou Lei (politesse).', { d: 0.9 })
    .answer('C’è qualcosa che avresti voluto fare diversamente nella tua vita? Racconta.',
      'Avrei voluto studiare all’estero e forse sarei dovuto partire prima, ma avevo paura di lasciare la mia famiglia.',
      'Regret : avrei voluto, sarei dovuto, sarebbe stato meglio + infinitif.',
      { keywords: [['avrei', 'sarei', 'avrebbe', 'sarebbe']], minWords: 12, d: 1.1 })
    .build(),
};

export const condizionalePassato2: Lesson = {
  id: 'it-b2-condizionale-passato-2',
  cefr: 'B2',
  unitId: 'it-b2-condizionale-passato',
  title: 'Futur dans le passé et information non confirmée',
  subtitle: 'Ha detto che sarebbe venuto',
  kcIds: [FUTPAST, HEARSAY],
  estMinutes: 9,
  explanation: [
    {
      title: 'Le futur vu du passé',
      body: 'Après un verbe principal au passé, une action future se met au condizionale passato, qu’elle ait eu lieu ou non.',
      table: [
        ['français', 'italien'],
        ['Il a dit qu’il viendrait.', 'Ha detto che sarebbe venuto.'],
        ['Je savais que tu comprendrais.', 'Sapevo che avresti capito.'],
        ['Elle pensait qu’il pleuvrait.', 'Pensava che sarebbe piovuto.'],
      ],
      tip: 'Le piège n°1 du francophone : traduire le conditionnel présent par un conditionnel présent. « Ha detto che verrebbe » est faux : on dit ha detto che sarebbe venuto.',
    },
    {
      title: 'Information non confirmée',
      body: 'Comme le conditionnel journalistique français, le condizionale signale une information rapportée, non vérifiée : présent pour un fait actuel, passé pour un fait accompli.',
      examples: [
        { en: 'Secondo la polizia, il ladro sarebbe fuggito in moto.', fr: 'D’après la police, le voleur se serait enfui à moto.' },
        { en: 'Il ministro sarebbe pronto a dimettersi.', fr: 'Le ministre serait prêt à démissionner.' },
      ],
      tip: 'Ici, l’italien fonctionne exactement comme le français. Les verbes pronominaux français ne le sont pas toujours en italien : s’enfuir = fuggire, scappare.',
    },
  ],
  exercises: exercises('it-b2-condizionale-passato-2', 'B2', { kc: FUTPAST, tense: 'condizionale_passato' })
    .mcq('Mi ha promesso che mi ___ il giorno dopo.', ['avrebbe chiamato', 'chiamerebbe', 'chiamerà'], 0,
      'Futur vu du passé (il giorno dopo) → condizionale passato : avrebbe chiamato.', { d: 0.9 })
    .cloze('Sapevo che Paolo non ___ in tempo.', ['sarebbe arrivato'],
      'Sapevo (passé) + action postérieure → sarebbe arrivato.', { hint: 'arrivare', d: 0.9 })
    .cloze('Secondo alcuni testimoni, l’incendio ___ alle tre di notte.', ['sarebbe scoppiato'],
      'Information non confirmée sur un fait passé → condizionale passato : sarebbe scoppiato.', { kc: HEARSAY, hint: 'scoppiare', d: 1.0 })
    .mcq('Perché il giornalista scrive « sarebbero entrati » e « avrebbero portato via »?',
      ['Perché le informazioni non sono ancora confermate', 'Perché il furto non è ancora avvenuto', 'Perché il giornalista esprime un desiderio'], 0,
      'Conditionnel journalistique : les faits sont rapportés (secondo i primi accertamenti), pas encore confirmés par la police.',
      {
        kc: [HEARSAY, FUTPAST],
        d: 1.0,
        passage:
          'Milano. Un furto clamoroso sarebbe avvenuto ieri notte in una gioielleria del centro. Secondo i primi accertamenti, i ladri sarebbero entrati da una finestra sul retro verso le due e avrebbero portato via gioielli per circa mezzo milione di euro. Il proprietario, che era in vacanza in Sardegna, ha fatto sapere che sarebbe rientrato in città il giorno dopo. La polizia non ha ancora confermato la notizia, ma alcuni testimoni avrebbero visto un’auto scura allontanarsi a tutta velocità.',
      })
    .type('« Dice che verrà. » → « Ha detto che ___. »', ['sarebbe venuto', 'sarebbe venuta'],
      'Le futur (verrà) devient condizionale passato après un passé : sarebbe venuto.', { d: 0.9 })
    .type('« Pensavamo che il film ___ (finire) prima di mezzanotte. » Écris le verbe.', ['sarebbe finito'],
      'finire intransitif (il film è finito) → sarebbe finito.', { d: 1.0 })
    .order('Elle m’a écrit qu’elle partirait demain.', 'Mi ha scritto che sarebbe partita domani.',
      'Futur dans le passé : sarebbe partita.', { distractors: ['partirebbe', 'avrebbe'], d: 0.9 })
    .listen('Secondo le prime notizie, l’aereo sarebbe atterrato senza problemi e non ci sarebbero feriti.', 'Che cosa sappiamo?',
      ['Le notizie non sono ancora confermate', 'Ci sono molti feriti', 'L’aereo non è ancora atterrato'], 0,
      'sarebbe atterrato, non ci sarebbero feriti : informations rapportées, non confirmées.', { kc: HEARSAY, d: 1.0 })
    .listen('Credevo che saresti rimasto a cena, e invece sei già andato via.', 'Che cosa pensava chi parla?',
      ['Che l’altro sarebbe rimasto a cena', 'Che l’altro fosse già andato via', 'Che la cena fosse finita'], 0,
      'saresti rimasto : futur dans le passé, démenti par la réalité.', { d: 0.9 })
    .dictation('Il giornale scrive che il ministro si sarebbe dimesso ieri sera.',
      'si sarebbe dimesso : dimettersi au condizionale passato (information non confirmée).', { kc: HEARSAY, d: 1.0 })
    .tr('Il a dit qu’il viendrait.',
      ['Ha detto che sarebbe venuto.', 'Lui ha detto che sarebbe venuto.', 'Disse che sarebbe venuto.'],
      'Conditionnel présent français → condizionale passato : sarebbe venuto.', { d: 0.9 })
    .tr('D’après la police, le voleur se serait enfui à moto.',
      ['Secondo la polizia, il ladro sarebbe fuggito in moto.', 'Secondo la polizia, il ladro sarebbe scappato in moto.', 'Stando alla polizia, il ladro sarebbe fuggito in moto.',
        'Stando alla polizia, il ladro sarebbe scappato in moto.', 'Secondo la polizia, il ladro sarebbe fuggito con la moto.', 'Secondo la polizia, il ladro sarebbe scappato con la moto.',
        'Secondo la polizia, il ladro si sarebbe dato alla fuga in moto.'],
      'secondo / stando a ; s’enfuir = fuggire, scappare (non pronominaux).', { kc: HEARSAY, d: 1.0 })
    .repeat('Non immaginavo che sarebbe stato così difficile.',
      'Futur dans le passé : sarebbe stato.', { d: 0.8 })
    .say('Je savais que tu comprendrais.',
      ['Sapevo che avresti capito', 'Io sapevo che avresti capito', 'Lo sapevo che avresti capito'],
      'Sapevo che + condizionale passato : avresti capito.', { d: 0.9 })
    .answer('Racconta una promessa che qualcuno ti ha fatto e che non ha mantenuto.',
      'Il mio vicino mi aveva detto che mi avrebbe restituito il trapano entro una settimana, ma sono passati tre mesi e non l’ho ancora rivisto.',
      'Promesse rapportée au passé : ha detto / aveva promesso che + condizionale passato.',
      { keywords: [['avrebbe', 'sarebbe', 'avrebbero', 'sarebbero']], minWords: 12, d: 1.2 })
    .build(),
};
