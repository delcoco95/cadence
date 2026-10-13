import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';
import { alt } from './alt';

const exercises = makeExercises('es');

const IDIOM = 'es.c2.vocabulary.idioms';
const EQUIV = 'es.c2.vocabulary.idiom_equivalents';
const PROV = 'es.c2.vocabulary.proverbs';
const ALLUDE = 'es.c2.function.proverb_allusion';

export const modismos1: Lesson = {
  id: 'es-c2-modismos-1',
  cefr: 'C2',
  unitId: 'es-c2-modismos',
  title: 'Modismos de haut vol',
  subtitle: 'irse por los cerros de Úbeda · dar gato por liebre · pagar el pato',
  kcIds: [IDIOM, EQUIV],
  estMinutes: 14,
  explanation: [
    {
      title: 'Des images qui ne se traduisent pas mot à mot',
      table: [
        ['irse por los cerros de Úbeda', 's’égarer, partir dans des digressions'],
        ['dar gato por liebre', 'rouler quelqu’un, refiler de la camelote'],
        ['tirar la casa por la ventana', 'faire de folles dépenses (pour une fête)'],
        ['hacer su agosto', 'faire son beurre'],
        ['pagar el pato', 'payer les pots cassés'],
        ['no dar pie con bola', 'ne rien faire de bien, enchaîner les erreurs'],
        ['estar en el ajo', 'être dans le coup, dans la confidence'],
        ['buscarle tres pies al gato', 'chercher la petite bête, compliquer les choses'],
      ],
      examples: [
        { en: 'Para la boda de su hija tiraron la casa por la ventana.', fr: 'Pour le mariage de leur fille, ils n’ont pas regardé à la dépense.' },
        { en: 'Con la ola de calor, los vendedores de ventiladores están haciendo su agosto.', fr: 'Avec la canicule, les vendeurs de ventilateurs font leur beurre.' },
      ],
      tip: '« tirar la casa por la ventana » n’est pas « jeter l’argent par les fenêtres » au sens de gaspiller par habitude : il s’agit d’une dépense exceptionnelle et festive.',
    },
    {
      title: 'Équivalents et faux équivalents',
      body: 'Certaines images coïncident avec le français, d’autres changent d’animal ou d’objet. C’est là que l’on reconnaît un locuteur avancé.',
      table: [
        ['echar leña al fuego', 'jeter de l’huile sur le feu'],
        ['poner el grito en el cielo', 'pousser les hauts cris'],
        ['ser uña y carne', 'être comme les deux doigts de la main'],
        ['cuando las ranas críen pelo', 'quand les poules auront des dents'],
        ['costar un ojo de la cara / un riñón', 'coûter les yeux de la tête'],
        ['no tener pelos en la lengua', 'ne pas mâcher ses mots'],
        ['hablar por los codos', 'être bavard comme une pie'],
        ['estar en las nubes', 'être dans la lune'],
      ],
      tip: 'Ne calquez pas : *echar aceite al fuego est compris mais sonne étranger ; on dit echar leña (du bois) al fuego.',
    },
  ],
  exercises: exercises('es-c2-modismos-1', 'C2', { kc: IDIOM })
    .mcq('En la reunión, el consultor se fue por los cerros de Úbeda. Es decir:', ['Se desvió del tema.', 'Se marchó antes de tiempo.', 'Habló con mucha precisión.'], 0, 'irse por los cerros de Úbeda = s’égarer, divaguer.', { d: 2.3 })
    .mcq('Équivalent espagnol de « quand les poules auront des dents » :', ['cuando las ranas críen pelo', 'cuando los gatos vuelen', 'cuando las gallinas tengan dientes'], 0, 'L’espagnol change d’animal : las ranas (grenouilles) et el pelo.', { kc: EQUIV, d: 2.3 })
    .cloze('Al final, el becario fue quien pagó el ___ por el error del jefe.', ['pato'], 'pagar el pato = payer les pots cassés.', { d: 2.2 })
    .cloze('No eches más leña al ___: la discusión ya está bastante caldeada.', ['fuego'], 'echar leña al fuego = jeter de l’huile sur le feu.', { kc: EQUIV, d: 2.2 })
    .type('Complète : « En ese restaurante te dan gato por ___: el «jamón ibérico» es de supermercado. »', ['liebre'], 'dar gato por liebre = tromper sur la marchandise.', { d: 2.3 })
    .type('Complète l’équivalent de « coûter les yeux de la tête » : « El piso nos ha costado un ojo de la ___. »', ['cara'], 'costar un ojo de la cara (ou un riñón).', { kc: EQUIV, d: 2.2 })
    .order('Hier je n’en ai pas fait une de bonne au travail.', 'Ayer no di pie con bola en el trabajo.', 'no dar pie con bola = accumuler les erreurs.', { distractors: ['pelota', 'pies'], d: 2.4 })
    .tr('Ils ne mâchent pas leurs mots.', ['No tienen pelos en la lengua.', 'No se muerden la lengua.', 'Ellos no tienen pelos en la lengua.', 'Dicen las cosas sin rodeos.', 'Dicen las cosas claras.'],
      'no tener pelos en la lengua = ne pas mâcher ses mots.', { kc: EQUIV, d: 2.4 })
    .tr('Avec la canicule, les vendeurs de glaces font leur beurre.', [
      ...alt(['Con la ola de calor, '], ['los vendedores de helados ', 'los heladeros '], ['están haciendo su agosto.', 'hacen su agosto.']),
    ], 'hacer su agosto = faire de bonnes affaires (allusion aux récoltes d’été).', { d: 2.4 })
    .listen('—¿Tú sabías lo de la fusión? —¡Qué va! Aquí los únicos que estaban en el ajo eran los de dirección; los demás nos enteramos por la prensa.', '¿Quiénes conocían el secreto?', [
      'Solo los directivos', 'Todos los empleados', 'Nadie, ni siquiera la dirección',
    ], 0, 'estar en el ajo = être dans la confidence.', { d: 2.4 })
    .listen('Mi hermana y su mejor amiga son uña y carne desde el colegio: no hay quien las separe.', '¿Cómo es la relación entre ellas?', [
      'Inseparables', 'Muy tensa', 'Distante desde el colegio',
    ], 0, 'ser uña y carne = être inséparables.', { kc: EQUIV, d: 2.2 })
    .dictation('No le busques tres pies al gato, que el asunto es sencillo.', 'buscarle tres pies al gato = compliquer inutilement.', { d: 2.4 })
    .repeat('Para la boda de su hija tiraron la casa por la ventana.', 'tirar la casa por la ventana = dépense exceptionnelle.', { d: 2.2 })
    .say('Quand il a vu la facture, il a poussé les hauts cris.', [
      ...alt(['Cuando vio la factura, ', 'Al ver la factura, '], ['puso el grito en el cielo.']),
      'Puso el grito en el cielo cuando vio la factura.', 'Puso el grito en el cielo al ver la factura.',
    ], 'poner el grito en el cielo = protester vivement.', { kc: EQUIV, d: 2.4 })
    .answer('Cuenta una situación (real o inventada) en la que alguien pagó el pato o te dieron gato por liebre.',
      'El verano pasado compré un móvil en una web desconocida y me dieron gato por liebre: llegó una imitación barata. Como el vendedor desapareció, al final pagué el pato yo solo.',
      'Réemploie au moins un modismo en contexte, conjugué correctement.', {
        kc: [IDIOM, EQUIV], keywords: [['gato por liebre', 'pagó el pato', 'pagué el pato', 'pagar el pato', 'pagaron el pato', 'pagamos el pato']], minWords: 20, d: 2.6,
      })
    .build(),
};

export const modismos2: Lesson = {
  id: 'es-c2-modismos-2',
  cefr: 'C2',
  unitId: 'es-c2-modismos',
  title: 'Refranes : la sagesse en boîte',
  subtitle: 'Más vale pájaro en mano · En casa del herrero… · como dice el refrán',
  kcIds: [PROV, ALLUDE],
  estMinutes: 14,
  explanation: [
    {
      title: 'Les refranes les plus vivants',
      table: [
        ['Más vale pájaro en mano que ciento volando.', 'Un tiens vaut mieux que deux tu l’auras.'],
        ['No hay mal que por bien no venga.', 'À quelque chose malheur est bon.'],
        ['En casa del herrero, cuchillo de palo.', 'Les cordonniers sont les plus mal chaussés.'],
        ['Quien mucho abarca, poco aprieta.', 'Qui trop embrasse mal étreint.'],
        ['Del dicho al hecho hay mucho trecho.', 'C’est plus facile à dire qu’à faire.'],
        ['Perro ladrador, poco mordedor.', 'Chien qui aboie ne mord pas.'],
        ['No por mucho madrugar amanece más temprano.', 'Rien ne sert de courir, il faut partir à point.'],
        ['Al pan, pan, y al vino, vino.', 'Appeler un chat un chat.'],
      ],
      tip: 'Les refranes riment ou s’équilibrent (dicho / hecho / trecho) : c’est ce qui les rend mémorisables. Ne changez aucun mot.',
    },
    {
      title: 'Faire allusion à un refrán',
      body: 'Entre natifs, on cite souvent seulement la première moitié : l’interlocuteur complète mentalement. On l’introduit par une formule.',
      table: [
        ['Ya sabes: en casa del herrero…', 'Tu connais le dicton… (la suite est sous-entendue)'],
        ['Como dice el refrán, / Como dice el dicho,', 'Comme dit le proverbe,'],
        ['…que diría mi abuela.', '…comme dirait ma grand-mère.'],
        ['Nunca mejor dicho.', 'C’est le cas de le dire.'],
        ['A buen entendedor…', 'À bon entendeur… (pocas palabras bastan)'],
      ],
      tip: 'Citer un refrán entier dans un contexte formel peut sembler vieillot ; la version tronquée et ironique est très fréquente à l’oral.',
    },
  ],
  exercises: exercises('es-c2-modismos-2', 'C2', { kc: PROV })
    .mcq('Completa el refrán: «Más vale pájaro en mano…»', ['que ciento volando', 'que dos en el árbol', 'que mil en el cielo'], 0, 'Más vale pájaro en mano que ciento volando.', { d: 2.2 })
    .mcq('¿Qué refrán resume mejor la actitud de Lucía?', [
      'No hay mal que por bien no venga', 'Perro ladrador, poco mordedor', 'Dime con quién andas y te diré quién eres',
    ], 0, 'Un malheur (le licenciement) a eu une conséquence heureuse : no hay mal que por bien no venga.', {
      kc: ALLUDE, d: 2.6,
      passage: 'Cuando la editorial de Altamira cerró y Lucía se quedó sin trabajo, pensó que su vida se venía abajo. Pasó semanas sin saber qué hacer. Un día, casi por aburrimiento, empezó a restaurar los muebles viejos de su abuela. Hoy tiene un pequeño taller con dos empleadas y dice, medio en broma, que el cierre de la editorial fue lo mejor que le pudo pasar.',
    })
    .cloze('Mi padre es electricista y en casa la mitad de los enchufes no funcionan: en casa del herrero, cuchillo de ___.', ['palo'], 'En casa del herrero, cuchillo de palo.', { d: 2.3 })
    .cloze('No te preocupes por sus amenazas: perro ___, poco mordedor.', ['ladrador'], 'Perro ladrador, poco mordedor = chien qui aboie ne mord pas.', { d: 2.2 })
    .type('Complète : « Del dicho al hecho hay mucho ___. »', ['trecho'], 'Rime dicho / hecho / trecho (trecho = distance).', { d: 2.3 })
    .type('Formule d’allusion : « Le dije que se lo pensara dos veces. A buen ___, pocas palabras bastan. »', ['entendedor'], 'A buen entendedor, pocas palabras bastan.', { kc: ALLUDE, d: 2.4 })
    .order('Qui trop embrasse mal étreint.', 'Quien mucho abarca, poco aprieta.', 'abarcar = embrasser (englober), apretar = serrer.', { distractors: ['aprende', 'abraza'], d: 2.4 })
    .tr('Comme dit le proverbe, rien ne sert de courir.', [
      ...alt(['Como dice el refrán, ', 'Como dice el dicho, ', 'Como reza el refrán, ', 'Como dice el proverbio, '], ['no por mucho madrugar amanece más temprano.']),
    ], 'No por mucho madrugar amanece más temprano.', { kc: ALLUDE, d: 2.5 })
    .tr('Un tiens vaut mieux que deux tu l’auras.', ['Más vale pájaro en mano que ciento volando.', 'Más vale pájaro en mano que cien volando.'],
      'Refrán figé ; ciento (forme traditionnelle).', { d: 2.3 })
    .listen('—Me han ofrecido un contrato fijo, pero igual espero a ver si me llama la otra empresa, que paga más. —Hombre, yo que tú lo firmaba: más vale pájaro en mano…', '¿Qué le aconseja su amigo?', [
      'Aceptar el contrato seguro', 'Esperar la otra oferta', 'Rechazar las dos ofertas',
    ], 0, 'Refrán tronqué : más vale pájaro en mano (que ciento volando).', { kc: ALLUDE, d: 2.5 })
    .listen('Quiere aprender chino, tocar el violín y sacarse el carné de piloto este año. Ya se sabe: quien mucho abarca, poco aprieta.', '¿Qué opina el hablante?', [
      'Que hace demasiadas cosas a la vez', 'Que es muy constante', 'Que debería aprender más idiomas',
    ], 0, 'Quien mucho abarca, poco aprieta = vouloir tout faire, c’est mal faire.', { d: 2.4 })
    .dictation('Al pan, pan, y al vino, vino: el proyecto ha fracasado.', 'Al pan, pan, y al vino, vino = appeler les choses par leur nom.', { d: 2.4 })
    .repeat('No hay mal que por bien no venga.', 'Négation et subjonctif : que por bien no venga.', { d: 2.2 })
    .say('C’est le cas de le dire : il est tombé des nues.', [
      'Nunca mejor dicho: se quedó de piedra.', 'Nunca mejor dicho: se quedó a cuadros.', 'Nunca mejor dicho: se quedó helado.', 'Nunca mejor dicho: se quedó boquiabierto.',
    ], 'nunca mejor dicho = c’est le cas de le dire ; quedarse de piedra / a cuadros = être sidéré.', { kc: ALLUDE, d: 2.6 })
    .answer('Elige un refrán español y explica en qué situación de tu vida podría aplicarse.',
      'Como dice el refrán, no hay mal que por bien no venga: cuando perdí aquel tren, conocí en la estación a la persona que hoy es mi socia. A veces un contratiempo abre una puerta.',
      'Cite le refrán exact et relie-le à une situation concrète.', {
        kc: [PROV, ALLUDE], keywords: [['refrán', 'dicho', 'proverbio'], ['no hay mal', 'más vale', 'quien mucho', 'del dicho', 'en casa del herrero', 'perro ladrador', 'no por mucho', 'al pan', 'a buen entendedor']], minWords: 20, d: 2.6,
      })
    .build(),
};
