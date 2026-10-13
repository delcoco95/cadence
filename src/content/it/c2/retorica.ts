import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FIG = 'it.c2.reading.figures_of_speech';
const RHET = 'it.c2.function.persuasive_rhetoric';
const IRO = 'it.c2.function.irony';
const IMPL = 'it.c2.function.implicature';

export const retorica1: Lesson = {
  id: 'it-c2-retorica-1',
  cefr: 'C2',
  unitId: 'it-c2-retorica',
  title: 'Figures et procédés',
  subtitle: 'Non è un’aquila, per non parlare di, vogliamo… vogliamo…',
  kcIds: [FIG, RHET],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les figures de style',
      table: [
        ['la litote', 'Non è un’aquila. (= il n’est pas très malin)'],
        ['l’iperbole', 'Te l’ho detto mille volte.'],
        ['la metafora', 'Quell’uomo è una volpe.'],
        ['la metonimia', 'bere un bicchiere ; leggere un Calvino'],
        ['l’ossimoro', 'un silenzio assordante, una lucida follia'],
        ['la sineddoche', 'un tetto (= une maison) ; le vele (= les navires)'],
      ],
      tip: '« Non è un’aquila » (ce n’est pas un aigle) est la litote type pour quelqu’un de peu brillant ; le français dirait « ce n’est pas une lumière ». « Non è stata una passeggiata » = ça n’a pas été facile.',
    },
    {
      title: 'Les procédés persuasifs',
      table: [
        ['la domanda retorica', 'E noi dovremmo stare zitti?'],
        ['la preterizione', 'Per non parlare di… / Non dirò che…'],
        ['l’anafora', 'Vogliamo scuole migliori, vogliamo strade sicure, vogliamo lavoro.'],
        ['il climax', 'Lo pensavo, lo speravo, lo sapevo.'],
        ['la captatio benevolentiae', 'Non sono un esperto, ma…'],
      ],
      tip: 'La prétérition (« per non parlare di… », « non starò qui a ricordare… ») attire l’attention sur ce qu’on prétend taire : elle est omniprésente dans le débat public.',
    },
  ],
  exercises: exercises('it-c2-retorica-1', 'C2', { kc: FIG })
    .mcq('« Un silenzio assordante » è…', ['un ossimoro', 'una litote', 'una metonimia', 'un’anafora'], 0,
      'Ossimoro : deux termes contradictoires (silence / assourdissant).', { d: 2.3 })
    .mcq('Dire di qualcuno « Non è un’aquila » significa che…', ['non è molto intelligente', 'ha paura dell’altezza', 'è molto ambizioso', 'non sa nuotare'], 0,
      'Litote : on nie le contraire pour dire, en l’atténuant, qu’il n’est pas brillant.', { d: 2.3 })
    .cloze('Il progetto è in ritardo, per non ___ dei costi, che sono raddoppiati in un anno.', ['parlare'],
      'Prétérition : « per non parlare di » souligne ce qu’on fait semblant de taire.', { kc: RHET, hint: 'prétérition', d: 2.4 })
    .type('Quelle figure dans « Ho bevuto un bicchiere » (le contenant pour le contenu) ? Écris son nom italien avec l’article.', ['la metonimia', 'metonimia'],
      'Metonimia : on nomme le contenant (bicchiere) pour le contenu (le vin, l’eau).', { d: 2.4 })
    .type('Comment s’appelle en italien la répétition d’un même mot en tête de phrases successives ? (avec l’article)', ['l’anafora', 'anafora'],
      'L’anafora : « vogliamo…, vogliamo…, vogliamo… ».', { kc: RHET, d: 2.4 })
    .order('Et nous devrions rester silencieux ?', 'E noi dovremmo stare zitti?',
      'Question rhétorique : la réponse attendue (non) est évidente.', { kc: RHET, distractors: ['avremmo', 'stati'], d: 2.3 })
    .tr('Je te l’ai dit mille fois !',
      ['Te l’ho detto mille volte!', 'Te l’ho già detto mille volte!', 'Te l’ho ripetuto mille volte!', 'Te l’avrò detto mille volte!', 'Te l’ho detto mille volte'],
      'Hyperbole : exagération expressive, comme en français.', { d: 2.2 })
    .tr('Je ne suis pas {un expert|une experte}, mais les chiffres parlent d’eux-mêmes.',
      ['Non sono un esperto, ma i numeri parlano da soli.', 'Non sono un’esperta, ma i numeri parlano da soli.', 'Non sono un esperto, ma i dati parlano da soli.',
        'Non sono un’esperta, ma i dati parlano da soli.', 'Non sono un esperto, però i numeri parlano da soli.', 'Non sono un’esperta, però i numeri parlano da soli.',
        'Non sono un esperto, ma le cifre parlano da sole.', 'Non sono un’esperta, ma le cifre parlano da sole.'],
      'Captatio benevolentiae : fausse modestie pour gagner l’auditoire.', { kc: RHET, d: 2.4 })
    .mcq('Quale figura usa la sindaca con « Non dirò quanti anni abbiamo aspettato »?', ['La preterizione', 'La metonimia', 'L’ossimoro', 'La litote'], 0,
      'Elle annonce qu’elle ne dira pas ce qu’en réalité elle rappelle : prétérition. On trouve aussi une anaphore (« unisce… unisce… unisce »), une question rhétorique et un climax final.',
      {
        kc: [RHET, FIG], d: 2.7,
        passage: 'Discorso della sindaca di Pietralunga all’inaugurazione del nuovo ponte. «Non sono un’ingegnera, e non vi annoierò con i numeri. Non dirò quanti anni abbiamo aspettato, né quante promesse abbiamo sentito: lo sapete meglio di me. Dirò solo questo: oggi questo ponte unisce due quartieri, unisce due comunità, unisce due storie. E qualcuno pensava davvero che avremmo rinunciato? Lo volevamo, lo abbiamo preteso, l’abbiamo costruito.»',
      })
    .listen('Quella ragazza è un vulcano di idee: in riunione ne propone dieci al minuto.', 'Quali figure ci sono nella frase?',
      ['Una metafora e un’iperbole', 'Un ossimoro e una litote', 'Una metonimia e un’anafora', 'Una preterizione e un climax'], 0,
      'Metafora (un vulcano di idee) et iperbole (dieci al minuto).', { d: 2.5 })
    .listen('Vogliamo una città più pulita, vogliamo una città più sicura, vogliamo una città che ascolti i giovani.', 'Quale procedimento retorico si sente?',
      ['L’anafora', 'La litote', 'L’ossimoro', 'La metonimia'], 0,
      'Répétition de « vogliamo » en tête : anafora.', { kc: RHET, d: 2.3 })
    .dictation('Non è stata una passeggiata, ma alla fine ce l’abbiamo fatta.',
      'Litote : « non è stata una passeggiata » = ça a été difficile.', { d: 2.3 })
    .repeat('Per non parlare del traffico, che ormai è diventato insopportabile.',
      'Prétérition introduite par « per non parlare di ».', { kc: RHET, d: 2.3 })
    .say('Ce n’est pas une lumière.',
      ['Non è un’aquila', 'Non è un genio', 'Non è una cima', 'Non è un fulmine di guerra', 'Non brilla per intelligenza'],
      'Litotes italiennes : non è un’aquila, non è una cima, non è un fulmine di guerra.', { d: 2.4 })
    .answer('Immagina di dover convincere i tuoi vicini a creare un orto condominiale. Scrivi due o tre frasi usando almeno una figura retorica (domanda retorica, anafora, preterizione…).',
      'Non vi dirò quanto costano le verdure al supermercato: lo sapete già. Vogliamo un cortile più verde, vogliamo stare insieme, vogliamo mangiare meglio: e chi potrebbe dire di no?',
      'Prétérition (non vi dirò), anaphore (vogliamo…) et question rhétorique (chi potrebbe dire di no?).',
      { kc: [RHET, FIG], d: 2.7, minWords: 20, keywords: [['vogliamo', 'dirò', 'parlare', 'chi', 'forse', 'davvero']] })
    .build(),
};

export const retorica2: Lesson = {
  id: 'it-c2-retorica-2',
  cefr: 'C2',
  unitId: 'it-c2-retorica',
  title: 'Ironie et sous-entendus',
  subtitle: 'Bravo, complimenti ! Ci mancava solo questa. Fai come vuoi.',
  kcIds: [IRO, IMPL],
  estMinutes: 12,
  explanation: [
    {
      title: 'L’ironie du quotidien',
      table: [
        ['Bravo, complimenti!', 'Bravo ! (après une bêtise)'],
        ['Ci mancava solo questa!', 'Il ne manquait plus que ça !'],
        ['Grazie tante!', 'Merci bien ! (reproche)'],
        ['Sai che novità!', 'Tu parles d’une nouvelle !'],
        ['Ma va’? / Ma dai?', 'Sans blague ? (faux étonnement)'],
        ['Che fortuna!', 'Quelle chance ! (pour une malchance)'],
      ],
      tip: 'L’intonation fait tout : « Bravo » dit sur un ton plat après une gaffe est une antiphrase. « Ma dai! » peut aussi exprimer une vraie surprise : seul le contexte tranche.',
    },
    {
      title: 'Ce qu’on dit sans le dire',
      table: [
        ['Fai come vuoi.', 'Fais comme tu veux (= je désapprouve).'],
        ['Se lo dici tu…', 'Si tu le dis… (= je n’y crois pas).'],
        ['Non per dire, ma…', 'Je dis ça, je dis rien, mais…'],
        ['Vedremo. / Ne riparliamo.', 'On verra (= sans doute non).'],
        ['Chi vuol capire, capisca.', 'À bon entendeur, salut.'],
        ['Io non dico niente, però…', 'Je ne dis rien, mais (je n’en pense pas moins).'],
      ],
      tip: 'Un « Vedremo » en réponse à une demande d’augmentation n’est presque jamais un oui. L’implicite est une forme de politesse : il permet de refuser ou de critiquer sans affronter.',
    },
  ],
  exercises: exercises('it-c2-retorica-2', 'C2', { kc: IRO })
    .mcq('Hai rovesciato il caffè sulla tastiera del collega. Lui dice: « Bravo, complimenti! ». Che cosa intende?',
      ['Ti sta rimproverando con ironia', 'Si congratula sinceramente', 'Ti ringrazia per il caffè', 'Vuole un altro caffè'], 0,
      'Antiphrase : on dit le contraire de ce qu’on pense.', { d: 2.2 })
    .mcq('Chiedi al capo un giorno libero e lui risponde: « Vedremo… ». Che cosa capisci?',
      ['Probabilmente la risposta è no', 'Ha già detto di sì', 'Vuole vederti subito', 'Non ha sentito la domanda'], 0,
      '« Vedremo » : refus poli sous-entendu.', { kc: IMPL, d: 2.3 })
    .cloze('Si è rotta la lavatrice proprio il giorno della festa: ci ___ solo questa!', ['mancava'],
      'Ci mancava solo questa : il ne manquait plus que ça.', { hint: 'il ne manquait plus que ça', d: 2.3 })
    .cloze('– Secondo me la torta è venuta benissimo. – Se lo ___ tu…', ['dici'],
      '« Se lo dici tu… » exprime un doute poli.', { kc: IMPL, d: 2.2 })
    .type('Complète l’exclamation ironique qui signifie « Tu parles d’une nouvelle ! » : « Sai che ___! »', ['novità'],
      'Sai che novità : rien de nouveau, c’était prévisible.', { d: 2.3 })
    .type('« À bon entendeur, salut ! » → « Chi vuol ___, capisca. »', ['capire'],
      'Chi vuol capire, capisca : avertissement voilé.', { kc: IMPL, d: 2.4 })
    .order('Je dis ça, je dis rien, mais tu es encore en retard.', 'Non per dire ma sei di nuovo in ritardo.',
      '« Non per dire, ma… » introduit une critique en prétendant ne pas la faire.', { kc: IMPL, distractors: ['dico', 'ancora'], d: 2.4 })
    .tr('Merci bien, maintenant tout le monde le sait !',
      ['Grazie tante, adesso lo sanno tutti!', 'Grazie tante, ora lo sanno tutti!', 'Grazie mille, adesso lo sanno tutti!', 'Grazie mille, ora lo sanno tutti!',
        'Grazie tante, adesso tutti lo sanno!', 'Grazie tante, ora tutti lo sanno!', 'Grazie, adesso lo sanno tutti!', 'Grazie tante, adesso lo sa tutto il mondo!'],
      '« Grazie tante » ironique : reproche.', { d: 2.3 })
    .tr('Fais comme tu veux, après tout c’est ta vie.',
      ['Fai come vuoi, in fondo è la tua vita.', 'Fai come vuoi, dopotutto è la tua vita.', 'Fai come vuoi, alla fine è la tua vita.', 'Fai come ti pare, in fondo è la tua vita.',
        'Fai come ti pare, dopotutto è la tua vita.', 'Fa’ come vuoi, in fondo è la tua vita.', 'Fa’ come vuoi, dopotutto è la tua vita.', 'Fai come vuoi, dopo tutto è la tua vita.',
        'Fai come vuoi, tanto è la tua vita.'],
      '« Fai come vuoi / come ti pare » : désapprobation implicite.', { kc: IMPL, d: 2.4 })
    .listen('– Domani piove di nuovo. – Ma va’? Siamo a novembre, chi l’avrebbe mai detto!', 'Qual è il tono della risposta?',
      ['Ironico: non c’è niente di sorprendente', 'Sinceramente stupito', 'Preoccupato', 'Entusiasta'], 0,
      '« Ma va’? » et « chi l’avrebbe mai detto » : faux étonnement.', { d: 2.4 })
    .listen('Io non dico niente, però quando c’era lui le cose funzionavano diversamente.', 'Che cosa lascia intendere chi parla?',
      ['Che preferiva la situazione precedente', 'Che non ha opinioni', 'Che lui non lavorava bene', 'Che oggi tutto funziona meglio'], 0,
      '« Io non dico niente, però… » : critique déguisée du présent.', { kc: IMPL, d: 2.5 })
    .dictation('Che fortuna, proprio oggi che ho fretta si è bloccato l’ascensore!',
      'Antiphrase : « che fortuna » pour une malchance.', { d: 2.3 })
    .repeat('Ne riparliamo con calma la settimana prossima, va bene?',
      '« Ne riparliamo » : souvent une façon de remettre à plus tard, voire d’enterrer la question.', { kc: IMPL, d: 2.2 })
    .say('Il ne manquait plus que ça !',
      ['Ci mancava solo questa', 'Ci mancava anche questa', 'Mancava solo questa', 'Ci voleva proprio questa'],
      'Ci mancava solo (anche) questa : exaspération ironique.', { d: 2.3 })
    .answer('Un amico ti chiede un parere sul suo nuovo taglio di capelli, che non ti piace. Rispondi con ironia leggera o con un sottinteso, senza essere offensivo.',
      'Diciamo che è un taglio molto coraggioso: non per dire, ma io aspetterei qualche settimana prima di farti vedere dai tuoi genitori. Se ti piace, comunque, fai come vuoi!',
      'Euphémisme (coraggioso), « non per dire, ma », « fai come vuoi » : la critique passe par l’implicite.',
      { kc: [IMPL, IRO], d: 2.7, minWords: 20, keywords: [['diciamo', 'dire', 'vuoi', 'coraggioso', 'vedremo', 'figurati']] })
    .build(),
};
