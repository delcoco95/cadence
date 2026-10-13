import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const HEDGE = 'it.c1.function.hedging';
const COND = 'it.c1.grammar.hypothetical_connectors';
const CONC = 'it.c1.function.concede_refute';

export const argomentare1: Lesson = {
  id: 'it-c1-argomentare-1',
  cefr: 'C1',
  unitId: 'it-c1-argomentare',
  title: 'Nuancer et envisager',
  subtitle: 'Magari, a quanto pare, qualora, semmai',
  kcIds: [HEDGE, COND],
  estMinutes: 12,
  explanation: [
    {
      title: 'Atténuer son propos',
      table: [
        ['magari + indicatif', 'peut-être : Magari vengo anch’io.'],
        ['Magari! / magari + subj. imparfait', 'si seulement : Magari fosse vero!'],
        ['a quanto pare', 'apparemment'],
        ['sembrerebbe che + subj.', 'il semblerait que'],
        ['non è detto che + subj.', 'il n’est pas dit que'],
        ['tutto sommato', 'somme toute'],
        ['in un certo senso', 'dans un certain sens'],
      ],
      tip: 'magari a trois valeurs : « peut-être » (+ indicatif), « j’aimerais bien ! » (seul), « si seulement » (+ subjonctif imparfait). Le conditionnel d’atténuation (sembrerebbe, direi) adoucit une affirmation, comme en français.',
    },
    {
      title: 'Envisager une hypothèse',
      table: [
        ['qualora + subj.', 'au cas où (soutenu) : Qualora piovesse, …'],
        ['nel caso in cui + subj.', 'dans le cas où'],
        ['ammesso che / posto che + subj.', 'à supposer que, en admettant que'],
        ['se dovesse + infinitif', 's’il devait… : Se dovesse piovere, …'],
        ['semmai, casomai', 'le cas échéant, si jamais ; à la rigueur'],
      ],
      tip: '« Au cas où il pleuvrait » : jamais de conditionnel après qualora ou nel caso in cui, mais le subjonctif imparfait (qualora piovesse). semmai peut aussi signifier « si c’est le cas de quelqu’un » : non è colpa sua; semmai è colpa mia.',
    },
  ],
  exercises: exercises('it-c1-argomentare-1', 'C1', { kc: HEDGE })
    .mcq('___ il treno fosse in ritardo, avvisateci subito.', ['Qualora', 'Magari', 'Anzi'], 0,
      'qualora + congiuntivo = au cas où ; magari + subj. exprimerait un souhait.', { kc: COND, d: 1.5 })
    .mcq('Non è detto che il progetto ___ approvato.', ['venga', 'viene', 'verrebbe'], 0,
      'non è detto che + congiuntivo : venga approvato.', { d: 1.7 })
    .cloze('___ che tu abbia ragione, come pensi di convincere gli altri?', ['Ammesso', 'Posto', 'Supposto'],
      'ammesso che / posto che + congiuntivo = à supposer que.', { kc: COND, hint: 'À supposer', d: 1.8 })
    .cloze('Non è colpa di Luca; ___ è colpa mia, che non l’ho avvisato.', ['semmai', 'casomai', 'se mai'],
      'semmai = si c’est la faute de quelqu’un, à la rigueur.', { kc: COND, hint: 'si c’est le cas de quelqu’un', d: 2.0 })
    .type('« Si seulement c’était vrai ! » → « ___ fosse vero! »', ['Magari', 'Se solo', 'Se soltanto'],
      'si seulement = magari / se solo + congiuntivo imperfetto.', { d: 1.5 })
    .type('« Apparemment, le magasin va fermer. » → « A quanto ___, il negozio chiuderà. »', ['pare', 'sembra'],
      'apparemment = a quanto pare / a quanto sembra.', { d: 1.5 })
    .order('Au cas où vous auriez besoin d’informations, contactez-nous.', 'Qualora aveste bisogno di informazioni, contattateci.',
      'qualora + congiuntivo imperfetto : aveste (et non avreste).', { kc: COND, distractors: ['avreste', 'contattate'], d: 1.8 })
    .tr('Somme toute, ce n’était pas une mauvaise idée.',
      ['Tutto sommato, non era una cattiva idea.', 'Tutto sommato, non era una brutta idea.', 'Tutto sommato, non è stata una cattiva idea.',
        'Tutto sommato, non è stata una brutta idea.', 'In fin dei conti, non era una cattiva idea.', 'In fin dei conti, non era una brutta idea.',
        'Alla fin fine, non era una cattiva idea.', 'Alla fin fine, non era una brutta idea.'],
      'somme toute = tutto sommato, in fin dei conti.', { d: 1.6 })
    .tr('S’il devait pleuvoir, la fête aurait lieu à l’intérieur.',
      ['Se dovesse piovere, la festa si terrebbe al chiuso.', 'Se dovesse piovere, la festa si farebbe al chiuso.', 'Se dovesse piovere, la festa si svolgerebbe al chiuso.',
        'Se dovesse piovere, la festa si terrebbe all’interno.', 'Qualora piovesse, la festa si terrebbe al chiuso.', 'Qualora piovesse, la festa si farebbe al chiuso.',
        'Qualora piovesse, la festa si svolgerebbe al chiuso.', 'Nel caso in cui piovesse, la festa si terrebbe al chiuso.',
        'Nel caso in cui piovesse, la festa si farebbe al chiuso.', 'Se piovesse, la festa si terrebbe al chiuso.', 'Se piovesse, la festa si farebbe al chiuso.'],
      'se dovesse + infinitif, ou qualora + subj. imparfait, puis conditionnel.', { kc: COND, d: 1.9 })
    .listen('Non dico che tu abbia torto, ma forse sarebbe il caso di sentire anche l’opinione degli altri.', 'Qual è l’atteggiamento di chi parla?',
      ['Prudente: suggerisce di ascoltare anche gli altri', 'Aggressivo: dice che l’altro ha torto', 'Indifferente: la cosa non gli interessa'], 0,
      'non dico che… ma forse sarebbe il caso : atténuation.', { d: 1.6 })
    .listen('Casomai cambiassi idea, il posto è tuo fino a venerdì.', 'Che cosa offre chi parla?',
      ['Di tenere il posto libero fino a venerdì, se l’altro cambia idea', 'Di cambiare il posto con un altro', 'Di incontrarsi venerdì'], 0,
      'casomai + congiuntivo imperfetto = si jamais.', { kc: COND, d: 1.8 })
    .dictation('Sembrerebbe che la situazione stia migliorando, ma è presto per dirlo.',
      'Conditionnel d’atténuation + congiuntivo : sembrerebbe che stia migliorando.', { d: 1.7 })
    .repeat('Magari ci vediamo domani, se riesco a liberarmi prima.',
      'magari + indicatif = peut-être.', { d: 1.4 })
    .say('Il n’est pas dit qu’il accepte.',
      ['Non è detto che accetti', 'Non è detto che lui accetti', 'Non è sicuro che accetti', 'Non è detto che accetterà'],
      'non è detto che + congiuntivo (le futur s’entend à l’oral).', { d: 1.6 })
    .answer('Secondo te, i compiti a casa sono utili? Esprimi un’opinione sfumata.',
      'Tutto sommato credo che siano utili, ma non è detto che servano a tutti allo stesso modo; magari sarebbe meglio assegnarne di meno e correggerli con più attenzione.',
      'Atténuateurs : tutto sommato, non è detto che, magari, sembrerebbe.',
      { keywords: [['magari', 'forse', 'sommato', 'detto', 'semmai', 'qualora', 'probabilmente', 'sembra', 'pare', 'sembrerebbe']], minWords: 18, d: 1.9 })
    .build(),
};

export const argomentare2: Lesson = {
  id: 'it-c1-argomentare-2',
  cefr: 'C1',
  unitId: 'it-c1-argomentare',
  title: 'Concéder et réfuter',
  subtitle: 'Sarà pure, resta il fatto che, non tanto… quanto',
  kcIds: [CONC],
  estMinutes: 12,
  explanation: [
    {
      title: 'Concéder',
      table: [
        ['è vero che… ma / però', 'certes… mais'],
        ['sarà pure (anche) vero, ma…', 'c’est peut-être vrai, mais…'],
        ['indubbiamente…, tuttavia', 'sans aucun doute…, cependant'],
        ['ammettiamo (pure) che + subj.', 'admettons que'],
        ['non che + subj., ma…', 'non pas que…, mais'],
        ['resta il fatto che', 'il n’en reste pas moins que'],
        ['a prescindere da', 'indépendamment de'],
      ],
      tip: 'Concéder avant de contre-argumenter est la base de l’argumentation italienne soignée. non che appelle le subjonctif : non che sia brutto, ma…',
    },
    {
      title: 'Réfuter et recentrer',
      table: [
        ['non si tratta di… bensì di…', 'il ne s’agit pas de… mais de…'],
        ['non tanto… quanto…', 'moins… que…, pas tant… que…'],
        ['non è affatto vero che + subj.', 'il n’est pas du tout vrai que'],
        ['il punto è che…', 'le fond du problème, c’est que…'],
        ['d’altronde, del resto', 'd’ailleurs'],
        ['d’altra parte', 'd’autre part ; cela dit'],
      ],
      tip: '« d’ailleurs » = d’altronde, del resto ; d’altra parte signifie plutôt « d’autre part ». Après non è vero che, on met le subjonctif : non è vero che sia partito.',
    },
  ],
  exercises: exercises('it-c1-argomentare-2', 'C1', { kc: CONC })
    .mcq('Non che il film ___ brutto, ma mi aspettavo di più.', ['fosse', 'era', 'sarebbe'], 0,
      'non che + congiuntivo : fosse.', { d: 1.7 })
    .mcq('Secondo l’autore, qual è il vero problema?', ['Il modo in cui si usano i social', 'L’esistenza stessa dei social', 'La distanza dalla famiglia'], 0,
      '« Il problema, semmai, non è tanto lo strumento quanto l’uso che se ne fa. »',
      {
        kc: [CONC, HEDGE, COND],
        d: 1.9,
        passage:
          'Si sente spesso dire che i social network rendono le persone più sole. Sarà pure vero in alcuni casi, ma non è detto che valga per tutti: per chi vive lontano dalla famiglia, per esempio, sono uno strumento prezioso. Il problema, semmai, non è tanto lo strumento quanto l’uso che se ne fa. Qualora si passassero ore a scorrere contenuti senza interagire con nessuno, allora sì, il rischio di isolamento sarebbe reale.',
      })
    .cloze('Sarà ___ vero, ma io non ci credo.', ['pure', 'anche'],
      'sarà pure / anche vero = c’est peut-être vrai (concession).', { hint: 'concession', d: 1.6 })
    .cloze('Resta il ___ che nessuno ci ha avvisati.', ['fatto'],
      'resta il fatto che = il n’en reste pas moins que.', { d: 1.5 })
    .type('« Indépendamment du résultat, l’expérience a été utile. » → « A ___ dal risultato, l’esperienza è stata utile. »', ['prescindere'],
      'a prescindere da = indépendamment de.', { d: 1.6 })
    .type('« Il n’est pas du tout vrai qu’il soit parti. » → « Non è affatto vero che ___ partito. »', ['sia'],
      'non è vero che + congiuntivo : sia partito.', { d: 1.6 })
    .order('Il ne s’agit pas d’argent, mais de respect.', 'Non si tratta di soldi, bensì di rispetto.',
      'non si tratta di… bensì di…', { distractors: ['tuttavia', 'pertanto'], d: 1.5 })
    .tr('D’ailleurs, personne ne l’avait invité.',
      ['D’altronde, nessuno lo aveva invitato.', 'Del resto, nessuno lo aveva invitato.', 'D’altronde, nessuno l’aveva invitato.', 'Del resto, nessuno l’aveva invitato.',
        'E poi nessuno lo aveva invitato.', 'E poi nessuno l’aveva invitato.'],
      'd’ailleurs = d’altronde, del resto.', { d: 1.7 })
    .tr('Admettons qu’il ait raison : cela ne change rien.',
      ['Ammettiamo pure che abbia ragione: ciò non cambia niente.', 'Ammettiamo pure che abbia ragione: questo non cambia niente.',
        'Ammettiamo pure che abbia ragione: non cambia niente.', 'Ammettiamo pure che abbia ragione: ciò non cambia nulla.',
        'Ammettiamo che abbia ragione: ciò non cambia niente.', 'Ammettiamo che abbia ragione: questo non cambia niente.',
        'Ammettiamo che abbia ragione: non cambia niente.', 'Ammettiamo che abbia ragione: non cambia nulla.',
        'Ammesso che abbia ragione, ciò non cambia niente.', 'Ammesso che abbia ragione, non cambia niente.'],
      'ammettiamo (pure) che + congiuntivo : abbia ragione.', { d: 1.8 })
    .listen('È vero che il nuovo stadio porterà turisti; d’altra parte, però, i costi per la città sono enormi e i quartieri vicini subiranno disagi per anni.', 'Qual è la posizione di chi parla?',
      ['Riconosce un vantaggio, ma sottolinea gli svantaggi', 'È completamente favorevole allo stadio', 'Pensa che lo stadio non porterà turisti'], 0,
      'è vero che… d’altra parte, però : concession puis objection.', { d: 1.6 })
    .listen('Non lo faccio tanto per i soldi, quanto per la soddisfazione di vedere il lavoro finito.', 'Perché lo fa?',
      ['Soprattutto per la soddisfazione', 'Soprattutto per i soldi', 'Perché è obbligato'], 0,
      'non tanto… quanto = moins pour… que pour…', { d: 1.6 })
    .dictation('Indubbiamente la proposta ha dei meriti; tuttavia, presenta alcuni limiti evidenti.',
      'Concession (indubbiamente) puis objection (tuttavia).', { d: 1.7 })
    .repeat('Il punto non è chi abbia cominciato, ma come uscirne.',
      'Interrogative indirecte au subjonctif (soutenu) : chi abbia cominciato.', { d: 1.6 })
    .say('Non pas que je sois contre, mais j’ai des doutes.',
      ['Non che io sia contrario, ma ho dei dubbi', 'Non che io sia contraria, ma ho dei dubbi', 'Non che sia contrario, ma ho dei dubbi', 'Non che sia contraria, ma ho dei dubbi',
        'Non che io sia contro, ma ho dei dubbi', 'Non che io sia contrario, però ho dei dubbi', 'Non che io sia contraria, però ho dei dubbi',
        'Non che io sia contrario, ma ho qualche dubbio', 'Non che io sia contraria, ma ho qualche dubbio'],
      'non che + congiuntivo : non che io sia contrario.', { d: 1.8 })
    .answer('Rispondi a chi sostiene che le automobili dovrebbero essere vietate nei centri storici: concedi un punto e poi argomenta la tua posizione.',
      'È vero che il traffico rovina i centri storici; resta il fatto, però, che molti anziani e commercianti hanno bisogno dell’auto, quindi servirebbero più eccezioni e mezzi pubblici migliori.',
      'Concession (è vero che, sarà pure) puis objection (resta il fatto che, però, tuttavia).',
      { keywords: [['vero', 'pure', 'certo', 'indubbiamente', 'ammettiamo'], ['però', 'tuttavia', 'ma', 'resta', 'comunque', 'eppure']], minWords: 20, d: 2.1 })
    .build(),
};
