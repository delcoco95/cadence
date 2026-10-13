import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const BODY = 'it.c1.vocabulary.idioms_body_food';
const DAILY = 'it.c1.vocabulary.idioms_everyday';
const VERBS = 'it.c1.vocabulary.idiomatic_pronominal_verbs';

export const espressioni1: Lesson = {
  id: 'it-c1-espressioni-1',
  cefr: 'C1',
  unitId: 'it-c1-espressioni',
  title: 'Idiomes du corps et de la table',
  subtitle: 'In bocca al lupo, essere in gamba, a fagiolo',
  kcIds: [BODY],
  estMinutes: 11,
  explanation: [
    {
      title: 'Le corps',
      table: [
        ['In bocca al lupo! — Crepi!', 'Bonne chance ! (on répond crepi, pas grazie)'],
        ['costare un occhio della testa', 'coûter les yeux de la tête'],
        ['avere le mani bucate', 'être un panier percé'],
        ['non avere peli sulla lingua', 'ne pas mâcher ses mots'],
        ['essere in gamba', 'être doué, capable'],
        ['avere la testa fra le nuvole', 'être dans la lune'],
        ['mettere il dito nella piaga', 'remuer le couteau dans la plaie'],
        ['acqua in bocca!', 'motus et bouche cousue !'],
        ['a occhio e croce', 'à vue de nez, approximativement'],
      ],
      tip: 'Certains idiomes coïncident avec le français (costare un occhio della testa), d’autres trompent : essere in gamba n’a rien à voir avec les jambes, il signifie être compétent.',
    },
    {
      title: 'La table',
      table: [
        ['dire pane al pane e vino al vino', 'appeler un chat un chat'],
        ['essere buono come il pane', 'être bon comme le pain'],
        ['la ciliegina sulla torta', 'la cerise sur le gâteau'],
        ['andare liscio come l’olio', 'aller comme sur des roulettes'],
        ['cascare a fagiolo / come il cacio sui maccheroni', 'tomber à pic'],
        ['non è farina del tuo sacco', 'ce n’est pas de toi (tu ne l’as pas fait toi-même)'],
        ['avere le mani in pasta', 'avoir ses entrées, être impliqué'],
        ['essere una pizza', 'être barbant'],
      ],
      tip: 'Ces expressions sont très vivantes à l’oral, moins à l’écrit formel. « Tomber à pic » ne se traduit pas mot à mot : on dit cascare (ou capitare) a fagiolo.',
    },
  ],
  exercises: exercises('it-c1-espressioni-1', 'C1', { kc: BODY })
    .mcq('Domani ho l’esame di guida! — In bocca al lupo! — ___', ['Crepi!', 'Grazie a te!', 'Anche a te!'], 0,
      'À in bocca al lupo, on répond crepi (il lupo).', { d: 1.4 })
    .mcq('Che cosa significa « avere le mani bucate »?', ['Spendere troppo', 'Essere maldestro', 'Lavorare molto con le mani'], 0,
      'avere le mani bucate = dépenser sans compter.', { d: 1.5 })
    .cloze('Quella borsa costa un occhio della ___.', ['testa'],
      'costare un occhio della testa.', { d: 1.4 })
    .cloze('Mia sorella non ha peli sulla ___: dice sempre quello che pensa.', ['lingua'],
      'non avere peli sulla lingua = ne pas mâcher ses mots.', { d: 1.4 })
    .type('« Il est vraiment doué, ce garçon. » → « È davvero in ___, quel ragazzo. »', ['gamba'],
      'essere in gamba = être doué, capable.', { d: 1.5 })
    .type('« Motus et bouche cousue ! » → « Acqua in ___! »', ['bocca'],
      'acqua in bocca! = garde le secret.', { d: 1.5 })
    .order('Ne remue pas le couteau dans la plaie.', 'Non mettere il dito nella piaga.',
      'En italien, on met le doigt dans la plaie : mettere il dito nella piaga.', { distractors: ['coltello', 'ferita'], d: 1.6 })
    .tr('Il est toujours dans la lune.',
      ['Ha sempre la testa fra le nuvole.', 'Ha sempre la testa tra le nuvole.', 'È sempre con la testa fra le nuvole.', 'È sempre con la testa tra le nuvole.',
        'Ha sempre la testa nelle nuvole.'],
      'être dans la lune = avere la testa fra le nuvole.', { d: 1.6 })
    .tr('Tout s’est passé comme sur des roulettes.',
      ['È andato tutto liscio come l’olio.', 'Tutto è andato liscio come l’olio.', 'È andato tutto liscio.', 'Tutto è andato liscio.', 'È filato tutto liscio.',
        'Tutto è filato liscio.', 'È andato tutto a gonfie vele.', 'Tutto è andato a gonfie vele.'],
      'comme sur des roulettes = liscio (come l’olio), a gonfie vele.', { d: 1.7 })
    .listen('Questo tema è troppo bello per essere tuo: secondo me non è farina del tuo sacco.', 'Che cosa pensa chi parla?',
      ['Che il tema sia stato scritto da qualcun altro', 'Che il tema sia molto brutto', 'Che il tema parli di cucina'], 0,
      'non è farina del tuo sacco = ce n’est pas ton œuvre.', { d: 1.7 })
    .listen('Il concerto era già fantastico, ma l’arrivo a sorpresa del suo cantante preferito è stato la ciliegina sulla torta.', 'Com’è stata la serata?',
      ['Eccellente, con una bella sorpresa finale', 'Deludente, perché il cantante non è arrivato', 'Noiosa, perché il concerto era troppo lungo'], 0,
      'la ciliegina sulla torta = la cerise sur le gâteau.', { d: 1.5 })
    .dictation('A occhio e croce ci vorranno ancora due ore di viaggio.',
      'a occhio e croce = à vue de nez.', { d: 1.6 })
    .repeat('Diciamo pane al pane e vino al vino: il progetto non funziona.',
      'dire pane al pane e vino al vino = appeler un chat un chat.', { d: 1.6 })
    .say('Ton aide tombe à pic !',
      ['Il tuo aiuto casca a fagiolo', 'Il tuo aiuto capita a fagiolo', 'Il tuo aiuto arriva a fagiolo', 'Il tuo aiuto cade a fagiolo',
        'Il tuo aiuto arriva al momento giusto', 'Il tuo aiuto arriva proprio al momento giusto', 'Il tuo aiuto casca come il cacio sui maccheroni'],
      'tomber à pic = cascare a fagiolo, arrivare al momento giusto.', { d: 1.8 })
    .answer('Descrivi una persona che conosci usando almeno un’espressione idiomatica.',
      'Mio cugino è un ragazzo davvero in gamba, però ha le mani bucate: appena riceve lo stipendio lo spende tutto in vestiti e cene al ristorante.',
      'Réutilise une expression : essere in gamba, avere le mani bucate, non avere peli sulla lingua…',
      { keywords: [['gamba', 'bucate', 'lingua', 'nuvole', 'pane', 'testa', 'occhio', 'lupo', 'mani', 'pasta']], minWords: 15, d: 1.8 })
    .build(),
};

export const espressioni2: Lesson = {
  id: 'it-c1-espressioni-2',
  cefr: 'C1',
  unitId: 'it-c1-espressioni',
  title: 'Locutions du quotidien',
  subtitle: 'Essere al verde, farla franca, avercela con qualcuno',
  kcIds: [DAILY, VERBS],
  estMinutes: 12,
  explanation: [
    {
      title: 'Locutions courantes',
      table: [
        ['essere al verde', 'être fauché'],
        ['fare il ponte', 'faire le pont'],
        ['prendere un granchio', 'se tromper lourdement'],
        ['fare orecchie da mercante', 'faire la sourde oreille'],
        ['rompere il ghiaccio', 'briser la glace'],
        ['non vedere l’ora di…', 'avoir hâte de…'],
        ['avere un diavolo per capello', 'être d’une humeur massacrante'],
        ['cadere dalle nuvole', 'tomber des nues'],
        ['essere al settimo cielo', 'être aux anges'],
        ['tagliare la corda', 'filer, s’éclipser'],
      ],
      tip: 'non vedo l’ora di partire = j’ai hâte de partir (et non « je ne vois pas l’heure »). Au passé : non vedevo l’ora.',
    },
    {
      title: 'Verbes à pronoms figés',
      table: [
        ['farla franca', 's’en tirer impunément → l’ha fatta franca'],
        ['passarla liscia', 's’en sortir sans dommage → l’hanno passata liscia'],
        ['darsela a gambe', 'prendre ses jambes à son cou → se l’è data a gambe'],
        ['prendersela comoda', 'prendre son temps → se la sono presa comoda'],
        ['averla vinta', 'avoir gain de cause, avoir le dernier mot'],
        ['avercela con qualcuno', 'en vouloir à quelqu’un → ce l’ha con me'],
        ['smetterla', 'arrêter → smettila!'],
      ],
      tip: 'Le pronom la est figé et le participe s’accorde avec lui aux temps composés : l’ha fatta franca, se l’è data a gambe (auxiliaire essere pour les formes en -sela).',
    },
  ],
  exercises: exercises('it-c1-espressioni-2', 'C1', { kc: DAILY })
    .mcq('Perché chi scrive era arrabbiata?',
      ['Il volo era stato cancellato e la compagnia non risponde', 'Marco non l’aveva aiutata', 'Aveva perso il treno per Roma'], 0,
      '« la compagnia aerea ha cancellato il volo… fanno orecchie da mercante ».',
      {
        kc: [DAILY, BODY],
        d: 1.7,
        passage:
          'Cara Lucia, ti scrivo con un diavolo per capello. Avevo prenotato un fine settimana a Roma approfittando del ponte del 2 giugno, ma all’ultimo momento la compagnia aerea ha cancellato il volo. Ho scritto tre email, ma fanno orecchie da mercante. Per fortuna Marco, che ha le mani in pasta nel settore turistico, mi ha trovato un posto in treno: è cascato proprio a fagiolo! Ti farò sapere com’è andata.',
      })
    .mcq('Quando ha visto arrivare la polizia, il ladro ___.', ['se l’è data a gambe', 'l’ha data a gambe', 'se n’è dato a gambe'], 0,
      'darsela a gambe → se l’è data a gambe (essere, accord avec la).', { kc: VERBS, d: 1.8 })
    .cloze('Non vedo l’___ di partire per le vacanze!', ['ora'],
      'non vedere l’ora di = avoir hâte de.', { d: 1.4 })
    .cloze('Ma ___ con me? Che cosa ti ho fatto?', ['ce l’hai'],
      'avercela con qualcuno = en vouloir à quelqu’un : ce l’hai con me ?', { kc: VERBS, hint: 'avercela (tu)', d: 1.7 })
    .type('« Il a fait la sourde oreille. » → « Ha fatto orecchie da ___. »', ['mercante'],
      'fare orecchie da mercante = faire la sourde oreille.', { d: 1.6 })
    .type('« Cette fois-ci, ils s’en sont tirés sans dommage. » → « Questa volta l’hanno ___ liscia. »', ['passata'],
      'passarla liscia → l’hanno passata liscia (accord avec la).', { kc: VERBS, d: 1.8 })
    .order('Mon frère veut toujours avoir gain de cause.', 'Mio fratello vuole sempre averla vinta.',
      'averla vinta = l’emporter, avoir le dernier mot.', { kc: VERBS, distractors: ['vincerla', 'averlo'], d: 1.7 })
    .tr('Je suis {tombé|tombée} des nues.',
      ['Sono caduto dalle nuvole.', 'Sono caduta dalle nuvole.', 'Io sono caduto dalle nuvole.', 'Io sono caduta dalle nuvole.'],
      'tomber des nues = cadere dalle nuvole (des nuages).', { d: 1.6 })
    .tr('Prends ton temps, nous ne sommes pas pressés.',
      ['Prenditela comoda, non abbiamo fretta.', 'Prenditela con calma, non abbiamo fretta.', 'Fai con calma, non abbiamo fretta.', 'Fai pure con calma, non abbiamo fretta.',
        'Fai con comodo, non abbiamo fretta.', 'Prenditi il tuo tempo, non abbiamo fretta.', 'Prenditi tutto il tempo che vuoi, non abbiamo fretta.',
        'Prenditela comoda, non siamo di fretta.'],
      'prendersela comoda / con calma, fare con calma.', { kc: VERBS, d: 1.8 })
    .listen('Dopo la promozione, Elena era al settimo cielo: non smetteva di sorridere.', 'Come si sentiva Elena?',
      ['Felicissima', 'Preoccupata', 'Stanca morta'], 0,
      'essere al settimo cielo = être aux anges.', { d: 1.4 })
    .listen('Il giovedì è festa, così molti fanno il ponte e tornano al lavoro lunedì.', 'Che cosa fanno molte persone?',
      ['Non lavorano neanche il venerdì', 'Lavorano anche il giovedì', 'Partono il lunedì'], 0,
      'fare il ponte = faire le pont.', { d: 1.5 })
    .dictation('Credevo che fosse lunedì, ma ho preso un granchio: era domenica.',
      'prendere un granchio = se tromper lourdement.', { d: 1.6 })
    .repeat('Ha rubato per anni, ma alla fine non l’ha fatta franca.',
      'farla franca → l’ha fatta franca.', { kc: VERBS, d: 1.6 })
    .say('Aujourd’hui le chef est d’une humeur massacrante.',
      ['Oggi il capo ha un diavolo per capello', 'Il capo oggi ha un diavolo per capello', 'Oggi il capo è di pessimo umore', 'Il capo oggi è di pessimo umore',
        'Oggi il capo è di umore nero', 'Oggi il capo è di cattivo umore', 'Oggi il capo è nero'],
      'avere un diavolo per capello = être d’une humeur massacrante.', { d: 1.7 })
    .answer('Racconta una situazione in cui qualcuno ha cercato di farla franca o di averla vinta.',
      'Al liceo un mio compagno copiava sempre durante i compiti in classe e per mesi l’ha fatta franca, ma alla fine il professore lo ha scoperto.',
      'farla franca → l’ha fatta franca ; averla vinta → l’ha avuta vinta.',
      { kc: [VERBS, DAILY], keywords: [['franca', 'vinta', 'liscia', 'gambe', 'comoda']], minWords: 15, d: 2.0 })
    .build(),
};
