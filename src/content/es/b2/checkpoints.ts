import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';

const exercises = makeExercises('es');

const IMPF_FORMS = [
  'llegara', 'llegase', 'hiciera', 'hiciese', 'fuera', 'fuese', 'preguntara', 'preguntase', 'tuviera', 'tuviese', 'estudiara', 'estudiase',
  'leyera', 'leyese', 'ayudara', 'ayudase', 'trabajara', 'trabajase', 'aprendiera', 'aprendiese', 'llevara', 'llevase',
];

/**
 * Défis de fin d'unité B2 : items d'évaluation inédits (jamais repris des leçons).
 * Ajouter les nouveaux items à la fin de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_B2: Record<string, Exercise[]> = {
  'es-b2-subjuntivo': assessment(
    exercises('cp-es-b2-subjuntivo', 'B2', { kc: 'es.b2.grammar.imperfect_subjunctive' })
      .mcq('Le pedí al camarero que nos ___ la cuenta.', ['trajera', 'traiga', 'traía'], 0, 'pedí (passé) → subjonctif imparfait : trajera.', { kc: 'es.b2.grammar.sequence_of_tenses', d: 0.6 })
      .cloze('Me sorprende que todavía no ___ la noticia.', ['hayáis oído'], 'Sentiment + fait accompli → subjonctif passé : hayáis oído.', { kc: 'es.b2.grammar.perfect_subjunctive', hint: 'oír, vosotros', d: 0.8 })
      .cloze('Habla de París como si ___ allí toda la vida.', ['hubiera vivido', 'hubiese vivido'], 'como si + subjonctif plus-que-parfait pour un fait antérieur.', { kc: 'es.b2.grammar.ojala_como_si', hint: 'vivir', d: 1.0 })
      .tr('Je voudrais que tu m’aides.', [
        'Me gustaría que me ayudaras.', 'Me gustaría que me ayudases.', 'Quisiera que me ayudaras.', 'Quisiera que me ayudases.',
        'Querría que me ayudaras.', 'Querría que me ayudases.', 'Quiero que me ayudes.',
      ], 'me gustaría / quisiera + subjonctif imparfait.', { kc: 'es.b2.grammar.sequence_of_tenses', d: 0.7 })
      .listen('Mi jefe me dijo que no hacía falta que fuera a la reunión, así que me quedé terminando el informe.', '¿Qué hizo después de hablar con su jefe?', [
        'Se quedó terminando el informe', 'Fue a la reunión', 'Se fue a casa',
      ], 0, 'no hacía falta que fuera : concordance au passé.', { kc: 'es.b2.grammar.sequence_of_tenses', d: 0.7 })
      .say('J’espère que vous avez passé de bonnes vacances.', [
        'Espero que hayáis pasado unas buenas vacaciones.', 'Espero que hayáis pasado buenas vacaciones.', 'Espero que hayáis tenido unas buenas vacaciones.',
        'Espero que haya pasado unas buenas vacaciones.', 'Espero que hayan pasado unas buenas vacaciones.', 'Espero que hayáis disfrutado de las vacaciones.',
      ], 'esperar que + subjonctif passé : hayáis pasado.', { kc: 'es.b2.grammar.perfect_subjunctive', d: 0.6 })
      .answer('¿Qué te pidieron o te recomendaron en tu primer trabajo o en tu primer día de clase?', 'En mi primer trabajo, mi jefa me pidió que llegara puntual y me recomendó que hiciera muchas preguntas.',
        'pidió que / recomendó que + subjonctif imparfait.', { kc: 'es.b2.grammar.sequence_of_tenses', keywords: [IMPF_FORMS], minWords: 12, d: 0.9 })
      .build(),
  ),
  'es-b2-hipotesis': assessment(
    exercises('cp-es-b2-hipotesis', 'B2', { kc: 'es.b2.grammar.past_unreal_conditional' })
      .mcq('Si ___ más cuidado, no te habrías caído.', ['hubieras tenido', 'habrías tenido', 'habías tenido'], 0, 'Après si : subjonctif plus-que-parfait.', { d: 0.6 })
      .cloze('Si no hubiéramos perdido el vuelo, ahora ___ en la playa.', ['estaríamos'], 'Condition passée, conséquence présente → conditionnel simple.', { kc: 'es.b2.grammar.mixed_conditionals', hint: 'estar', d: 0.7 })
      .cloze('De ___ antes, habrías conseguido entradas.', ['haber llegado'], 'de + infinitif passé = si hubieras llegado.', { kc: 'es.b2.grammar.de_infinitive_reproach', hint: 'llegar, infinitif passé', d: 1.0 })
      .tr('Si elle avait étudié le droit, elle serait avocate aujourd’hui.', [
        'Si hubiera estudiado Derecho, hoy sería abogada.', 'Si hubiese estudiado Derecho, hoy sería abogada.', 'Si hubiera estudiado Derecho, ahora sería abogada.',
        'Si hubiese estudiado Derecho, ahora sería abogada.', 'Si hubiera estudiado Derecho, sería abogada hoy.', 'Si ella hubiera estudiado Derecho, hoy sería abogada.',
        'Hoy sería abogada si hubiera estudiado Derecho.',
      ], 'Passé → présent : si hubiera estudiado, hoy sería.', { kc: 'es.b2.grammar.mixed_conditionals', d: 0.9 })
      .listen('Si me hubieran avisado del atasco, habría cogido el tren. Pero nadie me dijo nada y llegué una hora tarde.', '¿Qué habría hecho si hubiera sabido lo del atasco?', [
        'Coger el tren', 'Salir más tarde', 'Quedarse en casa',
      ], 0, 'habría cogido el tren : conséquence irréelle passée.', { d: 0.7 })
      .dictation('Si hubiéramos reservado antes, habríamos encontrado sitio.', 'hubiéramos reservado / habríamos encontrado.', { d: 0.8 })
      .say('Tu aurais dû partir plus tôt.', [
        'Deberías haber salido antes.', 'Tendrías que haber salido antes.', 'Deberías haberte ido antes.', 'Tendrías que haberte ido antes.',
        'Te deberías haber ido antes.', 'Te tendrías que haber ido antes.', 'Deberías haber salido más temprano.', 'Tendrías que haber salido más temprano.',
      ], 'Reproche : deberías / tendrías que + haber + participe.', { kc: 'es.b2.grammar.de_infinitive_reproach', d: 0.8 })
      .build(),
  ),
  'es-b2-temporales': assessment(
    exercises('cp-es-b2-temporales', 'B2', { kc: 'es.b2.grammar.temporal_subjunctive' })
      .mcq('Te devolveré el libro en cuanto lo ___.', ['termine', 'termino', 'terminaré'], 0, 'en cuanto + futur → subjonctif.', { d: 0.5 })
      .mcq('Necesito un ordenador que ___ rápido y no muy caro.', ['sea', 'es', 'será'], 0, 'Objet recherché → subjonctif : sea.', { kc: 'es.b2.grammar.relative_subjunctive', d: 0.5 })
      .cloze('Antes de que ___, quiero enseñaros una cosa.', ['os vayáis', 'os marchéis'], 'antes de que → toujours subjonctif.', { kc: 'es.b2.grammar.subjunctive_conjunctions', hint: 'irse, vosotros', d: 0.8 })
      .cloze('Cuando ___ joven, salía todas las noches.', ['era'], 'Passé → indicatif : era.', { hint: 'ser, yo', d: 0.5 })
      .tr('Tu peux venir quand tu veux.', ['Puedes venir cuando quieras.', 'Tú puedes venir cuando quieras.', 'Ven cuando quieras.'],
        'cuando quieras = quand tu veux (n’importe quand) → subjonctif.', { kc: 'es.b2.grammar.free_relative_subjunctive', d: 0.5 })
      .listen('Busco a alguien que pueda cuidar a mi perro este fin de semana, porque me voy a Asturias y no conozco a nadie en el barrio que tenga tiempo.', '¿Qué necesita?', [
        'Alguien que cuide de su perro', 'Un piso en Asturias', 'Un compañero de viaje',
      ], 0, 'alguien que pueda, nadie que tenga : antécédents indéterminés → subjonctif.', { kc: 'es.b2.grammar.relative_subjunctive', d: 0.8 })
      .say('Dès que j’arriverai, je t’enverrai un message.', [
        'En cuanto llegue, te mandaré un mensaje.', 'En cuanto llegue, te enviaré un mensaje.', 'En cuanto llegue, te mando un mensaje.', 'En cuanto llegue, te envío un mensaje.',
        'Tan pronto como llegue, te mandaré un mensaje.', 'Tan pronto como llegue, te enviaré un mensaje.', 'Nada más llegar, te mandaré un mensaje.',
        'En cuanto llegue, te escribiré.', 'En cuanto llegue, te escribo.', 'Te mandaré un mensaje en cuanto llegue.',
      ], 'en cuanto + subjonctif (llegue), jamais de futur.', { d: 0.6 })
      .build(),
  ),
  'es-b2-estilo-indirecto': assessment(
    exercises('cp-es-b2-estilo-indirecto', 'B2', { kc: 'es.b2.grammar.reported_statements' })
      .mcq('«Mañana no vendré», nos dijo. → Nos dijo que ___ no iría.', ['al día siguiente', 'mañana', 'ayer'], 0, 'mañana → al día siguiente.', { kc: 'es.b2.grammar.reported_deixis', d: 0.6 })
      .cloze('«¿Habéis cenado ya?», nos preguntó. → Nos preguntó si ___ ya.', ['habíamos cenado'], 'Perfecto → plus-que-parfait : habíamos cenado.', { kc: 'es.b2.grammar.reported_questions', d: 0.7 })
      .cloze('«No toquéis nada», nos dijo el guía. → El guía nos dijo que no ___ nada.', ['tocáramos', 'tocásemos'], 'Ordre au passé → subjonctif imparfait.', { kc: 'es.b2.grammar.reported_commands', d: 0.8 })
      .tr('Il m’a expliqué qu’il ne pourrait pas venir.', [
        'Me explicó que no podría venir.', 'Él me explicó que no podría venir.', 'Me explicó que no iba a poder venir.', 'Me explicó que no podría ir.', 'Me explicó que no iba a poder ir.',
      ], 'Futur dans le passé → conditionnel : podría.', { d: 0.6 })
      .listen('Le pregunté a la farmacéutica qué podía tomar para el dolor de cabeza y me dijo que tomara un ibuprofeno después de comer.', '¿Qué le aconsejó la farmacéutica?', [
        'Tomar un ibuprofeno después de comer', 'Ir al médico', 'Descansar sin tomar nada',
      ], 0, 'me dijo que tomara : ordre / conseil → subjonctif.', { kc: ['es.b2.grammar.reported_questions', 'es.b2.grammar.reported_commands'], d: 0.7 })
      .dictation('Me contó que había vivido en México cuando era niño.', 'había vivido (plus-que-parfait), era (imparfait).', { d: 0.7 })
      .answer('¿Qué te dijo la última persona con la que hablaste por teléfono?', 'Mi madre me dijo que estaba bien y me preguntó si iría a comer el domingo a su casa.',
        'dijo que + imparfait ; preguntó si + conditionnel.', { keywords: [['dijo', 'contó', 'preguntó', 'explicó', 'pidió']], minWords: 12, d: 0.8 })
      .build(),
  ),
  'es-b2-pasiva': assessment(
    exercises('cp-es-b2-pasiva', 'B2', { kc: 'es.b2.grammar.passive_ser' })
      .mcq('Las obras ___ por el arquitecto en 2019.', ['fueron terminadas', 'estuvieron terminadas', 'fueron terminados'], 0, 'Passif (ser) et accord au féminin pluriel : fueron terminadas.', { d: 0.6 })
      .mcq('En esta oficina ___ a dos personas para el departamento de ventas.', ['se busca', 'se buscan', 'se buscamos'], 0,
        'Devant une personne précédée de a, se impersonnel au singulier : se busca a dos personas (sans a : se buscan dos personas).', { kc: 'es.b2.grammar.impersonal_se', d: 1.0 })
      .cloze('Cuando llegué al museo, ya ___ cerrado.', ['estaba'], 'État résultant → estar : estaba cerrado.', { kc: 'es.b2.grammar.estar_participle', hint: 'ser ou estar', d: 0.5 })
      .tr('On a construit un nouveau pont.', [
        'Se ha construido un nuevo puente.', 'Se ha construido un puente nuevo.', 'Se construyó un nuevo puente.', 'Se construyó un puente nuevo.',
        'Han construido un nuevo puente.', 'Han construido un puente nuevo.', 'Construyeron un nuevo puente.', 'Construyeron un puente nuevo.',
      ], 'Passive réfléchie (se ha construido) ou 3e personne du pluriel.', { kc: 'es.b2.grammar.passive_se', d: 0.6 })
      .listen('Se informa a los clientes de que la tienda permanecerá cerrada el próximo lunes por inventario.', '¿Por qué cerrará la tienda?', ['Por inventario', 'Por vacaciones', 'Por obras'], 0,
        'Se informa a los clientes : formule impersonnelle.', { kc: 'es.b2.grammar.impersonal_se', d: 0.7 })
      .say('Ici, on mange très bien.', ['Aquí se come muy bien.', 'Se come muy bien aquí.', 'Aquí uno come muy bien.', 'Aquí comemos muy bien.'],
        'se impersonnel : se come.', { kc: 'es.b2.grammar.impersonal_se', d: 0.5 })
      .answer('¿Qué se puede hacer en tu ciudad un domingo?', 'En mi ciudad se puede pasear por el río, se visitan los museos gratis y se come en las terrazas de la plaza.',
        'se puede, se visitan (museos, pluriel), se come.', { kc: 'es.b2.grammar.passive_se', keywords: [['se']], minWords: 12, d: 0.7 })
      .build(),
  ),
  'es-b2-perifrasis': assessment(
    exercises('cp-es-b2-perifrasis', 'B2', { kc: 'es.b2.grammar.llevar_gerund' })
      .mcq('¿Cuánto tiempo ___ trabajando en esta empresa?', ['llevas', 'haces', 'sigues'], 0, 'Durée → llevar + gérondif.', { d: 0.5 })
      .cloze('El bebé ___ a punto de dormirse cuando sonó el teléfono.', ['estaba'], 'estar a punto de, à l’imparfait (décor).', { kc: 'es.b2.grammar.phase_periphrases', d: 0.6 })
      .cloze('Ya te lo he dicho mil veces: no ___ a llegar tarde.', ['vuelvas'], 'Impératif négatif de volver a : no vuelvas a.', { kc: 'es.b2.grammar.volver_a_soler', hint: 'volver', d: 0.7 })
      .tr('Il continue à pleuvoir.', ['Sigue lloviendo.', 'Continúa lloviendo.', 'Todavía está lloviendo.', 'Aún está lloviendo.'], 'seguir / continuar + gérondif.', { kc: 'es.b2.grammar.seguir_gerund', d: 0.5 })
      .listen('Acabo de hablar con Raúl: dice que lleva una semana sin salir de casa porque se ha roto una pierna.', '¿Por qué no sale Raúl de casa?', [
        'Porque se ha roto una pierna', 'Porque tiene mucho trabajo', 'Porque está de mal humor',
      ], 0, 'lleva una semana sin salir ; acabo de hablar.', { kc: ['es.b2.grammar.llevar_gerund', 'es.b2.grammar.phase_periphrases'], d: 0.6 })
      .dictation('Cuando vio el precio, se puso a reír.', 'ponerse a + infinitif.', { kc: 'es.b2.grammar.phase_periphrases', d: 0.6 })
      .say('Je viens de finir mes études.', [
        'Acabo de terminar mis estudios.', 'Acabo de terminar los estudios.', 'Acabo de terminar la carrera.', 'Acabo de terminar de estudiar.', 'Acabo de finalizar mis estudios.',
      ], 'venir de → acabar de + infinitif.', { kc: 'es.b2.grammar.phase_periphrases', d: 0.6 })
      .build(),
  ),
  'es-b2-concesivas': assessment(
    exercises('cp-es-b2-concesivas', 'B2', { kc: 'es.b2.grammar.aunque_mood' })
      .mcq('___ de que estaba agotado, siguió trabajando.', ['A pesar', 'Aunque', 'Por mucho'], 0, 'a pesar de que + verbe conjugué.', { kc: 'es.b2.grammar.concessive_connectors', d: 0.5 })
      .cloze('Te acompaño, a no ser que ___ ir solo.', ['prefieras'], 'a no ser que → subjonctif : prefieras.', { kc: 'es.b2.grammar.negative_conditional_connectors', hint: 'preferir, tú', d: 0.6 })
      .cloze('Aunque me lo ___ mil veces, no te creería.', ['juraras', 'jurases'], 'Hypothèse peu probable → aunque + subjonctif imparfait.', { hint: 'jurar, tú', d: 0.9 })
      .tr('Je te prête ma voiture à condition que tu me la rendes demain.', [
        'Te presto mi coche con tal de que me lo devuelvas mañana.', 'Te dejo mi coche con tal de que me lo devuelvas mañana.', 'Te presto mi coche siempre que me lo devuelvas mañana.',
        'Te dejo mi coche siempre que me lo devuelvas mañana.', 'Te presto el coche con tal de que me lo devuelvas mañana.', 'Te dejo el coche con tal de que me lo devuelvas mañana.',
        'Te presto el coche siempre que me lo devuelvas mañana.', 'Te dejo el coche siempre que me lo devuelvas mañana.', 'Te dejo el coche a condición de que me lo devuelvas mañana.',
        'Te presto mi coche a condición de que me lo devuelvas mañana.', 'Te dejo el coche siempre y cuando me lo devuelvas mañana.', 'Te dejo mi coche siempre y cuando me lo devuelvas mañana.',
      ], 'con tal de que + subjonctif ; voiture = el coche (masculin) → me lo devuelvas.', { kc: 'es.b2.grammar.conditional_connectors', d: 0.8 })
      .listen('Aunque el hotel estaba lejos del centro, el desayuno era buenísimo y el personal muy amable, así que volveremos.', '¿Volverán al hotel?', [
        'Sí, a pesar de que estaba lejos del centro', 'No, porque estaba lejos del centro', 'No, porque el desayuno era malo',
      ], 0, 'aunque estaba lejos : fait réel → indicatif.', { d: 0.6 })
      .say('Même s’il fait froid, nous sortirons.', [
        'Aunque haga frío, saldremos.', 'Aunque haga frío, vamos a salir.', 'Saldremos aunque haga frío.', 'Vamos a salir aunque haga frío.', 'Aunque haga frío, salimos.',
      ], '« même si » → aunque + subjonctif : haga.', { d: 0.6 })
      .answer('¿Qué cosas haces aunque no te gusten?', 'Aunque no me guste nada, voy al dentista cada año y, aunque me aburra, plancho la ropa los domingos.',
        'aunque + subjonctif pour un fait jugé sans importance.', { keywords: [['aunque']], minWords: 12, d: 0.8 })
      .build(),
  ),
  'es-b2-cambio': assessment(
    exercises('cp-es-b2-cambio', 'B2', { kc: 'es.b2.vocabulary.change_ponerse_quedarse' })
      .mcq('Cuando se enteró de la noticia, ___ blanco como la pared.', ['se puso', 'se hizo', 'se convirtió'], 0, 'Couleur passagère → ponerse.', { d: 0.5 })
      .mcq('Con tantos problemas, me voy a ___ loco.', ['volver', 'hacer', 'poner a'], 0, 'devenir fou → volverse loco.', { kc: 'es.b2.vocabulary.change_volverse_hacerse', d: 0.6 })
      .cloze('Después de la crisis, muchos se ___ sin trabajo.', ['quedaron'], 'Situation subie → quedarse sin trabajo.', { hint: 'quedarse', d: 0.6 })
      .cloze('Barcelona se ha ___ en una de las ciudades más visitadas de Europa.', ['convertido'], 'convertirse en + nom.', { kc: 'es.b2.vocabulary.change_convertirse_llegar', d: 0.6 })
      .tr('Notre fils est devenu très timide.', ['Nuestro hijo se ha vuelto muy tímido.', 'Nuestro hijo se volvió muy tímido.'], 'Changement de caractère → volverse.', { kc: 'es.b2.vocabulary.change_volverse_hacerse', d: 0.7 })
      .listen('Vivimos en una casita pequeña, pero tiene un jardín enorme y un perrazo que nos cuida.', '¿Cómo es el perro?', ['Muy grande', 'Muy pequeño', 'Muy viejo'], 0,
        'perrazo : augmentatif en -azo.', { kc: 'es.b2.vocabulary.diminutives_augmentatives', d: 0.6 })
      .say('Il est devenu célèbre très jeune.', [
        'Se hizo famoso muy joven.', 'Se hizo famoso siendo muy joven.', 'Se volvió famoso muy joven.', 'Se hizo célebre muy joven.', 'Llegó a ser famoso muy joven.',
      ], 'Statut → hacerse famoso.', { kc: 'es.b2.vocabulary.change_volverse_hacerse', d: 0.6 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_B2: Record<string, string[]> = {
  'es-b2-subjuntivo': ['Je peux rapporter des souhaits et des demandes passés avec le subjonctif imparfait.', 'Je peux exprimer un sentiment sur un fait accompli, un souhait ou un regret (ojalá, como si).'],
  'es-b2-hipotesis': ['Je peux imaginer ce qui se serait passé si les choses avaient été différentes.', 'Je peux exprimer un regret ou un reproche sur le passé.'],
  'es-b2-temporales': ['Je peux parler d’actions futures avec cuando, en cuanto, antes de que.', 'Je peux décrire ce que je cherche ou ce qui n’existe pas avec le subjonctif.'],
  'es-b2-estilo-indirecto': ['Je peux rapporter ce que quelqu’un a dit, demandé ou ordonné.', 'Je peux adapter les repères de temps et de lieu dans un récit rapporté.'],
  'es-b2-pasiva': ['Je peux comprendre et écrire des phrases au passif dans un texte d’information.', 'Je peux parler de façon impersonnelle avec se, uno ou la 3e personne du pluriel.'],
  'es-b2-perifrasis': ['Je peux dire depuis combien de temps je fais quelque chose et ce que je fais toujours.', 'Je peux exprimer le début, la fin ou la répétition d’une action.'],
  'es-b2-concesivas': ['Je peux nuancer avec aunque, a pesar de que, por mucho que.', 'Je peux poser des conditions et envisager des éventualités.'],
  'es-b2-cambio': ['Je peux décrire des changements de personnes, de lieux et de situations avec le bon verbe.', 'Je peux comprendre et employer les diminutifs et augmentatifs courants.'],
};
