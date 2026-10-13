import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const HEAD = 'it.c2.reading.headline_style';
const PRESS = 'it.c2.vocabulary.press_lexicon';
const NOM = 'it.c2.grammar.nominal_style';
const REP = 'it.c2.function.press_reporting';

export const giornalistico1: Lesson = {
  id: 'it-c2-giornalistico-1',
  cefr: 'C2',
  unitId: 'it-c2-giornalistico',
  title: 'Lire les titres',
  subtitle: 'Manovra, via libera del Senato ; la stangata, il braccio di ferro',
  kcIds: [HEAD, PRESS],
  estMinutes: 12,
  explanation: [
    {
      title: 'La syntaxe des titres',
      body: 'Les titres suppriment articles et verbes, séparent le thème et l’information par une virgule ou deux-points, et emploient le présent pour un fait passé.',
      table: [
        ['Manovra, via libera del Senato', 'Budget : feu vert du Sénat'],
        ['Roma, crolla palazzina: tre feriti', 'Rome : un petit immeuble s’effondre, trois blessés'],
        ['Scuola, slitta la riforma', 'École : la réforme est repoussée'],
        ['Caro bollette, stangata in arrivo', 'Factures d’énergie : une forte hausse en vue'],
        ['Sanità, è scontro tra Regioni e governo', 'Santé : affrontement entre Régions et gouvernement'],
      ],
      tip: 'Le sujet suit souvent le verbe (« crolla palazzina », « slitta la riforma ») : l’information nouvelle vient en dernier. « Caro » + nom = la cherté de (« caro affitti », « caro carburanti »).',
    },
    {
      title: 'Le lexique de la presse',
      table: [
        ['varare (una legge, un piano)', 'adopter, lancer'],
        ['slittare / lo slittamento', 'être reporté / le report'],
        ['la stangata', 'le coup de massue (hausse, amende)'],
        ['il braccio di ferro', 'le bras de fer'],
        ['il giro di vite / la stretta', 'le tour de vis'],
        ['il blitz', 'l’opération éclair (police, politique)'],
        ['la bufera', 'la tempête (polémique, scandale)'],
        ['scattare', 'se déclencher, entrer en vigueur'],
        ['tirare dritto', 'maintenir le cap, passer outre'],
      ],
      tip: '« Il blitz » n’évoque pas la guerre : c’est une descente de police ou un coup de force. « Monta la polemica » = la polémique enfle ; « scatta l’allarme » = l’alerte est donnée.',
    },
  ],
  exercises: exercises('it-c2-giornalistico-1', 'C2', { kc: HEAD })
    .mcq('Nel titolo « Milano, slitta l’apertura della nuova linea », che cosa è successo?',
      ['L’apertura è stata rinviata', 'La linea è stata chiusa', 'L’apertura è stata anticipata', 'C’è stato un incidente sulla linea'], 0,
      'slittare = glisser dans le temps, être reporté. Le sujet (l’apertura) est placé après le verbe.', { d: 2.3 })
    .mcq('Governo e sindacati non cedono: è ___ sulle pensioni.', ['braccio di ferro', 'giro di vite', 'via libera', 'detto fatto'], 0,
      'il braccio di ferro : affrontement où personne ne cède.', { kc: PRESS, d: 2.3 })
    .cloze('Il Consiglio dei ministri ha ___ il nuovo piano per la casa.', ['varato', 'approvato'],
      'varare (un piano, una legge) : adopter, lancer, comme on lance un navire.', { kc: PRESS, hint: 'adopter, lancer', d: 2.4 })
    .type('Transforme en titre nominal : « Il Senato ha approvato la manovra. » → « Manovra, via ___ del Senato »', ['libera'],
      'il via libera : le feu vert. Titre sans verbe, thème en tête.', { d: 2.3 })
    .type('Quel mot désigne une forte hausse soudaine (impôts, prix, amendes) ? (avec l’article)', ['la stangata'],
      'la stangata : le coup de bâton, au figuré une hausse ou une amende très lourde.', { kc: PRESS, d: 2.3 })
    .order('La polémique enfle sur les nouvelles amendes.', 'Monta la polemica sulle nuove multe.',
      'Ordre verbe-sujet typique des titres : « monta la polemica ».', { distractors: ['montano', 'alle'], d: 2.4 })
    .tr('École : la réforme est repoussée à septembre.',
      ['Scuola, slitta la riforma a settembre.', 'Scuola, la riforma slitta a settembre.', 'Scuola, slitta a settembre la riforma.', 'Scuola, riforma rinviata a settembre.',
        'Scuola, la riforma è rinviata a settembre.', 'Scuola, rinviata a settembre la riforma.', 'Scuola, la riforma è stata rinviata a settembre.', 'Scuola, la riforma slitta a settembre'],
      'Titre : thème + virgule, puis verbe « slitta » ou participe « rinviata ».', { d: 2.5 })
    .tr('Le gouvernement annonce un tour de vis sur l’évasion fiscale.',
      ['Il governo annuncia un giro di vite sull’evasione fiscale.', 'Il governo annuncia una stretta sull’evasione fiscale.', 'Il governo annuncia un giro di vite contro l’evasione fiscale.',
        'Il governo annuncia una stretta contro l’evasione fiscale.', 'Governo, giro di vite sull’evasione fiscale.', 'Il governo ha annunciato un giro di vite sull’evasione fiscale.',
        'Il governo ha annunciato una stretta sull’evasione fiscale.'],
      'un tour de vis = un giro di vite, una stretta.', { kc: PRESS, d: 2.5 })
    .mcq('Che cosa chiede l’opposizione?',
      ['Di rinviare l’entrata in vigore del piano', 'Di aumentare ancora le tariffe', 'Di chiudere i negozi del centro', 'Le dimissioni dei commercianti'], 0,
      '« l’opposizione chiede lo slittamento dell’entrata in vigore » ; « tira dritto » = le maire maintient le cap.',
      {
        kc: [HEAD, PRESS], d: 2.6,
        passage: 'Valdorso, bufera sul nuovo piano parcheggi. Varato lunedì dalla giunta, il provvedimento prevede la chiusura al traffico del centro storico dalle 8 alle 20 e un aumento del 40% delle tariffe delle strisce blu. Immediata la reazione dei commercianti: «Una stangata che rischia di svuotare le vetrine». Braccio di ferro anche in consiglio comunale, dove l’opposizione chiede lo slittamento dell’entrata in vigore, prevista per il primo marzo. Il sindaco, per ora, tira dritto.',
      })
    .listen('Maltempo, allerta rossa in tre regioni: scuole chiuse e treni a rilento.', 'Che cosa annuncia il titolo?',
      ['Un’allerta meteo grave, con scuole chiuse e treni rallentati', 'Uno sciopero dei treni', 'La riapertura delle scuole', 'Il ritorno del bel tempo'], 0,
      'Titre sans verbe : thème (maltempo), information (allerta rossa), conséquences.', { d: 2.3 })
    .listen('Blitz all’alba della polizia nel porto di Valdorso: sequestrati due capannoni di merce contraffatta.', 'Di che cosa si tratta?',
      ['Di un’operazione di polizia a sorpresa', 'Di una manifestazione nel porto', 'Di un incendio in un capannone', 'Di una festa all’alba'], 0,
      'il blitz : opération éclair ; « sequestrati » = participe sans auxiliaire, typique des titres.', { kc: PRESS, d: 2.4 })
    .dictation('Sanità, è scontro tra Regioni e governo sui fondi per gli ospedali.',
      '« È scontro » : nom sans article après essere, tournure de titre.', { d: 2.5 })
    .repeat('Scattano da lunedì le nuove multe per chi usa il telefono alla guida.',
      'scattare : entrer en vigueur ; sujet placé après le verbe.', { kc: PRESS, d: 2.3 })
    .say('Budget : feu vert du Sénat.',
      ['Manovra, via libera del Senato', 'Manovra, via libera dal Senato', 'Bilancio, via libera del Senato', 'Bilancio, via libera dal Senato', 'Manovra, sì del Senato', 'Manovra, ok del Senato'],
      'Titre nominal : il via libera (le feu vert) ; la manovra = la loi de finances.', { d: 2.3 })
    .answer('Leggi questo titolo: « Centro storico, stop alle auto: monta la protesta dei negozianti ». Spiega con parole tue, in frasi complete, che cosa è successo.',
      'Il comune ha deciso di chiudere il centro storico al traffico delle automobili e i proprietari dei negozi hanno cominciato a protestare, perché temono di perdere molti clienti.',
      'Déplie le titre : sujet explicite, verbes conjugués, articles rétablis.',
      { kc: [HEAD, PRESS], d: 2.5, minWords: 20, keywords: [['comune', 'amministrazione', 'città', 'sindaco', 'giunta'], ['protestare', 'protesta', 'protestano', 'proteste', 'protestato']] })
    .build(),
};

export const giornalistico2: Lesson = {
  id: 'it-c2-giornalistico-2',
  cefr: 'C2',
  unitId: 'it-c2-giornalistico',
  title: 'Style nominal et discours rapporté',
  subtitle: 'A seguito di, in vista di ; ribadire, ammettere, replicare',
  kcIds: [NOM, REP],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le style nominal',
      table: [
        ['Dopo che il decreto è stato approvato…', 'Dopo l’approvazione del decreto…'],
        ['Perché i prezzi sono aumentati…', 'A causa dell’aumento dei prezzi… / In seguito al rincaro…'],
        ['Quando il vertice si è concluso…', 'Al termine del vertice… / Concluso il vertice…'],
        ['per ridurre le emissioni', 'ai fini della riduzione delle emissioni'],
        ['prima delle elezioni', 'in vista delle elezioni'],
      ],
      tip: 'La presse et l’administration enchaînent les noms d’action et les locutions prépositionnelles (a seguito di, in vista di, in merito a, ai fini di). C’est dense mais attendu à l’écrit ; à l’oral, cela sonne lourd.',
    },
    {
      title: 'Les verbes introducteurs',
      table: [
        ['dichiarare / affermare', 'déclarer / affirmer (neutre)'],
        ['ribadire', 'réaffirmer'],
        ['precisare', 'préciser'],
        ['ammettere', 'admettre, reconnaître'],
        ['replicare / ribattere', 'répliquer'],
        ['tuonare / attaccare', 'fustiger, attaquer'],
        ['fa sapere che…', 'fait savoir que…'],
        ['secondo quanto riferito da…', 'selon ce qu’a rapporté…'],
      ],
      tip: 'Le verbe trahit la position du journaliste : « ammette » suggère un aveu, « tuona » une colère, « si limita a dire » une réponse évasive.',
    },
  ],
  exercises: exercises('it-c2-giornalistico-2', 'C2', { kc: NOM })
    .mcq('Quale versione è in stile nominale?',
      ['Dopo l’approvazione della legge, i sindacati hanno protestato.', 'Dopo che la legge è stata approvata, i sindacati hanno protestato.',
        'I sindacati hanno protestato perché hanno approvato la legge.', 'Hanno approvato la legge e i sindacati hanno protestato.'], 0,
      'Nom d’action (l’approvazione) à la place d’une subordonnée.', { d: 2.3 })
    .mcq('Il ministro, interrogato più volte, « si è limitato a dire » che ci sarà un’indagine. Che cosa suggerisce il giornalista?',
      ['Che la risposta è stata evasiva', 'Che il ministro ha confessato', 'Che il ministro era furioso', 'Che l’indagine è già conclusa'], 0,
      '« Si è limitato a dire » : il n’a rien dit de plus, réponse jugée insuffisante.', { kc: REP, d: 2.5 })
    .cloze('In ___ all’aumento dei contagi, la scuola resterà chiusa.', ['seguito'],
      'in seguito a (a seguito di) = à la suite de.', { hint: 'à la suite de', d: 2.3 })
    .type('Nominalise : « quando il vertice si è concluso » → « al ___ del vertice »', ['termine'],
      'al termine di = à l’issue de.', { d: 2.4 })
    .type('Quel verbe introducteur signifie « répliquer » ? (infinitif)', ['replicare', 'ribattere'],
      'replicare, ribattere : répondre à une critique.', { kc: REP, d: 2.3 })
    .order('Les travaux ont été suspendus en raison du mauvais temps.', 'I lavori sono stati sospesi a causa del maltempo.',
      'a causa di + nom : style nominal de la cause.', { distractors: ['per', 'dal'], d: 2.3 })
    .tr('Après la fermeture de l’usine, deux cents ouvriers ont perdu leur emploi.',
      ['Dopo la chiusura della fabbrica, duecento operai hanno perso il lavoro.', 'Dopo la chiusura dello stabilimento, duecento operai hanno perso il lavoro.',
        'Dopo la chiusura della fabbrica, duecento operai hanno perso il posto di lavoro.', 'Dopo la chiusura dello stabilimento, duecento operai hanno perso il posto di lavoro.',
        'In seguito alla chiusura della fabbrica, duecento operai hanno perso il lavoro.', 'In seguito alla chiusura dello stabilimento, duecento operai hanno perso il lavoro.',
        'Con la chiusura della fabbrica, duecento operai hanno perso il lavoro.', 'Dopo la chiusura della fabbrica, duecento operai hanno perso il loro lavoro.',
        'Dopo la chiusura della fabbrica, duecento operai sono rimasti senza lavoro.', 'Dopo la chiusura dello stabilimento, duecento operai sono rimasti senza lavoro.'],
      'Nom d’action « la chiusura » ; l’usine = la fabbrica, lo stabilimento.', { d: 2.4 })
    .tr('La ministre a reconnu que des erreurs avaient été commises.',
      ['La ministra ha ammesso che erano stati commessi degli errori.', 'La ministra ha ammesso che erano stati commessi errori.', 'Il ministro ha ammesso che erano stati commessi degli errori.',
        'Il ministro ha ammesso che erano stati commessi errori.', 'La ministra ha riconosciuto che erano stati commessi degli errori.', 'La ministra ha riconosciuto che erano stati commessi errori.',
        'Il ministro ha riconosciuto che erano stati commessi errori.', 'Il ministro ha riconosciuto che erano stati commessi degli errori.', 'La ministra ha ammesso che sono stati commessi degli errori.',
        'La ministra ha ammesso che sono stati commessi errori.', 'La ministra ha ammesso che erano stati fatti degli errori.', 'La ministra ha ammesso che erano stati fatti errori.'],
      'ammettere : reconnaître une faute ; « la ministra » et « il ministro » sont tous deux en usage.', { kc: REP, d: 2.6 })
    .listen('A seguito del guasto alla linea elettrica, la circolazione dei treni è sospesa tra Valdorso e Pietralunga.', 'Perché i treni non circolano?',
      ['Per un guasto alla linea elettrica', 'Per uno sciopero', 'Per la neve', 'Per lavori programmati'], 0,
      'a seguito di + nom : cause exprimée en style nominal.', { d: 2.3 })
    .listen('«Non ci dimetteremo», ha tuonato il presidente della regione, replicando alle accuse dell’opposizione.', 'Con quale tono ha parlato il presidente?',
      ['Con forza e rabbia', 'Con tristezza', 'Con ironia', 'Con esitazione'], 0,
      'tuonare : parler avec véhémence ; replicare : répondre à une accusation.', { kc: REP, d: 2.4 })
    .dictation('In vista delle elezioni, i partiti hanno presentato le liste dei candidati.',
      'in vista di = en prévision de.', { d: 2.4 })
    .repeat('Secondo quanto riferito dall’agenzia, l’incontro si è concluso senza accordo.',
      'Secondo quanto riferito da : formule de source journalistique.', { kc: REP, d: 2.4 })
    .say('À l’issue de la réunion, aucune décision n’a été prise.',
      ['Al termine della riunione non è stata presa alcuna decisione', 'Al termine della riunione non è stata presa nessuna decisione', 'Alla fine della riunione non è stata presa alcuna decisione',
        'Alla fine della riunione non è stata presa nessuna decisione', 'Al termine dell’incontro non è stata presa alcuna decisione', 'Al termine della riunione non si è presa alcuna decisione',
        'Al termine della riunione nessuna decisione è stata presa'],
      'al termine di + nom ; « alcuna / nessuna decisione » après une négation.', { d: 2.5 })
    .answer('Riferisci, come farebbe un giornalista, una dichiarazione immaginaria di un sindaco sui trasporti, scegliendo con cura il verbo introduttivo.',
      'Il sindaco di Valdorso ha ribadito che i nuovi autobus elettrici entreranno in servizio entro giugno, ma ha ammesso che la linea per l’ospedale subirà qualche ritardo.',
      'Verbes introducteurs précis (ribadire, ammettere, precisare) et discours indirect.',
      { kc: [REP, NOM], d: 2.6, minWords: 20, keywords: [['ribadito', 'dichiarato', 'affermato', 'precisato', 'ammesso', 'annunciato', 'sottolineato', 'replicato']] })
    .cloze('Il sindacato ha ___ che lo sciopero riguarderà solo il turno di notte.', ['precisato', 'specificato', 'chiarito'],
      'precisare = préciser : on apporte un détail qui limite ou corrige l’information.', { kc: REP, hint: 'préciser', d: 2.4 })
    .build(),
};
