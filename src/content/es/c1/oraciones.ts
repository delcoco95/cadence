import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const ABS = 'es.c1.grammar.absolute_participle';
const GER = 'es.c1.grammar.gerund_clauses';
const COMPINF = 'es.c1.grammar.compound_infinitive';
const INF = 'es.c1.grammar.infinitive_constructions';

export const oraciones1: Lesson = {
  id: 'es-c1-oraciones-1',
  cefr: 'C1',
  unitId: 'es-c1-oraciones',
  title: 'Participe absolu et gérondif',
  subtitle: 'Terminada la reunión · dicho esto · habiendo terminado · siendo tarde',
  kcIds: [ABS, GER],
  estMinutes: 14,
  explanation: [
    {
      title: 'Le participe absolu',
      body: 'Un participe placé en tête, accordé avec son sujet, résume une action achevée avant la principale. Le sujet vient après le participe. una vez renforce l’idée d’antériorité.',
      table: [
        ['Terminada la reunión, nos fuimos.', 'Une fois la réunion terminée, nous sommes partis.'],
        ['Una vez firmado el contrato, no hay marcha atrás.', 'Une fois le contrat signé, on ne peut plus reculer.'],
        ['Aprobadas las cuentas, se levantó la sesión.', 'Les comptes approuvés, la séance a été levée.'],
        ['Dicho esto, pasemos al siguiente punto.', 'Ceci dit, passons au point suivant.'],
      ],
      tip: 'Ordre inversé par rapport au français : « une fois la réunion terminée » → terminada la reunión (participe d’abord). Et l’accord est obligatoire : terminadas las obras.',
    },
    {
      title: 'Le gérondif : cause, condition, manière',
      body: 'Le gérondif peut exprimer la manière (salió corriendo), la cause (siendo tan tarde…), la condition (estudiando un poco, aprobarás) ou la simultanéité. Le gérondif composé (habiendo + participe) marque l’antériorité.',
      table: [
        ['Siendo tan tarde, cogimos un taxi.', 'Comme il était si tard, nous avons pris un taxi.'],
        ['Saliendo ahora, llegarás a tiempo.', 'Si tu pars maintenant, tu arriveras à l’heure.'],
        ['Habiendo terminado el informe, se fue.', 'Ayant terminé le rapport, il est parti.'],
        ['Hablando se entiende la gente.', 'C’est en parlant qu’on se comprend.'],
      ],
      tip: 'Le participe présent français adjectival (« une lettre annonçant… ») ne se traduit pas par un gérondif : una carta que anunciaba… De même, évitez le gérondif de postériorité (« se cayó, rompiéndose la pierna ») : y se rompió la pierna.',
    },
  ],
  exercises: exercises('es-c1-oraciones-1', 'C1', { kc: ABS })
    .mcq('___ la cena, pasamos al salón a tomar el café.', ['Terminada', 'Terminado', 'Terminadas'], 0, 'Participe absolu accordé avec la cena (féminin singulier).', { d: 1.5 })
    .mcq('Choisis la phrase correcte :', ['Recibí una carta que anunciaba su boda.', 'Recibí una carta anunciando su boda.', 'Recibí una carta anunciada su boda.'], 0,
      'Le gérondif ne qualifie pas un nom : on emploie une relative (que anunciaba).', { kc: GER, d: 1.8 })
    .cloze('Una vez ___ el contrato, ya no podrá echarse atrás.', ['firmado'], 'una vez + participe accordé : firmado el contrato.', { hint: 'firmar', d: 1.5 })
    .cloze('___ terminado el informe, se fue a casa.', ['Habiendo'], 'Gérondif composé (habiendo + participe) : antériorité.', { kc: GER, d: 1.6 })
    .type('Transforme avec un participe absolu : « Cuando se aprobó la ley, empezaron las protestas. » → « ___ la ley, empezaron las protestas. »', ['Aprobada', 'Una vez aprobada'],
      'Participe accordé avec la ley : aprobada.', { d: 1.7 })
    .type('Transforme avec un gérondif : « Si sales ahora, llegarás a tiempo. » → « ___ ahora, llegarás a tiempo. »', ['Saliendo'], 'Gérondif à valeur conditionnelle : saliendo.', { kc: GER, d: 1.7 })
    .order('Ceci dit, passons au point suivant.', 'Dicho esto, pasemos al siguiente punto.', 'Participe absolu figé : dicho esto.', { distractors: ['Diciendo'], d: 1.5 })
    .tr('Une fois les travaux terminés, nous emménagerons.', alt(['Una vez terminadas las obras, ', 'Terminadas las obras, ', 'Acabadas las obras, ', 'Una vez acabadas las obras, ', 'Una vez finalizadas las obras, '], ['nos mudaremos.', 'nos vamos a mudar.', 'nos instalaremos.']),
      'Participe absolu : terminadas las obras (participe en tête, accordé).', { d: 1.8 })
    .tr('Comme il était très tard, nous avons pris un taxi.', alt(['Siendo muy tarde, ', 'Siendo ya muy tarde, ', 'Como era muy tarde, ', 'Como ya era muy tarde, ', 'Dado que era muy tarde, '], ['cogimos un taxi.', 'tomamos un taxi.']),
      'Gérondif causal (siendo muy tarde), plus soutenu que como.', { kc: GER, d: 1.8 })
    .listen('Concluida la votación, el presidente levantó la sesión y los diputados abandonaron el hemiciclo.', '¿Qué ocurrió después de la votación?', [
      'Se levantó la sesión', 'Se repitió la votación', 'Empezó el debate',
    ], 0, 'Concluida la votación : participe absolu (après le vote).', { d: 1.7 })
    .listen('Habiendo perdido el último autobús, no le quedó más remedio que volver andando a casa.', '¿Cómo volvió a casa?', [
      'A pie', 'En autobús', 'En taxi',
    ], 0, 'habiendo perdido : cause antérieure ; volver andando = rentrer à pied.', { kc: GER, d: 1.6 })
    .dictation('Dicho esto, se levantó y salió de la sala.', 'dicho esto : participe absolu.', { d: 1.5 })
    .repeat('Hablando se entiende la gente.', 'Gérondif de manière (proverbe).', { kc: GER, d: 1.4 })
    .say('En travaillant un peu plus, tu réussiras.', [
      ...alt(['Trabajando ', 'Esforzándote '], ['un poco más, '], ['aprobarás.', 'lo conseguirás.', 'lo lograrás.', 'tendrás éxito.']),
      'Si trabajas un poco más, aprobarás.', 'Si trabajas un poco más, lo conseguirás.',
    ], 'Gérondif à valeur conditionnelle : trabajando un poco más.', { kc: GER, d: 1.6 })
    .answer('Cuenta cómo terminó un día especial (una boda, un viaje, una fiesta) usando un participio absoluto o un gerundio.',
      'Terminada la boda, los invitados salimos al jardín y, habiendo bailado toda la noche, volvimos al hotel cuando ya estaba amaneciendo.',
      'Participe absolu (terminada la boda) et gérondif composé (habiendo bailado).', { kc: [ABS, GER], keywords: [['terminada', 'terminado', 'acabada', 'acabado', 'habiendo', 'una vez', 'concluida', 'finalizada', 'terminadas', 'acabadas']], minWords: 18, d: 2.0 })
    .build(),
};

export const oraciones2: Lesson = {
  id: 'es-c1-oraciones-2',
  cefr: 'C1',
  unitId: 'es-c1-oraciones',
  title: 'Infinitif composé et constructions infinitives',
  subtitle: 'Por haber llegado tarde · de haberlo sabido · al salir · con solo mirarla',
  kcIds: [COMPINF, INF],
  estMinutes: 14,
  explanation: [
    {
      title: 'L’infinitif composé',
      body: 'haber + participe marque une action antérieure : après, sans, pour (cause). Les pronoms se soudent à haber : haberlo, habérselo. de + infinitif composé exprime l’irréel du passé.',
      table: [
        ['Después de haber comido, salimos.', 'Après avoir mangé, nous sommes sortis.'],
        ['Le multaron por haber aparcado mal.', 'On lui a mis une amende pour s’être mal garé.'],
        ['Se fue sin haberse despedido.', 'Il est parti sans avoir dit au revoir.'],
        ['De haberlo sabido, habría venido.', 'Si je l’avais su, je serais venu.'],
        ['Me arrepiento de no habérselo dicho.', 'Je regrette de ne pas le lui avoir dit.'],
      ],
      tip: '« Pour avoir fait » (cause) = por haber hecho, jamais para. Après después de, l’infinitif simple suffit souvent : después de comer.',
    },
    {
      title: 'al, nada más, con, de + infinitif',
      body: 'al + infinitif = au moment où (simultanéité) ; nada más + infinitif = dès que, aussitôt ; de + infinitif = si (condition) ; con + infinitif = il suffit de (condition) ou bien que (concession, soutenu) ; con solo + infinitif = rien qu’en.',
      table: [
        ['Al entrar, todos se callaron.', 'Quand il est entré, tout le monde s’est tu.'],
        ['Nada más llegar, me llamó.', 'Dès son arrivée, il m’a appelé.'],
        ['De seguir así, suspenderás.', 'Si tu continues comme ça, tu échoueras.'],
        ['Con estudiar un poco, apruebas.', 'Il suffit d’étudier un peu pour réussir.'],
        ['Con ser tan rico, no es feliz.', 'Bien qu’il soit si riche, il n’est pas heureux.'],
      ],
      tip: 'al + infinitif traduit aussi « en » + participe présent quand il s’agit d’un moment : al salir = en sortant. Avec un sujet différent, il se place après : al llegar mi hermano.',
    },
  ],
  exercises: exercises('es-c1-oraciones-2', 'C1', { kc: COMPINF })
    .mcq('Le multaron por ___ el coche en una plaza reservada.', ['haber aparcado', 'haber aparcando', 'ha aparcado'], 0, 'Cause antérieure : por + infinitif composé.', { d: 1.5 })
    .mcq('¿Cómo «pagaron» la habitación?', ['Prometiendo que volverían', 'Pagando en efectivo', 'Ayudando en la casa'], 0,
      'con solo prometerle que volveríamos = rien qu’en lui promettant de revenir.', {
        kc: [INF, COMPINF], d: 1.8,
        passage: 'Diario de viaje, día 3\nNada más llegar a Puertoalto, nos dimos cuenta de que la pensión que habíamos reservado estaba cerrada. De haberlo sabido, habríamos traído la tienda de campaña. Tras haber preguntado en tres bares, una señora mayor nos ofreció una habitación en su casa. Al despedirnos esta mañana, se negó a aceptar dinero: con solo prometerle que volveríamos, se dio por pagada.',
      })
    .cloze('___ salir de casa, acuérdate de apagar las luces.', ['Al', 'Antes de'], 'al + infinitif = au moment de (antes de convient aussi).', { kc: INF, hint: 'au moment de', d: 1.5 })
    .cloze('De ___ sabido que estabas enfermo, habría ido a verte.', ['haberlo'], 'de + infinitif composé = si je l’avais su ; lo soudé à haber.', { d: 1.8 })
    .type('Complète avec l’infinitif composé : « Me arrepiento de no (decírselo) ___ antes. »', ['habérselo dicho'], 'Pronoms soudés à haber : habérselo dicho (accent écrit).', { d: 2.0 })
    .type('Transforme avec « de + infinitif » : « Si sigues así, vas a suspender. » → « ___ así, vas a suspender. »', ['De seguir', 'De continuar'], 'de + infinitif = si (condition).', { kc: INF, d: 1.8 })
    .order('Dès son arrivée à l’aéroport, il m’a appelé.', 'Nada más llegar al aeropuerto, me llamó.', 'nada más + infinitif = dès que.', { kc: INF, distractors: ['Al'], d: 1.6 })
    .tr('Il est parti sans avoir dit au revoir.', alt(['Se fue ', 'Se marchó '], ['sin haberse despedido.', 'sin despedirse.', 'sin haber dicho adiós.', 'sin decir adiós.']),
      'sin + infinitif composé ; pronom soudé : haberse despedido.', { d: 1.6 })
    .tr('Rien qu’en la regardant, j’ai su qu’elle mentait.', alt(['Con solo mirarla', 'Solo con mirarla'], [', supe que mentía.', ', me di cuenta de que mentía.', ', supe que estaba mintiendo.']),
      'rien qu’en → con solo + infinitif.', { kc: INF, d: 1.9 })
    .listen('Después de haber trabajado veinte años en el extranjero, decidió volver a su pueblo y abrir una librería.', '¿Qué hizo al volver?', [
      'Abrir una librería', 'Buscar trabajo en el extranjero', 'Jubilarse',
    ], 0, 'después de haber trabajado : antériorité.', { d: 1.5 })
    .listen('Con ser tan buen jugador, nunca ha conseguido ganar un torneo importante.', '¿Qué significa la frase?', [
      'Aunque es muy buen jugador, nunca ha ganado un gran torneo', 'Como es muy buen jugador, ha ganado muchos torneos', 'Si fuera mejor jugador, ganaría torneos',
    ], 0, 'con + infinitif à valeur concessive = aunque.', { kc: INF, d: 2.1 })
    .dictation('Tras haber leído el informe, la directora convocó una reunión.', 'tras + infinitif composé (soutenu) = après avoir.', { d: 1.6 })
    .repeat('Al entrar en la sala, todos se callaron.', 'al + infinitif : au moment de.', { kc: INF, d: 1.4 })
    .say('Merci de m’avoir {aidé|aidée}.', ['Gracias por haberme ayudado.', 'Gracias por ayudarme.', 'Muchas gracias por haberme ayudado.', 'Muchas gracias por ayudarme.', 'Gracias por haberme echado una mano.', 'Gracias por echarme una mano.', 'Gracias por tu ayuda.', 'Gracias por su ayuda.'],
      'gracias por + infinitif (composé) ; pas d’accord du participe en espagnol.', { d: 1.5 })
    .answer('¿Hay algo de lo que te arrepientas o te alegres de haber hecho? Explícalo.',
      'Me alegro mucho de haber vivido un año en Valencia, porque, al llegar, no hablaba nada de español y ahora me defiendo bastante bien.',
      'Infinitif composé (haber vivido) et al + infinitif.', { kc: [COMPINF, INF], keywords: [['haber', 'haberme', 'haberlo', 'haberla', 'haberle']], minWords: 18, d: 1.9 })
    .build(),
};
