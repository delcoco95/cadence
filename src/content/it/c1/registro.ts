import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const LEI = 'it.c1.function.formal_address';
const LETTER = 'it.c1.writing.formal_correspondence';
const BUREAU = 'it.c1.vocabulary.bureaucratic_language';
const IMPERS = 'it.c1.grammar.formal_impersonal';

export const registro1: Lesson = {
  id: 'it-c1-registro-1',
  cefr: 'C1',
  unitId: 'it-c1-registro',
  title: 'Le Lei et la lettre formelle',
  subtitle: 'La ringrazio, Le scrivo, distinti saluti',
  kcIds: [LEI, LETTER],
  estMinutes: 12,
  explanation: [
    {
      title: 'Vouvoyer avec Lei',
      body: 'Le vouvoiement singulier se fait à la 3e personne du féminin : Lei (sujet), La (COD), Le (COI), Suo (possessif). À l’écrit formel, on met souvent une majuscule.',
      table: [
        ['Je vous remercie.', 'La ringrazio.'],
        ['Je vous écris…', 'Le scrivo…'],
        ['Asseyez-vous.', 'Si accomodi. / Si sieda.'],
        ['Dites-moi.', 'Mi dica.'],
        ['Cela vous dérangerait-il de… ?', 'Le dispiacerebbe…?'],
        ['Puis-je vous être utile ?', 'Posso esserLe utile?'],
      ],
      tip: 'Le « vous » de politesse adressé à une seule personne se rend par Lei, jamais par voi (qui est le pluriel). Les adjectifs s’accordent avec le sexe réel : È stanco, signor Rossi?',
    },
    {
      title: 'Les formules de la lettre formelle',
      table: [
        ['Gentile Dottoressa Bianchi, / Egregio Direttore,', 'Madame, / Monsieur le Directeur,'],
        ['Spettabile ditta (Spett.le)', 'à une entreprise'],
        ['Con la presente Le comunico che…', 'Par la présente, je vous informe que…'],
        ['In riferimento a / In merito a…', 'Suite à / Au sujet de…'],
        ['In allegato Le invio…', 'Veuillez trouver ci-joint…'],
        ['Resto in attesa di un Suo cortese riscontro.', 'Dans l’attente de votre réponse…'],
        ['Distinti saluti / Cordiali saluti', 'Veuillez agréer… (formule finale)'],
      ],
      tip: '« Cher Monsieur » ne se traduit pas par « Caro Signore » (trop familier ou ironique) : écris Gentile Signore ou Egregio Signor Rossi. Les longues formules finales à la française se réduisent à Distinti saluti.',
    },
  ],
  exercises: exercises('it-c1-registro-1', 'C1', { kc: LEI })
    .mcq('Signora, ___ accomodi pure, il dottore arriva subito.', ['si', 'ti', 'vi'], 0,
      'Lei de politesse → impératif à la 3e personne : si accomodi.', { d: 1.4 })
    .mcq('Quale formula è adatta per iniziare una lettera a un’azienda?', ['Spettabile ditta', 'Caro amico', 'Ciao a tutti'], 0,
      'Spettabile (Spett.le) s’adresse à une entreprise ou une institution.', { kc: LETTER, d: 1.4 })
    .cloze('Dottor Ferri, ___ ringrazio per la Sua disponibilità.', ['La'],
      'ringraziare + COD → La (Lei).', { d: 1.5 })
    .cloze('Resto in attesa di un Suo cortese ___.', ['riscontro'],
      'Formule figée : in attesa di un Suo cortese riscontro (réponse).', { kc: LETTER, hint: 'réponse (formel)', d: 1.8 })
    .type('« Excusez-moi, pourriez-vous me dire où se trouve le bureau ? » → « Mi scusi, ___ dirmi dov’è l’ufficio? » Écris le verbe.', ['potrebbe', 'saprebbe'],
      'Lei + conditionnel de politesse : potrebbe (ou saprebbe).', { d: 1.5 })
    .type('« Je vous envoie ci-joint mon CV. » → « ___ Le invio il mio curriculum. » (2 mots)', ['In allegato'],
      'ci-joint = in allegato.', { kc: LETTER, d: 1.6 })
    .order('Je vous écris au sujet de votre annonce.', 'Le scrivo in merito al Suo annuncio.',
      'scrivere a qualcuno → Le scrivo ; in merito a = au sujet de.', { kc: LETTER, distractors: ['Ti', 'Vi'], d: 1.6 })
    .tr('Monsieur, voulez-vous un café ?',
      ['Signore, vuole un caffè?', 'Signore, desidera un caffè?', 'Signore, gradisce un caffè?', 'Vuole un caffè, signore?', 'Desidera un caffè, signore?',
        'Gradisce un caffè, signore?', 'Signore, prende un caffè?', 'Prende un caffè, signore?'],
      'Lei → verbe à la 3e personne : vuole, desidera, gradisce.', { d: 1.4 })
    .tr('Je vous remercie de votre réponse rapide.',
      ['La ringrazio per la Sua rapida risposta.', 'La ringrazio per la rapida risposta.', 'La ringrazio della Sua rapida risposta.', 'La ringrazio della rapida risposta.',
        'La ringrazio per la Sua risposta rapida.', 'La ringrazio per la Sua tempestiva risposta.', 'La ringrazio per la tempestiva risposta.',
        'Vi ringrazio per la vostra rapida risposta.', 'Vi ringrazio per la rapida risposta.'],
      'La ringrazio per (ou di) la Sua risposta ; Vi si l’on s’adresse à plusieurs personnes.', { kc: [LEI, LETTER], d: 1.6 })
    .listen('Buongiorno, signor Esposito. Si sieda pure. Mi dica, in che cosa posso esserLe utile?', 'Che tipo di situazione è?',
      ['Un incontro formale in un ufficio', 'Una conversazione tra vecchi amici', 'Una telefonata a un familiare'], 0,
      'Si sieda, mi dica, esserLe utile : Lei de politesse.', { d: 1.4 })
    .listen('Con la presente Le comunichiamo che la Sua richiesta di rimborso è stata accolta e che la somma Le verrà accreditata entro trenta giorni.', 'Che cosa annuncia il messaggio?',
      ['Il rimborso è stato accettato e arriverà entro un mese', 'La richiesta è stata respinta', 'Bisogna inviare altri documenti'], 0,
      'accolta = acceptée ; accreditata = versée sur le compte.', { kc: LETTER, d: 1.7 })
    .dictation('Le saremmo grati se volesse confermare la Sua partecipazione entro venerdì.',
      'Formule de politesse : Le saremmo grati se volesse… (nous vous serions reconnaissants de bien vouloir…).', { kc: LETTER, d: 1.9 })
    .repeat('Abbia pazienza ancora un momento, La richiamo subito.',
      'Impératif de politesse irrégulier : abbia (avere) ; La richiamo (COD).', { d: 1.5 })
    .say('Madame, je vous présente mon collègue.',
      ['Signora, Le presento il mio collega', 'Signora, Le presento un mio collega', 'Le presento il mio collega, signora', 'Le presento un mio collega, signora'],
      'presentare qualcuno a qualcuno → Le presento (COI).', { d: 1.4 })
    .answer('Come inizieresti un’email formale a una professoressa per chiedere informazioni su un master?',
      'Gentile Professoressa Martini, Le scrivo per avere informazioni sul master in traduzione: vorrei sapere quali sono i requisiti di ammissione e la scadenza delle iscrizioni. Cordiali saluti.',
      'Formule d’appel (Gentile), Lei de politesse (Le scrivo), formule finale (Cordiali saluti).',
      { kc: [LETTER, LEI], keywords: [['gentile', 'egregio', 'egregia', 'spettabile'], ['scrivo', 'saluti', 'cordialmente']], minWords: 20, d: 1.9 })
    .build(),
};

export const registro2: Lesson = {
  id: 'it-c1-registro-2',
  cefr: 'C1',
  unitId: 'it-c1-registro',
  title: 'La langue administrative',
  subtitle: 'Compilare, inoltrare, entro e non oltre, si prega di',
  kcIds: [BUREAU, IMPERS],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le lexique des démarches',
      table: [
        ['compilare un modulo', 'remplir un formulaire'],
        ['presentare / inoltrare una domanda', 'déposer / transmettre une demande'],
        ['allegare', 'joindre'],
        ['pervenire', 'parvenir'],
        ['entro e non oltre il…', 'au plus tard le…'],
        ['recarsi presso…', 'se rendre à…'],
        ['munirsi di', 'se munir de'],
        ['provvedere a', 'procéder à, se charger de'],
        ['lo sportello / la pratica / il richiedente', 'le guichet / le dossier / le demandeur'],
      ],
      tip: 'Faux amis : il modulo = le formulaire (pas le module) ; la pratica = le dossier administratif ; la domanda = la demande ou la candidature. L’ufficio anagrafe correspond au service de l’état civil.',
    },
    {
      title: 'Les tournures impersonnelles',
      table: [
        ['Si prega di non fumare.', 'Prière de ne pas fumer.'],
        ['Si informa che…', 'Nous informons que… / Avis :'],
        ['È vietato / È fatto divieto di…', 'Il est interdit de…'],
        ['I candidati sono pregati di…', 'Les candidats sont priés de…'],
        ['Il modulo va consegnato…', 'Le formulaire doit être remis…'],
        ['Visto il regolamento, considerato che…', 'Vu le règlement, considérant que…'],
      ],
      tip: 'L’administration italienne aime le participe : debitamente compilato (dûment rempli), pervenuta la domanda (une fois la demande reçue). « Prière de » se rend par si prega di + infinitif, sans article.',
    },
  ],
  exercises: exercises('it-c1-registro-2', 'C1', { kc: BUREAU })
    .mcq('Le domande devono pervenire ___ il 30 aprile.', ['entro e non oltre', 'fino a che', 'dopo che'], 0,
      'entro e non oltre = au plus tard (date limite impérative).', { d: 1.6 })
    .mcq('Come si possono presentare le pratiche dal 3 al 7 giugno?', ['Solo online', 'Allo sportello, su appuntamento', 'Per posta raccomandata'], 0,
      '« le pratiche potranno essere inoltrate esclusivamente per via telematica ».',
      {
        kc: [BUREAU, IMPERS],
        d: 1.6,
        passage:
          'AVVISO. Si comunica che, a causa di lavori di manutenzione, l’ufficio tributi resterà chiuso al pubblico dal 3 al 7 giugno. Durante tale periodo le pratiche potranno essere inoltrate esclusivamente per via telematica. Le domande pervenute oltre il termine del 10 giugno non verranno prese in considerazione. Per ulteriori informazioni, gli utenti sono pregati di rivolgersi al numero verde.',
      })
    .cloze('___ di non fumare nei locali dell’edificio.', ['Si prega'],
      'Prière de = si prega di + infinitif.', { kc: IMPERS, hint: 'Prière', d: 1.5 })
    .cloze('Gli interessati sono tenuti a ___ di un documento d’identità valido.', ['munirsi'],
      'munirsi di = se munir de.', { hint: 'se munir', d: 1.9 })
    .type('« Il est interdit de stationner devant l’entrée. » → « È ___ parcheggiare davanti all’ingresso. »', ['vietato', 'proibito', 'fatto divieto di'],
      'È vietato / proibito + infinitif, ou è fatto divieto di (très formel).', { kc: IMPERS, d: 1.5 })
    .type('Quel mot désigne le guichet d’un bureau administratif ? (avec l’article)', ['lo sportello'],
      'lo sportello : le guichet (banque, poste, administration).', { d: 1.5 })
    .order('Les candidats sont priés de se présenter munis d’une pièce d’identité.', 'I candidati sono pregati di presentarsi muniti di un documento d’identità.',
      'essere pregati di + infinitif ; muniti di, accordé avec i candidati.', { kc: IMPERS, distractors: ['pregando', 'munendo'], d: 1.8 })
    .tr('Prière de joindre une copie du passeport.',
      ['Si prega di allegare una copia del passaporto.', 'Si prega di allegare copia del passaporto.', 'Si prega di accludere una copia del passaporto.',
        'Si prega di allegare una fotocopia del passaporto.', 'Si chiede di allegare una copia del passaporto.', 'Allegare una copia del passaporto.'],
      'si prega di + infinitif ; joindre = allegare.', { kc: IMPERS, d: 1.6 })
    .tr('Le dossier a été transmis au service compétent.',
      ['La pratica è stata inoltrata all’ufficio competente.', 'La pratica è stata trasmessa all’ufficio competente.', 'La pratica è stata inviata all’ufficio competente.',
        'La pratica è stata inoltrata al servizio competente.', 'La pratica è stata trasmessa al servizio competente.',
        'Il fascicolo è stato trasmesso all’ufficio competente.', 'Il fascicolo è stato inoltrato all’ufficio competente.'],
      'le dossier (administratif) = la pratica ; transmettre = inoltrare, trasmettere.', { d: 1.7 })
    .listen('Si informano i signori utenti che a partire dal primo marzo gli sportelli resteranno chiusi il sabato mattina.', 'Che cosa cambierà dal primo marzo?',
      ['Gli sportelli non apriranno il sabato mattina', 'Gli sportelli apriranno anche la domenica', 'Bisognerà prenotare un appuntamento'], 0,
      'Si informano… che : formule d’avis officiel.', { kc: IMPERS, d: 1.5 })
    .listen('Per il rinnovo della carta d’identità, il richiedente dovrà recarsi presso l’ufficio anagrafe munito di due fototessere e della vecchia carta.', 'Che cosa bisogna portare?',
      ['Due fototessere e la vecchia carta d’identità', 'Solo il passaporto', 'Un modulo compilato online e una marca da bollo'], 0,
      'munito di due fototessere e della vecchia carta.', { d: 1.7 })
    .dictation('Il modulo, debitamente compilato e firmato, andrà consegnato allo sportello.',
      'debitamente compilato = dûment rempli ; andare + participe = obligation.', { d: 1.8 })
    .repeat('L’ufficio provvederà a comunicare l’esito della domanda.',
      'provvedere a + infinitif : procéder à ; l’esito = le résultat.', { d: 1.6 })
    .say('Le formulaire doit être rempli au plus tard le 15 mai.',
      ['Il modulo va compilato entro il 15 maggio', 'Il modulo deve essere compilato entro il 15 maggio', 'Il modulo va compilato entro e non oltre il 15 maggio',
        'Il modulo deve essere compilato entro e non oltre il 15 maggio', 'Il modulo va compilato entro il quindici maggio',
        'Il modulo deve essere compilato entro il quindici maggio'],
      'andare + participe ou dover essere + participe ; au plus tard = entro (e non oltre).', { d: 1.7 })
    .answer('Spiega a un amico straniero come si ottiene un documento in un ufficio pubblico che conosci.',
      'Prima bisogna compilare il modulo online, poi si prende un appuntamento e ci si reca allo sportello con un documento d’identità e una marca da bollo.',
      'Lexique administratif : compilare il modulo, recarsi allo sportello, la marca da bollo.',
      { kc: [BUREAU, IMPERS], keywords: [['modulo', 'sportello', 'domanda', 'pratica', 'richiesta', 'documento']], minWords: 15, d: 1.8 })
    .build(),
};
