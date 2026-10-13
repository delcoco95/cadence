import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const SER = 'es.b2.grammar.passive_ser';
const ESTAR = 'es.b2.grammar.estar_participle';
const REFL = 'es.b2.grammar.passive_se';
const IMPERS = 'es.b2.grammar.impersonal_se';

export const pasiva1: Lesson = {
  id: 'es-b2-pasiva-1',
  cefr: 'B2',
  unitId: 'es-b2-pasiva',
  title: 'Le passif avec ser, le résultat avec estar',
  subtitle: 'Fue construida por los romanos · la puerta está cerrada',
  kcIds: [SER, ESTAR],
  estMinutes: 12,
  explanation: [
    {
      title: 'Ser + participe : l’action subie',
      body: 'ser + participe accordé + por (agent). Surtout à l’écrit : presse, histoire, documents. À l’oral, on préfère l’actif ou la forme avec se.',
      table: [
        ['présent', 'El premio es entregado por el rey.'],
        ['indefinido', 'El puente fue construido por los romanos.'],
        ['perfecto', 'La ganadora ha sido elegida por el jurado.'],
        ['futur', 'El hospital será inaugurado el lunes.'],
      ],
      examples: [
        { en: 'Las casas fueron vendidas en un mes.', fr: 'Les maisons ont été vendues en un mois.' },
        { en: 'El Quijote fue escrito por Cervantes.', fr: 'Don Quichotte a été écrit par Cervantes.' },
      ],
      tip: 'Le participe s’accorde avec le sujet : las casas fueron vendidas. L’agent est introduit par por, même quand le français dit « de » (« aimé de tous » → querido por todos).',
    },
    {
      title: 'Estar + participe : l’état qui en résulte',
      body: 'ser + participe décrit l’action ; estar + participe décrit le résultat, l’état obtenu.',
      table: [
        ['action', 'La tienda fue cerrada por la policía.'],
        ['résultat', 'Cuando llegamos, la tienda ya estaba cerrada.'],
      ],
      examples: [
        { en: 'La ventana está rota.', fr: 'La fenêtre est cassée.' },
        { en: 'Las entradas ya están vendidas.', fr: 'Les billets sont déjà vendus.' },
      ],
      tip: '« Le musée est fermé » décrit un état : el museo está cerrado (jamais « es cerrado »). Le français « être + participe » cache ces deux sens ; l’espagnol les sépare.',
    },
  ],
  exercises: exercises('es-b2-pasiva-1', 'B2', { kc: SER, tense: 'pasiva' })
    .mcq('La Alhambra ___ construida entre los siglos XIII y XIV.', ['fue', 'estuvo', 'era'], 0, 'Action datée, passif → ser à l’indefinido : fue construida.', { d: 0.5 })
    .mcq('¿Qué parte del museo no se puede visitar todavía?', ['La sala de mosaicos', 'Las nuevas salas', 'El edificio entero'], 0,
      'la sala de mosaicos todavía está cerrada al público : estar + participe = état. Les actions sont au passif avec ser : fue reabierto, fue diseñado, fueron inauguradas.', {
        kc: [SER, ESTAR], d: 0.7,
        passage: 'Reabre el museo\nEl Museo de la Ciudad de Valdeoro fue reabierto ayer tras dos años de obras. El edificio, que fue diseñado por una arquitecta local en los años ochenta, ha sido completamente renovado. Las nuevas salas fueron inauguradas por la alcaldesa. Sin embargo, la sala de mosaicos todavía está cerrada al público: según el director, estará lista a finales de mes.',
      })
    .cloze('Los ladrones fueron ___ por la policía esa misma noche.', ['detenidos'], 'Participe accordé au masculin pluriel : detenidos.', { hint: 'detener', d: 0.6 })
    .cloze('Las entradas para el concierto ya ___ vendidas: no queda ninguna.', ['están'], 'Résultat (il n’en reste plus) → estar : están vendidas.', { kc: ESTAR, hint: 'ser ou estar', d: 0.7 })
    .type('Mets au passif : « Cervantes escribió el Quijote. » → « El Quijote ___ por Cervantes. »', ['fue escrito'], 'escribió → fue escrito (participe irrégulier, masculin).', { d: 0.6 })
    .type('Mets au passif : « El jurado ha elegido a la ganadora. » → « La ganadora ___ por el jurado. »', ['ha sido elegida'], 'ha elegido → ha sido elegida (accord au féminin).', { d: 0.8 })
    .order('Le tableau a été volé la semaine dernière.', 'El cuadro fue robado la semana pasada.', 'Action datée → fue robado.', { distractors: ['estuvo'], d: 0.6 })
    .tr('Ces maisons ont été construites en 1920.', [
      'Estas casas fueron construidas en 1920.', 'Esas casas fueron construidas en 1920.', 'Estas casas se construyeron en 1920.', 'Esas casas se construyeron en 1920.',
    ], 'Date passée → indefinido : fueron construidas (accord féminin pluriel), ou se construyeron.', { d: 0.6 })
    .tr('La fenêtre est cassée.', ['La ventana está rota.', 'El cristal de la ventana está roto.'], 'État résultant → estar + participe irrégulier roto.', { kc: ESTAR, d: 0.4 })
    .listen('El nuevo hospital será inaugurado el próximo lunes por la ministra de Sanidad.', '¿Quién inaugurará el hospital?', [
      'La ministra de Sanidad', 'El alcalde', 'El director del hospital',
    ], 0, 'será inaugurado por la ministra : l’agent suit por.', { d: 0.6 })
    .listen('Perdone, ¿está abierta la farmacia? — No, lo siento, los domingos está cerrada, pero hay una de guardia en la plaza.', '¿Dónde se pueden comprar medicamentos hoy?', [
      'En la farmacia de guardia de la plaza', 'En esta farmacia', 'En el hospital',
    ], 0, 'está abierta / está cerrada : estar pour l’état.', { kc: ESTAR, d: 0.6 })
    .dictation('El acuerdo fue firmado ayer por los dos gobiernos.', 'fue firmado por : passif avec agent.', { d: 0.7 })
    .repeat('La carta ya está escrita, solo falta enviarla.', 'está escrita : résultat.', { kc: ESTAR, d: 0.5 })
    .say('Le film a été tourné à Almería.', [
      'La película fue rodada en Almería.', 'La película se rodó en Almería.', 'La película fue filmada en Almería.', 'La película se filmó en Almería.', 'Rodaron la película en Almería.',
    ], 'tourner un film → rodar ; passif : fue rodada (accord féminin).', { d: 0.6 })
    .answer('¿Qué edificio o monumento famoso de tu ciudad conoces? ¿Cuándo fue construido?', 'La catedral de mi ciudad fue construida en el siglo XIII y fue restaurada hace unos años por el ayuntamiento.',
      'fue + participe accordé : fue construida, fue restaurada.', {
        keywords: [['fue', 'fueron', 'ha sido', 'se construyó'], ['construido', 'construida', 'construidos', 'construidas', 'diseñado', 'diseñada', 'restaurado', 'restaurada', 'construyó']], minWords: 12, d: 0.8,
      })
    .build(),
};

export const pasiva2: Lesson = {
  id: 'es-b2-pasiva-2',
  cefr: 'B2',
  unitId: 'es-b2-pasiva',
  title: 'Passive réfléchie et se impersonnel',
  subtitle: 'Se venden pisos · se vive bien · uno nunca sabe',
  kcIds: [REFL, IMPERS],
  estMinutes: 12,
  explanation: [
    {
      title: 'La passive réfléchie : se + verbe accordé',
      body: 'C’est la façon la plus courante de rendre « on » + chose. Le verbe s’accorde avec la chose, qui est le sujet grammatical.',
      table: [
        ['singulier', 'Se vende piso. · Se habla español.'],
        ['pluriel', 'Se venden pisos. · Se necesitan camareros.'],
      ],
      examples: [
        { en: 'Se alquilan habitaciones para estudiantes.', fr: 'On loue des chambres pour étudiants.' },
        { en: 'En verano se come mucho gazpacho.', fr: 'En été, on mange beaucoup de gazpacho.' },
      ],
      tip: '« On vend des appartements » → se venden pisos (pluriel). « Se vende pisos » s’entend, mais c’est une faute.',
    },
    {
      title: 'Le se impersonnel et les autres « on »',
      body: 'Sans sujet de chose, ou devant une personne précédée de a, le verbe reste au singulier. Autres équivalents de « on » : uno, la gente, la 3e personne du pluriel.',
      table: [
        ['se + singulier', 'Se vive bien aquí. · Se busca a los responsables.'],
        ['verbe pronominal → uno', 'Uno se acostumbra a todo.'],
        ['3e pers. du pluriel', 'Dicen que va a llover. · Me han robado la cartera.'],
      ],
      examples: [
        { en: 'En esta ciudad se vive muy bien.', fr: 'On vit très bien dans cette ville.' },
        { en: 'Se ruega no fumar.', fr: 'Prière de ne pas fumer.' },
      ],
      tip: 'Avec un verbe déjà pronominal (levantarse, acostumbrarse), on ne peut pas ajouter un second se : on emploie uno. « On m’a volé » → me han robado (3e pers. du pluriel).',
    },
  ],
  exercises: exercises('es-b2-pasiva-2', 'B2', { kc: REFL, tense: 'pasiva refleja' })
    .mcq('En esta tienda se ___ móviles de segunda mano.', ['venden', 'vende', 'vendemos'], 0, 'móviles (pluriel) est le sujet → se venden.', { d: 0.5 })
    .mcq('En España ___ muy tarde: a las diez de la noche es normal.', ['se cena', 'se cenan', 'se cenamos'], 0, 'Pas de sujet de chose → se impersonnel au singulier : se cena.', { kc: IMPERS, d: 0.5 })
    .cloze('___ camareros con experiencia para este verano.', ['Se necesitan'], 'camareros (pluriel) → se necesitan.', { hint: 'necesitar', d: 0.6 })
    .cloze('Cuando ___ se acostumbra a la siesta, es difícil dejarla.', ['uno'], 'Verbe pronominal (acostumbrarse) → uno pour « on ».', { kc: IMPERS, hint: 'on', d: 0.9 })
    .type('Transforme avec « se » : « La gente habla mucho de ese tema. » → « ___ mucho de ese tema. »', ['Se habla'], 'se impersonnel : se habla de.', { kc: IMPERS, d: 0.6 })
    .type('Mets au pluriel : « Se alquila habitación. » → « ___ habitaciones. »', ['Se alquilan'], 'Le verbe s’accorde avec habitaciones : se alquilan.', { d: 0.5 })
    .order('Ici, on parle espagnol et anglais.', 'Aquí se habla español e inglés.', 'se habla ; y devient e devant un mot qui commence par i : e inglés.', { distractors: ['es'], d: 0.6 })
    .tr('On a trouvé deux portefeuilles dans le train.', [
      'Se encontraron dos carteras en el tren.', 'Se han encontrado dos carteras en el tren.', 'Encontraron dos carteras en el tren.', 'Han encontrado dos carteras en el tren.',
    ], 'dos carteras (pluriel) → se encontraron, ou 3e pers. du pluriel.', { d: 0.7 })
    .tr('On vit très bien dans cette ville.', [
      'Se vive muy bien en esta ciudad.', 'En esta ciudad se vive muy bien.', 'Se vive muy bien en esa ciudad.', 'En esa ciudad se vive muy bien.',
      'Uno vive muy bien en esta ciudad.', 'En esta ciudad uno vive muy bien.',
    ], 'se impersonnel : se vive.', { kc: IMPERS, d: 0.5 })
    .listen('Se ruega a los señores pasajeros que no dejen su equipaje sin vigilancia.', '¿Qué se pide a los pasajeros?', [
      'Que vigilen su equipaje', 'Que se sienten', 'Que enseñen el billete',
    ], 0, 'Se ruega… que no dejen : formule impersonnelle des annonces.', { kc: IMPERS, d: 0.8 })
    .listen('Me han robado la cartera en el metro. Menos mal que no llevaba mucho dinero.', '¿Qué le ha pasado?', [
      'Le han robado la cartera', 'Ha perdido el metro', 'Se ha dejado el dinero en casa',
    ], 0, 'me han robado : 3e pers. du pluriel à valeur impersonnelle.', { kc: IMPERS, d: 0.5 })
    .dictation('Se venden pisos nuevos cerca de la playa.', 'pisos (pluriel) → se venden.', { d: 0.5 })
    .repeat('En verano se come mucho gazpacho.', 'gazpacho (singulier) → se come.', { d: 0.4 })
    .say('On dit que le loyer va augmenter.', [
      'Dicen que el alquiler va a subir.', 'Se dice que el alquiler va a subir.', 'Dicen que el alquiler va a aumentar.', 'Se dice que el alquiler va a aumentar.',
      'Dicen que el alquiler subirá.', 'Se dice que el alquiler subirá.', 'Dicen que va a subir el alquiler.', 'Se dice que va a subir el alquiler.',
    ], 'dicen que / se dice que ; loyer → el alquiler.', { kc: IMPERS, d: 0.6 })
    .answer('¿Qué se hace en tu país en Nochevieja o en una fiesta tradicional?', 'En Nochevieja se cena con la familia, se comen doce uvas a medianoche y después se sale con los amigos.',
      'se cena, se comen (uvas, pluriel), se sale.', { kc: [REFL, IMPERS], keywords: [['se']], minWords: 12, d: 0.8 })
    .build(),
};
