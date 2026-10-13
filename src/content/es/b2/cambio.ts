import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const TEMPCH = 'es.b2.vocabulary.change_ponerse_quedarse';
const DEEP = 'es.b2.vocabulary.change_volverse_hacerse';
const RESULT = 'es.b2.vocabulary.change_convertirse_llegar';
const SUFF = 'es.b2.vocabulary.diminutives_augmentatives';

export const cambio1: Lesson = {
  id: 'es-b2-cambio-1',
  cefr: 'B2',
  unitId: 'es-b2-cambio',
  title: 'Devenir : ponerse, quedarse, volverse, hacerse',
  subtitle: 'Se puso rojo · se quedó sordo · se volvió loco · se hizo rico',
  kcIds: [TEMPCH, DEEP],
  estMinutes: 12,
  explanation: [
    {
      title: 'Changements passagers ou subis : ponerse, quedarse',
      body: 'Le français « devenir » n’a pas d’équivalent unique. ponerse + adjectif : changement rapide et passager (humeur, santé, couleur). quedarse + adjectif : état qui résulte d’un événement, souvent durable.',
      table: [
        ['ponerse', 'nervioso, rojo, triste, contento, enfermo, pálido'],
        ['quedarse', 'sordo, ciego, viudo, embarazada, solo, sin trabajo, dormido, sorprendido'],
      ],
      examples: [
        { en: 'Cuando le hablé de su exnovia, se puso muy nervioso.', fr: 'Quand je lui ai parlé de son ex, il est devenu très nerveux.' },
        { en: 'Se quedó embarazada a los treinta años.', fr: 'Elle est tombée enceinte à trente ans.' },
      ],
      tip: '« Il est devenu rouge » → se puso rojo, jamais « devino rojo » (devenir existe mais reste rare et littéraire). « S’endormir devant la télé » → quedarse dormido.',
    },
    {
      title: 'Changements profonds : volverse, hacerse',
      body: 'volverse + adjectif : transformation du caractère, souvent involontaire et négative. hacerse + adjectif ou nom : changement progressif ou voulu (profession, idées, statut).',
      table: [
        ['volverse', 'loco, desconfiado, egoísta, arrogante, más tranquilo'],
        ['hacerse', 'rico, famoso, vegetariano, mayor, abogado, socio de un club'],
      ],
      examples: [
        { en: 'Con los años se ha vuelto muy desconfiado.', fr: 'Avec les années, il est devenu très méfiant.' },
        { en: 'Mi hermano se hizo abogado.', fr: 'Mon frère est devenu avocat.' },
      ],
      tip: '« Vieillir, se faire vieux » → hacerse mayor. « Devenir fou » → volverse loco. Devant un métier, hacerse : se hizo médico.',
    },
  ],
  exercises: exercises('es-b2-cambio-1', 'B2', { kc: TEMPCH, tense: 'verbos de cambio' })
    .mcq('Cuando le hablé de su exnovia, ___ muy nervioso.', ['se puso', 'se volvió', 'se hizo'], 0, 'Émotion passagère → ponerse : se puso nervioso.', { d: 0.5 })
    .mcq('Con los años, mi vecino ___ muy desconfiado: ya no habla con nadie.', ['se ha vuelto', 'se ha puesto', 'se ha quedado'], 0, 'Changement durable du caractère → volverse.', { kc: DEEP, d: 0.7 })
    .cloze('Después del accidente, mi abuelo se ___ sordo de un oído.', ['quedó'], 'État qui résulte d’un événement → quedarse sordo.', { hint: 'quedarse', d: 0.6 })
    .cloze('Ganó la lotería y se ___ rico de la noche a la mañana.', ['hizo'], 'Statut social → hacerse rico.', { kc: DEEP, hint: 'hacerse', d: 0.6 })
    .type('Choisis le verbe et conjugue à l’indefinido : « Al ver la nota, (ella) ___ muy contenta. »', ['se puso'], 'Émotion passagère → ponerse : se puso contenta.', { d: 0.5 })
    .type('Choisis le verbe et conjugue à l’indefinido : « Mi prima ___ vegetariana el año pasado. »', ['se hizo'], 'Choix personnel, idées → hacerse : se hizo vegetariana.', { kc: DEEP, d: 0.8 })
    .order('Elle est tombée enceinte à trente ans.', 'Se quedó embarazada a los treinta años.', 'quedarse embarazada = tomber enceinte ; à trente ans → a los treinta años.', { distractors: ['puso'], d: 0.6 })
    .tr('Il est devenu tout rouge.', [
      'Se puso todo rojo.', 'Se puso rojo.', 'Se puso muy rojo.', 'Se puso rojísimo.', 'Se puso colorado.', 'Se puso todo colorado.', 'Él se puso todo rojo.',
    ], 'Couleur passagère → ponerse rojo (ou colorado).', { d: 0.5 })
    .tr('Mon frère est devenu avocat.', [
      'Mi hermano se hizo abogado.', 'Mi hermano se ha hecho abogado.', 'Mi hermano llegó a ser abogado.', 'Mi hermano se convirtió en abogado.',
    ], 'Profession → hacerse abogado (llegar a ser insiste sur l’effort).', { kc: DEEP, d: 0.6 })
    .listen('Cuando el profesor anunció el examen sorpresa, toda la clase se quedó en silencio y Lucía se puso pálida.', '¿Cómo reaccionó Lucía?', [
      'Se puso pálida', 'Se echó a reír', 'Se quedó dormida',
    ], 0, 'se puso pálida : changement passager de couleur.', { d: 0.6 })
    .listen('Desde que se hizo famoso, Andrés se ha vuelto un poco arrogante y ya casi no llama a sus amigos de siempre.', '¿Qué ha cambiado en Andrés?', [
      'Se ha vuelto arrogante', 'Se ha quedado sin trabajo', 'Se ha puesto enfermo',
    ], 0, 'se hizo famoso (statut) ; se ha vuelto arrogante (caractère).', { kc: DEEP, d: 0.7 })
    .dictation('Me quedé sorprendido cuando me contaron la noticia.', 'quedarse sorprendido : état qui résulte d’une nouvelle.', { d: 0.6 })
    .repeat('Con la edad se ha vuelto más tranquilo.', 'volverse : changement de caractère.', { kc: DEEP, d: 0.5 })
    .say('Je me suis {endormi|endormie} devant la télé.', [
      'Me quedé dormido delante de la tele.', 'Me quedé dormida delante de la tele.', 'Me he quedado dormido delante de la tele.', 'Me he quedado dormida delante de la tele.',
      'Me dormí delante de la tele.', 'Me he dormido delante de la tele.', 'Me quedé dormido viendo la tele.', 'Me quedé dormida viendo la tele.',
      'Me quedé dormido delante de la televisión.', 'Me quedé dormida delante de la televisión.',
    ], 's’endormir sans le vouloir → quedarse dormido / dormida.', { d: 0.6 })
    .answer('¿Qué cosas te ponen nervioso o nerviosa?', 'Me pongo muy nerviosa cuando tengo que hablar en público y cuando llego tarde a una cita importante.',
      'ponerse nervioso / nerviosa : émotion passagère.', { keywords: [['pongo', 'pone', 'ponen', 'puse']], minWords: 12, d: 0.7 })
    .build(),
};

export const cambio2: Lesson = {
  id: 'es-b2-cambio-2',
  cefr: 'B2',
  unitId: 'es-b2-cambio',
  title: 'Se transformer, finir par ; les suffixes',
  subtitle: 'Se convirtió en un museo · acabó aceptando · un pisito, un cochazo',
  kcIds: [RESULT, SUFF],
  estMinutes: 12,
  explanation: [
    {
      title: 'convertirse en, llegar a ser, acabar + gérondif',
      table: [
        ['convertirse en + nom', 'se transformer en : La estación se convirtió en un museo.'],
        ['llegar a ser', 'devenir au terme d’un effort : Llegó a ser directora.'],
        ['acabar / terminar + gérondif', 'finir par : Acabó aceptando.'],
      ],
      examples: [
        { en: 'Este pueblo se ha convertido en un destino turístico.', fr: 'Ce village est devenu une destination touristique.' },
        { en: 'Al principio no quería, pero terminó viniendo.', fr: 'Au début il ne voulait pas, mais il a fini par venir.' },
      ],
      tip: '« Devenir + nom » → convertirse EN (avec en). « Finir par faire » → acabar haciendo (acabar por hacer existe aussi, plus soutenu).',
    },
    {
      title: 'Diminutifs, augmentatifs, péjoratifs',
      body: 'Les suffixes ajoutent une nuance de taille, d’affection ou de mépris. Ils sont très vivants à l’oral.',
      table: [
        ['-ito, -ita (affection, petitesse)', 'casa → casita, momento → momentito, piso → pisito'],
        ['-cito, -ecito (après -e, -n, -r ou une syllabe)', 'coche → cochecito, pueblo → pueblecito, luz → lucecita'],
        ['-illo, -ín', 'chiquillo, pequeñín'],
        ['-azo (grand, ou coup)', 'coche → cochazo, perro → perrazo, puerta → portazo (claquement)'],
        ['-ón, -ote, -ucho (gros, péjoratif)', 'cabezón, grandote, casucha'],
      ],
      examples: [
        { en: 'Espérame un momentito, que ya bajo.', fr: 'Attends-moi une petite minute, je descends.' },
        { en: 'Se fue dando un portazo.', fr: 'Il est parti en claquant la porte.' },
      ],
      tip: 'Certains mots suffixés ont un sens propre : bolsillo (poche), ventanilla (guichet), sillón (fauteuil), cucharilla (petite cuillère). -azo indique souvent un coup : portazo, codazo, golpazo.',
    },
  ],
  exercises: exercises('es-b2-cambio-2', 'B2', { kc: RESULT, tense: 'verbos de cambio' })
    .mcq('En pocos años, este pueblo de pescadores se ha ___ un destino turístico.', ['convertido en', 'vuelto', 'hecho'], 0, 'Devenir + nom → convertirse en.', { d: 0.6 })
    .mcq('¿Qué les pasó a muchos vecinos que vendieron sus terrenos?', ['Se hicieron muy ricos', 'Se fueron a vivir a otra ciudad', 'Abrieron restaurantes de pescado'], 0,
      'llegaron a ser muy ricos = se hicieron muy ricos. Noter pueblecito, casitas (diminutifs) et se convirtió en.', {
        kc: [RESULT, SUFF], d: 0.8,
        passage: 'De pueblecito a ciudad\nHace setenta años, Benidorm era un pueblecito de pescadores con unas pocas casitas blancas junto al mar. Con la llegada del turismo, se convirtió en una de las ciudades con más rascacielos de Europa. Muchos vecinos que vendieron sus terrenos llegaron a ser muy ricos, y otros acabaron trabajando en hoteles y restaurantes. Hoy, algunos mayores echan de menos la tranquilidad de antes.',
      })
    .cloze('Al principio no quería ir, pero acabó ___ con nosotros.', ['viniendo'], 'acabar + gérondif = finir par : viniendo (gérondif irrégulier de venir).', { hint: 'venir', d: 0.7 })
    .cloze('Espérame un ___, que ya bajo.', ['momentito'], 'Diminutif de momento : momentito.', { kc: SUFF, hint: 'momento, diminutif', d: 0.4 })
    .type('Donne le diminutif en -ita de « casa ».', ['casita'], 'casa → casita.', { kc: SUFF, d: 0.4 })
    .type('Donne le diminutif en -cito de « coche ».', ['cochecito'], 'Mot en -e → -cito : cochecito.', { kc: SUFF, d: 0.8 })
    .order('Il a fini par accepter la proposition.', 'Acabó aceptando la propuesta.', 'acabar + gérondif = finir par.', { distractors: ['de'], d: 0.7 })
    .tr('La vieille gare est devenue un musée.', [
      'La antigua estación se ha convertido en un museo.', 'La antigua estación se convirtió en un museo.', 'La vieja estación se ha convertido en un museo.',
      'La vieja estación se convirtió en un museo.', 'La antigua estación se ha transformado en un museo.', 'La antigua estación se transformó en un museo.',
    ], 'devenir + nom → convertirse en.', { d: 0.7 })
    .tr('Elle a claqué la porte.', ['Dio un portazo.', 'Ella dio un portazo.', 'Cerró de un portazo.', 'Cerró la puerta de un portazo.', 'Ella cerró la puerta de un portazo.'],
      '-azo = coup : dar un portazo = claquer la porte.', { kc: SUFF, d: 1.0 })
    .listen('Empezó cantando en bares pequeños y en diez años llegó a ser una de las artistas más conocidas del país.', '¿Qué consiguió la cantante?', [
      'Llegar a ser muy conocida', 'Abrir su propio bar', 'Dejar la música',
    ], 0, 'llegó a ser = elle est devenue (après un long parcours).', { d: 0.7 })
    .listen('Mi hermano se ha comprado un cochazo, pero vive en un pisito de cuarenta metros en el centro.', '¿Cómo es el piso del hermano?', ['Pequeño', 'Enorme', 'Antiguo'], 0,
      'pisito = petit appartement ; cochazo = grosse voiture.', { kc: SUFF, d: 0.6 })
    .dictation('Con el tiempo, la pequeña tienda se convirtió en una gran empresa.', 'convertirse en + nom.', { d: 0.7 })
    .repeat('Vivimos en un pueblecito cerca de la sierra.', 'pueblo → pueblecito.', { kc: SUFF, d: 0.5 })
    .say('Elle a fini par trouver du travail.', [
      'Acabó encontrando trabajo.', 'Terminó encontrando trabajo.', 'Al final encontró trabajo.', 'Acabó por encontrar trabajo.',
      'Ella acabó encontrando trabajo.', 'Ella terminó encontrando trabajo.', 'Al final ella encontró trabajo.',
    ], 'finir par → acabar / terminar + gérondif.', { d: 0.7 })
    .answer('¿En qué se ha convertido tu ciudad o tu barrio en los últimos años?', 'Mi barrio se ha convertido en una zona muy de moda: han abierto muchos bares y el alquiler se ha vuelto carísimo.',
      'convertirse en + nom ; volverse + adjectif.', { keywords: [['convertido', 'convirtió', 'vuelto', 'hecho', 'transformado']], minWords: 12, d: 0.9 })
    .build(),
};
