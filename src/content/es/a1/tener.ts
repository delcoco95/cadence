import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const TENER = 'es.a1.verbs.tener';
const TEXP = 'es.a1.function.tener_expressions';
const ADJ = 'es.a1.grammar.adjective_agreement';
const MUY = 'es.a1.grammar.muy_mucho';

export const tener1: Lesson = {
  id: 'es-a1-tener-1',
  cefr: 'A1',
  unitId: 'es-a1-tener',
  title: 'Le verbe tener',
  subtitle: 'Avoir des frères, un chien, 30 ans, faim ou froid',
  kcIds: [TENER, TEXP],
  estMinutes: 8,
  explanation: [
    {
      title: 'tener (avoir)',
      table: [
        ['yo tengo', 'nosotros tenemos'],
        ['tú tienes', 'vosotros tenéis'],
        ['él / ella / usted tiene', 'ellos / ellas / ustedes tienen'],
      ],
      examples: [
        { en: 'Tengo dos hermanos.', fr: 'J’ai deux frères (ou un frère et une sœur).' },
        { en: '¿Tienes coche?', fr: 'Tu as une voiture ?' },
        { en: 'Mis padres tienen una casa en la playa.', fr: 'Mes parents ont une maison à la plage.' },
      ],
      tip: 'Dans les questions et les négations sur ce qu’on possède en général, on omet souvent l’article : ¿Tienes coche? No tengo perro.',
    },
    {
      title: 'Les expressions avec tener',
      body: 'Comme en français, on « a » son âge, faim ou froid.',
      table: [
        ['tener … años', 'avoir … ans · ¿Cuántos años tienes?'],
        ['tener hambre · tener sed', 'avoir faim · avoir soif'],
        ['tener frío · tener calor', 'avoir froid · avoir chaud'],
        ['tener sueño · tener prisa · tener miedo', 'avoir sommeil · être pressé · avoir peur'],
      ],
      examples: [
        { en: 'Tengo veinticinco años.', fr: 'J’ai vingt-cinq ans.' },
        { en: '¿Tienes frío?', fr: 'Tu as froid ?' },
      ],
      tip: 'Ne jamais oublier le tilde de años : « anos » veut dire tout autre chose ! Et ne dis pas « soy 25 años » : l’âge se dit avec tener.',
    },
  ],
  exercises: exercises('es-a1-tener-1', 'A1', { kc: TENER })
    .cloze('Yo ___ dos hermanos.', ['tengo'], 'yo → tengo.', { hint: 'tener', d: -2.4 })
    .cloze('¿Vosotros ___ coche?', ['tenéis'], 'vosotros → tenéis (sans diphtongue, avec un accent).', { hint: 'tener', d: -1.8 })
    .mcq('« J’ai 25 ans. »', ['Tengo 25 años.', 'Soy 25 años.', 'Tengo 25 anos.'], 0,
      'L’âge se dit avec tener, et años s’écrit avec ñ.', { kc: TEXP, d: -2.2 })
    .mcq('Il fait 35 degrés. Tu dis :', ['Tengo calor.', 'Tengo frío.', 'Estoy calor.'], 0,
      'avoir chaud = tener calor.', { kc: TEXP, d: -2.0 })
    .type('Conjugue tener au présent avec ella.', ['tiene', 'ella tiene'], 'él / ella / usted tiene.', { d: -2.2 })
    .type('Comment dit-on « j’ai faim » ?', ['tengo hambre', 'yo tengo hambre'], 'avoir faim = tener hambre ; le h ne se prononce pas.', { kc: TEXP, d: -2.2 })
    .order('Quel âge a ton frère ?', '¿Cuántos años tiene tu hermano?', '¿Cuántos años + tener ?', { kc: TEXP, distractors: ['es'], d: -1.8 })
    .tr('Nous avons soif.', ['Tenemos sed.', 'Nosotros tenemos sed.', 'Nosotras tenemos sed.'], 'avoir soif = tener sed.', { kc: TEXP, d: -2.0 })
    .tr('Tu as un chien ?', ['¿Tienes perro?', '¿Tienes un perro?', '¿Tú tienes perro?', '¿Tú tienes un perro?'],
      'tú tienes. perro (chien) : rr roulé, à ne pas confondre avec pero (mais).', { d: -2.0 })
    .listen('Me llamo Íñigo, tengo treinta y dos años y tengo dos hijos.', 'Quel âge a Íñigo ?', ['32 ans', '22 ans', '42 ans'], 0,
      'treinta y dos = 32.', { kc: TEXP, d: -1.8 })
    .listen('¿Comemos ya? Tengo mucha hambre.', 'Pourquoi veut-il manger maintenant ?', ['Il a très faim', 'Il est pressé', 'Il a froid'], 0,
      'Tengo mucha hambre = j’ai très faim.', { kc: TEXP, d: -1.8 })
    .dictation('Mi hermano tiene veinte años.', 'tiene (3ᵉ personne) ; años avec ñ.', { kc: TEXP, d: -2.0 })
    .repeat('Tengo sueño y tengo mucho frío.', 'sueño : ñ comme « gn ».', { kc: TEXP, d: -2.2 })
    .say('J’ai peur.', ['Tengo miedo.', 'Yo tengo miedo.'], 'avoir peur = tener miedo.', { kc: TEXP, d: -2.2 })
    .say('Vous avez des enfants ? (à des amis)', ['¿Tenéis hijos?', '¿Vosotros tenéis hijos?'], 'vosotros tenéis ; hijos = enfants (fils et filles).', { d: -1.8 })
    .build(),
};

export const tener2: Lesson = {
  id: 'es-a1-tener-2',
  cefr: 'A1',
  unitId: 'es-a1-tener',
  title: 'Décrire : adjectifs, couleurs, muy et mucho',
  subtitle: 'Une maison blanche, des yeux verts, très grand, beaucoup d’amis',
  kcIds: [ADJ, MUY],
  estMinutes: 8,
  explanation: [
    {
      title: 'L’accord de l’adjectif',
      body: 'L’adjectif s’accorde en genre et en nombre avec le nom, et se place en général après lui.',
      table: [
        ['-o → -a, -os, -as', 'alto, alta, altos, altas'],
        ['-e → même forme, + s', 'grande, grandes · verde, verdes'],
        ['consonne → même forme, + es', 'azul, azules · joven, jóvenes · gris, grises'],
        ['nationalités', 'francés, francesa, franceses, francesas'],
        ['couleurs', 'rojo, blanco, negro, amarillo, azul, verde, gris, marrón · rosa et naranja restent souvent invariables'],
      ],
      examples: [
        { en: 'una casa blanca', fr: 'une maison blanche' },
        { en: 'Tiene los ojos verdes y el pelo negro.', fr: 'Il a les yeux verts et les cheveux noirs.' },
      ],
      tip: 'L’accord suit le genre espagnol, pas le genre français : la leche fría (le lait froid), el coche rojo (la voiture rouge). Et « les cheveux » se dit au singulier : el pelo.',
    },
    {
      title: 'muy ou mucho ?',
      table: [
        ['muy + adjectif ou adverbe', 'muy alto, muy bien (très)'],
        ['mucho, mucha, muchos, muchas + nom', 'mucho dinero, mucha gente, muchos libros, muchas casas (beaucoup de)'],
        ['verbe + mucho', 'Trabaja mucho. (beaucoup)'],
      ],
      examples: [
        { en: 'Madrid es una ciudad muy grande.', fr: 'Madrid est une très grande ville.' },
        { en: 'En verano hay muchos turistas.', fr: 'En été, il y a beaucoup de touristes.' },
      ],
      tip: 'hambre, sed, frío, calor sont des noms : « très faim » → mucha hambre, « très froid » → mucho frío. « Muy hambre » ✗.',
    },
  ],
  exercises: exercises('es-a1-tener-2', 'A1', { kc: ADJ })
    .cloze('Mis hermanas son ___.', ['altas'], 'Féminin pluriel : altas.', { hint: 'alto', d: -2.0 })
    .mcq('Madrid es una ciudad ___ grande.', ['muy', 'mucho', 'mucha'], 0, 'Devant un adjectif → muy.', { kc: MUY, d: -2.0 })
    .mcq('En verano hay ___ turistas.', ['muchos', 'muy', 'mucho'], 0, 'Devant un nom masculin pluriel → muchos.', { kc: MUY, d: -1.8 })
    .cloze('Tengo ___ hambre.', ['mucha'], 'hambre est un nom féminin → mucha hambre (j’ai très faim).', { kc: MUY, hint: 'très', d: -1.6 })
    .type('Écris le féminin de « francés ».', ['francesa'], 'francés → francesa (l’accent disparaît).', { d: -2.0 })
    .type('Écris le pluriel de « joven ».', ['jóvenes'], 'consonne → + es ; l’accent écrit apparaît pour garder la syllabe forte : jóvenes.', { d: -1.6 })
    .order('Elle a les yeux verts et les cheveux noirs.', 'Tiene los ojos verdes y el pelo negro.', 'verde → verdes ; el pelo est singulier.', { distractors: ['verdos'], d: -1.6 })
    .tr('J’ai une voiture rouge.', ['Tengo un coche rojo.', 'Yo tengo un coche rojo.'], 'coche est masculin → rojo.', { d: -1.9 })
    .tr('Les filles sont très sympas.', ['Las chicas son muy simpáticas.', 'Las chicas son muy majas.'], 'muy + adjectif accordé : simpáticas. maja = sympa en Espagne.', { kc: [MUY, ADJ], d: -1.7 })
    .listen('Busco una chaqueta negra, no muy cara.', 'Que cherche-t-elle ?', ['Une veste noire pas très chère', 'Une veste rouge très chère', 'Un pantalon noir'], 0,
      'una chaqueta negra, no muy cara = une veste noire, pas très chère.', { d: -1.7 })
    .listen('Mi abuela es muy simpática y tiene muchos amigos.', 'Qu’apprend-on sur la grand-mère ?', ['Elle est très gentille et a beaucoup d’amis', 'Elle a peu d’amis', 'Elle est très âgée'], 0,
      'muy simpática = très sympathique ; muchos amigos = beaucoup d’amis.', { kc: MUY, d: -1.7 })
    .mcq('Comment est le chien de Sofía ?', ['Petit et blanc', 'Grand et noir', 'Petit et marron'], 0, 'un perro pequeño y blanco = un petit chien blanc.',
      { passage: 'Me llamo Sofía. Tengo veintiocho años y soy de Zaragoza. Soy alta y morena, y tengo los ojos marrones. Tengo un perro pequeño y blanco. Se llama Coco, es muy simpático y tiene mucha energía.', d: -1.8 })
    .dictation('Las flores amarillas son muy bonitas.', 'flores (féminin pluriel) → amarillas, bonitas.', { kc: [ADJ, MUY], d: -1.8 })
    .repeat('Tengo un gato gris y dos perros negros.', 'gris → grises seulement si le nom est pluriel ; perros : rr roulé.', { d: -2.1 })
    .say('Elle est très grande.', ['Es muy alta.', 'Ella es muy alta.', 'Es muy grande.', 'Ella es muy grande.'], 'Pour la taille d’une personne, on dit plutôt alta.', { kc: [MUY, ADJ], d: -2.0 })
    .build(),
};
