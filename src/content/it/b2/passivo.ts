import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const VENIRE = 'it.b2.grammar.passive_venire';
const ANDARE = 'it.b2.grammar.passive_andare';
const SI = 'it.b2.grammar.si_passivante';

export const passivo1: Lesson = {
  id: 'it-b2-passivo-1',
  cefr: 'B2',
  unitId: 'it-b2-passivo',
  title: 'Le passif avec essere et venire',
  subtitle: 'Il museo viene visitato da migliaia di turisti',
  kcIds: [VENIRE],
  estMinutes: 8,
  explanation: [
    {
      title: 'Essere ou venire + participe passé',
      body: 'Au passif, venire peut remplacer essere aux temps simples (présent, imparfait, futur, passé simple, conditionnel présent). Il insiste sur l’action en train de se faire. Aux temps composés, seul essere est possible.',
      table: [
        ['présent', 'è scritto / viene scritto'],
        ['imparfait', 'era scritto / veniva scritto'],
        ['futur', 'sarà scritto / verrà scritto'],
        ['passé simple', 'fu scritto / venne scritto'],
        ['passato prossimo', 'è stato scritto (jamais « è venuto scritto »)'],
      ],
      examples: [
        { en: 'La lettera viene spedita oggi.', fr: 'La lettre est envoyée aujourd’hui.' },
        { en: 'Il ponte è stato costruito nel 1950.', fr: 'Le pont a été construit en 1950.' },
      ],
      tip: 'Le complément d’agent se construit avec da (+ article : dal, dalla, dai…) et jamais avec per : scritto da Calvino, visitato dai turisti.',
    },
    {
      title: 'Pourquoi venire ?',
      body: 'Avec essere, la phrase peut décrire un état ou une action : La porta è chiusa (elle est fermée, état). Avec venire, c’est forcément l’action : La porta viene chiusa alle otto (on la ferme à huit heures).',
      tip: 'Le participe s’accorde toujours avec le sujet : le finestre vengono chiuse, i documenti sono stati firmati.',
    },
  ],
  exercises: exercises('it-b2-passivo-1', 'B2', { kc: VENIRE, tense: 'passivo' })
    .mcq('Il museo ___ ogni giorno da migliaia di turisti.', ['viene visitato', 'è venuto visitato', 'visita'], 0,
      'Passif au présent : viene (ou è) visitato.', { d: 0.6 })
    .mcq('Che cosa è successo a molte pietre del Colosseo?',
      ['Sono state usate per altri edifici', 'Sono state restaurate da un’azienda privata', 'Sono state distrutte da Tito'], 0,
      '« Molte sue pietre vennero usate per costruire palazzi e chiese » : venne / vennero = passé simple passif avec venire.',
      {
        kc: [VENIRE, ANDARE],
        d: 0.9,
        passage:
          'Il Colosseo fu costruito nel I secolo dopo Cristo per volere dell’imperatore Vespasiano e venne inaugurato dal figlio Tito nell’anno 80. Nei secoli successivi l’anfiteatro fu danneggiato da diversi terremoti e molte sue pietre vennero usate per costruire palazzi e chiese. Oggi il monumento viene visitato da milioni di turisti ogni anno; di recente è stato restaurato grazie al contributo di un’azienda privata. I biglietti vanno prenotati con anticipo, soprattutto in estate.',
      })
    .cloze('I risultati ___ comunicati domani.', ['verranno', 'saranno'],
      'Futur passif : verranno ou saranno comunicati.', { hint: 'venire ou essere, futur', d: 0.7 })
    .cloze('Il romanzo è stato scritto ___ un giovane autore siciliano.', ['da'],
      'Complément d’agent : da (et non per).', { d: 0.5 })
    .type('Mets au passif avec venire : « Il postino consegna i pacchi. » → « I pacchi ___ dal postino. »', ['vengono consegnati'],
      'vengono + participe accordé avec i pacchi : consegnati.', { d: 0.8 })
    .type('Passif au passato prossimo : « Hanno arrestato due uomini. » → « Due uomini ___. »', ['sono stati arrestati'],
      'Temps composé → essere : sono stati arrestati.', { d: 0.9 })
    .order('Les fenêtres sont fermées chaque soir par le gardien.', 'Le finestre vengono chiuse ogni sera dal custode.',
      'vengono chiuse (action répétée) ; dal custode (da + il).', { distractors: ['venute', 'per'], d: 0.8 })
    .listen('Il concerto, che doveva tenersi in piazza, verrà spostato al teatro comunale a causa della pioggia.', 'Dove si terrà il concerto?',
      ['Al teatro comunale', 'In piazza', 'Non si terrà più'], 0,
      'verrà spostato al teatro comunale = sera déplacé au théâtre municipal.', { d: 0.8 })
    .listen('La nuova linea della metropolitana è stata inaugurata ieri dal sindaco.', 'Chi ha inaugurato la metropolitana?',
      ['Il sindaco', 'Il ministro', 'I cittadini'], 0,
      'dal sindaco : complément d’agent.', { d: 0.6 })
    .dictation('Ogni anno in città vengono piantati più di mille alberi.',
      'vengono piantati : accord avec alberi (masculin pluriel).', { d: 0.8 })
    .tr('Ce tableau a été peint par Caravage.',
      ['Questo quadro è stato dipinto da Caravaggio.', 'Questo dipinto è stato realizzato da Caravaggio.', 'Il quadro è stato dipinto da Caravaggio.',
        'Questo quadro fu dipinto da Caravaggio.', 'Questo quadro venne dipinto da Caravaggio.'],
      'è stato dipinto (dipingere → dipinto) ; par → da.', { d: 0.8 })
    .tr('Les billets sont vendus en ligne.',
      ['I biglietti vengono venduti online.', 'I biglietti sono venduti online.', 'I biglietti si vendono online.',
        'I biglietti vengono venduti su internet.', 'I biglietti sono venduti su internet.', 'I biglietti si vendono su internet.'],
      'vengono venduti insiste sur l’action ; si vendono (si passivant) est aussi très naturel.', { d: 0.7 })
    .repeat('Il colpevole non è mai stato trovato.',
      'Passif au passato prossimo : è stato trovato.', { d: 0.6 })
    .say('Le pont sera reconstruit l’année prochaine.',
      ['Il ponte verrà ricostruito l’anno prossimo', 'Il ponte sarà ricostruito l’anno prossimo', 'L’anno prossimo il ponte verrà ricostruito', 'L’anno prossimo il ponte sarà ricostruito'],
      'Futur passif : verrà ou sarà ricostruito.', { d: 0.8 })
    .answer('Parla di un monumento o di un edificio famoso della tua città: quando è stato costruito e da chi?',
      'La cattedrale della mia città è stata costruita nel Duecento e ancora oggi viene visitata da molti turisti ogni anno.',
      'Passif : è stato costruito, viene visitato, fu progettato da…',
      { keywords: [['stato', 'stata', 'stati', 'state', 'viene', 'vengono', 'venne', 'fu']], minWords: 12, d: 1.0 })
    .build(),
};

export const passivo2: Lesson = {
  id: 'it-b2-passivo-2',
  cefr: 'B2',
  unitId: 'it-b2-passivo',
  title: 'Andare + participe et si passivant',
  subtitle: 'Il modulo va compilato, si vendono case',
  kcIds: [ANDARE, SI],
  estMinutes: 9,
  explanation: [
    {
      title: 'Andare + participe : l’obligation',
      body: 'Andare + participe passé = doit être + participe. Il ne s’emploie qu’aux temps simples.',
      examples: [
        { en: 'Il modulo va compilato in stampatello.', fr: 'Le formulaire doit être rempli en majuscules.' },
        { en: 'Questi documenti andavano consegnati ieri.', fr: 'Ces documents devaient être remis hier.' },
      ],
      tip: 'Exception : avec perdere, smarrire, distruggere, sprecare, andare signifie une perte et existe aux temps composés : molti dati sono andati persi (beaucoup de données ont été perdues).',
    },
    {
      title: 'Le si passivant',
      body: 'si + verbe à la 3e personne : le verbe s’accorde avec ce qui suit (le sujet grammatical). Aux temps composés, auxiliaire essere et participe accordé.',
      table: [
        ['singulier', 'In Italia si mangia molta pasta.'],
        ['pluriel', 'In Italia si mangiano molti dolci.'],
        ['temps composé', 'Si sono vendute mille copie.'],
      ],
      tip: 'Le français dit « on vend des maisons » avec un verbe au singulier ; l’italien accorde : si vendono case (et non « si vende case »).',
    },
  ],
  exercises: exercises('it-b2-passivo-2', 'B2', { kc: ANDARE, tense: 'passivo' })
    .mcq('Questo farmaco ___ preso a stomaco pieno.', ['va', 'viene da', 'deve'], 0,
      'Obligation : va preso = doit être pris.', { d: 0.8 })
    .mcq('In questo negozio ___ anche libri usati.', ['si vendono', 'si vende', 'vendono si'], 0,
      'Si passivant : le verbe s’accorde avec libri → si vendono.', { kc: SI, d: 0.6 })
    .cloze('I compiti ___ consegnati entro venerdì.', ['vanno'],
      'Obligation au pluriel : vanno consegnati.', { d: 0.8 })
    .cloze('Durante il trasloco ___ perse due scatole di libri.', ['sono andate'],
      'Perte : andare perso, au passato prossimo, accordé avec scatole → sono andate perse.', { hint: 'andare, passato prossimo', d: 1.0 })
    .type('« La ricevuta deve essere conservata. » → « La ricevuta ___ conservata. » Écris le verbe.', ['va'],
      'deve essere conservata = va conservata.', { d: 0.7 })
    .type('Si passivant au passato prossimo : « Hanno venduto molte case. » → « ___ molte case. »', ['Si sono vendute'],
      'Auxiliaire essere, participe accordé avec case : si sono vendute.', { kc: SI, d: 1.1 })
    .order('Ce formulaire doit être signé par les deux parents.', 'Questo modulo va firmato da entrambi i genitori.',
      'va firmato = doit être signé ; da entrambi i genitori.', { distractors: ['deve', 'per'], d: 0.9 })
    .listen('Attenzione: il biglietto va convalidato prima di salire sul treno, altrimenti si rischia una multa.', 'Che cosa bisogna fare?',
      ['Convalidare il biglietto prima di salire', 'Comprare il biglietto sul treno', 'Pagare una multa'], 0,
      'va convalidato = doit être composté.', { d: 0.8 })
    .listen('Negli ultimi dieci anni in Italia si sono costruite poche case nuove e si sono ristrutturati molti edifici antichi.', 'Che cosa è successo negli ultimi dieci anni?',
      ['Si sono ristrutturati molti edifici antichi', 'Si sono costruite molte case nuove', 'Sono stati demoliti molti edifici antichi'], 0,
      'si sono ristrutturati molti edifici = beaucoup de bâtiments ont été rénovés.', { kc: SI, d: 1.0 })
    .dictation('Queste piante vanno annaffiate due volte alla settimana.',
      'vanno annaffiate : accord avec piante (féminin pluriel).', { d: 0.8 })
    .tr('Cette question doit être traitée avec prudence.',
      ['Questa questione va trattata con prudenza.', 'Questa questione va affrontata con prudenza.', 'Questa questione deve essere trattata con prudenza.',
        'Questa questione deve essere affrontata con prudenza.', 'Questa questione va trattata con cautela.', 'Questo problema va trattato con prudenza.', 'Questo problema va affrontato con prudenza.'],
      'doit être traitée = va trattata.', { d: 0.9 })
    .tr('On parle italien et allemand dans cette région.',
      ['In questa regione si parlano l’italiano e il tedesco.', 'In questa regione si parla italiano e tedesco.', 'In questa regione si parlano italiano e tedesco.',
        'In questa regione si parla l’italiano e il tedesco.', 'Si parlano l’italiano e il tedesco in questa regione.', 'Si parla italiano e tedesco in questa regione.'],
      'Avec deux langues, si parlano (accord) ; si parla italiano e tedesco est aussi courant.', { kc: SI, d: 0.9 })
    .repeat('Il documento va firmato e restituito entro lunedì.',
      'va firmato e restituito : obligation.', { d: 0.8 })
    .say('Ici, on boit beaucoup de vin.',
      ['Qui si beve molto vino', 'Qui si beve tanto vino', 'Qua si beve molto vino', 'Qua si beve tanto vino', 'Da queste parti si beve molto vino'],
      'si beve + nom singulier.', { kc: SI, d: 0.6 })
    .answer('Nel tuo paese, che cosa va fatto assolutamente quando si è invitati a cena da qualcuno?',
      'Quando si è invitati a cena, va portato un piccolo regalo, per esempio una bottiglia di vino, e si arriva con qualche minuto di ritardo.',
      'va / vanno + participe (obligation), si + verbe.',
      { kc: [ANDARE, SI], keywords: [['va', 'vanno', 'si']], minWords: 12, d: 1.1 })
    .build(),
};
