import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const FORM = 'it.b1.tense.conditional_form';
const POLITE = 'it.b1.function.polite_requests';
const IRR = 'it.b1.tense.conditional_irregular';
const ADVICE = 'it.b1.function.advice';

export const condizionale1: Lesson = {
  id: 'it-b1-condizionale-1',
  cefr: 'B1',
  unitId: 'it-b1-condizionale',
  title: 'Conditionnel : formes et politesse',
  subtitle: 'parlerei, prenderei, vorrei, potrebbe…',
  kcIds: [FORM, POLITE],
  estMinutes: 10,
  explanation: [
    {
      title: 'Former le conditionnel présent',
      body: 'On part du même radical que le futur (parlare → parler-, prendere → prender-, partire → partir-) et on ajoute -ei, -esti, -ebbe, -emmo, -este, -ebbero. Les verbes en -are changent le a en e.',
      table: [
        ['io', 'parlerei · prenderei · partirei'],
        ['tu', 'parleresti · prenderesti · partiresti'],
        ['lui / lei / Lei', 'parlerebbe · prenderebbe · partirebbe'],
        ['noi', 'parleremmo · prenderemmo · partiremmo'],
        ['voi', 'parlereste · prendereste · partireste'],
        ['loro', 'parlerebbero · prenderebbero · partirebbero'],
      ],
      examples: [
        { en: 'Con più tempo, studierei il giapponese.', fr: 'Avec plus de temps, j’étudierais le japonais.' },
        { en: 'Prenderemmo volentieri un caffè con voi.', fr: 'Nous prendrions volontiers un café avec vous.' },
      ],
      tip: 'noi : -emmo avec deux m (parleremmo = nous parlerions) ; le futur n’en a qu’un (parleremo = nous parlerons). Comme au futur : cercare → cercherei, pagare → pagherei, mangiare → mangerei.',
    },
    {
      title: 'Demander poliment, exprimer un souhait',
      body: 'Le conditionnel adoucit une demande : vorrei (je voudrais), potrebbe… ? (pourriez-vous… ?), ti dispiacerebbe… ? (ça t’ennuierait de… ?). Pour un souhait : mi piacerebbe + infinitif (j’aimerais).',
      examples: [
        { en: 'Vorrei un tavolo per quattro, per favore.', fr: 'Je voudrais une table pour quatre, s’il vous plaît.' },
        { en: 'Scusi, potrebbe ripetere?', fr: 'Excusez-moi, pourriez-vous répéter ?' },
        { en: 'Mi piacerebbe vivere al mare.', fr: 'J’aimerais vivre au bord de la mer.' },
        { en: 'Ti dispiacerebbe chiudere la finestra?', fr: 'Ça t’ennuierait de fermer la fenêtre ?' },
      ],
      tip: '« J’aimerais » se dit mi piacerebbe (construit comme mi piace) ou vorrei, pas « amerei ». Avec Lei, le verbe est à la 3e personne : potrebbe, vorrebbe.',
    },
  ],
  exercises: exercises('it-b1-condizionale-1', 'B1', { kc: FORM, tense: 'conditional' })
    .mcq('Noi ___ volentieri una pizza stasera.', ['mangeremmo', 'mangeremo', 'mangiaremmo'], 0,
      'Conditionnel, noi → -emmo (deux m) ; mangiare perd son i : mangeremmo. mangeremo est le futur.', { d: -0.4 })
    .mcq('Scusi, ___ dirmi dov’è la stazione?', ['potrebbe', 'potresti', 'potrei'], 0,
      'Scusi → vouvoiement (Lei) → potrebbe. potresti = tu ; potrei = je.', { kc: POLITE, d: -0.4 })
    .cloze('Con più tempo, Marta ___ il giapponese.', ['studierebbe'], 'studiare → studier- + -ebbe : studierebbe.', { hint: 'studiare', d: -0.3 })
    .cloze('Mi ___ visitare la Sicilia.', ['piacerebbe'], 'mi piacerebbe + infinitif = j’aimerais.', { kc: POLITE, hint: 'j’aimerais', d: -0.5 })
    .type('Conjugue « prendere » au conditionnel avec « voi ».', ['prendereste', 'voi prendereste'], 'prender- + -este : prendereste.', { d: -0.3 })
    .type('Conjugue « cercare » au conditionnel avec « io ».', ['cercherei', 'io cercherei'], 'cercare garde le son « k » : cercherei, avec un h.', { d: -0.2 })
    .order('J’aimerais passer une semaine à Naples.', 'Mi piacerebbe passare una settimana a Napoli.', 'mi piacerebbe + infinitif, comme mi piace.', { kc: POLITE, distractors: ['piacerei'], d: -0.3 })
    .tr('Je voudrais réserver une table pour deux personnes.', ['Vorrei prenotare un tavolo per due persone.', 'Vorrei prenotare un tavolo per due.', 'Io vorrei prenotare un tavolo per due persone.'],
      'vorrei = je voudrais ; réserver = prenotare.', { kc: POLITE, d: -0.5 })
    .tr('Vous pourriez parler plus lentement ?', ['Potrebbe parlare più lentamente?', 'Potrebbe parlare più piano?', 'Potreste parlare più lentamente?', 'Potreste parlare più piano?', 'Lei potrebbe parlare più lentamente?'],
      'Lei (une personne) → potrebbe ; voi (plusieurs) → potreste. più piano = plus lentement, à l’oral.', { kc: POLITE, d: -0.3 })
    .listen('Ti andrebbe di venire al cinema stasera? — Volentieri, ma dovrei finire un lavoro.', 'Que répond-elle ?',
      ['Elle viendrait volontiers, mais elle devrait finir un travail', 'Elle n’aime pas le cinéma', 'Elle est déjà allée au cinéma'], 0,
      'ti andrebbe di… ? = ça te dirait de… ? ; dovrei = je devrais.', { kc: POLITE, d: -0.2 })
    .listen('Comprerei volentieri una casa in campagna, ma costano troppo.', 'Pourquoi n’achète-t-il pas de maison ?', ['Elles coûtent trop cher', 'Il n’aime pas la campagne', 'Il en a déjà une'], 0,
      'comprerei = j’achèterais ; costano troppo = elles coûtent trop cher.', { d: -0.3 })
    .dictation('Prenderemmo un caffè, ma è troppo tardi.', 'prenderemmo : conditionnel, deux m.', { d: -0.2 })
    .repeat('Vorrei un cappuccino e una brioche, per favore.', 'vorrei : le r est roulé, ei bien prononcé « è-i ».', { kc: POLITE, d: -0.6 })
    .say('J’aimerais apprendre à cuisiner.', ['Mi piacerebbe imparare a cucinare.', 'Vorrei imparare a cucinare.', 'A me piacerebbe imparare a cucinare.'],
      'mi piacerebbe (ou vorrei) + imparare a + infinitif.', { kc: POLITE, d: -0.3 })
    .answer('Che cosa ti piacerebbe fare il prossimo anno?', 'Il prossimo anno mi piacerebbe viaggiare in Giappone e vorrei imparare a suonare la chitarra.',
      'Souhaits au conditionnel : mi piacerebbe, vorrei, andrei, farei…',
      { kc: [POLITE, FORM], keywords: [['piacerebbe', 'vorrei', 'andrei', 'farei', 'comprerei', 'studierei', 'viaggerei', 'imparerei', 'visiterei', 'cambierei', 'cercherei']], minWords: 10, d: -0.1 })
    .build(),
};

export const condizionale2: Lesson = {
  id: 'it-b1-condizionale-2',
  cefr: 'B1',
  unitId: 'it-b1-condizionale',
  title: 'Conditionnel : irréguliers et conseils',
  subtitle: 'sarei, avrei, dovresti, al posto tuo…',
  kcIds: [IRR, ADVICE],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les radicaux irréguliers',
      body: 'Les verbes irréguliers au futur le sont aussi au conditionnel, avec le même radical.',
      table: [
        ['essere → sarei', 'avere → avrei'],
        ['andare → andrei', 'potere → potrei'],
        ['dovere → dovrei', 'sapere → saprei'],
        ['vedere → vedrei', 'vivere → vivrei'],
        ['volere → vorrei', 'venire → verrei'],
        ['bere → berrei', 'tenere → terrei'],
        ['fare → farei', 'dare → darei · stare → starei'],
      ],
      examples: [
        { en: 'Sarebbe bello partire insieme.', fr: 'Ce serait bien de partir ensemble.' },
        { en: 'Verrei volentieri, ma ho un impegno.', fr: 'Je viendrais volontiers, mais j’ai un engagement.' },
      ],
      tip: 'Si tu connais le futur, tu connais le conditionnel : andrò → andrei, verrò → verrei. « Anderei » ou « venirei » n’existent pas.',
    },
    {
      title: 'Donner un conseil',
      body: 'dovresti + infinitif (tu devrais), potresti + infinitif (tu pourrais), sarebbe meglio + infinitif (il vaudrait mieux), al posto tuo / io + conditionnel (à ta place, moi, je…).',
      examples: [
        { en: 'Dovresti dormire di più.', fr: 'Tu devrais dormir davantage.' },
        { en: 'Al posto tuo, io parlerei con il capo.', fr: 'À ta place, je parlerais au chef.' },
        { en: 'Sarebbe meglio prenotare prima.', fr: 'Il vaudrait mieux réserver avant.' },
      ],
      tip: 'Ne confonds pas dovresti (tu devrais, conseil) et dovrai (tu devras, futur). Avec Lei : dovrebbe ; avec voi : dovreste.',
    },
  ],
  exercises: exercises('it-b1-condizionale-2', 'B1', { kc: IRR, tense: 'conditional' })
    .mcq('Al posto tuo, io non ci ___.', ['andrei', 'anderei', 'andassi'], 0, 'andare → andr- : andrei. « Anderei » n’existe pas.', { kc: [IRR, ADVICE], d: -0.3 })
    .mcq('Qu’est-ce qui inquiète Chiara ?', ['Se sentir seule à Milan', 'Gagner moins d’argent', 'Ne pas trouver de logement'], 0,
      'avrei paura di sentirmi sola = j’aurais peur de me sentir seule.',
      { kc: [ADVICE, IRR], passage: 'Cara Laura, ti scrivo perché ho bisogno di un consiglio. Mi hanno offerto un lavoro a Milano: lo stipendio sarebbe più alto, ma dovrei lasciare Bologna e i miei amici. Mi piacerebbe accettare, però avrei paura di sentirmi sola. Tu che cosa faresti al posto mio? Un abbraccio, Chiara', d: 0 })
    .cloze('Che cosa ___ tu al mio posto?', ['faresti'], 'fare → far- : faresti.', { kc: [IRR, ADVICE], hint: 'fare', d: -0.3 })
    .cloze('Con questo caldo ___ volentieri una birra fresca.', ['berrei'], 'bere → berr- (deux r) : berrei.', { hint: 'bere, io', d: 0 })
    .type('Conditionnel de « venire » avec « loro ».', ['verrebbero', 'loro verrebbero'], 'venire → verr- : verrebbero.', { d: 0.1 })
    .type('Conditionnel de « essere » avec « noi ».', ['saremmo', 'noi saremmo'], 'essere → sar- : saremmo (deux m).', { d: -0.3 })
    .order('À ta place, je prendrais le train.', 'Al posto tuo prenderei il treno.', 'al posto tuo + conditionnel.', { kc: ADVICE, distractors: ['prenderò'], d: -0.3 })
    .tr('Tu devrais parler avec ton chef.', ['Dovresti parlare con il tuo capo.', 'Dovresti parlare col tuo capo.', 'Tu dovresti parlare con il tuo capo.', 'Dovresti parlare con il tuo responsabile.'],
      'tu devrais = dovresti (pas dovrai, futur).', { kc: ADVICE, d: -0.3 })
    .tr('Avec plus d’argent, ils vivraient au bord de la mer.', ['Con più soldi vivrebbero al mare.', 'Con più soldi loro vivrebbero al mare.', 'Con più denaro vivrebbero al mare.', 'Vivrebbero al mare con più soldi.'],
      'vivere → vivr- : vivrebbero. Au bord de la mer = al mare.', { d: 0.1 })
    .listen('Sarebbe meglio partire presto: domani ci sarà molto traffico.', 'Que conseille-t-il ?', ['Partir tôt à cause de la circulation', 'Partir après-demain', 'Prendre le train'], 0,
      'sarebbe meglio = il vaudrait mieux ; traffico = circulation.', { kc: ADVICE, d: -0.2 })
    .listen('Saprebbe dirmi a che ora apre la farmacia?', 'Que demande la personne ?', ['L’heure d’ouverture de la pharmacie', 'Où se trouve la pharmacie', 'Si la pharmacie est fermée'], 0,
      'saprebbe dirmi… ? = pourriez-vous me dire… ? (sapere → sapr-).', { d: -0.1 })
    .dictation('Verrei volentieri, ma non ho tempo.', 'venire → verrei, avec deux r.', { d: -0.2 })
    .repeat('Al posto tuo, io non direi niente.', 'direi : dire → dir- ; accent tonique sur « re ».', { kc: ADVICE, d: -0.4 })
    .say('Vous devriez vous reposer un peu.', ['Dovrebbe riposarsi un po’.', 'Lei dovrebbe riposarsi un po’.', 'Si dovrebbe riposare un po’.', 'Dovrebbe riposare un po’.', 'Dovreste riposarvi un po’.', 'Vi dovreste riposare un po’.', 'Dovreste riposare un po’.'],
      'Lei → dovrebbe riposarsi ; voi → dovreste riposarvi.', { kc: ADVICE, d: 0.2 })
    .answer('Un amico non dorme bene. Che cosa gli consiglieresti?', 'Gli direi di non bere caffè la sera e dovrebbe fare una passeggiata prima di dormire.',
      'Conseils au conditionnel : dovrebbe, potrebbe, sarebbe meglio, gli direi di…',
      { kc: [ADVICE, IRR], keywords: [['dovrebbe', 'potrebbe', 'direi', 'consiglierei', 'sarebbe', 'farei', 'dovresti', 'potresti']], minWords: 10, d: 0.1 })
    .build(),
};
