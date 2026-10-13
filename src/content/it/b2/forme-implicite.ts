import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const GER = 'it.b2.grammar.gerund_clauses';
const PART = 'it.b2.grammar.participle_clauses';
const INFPAST = 'it.b2.grammar.past_infinitive';

export const formeImplicite1: Lesson = {
  id: 'it-b2-forme-implicite-1',
  cefr: 'B2',
  unitId: 'it-b2-forme-implicite',
  title: 'Le gérondif',
  subtitle: 'Tornando a casa, avendo finito, pur sapendolo',
  kcIds: [GER],
  estMinutes: 9,
  explanation: [
    {
      title: 'Formes du gerundio',
      body: 'Présent : -are → -ando, -ere / -ire → -endo (parlando, leggendo, partendo). Passé : avendo / essendo + participe passé (avendo finito, essendo arrivato). Les pronoms se soudent à la fin : vedendola, essendomi alzato.',
      table: [
        ['fare, dire, bere', 'facendo, dicendo, bevendo'],
        ['tradurre, porre', 'traducendo, ponendo'],
        ['gerundio passato', 'avendo mangiato · essendo partito / partita'],
      ],
      tip: 'Le gérondif français « en marchant » se traduit sans préposition : camminando (jamais « in camminando »). Le participe présent « étant malade, ayant fini » devient lui aussi un gerundio : essendo malato, avendo finito.',
    },
    {
      title: 'Ce que le gerundio exprime',
      body: 'Il remplace une subordonnée quand le sujet est le même que celui de la principale.',
      table: [
        ['temps', 'Tornando a casa, ho incontrato Piero. (mentre tornavo)'],
        ['cause', 'Essendo stanco, sono andato a letto. (poiché ero stanco)'],
        ['moyen', 'Sbagliando s’impara.'],
        ['hypothèse', 'Partendo ora, arriveremo per cena. (se partiamo ora)'],
        ['concession', 'Pur sapendolo, non ha detto niente. (anche se lo sapeva)'],
      ],
      tip: 'Le gerundio passato marque l’antériorité : Avendo finito il lavoro, è uscito. Pour la concession, pur + gerundio = « tout en, bien que ».',
    },
  ],
  exercises: exercises('it-b2-forme-implicite-1', 'B2', { kc: GER, tense: 'gerundio' })
    .mcq('___ la strada, fai attenzione alle macchine.', ['Attraversando', 'In attraversando', 'Attraversato'], 0,
      'En traversant = attraversando, sans préposition.', { d: 0.6 })
    .mcq('___ già visto il film, ho preferito restare a casa.', ['Avendo', 'Essendo', 'Avuto'], 0,
      'vedere se conjugue avec avere : gerundio passato avendo visto.', { d: 0.7 })
    .cloze('___ arrivati tardi, abbiamo perso l’inizio dello spettacolo.', ['Essendo'],
      'arrivare prend essere : essendo arrivati (cause et antériorité).', { d: 0.8 })
    .cloze('Pur ___ la risposta, non ha detto niente.', ['sapendo'],
      'pur + gerundio = bien que, tout en : pur sapendo.', { hint: 'sapere', d: 0.9 })
    .type('Écris le gerundio présent de « fare ».', ['facendo'],
      'fare garde le radical latin fac- : facendo.', { d: 0.5 })
    .type('« ___ tardi, ho perso l’autobus. » Écris alzarsi au gerundio passato (je).', ['Essendomi alzato', 'Essendomi alzata'],
      'Pronominal → essendo + pronom soudé (essendomi) + participe accordé.', { d: 1.1 })
    .order('En lisant ce livre, j’ai beaucoup appris.', 'Leggendo questo libro ho imparato molto.',
      'leggendo = en lisant ; pas de « in » devant le gerundio.', { distractors: ['In', 'letto'], d: 0.7 })
    .listen('Studiando un’ora al giorno, in sei mesi potresti parlare abbastanza bene.', 'Che cosa dice chi parla?',
      ['Se studi ogni giorno, farai progressi in sei mesi', 'Ha studiato per sei mesi', 'Bisogna studiare sei ore al giorno'], 0,
      'Studiando = se studi : gerundio à valeur d’hypothèse.', { d: 0.8 })
    .listen('Pur avendo vinto la partita, l’allenatore non era soddisfatto del gioco della squadra.', 'Come si sentiva l’allenatore?',
      ['Insoddisfatto, nonostante la vittoria', 'Felice per la vittoria', 'Deluso per la sconfitta'], 0,
      'Pur avendo vinto = bien qu’il ait gagné.', { d: 1.0 })
    .dictation('Avendo perso le chiavi, ha dovuto chiamare un fabbro.',
      'Avendo perso : gerundio passato (cause antérieure).', { d: 0.8 })
    .tr('Étant malade, il n’est pas venu au travail.',
      ['Essendo malato, non è venuto al lavoro.', 'Essendo malato, non è andato al lavoro.', 'Essendo ammalato, non è venuto al lavoro.', 'Essendo ammalato, non è andato al lavoro.',
        'Essendo malato, non è venuto in ufficio.', 'Siccome era malato, non è venuto al lavoro.', 'Poiché era malato, non è venuto al lavoro.'],
      'Étant = essendo (cause).', { d: 0.8 })
    .tr('En partant maintenant, nous arriverons avant la nuit.',
      ['Partendo adesso, arriveremo prima di notte.', 'Partendo ora, arriveremo prima di notte.', 'Partendo adesso, arriveremo prima che faccia buio.',
        'Partendo ora, arriveremo prima che faccia buio.', 'Partendo adesso, arriveremo prima della notte.', 'Partendo ora, arriveremo prima della notte.',
        'Se partiamo adesso, arriveremo prima di notte.', 'Se partiamo ora, arriveremo prima di notte.'],
      'Partendo ora = se partiamo ora (hypothèse).', { d: 0.9 })
    .repeat('Sbagliando s’impara, dice sempre mia nonna.',
      'Proverbe : c’est en se trompant qu’on apprend.', { d: 0.5 })
    .say('Je l’ai rencontré en sortant du cinéma.',
      ['L’ho incontrato uscendo dal cinema', 'Uscendo dal cinema l’ho incontrato', 'L’ho incontrato mentre uscivo dal cinema'],
      'en sortant = uscendo (même sujet : io).', { d: 0.8 })
    .answer('Come hai imparato le lingue che parli? Usa almeno un gerundio.',
      'Ho imparato l’inglese guardando molte serie in lingua originale e parlando con colleghi stranieri durante le pause.',
      'Gerundio de moyen : guardando, leggendo, parlando, viaggiando…',
      {
        keywords: [['guardando', 'leggendo', 'parlando', 'ascoltando', 'studiando', 'viaggiando', 'facendo', 'vivendo', 'ripetendo', 'scrivendo', 'lavorando', 'usando']],
        minWords: 12,
        d: 1.0,
      })
    .build(),
};

export const formeImplicite2: Lesson = {
  id: 'it-b2-forme-implicite-2',
  cefr: 'B2',
  unitId: 'it-b2-forme-implicite',
  title: 'Participe et infinitif passé',
  subtitle: 'Finita la cena, dopo aver mangiato',
  kcIds: [PART, INFPAST],
  estMinutes: 9,
  explanation: [
    {
      title: 'Le participe passé seul',
      body: 'Un participe en tête de phrase remplace « après que / une fois que ». Il s’accorde avec le nom qu’il accompagne, ou avec le sujet pour les verbes à essere.',
      examples: [
        { en: 'Finita la cena, siamo usciti.', fr: 'Une fois le dîner terminé, nous sommes sortis.' },
        { en: 'Arrivate a casa, le ragazze si sono messe a dormire.', fr: 'Une fois rentrées, les filles se sont mises à dormir.' },
      ],
      tip: 'Le français « une fois le dîner terminé » met le nom d’abord ; l’italien commence par le participe : finita la cena (ou una volta finita la cena).',
    },
    {
      title: 'L’infinitif passé',
      body: 'aver(e) / esser(e) + participe passé, avec le même sujet que la principale. Avec essere, accord du participe.',
      table: [
        ['dopo + inf. passé', 'Dopo aver mangiato, è uscito. · Dopo essere arrivata, ha chiamato.'],
        ['per + inf. passé (cause)', 'L’hanno multato per aver superato i limiti.'],
        ['prima di + inf. présent', 'Prima di uscire, chiudi la finestra.'],
      ],
      tip: 'Comme en français : après avoir mangé = dopo aver mangiato. Mais « avant de » prend l’infinitif présent : prima di partire (jamais « prima di essere partito »). Les pronoms se soudent : dopo averlo visto, per avermi aiutato.',
    },
  ],
  exercises: exercises('it-b2-forme-implicite-2', 'B2', { kc: INFPAST, tense: 'infinito_passato' })
    .mcq('Dopo ___ cenato, siamo usciti.', ['aver', 'essere', 'avendo'], 0,
      'cenare prend avere : dopo aver cenato.', { d: 0.6 })
    .cloze('___ la lezione, gli studenti sono usciti in cortile.', ['Finita'],
      'Participe accordé avec la lezione (féminin) : finita la lezione.', { kc: PART, hint: 'finire', d: 0.9 })
    .cloze('Ti ringrazio per ___ aiutato.', ['avermi'],
      'per + infinitif passé, pronom soudé : per avermi aiutato.', { d: 0.9 })
    .type('« ___ (arrivare) a casa, i ragazzi si sono messi a dormire. » Écris le participe.', ['Arrivati'],
      'Verbe à essere : participe accordé avec i ragazzi → arrivati.', { kc: PART, d: 0.9 })
    .type('« Dopo ___, ha cambiato idea. » Écris l’infinitif passé de partire (sujet féminin).', ['essere partita', 'esser partita'],
      'partire prend essere ; accord avec le sujet féminin : essere partita.', { d: 0.9 })
    .order('Une fois les valises faites, nous sommes partis.', 'Una volta fatte le valigie siamo partiti.',
      'fatte s’accorde avec le valigie (féminin pluriel).', { kc: PART, distractors: ['fatti', 'fatto'], d: 1.0 })
    .mcq('Che cosa ha fatto Paolo prima di aprire l’officina?',
      ['Ha risparmiato e ristrutturato il magazzino del nonno', 'Ha assunto due ragazzi', 'Si è laureato in economia'], 0,
      '« Dopo aver risparmiato abbastanza… Ristrutturato il vecchio magazzino del nonno, ha cominciato… »',
      {
        kc: [PART, INFPAST, GER],
        d: 1.1,
        passage:
          'Laureatosi in ingegneria a Torino, Paolo ha lavorato per alcuni anni in una grande azienda automobilistica. Dopo aver risparmiato abbastanza, ha deciso di lasciare il posto fisso per aprire una piccola officina di biciclette nel suo paese natale. Pur sapendo che sarebbe stato un rischio, non ha mai avuto dubbi. Ristrutturato il vecchio magazzino del nonno, ha cominciato a riparare biciclette per gli amici; oggi, avendo ormai molti clienti anche nei paesi vicini, sta pensando di assumere due ragazzi.',
      })
    .listen('Dopo aver visto il film, siamo andati a mangiare una pizza.', 'Che cosa hanno fatto prima?',
      ['Hanno visto il film', 'Hanno mangiato una pizza', 'Hanno comprato i biglietti'], 0,
      'Dopo aver visto : le film d’abord, la pizza ensuite.', { d: 0.6 })
    .listen('Mi scuso per non avervi avvisato prima: ho saputo della riunione solo stamattina.', 'Perché si scusa chi parla?',
      ['Perché non ha avvisato gli altri in tempo', 'Perché è arrivato tardi alla riunione', 'Perché non può venire alla riunione'], 0,
      'per non avervi avvisato = de ne pas vous avoir prévenus.', { d: 0.9 })
    .dictation('Finiti gli esami, partiremo per la Sicilia.',
      'Finiti s’accorde avec gli esami (masculin pluriel).', { kc: PART, d: 0.8 })
    .tr('Après avoir lu la lettre, elle a pleuré.',
      ['Dopo aver letto la lettera, ha pianto.', 'Dopo avere letto la lettera, ha pianto.', 'Dopo aver letto la lettera, lei ha pianto.',
        'Dopo aver letto la lettera, si è messa a piangere.', 'Letta la lettera, ha pianto.'],
      'Dopo aver letto, ou le participe seul : letta la lettera.', { kc: [INFPAST, PART], d: 0.8 })
    .tr('Une fois arrivés à l’hôtel, nous avons dîné.',
      ['Arrivati in albergo, abbiamo cenato.', 'Una volta arrivati in albergo, abbiamo cenato.', 'Arrivati all’albergo, abbiamo cenato.', 'Una volta arrivati all’albergo, abbiamo cenato.',
        'Arrivati in hotel, abbiamo cenato.', 'Una volta arrivati in hotel, abbiamo cenato.', 'Dopo essere arrivati in albergo, abbiamo cenato.'],
      'Participe accordé avec le sujet (noi) : arrivati.', { kc: PART, d: 1.0 })
    .repeat('Il ragazzo è stato premiato per aver salvato un cane dal fiume.',
      'per + infinitif passé : cause.', { d: 0.8 })
    .say('Il a été puni pour avoir menti.',
      ['È stato punito per aver mentito', 'È stato punito per avere mentito', 'Lui è stato punito per aver mentito', 'È stato punito perché aveva mentito'],
      'pour avoir menti = per aver mentito.', { d: 0.8 })
    .answer('Che cosa fai di solito dopo essere tornato o tornata a casa la sera?',
      'Dopo essere tornata a casa, mi faccio una doccia e, finita la cena, leggo un po’ prima di andare a dormire.',
      'Dopo essere tornato / tornata, dopo aver cenato, finita la cena…',
      { kc: [INFPAST, PART], keywords: [['dopo', 'finita', 'finito', 'una volta'], ['aver', 'avere', 'essere', 'esser', 'finita', 'finito']], minWords: 12, d: 1.0 })
    .build(),
};
