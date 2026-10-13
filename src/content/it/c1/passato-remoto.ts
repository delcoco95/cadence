import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const REG = 'it.c1.grammar.passato_remoto_regular';
const IRR = 'it.c1.grammar.passato_remoto_irregular';
const NARR = 'it.c1.grammar.narrative_tenses';

export const passatoRemoto1: Lesson = {
  id: 'it-c1-passato-remoto-1',
  cefr: 'C1',
  unitId: 'it-c1-passato-remoto',
  title: 'Les formes du passato remoto',
  subtitle: 'Parlò, partì, ebbe, fu, disse, nacque',
  kcIds: [REG, IRR],
  estMinutes: 12,
  explanation: [
    {
      title: 'Les verbes réguliers',
      table: [
        ['parlare', 'parlai, parlasti, parlò, parlammo, parlaste, parlarono'],
        ['credere', 'credei (credetti), credesti, credé (credette), credemmo, credeste, crederono (credettero)'],
        ['partire', 'partii, partisti, partì, partimmo, partiste, partirono'],
      ],
      tip: 'L’accent écrit de la 3e personne est indispensable : parlò (il parla) ≠ parlo (je parle), partì ≠ parti. Ce temps correspond au passé simple français et s’emploie dans le récit écrit, l’histoire, les biographies.',
    },
    {
      title: 'Les irréguliers : le schéma 1-3-3',
      body: 'La plupart des irréguliers ne le sont qu’à la 1re personne du singulier, à la 3e du singulier et à la 3e du pluriel. Les autres formes se forment régulièrement sur l’infinitif : presi, prendesti, prese, prendemmo, prendeste, presero.',
      table: [
        ['avere / essere', 'ebbi, ebbe, ebbero / fui, fosti, fu, fummo, foste, furono'],
        ['fare / dire', 'feci, fece, fecero / dissi, disse, dissero'],
        ['vedere / venire', 'vidi, vide, videro / venni, venne, vennero'],
        ['nascere / scrivere / mettere', 'nacqui, nacque / scrissi, scrisse / misi, mise'],
        ['decidere / rimanere / sapere', 'decisi, decise / rimasi, rimase / seppi, seppe'],
        ['volere / conoscere / dare / stare', 'volli, volle / conobbi, conobbe / diedi, diede / stetti, stette'],
      ],
      tip: 'fu s’écrit sans accent (monosyllabe). Ne régularise pas les formes courtes : nacque, pas « nascé » ; decisero, pas « decidettero ».',
    },
  ],
  exercises: exercises('it-c1-passato-remoto-1', 'C1', { kc: REG, tense: 'passato remoto' })
    .mcq('Dante ___ a Firenze nel 1265.', ['nacque', 'nascé', 'nasceva'], 0,
      'nascere → nacque (irrégulier).', { kc: IRR, d: 1.4 })
    .mcq('Quando i soldati ___ in città, la gente fuggì nelle campagne.', ['entrarono', 'entrorono', 'entrassero'], 0,
      'Verbe en -are, 3e pluriel : entrarono.', { d: 1.5 })
    .cloze('Leonardo ___ la Gioconda all’inizio del Cinquecento.', ['dipinse'],
      'dipingere → dipinse.', { kc: IRR, hint: 'dipingere', d: 1.7 })
    .cloze('Dopo la guerra, i miei nonni ___ in Argentina.', ['emigrarono'],
      'emigrare → emigrarono.', { hint: 'emigrare', d: 1.5 })
    .type('Passato remoto de « essere », 3e personne du singulier :', ['fu'],
      'essere → fu (sans accent).', { kc: IRR, d: 1.4 })
    .type('Passato remoto de « decidere », 3e personne du pluriel :', ['decisero'],
      'decidere → decisi, decise, decisero.', { kc: IRR, d: 1.6 })
    .order('Il ouvrit la porte et entra sans dire un mot.', 'Aprì la porta ed entrò senza dire una parola.',
      'aprire → aprì ; entrare → entrò (accent obligatoire).', { distractors: ['aprii', 'entro'], d: 1.5 })
    .tr('Elle vit la lettre et comprit tout.',
      ['Vide la lettera e capì tutto.', 'Lei vide la lettera e capì tutto.', 'Vide la lettera e comprese tutto.', 'Lei vide la lettera e comprese tutto.'],
      'vedere → vide ; capire → capì ; comprendere → comprese.', { kc: IRR, d: 1.6 })
    .tr('Ils vendirent la maison et partirent.',
      ['Vendettero la casa e partirono.', 'Venderono la casa e partirono.', 'Vendettero la casa e se ne andarono.', 'Venderono la casa e se ne andarono.'],
      'vendere → vendettero / venderono ; partire → partirono.', { d: 1.6 })
    .listen('Garibaldi partì da Quarto con mille volontari e sbarcò in Sicilia nel maggio del 1860.', 'Dove sbarcò Garibaldi?',
      ['In Sicilia', 'A Quarto', 'In Sardegna'], 0,
      'partì da Quarto… sbarcò in Sicilia.', { d: 1.4 })
    .listen('Quella sera nessuno disse niente: tutti capirono che la festa era finita.', 'Che cosa capirono tutti?',
      ['Che la festa era finita', 'Che dovevano parlare', 'Che la festa stava per cominciare'], 0,
      'disse (dire), capirono (capire).', { kc: IRR, d: 1.5 })
    .dictation('Mio nonno conobbe mia nonna durante un ballo nel 1952.',
      'conoscere → conobbe.', { kc: IRR, d: 1.6 })
    .repeat('Ci volle molto tempo prima che la città rinascesse.',
      'volerci → ci volle ; prima che + congiuntivo imperfetto.', { kc: IRR, d: 1.7 })
    .say('Il prit son manteau et sortit.',
      ['Prese il cappotto e uscì', 'Prese il suo cappotto e uscì', 'Prese il cappotto e se ne andò', 'Prese il suo cappotto e se ne andò'],
      'prendere → prese ; uscire → uscì.', { kc: IRR, d: 1.6 })
    .answer('Racconta in poche frasi un evento storico che conosci bene, usando il passato remoto.',
      'Nel 1969 due astronauti americani arrivarono sulla Luna: Armstrong scese per primo e pronunciò una frase che divenne famosa in tutto il mondo.',
      'Faits historiques → passato remoto : arrivarono, scese, divenne.',
      {
        kc: [REG, IRR],
        keywords: [['fu', 'furono', 'ebbe', 'arrivò', 'arrivarono', 'nacque', 'scoppiò', 'vinse', 'scese', 'divenne', 'fece', 'disse', 'cadde', 'iniziò', 'finì', 'morì', 'scoprì', 'pronunciò']],
        minWords: 15,
        d: 1.9,
      })
    .build(),
};

export const passatoRemoto2: Lesson = {
  id: 'it-c1-passato-remoto-2',
  cefr: 'C1',
  unitId: 'it-c1-passato-remoto',
  title: 'Raconter à l’écrit',
  subtitle: 'Remoto, imperfetto, trapassato remoto',
  kcIds: [NARR, IRR],
  estMinutes: 12,
  explanation: [
    {
      title: 'Quel passé pour quel récit ?',
      table: [
        ['passato remoto', 'faits achevés, coupés du présent : récit littéraire, histoire, biographie'],
        ['imperfetto', 'décor, description, habitude : Era una notte buia.'],
        ['passato prossimo', 'passé lié au présent, langue parlée (surtout au Nord)'],
        ['trapassato prossimo', 'antériorité générale : aveva già deciso'],
      ],
      tip: 'Ton réflexe de francophone (passé simple / imparfait) fonctionne bien. Mais le remoto est plus vivant que le passé simple : on l’entend à l’oral en Toscane et dans le Sud, et la presse l’emploie pour l’histoire. Au Nord, on dit plutôt è nato nel 1950 à l’oral.',
    },
    {
      title: 'Le trapassato remoto',
      body: 'Formé de l’auxiliaire au passato remoto + participe (ebbe finito, fu uscito), il marque une antériorité immédiate, seulement après dopo che, quando, appena, non appena, et quand la principale est au passato remoto. C’est le passé antérieur français : « quand il eut fini ».',
      examples: [
        { en: 'Quando ebbe finito di parlare, tutti applaudirono.', fr: 'Quand il eut fini de parler, tout le monde applaudit.' },
        { en: 'Appena fu uscita, scoppiò il temporale.', fr: 'À peine fut-elle sortie que l’orage éclata.' },
      ],
      tip: 'Hors de ces conjonctions, utilise le trapassato prossimo : Capì che l’aveva già visto (et non « l’ebbe già visto »).',
    },
  ],
  exercises: exercises('it-c1-passato-remoto-2', 'C1', { kc: NARR, tense: 'passato remoto' })
    .mcq('Appena ___ la notizia, il re convocò i suoi ministri.', ['ebbe ricevuto', 'abbia ricevuto', 'avrebbe ricevuto'], 0,
      'appena + trapassato remoto, principale au passato remoto : ebbe ricevuto.', { d: 1.9 })
    .mcq('Che cosa fece il nonno nel settembre del 1943?', ['Si unì ai partigiani in montagna', 'Emigrò all’estero con la famiglia', 'Si sposò nel suo paese'], 0,
      '« lasciò la casa dei genitori… e raggiunse i partigiani sulle montagne ».',
      {
        kc: [NARR, IRR],
        d: 1.6,
        passage:
          'Nel 1943 mio nonno aveva diciannove anni. Una notte di settembre, mentre tutti dormivano, lasciò la casa dei genitori senza salutare nessuno e raggiunse i partigiani sulle montagne. Vi rimase quasi due anni. Quando finalmente tornò, il paese era cambiato: molti amici erano partiti, altri non c’erano più. Di quel periodo non parlava volentieri, ma ogni tanto, dopo cena, raccontava qualche episodio a voce bassa.',
      })
    .cloze('Quando ebbe finito di parlare, ___ un lungo silenzio.', ['ci fu'],
      'il y eut = ci fu (esserci au passato remoto).', { hint: 'il y eut', d: 1.6 })
    .cloze('Dopo che tutti ___ usciti, il professore chiuse la porta a chiave.', ['furono'],
      'dopo che + trapassato remoto avec essere : furono usciti.', { hint: 'essere', d: 1.9 })
    .type('« Dès qu’il eut terminé, il partit. » → « Appena ___ finito, partì. » Écris l’auxiliaire.', ['ebbe'],
      'Passé antérieur = trapassato remoto : ebbe finito.', { d: 1.8 })
    .type('Passato remoto de « rimanere », 1re personne du singulier :', ['rimasi'],
      'rimanere → rimasi, rimase, rimasero.', { kc: IRR, d: 1.6 })
    .order('Quand elle eut lu la lettre, elle se mit à pleurer.', 'Quando ebbe letto la lettera, si mise a piangere.',
      'quando + trapassato remoto (ebbe letto), puis passato remoto (si mise).', { distractors: ['aveva', 'mettè'], d: 1.8 })
    .tr('Il pleuvait depuis des heures quand ils arrivèrent au village.',
      ['Pioveva da ore quando arrivarono al villaggio.', 'Pioveva da ore quando giunsero al villaggio.', 'Pioveva da ore quando arrivarono al paese.',
        'Pioveva da ore quando giunsero al paese.', 'Pioveva ormai da ore quando arrivarono al villaggio.'],
      'Décor à l’imperfetto (pioveva da ore), événement au remoto (arrivarono).', { d: 1.7 })
    .tr('Il naquit à Naples et mourut à Rome.',
      ['Nacque a Napoli e morì a Roma.', 'Lui nacque a Napoli e morì a Roma.', 'Egli nacque a Napoli e morì a Roma.'],
      'nascere → nacque ; morire → morì.', { kc: IRR, d: 1.5 })
    .listen('Mia nonna, che era siciliana, raccontava sempre che suo padre partì per l’America nel 1920 e non tornò mai più.', 'Che cosa successe al bisnonno?',
      ['Emigrò in America e non tornò', 'Tornò in Sicilia dopo molti anni', 'Partì per la guerra'], 0,
      'partì per l’America… non tornò mai più.', { d: 1.6 })
    .listen('Non appena ebbero firmato il trattato, i due re si strinsero la mano davanti alla folla.', 'Che cosa fecero i re dopo la firma?',
      ['Si strinsero la mano', 'Lasciarono la città', 'Dichiararono guerra'], 0,
      'non appena ebbero firmato (trapassato remoto) → si strinsero (stringere).', { d: 1.8 })
    .dictation('Era già notte quando la nave lasciò il porto.',
      'Imperfetto pour le cadre, passato remoto pour l’événement.', { d: 1.5 })
    .repeat('Visse a lungo all’estero, ma volle essere sepolto nel suo paese natale.',
      'vivere → visse ; volere → volle.', { kc: IRR, d: 1.7 })
    .say('Quand ils eurent mangé, ils se remirent en route.',
      ['Quando ebbero mangiato, si rimisero in cammino', 'Dopo che ebbero mangiato, si rimisero in cammino', 'Appena ebbero mangiato, si rimisero in cammino',
        'Quando ebbero mangiato, ripresero il cammino', 'Dopo che ebbero mangiato, ripresero il cammino', 'Quando ebbero mangiato, si rimisero in viaggio',
        'Dopo aver mangiato, si rimisero in cammino', 'Dopo aver mangiato, ripresero il cammino'],
      'Passé antérieur → trapassato remoto : ebbero mangiato ; rimettersi → si rimisero.', { d: 2.0 })
    .answer('Inventa l’inizio di una fiaba o di un racconto, come in un libro.',
      'C’era una volta un vecchio pescatore che viveva solo in riva al mare. Una mattina, mentre tirava su le reti, trovò una bottiglia con dentro un messaggio misterioso.',
      'Cadre à l’imperfetto (viveva, tirava), événement au passato remoto (trovò).',
      {
        kc: [NARR, IRR],
        keywords: [['trovò', 'vide', 'fu', 'ebbe', 'decise', 'arrivò', 'sentì', 'disse', 'incontrò', 'partì', 'accadde', 'successe', 'apparve']],
        minWords: 20,
        d: 2.0,
      })
    .build(),
};
