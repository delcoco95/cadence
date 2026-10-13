import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const PRON = 'it.b2.vocabulary.pronominal_verbs';
const PRONPAST = 'it.b2.grammar.pronominal_verbs_compound';
const MET = 'it.b2.vocabulary.metterci_volerci';
const SUF = 'it.b2.vocabulary.suffixes';

export const lessico1: Lesson = {
  id: 'it-b2-lessico-1',
  cefr: 'B2',
  unitId: 'it-b2-lessico',
  title: 'Verbes pronominaux idiomatiques',
  subtitle: 'Andarsene, farcela, cavarsela, prendersela',
  kcIds: [PRON, PRONPAST],
  estMinutes: 9,
  explanation: [
    {
      title: 'Des verbes avec deux particules',
      body: 'Ces verbes très fréquents combinent un pronom réfléchi et une particule figée (ne, la, ci). Le pronom réfléchi devient me, te, se, ce, ve devant la particule.',
      table: [
        ['andarsene (s’en aller)', 'me ne vado, te ne vai, se ne va… · Vattene! Andatevene!'],
        ['farcela (y arriver)', 'ce la faccio, ce la fai, ce la fa… · Non ce la faccio più.'],
        ['cavarsela (se débrouiller)', 'me la cavo, te la cavi, se la cava…'],
        ['prendersela (se vexer)', 'me la prendo… · Non te la prendere!'],
        ['sentirsela (se sentir capable)', 'Non me la sento di guidare.'],
        ['smetterla (arrêter)', 'Smettila! Smettetela!'],
      ],
      tip: 'Ne traduis pas mot à mot : « je n’en peux plus » = non ce la faccio più (ou non ne posso più), « je m’en vais » = me ne vado (et non « mi vado »).',
    },
    {
      title: 'Aux temps composés',
      body: 'Les pronominaux prennent essere ; farcela, qui n’est pas réfléchi, prend avere. Le participe s’accorde avec la quand elle est présente.',
      table: [
        ['andarsene', 'me ne sono andato / andata (accord avec le sujet)'],
        ['cavarsela', 'me la sono cavata (toujours -a, accord avec la)'],
        ['prendersela', 'se l’è presa'],
        ['farcela', 'ce l’ho fatta, ce l’abbiamo fatta'],
      ],
      tip: '« Il s’en est allé » = se n’è andato ; « je m’en suis sorti » = me la sono cavata, même pour un homme.',
    },
  ],
  exercises: exercises('it-b2-lessico-1', 'B2', { kc: PRON })
    .mcq('Com’è andato il colloquio, secondo Giulia?',
      ['Bene: pensa di avercela fatta', 'Male: se n’è andata prima della fine', 'Non lo sa, perché il direttore non c’era'], 0,
      '« Me la sono cavata », « non me la sono presa », « credo proprio di avercela fatta » : tout s’est bien passé.',
      {
        kc: [PRON, PRONPAST, MET],
        d: 1.0,
        passage:
          'Ciao Marta! Ti scrivo per raccontarti com’è andato il colloquio. Sono arrivata con mezz’ora di anticipo perché ci avevo messo meno del previsto, ma poi ho dovuto aspettare quasi un’ora: ero così nervosa che stavo per andarmene! Alla fine mi hanno fatto delle domande in inglese; non lo parlo benissimo, ma me la sono cavata. Il direttore era un tipo un po’ brusco, però non me la sono presa. Credo proprio di avercela fatta: mi richiamano la settimana prossima! Un bacione, Giulia',
      })
    .mcq('L’esame era difficilissimo, ma alla fine ___.', ['ce l’ho fatta', 'l’ho fatta', 'ce la sono fatta'], 0,
      'farcela prend avere : ce l’ho fatta.', { kc: PRONPAST, d: 0.8 })
    .cloze('Non parlo benissimo il tedesco, ma me la ___.', ['cavo'],
      'cavarsela : me la cavo = je me débrouille.', { d: 0.7 })
    .cloze('Gli ho fatto una battuta e lui se l’è ___.', ['presa'],
      'prendersela au passato prossimo : se l’è presa (accord avec la).', { kc: PRONPAST, d: 0.9 })
    .type('Écris « Allez-vous-en ! » (andarsene, voi).', ['Andatevene'],
      'Impératif + ve + ne soudés : andatevene.', { d: 0.9 })
    .type('« All’esame ___ bene. » Écris cavarsela au passato prossimo (io, sujet masculin).', ['me la sono cavata'],
      'Le participe s’accorde avec la : me la sono cavata, même pour un homme.', { kc: PRONPAST, d: 1.1 })
    .order('Je ne me sens pas de conduire la nuit.', 'Non me la sento di guidare di notte.',
      'sentirsela di + infinitif : non me la sento.', { distractors: ['mi', 'ne'], d: 0.9 })
    .listen('Dopo la lite, Marco se n’è andato sbattendo la porta e non si è più fatto sentire.', 'Che cosa ha fatto Marco?',
      ['È andato via arrabbiato', 'È rimasto a cena', 'Ha chiesto scusa'], 0,
      'se n’è andato sbattendo la porta = il est parti en claquant la porte.', { kc: PRONPAST, d: 0.9 })
    .listen('Smettila di lamentarti! Vedrai che ce la farai anche questa volta.', 'Che cosa vuole dire chi parla?',
      ['Di smettere di lamentarsi perché riuscirà', 'Di lasciar perdere perché è impossibile', 'Di andarsene subito'], 0,
      'smettila = arrête ; ce la farai = tu y arriveras.', { d: 0.9 })
    .dictation('Non te la prendere, non voleva offenderti.',
      'Impératif négatif : non te la prendere (ou non prendertela).', { d: 0.8 })
    .tr('Je n’en peux plus, je m’en vais.',
      ['Non ce la faccio più, me ne vado.', 'Non ne posso più, me ne vado.', 'Non ce la faccio più, vado via.', 'Non ne posso più, vado via.', 'Io non ce la faccio più, me ne vado.'],
      'non ce la faccio più / non ne posso più ; me ne vado / vado via.', { d: 0.8 })
    .tr('Elle s’est bien débrouillée.',
      ['Se l’è cavata bene.', 'Lei se l’è cavata bene.'],
      'cavarsela : se l’è cavata (essere, accord avec la).', { kc: PRONPAST, d: 1.0 })
    .repeat('Ce l’abbiamo fatta per un pelo!',
      'per un pelo = de justesse ; ce l’abbiamo fatta avec avere.', { kc: PRONPAST, d: 0.7 })
    .say('Ne te vexe pas !',
      ['Non te la prendere!', 'Non prendertela!'],
      'prendersela à l’impératif négatif : non te la prendere / non prendertela.', { d: 0.8 })
    .answer('Racconta una situazione difficile in cui alla fine ce l’hai fatta.',
      'L’anno scorso ho corso una maratona: a metà percorso pensavo di non farcela, ma alla fine ce l’ho fatta e sono arrivato al traguardo.',
      'farcela (ce l’ho fatta), cavarsela (me la sono cavata)…',
      { kc: [PRONPAST, PRON], keywords: [['fatta', 'farcela', 'cavata', 'cavarmela', 'cavo']], minWords: 12, d: 1.1 })
    .build(),
};

export const lessico2: Lesson = {
  id: 'it-b2-lessico-2',
  cefr: 'B2',
  unitId: 'it-b2-lessico',
  title: 'Metterci, volerci et les suffixes',
  subtitle: 'Ci vogliono due ore, ci ho messo un’ora, che tempaccio!',
  kcIds: [MET, SUF],
  estMinutes: 8,
  explanation: [
    {
      title: 'Volerci ou metterci ?',
      table: [
        ['volerci (impersonnel)', 'Ci vuole un’ora. · Ci vogliono due ore. (il faut)'],
        ['metterci (une personne)', 'Ci metto un’ora. · Quanto ci metti? (mettre du temps)'],
        ['passato prossimo', 'Ci è voluta un’ora / ci sono volute due ore · Ci ho messo due ore.'],
      ],
      examples: [
        { en: 'Ci vuole pazienza.', fr: 'Il faut de la patience.' },
        { en: 'Quanto ci hai messo ad arrivare?', fr: 'Combien de temps tu as mis pour arriver ?' },
      ],
      tip: 'Volerci s’accorde avec ce qu’il faut : « il faut deux heures » = ci vogliono due ore (pluriel). Volerci prend essere, metterci prend avere.',
    },
    {
      title: 'Les suffixes',
      table: [
        ['-ino, -etto, -ello (petit, affectueux)', 'gattino, casetta, alberello'],
        ['-one (grand)', 'librone, gattone ; la porta → il portone'],
        ['-accio (péjoratif)', 'tempaccio, parolaccia, ragazzaccio'],
        ['-uccio (tendresse)', 'cosuccia, casuccia'],
      ],
      tip: 'Attention aux faux suffixés, devenus des mots à part : telefonino (téléphone portable), mattone (brique), bottone (bouton), lampone (framboise). Et ne crée pas de suffixés au hasard : l’usage décide.',
    },
  ],
  exercises: exercises('it-b2-lessico-2', 'B2', { kc: MET })
    .mcq('Per andare da Milano a Roma in treno ___ circa tre ore.', ['ci vogliono', 'ci vuole', 'ci metto'], 0,
      'volerci s’accorde : tre ore → ci vogliono.', { d: 0.7 })
    .cloze('Per fare questa torta ___ tre uova.', ['ci vogliono'],
      'Il faut trois œufs = ci vogliono tre uova.', { hint: 'volerci', d: 0.7 })
    .cloze('Che ___! Piove da tre giorni.', ['tempaccio'],
      'tempo + -accio = sale temps.', { kc: SUF, hint: 'tempo + suffixe péjoratif', d: 0.7 })
    .type('Écris le diminutif de « gatto » (un petit chat).', ['gattino', 'micino'],
      'gatto + -ino = gattino (micino est aussi très courant).', { kc: SUF, d: 0.5 })
    .type('« ___ due anni per costruire il ponte. » Écris volerci au passato prossimo.', ['Ci sono voluti'],
      'volerci prend essere et s’accorde : ci sono voluti (due anni).', { d: 1.0 })
    .order('J’ai mis une heure pour trouver une place.', 'Ci ho messo un’ora per trovare parcheggio.',
      'metterci (une personne) prend avere : ci ho messo.', { distractors: ['voluto', 'vuole'], d: 0.9 })
    .mcq('Que signifie « un telefonino » ?', ['Un téléphone portable', 'Un petit téléphone fixe', 'Un mauvais téléphone'], 0,
      'Faux diminutif : il telefonino = le portable (on dit aussi il cellulare).', { kc: SUF, d: 0.6 })
    .listen('Ci ho messo quasi due ore ad arrivare: c’era un traffico pazzesco sulla tangenziale.', 'Perché ci ha messo tanto?',
      ['Per il traffico', 'Perché si è perso', 'Perché ha perso il treno'], 0,
      'c’era un traffico pazzesco = il y avait une circulation folle.', { d: 0.8 })
    .listen('Abitano in una casetta in campagna con due cagnolini e un gattone rosso.', 'Com’è il gatto?',
      ['Grande e rosso', 'Piccolo e nero', 'Piccolo e rosso'], 0,
      'gattone = gros chat ; casetta, cagnolini = diminutifs.', { kc: SUF, d: 0.8 })
    .dictation('Ci vuole pazienza per imparare bene una lingua.',
      'ci vuole + nom singulier.', { d: 0.7 })
    .tr('Il faut deux heures pour aller à Florence.',
      ['Ci vogliono due ore per andare a Firenze.', 'Per andare a Firenze ci vogliono due ore.', 'Servono due ore per andare a Firenze.',
        'Ci vogliono due ore per arrivare a Firenze.', 'Per arrivare a Firenze ci vogliono due ore.'],
      'il faut + durée = ci vuole / ci vogliono.', { d: 0.8 })
    .tr('Quel sale temps !',
      ['Che tempaccio!', 'Che brutto tempo!'],
      'tempaccio = sale temps (suffixe -accio).', { kc: SUF, d: 0.6 })
    .repeat('Ha detto una parolaccia e la maestra si è arrabbiata.',
      'parolaccia = gros mot (parola + -accia).', { kc: SUF, d: 0.6 })
    .say('Combien de temps tu as mis ?',
      ['Quanto ci hai messo?', 'Quanto tempo ci hai messo?', 'Tu quanto ci hai messo?'],
      'metterci au passato prossimo : ci hai messo.', { d: 0.8 })
    .answer('Quanto tempo ci metti per andare al lavoro o a scuola? E quanto ci vorrebbe a piedi?',
      'Di solito ci metto venti minuti in bici, ma a piedi ci vorrebbe almeno un’ora, quindi non ci vado mai a piedi.',
      'ci metto (moi) ; ci vuole / ci vorrebbe (impersonnel).',
      { keywords: [['metto', 'mettiamo', 'mette'], ['vuole', 'vorrebbe', 'vogliono', 'vorrebbero']], minWords: 12, d: 1.0 })
    .build(),
};
