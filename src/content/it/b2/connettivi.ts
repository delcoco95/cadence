import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const CONC = 'it.b2.grammar.concessive_clauses';
const COND = 'it.b2.grammar.conditional_conjunctions';
const PURP = 'it.b2.grammar.purpose_time_conjunctions';

export const connettivi1: Lesson = {
  id: 'it-b2-connettivi-1',
  cefr: 'B2',
  unitId: 'it-b2-connettivi',
  title: 'La concession',
  subtitle: 'Sebbene, benché, nonostante, anche se',
  kcIds: [CONC],
  estMinutes: 8,
  explanation: [
    {
      title: 'Sebbene, benché, nonostante + subjonctif',
      body: 'sebbene, benché, nonostante (che), malgrado (che), quantunque sont suivis du congiuntivo, en respectant la concordance des temps.',
      examples: [
        { en: 'Sebbene piova, esco lo stesso.', fr: 'Bien qu’il pleuve, je sors quand même.' },
        { en: 'Benché fosse stanco, ha continuato a lavorare.', fr: 'Bien qu’il fût fatigué, il a continué à travailler.' },
        { en: 'Nonostante avesse studiato, è stato bocciato.', fr: 'Bien qu’il ait étudié, il a été recalé.' },
      ],
      tip: 'Anche se (même si) prend l’indicatif, comme en français : Anche se piove, esco. Ne mets pas de subjonctif après anche se pour un fait réel.',
    },
    {
      title: 'Autres tournures concessives',
      table: [
        ['nonostante / malgrado + nom', 'Nonostante la pioggia, siamo usciti.'],
        ['pur + gerundio', 'Pur essendo stanca, è venuta.'],
        ['per quanto + subjonctif', 'Per quanto mi sforzi, non capisco. (j’ai beau…)'],
      ],
      tip: '« J’ai beau essayer » n’a pas d’équivalent mot à mot : per quanto provi, non ci riesco.',
    },
  ],
  exercises: exercises('it-b2-connettivi-1', 'B2', { kc: CONC, tense: 'congiuntivo' })
    .mcq('Sebbene ___ tardi, siamo usciti lo stesso.', ['fosse', 'era', 'sarebbe'], 0,
      'sebbene + congiuntivo ; principale au passé → imperfetto : fosse.', { d: 0.7 })
    .mcq('Anche se ___ freddo, andiamo al mare.', ['fa', 'faccia', 'facesse'], 0,
      'anche se + indicatif pour un fait réel : fa freddo.', { d: 0.8 })
    .cloze('Benché ___ molto, non è riuscito a superare l’esame.', ['avesse studiato', 'studiasse'],
      'benché + congiuntivo : avesse studiato (antériorité) ou studiasse.', { hint: 'studiare', d: 0.9 })
    .cloze('___ la pioggia, la partita si è giocata regolarmente.', ['Nonostante', 'Malgrado'],
      'Devant un nom : nonostante / malgrado, sans che.', { d: 0.7 })
    .type('« Nonostante ___ (essere) tardi, i negozi sono ancora aperti. » Écris le verbe.', ['sia'],
      'nonostante + congiuntivo présent (principale au présent) : sia.', { d: 0.8 })
    .type('« J’ai beau essayer, je n’y arrive pas. » → « Per quanto ___ (provare), non ci riesco. »', ['provi', 'io provi'],
      'per quanto + congiuntivo : provi.', { d: 1.1 })
    .order('Il vit simplement bien qu’il soit riche.', 'Vive in modo semplice benché sia ricco.',
      'benché + congiuntivo : sia ricco.', { distractors: ['è', 'sarebbe'], d: 0.8 })
    .listen('Malgrado avesse la febbre, Chiara è andata a lavorare lo stesso.', 'Che cosa ha fatto Chiara?',
      ['È andata al lavoro nonostante fosse malata', 'È rimasta a casa con la febbre', 'È andata dal medico'], 0,
      'Malgrado avesse la febbre = bien qu’elle ait de la fièvre.', { d: 0.8 })
    .listen('Pur non essendo un esperto, mio fratello ha riparato la lavatrice in mezz’ora.', 'Che cosa sappiamo del fratello?',
      ['Non è un esperto, ma ha riparato la lavatrice', 'È un tecnico professionista', 'Non è riuscito a riparare la lavatrice'], 0,
      'Pur non essendo = bien qu’il ne soit pas.', { d: 0.9 })
    .dictation('Sebbene non lo conoscessi bene, mi è sembrato simpatico.',
      'sebbene + congiuntivo imperfetto : conoscessi.', { d: 0.9 })
    .tr('Bien qu’elle soit fatiguée, elle continue à travailler.',
      ['Sebbene sia stanca, continua a lavorare.', 'Benché sia stanca, continua a lavorare.', 'Nonostante sia stanca, continua a lavorare.', 'Malgrado sia stanca, continua a lavorare.',
        'Quantunque sia stanca, continua a lavorare.', 'Sebbene sia stanca, lei continua a lavorare.', 'Pur essendo stanca, continua a lavorare.', 'Anche se è stanca, continua a lavorare.'],
      'sebbene / benché + sia ; ou pur essendo, ou anche se + indicatif.', { d: 0.8 })
    .tr('Même s’il pleut, nous sortirons.',
      ['Anche se piove, usciremo.', 'Anche se piove, usciamo.', 'Usciremo anche se piove.', 'Usciamo anche se piove.', 'Anche se pioverà, usciremo.', 'Usciremo anche se pioverà.'],
      'même si = anche se + indicatif.', { d: 0.8 })
    .repeat('Nonostante tutto, siamo rimasti amici.',
      'nonostante + nom ou pronom : nonostante tutto.', { d: 0.5 })
    .say('Bien qu’il soit tard, je n’ai pas sommeil.',
      ['Sebbene sia tardi, non ho sonno', 'Benché sia tardi, non ho sonno', 'Nonostante sia tardi, non ho sonno', 'Malgrado sia tardi, non ho sonno', 'Anche se è tardi, non ho sonno'],
      'sebbene + sia ; avere sonno = avoir sommeil.', { d: 0.8 })
    .answer('Parla di una cosa che fai volentieri anche se è difficile o faticosa.',
      'Vado a correre tutte le mattine, sebbene mi costi fatica alzarmi presto, perché poi mi sento molto meglio.',
      'sebbene / benché / nonostante + congiuntivo ; anche se + indicatif.',
      { keywords: [['sebbene', 'benché', 'anche se', 'nonostante', 'malgrado', 'pur', 'per quanto']], minWords: 12, d: 1.0 })
    .build(),
};

export const connettivi2: Lesson = {
  id: 'it-b2-connettivi-2',
  cefr: 'B2',
  unitId: 'it-b2-connettivi',
  title: 'Condition, but et antériorité',
  subtitle: 'Purché, a meno che, affinché, prima che',
  kcIds: [COND, PURP],
  estMinutes: 9,
  explanation: [
    {
      title: 'Poser une condition',
      body: 'purché, a patto che, a condizione che (à condition que), a meno che non (à moins que), nel caso in cui, qualora (au cas où) : tous suivis du congiuntivo.',
      examples: [
        { en: 'Ti presto la macchina purché tu me la riporti stasera.', fr: 'Je te prête la voiture à condition que tu me la rapportes ce soir.' },
        { en: 'Partiamo domani, a meno che non piova.', fr: 'Nous partons demain, à moins qu’il ne pleuve.' },
        { en: 'Nel caso in cui piovesse, la festa si farà al chiuso.', fr: 'Au cas où il pleuvrait, la fête aura lieu à l’intérieur.' },
      ],
      tip: '« Au cas où » + conditionnel en français → nel caso in cui / qualora + subjonctif en italien : qualora piovesse (et non « piovrebbe »). Le non après a meno che est explétif, comme le « ne » de « à moins qu’il ne pleuve ».',
    },
    {
      title: 'But, antériorité, absence',
      table: [
        ['affinché, perché + subj.', 'Te lo dico perché tu lo sappia. (pour que)'],
        ['prima che + subj.', 'Torna prima che faccia buio. (avant que)'],
        ['senza che + subj.', 'È uscito senza che nessuno lo vedesse. (sans que)'],
        ['même sujet : per, prima di, senza + inf.', 'Studio per imparare. · Chiamami prima di partire.'],
      ],
      tip: 'perché + subjonctif = pour que ; perché + indicatif = parce que. Te lo dico perché lo sappia (pour que tu le saches) ≠ te lo dico perché lo sai (parce que tu le sais).',
    },
  ],
  exercises: exercises('it-b2-connettivi-2', 'B2', { kc: COND, tense: 'congiuntivo' })
    .mcq('Ti presto i miei appunti, purché me li ___ domani.', ['restituisca', 'restituisci', 'restituirai'], 0,
      'purché + congiuntivo : (tu) me li restituisca.', { d: 0.8 })
    .cloze('Partiamo alle otto, a meno che non ___.', ['piova'],
      'a meno che (non) + congiuntivo : piova.', { hint: 'piovere', d: 0.8 })
    .cloze('Devo finire questo lavoro prima che ___ il capo.', ['arrivi'],
      'prima che + congiuntivo : arrivi.', { kc: PURP, hint: 'arrivare', d: 0.8 })
    .type('« Au cas où tu aurais besoin d’aide, appelle-moi. » → « Nel caso in cui ___ bisogno di aiuto, chiamami. »', ['avessi', 'tu avessi'],
      'nel caso in cui + congiuntivo imperfetto : avessi (et non avresti).', { d: 1.0 })
    .type('« È uscito senza che nessuno lo ___ (vedere). » Écris le verbe.', ['vedesse'],
      'senza che + congiuntivo ; principale au passé → imperfetto : vedesse.', { kc: PURP, d: 1.0 })
    .order('Je viendrai à condition que tu m’invites.', 'Verrò a condizione che tu mi inviti.',
      'a condizione che + congiuntivo : tu mi inviti.', { distractors: ['inviterai', 'se'], d: 0.8 })
    .mcq('A quale condizione la palestra resterà aperta ad agosto?',
      ['Se ci saranno almeno venti iscritti', 'Se la piscina riaprirà', 'Se i corsi serali saranno confermati'], 0,
      '« Purché si raggiunga un numero minimo di venti iscritti. »',
      {
        kc: [COND, PURP],
        d: 1.0,
        passage:
          'Gentili clienti, la palestra resterà aperta anche ad agosto, purché si raggiunga un numero minimo di venti iscritti. A meno che non ci siano cambiamenti, l’orario sarà ridotto: dalle 8 alle 14. Nel caso in cui desideraste frequentare i corsi serali, vi chiediamo di comunicarcelo entro il 15 luglio, affinché possiamo organizzarci. Vi ricordiamo infine che, sebbene la piscina sia chiusa per lavori, gli spogliatoi rimarranno a disposizione.',
      })
    .listen('Il proprietario ci affitta l’appartamento a patto che non teniamo animali.', 'Qual è la condizione del proprietario?',
      ['Niente animali nell’appartamento', 'Pagare sei mesi in anticipo', 'Non fare rumore la sera'], 0,
      'a patto che non teniamo animali = à condition que nous n’ayons pas d’animaux.', { d: 0.8 })
    .listen('Ho lasciato le chiavi alla vicina affinché possa dare da mangiare al gatto mentre sono via.', 'Perché ha lasciato le chiavi alla vicina?',
      ['Perché dia da mangiare al gatto', 'Perché le annaffi le piante', 'Perché ha perso le sue'], 0,
      'affinché possa dare da mangiare al gatto = pour qu’elle puisse nourrir le chat.', { kc: PURP, d: 0.9 })
    .dictation('Qualora ci fossero problemi, vi preghiamo di contattarci.',
      'qualora + congiuntivo imperfetto : registre formel (lettres, avis).', { d: 1.1 })
    .tr('Je te le dis pour que tu le saches.',
      ['Te lo dico perché tu lo sappia.', 'Te lo dico affinché tu lo sappia.', 'Te lo dico perché lo sappia.', 'Te lo dico affinché lo sappia.'],
      'pour que = perché / affinché + congiuntivo.', { kc: PURP, d: 0.9 })
    .tr('Nous partirons à moins qu’il ne neige.',
      ['Partiremo a meno che non nevichi.', 'Partiremo a meno che nevichi.', 'Partiamo a meno che non nevichi.', 'A meno che non nevichi, partiremo.', 'Partiremo salvo che non nevichi.'],
      'a meno che (non) + nevichi.', { d: 0.9 })
    .repeat('Ti accompagno io, a meno che tu non preferisca andare da solo.',
      'a meno che + congiuntivo ; le non se place devant le verbe.', { d: 0.8 })
    .say('Rentre avant qu’il fasse nuit.',
      ['Torna prima che faccia buio', 'Rientra prima che faccia buio', 'Torna a casa prima che faccia buio', 'Torna prima che faccia notte', 'Rientra prima che faccia notte'],
      'prima che + congiuntivo : faccia buio.', { kc: PURP, d: 0.8 })
    .answer('A quali condizioni accetteresti di trasferirti in un altro paese per lavoro?',
      'Accetterei di trasferirmi all’estero purché lo stipendio fosse buono e a condizione che la mia famiglia potesse venire con me.',
      'Conditionnel + purché / a condizione che + congiuntivo imperfetto (concordance).',
      { keywords: [['purché', 'condizione', 'patto', 'meno', 'caso', 'qualora']], minWords: 12, d: 1.2 })
    .build(),
};
