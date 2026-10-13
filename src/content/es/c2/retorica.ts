import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const FIG = 'es.c2.reading.rhetorical_figures';
const LITOTES = 'es.c2.function.understatement';
const IRONY = 'es.c2.function.irony';
const IMPLIC = 'es.c2.function.implicature';

export const retorica1: Lesson = {
  id: 'es-c2-retorica-1',
  cefr: 'C2',
  unitId: 'es-c2-retorica',
  title: 'Figures de style',
  subtitle: 'metáfora · hipérbole · quiasmo · no es precisamente barato',
  kcIds: [FIG, LITOTES],
  estMinutes: 14,
  explanation: [
    {
      title: 'Les figures les plus fréquentes',
      table: [
        ['metáfora', 'Su mirada era un cuchillo.'],
        ['metonimia', 'Leer a Cervantes. / Tomarse una copa.'],
        ['hipérbole', 'Te lo he dicho mil veces. / Me muero de hambre.'],
        ['antítesis', 'Lo tenía todo y no disfrutaba de nada.'],
        ['anáfora', 'Ni un paso atrás, ni una duda, ni un reproche.'],
        ['quiasmo', 'Hay que comer para vivir, no vivir para comer.'],
        ['pregunta retórica', '¿Quién no ha soñado alguna vez con dejarlo todo?'],
      ],
      tip: 'La pregunta retórica n’attend pas de réponse : elle affirme. « ¿Quién no ha soñado…? » = tout le monde en a rêvé.',
    },
    {
      title: 'Litote et euphémisme : dire moins pour dire plus',
      body: 'L’espagnol parlé use beaucoup de la litote, souvent avec ironie, et le discours public de l’euphémisme.',
      table: [
        ['No es precisamente barato.', 'C’est loin d’être bon marché (= c’est cher).'],
        ['No está nada mal.', 'C’est pas mal du tout (= c’est très bien).'],
        ['No le hace ascos a un buen vino.', 'Il ne crache pas sur un bon vin.'],
        ['pasar a mejor vida', 'passer de vie à trépas'],
        ['un ajuste de plantilla', 'un « ajustement des effectifs » (= licenciements)'],
        ['las personas mayores', 'les personnes âgées'],
      ],
      tip: '« no… precisamente » est la litote reine en Espagne : « No es precisamente un genio » = il est loin d’être un génie.',
    },
  ],
  exercises: exercises('es-c2-retorica-1', 'C2', { kc: FIG })
    .mcq('«Hay que comer para vivir, no vivir para comer.» ¿Qué figura es?', ['un quiasmo', 'una metonimia', 'una hipérbole'], 0, 'Quiasme : structure croisée A-B / B-A.', { d: 2.3 })
    .mcq('«El piso no es precisamente pequeño.» Quiere decir que el piso es:', ['bastante grande', 'muy pequeño', 'de tamaño normal'], 0, 'Litote : no es precisamente pequeño = il est grand.', { kc: LITOTES, d: 2.3 })
    .mcq('¿Qué recurso domina en el discurso?', [
      'La anáfora y la pregunta retórica', 'La metonimia y el eufemismo', 'La litote y el quiasmo',
    ], 0, 'Répétition de « Queremos… » (anaphore) et question finale sans réponse attendue.', {
      d: 2.7,
      passage: 'Queremos un barrio con parques y no con aparcamientos. Queremos un barrio donde los niños puedan jugar en la calle. Queremos un barrio que no expulse a quienes llevan toda la vida en él. Y yo les pregunto, señores concejales: ¿de verdad necesitan que se lo repitamos otra vez? ¿Quién, en esta sala, querría vivir rodeado de grúas y de tráfico?',
    })
    .cloze('No es que sea un genio, pero tonto no ___.', ['es'], 'Litote : tonto no es = il est plutôt intelligent.', { kc: LITOTES, d: 2.4 })
    .type('Hyperbole : « Estoy muerto de ___, ¿cenamos ya? »', ['hambre', 'cansancio'], 'estar muerto de hambre : hyperbole courante.', { d: 2.2 })
    .type('Euphémisme d’entreprise pour « licenciements » : « La empresa anunció un ajuste de ___. »', ['plantilla'], 'un ajuste de plantilla = des suppressions de postes.', { kc: LITOTES, d: 2.5 })
    .order('Ce n’est pas mal du tout pour une première fois.', 'No está nada mal para ser la primera vez.', 'Litote : no está nada mal = c’est très bien.', { distractors: ['malo', 'primer'], kc: LITOTES, d: 2.3 })
    .tr('Je te l’ai dit mille fois.', ['Te lo he dicho mil veces.', 'Te lo dije mil veces.', 'Te lo he dicho cien veces.', 'Te lo he repetido mil veces.'],
      'Hyperbole identique en français et en espagnol.', { d: 2.2 })
    .tr('Ce restaurant est loin d’être bon marché.', [
      ...alt(['Este restaurante ', 'Ese restaurante '], ['no es precisamente barato.', 'no es nada barato.', 'dista mucho de ser barato.']),
    ], 'Litote : no es precisamente barato.', { kc: LITOTES, d: 2.4 })
    .listen('Tenía todo el dinero del mundo y ni un solo minuto para disfrutarlo.', '¿Qué figura organiza la frase?', [
      'Una antítesis entre todo y nada', 'Una metonimia', 'Una pregunta retórica',
    ], 0, 'Antithèse : todo el dinero / ni un solo minuto.', { d: 2.5 })
    .listen('—¿Qué tal el nuevo novio de tu hermana? —Hombre, simpático es, y feo tampoco es… Pero no es precisamente un genio.', '¿Qué opina la hablante del novio?', [
      'Que es agradable y guapo, pero poco inteligente', 'Que es feo y antipático', 'Que es muy inteligente',
    ], 0, 'Litotes : feo tampoco es (= assez beau), no es precisamente un genio (= peu malin).', { kc: LITOTES, d: 2.5 })
    .dictation('¿Quién no ha soñado alguna vez con dejarlo todo y empezar de cero?', 'Question rhétorique : affirmation déguisée.', { d: 2.4 })
    .repeat('Ni un paso atrás, ni una duda, ni un reproche.', 'Anaphore : répétition de ni un.', { d: 2.2 })
    .say('Il ne crache pas sur un bon vin.', ['No le hace ascos a un buen vino.', 'No le hace ascos a un vino bueno.', 'A un buen vino no le hace ascos.'],
      'no hacerle ascos a algo = ne pas cracher sur quelque chose.', { kc: LITOTES, d: 2.5 })
    .answer('Escribe dos o tres frases para convencer a tus vecinos de crear un huerto urbano, usando al menos una pregunta retórica y una anáfora.',
      'Queremos un barrio más verde, queremos un barrio más unido, queremos un barrio más sano. ¿Quién no querría comer tomates cultivados a dos pasos de casa?',
      'Anaphore (queremos…) et question rhétorique (¿quién no…?).', {
        kc: [FIG, LITOTES], keywords: [['quién no', 'acaso', 'de verdad', 'por qué no', 'no es'], ['queremos', 'necesitamos', 'ni', 'más']], minWords: 20, d: 2.6,
      })
    .build(),
};

export const retorica2: Lesson = {
  id: 'es-c2-retorica-2',
  cefr: 'C2',
  unitId: 'es-c2-retorica',
  title: 'Ironie et sous-entendus',
  subtitle: '¡Lo que faltaba! · ¡Menudo día! · Ya, claro · Tú verás · con lo que…',
  kcIds: [IRONY, IMPLIC],
  estMinutes: 14,
  explanation: [
    {
      title: 'Les formules ironiques',
      body: 'L’ironie espagnole passe par l’intonation et par des formules figées qui disent le contraire de ce qu’elles semblent dire.',
      table: [
        ['¡Lo que faltaba!', 'Il ne manquait plus que ça !'],
        ['¡Pues sí que estamos buenos!', 'Eh bien, nous voilà bien !'],
        ['¡Menudo día! / ¡Menuda suerte!', 'Quelle journée ! / Quelle chance ! (souvent : quelle malchance)'],
        ['¡Vaya plan!', 'Super programme… (ironique : quel programme pénible)'],
        ['Ya, claro.', 'Mais oui, c’est ça (incrédulité).'],
        ['Muy bonito, sí señor.', 'Bravo, c’est du joli !'],
        ['¡Qué listo eres! (ironique)', 'T’es malin, toi !'],
      ],
      tip: 'menudo devant un nom est presque toujours exclamatif et peut être ironique : « ¡Menudo amigo estás hecho! » = « Bel ami que tu fais ! »',
    },
    {
      title: 'Dire sans dire',
      table: [
        ['Yo no digo nada, pero…', 'Je dis ça, je dis rien…'],
        ['Ahí lo dejo.', 'Je laisse ça là (à vous de conclure).'],
        ['Tú verás. / Allá tú.', 'C’est toi qui vois. / C’est ton problème.'],
        ['¡Con lo que yo he hecho por ti!', 'Après tout ce que j’ai fait pour toi !'],
        ['No es por meter cizaña, pero…', 'Ce n’est pas pour semer la zizanie, mais…'],
        ['Es de un pesado…', 'Il est d’un pénible… (phrase suspendue)'],
      ],
      tip: 'con lo que + verbe exprime le reproche ou le contraste : « Con lo que te gustaba el chocolate… » = toi qui aimais tant le chocolat…',
    },
  ],
  exercises: exercises('es-c2-retorica-2', 'C2', { kc: IRONY })
    .mcq('Se te pincha una rueda bajo la lluvia y dices: «¡Lo que faltaba!». Quieres decir:', ['Que la situación empeora todavía más', 'Que te alegras', 'Que te falta una herramienta'], 0, '¡Lo que faltaba! = il ne manquait plus que ça.', { d: 2.2 })
    .mcq('—Te dejo el coche, pero si lo rompes, tú verás. ¿Qué sobreentiende?', ['Que habrá consecuencias si lo rompe', 'Que no le importa nada', 'Que le enseñará a conducir'], 0, 'tú verás = c’est toi qui vois (menace voilée).', { kc: IMPLIC, d: 2.4 })
    .cloze('¡___ día llevo! Primero se me estropea el coche y luego pierdo las llaves.', ['Menudo', 'Vaya'], 'menudo / vaya + nom : exclamatif, ici ironique.', { d: 2.3 })
    .cloze('¡Con lo ___ yo te he ayudado y ahora no me coges el teléfono!', ['que'], 'con lo que… = après tout ce que (reproche).', { kc: IMPLIC, d: 2.4 })
    .type('—Mañana empiezo a estudiar, en serio. —Ya, ___. (incrédulité)', ['claro'], 'Ya, claro = mais oui, c’est ça.', { d: 2.2 })
    .type('Sous-entendu : « Yo no digo nada, pero el jefe y la nueva salen juntos todas las noches. Ahí lo ___. »', ['dejo'], 'Ahí lo dejo = je laisse ça là.', { kc: IMPLIC, d: 2.4 })
    .order('Eh bien, nous voilà bien !', '¡Pues sí que estamos buenos!', 'Formule ironique figée.', { distractors: ['bien', 'somos'], d: 2.4 })
    .tr('Il ne manquait plus que ça !', ['¡Lo que faltaba!', '¡Solo faltaba eso!', '¡Lo que me faltaba!', '¡Era lo que faltaba!', '¡Lo único que faltaba!'],
      '¡Lo que faltaba! : exaspération.', { d: 2.3 })
    .tr('C’est toi qui vois, mais après ne viens pas te plaindre.', [
      ...alt(['Tú verás', 'Allá tú', 'Tú sabrás'], [', pero luego no vengas a quejarte.', ', pero después no vengas a quejarte.', ', pero luego no te quejes.', ', pero después no te quejes.']),
    ], 'tú verás / allá tú : mise en garde implicite.', { kc: IMPLIC, d: 2.5 })
    .listen('—He suspendido el examen de conducir por tercera vez. —¡Hombre, muy bien! ¡Sigue así y te dan el carné en el próximo siglo!', '¿Qué tono usa el segundo hablante?', [
      'Irónico', 'Admirado', 'Indiferente',
    ], 0, 'muy bien + exagération absurde : ironie.', { d: 2.3 })
    .listen('No es por meter cizaña, pero tu socio lleva semanas reuniéndose con la competencia. Yo, ya sabes, no digo nada.', '¿Qué insinúa el hablante?', [
      'Que el socio podría estar traicionándole', 'Que el socio trabaja demasiado', 'Que debería contratar a alguien de la competencia',
    ], 0, 'no es por meter cizaña, yo no digo nada : insinuation.', { kc: IMPLIC, d: 2.5 })
    .dictation('Muy bonito, sí señor: llegas tarde y encima sin avisar.', 'Muy bonito, sí señor = bravo, c’est du joli (reproche ironique).', { d: 2.4 })
    .repeat('¡Menudo amigo estás hecho!', 'menudo + nom : ironie (« bel ami que tu fais »).', { d: 2.3 })
    .say('Toi qui aimais tant voyager…', ['Con lo que te gustaba viajar…', 'Con lo que te gustaba viajar a ti…', 'Con lo mucho que te gustaba viajar…', 'A ti, que te gustaba tanto viajar…'],
      'con lo que + imparfait : regret, contraste.', { kc: IMPLIC, d: 2.6 })
    .answer('Un compañero de piso ha dejado otra vez la cocina sucia. Reacciona con ironía, sin insultarle.',
      '¡Hombre, muy bonito, sí señor! Menuda cocina me has dejado. Nada, tú tranquilo, que ya friego yo, como siempre. Con lo que me gusta a mí fregar…',
      'Formules ironiques (muy bonito, menuda, tú tranquilo) et con lo que…', {
        kc: [IRONY, IMPLIC], keywords: [['muy bonito', 'menuda', 'menudo', 'vaya', 'lo que faltaba', 'qué bien', 'ya claro'], ['con lo que', 'tú verás', 'allá tú', 'tú tranquilo', 'ahí lo dejo', 'no digo nada']], minWords: 20, d: 2.7,
      })
    .build(),
};
