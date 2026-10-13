import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('es');

/**
 * Défis de fin d'unité B1 : items d'évaluation inédits (jamais repris des leçons).
 * Ajouter les nouveaux items à la fin de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B1: Record<string, Exercise[]> = {
  'es-b1-condicional': assessment(
    exercises('cp-es-b1-condicional', 'B1', { kc: 'es.b1.grammar.condicional_form', tense: 'condicional' })
      .mcq('Sin coche, nosotros no ___ ir a la sierra.', ['podríamos', 'poderíamos', 'pudimos'], 0, 'poder → podríamos (radical podr-).', { d: -0.4 })
      .cloze('¿Te ___ cuidar a mi perro este fin de semana?', ['importaría'], 'Demande polie → ¿te importaría + infinitif?', { kc: 'es.b1.function.condicional_politeness', hint: 'importar', d: -0.3 })
      .mcq('Tu jefe te trata mal. Yo que tú, ___ con él.', ['hablaría', 'hablé', 'hablara'], 0, 'yo que tú + conditionnel : hablaría.', { kc: 'es.b1.function.condicional_advice', d: -0.2 })
      .cloze('Con este calor, ___ algo fresco. ¿Tenéis limonada?', ['tomaría', 'bebería'], 'Souhait → conditionnel : tomaría.', { hint: 'tomar, yo', d: -0.4 })
      .tr('Tu devrais parler moins vite.', ['Deberías hablar más despacio.', 'Deberías hablar menos rápido.', 'Tendrías que hablar más despacio.', 'Tendrías que hablar menos rápido.', 'Deberías hablar más lento.'],
        'Conseil → deberías / tendrías que + infinitif.', { kc: 'es.b1.function.condicional_advice', d: -0.2 })
      .listen('Perdone, ¿sería posible cambiar la reunión al jueves? El miércoles tengo médico.', 'Que demande la personne ?',
        ['Déplacer la réunion à jeudi', 'Annuler la réunion', 'Avancer la réunion à mardi'], 0,
        '¿Sería posible cambiar la reunión al jueves?', { kc: 'es.b1.function.condicional_politeness', d: -0.3 })
      .answer('¿Qué te gustaría cambiar de tu vida diaria?', 'Me gustaría trabajar menos horas y tendría más tiempo para hacer deporte y ver a mis amigos.',
        'Me gustaría + infinitif ; conditionnel pour imaginer.', { kc: ['es.b1.grammar.condicional_form', 'es.b1.function.condicional_politeness'], keywords: [['me gustaría', 'me encantaría', 'querría', 'tendría', 'podría', 'haría']], minWords: 12, d: 0 })
      .build(),
  ),
  'es-b1-subjuntivo': assessment(
    exercises('cp-es-b1-subjuntivo', 'B1', { kc: 'es.b1.grammar.subjuntivo_form', tense: 'subjuntivo' })
      .mcq('Es necesario que todos ___ el formulario antes del lunes.', ['rellenen', 'rellenan', 'rellenarán'], 0, 'es necesario que + subjonctif : rellenen.', { kc: 'es.b1.grammar.subjuntivo_wishes', d: -0.3 })
      .cloze('Mis padres quieren que (yo) ___ Medicina.', ['estudie'], 'querer que + subjonctif : estudie.', { kc: 'es.b1.grammar.subjuntivo_wishes', hint: 'estudiar', d: -0.4 })
      .mcq('En cuanto ___ los resultados, te los mando.', ['tenga', 'tengo', 'tendré'], 0, 'Futur après en cuanto (dès que) → subjonctif.', { kc: 'es.b1.grammar.subjuntivo_cuando', d: 0.1 })
      .cloze('Ojalá ___ (vosotros) un buen viaje.', ['tengáis'], 'ojalá + subjonctif : tengáis.', { kc: 'es.b1.grammar.subjuntivo_wishes', hint: 'tener', d: -0.3 })
      .tr('Quand tu seras à Madrid, appelle-moi.', ['Cuando estés en Madrid, llámame.', 'Llámame cuando estés en Madrid.'],
        'cuando + subjonctif pour le futur : estés.', { kc: 'es.b1.grammar.subjuntivo_cuando', d: -0.1 })
      .listen('Te pido que no llegues tarde mañana, porque el autobús sale a las siete en punto.', 'Que demande-t-on ?',
        ['De ne pas arriver en retard', 'D’acheter les billets', 'De prendre un taxi'], 0,
        'pedir que + subjonctif : no llegues tarde.', { kc: 'es.b1.grammar.subjuntivo_wishes', d: -0.3 })
      .say('J’espère que tu aimeras le livre.', ['Espero que te guste el libro.', 'Espero que el libro te guste.'],
        'esperar que + subjonctif ; aimer une chose → gustar.', { kc: ['es.b1.grammar.subjuntivo_form', 'es.b1.grammar.subjuntivo_wishes'], d: -0.2 })
      .build(),
  ),
  'es-b1-imperativo': assessment(
    exercises('cp-es-b1-imperativo', 'B1', { kc: 'es.b1.grammar.imperative_negative', tense: 'imperativo' })
      .mcq('¡No ___ eso, que te vas a quemar!', ['toques', 'toca', 'tocas'], 0, 'tocar → no toques (c → qu).', { d: -0.3 })
      .cloze('Señora, no ___ el bolso ahí, por favor.', ['deje'], 'usted, négatif : no deje.', { kc: 'es.b1.grammar.imperative_usted', hint: 'dejar', d: -0.3 })
      .mcq('¿Las fotos? No ___ a nadie, por favor.', ['se las enseñes', 'enséñaselas', 'les las enseñes'], 0, 'Négatif : no + se las + subjonctif.', { kc: 'es.b1.grammar.imperative_pronouns', d: 0.2 })
      .cloze('Chicos, ___ los zapatos antes de entrar.', ['quitaos'], 'quitad + os → quitaos.', { kc: 'es.b1.grammar.imperative_pronouns', hint: 'quitarse, vosotros', d: 0.2 })
      .tr('Ne lui dis pas la vérité.', ['No le digas la verdad.', 'No le digas la verdad a él.', 'No le digas la verdad a ella.'], 'Négatif tú : no le digas.', { d: -0.2 })
      .listen('Por favor, no utilicen el móvil durante la película y no dejen basura en el suelo.', 'Que demande-t-on aux spectateurs ?',
        ['Ne pas utiliser leur portable et ne rien jeter par terre', 'Éteindre la lumière', 'Arriver en avance'], 0,
        'no utilicen, no dejen : impératif négatif de ustedes.', { kc: 'es.b1.grammar.imperative_usted', d: -0.2 })
      .say('Ne te lève pas, je m’en occupe.', ['No te levantes, ya lo hago yo.', 'No te levantes, yo me encargo.', 'No te levantes, ya me encargo yo.', 'No te levantes, lo hago yo.'],
        'levantarse → no te levantes.', { kc: ['es.b1.grammar.imperative_negative', 'es.b1.grammar.imperative_pronouns'], d: 0 })
      .build(),
  ),
  'es-b1-relativos': assessment(
    exercises('cp-es-b1-relativos', 'B1', { kc: 'es.b1.grammar.relative_que_donde' })
      .mcq('La casa ___ vivíamos de niños tenía un jardín enorme.', ['donde', 'que', 'lo que'], 0, 'Lieu → donde (en la que).', { d: -0.4 })
      .cloze('No me creo ___ me estás contando.', ['lo que'], '« ce que » → lo que.', { kc: 'es.b1.grammar.relative_lo_que', d: -0.3 })
      .mcq('Es el profesor con ___ hice mi primer curso de español.', ['el que', 'que', 'lo que'], 0, 'Après con → el que (ou quien).', { kc: 'es.b1.grammar.relative_preposition', d: 0 })
      .cloze('Las amigas con ___ viajé a Lisboa viven en Zaragoza.', ['las que', 'quienes', 'las cuales'], 'Accord avec las amigas : las que, ou quienes.', { kc: 'es.b1.grammar.relative_preposition', d: 0.1 })
      .tr('Le jour où je t’ai rencontré, il pleuvait.', [
        'El día que te conocí, llovía.', 'El día en que te conocí, llovía.', 'El día que te conocí, estaba lloviendo.', 'El día en que te conocí, estaba lloviendo.',
        'El día que te conocí llovía.',
      ], '« le jour où » → el día (en) que, pas « donde ».', { d: 0.1 })
      .listen('Lo que más me gustó del viaje fue la gente: todo el mundo era muy amable.', 'Qu’est-ce que la personne a le plus aimé ?',
        ['Les gens', 'La nourriture', 'Les paysages'], 0,
        'lo que más me gustó = ce qui m’a le plus plu.', { kc: 'es.b1.grammar.relative_lo_que', d: -0.3 })
      .answer('Habla de un libro o de una película que te haya gustado mucho.', 'La película que más me gusta es una comedia en la que dos amigos viajan por España. Lo que me encanta es el humor.',
        'Utilise que, en el que, lo que…', { kc: ['es.b1.grammar.relative_que_donde', 'es.b1.grammar.relative_lo_que'], keywords: [['que', 'donde'], ['lo que', 'en la que', 'en el que', 'con el que', 'con la que']], minWords: 14, d: 0.2 })
      .build(),
  ),
  'es-b1-relato': assessment(
    exercises('cp-es-b1-relato', 'B1', { kc: 'es.b1.tense.pluscuamperfecto', tense: 'pasado' })
      .mcq('Cuando encendí el ordenador, me di cuenta de que no ___ el trabajo.', ['había guardado', 'guardaba', 'he guardado'], 0, 'Antérieur à me di cuenta → había guardado.', { d: -0.2 })
      .cloze('Mientras ___ la cena, mi hermano puso la mesa.', ['preparaba', 'estaba preparando'], 'Action en cours → imperfecto.', { kc: 'es.b1.tense.past_sequence', hint: 'preparar, yo', d: -0.2 })
      .mcq('Estábamos viendo la tele. ___, alguien llamó a la puerta.', ['De repente', 'Al principio', 'Mientras'], 0, 'Événement soudain → de repente.', { kc: 'es.b1.function.narrative_markers', d: -0.4 })
      .cloze('Ellos nunca ___ en un restaurante tan caro.', ['habían comido'], 'nunca + plus-que-parfait.', { hint: 'comer', d: -0.3 })
      .tr('Quand nous sommes arrivés, le concert avait déjà commencé.', [
        'Cuando llegamos, el concierto ya había empezado.', 'Cuando llegamos, el concierto ya había comenzado.', 'Cuando llegamos, ya había empezado el concierto.',
        'Cuando llegamos, ya había comenzado el concierto.', 'Cuando nosotros llegamos, el concierto ya había empezado.',
      ], 'llegamos (événement) ; había empezado (antérieur).', { kc: ['es.b1.tense.pluscuamperfecto', 'es.b1.tense.past_sequence'], d: 0 })
      .listen('Al día siguiente volvimos al hotel, pero la cartera ya no estaba: alguien se la había llevado.', 'Qu’est-il arrivé au portefeuille ?',
        ['Quelqu’un l’avait pris', 'Il était à la réception', 'Il était dans la voiture'], 0,
        'alguien se la había llevado = quelqu’un l’avait emporté.', { kc: ['es.b1.tense.pluscuamperfecto', 'es.b1.function.narrative_markers'], d: -0.1 })
      .answer('Cuenta cómo conociste a tu mejor amigo o amiga.', 'Conocí a mi mejor amiga en la universidad. Al principio no hablábamos mucho, pero un día perdí el autobús y ella me llevó a casa.',
        'Mélange indefinido, imperfecto et connecteurs.', { kc: ['es.b1.tense.past_sequence', 'es.b1.function.narrative_markers'], keywords: [['conocí', 'era', 'estaba', 'había', 'fue', 'hablábamos'], ['al principio', 'un día', 'luego', 'después', 'entonces', 'al final', 'de repente']], minWords: 15, d: 0.3 })
      .build(),
  ),
  'es-b1-por-para': assessment(
    exercises('cp-es-b1-por-para', 'B1', { kc: 'es.b1.grammar.por' })
      .mcq('Te cambio mi bocadillo ___ tu zumo.', ['por', 'para', 'a'], 0, 'Échange → por.', { d: -0.2 })
      .cloze('Necesito gafas nuevas ___ leer.', ['para'], 'But → para + infinitif.', { kc: 'es.b1.grammar.para', d: -0.5 })
      .mcq('¿Has soñado alguna vez ___ ganar la lotería?', ['con', 'de', 'en'], 0, 'soñar con = rêver de.', { kc: 'es.b1.grammar.verb_prepositions', d: -0.2 })
      .cloze('El vuelo se canceló ___ la niebla.', ['por', 'a causa de', 'debido a'], 'Cause → por.', { d: -0.3 })
      .tr('Ce message est pour toi.', ['Este mensaje es para ti.', 'Este mensaje es para vosotros.', 'Este mensaje es para usted.'], 'Destinataire → para ti.', { kc: 'es.b1.grammar.para', d: -0.5 })
      .listen('Siempre tardo más de una hora en llegar al trabajo por las obras de la carretera.', 'Pourquoi met-il plus d’une heure ?',
        ['À cause des travaux sur la route', 'Parce qu’il habite très loin', 'Parce qu’il prend le bus'], 0,
        'por las obras = à cause des travaux ; tardar en.', { kc: ['es.b1.grammar.por', 'es.b1.grammar.verb_prepositions'], d: -0.2 })
      .say('Je ne me souviens pas de son nom.', ['No me acuerdo de su nombre.', 'No me acuerdo de cómo se llama.', 'No recuerdo su nombre.'],
        'acordarse de (ou recordar sans préposition).', { kc: 'es.b1.grammar.verb_prepositions', d: -0.1 })
      .build(),
  ),
  'es-b1-hipotesis': assessment(
    exercises('cp-es-b1-hipotesis', 'B1', { kc: 'es.b1.grammar.si_unreal' })
      .mcq('Si ___ hambre, hay fruta en la nevera.', ['tienes', 'tendrás', 'tuvieras'], 0, 'Condition possible → si + présent.', { kc: 'es.b1.grammar.si_real', d: -0.3 })
      .cloze('Si ___ (nosotros) más cerca, nos veríamos más.', ['viviéramos', 'viviésemos'], 'si + subjonctif imparfait : viviéramos.', { kc: ['es.b1.grammar.si_unreal', 'es.b1.grammar.imperfecto_subjuntivo'], hint: 'vivir', d: 0.2 })
      .mcq('Si no estuviera tan cansado, ___ contigo al gimnasio.', ['iría', 'iré', 'fuera'], 0, 'Conséquence d’une hypothèse irréelle → conditionnel.', { d: 0 })
      .cloze('Me trata como si ___ un niño.', ['fuera', 'fuese'], 'como si + subjonctif imparfait.', { kc: 'es.b1.grammar.imperfecto_subjuntivo', hint: 'ser, yo', d: 0.2 })
      .tr('Si j’avais plus de temps, j’apprendrais l’italien.', [
        'Si tuviera más tiempo, aprendería italiano.', 'Si tuviese más tiempo, aprendería italiano.', 'Aprendería italiano si tuviera más tiempo.',
        'Si yo tuviera más tiempo, aprendería italiano.', 'Si tuviera más tiempo, aprendería el italiano.',
      ], 'si + tuviera → aprendería.', { d: 0.2 })
      .listen('Si mañana hace sol, iremos a la playa; si llueve, nos quedaremos viendo películas.', 'Que feront-ils s’il pleut ?',
        ['Ils regarderont des films', 'Ils iront au musée', 'Ils iront à la plage quand même'], 0,
        'si llueve, nos quedaremos viendo películas.', { kc: 'es.b1.grammar.si_real', d: -0.3 })
      .answer('Si pudieras cambiar una cosa del mundo, ¿qué cambiarías?', 'Si pudiera cambiar una cosa, acabaría con el hambre porque nadie debería pasar hambre hoy en día.',
        'si + subjonctif imparfait, puis conditionnel.', { kc: ['es.b1.grammar.si_unreal', 'es.b1.grammar.imperfecto_subjuntivo'], keywords: [['si'], ['cambiaría', 'acabaría', 'haría', 'eliminaría', 'pondría', 'daría', 'prohibiría']], minWords: 12, d: 0.3 })
      .build(),
  ),
  'es-b1-conectores': assessment(
    exercises('cp-es-b1-conectores', 'B1', { kc: 'es.b1.function.connectors_cause' })
      .mcq('Ya que ___ en la cocina, ¿me traes un vaso de agua?', ['estás', 'estés', 'estarás'], 0, 'ya que + indicatif.', { d: -0.3 })
      .cloze('No quiero que me ayudes, ___ que me escuches.', ['sino'], 'Correction après une négation → sino.', { kc: 'es.b1.function.connectors_contrast', d: 0 })
      .mcq('Marta: «Llegaré tarde». → Marta dice que ___ tarde.', ['llegará', 'llegue', 'llegaré'], 0, 'Information rapportée : 3e personne, même temps.', { kc: 'es.b1.grammar.reported_speech', d: -0.2 })
      .cloze('El médico: «Descanse unos días». → El médico me dice que ___ unos días.', ['descanse'], 'Ordre rapporté → que + subjonctif.', { kc: 'es.b1.grammar.reported_speech', hint: 'descansar', d: 0.2 })
      .tr('Comme il faisait beau, nous avons mangé dehors.', [
        'Como hacía buen tiempo, comimos fuera.', 'Como hacía bueno, comimos fuera.', 'Como hacía sol, comimos fuera.', 'Como hacía buen tiempo, hemos comido fuera.',
        'Como hacía buen tiempo, comimos afuera.', 'Como hacía buen tiempo, cenamos fuera.',
      ], 'Cause en tête → como.', { d: -0.1 })
      .listen('Aunque el piso es pequeño, me lo quedo, porque está al lado del trabajo y además es barato.', 'Pourquoi prend-il l’appartement ?',
        ['Il est près du travail et pas cher', 'Il est très grand', 'Il a une terrasse'], 0,
        'aunque es pequeño… porque está al lado del trabajo y además es barato.', { kc: ['es.b1.function.connectors_cause', 'es.b1.function.connectors_contrast'], d: -0.2 })
      .say('Il me demande où j’habite.', ['Me pregunta dónde vivo.', 'Me pregunta que dónde vivo.'], 'pregunta dónde + indicatif.', { kc: 'es.b1.grammar.reported_speech', d: -0.2 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_B1: Record<string, string[]> = {
  'es-b1-condicional': ['Je peux demander un service poliment et exprimer un souhait.', 'Je peux donner un conseil (deberías, yo que tú…).'],
  'es-b1-subjuntivo': ['Je peux exprimer ce que je veux ou souhaite que les autres fassent.', 'Je peux parler de projets futurs avec cuando + subjonctif.'],
  'es-b1-imperativo': ['Je peux interdire ou déconseiller quelque chose (no hagas…).', 'Je peux donner des instructions avec des pronoms (dímelo, no me lo digas).'],
  'es-b1-relativos': ['Je peux décrire des personnes, des lieux et des objets avec des relatives.', 'Je peux utiliser lo que et les relatifs après une préposition.'],
  'es-b1-relato': ['Je peux raconter une histoire en enchaînant les temps du passé.', 'Je peux dire ce qui s’était passé avant (había + participe).'],
  'es-b1-por-para': ['Je peux choisir entre por et para selon le sens.', 'Je peux employer les verbes courants avec leur préposition (pensar en, soñar con).'],
  'es-b1-hipotesis': ['Je peux exprimer une condition réalisable (si + présent).', 'Je peux imaginer une situation irréelle (si tuviera…, haría…).'],
  'es-b1-conectores': ['Je peux relier mes idées pour expliquer, opposer et nuancer.', 'Je peux rapporter ce que quelqu’un dit, demande ou ordonne.'],
};
