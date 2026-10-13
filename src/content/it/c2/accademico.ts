import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const STRUCT = 'it.c2.writing.academic_structure';
const IMPA = 'it.c2.grammar.academic_impersonal';
const ARG = 'it.c2.writing.academic_argument';
const ALEX = 'it.c2.vocabulary.academic_lexicon';

export const accademico1: Lesson = {
  id: 'it-c2-accademico-1',
  cefr: 'C2',
  unitId: 'it-c2-accademico',
  title: 'Structurer un texte académique',
  subtitle: 'Il presente lavoro si propone di, si ritiene che, va sottolineato',
  kcIds: [STRUCT, IMPA],
  estMinutes: 12,
  explanation: [
    {
      title: 'Annoncer et articuler',
      table: [
        ['Il presente lavoro si propone di…', 'Ce travail se propose de…'],
        ['In primo luogo… in secondo luogo… infine', 'Premièrement… deuxièmement… enfin'],
        ['Come si è visto nel paragrafo precedente…', 'Comme on l’a vu dans la section précédente…'],
        ['Alla luce di quanto esposto…', 'À la lumière de ce qui précède…'],
        ['Ne consegue che…', 'Il s’ensuit que…'],
        ['In sintesi / In conclusione', 'En résumé / En conclusion'],
      ],
      tip: '« Il presente lavoro » (le présent travail) est la formule consacrée. « Dans un premier temps » se rend plus naturellement par « In primo luogo » ou « Anzitutto » que par un calque.',
    },
    {
      title: 'Effacer le « je »',
      table: [
        ['Si ritiene che + subj.', 'On estime que'],
        ['Va sottolineato che…', 'Il faut souligner que'],
        ['È opportuno / Occorre + infinitif', 'Il convient de'],
        ['Si procederà ora a…', 'On procédera maintenant à'],
        ['I dati sono stati raccolti…', 'Les données ont été recueillies'],
        ['Abbiamo analizzato… (noi d’auteur)', 'Nous avons analysé…'],
      ],
      tip: 'On alterne si impersonnel ou passivant, passif et « noi » d’auteur. Andare + participe exprime l’obligation : « va rilevato » = il faut relever.',
    },
  ],
  exercises: exercises('it-c2-accademico-1', 'C2', { kc: STRUCT })
    .mcq('___ di quanto esposto finora, l’ipotesi iniziale appare confermata.', ['Alla luce', 'Alla vista', 'Al lume', 'Sulla luce'], 0,
      'alla luce di = à la lumière de.', { d: 2.3 })
    .mcq('Quale frase è più adatta a una tesi di laurea?',
      ['Si ritiene che il campione sia rappresentativo.', 'Secondo me il campione va bene.', 'Io penso che il campione è giusto.', 'Il campione, diciamo, funziona.'], 0,
      'Tournure impersonnelle (si ritiene che) + subjonctif : registre académique.', { kc: IMPA, d: 2.3 })
    .cloze('Va ___ che i dati raccolti si riferiscono a un solo anno.', ['sottolineato', 'precisato', 'rilevato', 'notato', 'ricordato', 'osservato'],
      'andare + participe = obligation : va sottolineato (il faut souligner).', { kc: IMPA, hint: 'il faut souligner', d: 2.4 })
    .type('« Il s’ensuit que… » → « Ne ___ che… »', ['consegue', 'deriva', 'discende'],
      'ne consegue che = il s’ensuit que.', { d: 2.4 })
    .type('Rends impersonnel : « Noi pensiamo che il modello sia valido. » → « Si ___ che il modello sia valido. »', ['ritiene', 'pensa', 'crede', 'reputa'],
      'Si ritiene che + subjonctif : formule académique impersonnelle.', { kc: IMPA, d: 2.3 })
    .order('Dans un premier temps, on procédera à l’analyse des données.', 'In primo luogo si procederà all’analisi dei dati.',
      'In primo luogo + si impersonnel au futur : annonce du plan.', { kc: [STRUCT, IMPA], distractors: ['procederemo', 'prima'], d: 2.4 })
    .tr('Il convient de rappeler que l’échantillon est réduit.',
      ['È opportuno ricordare che il campione è ridotto.', 'Occorre ricordare che il campione è ridotto.', 'Conviene ricordare che il campione è ridotto.', 'È opportuno ricordare che il campione è limitato.',
        'Occorre ricordare che il campione è limitato.', 'Va ricordato che il campione è ridotto.', 'Va ricordato che il campione è limitato.', 'È bene ricordare che il campione è ridotto.',
        'È opportuno ricordare che il campione è esiguo.', 'Va ricordato che il campione è esiguo.', 'Occorre ricordare che il campione è esiguo.'],
      'il convient de = è opportuno, occorre ; l’échantillon = il campione.', { kc: IMPA, d: 2.5 })
    .tr('En conclusion, les résultats confirment notre hypothèse.',
      ['In conclusione, i risultati confermano la nostra ipotesi.', 'Per concludere, i risultati confermano la nostra ipotesi.', 'In sintesi, i risultati confermano la nostra ipotesi.',
        'Concludendo, i risultati confermano la nostra ipotesi.', 'In conclusione, i risultati confermano l’ipotesi.', 'In conclusione, i risultati avvalorano la nostra ipotesi.'],
      'In conclusione / Per concludere ; « noi » d’auteur dans « la nostra ipotesi ».', { d: 2.3 })
    .mcq('Che cosa emerge dallo studio?',
      ['Su carta si capiscono un po’ meglio i testi argomentativi', 'Lo schermo migliora la comprensione di tutti i testi', 'Non c’è nessuna differenza per alcun tipo di testo', 'Gli studenti preferiscono i testi narrativi'], 0,
      '« la comprensione dei testi argomentativi risulta lievemente migliore su carta ».',
      {
        kc: [STRUCT, IMPA], d: 2.7,
        passage: 'Abstract. Il presente contributo si propone di indagare il rapporto tra lettura su carta e lettura su schermo in un campione di 240 studenti universitari. In primo luogo si illustrano le principali posizioni emerse nel dibattito; si procede quindi all’analisi dei dati raccolti mediante un questionario e una prova di comprensione. I risultati suggeriscono che la comprensione dei testi argomentativi risulta lievemente migliore su carta, mentre non emergono differenze significative per i testi narrativi. Alla luce di tali esiti, si ritiene opportuno approfondire il ruolo della lunghezza del testo.',
      })
    .listen('Nel secondo capitolo si esamineranno i limiti del modello; nel terzo, infine, si proporranno alcune possibili soluzioni.', 'Di che cosa tratterà il terzo capitolo?',
      ['Di possibili soluzioni', 'Dei limiti del modello', 'Della bibliografia', 'Della storia del modello'], 0,
      'Annonce du plan avec si passivant au futur : si esamineranno, si proporranno.', { d: 2.3 })
    .listen('Occorre tuttavia precisare che i dati sono stati raccolti prima della riforma e potrebbero non riflettere la situazione attuale.', 'Che cosa precisa l’autore?',
      ['Che i dati potrebbero non essere aggiornati', 'Che la riforma è fallita', 'Che i dati sono stati falsificati', 'Che la situazione attuale è migliore'], 0,
      'Occorre precisare : réserve méthodologique ; « potrebbero non riflettere » = prudence.', { kc: IMPA, d: 2.5 })
    .dictation('Alla luce dei risultati ottenuti, ne consegue che il modello va rivisto.',
      'Alla luce di, ne consegue che, va rivisto (obligation).', { kc: [STRUCT, IMPA], d: 2.5 })
    .repeat('Si procederà ora all’esame dei casi più significativi.',
      'Si passivant au futur : annonce d’une étape.', { kc: IMPA, d: 2.3 })
    .say('Il s’ensuit que l’hypothèse initiale doit être revue.',
      ['Ne consegue che l’ipotesi iniziale va rivista', 'Ne consegue che l’ipotesi iniziale deve essere rivista', 'Ne deriva che l’ipotesi iniziale va rivista',
        'Ne deriva che l’ipotesi iniziale deve essere rivista', 'Ne consegue che l’ipotesi di partenza va rivista', 'Ne consegue che l’ipotesi iniziale dev’essere rivista'],
      'ne consegue che ; « va rivista » (andare + participe accordé) = doit être revue.', { d: 2.5 })
    .answer('Presenta in due o tre frasi, in stile accademico, l’obiettivo e la struttura di una ricerca immaginaria.',
      'Il presente lavoro si propone di analizzare le abitudini alimentari degli studenti fuori sede. In primo luogo si presenteranno i dati raccolti; in secondo luogo si discuteranno i risultati alla luce della letteratura.',
      'Formule d’objectif (si propone di), plan annoncé (in primo luogo, in secondo luogo), si impersonnel.',
      { kc: [STRUCT, IMPA], d: 2.7, minWords: 25, keywords: [['propone', 'prefigge', 'obiettivo', 'scopo'], ['luogo', 'infine', 'quindi', 'successivamente']] })
    .build(),
};

export const accademico2: Lesson = {
  id: 'it-c2-accademico-2',
  cefr: 'C2',
  unitId: 'it-c2-accademico',
  title: 'Argumenter et citer',
  subtitle: 'Pur riconoscendo, a differenza di, avvalorare, confutare',
  kcIds: [ARG, ALEX],
  estMinutes: 12,
  explanation: [
    {
      title: 'Citer, concéder, contester',
      table: [
        ['Secondo Ferraresi (2019)… / Come osserva Ferraresi…', 'Selon… / Comme l’observe…'],
        ['Pur riconoscendo che…, …', 'Tout en reconnaissant que…'],
        ['Non si può tuttavia non rilevare che…', 'On ne peut cependant manquer de relever que…'],
        ['A differenza di quanto sostenuto da…', 'Contrairement à ce que soutient…'],
        ['Ciò premesso, …', 'Cela étant posé…'],
        ['Si tratta di una tesi difficilmente sostenibile.', 'C’est une thèse difficilement défendable.'],
      ],
      tip: '« Pur » + gérondif exprime la concession (pur riconoscendo = tout en reconnaissant). La double négation « non si può non rilevare » insiste avec courtoisie.',
    },
    {
      title: 'Le lexique de la recherche',
      table: [
        ['avvalorare / corroborare', 'étayer, corroborer'],
        ['confutare', 'réfuter'],
        ['evidenziare / mettere in luce', 'mettre en évidence'],
        ['rilevare', 'relever, constater'],
        ['esiguo', 'faible, réduit (quantité)'],
        ['il campione', 'l’échantillon'],
        ['la letteratura (scientifica)', 'les travaux existants sur le sujet'],
        ['il quadro teorico', 'le cadre théorique'],
      ],
      tip: 'Paronymes : « rilevare » = relever, constater ; « rivelare » = révéler. « Esiguo » qualifie une quantité (un campione esiguo), jamais une personne.',
    },
  ],
  exercises: exercises('it-c2-accademico-2', 'C2', { kc: ARG })
    .mcq('___ riconoscendo il valore dello studio, se ne possono evidenziare alcuni limiti.', ['Pur', 'Pure se', 'Benché', 'Malgrado'], 0,
      'pur + gérondif = tout en + participe présent (concession).', { d: 2.4 })
    .mcq('I nuovi dati ___ l’ipotesi: la rendono più solida.', ['avvalorano', 'confutano', 'smentiscono', 'ignorano'], 0,
      'avvalorare = étayer, rendre plus solide.', { kc: ALEX, d: 2.4 })
    .cloze('Il campione, composto da soli dodici partecipanti, è troppo ___ per trarre conclusioni generali.', ['esiguo', 'ridotto', 'limitato', 'piccolo'],
      'esiguo : faible en nombre, registre soutenu.', { kc: ALEX, hint: 'faible (en nombre)', d: 2.4 })
    .type('Complète : « Non si può tuttavia non ___ che lo studio presenta alcuni limiti. »', ['rilevare', 'notare', 'osservare', 'riconoscere', 'sottolineare', 'constatare'],
      'Double négation d’insistance : non si può non rilevare.', { d: 2.5 })
    .type('Quel verbe signifie « réfuter » ? (infinitif)', ['confutare'],
      'confutare una tesi = réfuter une thèse.', { kc: ALEX, d: 2.3 })
    .order('C’est une thèse difficilement défendable.', 'Si tratta di una tesi difficilmente sostenibile.',
      'si tratta di + nom ; sostenibile = défendable (une thèse).', { distractors: ['difficile', 'sostenuta'], d: 2.4 })
    .tr('Tout en reconnaissant l’intérêt de l’étude, on peut en souligner les limites.',
      ['Pur riconoscendo l’interesse dello studio, se ne possono sottolineare i limiti.', 'Pur riconoscendo l’interesse dello studio, se ne possono evidenziare i limiti.',
        'Pur riconoscendo l’interesse dello studio, è possibile sottolinearne i limiti.', 'Pur riconoscendo l’interesse dello studio, è possibile evidenziarne i limiti.',
        'Pur riconoscendo il valore dello studio, se ne possono sottolineare i limiti.', 'Pur riconoscendo il valore dello studio, se ne possono evidenziare i limiti.',
        'Pur riconoscendo l’interesse dello studio, possiamo sottolinearne i limiti.', 'Pur riconoscendo l’interesse dello studio, possiamo evidenziarne i limiti.',
        'Pur riconoscendo l’interesse dello studio, si possono sottolinearne i limiti.', 'Pur riconoscendo l’interesse dello studio, si possono evidenziarne i limiti.'],
      'pur + gérondif ; « en » = ne (se ne possono sottolineare i limiti).', { d: 2.7 })
    .tr('Les résultats mettent en évidence une faible corrélation.',
      ['I risultati evidenziano una debole correlazione.', 'I risultati evidenziano una correlazione debole.', 'I risultati mettono in luce una debole correlazione.',
        'I risultati mettono in luce una correlazione debole.', 'I risultati mettono in evidenza una debole correlazione.', 'I risultati mettono in evidenza una correlazione debole.',
        'I risultati evidenziano una scarsa correlazione.', 'I risultati evidenziano una correlazione scarsa.'],
      'mettre en évidence = evidenziare, mettere in luce, mettere in evidenza.', { kc: ALEX, d: 2.4 })
    .mcq('Nella frase « L’indagine ha permesso di rilevare un aumento dei casi », « rilevare » significa…',
      ['constater, mesurer', 'révéler un secret', 'remplacer quelqu’un', 'soulever un objet'], 0,
      'rilevare = constater, relever (un dato) ; ne pas confondre avec rivelare (révéler).', { kc: ALEX, d: 2.5 })
    .listen('A differenza di quanto sostenuto da Ferraresi, i dati raccolti in tre regioni non mostrano alcun calo della lettura tra i giovani.', 'Qual è la posizione di chi parla rispetto a Ferraresi?',
      ['Non è d’accordo: i dati smentiscono la sua tesi', 'È pienamente d’accordo', 'Non conosce la sua tesi', 'Pensa che la lettura sia calata ovunque'], 0,
      'a differenza di quanto sostenuto da = contrairement à ce que soutient.', { d: 2.5 })
    .listen('Il quadro teorico di riferimento è illustrato nel primo capitolo, mentre la letteratura più recente è discussa nel secondo.', 'Che cosa si trova nel secondo capitolo?',
      ['La discussione degli studi più recenti', 'Il quadro teorico', 'I risultati finali', 'Le interviste'], 0,
      'la letteratura = les travaux publiés sur le sujet.', { kc: ALEX, d: 2.4 })
    .dictation('Ciò premesso, si tratta di una tesi che richiede ulteriori verifiche.',
      'Ciò premesso : cela étant posé.', { d: 2.5 })
    .repeat('I dati raccolti corroborano solo in parte l’ipotesi di partenza.',
      'corroborare = confirmer, étayer.', { kc: ALEX, d: 2.4 })
    .say('Comme l’observe Ferraresi, le phénomène n’est pas nouveau.',
      ['Come osserva Ferraresi, il fenomeno non è nuovo', 'Come nota Ferraresi, il fenomeno non è nuovo', 'Come rileva Ferraresi, il fenomeno non è nuovo',
        'Come osserva Ferraresi, il fenomeno non è recente', 'Come sottolinea Ferraresi, il fenomeno non è nuovo', 'Come fa notare Ferraresi, il fenomeno non è nuovo'],
      'Citer : come osserva, come rileva, come nota + nom de l’auteur.', { d: 2.4 })
    .answer('Esprimi in modo accademico il tuo disaccordo con questa tesi: « Gli smartphone rendono gli studenti meno intelligenti ».',
      'Pur riconoscendo che l’uso eccessivo degli smartphone può ridurre la concentrazione, si tratta di una tesi difficilmente sostenibile: non esistono dati che dimostrino un calo dell’intelligenza, e alcuni studi evidenziano anzi effetti positivi.',
      'Concession (pur riconoscendo), réfutation (tesi difficilmente sostenibile), appui sur les données.',
      { kc: [ARG, ALEX], d: 2.8, minWords: 25, keywords: [['pur', 'tuttavia', 'sebbene', 'benché', 'nondimeno'], ['tesi', 'dati', 'studi', 'ipotesi']] })
    .build(),
};
