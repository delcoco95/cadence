import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';
import { alt } from './alt';

const exercises = makeExercises('es');

/**
 * Défis de fin d'unité C1 : items d'évaluation inédits (jamais repris des leçons).
 * Ajouter les nouveaux items à la fin de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C1: Record<string, Exercise[]> = {
  'es-c1-subjuntivo': assessment(
    exercises('cp-es-c1-subjuntivo', 'C1', { kc: 'es.c1.grammar.negated_opinion_mood' })
      .mcq('No digo que el plan ___ malo, sino que es arriesgado.', ['sea', 'es', 'será'], 0, 'no digo que + subjonctif : on écarte une interprétation.', { d: 1.6 })
      .cloze('Sean ___ sean tus motivos, no puedes faltar a la reunión.', ['cuales'], 'sean cuales sean + nom pluriel = quels que soient.', { kc: 'es.c1.grammar.indefinite_relatives', d: 1.8 })
      .cloze('Siento que no te ___ bien en la entrevista de ayer.', ['haya ido', 'fuera', 'fuese'], 'sentir que = regretter → subjonctif : haya ido (ou fuera / fuese).', { kc: 'es.c1.grammar.double_meaning_verbs', hint: 'ir', d: 1.9 })
      .tr('Où qu’il aille, il se fait des amis.', alt(['Vaya donde vaya', 'Dondequiera que vaya', 'Allá donde vaya'], [', hace amigos.', ', siempre hace amigos.']),
        'où que → vaya donde vaya / dondequiera que vaya.', { kc: 'es.c1.grammar.reduplicative_subjunctive', d: 1.9 })
      .listen('Mi jefa me ha dicho que me tome el viernes libre, porque llevo semanas haciendo horas extra.', '¿Qué le ha dicho la jefa?', [
        'Que se tome el viernes libre', 'Que trabaje el viernes', 'Que deje de hacer horas extra el lunes',
      ], 0, 'decir que + subjonctif = conseil, ordre.', { kc: 'es.c1.grammar.double_meaning_verbs', d: 1.6 })
      .say('Quoi que tu fasses, fais-le bien.', ['Hagas lo que hagas, hazlo bien.', 'Hazlo bien, hagas lo que hagas.'],
        'Subjonctif redoublé : hagas lo que hagas.', { kc: 'es.c1.grammar.reduplicative_subjunctive', d: 1.8 })
      .answer('¿Qué consejo le darías a cualquiera que quiera aprender un idioma?',
        'A cualquiera que quiera aprender un idioma le diría que lo practique a diario, por poco tiempo que tenga, y que no tenga miedo de equivocarse.',
        'cualquiera que + subjonctif, por poco… que.', { kc: 'es.c1.grammar.indefinite_relatives', keywords: [['cualquiera', 'quienquiera', 'por poco', 'por mucho', 'por muy', 'sea cual sea']], minWords: 15, d: 2.0 })
      .build(),
  ),
  'es-c1-probabilidad': assessment(
    exercises('cp-es-c1-probabilidad', 'C1', { kc: 'es.c1.grammar.future_of_probability' })
      .mcq('—¿Sabes cuánto cuesta ese coche? —Ni idea, ___ unos treinta mil euros.', ['costará', 'costaría', 'cueste'], 0, 'Supposition sur le présent → futur : costará.', { d: 1.5 })
      .cloze('Mi abuelo ___ unos diez años cuando estalló la guerra.', ['tendría'], 'Supposition sur le passé → conditionnel : tendría.', { kc: 'es.c1.grammar.conditional_of_probability', hint: 'tener, supposition', d: 1.6 })
      .cloze('Cuando llegamos no quedaba nadie: la fiesta ya ___ terminado.', ['habría'], 'Supposition sur un plus-que-parfait → conditionnel passé : habría terminado.', { kc: 'es.c1.grammar.future_perfect', hint: 'haber, supposition', d: 2.0 })
      .tr('Elle a dû se tromper de jour.', ['Se habrá equivocado de día.', 'Debe de haberse equivocado de día.', 'Debió de equivocarse de día.', 'Seguramente se ha equivocado de día.', 'Se equivocaría de día.', 'Debe haberse equivocado de día.'],
        'Supposition sur le passé : se habrá equivocado (futur antérieur).', { kc: 'es.c1.grammar.future_perfect', d: 1.8 })
      .listen('—¿Por qué no vino Andrés ayer? —Estaría cansado después del viaje, o se le olvidaría.', '¿Qué hacen los hablantes?', [
        'Hacen suposiciones sobre por qué Andrés no vino', 'Critican a Andrés', 'Planean un viaje con Andrés',
      ], 0, 'estaría, se le olvidaría : conditionnel de probabilité.', { kc: 'es.c1.grammar.conditional_of_probability', d: 1.7 })
      .dictation('Para entonces ya habremos terminado las obras.', 'habremos terminado : futur antérieur.', { kc: 'es.c1.grammar.future_perfect', d: 1.6 })
      .say('Il est peut-être intelligent, mais il est très paresseux.', [
        ...alt(['Será inteligente', 'Será listo', 'Puede que sea inteligente', 'Tal vez sea inteligente'], [', pero es muy '], ['vago.', 'perezoso.']),
      ], 'Futur concessif : será inteligente, pero…', { kc: 'es.c1.grammar.concessive_future', d: 1.8 })
      .build(),
  ),
  'es-c1-registro': assessment(
    exercises('cp-es-c1-registro', 'C1', { kc: 'es.c1.function.formal_usted' })
      .mcq('Señor López, ___ ruego que disculpe el retraso.', ['le', 'te', 'os'], 0, 'usted → le ruego.', { d: 1.4 })
      .mcq('Choisis la formule de clôture la plus adaptée à une lettre officielle :', ['Atentamente,', 'Besos,', 'Hasta luego,'], 0, 'Atentamente : clôture formelle standard.', { kc: 'es.c1.function.formal_letter', d: 1.4 })
      .cloze('Les agradecería que me ___ la factura por correo electrónico.', ['enviaran', 'enviasen', 'mandaran', 'mandasen', 'remitieran', 'remitiesen'], 'agradecería que + subjonctif imparfait, 3e pluriel (ustedes).', { kc: 'es.c1.grammar.polite_requests', hint: 'enviar, ustedes', d: 1.8 })
      .tr('Veuillez trouver ci-joint mon curriculum vitae.', alt(['Adjunto le envío ', 'Adjunto le remito ', 'Le adjunto ', 'Le envío adjunto ', 'Adjunto les envío ', 'Les adjunto '], ['mi currículum.', 'mi currículum vitae.', 'mi currículo.']),
        'ci-joint → adjunto / le adjunto.', { kc: 'es.c1.vocabulary.administrative_language', d: 1.7 })
      .listen('Le informamos de que el plazo para presentar la documentación finaliza el próximo viernes. Pasada esa fecha, no se admitirá ninguna solicitud.', '¿Qué pasará después del viernes?', [
        'No se aceptarán más solicitudes', 'Se ampliará el plazo', 'Se devolverá la documentación',
      ], 0, 'pasada esa fecha, no se admitirá ninguna solicitud.', { kc: 'es.c1.vocabulary.administrative_language', d: 1.7 })
      .say('Pourriez-vous patienter un instant, s’il vous plaît ?', [
        '¿Podría esperar un momento, por favor?', '¿Puede esperar un momento, por favor?', '¿Podría esperar un momento?', '¿Le importaría esperar un momento, por favor?',
        '¿Podría aguardar un momento, por favor?', '¿Podrían esperar un momento, por favor?', '¿Podría esperar un instante, por favor?', 'Espere un momento, por favor.',
      ], 'Registre usted : ¿podría esperar…?', { d: 1.5 })
      .answer('Escribe dos frases formales para solicitar una cita con la directora de una sucursal bancaria.',
        'Estimada señora directora: me dirijo a usted para solicitarle una cita la próxima semana. Le agradecería que me indicara qué día le viene mejor.',
        'me dirijo a usted, solicitar, le agradecería que + subjonctif imparfait.', { kc: 'es.c1.grammar.polite_requests', keywords: [['solicitar', 'solicitarle', 'agradecería', 'ruego', 'me dirijo']], minWords: 18, d: 2.0 })
      .build(),
  ),
  'es-c1-coherencia': assessment(
    exercises('cp-es-c1-coherencia', 'C1', { kc: 'es.c1.grammar.contrast_connectors' })
      .mcq('El tratamiento es eficaz; ___, tiene efectos secundarios importantes.', ['no obstante', 'por consiguiente', 'es decir'], 0, 'Restriction → no obstante.', { d: 1.5 })
      .cloze('Ha habido muchas quejas; de ahí que la dirección ___ cambiar el horario.', ['haya decidido', 'decida'], 'de ahí que + subjonctif.', { kc: 'es.c1.grammar.consequence_connectors', hint: 'decidir', d: 1.9 })
      .cloze('El ___ de los precios ha sido del dos por ciento este año.', ['aumento', 'incremento', 'alza'], 'Nominalisation : el aumento / el incremento / el alza.', { kc: 'es.c1.grammar.nominalisation', hint: 'augmentation', d: 1.5 })
      .tr('En résumé, le projet est viable.', alt(['En resumen', 'En definitiva', 'En suma', 'En síntesis', 'Resumiendo'], [', el proyecto es viable.']),
        'en résumé → en resumen / en definitiva.', { kc: 'es.c1.grammar.additive_reformulation', d: 1.5 })
      .listen('Por un lado, la nueva ley protege a los inquilinos; por otro, muchos propietarios han retirado sus pisos del mercado. Así pues, el efecto final es incierto.', '¿Qué conclusión saca el hablante?', [
        'Que el resultado de la ley no está claro', 'Que la ley es un éxito', 'Que los propietarios están contentos',
      ], 0, 'por un lado… por otro ; así pues introduit la conclusion.', { kc: ['es.c1.grammar.additive_reformulation', 'es.c1.grammar.consequence_connectors'], d: 1.8 })
      .dictation('La toma de conciencia ha sido lenta pero real.', 'la toma de conciencia = la prise de conscience.', { kc: 'es.c1.grammar.nominalisation', d: 1.6 })
      .answer('¿Qué opinas del teletrabajo? Organiza tu respuesta con conectores (por un lado, por otro, sin embargo, en definitiva…).',
        'Por un lado, el teletrabajo permite conciliar mejor; por otro, puede aislarnos. Sin embargo, combinado con algunos días de oficina, en definitiva me parece positivo.',
        'Structurer : por un lado, por otro, sin embargo, en definitiva.', { kc: 'es.c1.grammar.additive_reformulation', keywords: [['por un lado', 'por otro', 'sin embargo', 'no obstante', 'en definitiva', 'asimismo', 'por consiguiente']], minWords: 18, d: 2.0 })
      .build(),
  ),
  'es-c1-expresiones': assessment(
    exercises('cp-es-c1-expresiones', 'C1', { kc: 'es.c1.vocabulary.verb_idioms' })
      .mcq('Cuando vio la factura del taller, se quedó de ___.', ['piedra', 'madera', 'papel'], 0, 'quedarse de piedra = rester sidéré.', { d: 1.5 })
      .mcq('Si alguien «no tiene pelos en la lengua», …', ['dice lo que piensa sin rodeos', 'habla muy poco', 'miente a menudo'], 0, 'no tener pelos en la lengua = parler franchement.', { kc: 'es.c1.vocabulary.body_idioms', d: 1.5 })
      .cloze('Estoy ___ las narices de que llegues siempre tarde.', ['hasta'], 'estar hasta las narices de = en avoir assez de.', { kc: 'es.c1.vocabulary.body_idioms', d: 1.5 })
      .tr('Il est arrivé à ses fins.', ['Se salió con la suya.', 'Se ha salido con la suya.', 'Consiguió lo que quería.', 'Logró lo que quería.', 'Ha conseguido lo que quería.'],
        'arriver à ses fins = salirse con la suya.', { d: 1.8 })
      .listen('Me vendieron un móvil «nuevo» que en realidad era de segunda mano: me dieron gato por liebre.', '¿Qué le pasó?', [
        'Lo engañaron con la compra', 'Le regalaron un gato', 'Compró un móvil muy barato',
      ], 0, 'dar gato por liebre = tromper sur la marchandise.', { kc: 'es.c1.vocabulary.food_animal_idioms', d: 1.6 })
      .say('Il a réussi l’examen de justesse.', ['Aprobó el examen por los pelos.', 'Ha aprobado el examen por los pelos.', 'Aprobó por los pelos.', 'Ha aprobado por los pelos.', 'Aprobó el examen por muy poco.', 'Aprobó el examen de milagro.'],
        'de justesse = por los pelos.', { kc: 'es.c1.vocabulary.adverbial_locutions', d: 1.6 })
      .answer('¿Qué tarea te parece pan comido y cuál te cuesta un ojo de la cara, en dinero o en esfuerzo?',
        'Cocinar para mí es pan comido, pero arreglar el coche me cuesta un ojo de la cara, así que siempre le pido a mi hermano que me eche una mano.',
        'Expressions : ser pan comido, costar un ojo de la cara, echar una mano.', { kc: 'es.c1.vocabulary.food_animal_idioms', keywords: [['pan comido', 'ojo de la cara', 'una mano', 'por los pelos']], minWords: 18, d: 1.9 })
      .build(),
  ),
  'es-c1-argumentar': assessment(
    exercises('cp-es-c1-argumentar', 'C1', { kc: 'es.c1.function.refuting' })
      .mcq('No es cierto que los jóvenes ___ menos que antes.', ['lean', 'leen', 'leerán'], 0, 'no es cierto que + subjonctif.', { d: 1.5 })
      .mcq('No lo dijo por maldad, ___ por despiste.', ['sino', 'pero', 'sino que'], 0, 'Correction sans verbe conjugué → sino.', { kc: 'es.c1.grammar.sino_pero', d: 1.5 })
      .cloze('Es evidente que la situación ___ mejorado, aunque queda mucho por hacer.', ['ha'], 'Certitude (es evidente que) → indicatif : ha mejorado.', { kc: 'es.c1.function.hedging', hint: 'haber', d: 1.6 })
      .tr('Bien qu’il soit cher, ce restaurant vaut la peine.', alt(['Si bien es caro, ', 'Aunque es caro, ', 'A pesar de que es caro, ', 'A pesar de ser caro, '], ['este restaurante merece la pena.', 'este restaurante vale la pena.']),
        'Fait admis → si bien / aunque + indicatif.', { kc: 'es.c1.function.conceding', d: 1.7 })
      .listen('Lejos de solucionar el problema, la nueva normativa lo ha agravado: ahora hay todavía más atascos.', '¿Qué ha provocado la normativa?', [
        'Ha empeorado el problema', 'Ha solucionado el problema', 'No ha tenido ningún efecto',
      ], 0, 'lejos de solucionar = loin de résoudre.', { d: 1.6 })
      .say('Ça ne me dérange pas du tout.', ['No me molesta en absoluto.', 'No me molesta para nada.', 'No me molesta nada.', 'No me importa en absoluto.', 'No me importa nada.', 'No me importa para nada.'],
        'pas du tout → en absoluto, nada, para nada.', { d: 1.5 })
      .answer('¿Prohibirías los coches en el centro de las ciudades? Argumenta concediendo algo a la postura contraria.',
        'Si bien es cierto que muchos comerciantes temen perder clientes, a mi juicio habría que prohibirlos, porque el aire sería más limpio y las calles más agradables.',
        'Concession (si bien es cierto que) puis opinion (a mi juicio).', {
          kc: 'es.c1.function.conceding', keywords: [['si bien', 'es cierto que', 'es verdad que', 'reconozco que'], ['a mi juicio', 'en mi opinión', 'desde mi punto de vista', 'creo que', 'a mi entender']], minWords: 20, d: 2.1,
        })
      .build(),
  ),
  'es-c1-enfasis': assessment(
    exercises('cp-es-c1-enfasis', 'C1', { kc: 'es.c1.grammar.cleft_sentences' })
      .mcq('Fue en 1992 ___ Barcelona acogió los Juegos Olímpicos.', ['cuando', 'que', 'donde'], 0, 'Temps mis en relief → cuando.', { d: 1.5 })
      .cloze('No te imaginas lo ___ que estaban los niños con los regalos.', ['contentos', 'felices', 'ilusionados', 'emocionados'], 'lo + adjectif accordé + que.', { kc: 'es.c1.grammar.lo_adjective_que', hint: 'contents', d: 1.7 })
      .cloze('Ese libro ya ___ he leído.', ['lo'], 'Objet en tête → reprise par lo.', { kc: 'es.c1.grammar.clitic_dislocation', d: 1.5 })
      .tr('Le plus curieux, c’est que personne n’a rien vu.', alt(['Lo más curioso ', 'Lo curioso '], ['es que nadie vio nada.', 'es que nadie ha visto nada.']),
        'lo (más) + adjectif : lo más curioso.', { kc: 'es.c1.grammar.neuter_lo_adjective', d: 1.6 })
      .listen('Lo que más me gustó del viaje no fueron los monumentos, sino la gente: todo el mundo era amabilísimo.', '¿Qué fue lo que más le gustó?', [
        'La gente', 'Los monumentos', 'La comida',
      ], 0, 'Pseudo-clivée : lo que más me gustó… la gente.', { d: 1.5 })
      .dictation('A mi hermano no lo veo desde Navidad.', 'a mi hermano… lo : reprise obligatoire.', { kc: 'es.c1.grammar.clitic_dislocation', d: 1.6 })
      .say('C’est elle qui a tout organisé.', ['Fue ella quien lo organizó todo.', 'Fue ella la que lo organizó todo.', 'Ha sido ella quien lo ha organizado todo.', 'Ha sido ella la que lo ha organizado todo.', 'Fue ella quien organizó todo.', 'Ha sido ella quien ha organizado todo.', 'Es ella quien lo ha organizado todo.'],
        'Clivée : fue ella quien…', { d: 1.6 })
      .build(),
  ),
  'es-c1-oraciones': assessment(
    exercises('cp-es-c1-oraciones', 'C1', { kc: 'es.c1.grammar.absolute_participle' })
      .mcq('___ las maletas, salimos hacia el aeropuerto.', ['Hechas', 'Hecho', 'Haciendo'], 0, 'Participe absolu accordé avec las maletas : hechas.', { d: 1.6 })
      .cloze('Le despidieron por no ___ cumplido los objetivos.', ['haber'], 'por (no) haber + participe : cause antérieure.', { kc: 'es.c1.grammar.compound_infinitive', d: 1.5 })
      .cloze('___ el éxito de la primera edición, decidieron repetir la experiencia.', ['Visto', 'Habiendo visto'], 'Participe absolu (visto el éxito) ou gérondif composé.', { d: 1.8 })
      .tr('En arrivant à la gare, j’ai vu que le train était parti.', alt(['Al llegar a la estación, '], ['vi que el tren se había ido.', 'vi que el tren ya se había ido.', 'vi que el tren había salido.', 'vi que el tren ya había salido.', 'me di cuenta de que el tren se había ido.', 'me di cuenta de que el tren había salido.']),
        'en arrivant → al llegar.', { kc: 'es.c1.grammar.infinitive_constructions', d: 1.6 })
      .listen('De haber sabido que había huelga de metro, habría salido de casa mucho antes.', '¿Qué quiere decir el hablante?', [
        'Que no sabía lo de la huelga y salió tarde', 'Que salió antes por la huelga', 'Que no había huelga',
      ], 0, 'de haber sabido = si j’avais su (irréel du passé).', { kc: 'es.c1.grammar.compound_infinitive', d: 1.8 })
      .say('Une fois le problème résolu, nous pourrons continuer.', alt(['Una vez resuelto el problema, ', 'Resuelto el problema, ', 'Una vez solucionado el problema, ', 'Solucionado el problema, '], ['podremos continuar.', 'podremos seguir.']),
        'Participe absolu : resuelto el problema.', { d: 1.7 })
      .answer('¿Qué haces nada más llegar a casa después del trabajo o de clase?',
        'Nada más llegar a casa, me quito los zapatos y, después de haber descansado un rato, preparo la cena mientras escucho la radio.',
        'nada más + infinitif, después de haber + participe.', { kc: 'es.c1.grammar.infinitive_constructions', keywords: [['nada más', 'al llegar', 'después de haber', 'tras haber', 'al entrar']], minWords: 18, d: 1.9 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_C1: Record<string, string[]> = {
  'es-c1-subjuntivo': ['Je peux choisir entre indicatif et subjonctif dans les cas délicats (opinion niée, verbes à double sens).', 'Je peux exprimer l’indifférence et la généralisation (quienquiera que, pase lo que pase).'],
  'es-c1-probabilidad': ['Je peux faire des suppositions sur le présent et le passé avec le futur et le conditionnel.', 'Je peux concéder un point avec le futur concessif et parler d’actions achevées dans l’avenir.'],
  'es-c1-registro': ['Je peux rédiger une lettre ou un courriel formel avec les formules adaptées.', 'Je peux comprendre et formuler des demandes administratives polies.'],
  'es-c1-coherencia': ['Je peux enchaîner mes idées avec des connecteurs d’opposition, de conséquence et de reformulation.', 'Je peux écrire dans un style dense et soutenu grâce à la nominalisation.'],
  'es-c1-expresiones': ['Je peux comprendre et employer les expressions idiomatiques les plus courantes en Espagne.', 'Je peux nuancer un récit avec des locutions adverbiales.'],
  'es-c1-argumentar': ['Je peux défendre une opinion nuancée et concéder un point à mon interlocuteur.', 'Je peux réfuter un argument avec élégance (nada más lejos, no es que…, sino que…).'],
  'es-c1-enfasis': ['Je peux mettre en relief une idée avec lo + adjectif et les phrases clivées.', 'Je peux placer un complément en tête de phrase avec la reprise pronominale correcte.'],
  'es-c1-oraciones': ['Je peux condenser mes phrases avec le participe absolu, le gérondif et l’infinitif composé.', 'Je peux exprimer le temps, la cause et la condition avec al, nada más, de ou con + infinitif.'],
};
