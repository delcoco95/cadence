import type { Lesson } from '../../types';
import { makeExercises } from '../../builders';

const exercises = makeExercises('es');

const DO = 'es.a2.grammar.direct_object_pronouns';
const POS = 'es.a2.grammar.pronoun_position';
const IO = 'es.a2.grammar.indirect_object_pronouns';
const SELO = 'es.a2.grammar.se_lo';

export const pronouns1: Lesson = {
  id: 'es-a2-pronouns-1',
  cefr: 'A2',
  unitId: 'es-a2-pronouns',
  title: 'Lo, la, los, las',
  subtitle: 'Lo compro · voy a comprarlo · lo he comprado',
  kcIds: [DO, POS],
  estMinutes: 9,
  explanation: [
    {
      title: 'Les pronoms compléments directs',
      body: 'Ils remplacent le complément direct et s’accordent avec lui en genre et en nombre.',
      table: [
        ['me · te', 'me, te'],
        ['le (masculin) · la (féminin)', 'lo · la'],
        ['nous · vous', 'nos · os'],
        ['les (masculin ou mixte) · les (féminin)', 'los · las'],
      ],
      examples: [
        { en: '¿Tienes el libro? — Sí, lo tengo.', fr: 'Tu as le livre ? — Oui, je l’ai.' },
        { en: '¿Conoces a Marta? — Sí, la conozco.', fr: 'Tu connais Marta ? — Oui, je la connais.' },
      ],
      tip: '« Je le sais » (le = cela) → Lo sé. En Espagne, vous entendrez aussi le pour un homme (Le vi ayer = je l’ai vu hier) : c’est admis, mais lo est toujours correct.',
    },
    {
      title: 'La place du pronom',
      body: 'Le pronom se place devant le verbe conjugué. Avec un infinitif ou un gérondif, il peut aussi se coller à la fin. À l’impératif affirmatif, il se colle toujours.',
      table: [
        ['verbe conjugué', 'Lo compro. No lo he visto.'],
        ['infinitif', 'Lo voy a comprar. / Voy a comprarlo.'],
        ['gérondif', 'Lo estoy leyendo. / Estoy leyéndolo.'],
        ['impératif affirmatif', 'Cómpralo.'],
      ],
      examples: [
        { en: 'Esta película tienes que verla.', fr: 'Ce film, tu dois le voir.' },
        { en: 'Las llaves no las encuentro.', fr: 'Les clés, je ne les trouve pas.' },
      ],
      tip: 'Jamais entre haber et le participe : « He lo visto » ✗ → « Lo he visto » ✓. Collé au gérondif, on ajoute un accent : leyéndolo, comprándolo.',
    },
  ],
  exercises: exercises('es-a2-pronouns-1', 'A2', { kc: DO })
    .mcq('¿Dónde has comprado esas gafas? — ___ he comprado en una tienda del centro.', ['Las', 'Los', 'Les'], 0, 'las gafas : féminin pluriel → las.', { d: -1.3 })
    .mcq('¿Conoces a Marta? — Sí, ___ conozco desde hace años.', ['la', 'le', 'lo'], 0, 'Marta, complément direct féminin → la.', { d: -1.2 })
    .cloze('¿Tienes las llaves? — No, no ___ tengo.', ['las'], 'las llaves → las.', { d: -1.4 })
    .cloze('El informe no está terminado: estoy ___ ahora.', ['terminándolo'], 'Pronom collé au gérondif, avec accent : terminándolo.', { kc: POS, hint: 'terminar + lo', d: -0.7 })
    .type('Remplace le complément par un pronom : « Compro el pan. »', ['Lo compro.'], 'el pan → lo, devant le verbe conjugué.', { loose: true, d: -1.4 })
    .type('Réécris la phrase avec le pronom collé à l’infinitif : « Lo quiero ver. »', ['Quiero verlo.'], 'Les deux places sont correctes : lo quiero ver / quiero verlo.', { kc: POS, loose: true, d: -1.0 })
    .order('Je ne l’ai pas encore vue (la película).', 'Todavía no la he visto.', 'Le pronom se place devant haber ; le participe reste invariable.', { kc: [DO, POS], distractors: ['vista'], d: -1.0 })
    .tr('Je les invite à dîner.', ['Los invito a cenar.', 'Las invito a cenar.', 'Yo los invito a cenar.', 'Yo las invito a cenar.'],
      'les → los (masculin ou mixte) ou las (féminin).', { d: -1.0 })
    .tr('Ce gâteau, nous allons le manger ce soir.', [
      'Este pastel lo vamos a comer esta noche.', 'Este pastel vamos a comerlo esta noche.',
      'Esta tarta la vamos a comer esta noche.', 'Esta tarta vamos a comerla esta noche.',
    ], 'Complément placé en tête → on le reprend par un pronom ; avant ir a ou collé à l’infinitif.', { kc: [DO, POS], d: -0.8 })
    .listen('¿Has visto mi móvil? — Sí, lo he dejado en tu mesa.', 'Où est le portable ?', ['Sur sa table', 'Dans son sac', 'Dans la cuisine'], 0,
      'lo he dejado en tu mesa = je l’ai laissé sur ta table.', { d: -1.2 })
    .listen('Las fotos de la boda son preciosas. Voy a imprimirlas para mi madre.', 'Que va-t-elle faire des photos ?', ['Les imprimer pour sa mère', 'Les envoyer par courriel', 'Les publier sur internet'], 0,
      'imprimirlas = les imprimer (las fotos).', { kc: POS, d: -0.9 })
    .dictation('No encuentro mis gafas. ¿Las has visto?', 'mis gafas → las, devant haber.', { kc: [DO, POS], d: -1.0 })
    .repeat('La película es muy buena: tienes que verla.', 'verla : pronom collé à l’infinitif.', { kc: POS, d: -1.1 })
    .say('Je l’achète (el jersey).', ['Lo compro.', 'Me lo compro.', 'Yo lo compro.'], 'el jersey → lo, devant le verbe.', { d: -1.4 })
    .answer('¿Usas mucho el móvil? ¿Cuándo lo usas?', 'Sí, lo uso mucho. Lo miro por la mañana y lo uso en el metro para leer las noticias.',
      'el móvil → lo, devant le verbe conjugué.', { kc: [DO, POS], keywords: [['lo', 'la', 'los', 'las']], minWords: 10, d: -0.8 })
    .build(),
};

export const pronouns2: Lesson = {
  id: 'es-a2-pronouns-2',
  cefr: 'A2',
  unitId: 'es-a2-pronouns',
  title: 'Le, les · se lo',
  subtitle: 'Le doy el libro · se lo doy',
  kcIds: [IO, SELO],
  estMinutes: 10,
  explanation: [
    {
      title: 'Les pronoms compléments indirects',
      body: 'Ils remplacent la personne à qui l’on donne, dit, écrit, offre… : me, te, le, nos, os, les. On les emploie aussi avec gustar, encantar, doler.',
      table: [
        ['me · te', 'me, te'],
        ['lui (homme ou femme), à vous (usted)', 'le'],
        ['nous · vous', 'nos · os'],
        ['leur, à vous (ustedes)', 'les'],
      ],
      examples: [
        { en: 'Le he escrito un mensaje a Pablo.', fr: 'J’ai écrit un message à Pablo.' },
        { en: 'A mis padres les encanta viajar.', fr: 'Mes parents adorent voyager.' },
      ],
      tip: '« Je lui parle » → Le hablo, que « lui » soit un homme ou une femme. Le redoublement est normal : Le doy el libro a María.',
    },
    {
      title: 'Deux pronoms ensemble',
      body: 'Le complément indirect passe devant le direct : me lo, te la, nos los, os las. Mais le ou les devant lo, la, los, las devient se.',
      table: [
        ['me + lo', 'me lo · Me lo das.'],
        ['te + la', 'te la · Te la presto.'],
        ['le / les + lo, la, los, las', 'se lo, se la, se los, se las'],
        ['avec infinitif ou impératif', 'Voy a dárselo. · Dámelo.'],
      ],
      examples: [
        { en: '¿Le das el regalo a Ana? — Sí, se lo doy esta noche.', fr: 'Tu donnes le cadeau à Ana ? — Oui, je le lui donne ce soir.' },
        { en: '¿Me prestas tu coche? — Sí, te lo presto.', fr: 'Tu me prêtes ta voiture ? — Oui, je te la prête.' },
      ],
      tip: '« le lo » n’existe pas : « Le lo doy » ✗ → « Se lo doy » ✓. Attention : en français « je te la prête » (la voiture), en espagnol te lo presto, car coche est masculin.',
    },
  ],
  exercises: exercises('es-a2-pronouns-2', 'A2', { kc: IO })
    .mcq('¿Qué ___ vas a regalar a tu madre?', ['le', 'la', 'lo'], 0, 'a tu madre = complément indirect → le.', { d: -1.2 })
    .mcq('¿Le has dado las llaves a Pablo? — Sí, ya ___ he dado.', ['se las', 'le las', 'se los'], 0, 'le + las → se las.', { kc: SELO, d: -0.9 })
    .cloze('A mis padres ___ encanta la música clásica.', ['les'], 'a mis padres → les encanta.', { d: -1.1 })
    .mcq('Qui doit écrire la carte ?', ['Lucía', 'Dani', 'Leur père'], 0,
      'Lucía : Todavía no. La escribo esta noche y te la doy mañana.',
      {
        kc: [SELO, IO], d: -0.7,
        passage: 'Mensajes\nLucía: Hola, Dani. ¿Le has comprado ya el regalo a papá?\nDani: Sí, se lo compré ayer: un libro de cocina. ¿Y tú? ¿Le has escrito la tarjeta?\nLucía: Todavía no. La escribo esta noche y te la doy mañana.\nDani: Vale. ¿Y la tarta? ¿La recoges tú?\nLucía: No puedo, trabajo hasta las ocho. ¿Puedes recogerla tú?',
      })
    .type('Remplace par des pronoms : « Doy el libro a Juan. »', ['Se lo doy.'], 'a Juan → le ; el libro → lo ; le + lo → se lo.', { kc: SELO, loose: true, d: -0.8 })
    .type('Corrige : « Le lo explico. »', ['Se lo explico.'], 'le + lo → se lo.', { kc: SELO, loose: true, d: -1.0 })
    .order('Je vais te l’envoyer demain.', 'Te lo voy a enviar mañana.', 'Les deux pronoms devant ir a : te lo voy a enviar (ou voy a enviártelo).', { kc: SELO, distractors: ['le'], d: -0.8 })
    .tr('Je lui ai écrit une lettre.', ['Le he escrito una carta.', 'Le escribí una carta.', 'Yo le he escrito una carta.', 'Yo le escribí una carta.'],
      'lui → le, devant haber.', { d: -1.0 })
    .tr('Donne-le-moi, s’il te plaît.', ['Dámelo, por favor.', 'Dámela, por favor.'],
      'Impératif : pronoms collés, indirect d’abord (me), puis direct (lo / la) ; accent sur dá-.', { kc: SELO, d: -0.7 })
    .listen('Mañana es el cumpleaños de Elena. Le vamos a regalar unas entradas para un concierto.', 'Qu’est-ce qu’ils vont offrir à Elena ?', ['Des places de concert', 'Un livre', 'Un voyage'], 0,
      'Le vamos a regalar unas entradas = nous allons lui offrir des places.', { d: -1.1 })
    .listen('¿Les has contado a tus padres lo del viaje? — No, todavía no se lo he contado.', 'A-t-il parlé du voyage à ses parents ?', ['Non, pas encore', 'Oui, hier', 'Oui, ce matin'], 0,
      'todavía no se lo he contado = je ne le leur ai pas encore raconté.', { kc: SELO, d: -0.8 })
    .dictation('Mi hermana me ha pedido el coche y se lo he dejado.', 'a mi hermana + el coche → se lo.', { kc: SELO, d: -0.8 })
    .repeat('¿Nos trae la cuenta, por favor? — Ahora mismo se la traigo.', 'a ustedes + la cuenta → se la traigo.', { kc: SELO, d: -1.0 })
    .say('Je lui dis la vérité.', ['Le digo la verdad.', 'Yo le digo la verdad.'], 'lui → le, devant le verbe.', { d: -1.2 })
    .answer('¿Qué le regalas normalmente a tu mejor amigo o amiga por su cumpleaños?', 'Normalmente le regalo un libro o una entrada para un concierto, porque le encanta la música.',
      'a mi amigo → le regalo ; le encanta.', { keywords: [['le', 'se']], minWords: 10, d: -0.7 })
    .build(),
};
