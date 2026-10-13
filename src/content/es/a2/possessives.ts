import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const SHORT = 'es.a2.grammar.possessive_short';
const LONG = 'es.a2.grammar.possessive_long';
const DEM = 'es.a2.grammar.demonstratives';

export const possessives1: Lesson = {
  id: 'es-a2-possessives-1',
  cefr: 'A2',
  unitId: 'es-a2-possessives',
  title: 'Mi, tu, su · mío, tuyo, suyo',
  subtitle: 'Nuestra casa · un amigo mío · el tuyo',
  kcIds: [SHORT, LONG],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les possessifs devant le nom',
      body: 'Placés devant le nom, ils s’accordent en nombre avec la chose possédée ; nuestro et vuestro s’accordent aussi en genre.',
      table: [
        ['yo', 'mi · mis'],
        ['tú', 'tu · tus'],
        ['él, ella, usted', 'su · sus'],
        ['nosotros, nosotras', 'nuestro, nuestra · nuestros, nuestras'],
        ['vosotros, vosotras', 'vuestro, vuestra · vuestros, vuestras'],
        ['ellos, ellas, ustedes', 'su · sus'],
      ],
      examples: [
        { en: 'Mi amiga Lola vive con sus padres.', fr: 'Mon amie Lola vit avec ses parents.' },
        { en: '¿Dónde está vuestra casa?', fr: 'Où est votre maison ?' },
      ],
      tip: 'su veut dire « son, sa, leur » et aussi « votre » quand on vouvoie (usted). Et « mon amie » se dit simplement mi amiga : pas de « mon » devant voyelle comme en français.',
    },
    {
      title: 'Les possessifs toniques : mío, tuyo, suyo',
      body: 'Ils se placent après le nom (un amigo mío = un de mes amis), après ser (es mío = c’est à moi) ou avec l’article pour remplacer le nom (el mío = le mien). Ils s’accordent en genre et en nombre.',
      table: [
        ['yo', 'mío, mía, míos, mías'],
        ['tú', 'tuyo, tuya, tuyos, tuyas'],
        ['él, ella, usted', 'suyo, suya, suyos, suyas'],
        ['nosotros', 'nuestro, nuestra, nuestros, nuestras'],
        ['vosotros', 'vuestro, vuestra, vuestros, vuestras'],
        ['ellos, ellas, ustedes', 'suyo, suya, suyos, suyas'],
      ],
      examples: [
        { en: 'Este paraguas no es mío.', fr: 'Ce parapluie n’est pas à moi.' },
        { en: 'Mi coche es blanco; el tuyo es gris.', fr: 'Ma voiture est blanche ; la tienne est grise.' },
        { en: 'Esta noche ceno con unos amigos míos.', fr: 'Ce soir, je dîne avec des amis à moi.' },
      ],
      tip: '« C’est à moi » ne se dit pas « es a mí » mais es mío / es mía. Attention à l’accord : el coche → el mío, la casa → la mía.',
    },
  ],
  exercises: exercises('es-a2-possessives-1', 'A2', { kc: SHORT })
    .mcq('___ padres viven en Toledo. (nosotros)', ['Nuestros', 'Nuestro', 'Nos'], 0, 'padres est masculin pluriel → nuestros.', { d: -1.5 })
    .mcq('Perdona, ¿es ___ este paraguas? (à toi)', ['tuyo', 'tu', 'tú'], 0, 'Après ser, on emploie la forme tonique : es tuyo.', { kc: LONG, d: -1.2 })
    .cloze('¿Dónde están ___ gafas? No las encuentro.', ['mis'], 'gafas est pluriel → mis gafas.', { hint: 'yo', d: -1.5 })
    .cloze('Mi coche es rojo; el ___ es azul, ¿no?', ['tuyo'], 'el tuyo = le tien (el coche, masculin singulier).', { kc: LONG, hint: 'tú', d: -1.0 })
    .type('Complète avec le possessif de « vosotros » : « ___ casa es muy bonita. »', ['vuestra'], 'casa est féminin → vuestra casa.', { d: -1.2 })
    .type('Complète : « Estas llaves no son mías, son ___. » (à elle)', ['suyas'], 'las llaves : féminin pluriel → suyas.', { kc: LONG, d: -0.9 })
    .order('Un de mes amis habite à Cadix.', 'Un amigo mío vive en Cádiz.', '« un de mes amis » → un amigo mío.', { kc: LONG, distractors: ['mi'], d: -1.0 })
    .tr('Notre maison est petite, mais votre jardin est très grand.', [
      'Nuestra casa es pequeña, pero vuestro jardín es muy grande.',
      'Nuestra casa es pequeña, pero su jardín es muy grande.',
    ], 'nuestra casa (féminin) ; votre → vuestro (vosotros) ou su (usted, ustedes).', { d: -1.0 })
    .tr('Ce n’est pas mon sac, c’est le tien.', [
      'No es mi bolso, es el tuyo.', 'Este no es mi bolso, es el tuyo.', 'No es mi bolso, es tuyo.',
      'No es mi mochila, es la tuya.', 'Esta no es mi mochila, es la tuya.', 'No es mi mochila, es tuya.',
    ], 'mi bolso (atone, devant le nom) ; el tuyo (tonique, remplace le nom).', { kc: LONG, d: -0.8 })
    .listen('¿De quién es esta chaqueta? — Es mía, gracias. La tuya está en el coche.', 'À qui est la veste ?', ['À la personne qui répond', 'À la personne qui pose la question', 'À quelqu’un qui attend dans la voiture'], 0,
      'Es mía = c’est la mienne ; la tuya (celle de l’autre) está en el coche.', { kc: LONG, d: -1.0 })
    .listen('Te presento a mi familia: estos son mis padres, y esta es nuestra hija, Carmen.', 'Qui est Carmen ?', ['Leur fille', 'Sa mère', 'Sa sœur'], 0,
      'nuestra hija = notre fille.', { d: -1.2 })
    .dictation('Nuestros vecinos son muy simpáticos, pero su perro ladra mucho.', 'nuestros vecinos (masculin pluriel) ; su perro = leur chien.', { d: -0.9 })
    .repeat('Vuestra casa es preciosa; la nuestra es muy pequeña.', 'la nuestra remplace nuestra casa.', { kc: LONG, d: -1.2 })
    .say('C’est à moi !', ['Es mío.', 'Es mía.', 'Esto es mío.', 'Eso es mío.'], 'Possession après ser → es mío / es mía.', { kc: LONG, d: -1.3 })
    .answer('¿Cómo es tu familia? Habla de tus padres o de tus hermanos.', 'Mi familia es pequeña. Mis padres viven en Lyon y mi hermana vive con su novio en París.',
      'mi, mis devant le nom ; su pour « son, sa, leur ».', { kc: [SHORT, LONG], keywords: [['mi', 'mis'], ['su', 'sus', 'nuestro', 'nuestra', 'nuestros', 'nuestras']], minWords: 12, d: -0.8 })
    .build(),
};

export const possessives2: Lesson = {
  id: 'es-a2-possessives-2',
  cefr: 'A2',
  unitId: 'es-a2-possessives',
  title: 'Este, ese, aquel',
  subtitle: 'Este libro, esa camisa, aquel pueblo · ¿Qué es esto?',
  kcIds: [DEM, LONG],
  estMinutes: 9,
  explanation: [
    {
      title: 'Trois distances',
      body: 'L’espagnol distingue trois distances : este (près de moi, aquí), ese (près de toi ou à distance moyenne, ahí), aquel (loin des deux, allí). Le démonstratif s’accorde avec le nom.',
      table: [
        ['', 'aquí · ahí · allí'],
        ['masculin singulier', 'este · ese · aquel'],
        ['féminin singulier', 'esta · esa · aquella'],
        ['masculin pluriel', 'estos · esos · aquellos'],
        ['féminin pluriel', 'estas · esas · aquellas'],
      ],
      examples: [
        { en: 'Este café está frío.', fr: 'Ce café (le mien) est froid.' },
        { en: '¿Me pasas esa sal?', fr: 'Tu me passes ce sel (près de toi) ?' },
        { en: 'Aquella casa de allí es de mis abuelos.', fr: 'Cette maison là-bas est à mes grands-parents.' },
      ],
      tip: 'Devant un nom masculin, c’est este, jamais esto : « esto libro » ✗ → « este libro » ✓. aquel sert aussi pour un passé lointain : aquel verano = cet été-là.',
    },
    {
      title: 'Esto, eso, aquello : « ça »',
      body: 'Les formes neutres esto, eso, aquello ne vont jamais avec un nom. Elles désignent une chose inconnue ou une idée.',
      table: [
        ['objet inconnu', '¿Qué es esto?'],
        ['idée, ce qu’on vient de dire', 'Eso es verdad. Eso no me gusta.'],
        ['pronom (celui-ci, celui-là)', 'Este jersey no; prefiero ese.'],
      ],
      examples: [
        { en: '¿Qué es eso que tienes en la mano?', fr: 'Qu’est-ce que c’est, ce que tu as dans la main ?' },
        { en: 'No quiero este bolso; quiero aquel.', fr: 'Je ne veux pas ce sac-ci ; je veux celui-là.' },
      ],
      tip: '« Ça, c’est vrai » → Eso es verdad. Pour un objet précis déjà nommé, on garde le genre : ¿La camisa? Prefiero esa.',
    },
  ],
  exercises: exercises('es-a2-possessives-2', 'A2', { kc: DEM })
    .mcq('¿Qué es ___? — Es un regalo para ti.', ['esto', 'este', 'esta'], 0, 'Objet inconnu, non nommé → neutre esto.', { d: -1.3 })
    .mcq('¿Te gustan ___ zapatos de ahí, al lado de la puerta?', ['esos', 'estos', 'aquellas'], 0, 'ahí (distance moyenne), masculin pluriel → esos.', { d: -1.1 })
    .cloze('___ chica de allí, al fondo de la calle, es mi prima.', ['aquella'], 'allí, loin → aquella (féminin).', { hint: 'loin', d: -1.0 })
    .mcq('Combien coûtent les grosses oranges ?', ['2,50 euros le kilo', '2 euros le kilo', '1,50 euro le kilo'], 0,
      'Y aquellas de allí, las grandes, a dos cincuenta.',
      {
        d: -0.9,
        passage: 'En el mercado\n— Buenos días. ¿A cuánto están estas naranjas?\n— Esas, a dos euros el kilo. Y aquellas de allí, las grandes, a dos cincuenta.\n— Pues póngame un kilo de estas. ¿Y esos tomates son de aquí?\n— Sí, son de mi huerto. Están buenísimos.\n— Vale, medio kilo también. Y aquel melón, por favor. Nada más, gracias.',
      })
    .type('Mets au pluriel : « este libro »', ['estos libros'], 'este → estos ; libro → libros.', { d: -1.2 })
    .type('Complète : « Me gusta mucho ___ camisa que llevas. » (près de toi)', ['esa'], 'Ce que porte l’autre est près de lui → esa (féminin).', { d: -1.0 })
    .order('Cette voiture là-bas est à mon père.', 'Aquel coche de allí es de mi padre.', 'Loin (allí) → aquel ; coche est masculin.', { distractors: ['este'], d: -1.0 })
    .tr('Ces fleurs sont pour toi.', [
      'Estas flores son para ti.', 'Esas flores son para ti.', 'Estas flores son para usted.', 'Esas flores son para usted.',
    ], 'flores est féminin pluriel → estas (ou esas).', { d: -1.1 })
    .tr('Qu’est-ce que c’est que ça ?', ['¿Qué es eso?', '¿Qué es esto?', '¿Eso qué es?', '¿Esto qué es?', '¿Qué es aquello?'],
      'Objet inconnu → neutre eso / esto.', { d: -1.2 })
    .listen('Mira esta foto: este es mi abuelo, y aquella casa del fondo es donde nació mi madre.', 'Qu’est-ce que la maison au fond de la photo ?', ['La maison natale de sa mère', 'La maison de son grand-père', 'Sa maison actuelle'], 0,
      'aquella casa del fondo es donde nació mi madre = la maison où est née sa mère.', { d: -0.9 })
    .listen('¿Qué mochila te gusta más, esta o aquella? — Aquella, la negra. Esta es demasiado pequeña.', 'Pourquoi ne choisit-elle pas le sac le plus proche ?', ['Il est trop petit', 'Il est trop cher', 'Elle n’aime pas sa couleur'], 0,
      'Esta es demasiado pequeña = celui-ci est trop petit.', { d: -1.0 })
    .dictation('Estos pantalones son míos y esas camisetas son tuyas.', 'estos / esas s’accordent avec le nom ; míos, tuyas aussi.', { kc: [DEM, LONG], d: -0.9 })
    .repeat('Esto no es mío. ¿Es tuyo o es de aquel chico?', 'esto (neutre), mío / tuyo (toniques), aquel chico (loin).', { kc: [DEM, LONG], d: -1.1 })
    .say('Je voudrais ce gâteau-ci, s’il vous plaît.', [
      'Quería este pastel, por favor.', 'Quiero este pastel, por favor.', 'Quisiera este pastel, por favor.', 'Me gustaría este pastel, por favor.', 'Póngame este pastel, por favor.',
      'Quería esta tarta, por favor.', 'Quiero esta tarta, por favor.', 'Quisiera esta tarta, por favor.', 'Me gustaría esta tarta, por favor.', 'Póngame esta tarta, por favor.',
    ], 'Près de soi → este pastel / esta tarta. Quería… est la formule polie la plus courante.', { d: -1.0 })
    .answer('Estás en una tienda de ropa. ¿Qué prendas te gustan y cuáles no? Usa este, ese o aquel.', 'Me gusta mucho esta camisa azul, pero ese jersey es muy caro. Aquellos pantalones negros son bonitos.',
      'Accorde le démonstratif avec le vêtement : esta camisa, ese jersey, aquellos pantalones.',
      { keywords: [['este', 'esta', 'estos', 'estas', 'ese', 'esa', 'esos', 'esas', 'aquel', 'aquella', 'aquellos', 'aquellas']], minWords: 10, d: -0.7 })
    .build(),
};
