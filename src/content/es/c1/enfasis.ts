import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const LO = 'es.c1.grammar.neuter_lo_adjective';
const LOQUE = 'es.c1.grammar.lo_adjective_que';
const CLEFT = 'es.c1.grammar.cleft_sentences';
const DISLOC = 'es.c1.grammar.clitic_dislocation';

export const enfasis1: Lesson = {
  id: 'es-c1-enfasis-1',
  cefr: 'C1',
  unitId: 'es-c1-enfasis',
  title: 'Le neutre lo',
  subtitle: 'Lo importante · lo de ayer · lo caras que son · lo bien que canta',
  kcIds: [LO, LOQUE],
  estMinutes: 13,
  explanation: [
    {
      title: 'lo + adjectif : l’idée abstraite',
      body: 'lo + adjectif masculin singulier désigne une qualité ou un aspect : lo bueno (ce qui est bien), lo importante (l’important), lo peor (le pire). lo de + nom ou infinitif = l’histoire de, ce qui concerne.',
      table: [
        ['Lo importante es participar.', 'L’important, c’est de participer.'],
        ['Lo mejor de este trabajo es el horario.', 'Le mieux, dans ce travail, c’est l’horaire.'],
        ['Lo más difícil fue empezar.', 'Le plus difficile a été de commencer.'],
        ['¿Te has enterado de lo de Marta?', 'Tu es au courant pour Marta ?'],
      ],
      examples: [
        { en: 'Lo peor de todo fue la espera.', fr: 'Le pire, ce fut l’attente.' },
      ],
      tip: 'Le français dit « l’important, c’est… » avec un article masculin ; l’espagnol emploie lo, jamais el : « el importante » désignerait une personne.',
    },
    {
      title: 'lo + adjectif / adverbe + que : l’intensité',
      body: 'Après des verbes comme saber, ver, imaginar, sorprender, lo + adjectif ou adverbe + que exprime le degré (à quel point, combien). L’adjectif s’accorde avec le nom, malgré lo.',
      table: [
        ['No sabes lo cansada que estoy.', 'Tu ne sais pas à quel point je suis fatiguée.'],
        ['Mira lo caras que son las entradas.', 'Regarde comme les billets sont chers.'],
        ['Me sorprendió lo bien que habla.', 'J’ai été surpris de voir à quel point il parle bien.'],
        ['¡Lo que has crecido!', 'Qu’est-ce que tu as grandi !'],
      ],
      tip: 'Piège d’accord : lo reste invariable, mais l’adjectif suit le nom (lo caras que son las entradas). Avec un adverbe (bien, lejos, rápido), rien ne s’accorde.',
    },
  ],
  exercises: exercises('es-c1-enfasis-1', 'C1', { kc: LO })
    .mcq('___ de este trabajo es que puedo teletrabajar dos días por semana.', ['Lo mejor', 'El mejor', 'La mejor'], 0, 'Aspect abstrait → lo mejor.', { d: 1.4 })
    .mcq('No te imaginas lo ___ que son las entradas del concierto.', ['caras', 'caro', 'cara'], 0, 'lo + adjectif + que : l’adjectif s’accorde avec entradas.', { kc: LOQUE, d: 1.7 })
    .cloze('¿Te has enterado de ___ de Marta? Se va a vivir a Australia.', ['lo'], 'lo de + nom = l’histoire de, ce qui concerne.', { d: 1.6 })
    .cloze('Me sorprendió lo ___ que habla español: parece nativo.', ['bien'], 'lo + adverbe + que : lo bien que habla.', { kc: LOQUE, d: 1.6 })
    .type('Traduis l’amorce : « Le plus difficile, c’est… » → « ___ es… »', ['Lo más difícil'], 'le plus + adjectif → lo más + adjectif.', { d: 1.5 })
    .type('Complète avec l’adjectif accordé : « No sabes lo (cansado, ella) ___ que está. »', ['cansada'], 'lo invariable, adjectif accordé : cansada.', { kc: LOQUE, d: 1.7 })
    .order('Tu ne sais pas à quel point je t’aime.', 'No sabes lo mucho que te quiero.', 'à quel point → lo mucho que.', { kc: LOQUE, distractors: ['la'], d: 1.7 })
    .tr('L’important, c’est de participer.', ['Lo importante es participar.', 'Lo importante es tomar parte.', 'Lo que importa es participar.'], 'lo importante es + infinitif (sans de).', { d: 1.4 })
    .tr('Tu as vu comme elle chante bien ?', alt(['¿Has visto ', '¿Has oído '], ['lo bien que canta?', 'qué bien canta?', 'cómo canta de bien?']),
      'lo bien que canta (ou qué bien canta).', { kc: LOQUE, d: 1.8 })
    .listen('Lo malo del piso no es el precio, sino lo lejos que está del centro: tardo una hora en llegar al trabajo.', '¿Cuál es el inconveniente del piso?', [
      'Que está muy lejos del centro', 'Que es muy caro', 'Que es muy pequeño',
    ], 0, 'lo malo = l’inconvénient ; lo lejos que está = à quel point il est loin.', { kc: [LO, LOQUE], d: 1.6 })
    .listen('¡Lo que has crecido! La última vez que te vi eras así de pequeño.', '¿Qué expresa la persona?', [
      'Sorpresa por lo mucho que ha crecido', 'Preocupación por su salud', 'Que el niño sigue igual',
    ], 0, '¡Lo que has crecido! = qu’est-ce que tu as grandi !', { kc: LOQUE, d: 1.6 })
    .dictation('Lo peor de todo fue la espera.', 'lo peor : le pire.', { d: 1.4 })
    .repeat('Ya verás lo rápido que se pasa el tiempo.', 'lo rápido que : adverbe, invariable.', { kc: LOQUE, d: 1.5 })
    .say('Le mieux, c’est de ne rien dire.', ['Lo mejor es no decir nada.', 'Lo mejor es callarse.', 'Lo mejor es quedarse callado.', 'Lo mejor es no comentar nada.', 'Lo mejor es callar.'],
      'le mieux → lo mejor ; lo mejor es + infinitif.', { d: 1.5 })
    .answer('¿Qué es lo mejor y lo peor de tu trabajo o de tus estudios?',
      'Lo mejor de mi trabajo es el ambiente con mis compañeros; lo peor, sin duda, es lo lejos que está la oficina de mi casa.',
      'lo mejor, lo peor, lo + adjectif + que.', { kc: [LO, LOQUE], keywords: [['lo mejor', 'lo peor', 'lo bueno', 'lo malo', 'lo más', 'lo que más']], minWords: 18, d: 1.8 })
    .build(),
};

export const enfasis2: Lesson = {
  id: 'es-c1-enfasis-2',
  cefr: 'C1',
  unitId: 'es-c1-enfasis',
  title: 'Clivées et dislocations',
  subtitle: 'Fue ella quien · es aquí donde · lo que necesito es… · el libro lo compré yo',
  kcIds: [CLEFT, DISLOC],
  estMinutes: 14,
  explanation: [
    {
      title: 'Les phrases clivées',
      body: 'Pour mettre un élément en relief : ser + élément + relatif adapté. Personne : quien / el que / la que ; lieu : donde ; temps : cuando ; manière : como ; chose : lo que. Le verbe ser se met au temps du récit.',
      table: [
        ['Fue mi abuela quien me enseñó.', 'C’est ma grand-mère qui m’a appris.'],
        ['Fue en Sevilla donde nos conocimos.', 'C’est à Séville que nous nous sommes rencontrés.'],
        ['Fue entonces cuando lo entendí.', 'C’est alors que j’ai compris.'],
        ['Fue así como empezó todo.', 'C’est ainsi que tout a commencé.'],
        ['Lo que necesito es dormir.', 'Ce dont j’ai besoin, c’est de dormir.'],
      ],
      examples: [
        { en: 'Fui yo quien lo dijo. / Fui yo quien lo dije.', fr: 'C’est moi qui l’ai dit. (les deux accords sont admis)' },
      ],
      tip: 'Gallicisme fréquent : « es aquí que vivo », « fue en 2010 que… ». En espagnol soigné, on choisit le relatif selon la circonstance : es aquí donde, fue en 2010 cuando.',
    },
    {
      title: 'Complément en tête et reprise pronominale',
      body: 'Quand un complément d’objet défini est placé en tête, il est repris par un pronom (lo, la, los, las, le, les). Ce n’est pas une faute de répétition : c’est obligatoire.',
      table: [
        ['El coche lo compramos en 2020.', 'La voiture, nous l’avons achetée en 2020.'],
        ['A tu hermana la vi ayer.', 'Ta sœur, je l’ai vue hier.'],
        ['Eso ya lo sé.', 'Ça, je le sais déjà.'],
        ['A mí no me lo digas.', 'Ne me le dis pas, à moi.'],
        ['Dinero no tengo.', 'De l’argent, je n’en ai pas. (nom sans article : pas de reprise)'],
      ],
      tip: 'Pas de virgule obligatoire en espagnol (« Las llaves las dejé en la mesa »). Avec un nom sans déterminant, on ne reprend pas : « Tiempo no tengo », pas « tiempo no lo tengo ».',
    },
  ],
  exercises: exercises('es-c1-enfasis-2', 'C1', { kc: CLEFT })
    .mcq('Fue en Salamanca ___ nos conocimos.', ['donde', 'que', 'cuando'], 0, 'Lieu mis en relief → donde (« que » serait un gallicisme).', { d: 1.5 })
    .mcq('¿Dónde aprendió Lola lo esencial de la cocina?', ['En la cocina de su abuela', 'En una escuela de hostelería', 'En un restaurante famoso'], 0,
      'Fue en su cocina, no en una escuela, donde aprendí lo esencial.', {
        kc: [CLEFT, DISLOC], d: 1.7,
        passage: 'Entrevista con Lola Ferrer, cocinera de El Faro de Benalmar\n—¿Cómo empezó todo?\n—Fue mi abuela quien me enseñó a cocinar. Y fue en su cocina, no en una escuela, donde aprendí lo esencial. Las recetas no las apuntaba nunca: las llevaba en la cabeza.\n—¿Y el éxito del restaurante?\n—El mérito lo tiene el equipo. Lo que buscamos es que el cliente se sienta en casa. Los premios, la verdad, no los persigo.',
      })
    .cloze('Lo que más me molesta ___ la falta de puntualidad.', ['es'], 'Pseudo-clivée : lo que… es…', { d: 1.4 })
    .cloze('Las llaves ___ dejé encima de la mesa.', ['las'], 'Objet en tête → reprise obligatoire : las llaves las dejé.', { kc: DISLOC, hint: 'pronom', d: 1.6 })
    .type('Complète avec le relatif qui convient : « Fue así ___ descubrieron la vacuna. »', ['como'], 'Manière mise en relief → como.', { d: 1.7 })
    .type('Complète avec le pronom de reprise : « A tus padres ___ vi ayer en el mercado. »', ['los'], 'Objet direct masculin pluriel en tête → los.', { kc: DISLOC, d: 1.7 })
    .order('C’est ici que j’ai grandi.', 'Es aquí donde crecí.', 'Lieu → es aquí donde (pas « que »).', { distractors: ['que'], d: 1.6 })
    .tr('C’est moi qui ai payé le dîner.', ['Fui yo quien pagó la cena.', 'Fui yo quien pagué la cena.', 'Fui yo el que pagó la cena.', 'Fui yo la que pagó la cena.', 'Fui yo el que pagué la cena.', 'Fui yo la que pagué la cena.', 'He sido yo quien ha pagado la cena.', 'He sido yo el que ha pagado la cena.', 'He sido yo la que ha pagado la cena.'],
      'Clivée : fui yo quien pagó (ou pagué) ; ser au temps du récit.', { d: 1.8 })
    .tr('Ce film, je l’ai déjà vu deux fois.', ['Esa película ya la he visto dos veces.', 'Esa película la he visto ya dos veces.', 'Esta película ya la he visto dos veces.', 'Esta película la he visto ya dos veces.', 'Esa película ya la vi dos veces.', 'Esta película ya la vi dos veces.', 'Esa peli ya la he visto dos veces.'],
      'Objet en tête repris par la.', { kc: DISLOC, d: 1.6 })
    .listen('No fue el ministro quien anunció la medida, sino su portavoz, y lo hizo a través de las redes sociales.', '¿Quién anunció la medida?', [
      'El portavoz del ministro', 'El ministro en persona', 'Un periodista',
    ], 0, 'No fue el ministro quien…, sino su portavoz.', { d: 1.6 })
    .listen('El informe ya lo he enviado, pero las facturas todavía no las he revisado; las miro mañana sin falta.', '¿Qué le queda por hacer?', [
      'Revisar las facturas', 'Enviar el informe', 'Escribir el informe',
    ], 0, 'el informe lo he enviado ; las facturas no las he revisado.', { kc: DISLOC, d: 1.6 })
    .dictation('Fue entonces cuando me di cuenta del error.', 'Temps mis en relief → cuando.', { d: 1.6 })
    .repeat('Eso ya lo sabía yo.', 'eso… lo : reprise du neutre.', { kc: DISLOC, d: 1.4 })
    .say('C’est ce que je voulais te dire.', ['Eso es lo que quería decirte.', 'Es lo que quería decirte.', 'Eso es lo que te quería decir.', 'Es lo que te quería decir.', 'Esto es lo que quería decirte.', 'Esto es lo que te quería decir.'],
      'ce que → lo que.', { d: 1.5 })
    .answer('¿Quién o qué fue decisivo en una etapa importante de tu vida? Responde con frases como «Fue… quien / donde / cuando…».',
      'Fue mi profesora de francés quien me animó a estudiar idiomas, y fue en Lyon donde descubrí que quería dedicarme a la traducción.',
      'Clivées : fue… quien / donde / cuando.', { kc: [CLEFT, DISLOC], keywords: [['quien', 'donde', 'cuando', 'el que', 'la que', 'como'], ['fue', 'es', 'era']], minWords: 18, d: 1.9 })
    .build(),
};
