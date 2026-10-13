import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const IR_A = 'es.a2.tense.ir_a';
const FUT = 'es.a2.tense.futuro_simple';
const OBL = 'es.a2.grammar.obligation';
const GER = 'es.a2.grammar.estar_gerundio';

export const future1: Lesson = {
  id: 'es-a2-future-1',
  cefr: 'A2',
  unitId: 'es-a2-future',
  title: 'Ir a + infinitif · futur simple',
  subtitle: 'Voy a viajar · mañana lloverá',
  kcIds: [IR_A, FUT],
  estMinutes: 9,
  explanation: [
    {
      title: 'ir a + infinitif',
      body: 'Pour les projets, les intentions et ce qui va arriver de façon évidente : ir au présent + a + infinitif.',
      table: [
        ['yo', 'voy a comer'],
        ['tú', 'vas a comer'],
        ['él, ella, usted', 'va a comer'],
        ['nosotros', 'vamos a comer'],
        ['vosotros', 'vais a comer'],
        ['ellos, ellas, ustedes', 'van a comer'],
      ],
      examples: [
        { en: 'Este verano vamos a alquilar una casa en Cantabria.', fr: 'Cet été, nous allons louer une maison en Cantabrie.' },
        { en: 'Cuidado, ¡te vas a caer!', fr: 'Attention, tu vas tomber !' },
      ],
      tip: 'N’oubliez pas le a : « Voy comer » ✗ → « Voy a comer » ✓.',
    },
    {
      title: 'Le futur simple',
      body: 'Infinitif + é, ás, á, emos, éis, án, pour tous les verbes. Il sert aux prévisions, aux promesses et à un avenir plus lointain ou incertain. Quelques verbes ont un radical irrégulier.',
      table: [
        ['hablar', 'hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán'],
        ['tener · poner · salir · venir', 'tendré · pondré · saldré · vendré'],
        ['poder · saber · querer', 'podré · sabré · querré'],
        ['hacer · decir · haber', 'haré · diré · habrá'],
      ],
      examples: [
        { en: 'Mañana hará calor en el sur.', fr: 'Demain, il fera chaud dans le sud.' },
        { en: 'Te prometo que te llamaré.', fr: 'Je te promets que je t’appellerai.' },
      ],
      tip: 'Comme en français, le futur se construit sur l’infinitif. Mais pour un projet proche, l’espagnol préfère ir a ou même le présent : Mañana salgo a las ocho.',
    },
  ],
  exercises: exercises('es-a2-future-1', 'A2', { kc: IR_A, tense: 'future' })
    .mcq('Este verano (nosotros) ___ a visitar Galicia.', ['vamos', 'iremos', 'vais'], 0, 'nosotros → vamos a + infinitif.', { d: -1.4 })
    .mcq('Mañana ___ sol en todo el país, según la previsión.', ['hará', 'hacerá', 'hizo'], 0, 'hacer → haré, hará (radical irrégulier har-).', { kc: FUT, d: -1.0 })
    .cloze('Mira esas nubes: va ___ llover.', ['a'], 'ir a + infinitif : va a llover.', { d: -1.4 })
    .cloze('El año que viene ___ más tiempo libre.', ['tendré'], 'tener → tendré.', { kc: FUT, hint: 'tener, yo, futur', d: -0.9 })
    .type('Conjugue « hacer » au futur simple avec « nosotros ».', ['haremos'], 'har- + emos : haremos.', { kc: FUT, d: -1.0 })
    .type('Conjugue « salir » au futur simple avec « ellos ».', ['saldrán'], 'saldr- + án : saldrán.', { kc: FUT, d: -0.8 })
    .order('Qu’est-ce que tu vas faire ce week-end ?', '¿Qué vas a hacer este fin de semana?', 'vas a + hacer.', { distractors: ['haces'], d: -1.2 })
    .tr('Je vais appeler ma mère ce soir.', [
      'Voy a llamar a mi madre esta noche.', 'Esta noche voy a llamar a mi madre.', 'Yo voy a llamar a mi madre esta noche.',
      'Voy a llamar a mi madre esta tarde.', 'Esta tarde voy a llamar a mi madre.', 'Esta noche llamo a mi madre.', 'Llamaré a mi madre esta noche.',
    ], 'ir a + llamar ; « a » devant la personne (a mi madre).', { d: -1.1 })
    .tr('Dans dix ans, nous vivrons à la campagne.', [
      'Dentro de diez años viviremos en el campo.', 'En diez años viviremos en el campo.', 'Dentro de diez años, nosotros viviremos en el campo.',
      'Dentro de diez años vamos a vivir en el campo.',
    ], 'Avenir lointain → futur simple : viviremos. « dans » + durée = dentro de.', { kc: FUT, d: -0.8 })
    .listen('El sábado voy a ir al cine con Laura y después vamos a cenar en un restaurante italiano.', 'Que vont-ils faire après le cinéma ?', ['Dîner dans un restaurant italien', 'Aller danser', 'Rentrer à la maison'], 0,
      'después vamos a cenar = ensuite, nous allons dîner.', { d: -1.2 })
    .listen('Mañana lloverá en el norte, pero en el sur hará calor y sol.', 'Quel temps fera-t-il dans le sud ?', ['Chaud et ensoleillé', 'Pluvieux', 'Froid et nuageux'], 0,
      'en el sur hará calor y sol.', { kc: FUT, d: -1.0 })
    .dictation('Te prometo que el lunes te diré la verdad.', 'decir → diré (promesse au futur).', { kc: FUT, d: -0.8 })
    .repeat('Vamos a ver qué pasa. Ya veremos.', 'Ya veremos = on verra (futur de ver).', { kc: [IR_A, FUT], d: -1.1 })
    .say('Je ne vais pas sortir ce soir.', ['No voy a salir esta noche.', 'Esta noche no voy a salir.', 'Yo no voy a salir esta noche.', 'Esta noche no salgo.', 'No salgo esta noche.'],
      'no + voy a salir.', { d: -1.2 })
    .answer('¿Qué vas a hacer el próximo fin de semana?', 'El próximo fin de semana voy a visitar a mis padres y el domingo vamos a comer en el campo.',
      'Projets → voy a / vamos a + infinitif.', { keywords: [['voy', 'vamos', 'iré', 'haré', 'vas', 'va']], minWords: 12, d: -0.8 })
    .build(),
};

export const future2: Lesson = {
  id: 'es-a2-future-2',
  cefr: 'A2',
  unitId: 'es-a2-future',
  title: 'Obligation · estar + gérondif',
  subtitle: 'Tengo que salir · hay que reservar · estoy trabajando',
  kcIds: [OBL, GER],
  estMinutes: 9,
  explanation: [
    {
      title: 'Exprimer l’obligation',
      body: 'tener que + infinitif : obligation personnelle. hay que + infinitif : obligation générale, impersonnelle (il faut). deber + infinitif : devoir moral, conseil.',
      table: [
        ['tener que', 'Tengo que trabajar el sábado.'],
        ['hay que (invariable)', 'Hay que llevar el pasaporte.'],
        ['deber', 'Debes descansar más.'],
        ['ne pas être obligé · il ne faut pas', 'No tienes que venir. · No hay que fumar aquí.'],
      ],
      examples: [
        { en: 'Lo siento, me tengo que ir.', fr: 'Désolé, je dois partir.' },
        { en: 'Para entrar hay que hacer cola.', fr: 'Pour entrer, il faut faire la queue.' },
      ],
      tip: 'tener que, avec que : « Tengo de ir » ✗ → « Tengo que ir » ✓. hay que ne se conjugue jamais avec une personne : « il faut que je parte » → Tengo que irme.',
    },
    {
      title: 'estar + gérondif',
      body: 'Pour une action en cours : estar + gérondif en -ando (-ar) ou -iendo (-er, -ir). L’espagnol l’emploie beaucoup plus que « être en train de ».',
      table: [
        ['trabajar · comer · escribir', 'trabajando · comiendo · escribiendo'],
        ['leer · oír · ir', 'leyendo · oyendo · yendo'],
        ['dormir · decir · pedir', 'durmiendo · diciendo · pidiendo'],
      ],
      examples: [
        { en: '¿Qué estás haciendo? — Estoy viendo una serie.', fr: 'Qu’est-ce que tu fais ? — Je regarde une série.' },
        { en: 'Los niños están durmiendo.', fr: 'Les enfants dorment.' },
      ],
      tip: 'Toujours estar, jamais ser : « Soy trabajando » ✗ → « Estoy trabajando » ✓.',
    },
  ],
  exercises: exercises('es-a2-future-2', 'A2', { kc: OBL })
    .mcq('Para entrar en el museo ___ hacer cola.', ['hay que', 'tienes de', 'hay'], 0, 'Obligation générale → hay que + infinitif.', { d: -1.2 })
    .cloze('¿Qué ___ haciendo? — Estamos viendo una serie.', ['estáis'], 'vosotros → estáis + gérondif.', { kc: GER, hint: 'estar, vosotros', d: -1.2 })
    .cloze('No hagas ruido, el bebé está ___.', ['durmiendo'], 'dormir → durmiendo (o → u).', { kc: GER, hint: 'dormir', d: -0.9 })
    .mcq('Que faut-il faire en sortant ?', ['Laisser la clé à la réception', 'Fermer la cuisine', 'Prévenir le directeur'], 0,
      'Hay que dejar la llave en recepción cuando salís.',
      {
        d: -0.8,
        passage: 'Normas de la residencia de estudiantes\nBienvenidos a la residencia. Hay que dejar la llave en recepción cuando salís. No se puede cocinar en las habitaciones: tenéis que usar la cocina común de la planta baja. Las visitas pueden entrar hasta las diez de la noche. Los fines de semana no hay que avisar si llegáis tarde, pero entre semana tenéis que estar en la residencia antes de la una.',
      })
    .type('Conjugue « estar + leer » au présent avec « yo ».', ['estoy leyendo'], 'leer → leyendo (avec y).', { kc: GER, d: -1.0 })
    .type('Comment dit-on « il faut » (forme impersonnelle) ?', ['hay que'], 'hay que + infinitif, invariable.', { d: -1.3 })
    .order('Je dois finir ce rapport aujourd’hui.', 'Tengo que terminar este informe hoy.', 'tener que + infinitif.', { distractors: ['de'], d: -1.0 })
    .tr('Il faut réserver une table.', ['Hay que reservar una mesa.', 'Hay que reservar mesa.', 'Tenemos que reservar una mesa.', 'Tenemos que reservar mesa.'],
      'Obligation générale → hay que.', { d: -1.1 })
    .tr('Qu’est-ce que tu fais en ce moment ?', [
      '¿Qué estás haciendo ahora?', '¿Qué haces ahora?', '¿Qué estás haciendo en este momento?', '¿Qué haces en este momento?',
      '¿Qué estás haciendo ahora mismo?', '¿Qué haces ahora mismo?',
    ], 'Action en cours → estás haciendo (ou présent simple).', { kc: GER, d: -1.0 })
    .listen('Perdona, ahora no puedo hablar: estoy conduciendo. Te llamo en diez minutos.', 'Pourquoi ne peut-elle pas parler ?', ['Elle conduit', 'Elle est en réunion', 'Elle dort'], 0,
      'estoy conduciendo = je suis en train de conduire.', { kc: GER, d: -1.1 })
    .listen('Para el examen de mañana tenéis que traer un bolígrafo azul. No hay que traer el diccionario.', 'Qu’est-ce qu’il n’est pas nécessaire d’apporter ?', ['Le dictionnaire', 'Un stylo bleu', 'La carte d’identité'], 0,
      'No hay que traer el diccionario = ce n’est pas la peine d’apporter le dictionnaire.', { d: -0.8 })
    .dictation('Tenemos que salir ya, porque está empezando a llover.', 'tener que + infinitif ; estar + gérondif.', { kc: [OBL, GER], d: -0.9 })
    .repeat('Hay que beber mucha agua cuando hace calor.', 'hay que + infinitif : conseil général.', { d: -1.2 })
    .say('Je suis en train de travailler.', ['Estoy trabajando.', 'Yo estoy trabajando.', 'Ahora estoy trabajando.'], 'estar + gérondif : estoy trabajando.', { kc: GER, d: -1.3 })
    .answer('¿Qué tienes que hacer esta semana?', 'Esta semana tengo que ir al médico, tengo que limpiar la casa y también hay que comprar comida.',
      'tengo que + infinitif ; hay que pour une obligation générale.', { keywords: [['tengo que', 'hay que', 'debo', 'tenemos que']], minWords: 12, d: -0.7 })
    .build(),
};
