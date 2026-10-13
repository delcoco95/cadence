import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const CONN = 'it.c1.grammar.formal_connectors';
const ANAPH = 'it.c1.grammar.anaphora_reference';
const NOM = 'it.c1.vocabulary.nominalization';

export const coesione1: Lesson = {
  id: 'it-c1-coesione-1',
  cefr: 'C1',
  unitId: 'it-c1-coesione',
  title: 'Les connecteurs',
  subtitle: 'Pertanto, tuttavia, ciononostante, infatti, bensì, anzi',
  kcIds: [CONN],
  estMinutes: 11,
  explanation: [
    {
      title: 'Conséquence, opposition, confirmation',
      table: [
        ['pertanto, quindi, dunque, perciò', 'donc, par conséquent'],
        ['tuttavia, però, eppure', 'cependant, pourtant'],
        ['ciononostante (ciò nonostante)', 'néanmoins, malgré cela'],
        ['infatti', 'en effet (confirme ce qui précède)'],
        ['bensì', 'mais (plutôt), après une négation'],
        ['anzi', 'au contraire ; et même'],
        ['invece', 'en revanche, au contraire'],
      ],
      tip: 'Faux amis : infatti = en effet, alors que « en fait » = in realtà, veramente. anzi n’est pas « ainsi » (= così). bensì ne s’emploie qu’après une négation : non è stanco, bensì annoiato.',
    },
    {
      title: 'Structurer un texte',
      table: [
        ['in primo luogo… in secondo luogo… infine', 'd’abord… ensuite… enfin'],
        ['da un lato… dall’altro', 'd’un côté… de l’autre'],
        ['non solo… ma anche', 'non seulement… mais aussi'],
        ['inoltre, per di più', 'de plus, en outre'],
        ['in sintesi, insomma', 'en résumé, bref'],
      ],
      examples: [
        { en: 'Il progetto è valido; tuttavia, i costi sono elevati.', fr: 'Le projet est valable ; cependant, les coûts sont élevés.' },
        { en: 'I costi sono, tuttavia, elevati.', fr: 'Les coûts sont, cependant, élevés.' },
      ],
      tip: 'Comme en français, pertanto et tuttavia peuvent se placer en tête ou au milieu de la phrase, entre virgules. Le point-virgule avant le connecteur est très fréquent à l’écrit.',
    },
  ],
  exercises: exercises('it-c1-coesione-1', 'C1', { kc: CONN })
    .mcq('Il treno è stato cancellato; ___, siamo arrivati in ritardo alla riunione.', ['pertanto', 'tuttavia', 'bensì'], 0,
      'Conséquence : pertanto (par conséquent).', { d: 1.4 })
    .mcq('Qual è la posizione dell’autore sul biglietto d’ingresso?', ['Non è bastato a risolvere il problema', 'Ha risolto definitivamente il problema', 'Ha fatto aumentare i residenti'], 0,
      '« non ha risolto il problema; anzi, secondo alcuni lo ha soltanto spostato ».',
      {
        kc: [CONN, NOM],
        d: 1.8,
        passage:
          'Negli ultimi anni il numero di turisti a Venezia è cresciuto in modo vertiginoso. Da un lato, ciò ha portato ricchezza alla città; dall’altro, tuttavia, ha reso la vita sempre più difficile ai residenti, molti dei quali si sono trasferiti in terraferma. L’introduzione di un biglietto d’ingresso per i visitatori giornalieri non ha risolto il problema; anzi, secondo alcuni lo ha soltanto spostato. Occorre pertanto una strategia più ampia.',
      })
    .cloze('Aveva studiato pochissimo; ___ ha superato l’esame con il massimo dei voti.', ['eppure', 'ciononostante', 'ciò nonostante', 'tuttavia', 'nonostante ciò', 'però'],
      'Opposition inattendue : eppure, ciononostante, tuttavia.', { hint: 'pourtant / néanmoins', d: 1.6 })
    .cloze('Non mi dispiace affatto, ___: sono contento che tu me l’abbia detto.', ['anzi'],
      'anzi = au contraire (renchérit sur une négation).', { hint: 'au contraire', d: 1.8 })
    .type('« Il avait raison : en effet, le projet a échoué. » → « Aveva ragione: ___, il progetto è fallito. »', ['infatti', 'difatti'],
      'en effet (confirmation) = infatti.', { d: 1.5 })
    .type('« En fait, je ne l’ai jamais rencontré. » → « ___, non l’ho mai conosciuto. »', ['In realtà', 'Veramente', 'A dire il vero', 'Per la verità'],
      'en fait = in realtà, veramente (pas infatti).', { d: 1.8 })
    .order('D’un côté le salaire est bon, de l’autre les horaires sont pénibles.', 'Da un lato lo stipendio è buono, dall’altro gli orari sono pesanti.',
      'da un lato… dall’altro.', { distractors: ['anzi', 'bensì'], d: 1.6 })
    .tr('Le projet est intéressant ; cependant, il coûte trop cher.',
      ['Il progetto è interessante; tuttavia, costa troppo.', 'Il progetto è interessante; tuttavia, è troppo caro.', 'Il progetto è interessante; però costa troppo.',
        'Il progetto è interessante; però è troppo caro.', 'Il progetto è interessante; ciononostante, costa troppo.', 'Il progetto è interessante; ciononostante, è troppo caro.',
        'Il progetto è interessante, ma costa troppo.', 'Il progetto è interessante, ma è troppo caro.'],
      'cependant = tuttavia, però.', { d: 1.5 })
    .tr('Il n’est pas fatigué, mais plutôt ennuyé.',
      ['Non è stanco, bensì annoiato.', 'Non è stanco, ma annoiato.', 'Non è stanco, piuttosto annoiato.', 'Non è stanco, ma piuttosto annoiato.', 'Non è stanco, bensì si annoia.'],
      'Après une négation, « mais plutôt » = bensì.', { d: 1.6 })
    .listen('Il tasso di disoccupazione è sceso; ciononostante, molti giovani continuano a lasciare il paese.', 'Qual è la situazione descritta?',
      ['Meno disoccupati, ma i giovani emigrano ancora', 'La disoccupazione è aumentata', 'I giovani tornano in patria'], 0,
      'ciononostante = malgré cela.', { d: 1.5 })
    .listen('Pensavo che il film fosse noioso; invece mi è piaciuto moltissimo, anzi, è il migliore che abbia visto quest’anno.', 'Che cosa pensa del film?',
      ['Gli è piaciuto molto, contro le sue aspettative', 'Lo ha trovato noioso', 'Non l’ha ancora visto'], 0,
      'invece = au contraire ; anzi = et même.', { d: 1.6 })
    .dictation('Le previsioni erano pessime; tuttavia, la giornata è stata splendida.',
      'tuttavia entre point-virgule et virgule.', { d: 1.5 })
    .repeat('In primo luogo vorrei ringraziarvi; in secondo luogo, vorrei proporvi un’idea.',
      'in primo luogo… in secondo luogo : énumération.', { d: 1.4 })
    .say('Il pleuvait, et pourtant nous sommes sortis.',
      ['Pioveva, eppure siamo usciti', 'Pioveva, eppure siamo uscite', 'Pioveva, ciononostante siamo usciti', 'Pioveva, tuttavia siamo usciti',
        'Pioveva, però siamo usciti', 'Pioveva, ma siamo usciti lo stesso', 'Pioveva, eppure siamo usciti lo stesso', 'Pioveva, ciò nonostante siamo usciti'],
      'et pourtant = eppure.', { d: 1.5 })
    .answer('Presenta un vantaggio e uno svantaggio del lavoro da casa, collegando le idee.',
      'Da un lato il lavoro da casa fa risparmiare molto tempo; dall’altro, tuttavia, può isolare le persone e rendere più difficile la collaborazione con i colleghi.',
      'Connecteurs : da un lato… dall’altro, tuttavia, pertanto, inoltre.',
      { keywords: [['tuttavia', 'pertanto', 'ciononostante', 'eppure', 'infatti', 'dunque', 'quindi', 'però', 'invece', 'inoltre', 'anzi', 'lato']], minWords: 18, d: 1.8 })
    .build(),
};

export const coesione2: Lesson = {
  id: 'it-c1-coesione-2',
  cefr: 'C1',
  unitId: 'it-c1-coesione',
  title: 'Reprises et nominalisation',
  subtitle: 'Il che, quest’ultimo, l’aumento, la chiusura',
  kcIds: [ANAPH, NOM],
  estMinutes: 12,
  explanation: [
    {
      title: 'Reprendre sans répéter',
      table: [
        ['il che', 'ce qui (reprend toute la phrase)'],
        ['ciò', 'cela'],
        ['quest’ultimo / quest’ultima', 'ce dernier / cette dernière'],
        ['il primo… il secondo', 'celui-là… celui-ci'],
        ['tale / tali', 'tel, un tel'],
        ['il quale, la quale', 'lequel, laquelle (lève une ambiguïté)'],
      ],
      examples: [
        { en: 'Il sindaco ha incontrato il ministro; quest’ultimo ha promesso nuovi fondi.', fr: 'Le maire a rencontré le ministre ; ce dernier a promis de nouveaux fonds.' },
        { en: 'Ha perso il lavoro, il che lo ha molto preoccupato.', fr: 'Il a perdu son travail, ce qui l’a beaucoup inquiété.' },
      ],
      tip: '« ce qui » qui reprend toute une phrase = il che (ou cosa che), pas ciò che : ciò che s’emploie avec un verbe qui suit directement (ciò che dici = ce que tu dis).',
    },
    {
      title: 'La nominalisation',
      body: 'L’écrit soutenu (presse, rapports) transforme les verbes en noms pour condenser l’information.',
      table: [
        ['aumentare → l’aumento', 'diminuire → la diminuzione'],
        ['chiudere → la chiusura', 'aprire → l’apertura'],
        ['crescere → la crescita', 'ridurre → la riduzione'],
        ['approvare → l’approvazione', 'rinviare → il rinvio'],
        ['calare → il calo', 'tagliare → il taglio'],
      ],
      examples: [
        { en: 'Dopo l’approvazione della legge, le proteste sono cessate.', fr: 'Après l’adoption de la loi, les protestations ont cessé.' },
      ],
      tip: '« la croissance » = la crescita ; « la hausse » = l’aumento ou il rialzo ; « la baisse » = il calo ou il ribasso. Plusieurs noms n’ont pas de suffixe : il rinvio, il calo, il taglio.',
    },
  ],
  exercises: exercises('it-c1-coesione-2', 'C1', { kc: ANAPH })
    .mcq('Ha vinto il concorso al primo tentativo, ___ ha sorpreso tutti.', ['il che', 'ciò che', 'che'], 0,
      'Reprise de toute la phrase → il che.', { d: 1.6 })
    .mcq('Marco ha telefonato a Luigi, ma ___ non ha risposto.', ['quest’ultimo', 'il primo', 'tale'], 0,
      'quest’ultimo renvoie au dernier nommé (Luigi).', { d: 1.5 })
    .cloze('Il governo ha annunciato ___ delle tasse sui carburanti.', ['la riduzione'],
      'ridurre → la riduzione.', { kc: NOM, hint: 'ridurre (nom)', d: 1.5 })
    .cloze('Non avevo mai visto ___ confusione in vita mia.', ['una tale', 'tale', 'tanta'],
      'une telle = una tale (ou tale, plus soutenu).', { hint: 'une telle', d: 1.6 })
    .type('« Le musée ferme à cause des travaux. » → « ___ del museo è dovuta ai lavori. » (nominalise « chiudere », avec l’article)', ['La chiusura'],
      'chiudere → la chiusura.', { kc: NOM, d: 1.6 })
    .type('Nom correspondant au verbe « crescere » (avec l’article) :', ['la crescita'],
      'crescere → la crescita.', { kc: NOM, d: 1.5 })
    .order('Après l’adoption de la loi, les protestations ont cessé.', 'Dopo l’approvazione della legge, le proteste sono cessate.',
      'approvare → l’approvazione : la subordonnée devient un groupe nominal.', { kc: NOM, distractors: ['approvare', 'approvato'], d: 1.6 })
    .tr('Il est arrivé en retard, ce qui a irrité le directeur.',
      ['È arrivato in ritardo, il che ha irritato il direttore.', 'È arrivato in ritardo, cosa che ha irritato il direttore.', 'È arrivato in ritardo, la qual cosa ha irritato il direttore.',
        'È arrivato in ritardo, il che ha infastidito il direttore.', 'È arrivato in ritardo, cosa che ha infastidito il direttore.',
        'È arrivato in ritardo e ciò ha irritato il direttore.', 'È arrivato in ritardo e questo ha irritato il direttore.'],
      'ce qui (reprise de phrase) = il che, cosa che.', { d: 1.7 })
    .tr('La hausse des prix inquiète les consommateurs.',
      ['L’aumento dei prezzi preoccupa i consumatori.', 'L’aumento dei prezzi inquieta i consumatori.', 'L’aumento dei prezzi allarma i consumatori.',
        'Il rialzo dei prezzi preoccupa i consumatori.', 'Il rialzo dei prezzi inquieta i consumatori.', 'Il rincaro dei prezzi preoccupa i consumatori.',
        'Il rincaro dei prezzi inquieta i consumatori.'],
      'la hausse = l’aumento, il rialzo, il rincaro.', { kc: NOM, d: 1.5 })
    .listen('La direttrice ha ricevuto due candidati: il primo aveva più esperienza, il secondo più entusiasmo. Alla fine ha scelto quest’ultimo.', 'Chi è stato scelto?',
      ['Il candidato più entusiasta', 'Il candidato più esperto', 'Nessuno dei due'], 0,
      'quest’ultimo = le dernier nommé (il secondo).', { d: 1.7 })
    .listen('Il rinvio delle elezioni ha provocato la reazione dell’opposizione, che ha chiesto le dimissioni del governo.', 'Che cosa ha chiesto l’opposizione?',
      ['Che il governo si dimettesse', 'Che le elezioni fossero rinviate', 'Un nuovo referendum'], 0,
      'le dimissioni del governo = la démission du gouvernement.', { kc: NOM, d: 1.6 })
    .dictation('La crescita dell’economia ha favorito la riduzione della disoccupazione.',
      'Deux nominalisations : la crescita, la riduzione.', { kc: NOM, d: 1.5 })
    .repeat('Ciò dimostra che avevamo ragione fin dall’inizio.',
      'ciò = cela (registre soutenu).', { d: 1.4 })
    .say('Ce dernier n’a pas voulu répondre.',
      ['Quest’ultimo non ha voluto rispondere', 'Quest’ultimo non volle rispondere', 'Quest’ultimo non ha voluto dare una risposta'],
      'ce dernier = quest’ultimo.', { d: 1.5 })
    .answer('Riassumi una notizia recente usando almeno una nominalizzazione (per esempio l’aumento, la chiusura, la decisione).',
      'La decisione del comune di chiudere il centro alle auto ha provocato molte proteste; ciò nonostante, l’amministrazione ha confermato la chiusura a partire da gennaio.',
      'Nominalisations (la decisione, la chiusura) et reprises (ciò).',
      {
        kc: [NOM, ANAPH],
        keywords: [['decisione', 'chiusura', 'aumento', 'riduzione', 'crescita', 'approvazione', 'calo', 'rinvio', 'apertura', 'costruzione', 'elezione', 'scoperta', 'vittoria', 'introduzione']],
        minWords: 18,
        d: 2.0,
      })
    .build(),
};
