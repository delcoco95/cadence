import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const EPIST = 'es.c2.grammar.epistemic_mood';
const DEBER = 'es.c2.grammar.deber_de';
const HEDGE = 'es.c2.function.hedging';
const EVID = 'es.c2.function.evidentials';

export const matices1: Lesson = {
  id: 'es-c2-matices-1',
  cefr: 'C2',
  unitId: 'es-c2-matices',
  title: 'Doser la certitude',
  subtitle: 'quizá venga / quizá viene · a lo mejor · puede que · deber de',
  kcIds: [EPIST, DEBER],
  estMinutes: 14,
  explanation: [
    {
      title: 'Adverbes de doute et choix du mode',
      body: 'Le mode traduit le degré de certitude du locuteur. Après quizá(s), tal vez, posiblemente, probablemente placés AVANT le verbe, l’indicatif présente l’hypothèse comme plausible, le subjonctif la rend plus incertaine. a lo mejor et igual (familier) exigent l’indicatif ; puede (ser) que et es posible que exigent le subjonctif.',
      table: [
        ['Quizá viene mañana. / Quizá venga mañana.', 'Il viendra peut-être demain (indicatif : plus probable).'],
        ['A lo mejor tiene razón. (jamais *tenga)', 'Ça se trouve, il a raison.'],
        ['Igual llueve esta tarde. (familier)', 'Il se peut qu’il pleuve cet après-midi.'],
        ['Puede que no lo sepa.', 'Il est possible qu’il ne le sache pas.'],
        ['Viene mañana, quizá. (adverbe après le verbe)', 'Indicatif obligatoire.'],
      ],
      examples: [
        { en: 'Tal vez nos hayamos precipitado al juzgarlo.', fr: 'Peut-être nous sommes-nous trop pressés de le juger.' },
        { en: 'Igual me paso luego por tu casa.', fr: 'Je passerai peut-être chez toi tout à l’heure.' },
      ],
      tip: 'Piège : « a lo mejor » ne signifie pas « au mieux » mais « peut-être, ça se trouve ». Et jamais de subjonctif derrière : *a lo mejor venga est fautif.',
    },
    {
      title: 'deber de + infinitif : la supposition',
      body: 'La norme distingue deber + infinitif (obligation) et deber de + infinitif (probabilité). Dans l’usage, deber + infinitif s’emploie aussi pour la probabilité, mais deber de pour l’obligation est considéré comme fautif.',
      table: [
        ['Debe de tener unos cincuenta años.', 'Il doit avoir la cinquantaine (supposition).'],
        ['Debes respetar las normas.', 'Tu dois respecter les règles (obligation).'],
        ['Debió de perder el tren.', 'Il a dû rater le train (supposition sur le passé).'],
        ['Debería haberlo avisado.', 'J’aurais dû le prévenir (reproche, obligation non remplie).'],
      ],
      tip: 'Le français « il a dû » est ambigu : obligation (tuvo que irse) ou supposition (debió de irse, se habrá ido). Choisissez selon le sens.',
    },
  ],
  exercises: exercises('es-c2-matices-1', 'C2', { kc: EPIST })
    .mcq('A lo mejor ___ razón y nos hemos equivocado de calle.', ['tiene', 'tenga', 'tuviera'], 0, 'a lo mejor + indicatif, toujours : tiene.', { d: 2.2 })
    .mcq('Llevan tres horas reunidos: ___ discutiendo el presupuesto.', ['deben de estar', 'deben estar obligados a', 'han de deber'], 0, 'Supposition : deber de + infinitif (deben de estar).', { kc: DEBER, d: 2.3 })
    .cloze('Puede que el director no ___ al tanto de lo ocurrido.', ['esté', 'estuviera', 'estuviese'], 'puede que + subjonctif : esté (ou imparfait si le contexte est passé).', { hint: 'estar', d: 2.3 })
    .cloze('No contesta al teléfono; ___ de haberse quedado sin batería.', ['debe', 'debió'], 'deber de + infinitif composé : supposition sur un fait passé.', { kc: DEBER, hint: 'deber', d: 2.4 })
    .type('Remplace « a lo mejor » par « quizá » en exprimant plus de doute : « Quizá ___ (llegar, ellos) tarde. »', ['lleguen'], 'quizá + subjonctif = hypothèse plus incertaine.', { d: 2.4 })
    .type('Obligation ou supposition ? Complète sans préposition superflue : « Los conductores ___ respetar el límite de velocidad. »', ['deben', 'tienen que', 'han de'], 'Obligation : deber + infinitif, sans « de ».', { kc: DEBER, d: 2.3 })
    .order('Il est possible qu’ils ne nous aient pas entendus.', 'Puede que no nos hayan oído.', 'puede que + subjonctif passé.', { distractors: ['han', 'oyeron'], d: 2.3 })
    .tr('Ça se trouve, elle est déjà partie.', [
      ...alt(['A lo mejor ', 'Igual ', 'Lo mismo '], ['ya se ha ido.', 'se ha ido ya.', 'ya se ha marchado.', 'se ha marchado ya.']),
      'Quizá ya se haya ido.', 'Quizás ya se haya ido.', 'Tal vez ya se haya ido.', 'Puede que ya se haya ido.', 'Puede que ya se haya marchado.',
    ], 'a lo mejor / igual + indicatif ; quizá / puede que + subjonctif.', { d: 2.4 })
    .tr('Il a dû oublier le rendez-vous.', [
      'Debió de olvidarse de la cita.', 'Debe de haberse olvidado de la cita.', 'Debió de olvidar la cita.', 'Debe de haber olvidado la cita.',
      'Se habrá olvidado de la cita.', 'Habrá olvidado la cita.', 'Debió olvidarse de la cita.', 'Debe haberse olvidado de la cita.', 'Se le habrá olvidado la cita.', 'Se le olvidaría la cita.',
    ], 'Supposition : debió de + infinitif ou futur antérieur (se habrá olvidado).', { kc: DEBER, d: 2.5 })
    .listen('—¿Vendrá Marta a la cena? —Igual sí, igual no. Me dijo que tenía mucho trabajo, así que no cuentes demasiado con ella.', '¿Qué grado de certeza expresa el hablante?', [
      'No sabe si vendrá y lo ve poco probable', 'Está seguro de que vendrá', 'Sabe que no vendrá',
    ], 0, 'igual sí, igual no = peut-être que oui, peut-être que non ; « no cuentes con ella » baisse la probabilité.', { d: 2.3 })
    .listen('Por las marcas del suelo, el ladrón debió de entrar por la ventana de la cocina, aunque todavía no lo podemos confirmar.', '¿Qué expresa el policía?', [
      'Una hipótesis sobre cómo entró el ladrón', 'Una orden al ladrón', 'Un hecho comprobado',
    ], 0, 'debió de entrar = supposition, confirmée par « no lo podemos confirmar ».', { kc: DEBER, d: 2.4 })
    .dictation('Tal vez nos hayamos precipitado al juzgarlo.', 'tal vez + subjonctif passé : hayamos precipitado.', { d: 2.5, accepted: ['Tal vez nos hayamos precipitado al juzgarlo.', 'Tal vez nos hayamos precipitado al juzgarle.'] })
    .repeat('Debe de tener unos cincuenta años, aunque aparenta menos.', 'deber de : supposition ; aparentar = paraître (un âge).', { kc: DEBER, d: 2.2 })
    .say('Il viendra peut-être, mais je n’en suis pas sûr.', [
      ...alt(['Quizá venga', 'Quizás venga', 'Tal vez venga', 'Puede que venga', 'A lo mejor viene', 'Igual viene', 'Quizá viene', 'Quizás viene', 'Tal vez viene'], [', pero no estoy seguro.', ', pero no estoy segura.', ', pero no lo sé seguro.']),
    ], 'Les deux modes sont possibles après quizá ; a lo mejor et igual imposent l’indicatif.', { d: 2.3 })
    .answer('¿Qué crees que habrá cambiado en tu ciudad dentro de veinte años? Usa al menos dos maneras distintas de expresar probabilidad.',
      'Dentro de veinte años quizá haya menos coches en el centro y a lo mejor la gente trabaja más desde casa, aunque puede que los alquileres sigan subiendo.',
      'Varie les marqueurs : quizá / tal vez (deux modes), a lo mejor (indicatif), puede que (subjonctif).', {
        kc: [EPIST, DEBER], keywords: [['quizá', 'quizás', 'tal vez', 'posiblemente', 'probablemente'], ['a lo mejor', 'igual', 'puede que', 'es posible que', 'debe de', 'deben de']], minWords: 20, d: 2.6,
      })
    .build(),
};

export const matices2: Lesson = {
  id: 'es-c2-matices-2',
  cefr: 'C2',
  unitId: 'es-c2-matices',
  title: 'Atténuer et rapporter sans s’engager',
  subtitle: 'Quería pedirte… · vendría a ser · por lo visto · se ve que',
  kcIds: [HEDGE, EVID],
  estMinutes: 14,
  explanation: [
    {
      title: 'L’atténuation : adoucir une demande ou un avis',
      body: 'L’espagnol d’Espagne est souvent direct, mais il dispose de nombreux adoucisseurs : imparfait de politesse, conditionnel, formules de précaution et litotes.',
      table: [
        ['Quería pedirte un favor.', 'Je voulais te demander un service (imparfait de politesse).'],
        ['Yo diría que no es el mejor momento.', 'Je dirais que ce n’est pas le meilleur moment.'],
        ['No sé si me explico.', 'Je ne sais pas si je suis clair.'],
        ['Vendría a costar unos mil euros.', 'Ça coûterait dans les mille euros (approximation).'],
        ['Es un poco largo, ¿no?', 'C’est un peu long, non ? (question de confirmation)'],
        ['No es por nada, pero…', 'Ce n’est pas pour dire, mais…'],
      ],
      tip: 'venir a + infinitif marque l’approximation : « Viene a decir que… » = « En gros, il dit que… ». Ce n’est pas un futur.',
    },
    {
      title: 'Les évidentiels : d’où vient l’information ?',
      body: 'Pour signaler qu’on rapporte un ouï-dire ou une déduction, sans s’en porter garant.',
      table: [
        ['Por lo visto, van a cerrar la fábrica.', 'Apparemment (d’après ce qu’on dit), ils vont fermer l’usine.'],
        ['Al parecer / Según parece, no hubo heridos.', 'Il semblerait qu’il n’y ait pas eu de blessés.'],
        ['Se ve que no ha dormido nada.', 'On voit bien qu’il n’a pas dormi (déduction).'],
        ['Dicen que… / Se dice que…', 'On dit que…'],
        ['Dizque va a llover. (Amérique, familier)', 'Il paraît qu’il va pleuvoir.'],
      ],
      tip: 'por lo visto = ouï-dire, sans lien avec la vue. se ve que, lui, peut être une vraie déduction à partir d’indices.',
    },
  ],
  exercises: exercises('es-c2-matices-2', 'C2', { kc: HEDGE })
    .mcq('Choisis la formule la plus atténuée pour demander un service à un collègue :', ['Quería pedirte un favor, si no es molestia.', 'Hazme un favor.', 'Me tienes que hacer un favor.'], 0, 'Imparfait de politesse (quería) + précaution (si no es molestia).', { d: 2.2 })
    .mcq('¿Qué afirma con seguridad el autor del mensaje?', [
      'Que la reunión del jueves se ha suspendido', 'Que el director se ha jubilado', 'Que la empresa se va a vender',
    ], 0, 'Seul fait présenté comme sûr : « se ha suspendido ». Le reste est marqué par por lo visto, al parecer, igual.', {
      kc: EVID, d: 2.6,
      passage: 'Hola a todos: os confirmo que la reunión del jueves se ha suspendido. Por lo visto, el director está de baja, aunque no sé si es algo grave. Al parecer, la dirección quiere aprovechar para replantear el calendario, e igual nos convocan la semana que viene. Yo diría que no hace falta preparar nada por ahora. Ya os iré contando.',
    })
    .cloze('El arreglo ___ a costar unos trescientos euros, más o menos.', ['vendría', 'viene', 'vendrá'], 'venir a + infinitif = approximation (vendría a costar).', { hint: 'venir', d: 2.4 })
    .cloze('Por lo ___, el nuevo jefe es bastante exigente, pero yo todavía no lo conozco.', ['visto'], 'por lo visto = apparemment, d’après ce qu’on dit.', { kc: EVID, d: 2.3 })
    .type('Imparfait de politesse : « ___ (querer, yo) saber si tienen habitaciones libres para el sábado. »', ['Quería', 'Quisiera'], 'quería (imparfait de politesse) ou quisiera (subjonctif imparfait).', { d: 2.3 })
    .type('Complète l’évidentiel de déduction : « Se ___ que no ha dormido nada: tiene unas ojeras tremendas. »', ['ve'], 'se ve que = on voit bien que (déduction à partir d’indices).', { kc: EVID, d: 2.3 })
    .order('Je dirais que ce n’est pas le meilleur moment.', 'Yo diría que no es el mejor momento.', 'Conditionnel d’atténuation : yo diría que.', { distractors: ['digo', 'mayor'], d: 2.2 })
    .tr('Apparemment, il n’y a pas eu de blessés.', alt(['Por lo visto', 'Al parecer', 'Según parece', 'Parece que'], [', no hubo heridos.', ', no ha habido heridos.']).map((s) => s.replace('Parece que, ', 'Parece que ')),
      'Évidentiels : por lo visto, al parecer, según parece.', { kc: EVID, d: 2.4 })
    .tr('En gros, il dit que le projet n’est pas rentable.', [
      ...alt(['Viene a decir que ', 'Vendría a decir que ', 'Básicamente dice que ', 'En resumen, dice que ', 'En pocas palabras, dice que '], ['el proyecto no es rentable.']),
    ], 'venir a decir que = en gros, il dit que.', { d: 2.5 })
    .listen('Perdona que te moleste, ¿eh?, pero no sé si podrías echarme una mano con la mudanza el sábado. Si no puedes, no pasa nada, de verdad.', '¿Cómo formula la petición?', [
      'Con muchas precauciones para no imponer', 'Como una orden', 'Con reproches',
    ], 0, 'Perdona que te moleste, no sé si podrías, si no puedes no pasa nada : atténuation maximale.', { d: 2.3 })
    .listen('Se ve que anoche hubo tormenta: hay ramas por toda la calle y el parque está cerrado.', '¿Cómo sabe el hablante que hubo tormenta?', [
      'Lo deduce de lo que ve', 'Se lo ha contado un vecino', 'Lo ha oído en la radio',
    ], 0, 'se ve que = déduction à partir d’indices visibles.', { kc: EVID, d: 2.3 })
    .dictation('No es por nada, pero yo ya te lo había advertido.', 'No es por nada, pero… = ce n’est pas pour dire, mais…', { d: 2.4 })
    .repeat('Al parecer, la dirección quiere replantear el calendario.', 'al parecer : information rapportée.', { kc: EVID, d: 2.2 })
    .say('Je voulais te demander quelque chose, si tu as une minute.', [
      ...alt(['Quería pedirte una cosa', 'Quería preguntarte una cosa', 'Quería pedirte algo', 'Quería preguntarte algo', 'Te quería pedir una cosa', 'Te quería preguntar una cosa', 'Te quería pedir algo', 'Te quería preguntar algo'], [', si tienes un minuto.', ', si tienes un momento.']),
    ], 'Imparfait de politesse ; pedir (demander quelque chose) / preguntar (poser une question).', { d: 2.3 })
    .answer('Un amigo te pide tu opinión sobre su novela, que te parece aburrida. Responde con tacto, atenuando la crítica.',
      'Yo diría que la historia es interesante, pero no sé si el ritmo funciona del todo: quizá el principio se hace un poco largo y vendría bien recortar algunas descripciones.',
      'Atténuateurs : yo diría que, no sé si, quizá, un poco, vendría bien.', {
        kc: [HEDGE, EPIST], keywords: [['diría', 'no sé si', 'quizá', 'quizás', 'tal vez'], ['un poco', 'algo', 'vendría', 'igual', 'a lo mejor', 'bastante']], minWords: 20, d: 2.6,
      })
    .build(),
};
