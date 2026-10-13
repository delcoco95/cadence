import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('it');

const UNREAL = 'it.b2.grammar.unreal_past_conditional';
const MIXED = 'it.b2.grammar.mixed_conditionals';
const WISH = 'it.b2.function.wishes_as_if';

export const ipotesi1: Lesson = {
  id: 'it-b2-ipotesi-1',
  cefr: 'B2',
  unitId: 'it-b2-ipotesi',
  title: 'L’irréel du passé',
  subtitle: 'Se l’avessi saputo, sarei venuto',
  kcIds: [UNREAL],
  estMinutes: 9,
  explanation: [
    {
      title: 'Se + congiuntivo trapassato, condizionale passato',
      body: 'Pour imaginer un passé qui n’a pas eu lieu : se + subjonctif plus-que-parfait (avessi fatto, fossi andato), puis conditionnel passé (avrei fatto, sarei andato). L’ordre des deux propositions est libre.',
      table: [
        ['condition (se…)', 'conséquence'],
        ['Se avessi saputo', 'sarei venuto'],
        ['Se fossimo partiti prima', 'avremmo trovato posto'],
        ['Se non avesse piovuto', 'saremmo andati al mare'],
      ],
      examples: [
        { en: 'Se mi avessi chiamato, sarei venuto subito.', fr: 'Si tu m’avais appelé, je serais venu tout de suite.' },
        { en: 'Non avrei preso l’ombrello se avessi visto il sole.', fr: 'Je n’aurais pas pris le parapluie si j’avais vu le soleil.' },
      ],
      tip: 'Le français dit « si j’avais su » avec un indicatif ; l’italien veut le subjonctif : se avessi saputo (et non « se avevo saputo »). Jamais de conditionnel après se : « se avrei saputo » est une faute très stigmatisée.',
    },
    {
      title: 'À l’oral : l’imparfait de l’indicatif',
      body: 'Dans la conversation, on entend souvent l’imparfait dans les deux propositions : Se lo sapevo, non venivo = Se l’avessi saputo, non sarei venuto. C’est familier : à reconnaître, mais à éviter à l’écrit.',
      examples: [
        { en: 'Se me lo dicevi prima, ti aiutavo.', fr: 'Si tu me l’avais dit avant, je t’aurais aidé (familier).' },
      ],
      tip: 'Avec piovere, nevicare, les deux auxiliaires sont possibles : se avesse piovuto / se fosse piovuto.',
    },
  ],
  exercises: exercises('it-b2-ipotesi-1', 'B2', { kc: UNREAL, tense: 'periodo_ipotetico_irreale' })
    .mcq('Se ___ prima, avremmo preso il treno.', ['fossimo usciti', 'saremmo usciti', 'siamo usciti'], 0,
      'Après se : congiuntivo trapassato (fossimo usciti). Le conditionnel va dans l’autre proposition.', { d: 0.8 })
    .cloze('Se mi avessi avvisato, ___ a prenderti alla stazione.', ['sarei venuto', 'sarei venuta'],
      'Conséquence passée irréelle → condizionale passato : sarei venuto (venire prend essere).', { hint: 'venire', d: 0.9 })
    .cloze('Se Luca ___ più attenzione, non avrebbe fatto l’incidente.', ['avesse fatto', 'avesse prestato'],
      'Condition passée → congiuntivo trapassato : avesse fatto (fare attenzione).', { hint: 'fare', d: 0.9 })
    .type('« Se tu ___ (venire), ti saresti divertito. » Écris le verbe.', ['fossi venuto', 'fossi venuta', 'tu fossi venuto', 'tu fossi venuta'],
      'Se + congiuntivo trapassato : fossi venuto (ou venuta).', { d: 0.8 })
    .type('« Se avessimo avuto i soldi, ___ comprare la casa. » Écris potere au condizionale passato.', ['avremmo potuto'],
      'potere au conditionnel passé : avremmo potuto (deux m, comme tout conditionnel).', { d: 0.9 })
    .order('Je serais venu si tu m’avais appelé.', 'Sarei venuto se mi avessi chiamato.',
      'Conséquence (sarei venuto) + se + trapassato (mi avessi chiamato).', { distractors: ['avevi', 'verrei'], d: 0.8 })
    .listen('Se fossimo partiti mezz’ora prima, non avremmo perso l’aereo.', 'Che cosa è successo?',
      ['Hanno perso l’aereo', 'Sono partiti in anticipo', 'Hanno preso l’aereo all’ultimo momento'], 0,
      'Irréel du passé : ils ne sont pas partis plus tôt, donc ils ont raté l’avion.', { d: 0.8 })
    .listen('Se me lo dicevi prima, ti aiutavo volentieri.', 'Che cosa significa la frase?',
      ['Avrebbe aiutato volentieri, ma non sapeva niente', 'Aiuta sempre volentieri', 'Aiuterà domani'], 0,
      'Imparfait familier = se me l’avessi detto prima, ti avrei aiutato.', { d: 1.0 })
    .dictation('Se avessi studiato di più, avrei passato l’esame.',
      'avessi studiato (condition) / avrei passato (conséquence).', { d: 0.8 })
    .tr('Si j’avais su, je ne serais pas {venu|venue}.',
      ['Se l’avessi saputo, non sarei venuto.', 'Se l’avessi saputo, non sarei venuta.', 'Se lo avessi saputo, non sarei venuto.', 'Se lo avessi saputo, non sarei venuta.',
        'Se avessi saputo, non sarei venuto.', 'Se avessi saputo, non sarei venuta.', 'Non sarei venuto se l’avessi saputo.', 'Non sarei venuta se l’avessi saputo.',
        'Non sarei venuto se avessi saputo.', 'Non sarei venuta se avessi saputo.'],
      'Se + avessi saputo, puis non sarei venuto. L’italien ajoute volontiers le pronom : se l’avessi saputo.', { d: 0.9 })
    .tr('S’il avait plu, nous serions restés à la maison.',
      ['Se avesse piovuto, saremmo rimasti a casa.', 'Se fosse piovuto, saremmo rimasti a casa.', 'Se avesse piovuto, saremmo restati a casa.', 'Se fosse piovuto, saremmo restati a casa.',
        'Saremmo rimasti a casa se avesse piovuto.', 'Saremmo rimasti a casa se fosse piovuto.', 'Saremmo restati a casa se avesse piovuto.', 'Saremmo restati a casa se fosse piovuto.'],
      'piovere accepte avere ou essere. Rester à la maison = rimanere / restare a casa (sans article).', { d: 1.0 })
    .repeat('Se avessi saputo che eri in città, ti avrei invitato a cena.',
      'Deux subjonctifs/conditionnels composés : avessi saputo… avrei invitato.', { d: 0.8 })
    .say('Si tu étais venu, tu te serais amusé.',
      ['Se fossi venuto, ti saresti divertito', 'Se fossi venuta, ti saresti divertita', 'Se tu fossi venuto, ti saresti divertito', 'Se tu fossi venuta, ti saresti divertita',
        'Ti saresti divertito se fossi venuto', 'Ti saresti divertita se fossi venuta'],
      'divertirsi : ti saresti divertito, avec essere comme tous les pronominaux.', { d: 1.0 })
    .answer('Che cosa avresti fatto di diverso l’anno scorso, se avessi potuto?',
      'Se avessi avuto più tempo, avrei imparato a suonare la chitarra e sarei andato più spesso in montagna.',
      'Se + avessi / fossi + participe, puis avrei / sarei + participe.',
      { keywords: [['se'], ['avessi', 'fossi'], ['avrei', 'sarei']], minWords: 12, d: 1.2 })
    .mcq('Quelle phrase est correcte à l’écrit ?', ['Se avessi saputo, sarei venuto.', 'Se avrei saputo, sarei venuto.', 'Se avevo saputo, sarei venuto.'], 0,
      'Après se : congiuntivo trapassato. « Se avrei » est une faute ; « se avevo saputo » n’est pas standard.', { d: 0.7 })
    .build(),
};

export const ipotesi2: Lesson = {
  id: 'it-b2-ipotesi-2',
  cefr: 'B2',
  unitId: 'it-b2-ipotesi',
  title: 'Hypothèses mixtes, magari et come se',
  subtitle: 'Se avessi studiato medicina, ora farei il medico',
  kcIds: [MIXED, WISH],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les hypothèses mixtes',
      body: 'On mélange les temps quand la condition et la conséquence ne sont pas sur le même plan temporel.',
      table: [
        ['condition passée → conséquence présente', 'Se avessi studiato medicina, ora farei il medico.'],
        ['condition présente (permanente) → conséquence passée', 'Se fossi più prudente, non avresti avuto l’incidente.'],
      ],
      examples: [
        { en: 'Se avessi preso il treno, adesso sarei già a Roma.', fr: 'Si j’avais pris le train, je serais déjà à Rome.' },
        { en: 'Se fossi in te, non avrei accettato.', fr: 'À ta place, je n’aurais pas accepté.' },
      ],
      tip: 'Repère les adverbes : ora, adesso, oggi appellent le conditionnel présent (sarei) ; ieri, l’anno scorso le conditionnel passé (sarei stato).',
    },
    {
      title: 'Magari, se solo, come se',
      body: 'Magari ! / Se solo… + congiuntivo imperfetto exprime un souhait pour le présent, + trapassato un regret sur le passé. Come se est toujours suivi du subjonctif.',
      examples: [
        { en: 'Magari avessi più tempo libero!', fr: 'Si seulement j’avais plus de temps libre !' },
        { en: 'Se solo ti avessi ascoltato!', fr: 'Si seulement je t’avais écouté !' },
        { en: 'Si comporta come se non mi conoscesse.', fr: 'Il se comporte comme s’il ne me connaissait pas.' },
      ],
      tip: 'Le français met l’indicatif après « comme si » (comme s’il était) ; l’italien exige le subjonctif : come se fosse, come se avesse visto.',
    },
  ],
  exercises: exercises('it-b2-ipotesi-2', 'B2', { kc: MIXED, tense: 'periodo_ipotetico_misto' })
    .mcq('Se avessi accettato quel lavoro, adesso ___ a Londra.', ['vivrei', 'avrei vissuto', 'vivevo'], 0,
      'Condition passée, conséquence présente (adesso) → conditionnel présent : vivrei.', { d: 1.0 })
    .mcq('Se Giulia non fosse così timida, ___ alla festa ieri sera.', ['sarebbe venuta', 'verrebbe', 'fosse venuta'], 0,
      'Trait permanent (timida) au présent, conséquence passée (ieri sera) → conditionnel passé : sarebbe venuta.', { d: 1.1 })
    .cloze('Magari ___ più tempo libero!', ['avessi'],
      'Souhait pour le présent : magari + congiuntivo imperfetto.', { kc: WISH, hint: 'avere', d: 0.7 })
    .type('« Se non ___ (perdere) le chiavi, ora saremmo già a casa. » Écris le verbe.', ['avessimo perso', 'avessimo perduto'],
      'Condition passée → congiuntivo trapassato : avessimo perso ; conséquence présente : saremmo.', { d: 1.0 })
    .type('« Si seulement je l’avais su ! » → « Magari l’___ saputo! » Écris l’auxiliaire.', ['avessi'],
      'Regret sur le passé : magari + congiuntivo trapassato (l’avessi saputo).', { kc: WISH, d: 0.9 })
    .order('Il se comporte comme s’il ne m’avait jamais vu.', 'Si comporta come se non mi avesse mai visto.',
      'Come se + congiuntivo trapassato : non mi avesse mai visto.', { kc: WISH, distractors: ['aveva', 'avrebbe'], d: 1.0 })
    .mcq('Che cosa pensa l’autore della sua scelta?',
      ['Ha qualche rimpianto, ma è contento di aver conosciuto sua moglie', 'Si pente completamente di essere rimasto in Italia', 'È tornato dal Giappone dopo pochi mesi'], 0,
      'Il imagine une autre vie (parlerei, lavorerei), mais « non lo cambierei per niente al mondo ».',
      {
        kc: [MIXED, UNREAL],
        d: 1.1,
        passage:
          'Quando avevo diciotto anni ho rinunciato a una borsa di studio in Giappone perché avevo paura di partire da solo. A volte mi chiedo come sarebbe stata la mia vita se avessi accettato. Forse adesso parlerei giapponese e lavorerei per un’azienda internazionale; forse, invece, sarei tornato dopo pochi mesi. Mia madre dice sempre che, se fossi meno ansioso, avrei fatto scelte più coraggiose. Comunque, se non fossi rimasto in Italia, non avrei conosciuto mia moglie, e questo non lo cambierei per niente al mondo.',
      })
    .listen('Se ieri sera fossi andato a letto presto, adesso non sarei così stanco.', 'Perché è stanco?',
      ['Perché ieri sera è andato a letto tardi', 'Perché ha lavorato troppo oggi', 'Perché non ha bevuto il caffè'], 0,
      'Condition passée (fossi andato), conséquence présente (non sarei stanco) : il s’est couché tard.', { d: 0.9 })
    .listen('Magari fossi rimasta a casa! Questo film è noiosissimo.', 'Che cosa prova la persona?',
      ['Si pente di essere uscita', 'È contenta di essere al cinema', 'Vuole restare fino alla fine'], 0,
      'Magari + trapassato = regret : elle aurait préféré rester chez elle.', { kc: WISH, d: 0.9 })
    .dictation('Se fossi in te, non avrei accettato quella proposta.',
      'Se fossi in te (= à ta place, présent) + conditionnel passé (avrei accettato).', { d: 1.0 })
    .tr('Si j’avais pris le train, je serais déjà à Rome.',
      ['Se avessi preso il treno, sarei già a Roma.', 'Se avessi preso il treno, ora sarei già a Roma.', 'Se avessi preso il treno, adesso sarei già a Roma.',
        'Sarei già a Roma se avessi preso il treno.', 'Ora sarei già a Roma se avessi preso il treno.'],
      'Condition passée (avessi preso), conséquence présente (sarei già a Roma).', { d: 1.0 })
    .tr('Si seulement tu m’avais écouté !',
      ['Magari mi avessi ascoltato!', 'Se solo mi avessi ascoltato!', 'Magari tu mi avessi ascoltato!', 'Se solo tu mi avessi ascoltato!',
        'Magari mi avessi dato retta!', 'Se solo mi avessi dato retta!', 'Se mi avessi ascoltato!'],
      'Regret : magari / se solo + congiuntivo trapassato. Dare retta = écouter (un conseil).', { kc: WISH, d: 0.9 })
    .repeat('Fa come se niente fosse successo.',
      'Come se + trapassato : fosse successo.', { kc: WISH, d: 0.8 })
    .say('Si j’étais plus {patient|patiente}, je n’aurais pas crié.',
      ['Se fossi più paziente, non avrei urlato', 'Se fossi più paziente, non avrei gridato', 'Se io fossi più paziente, non avrei urlato', 'Se io fossi più paziente, non avrei gridato',
        'Non avrei urlato se fossi più paziente', 'Non avrei gridato se fossi più paziente'],
      'Trait présent (fossi più paziente) + conséquence passée (non avrei urlato). paziente est invariable en genre.', { d: 1.1 })
    .answer('Pensa a una scelta importante del passato. Se avessi deciso diversamente, come sarebbe la tua vita oggi?',
      'Se non mi fossi trasferito a Lione, oggi non lavorerei in questa azienda e probabilmente vivrei ancora con i miei genitori.',
      'Se + congiuntivo trapassato, puis conditionnel présent pour aujourd’hui (lavorerei, vivrei, sarei).',
      { keywords: [['se'], ['fossi', 'avessi'], ['sarei', 'avrei', 'vivrei', 'lavorerei', 'farei', 'sarebbe', 'avrebbe', 'abiterei', 'parlerei']], minWords: 12, d: 1.3 })
    .build(),
};
