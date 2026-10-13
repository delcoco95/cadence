import type { Exercise } from '../../types';
import { makeExercises } from '../../builders';
import { assessment } from '../../level';
import { alt } from './alt';

const exercises = makeExercises('es');

/**
 * Défis de fin d'unité C2 : items d'évaluation inédits (jamais repris des leçons).
 * Ajouter les nouveaux items à la fin de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C2: Record<string, Exercise[]> = {
  'es-c2-matices': assessment(
    exercises('cp-es-c2-matices', 'C2', { kc: 'es.c2.grammar.epistemic_mood' })
      .mcq('Igual ___ a vernos este fin de semana, si encuentran billete.', ['vienen', 'vengan', 'vinieran'], 0, 'igual (peut-être, familier) + indicatif.', { d: 2.3 })
      .cloze('Hace frío y no hay nadie en la calle: ___ de ser más de las doce.', ['debe', 'deben'], 'deber de + infinitif : supposition.', { kc: 'es.c2.grammar.deber_de', d: 2.4 })
      .tr('Il semblerait que le musée soit fermé lundi.', [
        ...alt(['Al parecer', 'Por lo visto', 'Según parece'], [', el museo cierra el lunes.', ', el museo está cerrado el lunes.']),
        'Parece que el museo cierra el lunes.', 'Parece que el museo está cerrado el lunes.',
      ], 'Évidentiels : al parecer, por lo visto.', { kc: 'es.c2.function.evidentials', d: 2.4 })
      .listen('Quería comentarte una cosilla, si tienes un momento. No es nada grave, pero yo diría que deberíamos revisar el presupuesto.', '¿Cómo plantea el tema la hablante?', [
        'De forma atenuada y prudente', 'De forma brusca y exigente', 'Sin dar importancia al presupuesto',
      ], 0, 'quería, una cosilla, yo diría que : atténuation.', { kc: 'es.c2.function.hedging', d: 2.4 })
      .dictation('Puede que no se hayan enterado todavía de la noticia.', 'puede que + subjonctif passé.', { d: 2.4 })
      .say('Ça coûterait dans les cinquante euros.', ['Vendría a costar unos cincuenta euros.', 'Costaría unos cincuenta euros.', 'Vendrá a costar unos cincuenta euros.', 'Costará unos cincuenta euros.', 'Vendría a costar alrededor de cincuenta euros.'],
        'venir a + infinitif = approximation.', { kc: 'es.c2.function.hedging', d: 2.4 })
      .answer('¿Por qué crees que tu vecino no ha salido de casa en tres días? Haz varias suposiciones con matices distintos.',
        'A lo mejor está de viaje, aunque también puede que esté enfermo. Debe de haber pasado algo, porque siempre saca al perro. Quizá deberíamos llamar a su puerta.',
        'Varie : a lo mejor (indicatif), puede que (subjonctif), deber de.', { kc: ['es.c2.grammar.epistemic_mood', 'es.c2.grammar.deber_de'], keywords: [['a lo mejor', 'igual', 'quizá', 'quizás', 'tal vez'], ['puede que', 'debe de', 'deberíamos', 'es posible que']], minWords: 20, d: 2.7 })
      .build(),
  ),
  'es-c2-literario': assessment(
    exercises('cp-es-c2-literario', 'C2', { kc: 'es.c2.grammar.literary_tenses' })
      .mcq('«En cuanto hubo amanecido, partieron hacia el puerto.» ¿Qué tiempo es «hubo amanecido»?', ['pretérito anterior', 'pretérito pluscuamperfecto de subjuntivo', 'futuro compuesto'], 0, 'hube + participe : pretérito anterior.', { d: 2.4 })
      .cloze('Los dos ancianos se sentaron en ___ sillas, uno frente al otro.', ['sendas'], 'sendas sillas = une chaise chacun.', { kc: 'es.c2.vocabulary.literary_lexis', d: 2.5 })
      .tr('Quiconque enfreindra cette disposition sera sanctionné.', [
        ...alt(['El que ', 'Quien '], ['infringiere ', 'infrinja '], ['esta disposición será sancionado.']),
      ], 'Style juridique : futur du subjonctif (infringiere) ou présent (infrinja).', { kc: 'es.c2.grammar.future_subjunctive', d: 2.7 })
      .listen('Díjole el viejo pescador que el mar, otrora generoso, ya no daba sino penas, mas el muchacho no quiso escucharle.', '¿Qué opinaba el pescador del mar?', [
        'Que antes era generoso y ahora solo trae penas', 'Que siempre había sido cruel', 'Que el muchacho debía hacerse pescador',
      ], 0, 'otrora = jadis ; díjole = le dijo ; mas = pero.', { kc: 'es.c2.reading.literary_style', d: 2.7 })
      .dictation('Volvió a la casa donde naciera su madre, junto al río.', 'naciera : forme en -ra = había nacido.', { d: 2.6 })
      .repeat('Por doquier se extendían los campos dorados de trigo.', 'por doquier = partout ; épithète antéposée.', { kc: 'es.c2.vocabulary.literary_lexis', d: 2.4 })
      .answer('Reescribe en estilo literario esta frase sencilla: «Cuando terminó la guerra, volvió a su pueblo, que estaba destruido».',
        'Apenas hubo terminado la guerra, regresó a su pueblo natal, cuyas viejas casas yacían ahora en ruinas bajo un cielo indiferente.',
        'Pretérito anterior, épithètes antéposées, lexique soutenu.', { kc: ['es.c2.grammar.literary_tenses', 'es.c2.reading.literary_style'], keywords: [['hubo', 'apenas', 'no bien', 'una vez que'], ['yacían', 'viejas', 'cuyas', 'otrora', 'antaño', 'por doquier']], minWords: 18, d: 2.8 })
      .build(),
  ),
  'es-c2-modismos': assessment(
    exercises('cp-es-c2-modismos', 'C2', { kc: 'es.c2.vocabulary.idioms' })
      .mcq('«Con la Navidad, las jugueterías hacen su agosto.» Significa que:', ['ganan mucho dinero', 'cierran en agosto', 'venden juguetes de verano'], 0, 'hacer su agosto = faire de bonnes affaires.', { d: 2.3 })
      .cloze('A caballo regalado no le mires el ___.', ['diente', 'colmillo'], 'A caballo regalado no le mires el diente.', { kc: 'es.c2.vocabulary.proverbs', d: 2.4 })
      .tr('Il a jeté de l’huile sur le feu.', ['Echó leña al fuego.', 'Ha echado leña al fuego.', 'Echó más leña al fuego.', 'Ha echado más leña al fuego.', 'Echó aceite al fuego.'],
        'echar leña al fuego.', { kc: 'es.c2.vocabulary.idiom_equivalents', d: 2.4 })
      .listen('—Mi hermano es fontanero y en su casa gotean todos los grifos. —Ya sabes lo que dicen: en casa del herrero…', '¿Qué quiere decir la segunda hablante?', [
        'Que es normal que un profesional descuide su propia casa', 'Que su hermano debería ser herrero', 'Que los grifos son de mala calidad',
      ], 0, 'Refrán tronqué : en casa del herrero, cuchillo de palo.', { kc: 'es.c2.function.proverb_allusion', d: 2.5 })
      .dictation('No hay que dormirse en los laureles después del primer éxito.', 'dormirse en los laureles = se reposer sur ses lauriers.', { d: 2.4 })
      .say('Il pleut des cordes, c’est le cas de le dire : un temps de chien.', ['Llueve a cántaros, nunca mejor dicho: un tiempo de perros.', 'Está lloviendo a cántaros, nunca mejor dicho: un tiempo de perros.'],
        'llover a cántaros ; hacer un tiempo de perros ; nunca mejor dicho.', { kc: 'es.c2.function.proverb_allusion', d: 2.6 })
      .answer('Un amigo quiere hacer tres másteres a la vez. Aconséjale usando un refrán y un modismo.',
        'Como dice el refrán, quien mucho abarca, poco aprieta. Si te metes en tres másteres a la vez, no vas a dar pie con bola y acabarás agotado.',
        'Refrán exact + modismo conjugué en contexte.', { kc: ['es.c2.vocabulary.proverbs', 'es.c2.vocabulary.idioms'], keywords: [['quien mucho abarca', 'más vale', 'no por mucho', 'del dicho al hecho', 'refrán'], ['pie con bola', 'pagar el pato', 'cerros de úbeda', 'la casa por la ventana', 'tres pies al gato']], minWords: 20, d: 2.7 })
      .build(),
  ),
  'es-c2-periodistico': assessment(
    exercises('cp-es-c2-periodistico', 'C2', { kc: 'es.c2.reading.headlines' })
      .mcq('¿Cuál es un titular de prensa bien formado?', ['Hallada una necrópolis romana en las obras del metro', 'Ha sido hallada ayer una necrópolis romana en las obras del metro por los obreros', 'Unos obreros hallaron ayer, según parece, una necrópolis'], 0, 'Participe sans auxiliaire, aucune information superflue.', { d: 2.3 })
      .cloze('El ministro ___ las acusaciones y anunció que se querellará contra el diario.', ['desmintió', 'negó', 'rechazó'], 'desmentir = démentir.', { kc: 'es.c2.vocabulary.reporting_verbs', d: 2.4 })
      .tr('Malgré la crise, les ventes ont augmenté.', [
        ...alt(['Pese a la crisis, ', 'A pesar de la crisis, '], ['las ventas han aumentado.', 'las ventas aumentaron.', 'las ventas han subido.', 'las ventas subieron.', 'las ventas han crecido.', 'las ventas crecieron.']),
      ], 'pese a + nom.', { kc: 'es.c2.writing.nominal_style', d: 2.3 })
      .listen('Según ha podido saber este diario, la constructora habría pagado comisiones a dos concejales a cambio de la adjudicación de las obras.', '¿Cómo presenta el periodista la información?', [
        'Como no confirmada', 'Como un hecho probado por un juez', 'Como una opinión personal',
      ], 0, 'habría pagado : conditionnel de rumeur.', { kc: 'es.c2.grammar.rumor_conditional', d: 2.5 })
      .dictation('Tras la aprobación del decreto, los sindicatos convocaron una huelga.', 'tras + nom : style nominal.', { kc: 'es.c2.writing.nominal_style', d: 2.4 })
      .repeat('Muere en un accidente de tráfico el presunto cabecilla de la banda.', 'Titre : verbe en tête ; presunto.', { kc: 'es.c2.grammar.rumor_conditional', d: 2.4 })
      .answer('Redacta un breve párrafo periodístico sobre una inundación (inventada): un titular y dos frases con verbos introductores.',
        'Titular: «Graves inundaciones en Riofrío». La alcaldesa aseguró que no hay heridos, aunque reconoció que decenas de familias han tenido que abandonar sus casas.',
        'Titre nominal + verbes introducteurs nuancés.', { kc: ['es.c2.reading.headlines', 'es.c2.vocabulary.reporting_verbs'], keywords: [['titular', 'inundaciones', 'inundación'], ['aseguró', 'afirmó', 'reconoció', 'advirtió', 'señaló', 'matizó', 'denunció']], minWords: 20, d: 2.6 })
      .build(),
  ),
  'es-c2-academico': assessment(
    exercises('cp-es-c2-academico', 'C2', { kc: 'es.c2.writing.academic_impersonal' })
      .mcq('Choisis la phrase correcte :', ['Se recogieron muestras en tres regiones.', 'Se recogió muestras en tres regiones.', 'Se recogieron a muestras en tres regiones.'], 0, 'Passive réfléchie : accord avec muestras.', { d: 2.3 })
      .cloze('No cabe duda ___ que el cambio climático afecta a la agricultura.', ['de'], 'no cabe duda de que : de obligatoire.', { kc: 'es.c2.grammar.dequeismo', d: 2.4 })
      .tr('À la lumière de ces données, il convient de nuancer la conclusion.', [
        ...alt(['A la luz de estos datos, ', 'A la luz de dichos datos, ', 'A tenor de estos datos, '], ['conviene matizar la conclusión.', 'cabe matizar la conclusión.', 'es preciso matizar la conclusión.']),
      ], 'a la luz de ; conviene / cabe + infinitif.', { kc: 'es.c2.function.academic_connectors', d: 2.5 })
      .listen('Si bien los resultados son prometedores, queda por dilucidar si el efecto se mantiene a largo plazo. En suma, se requieren nuevos estudios.', '¿Qué concluye la investigadora?', [
        'Que hacen falta más investigaciones', 'Que el efecto está demostrado a largo plazo', 'Que los resultados son negativos',
      ], 0, 'queda por dilucidar, en suma, se requieren nuevos estudios.', { kc: 'es.c2.writing.citing_concluding', d: 2.5 })
      .dictation('En aras de la claridad, se han omitido algunos detalles técnicos.', 'en aras de + nom abstrait.', { kc: 'es.c2.function.academic_connectors', d: 2.4 })
      .say('Je me suis rendu compte que l’échantillon était trop petit.', ['Me di cuenta de que la muestra era demasiado pequeña.', 'Me he dado cuenta de que la muestra era demasiado pequeña.', 'Me di cuenta de que la muestra era muy pequeña.', 'Me di cuenta de que la muestra era demasiado reducida.'],
        'darse cuenta de que (pas de queísmo).', { kc: 'es.c2.grammar.dequeismo', d: 2.4 })
      .answer('Resume en estilo académico la tesis de un autor (inventado) sobre el uso de los móviles en clase y matízala.',
        'Como sostiene Ortiz (2022), el móvil en el aula reduce la concentración. Cabe matizar, no obstante, que su uso guiado puede favorecer el aprendizaje. En suma, el problema no es la herramienta, sino su uso.',
        'Citation, impersonnel (cabe), conclusion.', { kc: ['es.c2.writing.citing_concluding', 'es.c2.writing.academic_impersonal'], keywords: [['como sostiene', 'como señala', 'según', 'en palabras de'], ['cabe', 'conviene', 'es preciso', 'en suma', 'en definitiva']], minWords: 22, d: 2.7 })
      .build(),
  ),
  'es-c2-coloquial': assessment(
    exercises('cp-es-c2-coloquial', 'C2', { kc: 'es.c2.function.discourse_markers' })
      .mcq('—¿Te ha gustado el concierto? —¡Qué va! Significa:', ['No, en absoluto.', 'Sí, muchísimo.', 'No lo sé todavía.'], 0, 'qué va = pas du tout.', { d: 2.2 })
      .cloze('En México dirían «jugo»; en España pedimos un ___ de naranja.', ['zumo'], 'jugo (Amérique) = zumo (Espagne).', { kc: 'es.c2.listening.latam_variants', d: 2.2 })
      .tr('Ce boulot est minable, mais il paie bien.', [
        ...alt(['Este curro es ', 'El curro es ', 'Este trabajo es '], ['muy cutre', 'cutre', 'un poco cutre'], [', pero se paga bien.', ', pero pagan bien.', ', pero está bien pagado.']),
      ], 'el curro, cutre : registre familier.', { kc: 'es.c2.vocabulary.colloquial_spain', d: 2.5 })
      .listen('Boludo, ¿vos viste el partido de anoche? No sabés lo que fue, un golazo en el último minuto.', '¿Qué rasgo indica que el hablante es rioplatense?', [
        'El voseo: vos viste, no sabés', 'El uso de vosotros', 'El uso del pretérito perfecto',
      ], 0, 'vos viste, no sabés : voseo du Río de la Plata.', { kc: 'es.c2.grammar.voseo_ustedes', d: 2.5 })
      .dictation('O sea, que al final no venís ninguno, ¿no?', 'o sea que ; vosotros venís (Espagne).', { d: 2.4 })
      .repeat('Venga, vale, quedamos a las ocho en la puerta del cine.', 'venga, vale, quedar.', { d: 2.2 })
      .answer('Cuenta de manera coloquial, como a un amigo, algo que te pasó el fin de semana.',
        'Pues nada, tío, que el sábado fui a un concierto y, es que no te lo vas a creer, me encontré a mi exjefe bailando como un loco. O sea, flipé en colores.',
        'Marqueurs (pues nada, es que, o sea) et lexique familier.', { kc: ['es.c2.function.discourse_markers', 'es.c2.vocabulary.colloquial_spain'], keywords: [['pues', 'es que', 'o sea', 'venga', 'vale'], ['tío', 'tía', 'flipé', 'mola', 'guay', 'curro', 'pasta', 'mogollón']], minWords: 20, d: 2.6 })
      .build(),
  ),
  'es-c2-retorica': assessment(
    exercises('cp-es-c2-retorica', 'C2', { kc: 'es.c2.function.irony' })
      .mcq('Llegas empapado y tu amiga dice: «¡Qué buen día para ir a la playa!». Es:', ['ironía', 'una metonimia', 'una pregunta retórica'], 0, 'Dire le contraire de ce qu’on pense : ironie.', { d: 2.2 })
      .cloze('El examen no fue ___ fácil: suspendió media clase.', ['precisamente', 'nada'], 'Litote : no fue precisamente fácil.', { kc: 'es.c2.function.understatement', d: 2.4 })
      .tr('Après tout ce que j’ai fait pour toi !', ['¡Con lo que yo he hecho por ti!', '¡Con todo lo que he hecho por ti!', '¡Con lo que he hecho por ti!', '¡Después de todo lo que he hecho por ti!', '¡Con todo lo que yo he hecho por ti!'],
        'con lo que… : reproche.', { kc: 'es.c2.function.implicature', d: 2.4 })
      .listen('El alcalde lo ha dicho bien claro: no subirá los impuestos. Ya, claro. Como el año pasado, ¿no?', '¿Qué actitud tiene el hablante?', [
        'No se cree la promesa', 'Confía plenamente en el alcalde', 'Está contento con la subida',
      ], 0, 'Ya, claro + rappel ironique : incrédulité.', { d: 2.4 })
      .dictation('¿Acaso no merecemos todos una segunda oportunidad?', 'Question rhétorique avec acaso.', { kc: 'es.c2.reading.rhetorical_figures', d: 2.4 })
      .say('Je dis ça, je dis rien, mais il est encore en retard.', ['Yo no digo nada, pero otra vez llega tarde.', 'Yo no digo nada, pero vuelve a llegar tarde.', 'Yo no digo nada, pero ya llega tarde otra vez.', 'No digo nada, pero otra vez llega tarde.'],
        'Yo no digo nada, pero… : sous-entendu.', { kc: 'es.c2.function.implicature', d: 2.4 })
      .answer('Tu jefe te pide trabajar el domingo «porque así te diviertes más». Responde (por escrito) con ironía educada.',
        '¡Hombre, qué detalle! Menudo plan me ofrece, con lo que me aburren los domingos en familia. Nada, tú verás: si me lo paga el doble, igual hasta me divierto.',
        'Ironie (qué detalle, menudo plan) et sous-entendu (tú verás, con lo que).', { kc: ['es.c2.function.irony', 'es.c2.function.implicature'], keywords: [['qué detalle', 'menudo', 'menuda', 'muy bonito', 'qué bien', 'vaya'], ['con lo que', 'tú verás', 'allá tú', 'ahí lo dejo']], minWords: 20, d: 2.7 })
      .build(),
  ),
  'es-c2-precision': assessment(
    exercises('cp-es-c2-precision', 'C2', { kc: 'es.c2.vocabulary.false_friends' })
      .mcq('«Estaba muy embarazada en la reunión» es incorrecto si quieres decir «gênée». ¿Qué dirías?', ['Estaba muy apurada en la reunión.', 'Estaba muy embarazosa en la reunión.', 'Estaba muy molestada en la reunión.'], 0, 'gêné = apurado, avergonzado ; embarazada = enceinte.', { d: 2.3 })
      .cloze('El autor no ___ que el plan tenía fallos: lo admitió en la entrevista.', ['negó'], 'negar = nier (ne pas confondre avec contestar = répondre).', { kc: 'es.c2.vocabulary.false_friend_verbs', d: 2.3 })
      .tr('La police a enfreint le règlement.', ['La policía infringió el reglamento.', 'La policía ha infringido el reglamento.', 'La policía infringió la normativa.', 'La policía ha infringido la normativa.', 'La policía vulneró el reglamento.', 'La policía ha vulnerado el reglamento.'],
        'infringir = enfreindre ; infligir = infliger.', { kc: 'es.c2.vocabulary.paronyms', d: 2.5 })
      .listen('No me quejo porque sí, sino porque llevo tres semanas esperando una respuesta y nadie me explica el porqué del retraso.', '¿Qué reclama el hablante?', [
        'Una explicación del retraso', 'Que le devuelvan el dinero', 'Que le dejen de llamar',
      ], 0, 'el porqué = la raison ; sino = mais (opposition).', { kc: 'es.c2.grammar.homophones_spelling', d: 2.4 })
      .dictation('Si no lo has hecho todavía, echa un vistazo al informe.', 'si no (condition), hecho (hacer), echa (echar).', { kc: 'es.c2.grammar.homophones_spelling', d: 2.4 })
      .say('J’ai un rhume, je ne viendrai pas demain.', ['Estoy constipado, mañana no voy.', 'Estoy constipada, mañana no voy.', 'Estoy constipado, mañana no iré.', 'Estoy constipada, mañana no iré.', 'Estoy resfriado, mañana no voy.', 'Estoy resfriada, mañana no voy.', 'Estoy constipado, no vendré mañana.', 'Estoy constipada, no vendré mañana.'],
        'constipado / resfriado = enrhumé.', { d: 2.3 })
      .answer('Cuenta una anécdota (real o inventada) de un malentendido causado por un falso amigo entre el francés y el español.',
        'Una amiga francesa le dijo a su jefe que estaba constipada para explicar su malestar, y él le recomendó tomar un jarabe para la tos. Al final se rieron mucho del malentendido.',
        'Raconte le malentendu en nommant le faux ami et son vrai sens.', { kc: ['es.c2.vocabulary.false_friends', 'es.c2.vocabulary.false_friend_verbs'], keywords: [['constipada', 'constipado', 'embarazada', 'largo', 'éxito', 'suceso', 'molestar', 'quitar', 'contestar'], ['malentendido', 'confusión', 'error', 'falso amigo']], minWords: 22, d: 2.7 })
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO_C2: Record<string, string[]> = {
  'es-c2-matices': ['Je peux doser précisément la certitude avec le mode, les adverbes de doute et deber de.', 'Je peux atténuer une demande ou une critique et rapporter une information sans m’engager.'],
  'es-c2-literario': ['Je peux reconnaître et employer les temps littéraires (pretérito anterior, forme en -ra, futur du subjonctif).', 'Je peux apprécier et imiter un style soutenu : épithète, hyperbate, lexique littéraire.'],
  'es-c2-modismos': ['Je peux comprendre et employer des modismos avancés sans calquer le français.', 'Je peux citer un refrán, y compris en le tronquant comme un natif.'],
  'es-c2-periodistico': ['Je peux lire les titres de presse et repérer une information non confirmée.', 'Je peux écrire en style nominal et choisir un verbe introducteur précis.'],
  'es-c2-academico': ['Je peux rédiger un texte académique impersonnel avec des connecteurs soutenus.', 'Je peux citer, conclure et éviter le dequeísmo et le queísmo.'],
  'es-c2-coloquial': ['Je peux suivre et employer les marqueurs et le lexique familier de l’espagnol d’Espagne.', 'Je peux reconnaître les principales variantes de l’espagnol d’Amérique (ustedes, voseo, lexique).'],
  'es-c2-retorica': ['Je peux identifier les figures de style et manier la litote.', 'Je peux comprendre l’ironie et les sous-entendus, et les employer avec mesure.'],
  'es-c2-precision': ['Je peux éviter les faux amis du français les plus trompeurs.', 'Je peux distinguer paronymes et homophones à l’écrit (sino / si no, porque / por qué).'],
};
