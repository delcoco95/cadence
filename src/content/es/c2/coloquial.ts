import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const MARK = 'es.c2.function.discourse_markers';
const COLLOQ = 'es.c2.vocabulary.colloquial_spain';
const LATAM = 'es.c2.listening.latam_variants';
const VOSEO = 'es.c2.grammar.voseo_ustedes';

export const coloquial1: Lesson = {
  id: 'es-c2-coloquial-1',
  cefr: 'C2',
  unitId: 'es-c2-coloquial',
  title: 'Parler comme à Madrid',
  subtitle: 'vale · o sea · pues · venga · es que · qué va · mola',
  kcIds: [MARK, COLLOQ],
  estMinutes: 14,
  explanation: [
    {
      title: 'Les marqueurs du discours',
      body: 'Ils structurent la conversation, montrent l’attitude du locuteur et ne se traduisent presque jamais mot à mot.',
      table: [
        ['vale', 'd’accord, ok'],
        ['o sea', 'c’est-à-dire, enfin, bref (reformulation)'],
        ['pues', 'ben, eh bien (début de réponse)'],
        ['venga', 'allez (encouragement, accord, ou pour conclure : « venga, hasta luego »)'],
        ['es que…', 'c’est que… (justification, excuse)'],
        ['hombre / mujer', 'voyons, enfin (adoucit ou insiste)'],
        ['qué va', 'pas du tout, mais non'],
        ['¿Qué? — Que si vienes.', 'Quoi ? — Je disais : est-ce que tu viens ? (que répétitif)'],
      ],
      tip: '« ¡Que te calles! » : le que initial répète ou renforce un ordre (« Je t’ai dit de te taire ! »). Ce n’est pas une subordonnée incomplète.',
    },
    {
      title: 'Le lexique familier d’Espagne',
      table: [
        ['molar / guay', 'plaire, être cool / cool, génial'],
        ['flipar', 'halluciner, adorer'],
        ['currar, el curro', 'bosser, le boulot'],
        ['la pasta', 'le fric'],
        ['majo, maja', 'sympa, gentil'],
        ['cutre', 'minable, cheap'],
        ['mogollón (de)', 'plein (de), un max'],
        ['una chorrada', 'une bêtise, un truc sans importance'],
        ['estar mosqueado', 'être fâché, avoir la puce à l’oreille'],
      ],
      tip: 'Ces mots sont très courants à l’oral entre proches, mais déplacés dans un courriel professionnel.',
    },
  ],
  exercises: exercises('es-c2-coloquial-1', 'C2', { kc: MARK })
    .mcq('—¿Te vienes al cine? —___, pero invito yo.', ['Vale', 'O sea', 'Es que'], 0, 'vale = d’accord.', { d: 2.2 })
    .mcq('«Este bar es un poco cutre.» Significa que el bar es:', ['de poca calidad y poco cuidado', 'muy caro', 'muy pequeño pero elegante'], 0, 'cutre = minable, peu soigné.', { kc: COLLOQ, d: 2.3 })
    .cloze('—¿Vienes a la fiesta? —___ que mañana madrugo y no puedo trasnochar.', ['Es', 'Lo siento, es'], 'es que… = c’est que… (excuse).', { d: 2.2 })
    .cloze('Mi nuevo jefe es muy ___: siempre te echa una mano.', ['majo', 'simpático', 'amable'], 'majo = sympa (Espagne).', { kc: COLLOQ, d: 2.2 })
    .type('—¿Estás enfadado conmigo? —¡Qué ___! Solo estoy cansado.', ['va'], 'qué va = pas du tout.', { d: 2.3 })
    .type('Familier pour « le boulot » : « Mañana tengo mucho ___. »', ['curro', 'trabajo', 'lío'], 'el curro = le boulot (currar = bosser).', { kc: COLLOQ, d: 2.3 })
    .order('Allez, on y va, on est en retard.', 'Venga, vámonos, que llegamos tarde.', 'venga = allez ; que causal familier.', { distractors: ['vale', 'porque'], d: 2.3 })
    .tr('C’est-à-dire que tu ne viens pas ?', ['O sea, que no vienes.', 'O sea que no vienes.', '¿O sea que no vienes?', '¿O sea, que no vienes?', '¿Entonces no vienes?', 'Es decir, que no vienes.'],
      'o sea (que) = donc, c’est-à-dire.', { d: 2.3 })
    .tr('Ce film m’a trop plu, j’ai halluciné.', [
      ...alt(['La película me ha molado mogollón', 'La película me ha encantado', 'La peli me ha molado mogollón', 'La peli me ha encantado', 'Me ha encantado la película', 'Me ha encantado la peli'], [', he flipado.', ', ¡he flipado!', ', flipé.']),
    ], 'molar, mogollón, flipar : registre familier d’Espagne.', { kc: COLLOQ, d: 2.5 })
    .listen('—¿Qué tal el piso nuevo? —Pues mira, mola mogollón, pero es que el alquiler es una pasta. O sea, que no sé si me lo voy a poder quedar.', '¿Qué problema tiene el piso?', [
      'Es demasiado caro', 'Es muy feo', 'Está lejos del trabajo',
    ], 0, 'una pasta = très cher ; o sea que = donc.', { kc: COLLOQ, d: 2.4 })
    .listen('—Oye, que si te vienes a cenar el sábado. —¿Eh? —¡Que si te vienes a cenar el sábado!', '¿Por qué repite la frase con «que»?', [
      'Porque el otro no la ha oído bien', 'Porque está enfadado con él', 'Porque cambia de pregunta',
    ], 0, 'que + reprise : répéter un énoncé non entendu.', { d: 2.3 })
    .dictation('Hombre, no te pongas así, que tampoco es para tanto.', 'hombre (adoucissant) ; no es para tanto = il n’y a pas de quoi en faire un drame.', { d: 2.4 })
    .repeat('Pues mira, la verdad es que no me apetece nada.', 'pues mira : début de réponse familier.', { d: 2.2 })
    .say('Ce n’est qu’une bêtise, ne te fâche pas.', [
      ...alt(['Es solo una chorrada', 'Es una chorrada', 'No es más que una chorrada', 'Es una tontería', 'Es solo una tontería'], [', no te mosquees.', ', no te enfades.', ', no te cabrees.']),
    ], 'una chorrada = une bêtise ; mosquearse = se fâcher.', { kc: COLLOQ, d: 2.4 })
    .answer('Un amigo te propone un plan para el fin de semana que no te convence. Respóndele de manera coloquial, con marcadores como pues, es que, venga o vale.',
      'Pues mira, es que el sábado curro por la mañana y estoy reventado. ¿Qué te parece si quedamos el domingo para tomar unas cañas? Venga, dime algo.',
      'Marqueurs (pues, es que, venga) et lexique familier (currar, quedar, cañas).', {
        kc: [MARK, COLLOQ], keywords: [['pues', 'es que', 'venga', 'vale', 'o sea', 'hombre'], ['curro', 'quedamos', 'cañas', 'mola', 'guay', 'finde', 'pasta', 'flipar']], minWords: 20, d: 2.6,
      })
    .build(),
};

export const coloquial2: Lesson = {
  id: 'es-c2-coloquial-2',
  cefr: 'C2',
  unitId: 'es-c2-coloquial',
  title: 'Comprendre l’espagnol d’Amérique',
  subtitle: 'ustedes · vos tenés · computadora · manejar · ahorita',
  kcIds: [LATAM, VOSEO],
  estMinutes: 14,
  explanation: [
    {
      title: 'Pronoms : ustedes et vos',
      body: 'En Amérique (et aux Canaries, ainsi qu’en partie en Andalousie), vosotros n’existe pas : ustedes sert pour tutoyer comme pour vouvoyer un groupe. En Argentine, en Uruguay et dans une grande partie de l’Amérique centrale, vos remplace tú, avec des formes verbales propres.',
      table: [
        ['¿Ustedes vienen esta noche? (Amérique)', '¿Vosotros venís esta noche? (Espagne)'],
        ['Vos tenés razón. / Vos sos muy amable.', 'Tú tienes razón. / Tú eres muy amable.'],
        ['Vení acá. / Mirá.', 'Ven aquí. / Mira.'],
        ['¿Vos querés un café?', '¿Tú quieres un café?'],
      ],
      tip: 'Pour comprendre le voseo : accent sur la dernière syllabe (tenés, podés, vivís) et impératif sans diphtongue (vení, decí, salí).',
    },
    {
      title: 'Lexique et usages',
      table: [
        ['la computadora / el ordenador', 'l’ordinateur'],
        ['el celular / el móvil', 'le portable'],
        ['el carro, el auto / el coche', 'la voiture'],
        ['manejar / conducir', 'conduire'],
        ['el jugo / el zumo', 'le jus'],
        ['el departamento / el piso', 'l’appartement'],
        ['la plata / el dinero, la pasta', 'l’argent'],
        ['ahorita (Mexique)', 'tout de suite… ou plus tard'],
        ['Hoy comí temprano. / Hoy he comido pronto.', 'Passé simple pour un passé récent (Amérique)'],
      ],
      tip: 'coger (prendre) est neutre en Espagne mais vulgaire dans plusieurs pays d’Amérique : on y dit tomar el autobús. Et la plupart des Américains prononcent z et c comme s (seseo).',
    },
  ],
  exercises: exercises('es-c2-coloquial-2', 'C2', { kc: LATAM })
    .mcq('Un argentino te dice: «Vos sabés que te quiero mucho». ¿Equivalente en España?', ['Tú sabes que te quiero mucho.', 'Vosotros sabéis que os quiero mucho.', 'Usted sabe que le quiero mucho.'], 0, 'vos (voseo) = tú : vos sabés = tú sabes.', { kc: VOSEO, d: 2.3 })
    .mcq('¿Qué malentendido se produce en la conversación?', [
      'Valeria entiende «el piso» como el suelo, no como la vivienda', 'Jorge no sabe qué es un ordenador', 'Valeria no entiende la palabra «coche»',
    ], 0, 'En Argentine, el piso = le sol ; l’appartement se dit el departamento.', {
      d: 2.7,
      passage: 'Jorge (Madrid): ¡Hola, Valeria! Ya tengo piso nuevo, vente a verlo cuando quieras. Está a diez minutos en coche del centro.\nValeria (Buenos Aires): ¡Qué lindo! ¿Y de qué es el piso? ¿De madera?\nJorge: No, no, el piso es la casa entera, lo que vosotros llamáis departamento.\nValeria: ¡Ahhh! Claro, para nosotros el piso es el suelo. Bueno, che, mandame fotos con el celular.\nJorge: Vale, ahora te las mando desde el móvil.',
    })
    .mcq('¿Cuál de estas frases diría un madrileño y no un mexicano?', [
      '¿Vosotros habéis comido ya?', '¿Ustedes ya comieron?', 'Ahorita les llamo.',
    ], 0, 'vosotros + passé composé pour un passé récent : usage d’Espagne.', { kc: VOSEO, d: 2.4 })
    .cloze('En Buenos Aires: «Si ___ (querer, vos), te paso a buscar a las ocho.»', ['querés'], 'Voseo : querés (tú quieres).', { kc: VOSEO, hint: 'querer', d: 2.6 })
    .type('Équivalent péninsulaire de « la computadora » : « el ___ »', ['ordenador'], 'computadora (Amérique) = ordenador (Espagne).', { d: 2.2 })
    .type('Impératif du voseo de « venir » : « ¡___ acá, que te quiero mostrar algo! »', ['Vení'], 'Voseo : vení (Espagne : ven).', { kc: VOSEO, d: 2.6 })
    .order('Vous (vosotros) venez ce soir ?', '¿Vosotros venís esta noche?', 'Espagne : vosotros + venís.', { distractors: ['ustedes', 'vienen'], kc: VOSEO, d: 2.2 })
    .tr('J’ai laissé mon portable dans la voiture. (en Espagne)', ['Me he dejado el móvil en el coche.', 'He dejado el móvil en el coche.', 'Me dejé el móvil en el coche.', 'Dejé el móvil en el coche.'],
      'Espagne : el móvil, el coche (Amérique : el celular, el carro / el auto).', { d: 2.3 })
    .tr('Vous êtes très gentils. (à des amis, en Espagne)', ['Sois muy amables.', 'Vosotros sois muy amables.', 'Sois muy majos.', 'Vosotros sois muy majos.'],
      'En Espagne, ustedes est formel ; entre amis, vosotros.', { kc: VOSEO, d: 2.4 })
    .listen('Che, ¿vos querés venir el sábado al asado? Traé algo para tomar, si podés.', '¿De dónde es probablemente el hablante?', [
      'De Argentina o Uruguay', 'De Madrid', 'De México',
    ], 0, 'che, vos querés, traé, podés, asado : Río de la Plata.', { d: 2.4 })
    .listen('Ahorita no puedo, mi jefe me pidió un reporte para hoy. ¿Te marco más tarde al celular?', '¿Qué propone la hablante?', [
      'Llamar más tarde al móvil', 'Escribir el informe con él', 'Verse ahora mismo',
    ], 0, 'te marco al celular = je t’appelle sur ton portable (Mexique).', { d: 2.4 })
    .dictation('En Canarias, como en América, se dice ustedes en lugar de vosotros.', 'ustedes remplace vosotros aux Canaries et en Amérique.', { kc: VOSEO, d: 2.3 })
    .repeat('Mirá, vos tenés razón, pero yo no puedo hacer nada.', 'Voseo : mirá, vos tenés.', { kc: VOSEO, d: 2.3 })
    .say('Un jus d’orange, s’il vous plaît. (en Espagne)', ['Un zumo de naranja, por favor.', 'Me pone un zumo de naranja, por favor.', '¿Me pone un zumo de naranja, por favor?', 'Póngame un zumo de naranja, por favor.'],
      'Espagne : zumo ; Amérique : jugo.', { d: 2.2 })
    .answer('Explica a un amigo francés dos o tres diferencias entre el español de España y el de algún país de América que conozcas.',
      'En España usamos vosotros, mientras que en América se dice ustedes. Además, en Argentina se usa vos en lugar de tú, y allí dicen computadora y celular, no ordenador y móvil.',
      'Pronoms (vosotros / ustedes / vos) et lexique (computadora, celular).', {
        kc: [LATAM, VOSEO], keywords: [['vosotros', 'ustedes', 'vos', 'voseo'], ['computadora', 'celular', 'carro', 'jugo', 'manejar', 'ordenador', 'móvil', 'coche', 'zumo', 'seseo']], minWords: 22, d: 2.6,
      })
    .build(),
};
