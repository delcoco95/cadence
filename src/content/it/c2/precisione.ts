import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FF = 'it.c2.vocabulary.false_friends_nouns';
const FFV = 'it.c2.vocabulary.false_friends_verbs';
const PAR = 'it.c2.vocabulary.paronyms';
const PREC = 'it.c2.vocabulary.precise_verbs';

export const precisione1: Lesson = {
  id: 'it-c2-precisione-1',
  cefr: 'C2',
  unitId: 'it-c2-precisione',
  title: 'Faux amis',
  subtitle: 'Morbido, i parenti, la camera, fermare, pretendere',
  kcIds: [FF, FFV],
  estMinutes: 12,
  explanation: [
    {
      title: 'Noms et adjectifs trompeurs',
      table: [
        ['morbido', 'doux, moelleux (≠ morbide = morboso)'],
        ['i parenti', 'la famille, les proches (≠ parents = i genitori)'],
        ['la camera', 'la chambre (≠ caméra = la telecamera)'],
        ['il burro', 'le beurre (≠ bureau = l’ufficio, la scrivania)'],
        ['la cantina', 'la cave (≠ cantine = la mensa)'],
        ['la firma', 'la signature (≠ firme = la ditta, l’azienda)'],
        ['il palazzo', 'l’immeuble (pas seulement le palais)'],
        ['la bolletta', 'la facture (eau, gaz, électricité)'],
        ['la fattoria', 'la ferme (≠ facture = la fattura)'],
        ['il caldo', 'la chaleur ; avere caldo = avoir chaud'],
      ],
      tip: '« I miei » tout court désigne les parents (père et mère) : « Vado a cena dai miei ». « I parenti » couvre oncles, cousins, grands-parents.',
    },
    {
      title: 'Verbes trompeurs',
      table: [
        ['fermare / fermarsi', 'arrêter / s’arrêter (≠ fermer = chiudere)'],
        ['salire', 'monter (≠ salir = sporcare)'],
        ['pretendere', 'exiger (≠ prétendre = sostenere, affermare)'],
        ['intendere', 'avoir l’intention de (≠ entendre = sentire)'],
        ['ritenere', 'estimer, penser (≠ retenir = trattenere, ricordare)'],
        ['rimandare', 'reporter, remettre (≠ renvoyer = licenziare, rispedire)'],
        ['eventualmente', 'le cas échéant, si besoin'],
      ],
      tip: '« La polizia ha fermato un sospettato » = a interpellé un suspect. « Pretendo una risposta » = j’exige une réponse ; pour « il prétend que », dis « sostiene che ».',
    },
  ],
  exercises: exercises('it-c2-precisione-1', 'C2', { kc: FF })
    .mcq('Nella frase « A Natale vengono a pranzo tutti i miei parenti », « parenti » significa…',
      ['les membres de la famille', 'le père et la mère', 'les amis', 'les voisins'], 0,
      'i parenti = la famille élargie ; les parents = i genitori.', { d: 2.2 })
    .mcq('Scusi, questo autobus ___ in piazza Garibaldi?', ['ferma', 'chiude', 'firma', 'salva'], 0,
      'fermare (fermarsi) = s’arrêter ; chiudere = fermer.', { kc: FFV, d: 2.2 })
    .cloze('Questo cuscino è ___ come una nuvola: ci si dorme benissimo.', ['morbido', 'soffice'],
      'morbido = moelleux, doux ; « morbide » se dit morboso.', { hint: 'moelleux', d: 2.3 })
    .cloze('Il cliente ___ un rimborso immediato, ma il negozio ha rifiutato.', ['pretendeva', 'pretende', 'esigeva', 'esige', 'ha preteso', 'chiedeva', 'richiedeva', 'pretese'],
      'pretendere = exiger, et non prétendre.', { kc: FFV, hint: 'exiger', d: 2.4 })
    .type('Comment dit-on « la signature » en italien ? (avec l’article)', ['la firma'],
      'la firma = la signature ; une firme = una ditta, un’azienda.', { d: 2.2 })
    .type('Complète : « Il faut fermer la porte à clé. » → « Bisogna ___ la porta a chiave. »', ['chiudere'],
      'fermer = chiudere ; fermare = arrêter.', { kc: FFV, d: 2.2 })
    .order('J’ai laissé le beurre hors du frigo.', 'Ho lasciato il burro fuori dal frigo.',
      'il burro = le beurre ; le bureau = l’ufficio ou la scrivania.', { distractors: ['ufficio', 'scrivania'], d: 2.2 })
    .tr('Mes parents habitent au troisième étage d’un immeuble ancien.',
      ['I miei genitori abitano al terzo piano di un palazzo antico.', 'I miei genitori abitano al terzo piano di un vecchio palazzo.', 'I miei genitori vivono al terzo piano di un palazzo antico.',
        'I miei genitori vivono al terzo piano di un vecchio palazzo.', 'I miei abitano al terzo piano di un palazzo antico.', 'I miei abitano al terzo piano di un vecchio palazzo.',
        'I miei genitori abitano al terzo piano di un edificio antico.', 'I miei genitori abitano al terzo piano di un palazzo d’epoca.', 'I miei genitori vivono al terzo piano di un palazzo d’epoca.',
        'I miei vivono al terzo piano di un vecchio palazzo.', 'I miei genitori abitano al terzo piano di un vecchio edificio.'],
      'parents = genitori (ou i miei) ; immeuble = palazzo, edificio.', { d: 2.4 })
    .tr('Il prétend qu’il n’était pas au courant.',
      ['Sostiene che non ne sapeva niente.', 'Sostiene che non ne sapeva nulla.', 'Sostiene che non ne era al corrente.', 'Afferma che non ne era al corrente.',
        'Sostiene di non esserne stato al corrente.', 'Afferma di non esserne stato al corrente.', 'Sostiene che non lo sapeva.', 'Sostiene di non averne saputo niente.',
        'Sostiene di non averne saputo nulla.', 'Dice che non ne sapeva niente.', 'Sostiene che non era al corrente.'],
      'prétendre (affirmer) = sostenere ; pretendere signifie exiger.', { kc: FFV, d: 2.6 })
    .listen('Ho messo il vino in cantina e la valigia in camera.', 'Où sont le vin et la valise ?',
      ['Le vin à la cave, la valise dans la chambre', 'Le vin à la cantine, la valise dans la chambre', 'Le vin à la cave, la valise près de la caméra', 'Le vin au bureau, la valise à la cave'], 0,
      'la cantina = la cave ; la camera = la chambre.', { d: 2.2 })
    .listen('Sali tu a prendere le chiavi? Io ti aspetto giù in macchina.', 'Che cosa chiede chi parla?',
      ['Di salire a prendere le chiavi', 'Di sporcare la macchina', 'Di uscire senza chiavi', 'Di aspettare in casa'], 0,
      'salire = monter ; salir = sporcare.', { kc: FFV, d: 2.2 })
    .dictation('Se necessario, intendiamo rimandare la riunione a lunedì.',
      'intendere = avoir l’intention de ; rimandare = reporter.', { kc: FFV, d: 2.4 })
    .repeat('Il pane è ancora caldo e il burro è morbido: facciamo colazione!',
      'caldo = chaud ; morbido = moelleux, mou ; il burro = le beurre.', { d: 2.2 })
    .say('Arrête-toi ici, s’il te plaît.',
      ['Fermati qui, per favore', 'Fermati qua, per favore', 'Per favore, fermati qui', 'Fermati qui, per piacere', 'Fermati qui, ti prego'],
      'fermarsi = s’arrêter.', { kc: FFV, d: 2.2 })
    .answer('Scegli due falsi amici tra italiano e francese e scrivi una frase per ciascuno che ne mostri il vero significato.',
      'I miei parenti, cioè zii e cugini, vengono da noi a Natale. Il treno si è fermato in mezzo alla campagna per un guasto e siamo arrivati tardi.',
      'Chaque phrase doit rendre le sens italien évident (parenti = famille, fermarsi = s’arrêter).',
      { kc: [FF, FFV], d: 2.5, minWords: 20, keywords: [['parenti', 'fermato', 'morbido', 'camera', 'firma', 'burro', 'cantina', 'salire', 'pretende', 'palazzo', 'fermare', 'bolletta', 'fattoria']] })
    .build(),
};

export const precisione2: Lesson = {
  id: 'it-c2-precisione-2',
  cefr: 'C2',
  unitId: 'it-c2-precisione',
  title: 'Paronymes et mot juste',
  subtitle: 'Rilevare ou rivelare, il fine ou la fine, stipulare, rilasciare',
  kcIds: [PAR, PREC],
  estMinutes: 12,
  explanation: [
    {
      title: 'Paronymes et changements de genre',
      table: [
        ['rilevare / rivelare', 'relever, constater / révéler'],
        ['eminente / imminente', 'éminent / imminent'],
        ['emigrare / immigrare', 'quitter son pays / s’installer dans un pays'],
        ['inflazione / infrazione', 'inflation / infraction'],
        ['ratificare / rettificare', 'ratifier / rectifier'],
        ['il fine / la fine', 'le but / la fin'],
        ['il capitale / la capitale', 'le capital / la capitale'],
        ['il morale / la morale', 'le moral / la morale'],
      ],
      tip: 'Le genre change le sens : « il fine giustifica i mezzi » (le but), « alla fine del film » (la fin). De même « il fronte » (le front militaire) et « la fronte » (le front du visage).',
    },
    {
      title: 'Remplacer fare, dare, mettere',
      table: [
        ['fare una domanda (administrative) → presentare una domanda', 'déposer une demande'],
        ['fare un contratto → stipulare un contratto', 'conclure un contrat'],
        ['fare una relazione → redigere / stilare una relazione', 'rédiger un rapport'],
        ['fare un’indagine → svolgere / condurre un’indagine', 'mener une enquête'],
        ['dare un documento → rilasciare un documento', 'délivrer un document'],
        ['dare un premio → conferire / assegnare un premio', 'décerner un prix'],
        ['mettere a posto → riporre', 'ranger'],
      ],
      tip: 'À C2, on préfère le verbe exact au verbe passe-partout. « Rilasciare » sert aussi pour une interview (rilasciare un’intervista) et pour libérer quelqu’un.',
    },
  ],
  exercises: exercises('it-c2-precisione-2', 'C2', { kc: PAR })
    .mcq('L’arrivo del temporale è ___: meglio rientrare subito.', ['imminente', 'eminente', 'emergente', 'immanente'], 0,
      'imminente = sur le point d’arriver ; eminente = éminent.', { d: 2.3 })
    .mcq('Il comune ___ la carta d’identità in tre giorni.', ['rilascia', 'conferisce', 'stipula', 'redige'], 0,
      'rilasciare un documento = délivrer un document.', { kc: PREC, d: 2.4 })
    .cloze('Il ___ di questo progetto è ridurre i consumi energetici.', ['fine', 'scopo', 'obiettivo'],
      'il fine (masculin) = le but ; la fine = la fin.', { hint: 'le but (attention au genre)', d: 2.4 })
    .type('Quel verbe signifie « rectifier » (un dato, un errore) ? (infinitif)', ['rettificare', 'correggere'],
      'rettificare = rectifier ; ratificare = ratifier.', { d: 2.4 })
    .type('« Rédiger un rapport » : « ___ una relazione » (verbe précis, infinitif)', ['redigere', 'stilare', 'stendere', 'scrivere'],
      'redigere, stilare, stendere una relazione.', { kc: PREC, d: 2.4 })
    .order('Les deux entreprises ont conclu un contrat de cinq ans.', 'Le due aziende hanno stipulato un contratto di cinque anni.',
      'stipulare un contratto = conclure un contrat.', { kc: PREC, distractors: ['fatta', 'stipulati'], d: 2.4 })
    .tr('Beaucoup de jeunes ont émigré à l’étranger.',
      ['Molti giovani sono emigrati all’estero.', 'Molti ragazzi sono emigrati all’estero.', 'Molti giovani sono andati all’estero.', 'Molti giovani si sono trasferiti all’estero.',
        'Tanti giovani sono emigrati all’estero.', 'Molti giovani sono espatriati.', 'Molti giovani sono andati a vivere all’estero.'],
      'emigrare (partir de son pays) + essere ; immigrare = arriver dans un pays.', { d: 2.3 })
    .tr('Le jury a décerné le prix à une jeune romancière.',
      ['La giuria ha assegnato il premio a una giovane romanziera.', 'La giuria ha conferito il premio a una giovane romanziera.', 'La giuria ha assegnato il premio a una giovane scrittrice.',
        'La giuria ha conferito il premio a una giovane scrittrice.', 'La giuria ha attribuito il premio a una giovane romanziera.', 'La giuria ha attribuito il premio a una giovane scrittrice.',
        'La giuria ha dato il premio a una giovane romanziera.', 'La giuria ha dato il premio a una giovane scrittrice.'],
      'décerner = assegnare, conferire, attribuire.', { kc: PREC, d: 2.4 })
    .mcq('Che cosa ha fatto davvero il consiglio comunale?',
      ['Ha approvato definitivamente l’accordo', 'Ha corretto l’accordo', 'Ha rivelato un segreto', 'Ha spostato la capitale'], 0,
      '« non è stato rettificato, bensì ratificato […] cioè approvato in via definitiva ».',
      {
        kc: PAR, d: 2.7,
        passage: 'Nota della redazione. Nell’articolo di ieri sul porto di Valdorso sono comparsi alcuni errori, che ci scusiamo di dover rettificare. Il sindaco non ha «rivelato» un aumento del traffico merci, ma lo ha semplicemente «rilevato» sulla base dei dati ufficiali: non si trattava di un segreto. Inoltre, l’accordo con la regione non è stato «rettificato», bensì «ratificato» dal consiglio comunale, cioè approvato in via definitiva. Infine, il capitale investito, e non «la capitale», ammonta a dodici milioni.',
      })
    .listen('Durante la crisi l’inflazione ha superato il dieci per cento, e i salari non sono cresciuti.', 'Di che cosa si parla?',
      ['Dell’aumento generale dei prezzi', 'Di una violazione della legge', 'Di un’epidemia', 'Di un aumento degli stipendi'], 0,
      'inflazione = hausse des prix ; infrazione = infraction.', { d: 2.3 })
    .listen('La commissione ha svolto un’indagine approfondita e ha stilato una relazione di cento pagine.', 'Che cosa ha prodotto la commissione?',
      ['Un rapporto scritto dopo un’inchiesta', 'Un contratto', 'Un premio', 'Una legge'], 0,
      'svolgere un’indagine, stilare una relazione : verbes précis.', { kc: PREC, d: 2.4 })
    .dictation('Il morale della squadra è alto, nonostante la sconfitta di domenica.',
      'il morale = le moral ; la morale = la morale.', { d: 2.3 })
    .repeat('L’attore ha rilasciato un’intervista a un quotidiano locale.',
      'rilasciare un’intervista = accorder une interview.', { kc: PREC, d: 2.3 })
    .say('Le but de la réunion est de trouver un accord.',
      ['Il fine della riunione è trovare un accordo', 'Lo scopo della riunione è trovare un accordo', 'L’obiettivo della riunione è trovare un accordo', 'Il fine della riunione è raggiungere un accordo',
        'Lo scopo della riunione è raggiungere un accordo', 'Lo scopo della riunione è di trovare un accordo', 'L’obiettivo della riunione è raggiungere un accordo'],
      'le but = il fine (masculin), lo scopo, l’obiettivo.', { d: 2.4 })
    .answer('Riscrivi con verbi più precisi questa frase generica e aggiungi una frase tua: « Il comune ha fatto un’indagine e poi ha fatto una relazione ».',
      'Il comune ha svolto un’indagine sul traffico e in seguito ha redatto una relazione dettagliata. Il documento è stato poi presentato al consiglio comunale per la discussione.',
      'svolgere / condurre un’indagine ; redigere / stilare una relazione ; presentare un documento.',
      { kc: [PREC, PAR], d: 2.6, minWords: 20, keywords: [['svolto', 'condotto', 'effettuato'], ['redatto', 'stilato', 'steso', 'presentato']] })
    .build(),
};
