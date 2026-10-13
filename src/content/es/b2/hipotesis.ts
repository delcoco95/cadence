import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const THIRD = 'es.b2.grammar.past_unreal_conditional';
const CONDPERF = 'es.b2.grammar.conditional_perfect';
const MIXED = 'es.b2.grammar.mixed_conditionals';
const DEINF = 'es.b2.grammar.de_infinitive_reproach';

export const hipotesis1: Lesson = {
  id: 'es-b2-hipotesis-1',
  cefr: 'B2',
  unitId: 'es-b2-hipotesis',
  title: 'L’irréel du passé',
  subtitle: 'Si lo hubiera sabido, habría venido',
  kcIds: [THIRD, CONDPERF],
  estMinutes: 12,
  explanation: [
    {
      title: 'Si + subjonctif plus-que-parfait, conditionnel passé',
      body: 'Pour imaginer un passé qui n’a pas eu lieu et sa conséquence, elle aussi passée.',
      table: [
        ['condition', 'si + hubiera / hubiese + participe', 'Si hubiera estudiado más,'],
        ['conséquence', 'habría + participe (ou hubiera + participe)', 'habría aprobado.'],
      ],
      examples: [
        { en: 'Si me lo hubieras dicho, te habría ayudado.', fr: 'Si tu me l’avais dit, je t’aurais aidé.' },
        { en: 'Si hubiéramos salido antes, no habríamos perdido el avión.', fr: 'Si nous étions partis plus tôt, nous n’aurions pas raté l’avion.' },
      ],
      tip: 'Après si, jamais d’indicatif plus-que-parfait ni de conditionnel : « si j’avais su » → si hubiera sabido (pas « si había sabido », pas « si habría sabido »). Dans la principale, hubiera remplace souvent habría à l’oral : Si lo hubiera sabido, hubiera venido.',
    },
    {
      title: 'Le conditionnel passé seul',
      body: 'habría, habrías, habría, habríamos, habríais, habrían + participe : regret, reproche, conseil après coup.',
      examples: [
        { en: 'Habría sido mejor decir la verdad.', fr: 'Il aurait mieux valu dire la vérité.' },
        { en: 'Yo que tú no habría aceptado.', fr: 'À ta place, je n’aurais pas accepté.' },
        { en: 'Hubiéramos preferido quedarnos en casa.', fr: 'Nous aurions préféré rester à la maison.' },
      ],
      tip: 'Toujours haber : « je serais venu » → habría venido (jamais « sería venido »). « À ta place » se dit yo que tú ou yo en tu lugar.',
    },
  ],
  exercises: exercises('es-b2-hipotesis-1', 'B2', { kc: THIRD, tense: 'pluscuamperfecto de subjuntivo' })
    .mcq('Si ___ antes, no habríamos perdido el avión.', ['hubiéramos salido', 'habríamos salido', 'habíamos salido'], 0, 'Après si : subjonctif plus-que-parfait (hubiéramos salido).', { d: 0.6 })
    .mcq('Si me lo hubieras pedido, te ___.', ['habría ayudado', 'habré ayudado', 'había ayudado'], 0, 'Conséquence irréelle passée : habría ayudado (hubiera ayudado est aussi possible).', { kc: CONDPERF, d: 0.5 })
    .cloze('Si ___ el mapa, no nos habríamos perdido.', ['hubiéramos mirado', 'hubiésemos mirado'], 'si + hubiéramos / hubiésemos + participe.', { hint: 'mirar, nosotros', d: 0.7 })
    .cloze('Yo que tú no ___ un piso tan caro.', ['habría alquilado', 'hubiera alquilado'], 'Conseil après coup : habría (ou hubiera) alquilado.', { kc: CONDPERF, hint: 'alquilar', d: 0.8 })
    .type('Conjugue « hacer » au conditionnel passé avec « tú ».', ['habrías hecho'], 'habrías + participe irrégulier hecho.', { kc: CONDPERF, d: 0.6 })
    .type('Complète : « Si (ellos / ver) ___ la película, les habría gustado. »', ['hubieran visto', 'hubiesen visto'], 'si + subjonctif plus-que-parfait : hubieran visto.', { d: 0.7 })
    .order('Si je l’avais su, je serais {venu|venue} plus tôt.', 'Si lo hubiera sabido, habría venido antes.', 'si + hubiera sabido, habría venido. Le lo reprend l’information.', { distractors: ['había'], d: 0.7 })
    .tr('Si tu m’avais appelé, je serais {venu|venue} te chercher.', [
      'Si me hubieras llamado, habría ido a buscarte.', 'Si me hubieras llamado, hubiera ido a buscarte.', 'Si me hubieses llamado, habría ido a buscarte.',
      'Si me hubieses llamado, hubiera ido a buscarte.', 'Si me hubieras llamado, te habría ido a buscar.', 'Si me hubieras llamado, habría ido a recogerte.',
      'Si me hubieras llamado, te habría recogido.', 'Si me hubieras llamado, hubiera ido a recogerte.', 'Habría ido a buscarte si me hubieras llamado.',
    ], '« venir te chercher » → ir a buscarte : l’espagnol prend le point de vue de celui qui parle (ir, pas venir).', { d: 0.9 })
    .tr('Nous aurions préféré rester à la maison.', [
      'Habríamos preferido quedarnos en casa.', 'Hubiéramos preferido quedarnos en casa.', 'Nosotros habríamos preferido quedarnos en casa.', 'Nosotros hubiéramos preferido quedarnos en casa.',
    ], 'Conditionnel passé : habríamos preferido. « rester » → quedarse.', { kc: CONDPERF, d: 0.6 })
    .listen('Si hubiera sabido que el restaurante cerraba los lunes, habría reservado en otro sitio. Al final cenamos un bocadillo en la estación.', '¿Qué cenaron al final?', [
      'Un bocadillo en la estación', 'En otro restaurante', 'Nada, porque estaba cerrado',
    ], 0, 'Al final cenamos un bocadillo en la estación.', { d: 0.6 })
    .listen('Me habría encantado ir a tu boda, pero ese fin de semana tenía una operación de rodilla.', '¿Por qué no fue a la boda?', [
      'Porque tenía una operación de rodilla', 'Porque no estaba invitado', 'Porque estaba de viaje',
    ], 0, 'Me habría encantado = j’aurais adoré (regret).', { kc: CONDPERF, d: 0.7 })
    .dictation('Si hubieras llegado a tiempo, habrías visto el principio.', 'hubieras llegado / habrías visto (participe irrégulier).', { d: 0.8 })
    .repeat('Habría sido más fácil decir la verdad.', 'habría sido : conditionnel passé de ser.', { kc: CONDPERF, d: 0.5 })
    .say('Si nous avions gagné, nous aurions fêté ça.', [
      'Si hubiéramos ganado, lo habríamos celebrado.', 'Si hubiésemos ganado, lo habríamos celebrado.', 'Si hubiéramos ganado, lo hubiéramos celebrado.',
      'Si hubiésemos ganado, lo hubiésemos celebrado.', 'Si hubiéramos ganado, lo habríamos festejado.', 'Lo habríamos celebrado si hubiéramos ganado.',
    ], 'si + hubiéramos ganado, lo habríamos celebrado.', { d: 0.7 })
    .answer('¿Qué habrías estudiado si hubieras podido elegir libremente?', 'Si hubiera podido elegir, habría estudiado Arquitectura, porque siempre me han gustado los edificios y el dibujo.',
      'si + hubiera podido, habría estudiado.', { keywords: [['habría', 'hubiera', 'hubiese', 'habríamos', 'hubiéramos']], minWords: 12, d: 0.9 })
    .build(),
};

export const hipotesis2: Lesson = {
  id: 'es-b2-hipotesis-2',
  cefr: 'B2',
  unitId: 'es-b2-hipotesis',
  title: 'Hypothèses mixtes et reproches',
  subtitle: 'Si hubiera aceptado, ahora viviría en Londres · de haberlo sabido',
  kcIds: [MIXED, DEINF],
  estMinutes: 12,
  explanation: [
    {
      title: 'Mélanger les époques',
      body: 'La condition et la conséquence ne sont pas toujours à la même époque.',
      table: [
        ['passé → présent', 'Si hubiera estudiado Medicina, ahora sería médico.'],
        ['présent → passé', 'Si fuera más organizado, no habría olvidado la cita.'],
      ],
      examples: [
        { en: 'Si no hubiera perdido el autobús, ahora estaría en casa.', fr: 'Si je n’avais pas raté le bus, je serais à la maison maintenant.' },
        { en: 'Si no fueras tan despistado, no habrías perdido las llaves.', fr: 'Si tu n’étais pas si distrait, tu n’aurais pas perdu les clés.' },
      ],
      tip: 'La logique est la même qu’en français : une condition passée (hubiera + participe) peut avoir une conséquence présente (conditionnel simple), souvent signalée par ahora, hoy.',
    },
    {
      title: 'De + infinitif passé, et le reproche',
      body: 'de haber + participe remplace si + plus-que-parfait, dans un registre un peu plus soigné. Pour un reproche : debería haber / tendría que haber + participe.',
      table: [
        ['Si lo hubiera sabido, habría venido.', 'De haberlo sabido, habría venido.'],
        ['Tu aurais dû me le dire.', 'Deberías habérmelo dicho. · Tendrías que habérmelo dicho.'],
      ],
      examples: [
        { en: 'De haber salido antes, habríamos llegado a tiempo.', fr: 'Si nous étions partis plus tôt, nous serions arrivés à l’heure.' },
        { en: 'Tendrías que haberme llamado.', fr: 'Tu aurais dû m’appeler.' },
      ],
      tip: '« Tu aurais dû » ne se calque pas : « habrías debido » existe mais sonne peu naturel. On met le modal au conditionnel simple et l’infinitif au passé : deberías haber venido. Les pronoms s’accrochent à haber (habérmelo) ou se placent devant le modal (me lo deberías haber dicho).',
    },
  ],
  exercises: exercises('es-b2-hipotesis-2', 'B2', { kc: MIXED, tense: 'pluscuamperfecto de subjuntivo' })
    .mcq('Si hubiera aceptado aquel trabajo en Londres, ahora ___ en Inglaterra.', ['viviría', 'habría vivido', 'viviera'], 0, 'Condition passée, conséquence présente (ahora) → conditionnel simple : viviría.', { d: 0.7 })
    .mcq('¿Qué piensa hoy el narrador de su decisión?', ['Volvería a tomar la misma decisión', 'Se arrepiente de no haberse ido a Berlín', 'Quiere trabajar en Alemania'], 0,
      'De haber sabido entonces lo que sé ahora, habría tomado la misma decisión. Noter les hypothèses mixtes : si hubiera aceptado, hoy hablaría.', {
        kc: [MIXED, DEINF], d: 1.0,
        passage: 'Una decisión\nHace diez años me ofrecieron un puesto en una empresa de Berlín, pero lo rechacé porque no quería dejar a mi familia. A veces pienso que, si hubiera aceptado, hoy hablaría alemán con fluidez y tendría un sueldo mucho más alto. Pero también sé que, si me hubiera ido, no habría conocido a Lucía, que ahora es mi mujer, ni habría abierto mi propia librería en Valladolid. De haber sabido entonces lo que sé ahora, habría tomado la misma decisión.',
      })
    .cloze('De ___ sabido que venías, habría preparado algo especial.', ['haber'], 'de + haber + participe = si lo hubiera sabido.', { kc: DEINF, hint: 'de + infinitif passé', d: 0.9 })
    .cloze('Si hubieras dormido más, ahora no ___ tan cansada.', ['estarías'], 'Condition passée, conséquence présente (ahora) : estarías.', { hint: 'estar, tú', d: 0.6 })
    .type('Transforme avec « de + infinitif » : « Si lo hubiera sabido, habría venido. » → « ___, habría venido. »', ['De haberlo sabido'], 'de + haber + lo (pronom accroché) + participe : De haberlo sabido.', { kc: DEINF, d: 1.0 })
    .type('Complète « Tu aurais dû me prévenir avant » : « Deberías ___ antes. » (avisar + me)', ['haberme avisado'], 'Reproche : deberías + haber + participe, pronom accroché à haber.', { kc: DEINF, d: 0.8 })
    .order('Si nous avions accepté, nous serions riches aujourd’hui.', 'Si hubiéramos aceptado, hoy seríamos ricos.', 'Condition passée (hubiéramos aceptado), conséquence présente (seríamos).', { distractors: ['habríamos'], d: 0.8 })
    .tr('Si tu avais pris ton parapluie, tu ne serais pas {trempé|trempée} maintenant.', [
      'Si hubieras cogido el paraguas, ahora no estarías empapado.', 'Si hubieras cogido el paraguas, ahora no estarías empapada.',
      'Si hubieses cogido el paraguas, ahora no estarías empapado.', 'Si hubieses cogido el paraguas, ahora no estarías empapada.',
      'Si hubieras cogido el paraguas, no estarías empapado ahora.', 'Si hubieras cogido el paraguas, no estarías empapada ahora.',
      'Si te hubieras llevado el paraguas, ahora no estarías empapado.', 'Si te hubieras llevado el paraguas, ahora no estarías empapada.',
      'Si hubieras cogido el paraguas, ahora no estarías mojado.', 'Si hubieras cogido el paraguas, ahora no estarías mojada.',
      'Si hubieras cogido tu paraguas, ahora no estarías empapado.', 'Si hubieras cogido tu paraguas, ahora no estarías empapada.',
    ], 'Passé → présent : si hubieras cogido…, ahora no estarías empapado / empapada.', { d: 0.9 })
    .tr('Tu aurais dû me le dire.', [
      'Deberías habérmelo dicho.', 'Me lo deberías haber dicho.', 'Tendrías que habérmelo dicho.', 'Me lo tendrías que haber dicho.',
      'Debiste decírmelo.', 'Me lo debiste decir.', 'Debería habérmelo dicho.', 'Me lo debería haber dicho.', 'Tendría que habérmelo dicho.',
    ], 'deberías / tendrías que + haber + participe ; pronoms accrochés à haber ou placés devant le modal.', { kc: DEINF, d: 0.9 })
    .listen('Si no hubiera perdido el autobús esta mañana, no estaría ahora esperando un taxi bajo la lluvia.', '¿Dónde está ahora?', [
      'Esperando un taxi bajo la lluvia', 'En el autobús', 'En la oficina',
    ], 0, 'Condition passée (hubiera perdido), situation présente (estaría esperando).', { d: 0.7 })
    .listen('De haber sabido que la entrada era gratis, habríamos traído a los niños.', '¿Qué no sabían?', [
      'Que la entrada era gratis', 'Que los niños no podían entrar', 'Que el museo cerraba pronto',
    ], 0, 'De haber sabido = si hubiéramos sabido.', { kc: DEINF, d: 0.9 })
    .dictation('Si hubiera nacido en Sevilla, hablaría con acento andaluz.', 'Passé → présent : hubiera nacido, hablaría.', { d: 0.7 })
    .repeat('Tendrías que haberme llamado antes.', 'tendrías que + haber + participe : reproche.', { kc: DEINF, d: 0.6 })
    .say('Si j’avais plus d’argent, j’aurais acheté cet appartement.', [
      'Si tuviera más dinero, habría comprado ese piso.', 'Si tuviese más dinero, habría comprado ese piso.', 'Si tuviera más dinero, hubiera comprado ese piso.',
      'Si tuviera más dinero, me habría comprado ese piso.', 'Si tuviese más dinero, me habría comprado ese piso.', 'Si tuviera más dinero, habría comprado aquel piso.',
      'Si tuviera más dinero, habría comprado ese apartamento.', 'Habría comprado ese piso si tuviera más dinero.',
    ], 'Présent → passé : si tuviera (situation générale), habría comprado (fait passé).', { d: 0.8 })
    .answer('¿Cómo sería tu vida ahora si hubieras nacido en otro país?', 'Si hubiera nacido en Argentina, ahora hablaría español con otro acento y seguramente comería mucha más carne.',
      'si + hubiera nacido, ahora + conditionnel simple.', { keywords: [['sería', 'hablaría', 'viviría', 'tendría', 'comería', 'trabajaría', 'estaría', 'haría', 'podría']], minWords: 12, d: 1.0 })
    .build(),
};
