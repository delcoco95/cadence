import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const DUR = 'es.b2.grammar.llevar_gerund';
const CONT = 'es.b2.grammar.seguir_gerund';
const PHASE = 'es.b2.grammar.phase_periphrases';
const VOLVER = 'es.b2.grammar.volver_a_soler';

export const perifrasis1: Lesson = {
  id: 'es-b2-perifrasis-1',
  cefr: 'B2',
  unitId: 'es-b2-perifrasis',
  title: 'Durée et continuité',
  subtitle: 'Llevo tres años viviendo aquí · sigo sin entenderlo',
  kcIds: [DUR, CONT],
  estMinutes: 12,
  explanation: [
    {
      title: 'Llevar + durée + gérondif',
      body: 'Pour dire depuis combien de temps une action dure. À la forme négative : llevar + durée + sin + infinitif.',
      table: [
        ['Llevo tres años viviendo en Madrid.', 'J’habite à Madrid depuis trois ans.'],
        ['Llevo dos días sin dormir.', 'Ça fait deux jours que je ne dors pas.'],
        ['¿Cuánto tiempo llevas estudiando español?', 'Depuis combien de temps apprends-tu l’espagnol ?'],
      ],
      examples: [
        { en: 'Llevamos media hora esperando.', fr: 'Ça fait une demi-heure que nous attendons.' },
        { en: 'Hace tres años que vivo aquí. · Vivo aquí desde hace tres años.', fr: 'Autres façons de dire : j’habite ici depuis trois ans.' },
      ],
      tip: '« Depuis » + durée → desde hace, jamais desde seul : vivo aquí desde hace tres años (desde 2020, desde el lunes pour un point de départ). Comme en français, le verbe reste au présent.',
    },
    {
      title: 'Seguir + gérondif',
      body: 'seguir (ou continuar) + gérondif = continuer à, toujours. seguir sin + infinitif = toujours pas.',
      table: [
        ['Sigo trabajando en el mismo banco.', 'Je travaille toujours dans la même banque.'],
        ['Sigue lloviendo.', 'Il continue de pleuvoir.'],
        ['Sigo sin entenderlo.', 'Je ne comprends toujours pas.'],
      ],
      examples: [
        { en: 'Mi abuela sigue yendo a nadar todos los días.', fr: 'Ma grand-mère va toujours nager tous les jours.' },
        { en: 'Seguimos sin noticias de él.', fr: 'Nous sommes toujours sans nouvelles de lui.' },
      ],
      tip: '« Continuer à faire » → seguir haciendo (gérondif), jamais « seguir a hacer ». seguir se conjugue comme pedir : sigo, sigues, sigue.',
    },
  ],
  exercises: exercises('es-b2-perifrasis-1', 'B2', { kc: DUR, tense: 'perífrasis' })
    .mcq('¿Qué le sigue resultando difícil a Claire?', ['El euskera', 'Entender a la gente', 'Encontrar trabajo'], 0,
      'Lo único que sigo sin dominar es el euskera. Repérer llevo cuatro años viviendo, sigo trabajando, llevo dos años yendo.', {
        kc: [DUR, CONT], d: 0.6,
        passage: 'Mi vida en Bilbao\nMe llamo Claire y llevo cuatro años viviendo en Bilbao. Vine para hacer un máster y al final me quedé: encontré trabajo en una empresa de diseño, donde sigo trabajando hoy. Al principio me costaba mucho entender a la gente, pero ahora ya no tengo problemas. Lo único que sigo sin dominar es el euskera: llevo dos años yendo a clases y todavía me cuesta mucho.',
      })
    .mcq('Después de tantos años, ¿___ viviendo en el mismo piso?', ['sigues', 'continúas a', 'llevas a'], 0, 'seguir + gérondif, sans préposition : sigues viviendo.', { kc: CONT, d: 0.5 })
    .cloze('Llevo una semana ___ dormir bien por culpa del calor.', ['sin'], 'Forme négative : llevar + durée + sin + infinitif.', { d: 0.6 })
    .cloze('Han pasado tres meses y sigo sin ___ el ordenador.', ['arreglar'], 'seguir sin + infinitif = toujours pas.', { kc: CONT, hint: 'arreglar', d: 0.6 })
    .type('Reformule avec « llevar » : « Estudio japonés desde hace dos años. » → « ___ dos años estudiando japonés. »', ['Llevo'], 'Llevo + durée + gérondif.', { d: 0.5 })
    .type('Reformule avec « seguir » : « Todavía trabaja en el banco. » → « ___ trabajando en el banco. »', ['Sigue'], 'todavía + verbe → seguir + gérondif.', { kc: CONT, d: 0.5 })
    .order('Depuis combien de temps apprends-tu l’espagnol ?', '¿Cuánto tiempo llevas aprendiendo español?', 'Cuánto tiempo + llevar + gérondif.', { distractors: ['desde'], d: 0.7 })
    .tr('J’habite à Séville depuis cinq ans.', [
      'Llevo cinco años viviendo en Sevilla.', 'Llevo cinco años en Sevilla.', 'Llevo viviendo cinco años en Sevilla.', 'Llevo viviendo en Sevilla cinco años.',
      'Vivo en Sevilla desde hace cinco años.', 'Hace cinco años que vivo en Sevilla.',
    ], 'llevar + durée + gérondif, ou desde hace / hace… que.', { d: 0.5 })
    .tr('Il ne pleut toujours pas.', ['Sigue sin llover.', 'Todavía no llueve.', 'Aún no llueve.'], 'seguir sin + infinitif = toujours pas.', { kc: CONT, d: 0.8 })
    .listen('Llevo media hora llamando a la compañía de la luz y sigo sin hablar con nadie.', '¿Qué problema tiene?', [
      'No consigue hablar con nadie de la compañía', 'No tiene luz desde hace media hora', 'La factura es demasiado alta',
    ], 0, 'Llevo media hora llamando… sigo sin hablar con nadie.', { kc: [DUR, CONT], d: 0.7 })
    .listen('Mi abuela tiene noventa años y sigue yendo a nadar todos los días.', '¿Qué hace la abuela todavía?', [
      'Va a nadar cada día', 'Trabaja en el campo', 'Conduce su coche',
    ], 0, 'sigue yendo = elle va toujours (gérondif irrégulier de ir : yendo).', { kc: CONT, d: 0.5 })
    .dictation('Llevamos toda la mañana buscando las llaves del coche.', 'llevar + durée + gérondif.', { d: 0.6 })
    .repeat('Sigo pensando que tenías razón.', 'seguir + gérondif : sigo pensando.', { kc: CONT, d: 0.5 })
    .say('Ça fait deux jours que je ne dors pas.', ['Llevo dos días sin dormir.', 'Hace dos días que no duermo.', 'No duermo desde hace dos días.'],
      'llevar + durée + sin + infinitif.', { d: 0.6 })
    .answer('¿Cuánto tiempo llevas estudiando español y qué sigue siendo difícil para ti?', 'Llevo dos años estudiando español y sigo teniendo problemas con el subjuntivo y con los verbos irregulares.',
      'llevo… estudiando ; sigo teniendo.', { kc: [DUR, CONT], keywords: [['llevo'], ['sigo', 'sigue', 'siguen']], minWords: 12, d: 0.8 })
    .build(),
};

export const perifrasis2: Lesson = {
  id: 'es-b2-perifrasis-2',
  cefr: 'B2',
  unitId: 'es-b2-perifrasis',
  title: 'Commencer, arrêter, recommencer',
  subtitle: 'Acabo de llegar · se puso a llover · ha vuelto a llamar',
  kcIds: [PHASE, VOLVER],
  estMinutes: 12,
  explanation: [
    {
      title: 'Le début et la fin d’une action',
      table: [
        ['empezar a + inf.', 'commencer à'],
        ['ponerse a + inf.', 'se mettre à : Se puso a llover.'],
        ['echarse a + inf.', 'se mettre brusquement à (llorar, reír, correr)'],
        ['dejar de + inf.', 'arrêter de : Dejó de fumar.'],
        ['acabar de + inf.', 'venir de : Acabo de llegar.'],
        ['estar a punto de + inf.', 'être sur le point de'],
      ],
      examples: [
        { en: 'Al oír la noticia, se echó a llorar.', fr: 'En entendant la nouvelle, elle a fondu en larmes.' },
        { en: 'Estábamos a punto de salir cuando sonó el teléfono.', fr: 'Nous étions sur le point de sortir quand le téléphone a sonné.' },
      ],
      tip: '« Je viens de manger » → acabo de comer. « Vengo de comer » veut dire « je reviens de manger (quelque part) ». « Arrêter de » → dejar de, pas « parar de » dans la plupart des cas.',
    },
    {
      title: 'Répétition et habitude',
      body: 'volver a + infinitif = refaire, de nouveau (il remplace le préfixe re-). soler + infinitif = avoir l’habitude de (présent et imparfait seulement).',
      table: [
        ['Ha vuelto a llamar.', 'Il a rappelé.'],
        ['No vuelvas a hacerlo.', 'Ne le refais plus.'],
        ['Suelo levantarme a las siete.', 'D’habitude, je me lève à sept heures.'],
      ],
      examples: [
        { en: 'Este año he vuelto a estudiar francés.', fr: 'Cette année, je me suis remis au français.' },
        { en: 'De pequeños solíamos veranear en Galicia.', fr: 'Petits, nous passions généralement l’été en Galice.' },
      ],
      tip: 'Relire, refaire, rappeler : volver a leer, volver a hacer, volver a llamar. Les pronoms se placent devant volver ou après l’infinitif : ¿Me lo puedes volver a explicar? / ¿Puedes volver a explicármelo?',
    },
  ],
  exercises: exercises('es-b2-perifrasis-2', 'B2', { kc: PHASE, tense: 'perífrasis' })
    .mcq('El niño se cayó y ___ a llorar.', ['se echó', 'se volvió', 'dejó'], 0, 'Début brusque → echarse a llorar.', { d: 0.6 })
    .mcq('¿Has comido? — Sí, ___ comer, todavía estoy lleno.', ['acabo de', 'vengo de', 'dejo de'], 0, '« venir de » (passé récent) → acabar de.', { d: 0.5 })
    .cloze('Mi padre ___ de fumar hace diez años.', ['dejó'], 'dejar de = arrêter de ; hace diez años → indefinido : dejó.', { hint: 'dejar', d: 0.5 })
    .cloze('No he entendido nada. ¿Me lo puedes ___ a explicar?', ['volver'], 'volver a + infinitif = réexpliquer.', { kc: VOLVER, hint: 'de nouveau', d: 0.7 })
    .type('Reformule avec « volver a » : « Leí el libro otra vez. » → « ___ a leer el libro. »', ['Volví'], 'otra vez → volver a : volví a leer.', { kc: VOLVER, d: 0.6 })
    .type('Complète « Il était sur le point de partir » : « ___ a punto de salir. »', ['Estaba'], 'estar a punto de, à l’imparfait : estaba.', { d: 0.6 })
    .order('Quand il est arrivé, nous nous sommes mis à dîner.', 'Cuando llegó nos pusimos a cenar.', 'ponerse a + infinitif : nos pusimos a cenar.', { distractors: ['dejamos'], d: 0.6 })
    .tr('Je viens de recevoir ton message.', [
      'Acabo de recibir tu mensaje.', 'Yo acabo de recibir tu mensaje.', 'Acabo de recibir su mensaje.', 'Me acaba de llegar tu mensaje.', 'Acaba de llegarme tu mensaje.',
    ], 'venir de → acabar de + infinitif.', { d: 0.4 })
    .tr('Ne refais jamais ça.', [
      'No vuelvas a hacer eso nunca.', 'No vuelvas a hacerlo nunca.', 'Nunca vuelvas a hacer eso.', 'Nunca vuelvas a hacerlo.', 'No vuelvas a hacer eso.',
      'No vuelvas a hacerlo.', 'No vuelvas a hacer esto.', 'No vuelva a hacerlo nunca.', 'Nunca vuelva a hacer eso.', 'No vuelva a hacer eso.',
    ], 'refaire → volver a hacer ; impératif négatif : no vuelvas a.', { kc: VOLVER, d: 0.8 })
    .listen('Estábamos a punto de salir cuando se puso a llover a cántaros, así que nos quedamos en casa viendo una película.', '¿Qué hicieron al final?', [
      'Se quedaron en casa viendo una película', 'Salieron con paraguas', 'Fueron al cine',
    ], 0, 'estábamos a punto de salir ; se puso a llover a cántaros (il s’est mis à pleuvoir à verse).', { d: 0.6 })
    .listen('Desde que se jubiló, mi tío suele pasar los veranos en el pueblo y ha vuelto a pintar, como cuando era joven.', '¿Qué ha retomado el tío?', [
      'La pintura', 'La música', 'El trabajo en el campo',
    ], 0, 'ha vuelto a pintar = il s’est remis à peindre ; suele pasar = il passe d’habitude.', { kc: VOLVER, d: 0.7 })
    .dictation('Al oír la noticia, todos se echaron a reír.', 'echarse a reír = éclater de rire.', { d: 0.6 })
    .repeat('Este año he vuelto a estudiar francés.', 'volver a + infinitif.', { kc: VOLVER, d: 0.5 })
    .say('J’ai arrêté de boire du café.', [
      'He dejado de tomar café.', 'Dejé de tomar café.', 'He dejado de beber café.', 'Dejé de beber café.', 'Yo he dejado de tomar café.', 'Yo dejé de tomar café.',
    ], 'arrêter de → dejar de ; boire un café se dit souvent tomar café.', { d: 0.5 })
    .answer('¿Qué costumbre has dejado de tener y qué te gustaría volver a hacer?', 'Hace un año dejé de comer carne y me gustaría volver a tocar el piano, como cuando era pequeño.',
      'dejar de + infinitif ; volver a + infinitif.', { kc: [PHASE, VOLVER], keywords: [['dejé', 'dejado', 'dejar'], ['volver']], minWords: 12, d: 0.8 })
    .build(),
};
