import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('it');

/**
 * Défis de fin d'unité B1 : items d'ÉVALUATION inédits (jamais repris des leçons).
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B1: Record<string, Exercise[]> = {
  'it-b1-condizionale': assessment(
    exercises('cp-it-b1-condizionale', 'B1', { kc: 'it.b1.tense.conditional_form' })
      .mcq('Loro ___ volentieri in Italia, ma non trovano lavoro.', ['vivrebbero', 'viverebbero', 'vivranno'], 0,
        'vivere → vivr- : vivrebbero. « Viverebbero » n’existe pas.', { kc: 'it.b1.tense.conditional_irregular', d: -0.1 })
      .cloze('Scusi, mi ___ dire che ore sono?', ['saprebbe', 'potrebbe'], 'Demande polie avec Lei : saprebbe / potrebbe dirmi…', { kc: 'it.b1.function.polite_requests', hint: 'sapere, Lei', d: -0.2 })
      .tr('À ta place, j’achèterais un vélo.', ['Al posto tuo comprerei una bicicletta.', 'Al posto tuo comprerei una bici.', 'Io al posto tuo comprerei una bicicletta.', 'Al tuo posto comprerei una bicicletta.', 'Al tuo posto comprerei una bici.', 'Se fossi in te comprerei una bicicletta.', 'Se fossi in te comprerei una bici.'],
        'al posto tuo + conditionnel : comprerei.', { kc: 'it.b1.function.advice', d: -0.1 })
      .listen('Avrei bisogno di una camera per due notti. Sarebbe possibile avere anche la colazione?', 'Que demande le client ?', ['Une chambre pour deux nuits avec petit-déjeuner', 'Une chambre pour une nuit', 'Le prix du dîner'], 0,
        'avrei bisogno di = j’aurais besoin de ; sarebbe possibile… ? = serait-il possible… ?', { kc: 'it.b1.function.polite_requests', d: -0.2 })
      .dictation('Dovreste uscire di più, ragazzi.', 'dovere → dovreste (voi) : conseil.', { kc: 'it.b1.function.advice', d: -0.1 })
      .say('Ça me plairait de travailler à l’étranger.', ['Mi piacerebbe lavorare all’estero.', 'Vorrei lavorare all’estero.'], 'mi piacerebbe + infinitif.', { kc: 'it.b1.function.polite_requests', d: -0.3 })
      .order('Nous voudrions deux billets pour Venise.', 'Vorremmo due biglietti per Venezia.', 'volere → vorremmo (deux m).', { distractors: ['vorremo'], d: -0.4 })
      .build(),
  ),
  'it-b1-congiuntivo': assessment(
    exercises('cp-it-b1-congiuntivo', 'B1', { kc: 'it.b1.mood.subjunctive_form' })
      .mcq('Non credo che Luca ___ a casa stasera.', ['sia', 'è', 'fosse'], 0, 'non credo che + subjonctif présent : sia.', { kc: ['it.b1.mood.subjunctive_opinion', 'it.b1.mood.subjunctive_irregular'], d: -0.2 })
      .cloze('È possibile che i prezzi ___ ancora.', ['aumentino'], 'è possibile che + subjonctif : aumentino.', { kc: 'it.b1.mood.subjunctive_will', hint: 'aumentare', d: 0 })
      .tr('Je pense qu’ils ont raison.', ['Penso che abbiano ragione.', 'Credo che abbiano ragione.', 'Penso che loro abbiano ragione.', 'Credo che loro abbiano ragione.'],
        'penso che + subjonctif : abbiano.', { kc: ['it.b1.mood.subjunctive_opinion', 'it.b1.mood.subjunctive_irregular'], d: -0.1 })
      .listen('Mia madre vuole che io torni a casa prima di mezzanotte.', 'Que veut sa mère ?', ['Qu’il rentre avant minuit', 'Qu’il sorte avec elle', 'Qu’il dorme chez un ami'], 0,
        'vuole che io torni = elle veut que je rentre.', { kc: 'it.b1.mood.subjunctive_will', d: -0.3 })
      .type('Subjonctif présent de « uscire » avec « tu ».', ['esca', 'che tu esca', 'tu esca'], 'esco → che tu esca.', { kc: 'it.b1.mood.subjunctive_irregular', d: 0.1 })
      .say('Il faut que tu viennes avec nous.', ['Bisogna che tu venga con noi.', 'Bisogna che venga con noi.', 'È necessario che tu venga con noi.', 'Occorre che tu venga con noi.', 'Devi venire con noi.'],
        'bisogna che + subjonctif : venga.', { kc: ['it.b1.mood.subjunctive_will', 'it.b1.mood.subjunctive_irregular'], d: 0 })
      .dictation('Spero che vi piaccia la mia torta.', 'spero che + subjonctif : piacere → piaccia.', { kc: 'it.b1.mood.subjunctive_will', d: 0.2 })
      .build(),
  ),
  'it-b1-pronomi-combinati': assessment(
    exercises('cp-it-b1-pronomi-combinati', 'B1', { kc: 'it.b1.pronouns.combined_forms' })
      .mcq('Hai portato i documenti al direttore? — Sì, ___ ho portati stamattina.', ['glieli', 'gli li', 'glie li'], 0, 'gli + li → glieli, en un mot.', { kc: 'it.b1.pronouns.glielo', d: -0.2 })
      .cloze('Se vuoi la ricetta, posso ___.', ['mandartela'], 'Après l’infinitif : mandar- + te + la.', { kc: 'it.b1.pronouns.combined_position', hint: 'mandare + te + la', d: 0.1 })
      .tr('Il me l’a offert pour mon anniversaire. (le livre)', ['Me l’ha regalato per il mio compleanno.', 'Me l’ha regalato per il compleanno.', 'Lui me l’ha regalato per il mio compleanno.', 'Me lo ha regalato per il mio compleanno.'],
        'mi + lo → me lo, élidé : me l’ha regalato.', { d: 0 })
      .listen('Quanti biglietti vuole, signora? — Me ne dia tre, per favore.', 'Combien de billets veut la dame ?', ['Trois', 'Deux', 'Un'], 0,
        'me ne dia tre = donnez-m’en trois.', { kc: ['it.b1.pronouns.combined_ne', 'it.b1.pronouns.combined_position'], d: -0.1 })
      .type('Remplace par des pronoms (« la storia », « ai bambini ») : « Racconta la storia ai bambini! »', ['Raccontagliela!', 'Raccontala loro!'],
        'Impératif tu + gli + la → raccontagliela (gli vaut aussi pour « leur »).', { kc: 'it.b1.pronouns.combined_position', d: 0.4 })
      .say('Je te les rends demain. (les clés)', ['Te le restituisco domani.', 'Domani te le restituisco.', 'Te le rendo domani.', 'Domani te le rendo.', 'Te le ridò domani.', 'Domani te le ridò.', 'Te le riporto domani.', 'Domani te le riporto.'],
        'ti + le → te le.', { d: -0.1 })
      .order('Je vous l’apporte tout de suite, madame.', 'Glielo porto subito, signora.', 'Le (à vous) + lo → glielo.', { kc: 'it.b1.pronouns.glielo', distractors: ['Lo'], d: -0.2 })
      .build(),
  ),
  'it-b1-relative': assessment(
    exercises('cp-it-b1-relative', 'B1', { kc: 'it.b1.grammar.relative_che' })
      .mcq('Non trovo la chiave con ___ ho aperto la porta.', ['cui', 'che', 'la cui'], 0, 'Après une préposition → cui.', { kc: 'it.b1.grammar.relative_cui', d: -0.2 })
      .cloze('___ ha finito l’esame può uscire.', ['Chi'], 'Celui qui → chi (verbe au singulier).', { kc: 'it.b1.grammar.relative_chi', d: -0.3 })
      .tr('La femme avec qui je travaille est espagnole.', ['La donna con cui lavoro è spagnola.', 'La donna con la quale lavoro è spagnola.', 'La signora con cui lavoro è spagnola.', 'La signora con la quale lavoro è spagnola.'],
        'avec qui → con cui / con la quale.', { kc: 'it.b1.grammar.relative_cui', d: -0.1 })
      .listen('Questo è l’albergo di cui ti ho mandato le foto.', 'De quel hôtel s’agit-il ?', ['Celui dont il a envoyé les photos', 'Celui où il a travaillé', 'Celui qu’il veut réserver'], 0,
        'di cui ti ho mandato le foto = dont je t’ai envoyé les photos.', { kc: 'it.b1.grammar.relative_cui', d: -0.1 })
      .type('« Ho incontrato la sorella di Paolo, che vive a Roma. » C’est la sœur qui vit à Rome : remplace « che » par la forme avec quale.', ['la quale'],
        'la quale (féminin) désigne clairement la sœur.', { kc: 'it.b1.grammar.relative_quale', d: 0.2 })
      .say('C’est exactement ce dont j’ai besoin.', ['È proprio quello di cui ho bisogno.', 'È esattamente quello di cui ho bisogno.', 'È proprio ciò di cui ho bisogno.', 'È esattamente ciò di cui ho bisogno.'],
        'avere bisogno di → quello di cui ho bisogno.', { kc: ['it.b1.grammar.relative_chi', 'it.b1.grammar.relative_cui'], d: 0.3 })
      .dictation('Il ragazzo che ho conosciuto ieri si chiama Pietro.', 'che = que (complément direct).', { d: -0.4 })
      .build(),
  ),
  'it-b1-racconto': assessment(
    exercises('cp-it-b1-racconto', 'B1', { kc: 'it.b1.tense.trapassato' })
      .mcq('Non sono andata alla festa perché non mi ___ invitata.', ['avevano', 'erano', 'hanno avuto'], 0, 'invitare prend avere ; antériorité → avevano invitata (accord avec mi = je, féminin).', { d: -0.1 })
      .cloze('Quando siamo arrivati, i nostri amici ___ già.', ['avevano mangiato'], 'Antérieur à siamo arrivati → avevano mangiato.', { hint: 'mangiare', d: -0.1 })
      .mcq('« Michelangelo dipinse la Cappella Sistina. » Que veut dire « dipinse » ?', ['il peignit', 'il peignait', 'il peindra'], 0, 'dipingere → dipinse (passato remoto).', { kc: 'it.b1.tense.passato_remoto_recognition', d: -0.2 })
      .listen('Mentre camminavo nel parco, ho incontrato una vecchia amica che non vedevo da anni.', 'Qui a-t-il rencontré ?', ['Une vieille amie qu’il n’avait pas vue depuis des années', 'Son voisin', 'Un collègue'], 0,
        'mentre camminavo (décor) ; ho incontrato (événement).', { kc: ['it.b1.tense.past_sequence', 'it.b1.function.storytelling'], d: -0.2 })
      .tr('Il avait déjà fini quand je l’ai appelé.', ['Aveva già finito quando l’ho chiamato.', 'Lui aveva già finito quando l’ho chiamato.', 'Quando l’ho chiamato, aveva già finito.', 'Aveva già finito quando gli ho telefonato.', 'Quando gli ho telefonato, aveva già finito.'],
        'avait fini → aveva finito ; l’événement au passato prossimo.', { kc: ['it.b1.tense.trapassato', 'it.b1.tense.past_sequence'], d: 0.1 })
      .type('Infinitif de « venne » ?', ['venire'], 'venne = il vint (venire).', { kc: 'it.b1.tense.passato_remoto_recognition', d: -0.1 })
      .say('Elle n’était jamais venue en Italie.', ['Non era mai venuta in Italia.', 'Lei non era mai venuta in Italia.', 'Non era mai stata in Italia.', 'Lei non era mai stata in Italia.'],
        'non + era + mai + venuta (accord au féminin).', { d: 0 })
      .build(),
  ),
  'it-b1-impersonale': assessment(
    exercises('cp-it-b1-impersonale', 'B1', { kc: 'it.b1.grammar.si_impersonale' })
      .mcq('In Italia ___ molti tipi di pasta.', ['si producono', 'si produce', 'si producano'], 0, 'tipi est pluriel → si producono.', { kc: 'it.b1.grammar.si_passivante', d: -0.2 })
      .cloze('Dopo una lunga passeggiata ___ stanchi.', ['si è'], 'si è + adjectif au pluriel.', { d: 0.1 })
      .tr('Ce pont a été construit en 1950.', ['Questo ponte è stato costruito nel 1950.', 'Il ponte è stato costruito nel 1950.', 'Questo ponte fu costruito nel 1950.'],
        'a été construit → è stato costruito.', { kc: 'it.b1.grammar.passive_compound', d: 0 })
      .listen('Le iscrizioni si fanno online e i risultati vengono comunicati via email.', 'Comment communique-t-on les résultats ?', ['Par e-mail', 'Par courrier', 'Par téléphone'], 0,
        'vengono comunicati via email = sont communiqués par e-mail.', { kc: ['it.b1.grammar.si_passivante', 'it.b1.grammar.passive_essere_venire'], d: -0.1 })
      .type('Mets au passif avec venire : « Il postino consegna la posta alle dieci. »', ['La posta viene consegnata dal postino alle dieci.', 'La posta viene consegnata alle dieci dal postino.'],
        'venire + participe accordé ; agent introduit par dal.', { kc: 'it.b1.grammar.passive_essere_venire', d: 0.3 })
      .say('En Italie, on boit beaucoup de café.', ['In Italia si beve molto caffè.', 'In Italia si beve tanto caffè.'], 'si beve + nom singulier.', { d: -0.3 })
      .dictation('Qui si parla solo italiano.', 'si parla + italiano (singulier).', { kc: 'it.b1.grammar.si_passivante', d: -0.4 })
      .build(),
  ),
  'it-b1-ipotesi': assessment(
    exercises('cp-it-b1-ipotesi', 'B1', { kc: 'it.b1.grammar.hypothesis_possible' })
      .mcq('Se avessimo più soldi, ___ una casa più grande.', ['compreremmo', 'compriamo', 'comprassimo'], 0, 'se + subjonctif imparfait → conditionnel : compreremmo.', { d: -0.2 })
      .cloze('Se ___ in te, chiamerei subito il medico.', ['fossi'], 'se fossi in te = si j’étais toi.', { kc: ['it.b1.grammar.hypothesis_possible', 'it.b1.mood.imperfect_subjunctive'], d: -0.2 })
      .tr('Si tu vois Marco, dis-lui bonjour.', ['Se vedi Marco, salutalo.', 'Se vedi Marco, salutalo da parte mia.', 'Se vedi Marco, digli ciao.', 'Se vedi Marco, digli buongiorno.', 'Se vedrai Marco, salutalo.'],
        'Hypothèse réelle : se + présent, puis impératif.', { kc: 'it.b1.grammar.hypothesis_real', d: 0 })
      .listen('Se non fosse così tardi, ti accompagnerei a casa a piedi.', 'Pourquoi ne la raccompagne-t-il pas ?', ['Parce qu’il est trop tard', 'Parce qu’il pleut', 'Parce qu’il est malade'], 0,
        'se non fosse così tardi = s’il n’était pas si tard.', { d: 0 })
      .type('Subjonctif imparfait de « dare » avec « tu ».', ['dessi', 'tu dessi', 'se tu dessi', 'se dessi'], 'dare → dessi.', { kc: 'it.b1.mood.imperfect_subjunctive', d: 0.1 })
      .say('Si je pouvais, je viendrais avec toi.', ['Se potessi, verrei con te.', 'Verrei con te se potessi.', 'Se io potessi, verrei con te.'], 'se potessi → verrei.', { d: 0.2 })
      .order('S’il était là, il saurait quoi faire.', 'Se fosse qui, saprebbe cosa fare.', 'se + fosse, puis saprebbe (conditionnel).', { distractors: ['sarebbe'], d: 0.2 })
      .build(),
  ),
  'it-b1-discorso': assessment(
    exercises('cp-it-b1-discorso', 'B1', { kc: 'it.b1.discourse.cause_consequence' })
      .mcq('Ho dormito poco, ___ oggi sono stanchissimo.', ['quindi', 'anche se', 'mentre'], 0, 'Conséquence → quindi.', { d: -0.4 })
      .cloze('___ è domenica, i negozi sono chiusi.', ['Dato che', 'Visto che', 'Siccome'], 'Cause en début de phrase → dato che, visto che, siccome.', { hint: 'étant donné que', d: -0.2 })
      .tr('Même s’il pleut, nous partons.', ['Anche se piove, partiamo.', 'Partiamo anche se piove.', 'Anche se piove, noi partiamo.'], 'même si → anche se + indicatif.', { kc: 'it.b1.discourse.contrast_concession', d: -0.3 })
      .listen('Il medico mi dice di bere più acqua e di camminare ogni giorno.', 'Que lui conseille le médecin ?', ['Boire plus d’eau et marcher tous les jours', 'Arrêter le café', 'Dormir davantage'], 0,
        'dire di + infinitif : ordre ou conseil rapporté.', { kc: 'it.b1.discourse.reported_statements', d: -0.2 })
      .type('Rapporte : « Quando parti? » → Mi chiede…', ['Mi chiede quando parto.'], 'quando + 1re personne : quando parto.', { kc: 'it.b1.discourse.reported_questions', d: -0.1 })
      .say('Il dit qu’il est malade.', ['Dice che è malato.', 'Lui dice che è malato.', 'Dice che sta male.', 'Lui dice che sta male.'], 'dire che + indicatif.', { kc: 'it.b1.discourse.reported_statements', d: -0.4 })
      .dictation('Lei è simpatica, mentre suo fratello è antipatico.', 'mentre = alors que (opposition).', { kc: 'it.b1.discourse.contrast_concession', d: -0.2 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_B1: Record<string, string[]> = {
  'it-b1-condizionale': ['Je peux demander poliment quelque chose (vorrei, potrebbe…).', 'Je peux exprimer un souhait et donner un conseil.'],
  'it-b1-congiuntivo': ['Je peux donner mon opinion avec penso che, credo che + subjonctif.', 'Je peux exprimer une volonté, un espoir ou une nécessité (voglio che, spero che, bisogna che).'],
  'it-b1-pronomi-combinati': ['Je peux éviter les répétitions avec me lo, glielo, ce ne.', 'Je peux placer les pronoms avec un infinitif, un modal ou un impératif.'],
  'it-b1-relative': ['Je peux relier deux phrases avec che, cui, il quale.', 'Je peux dire « ce que », « celui qui » avec quello che, chi.'],
  'it-b1-racconto': ['Je peux raconter un événement passé en enchaînant les temps (trapassato compris).', 'Je peux reconnaître le passato remoto dans un récit ou une biographie.'],
  'it-b1-impersonale': ['Je peux parler des habitudes générales avec le si impersonnel.', 'Je peux comprendre et former des phrases passives (è stato costruito, viene venduto).'],
  'it-b1-ipotesi': ['Je peux parler de conditions probables (se piove…).', 'Je peux imaginer une situation avec se + subjonctif imparfait et le conditionnel.'],
  'it-b1-discorso': ['Je peux relier mes idées avec perché, quindi, però, anche se.', 'Je peux rapporter ce que quelqu’un dit ou demande.'],
};
