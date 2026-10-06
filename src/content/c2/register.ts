import type { Lesson, Unit } from '../types';
import { exercises } from '../builders';

const PHR = 'c2.phrasal.advanced';
const FIXED = 'c2.phrasal.fixed_expressions';
const REG = 'c2.register.shifting';
const DM = 'c2.register.discourse_markers';

export const registerUnit: Unit = {
  id: 'c2-register',
  cefr: 'C2',
  title: 'Phrasal verbs, expressions figées et registres',
  description: 'Phrasal verbs avancés, expressions figées, passage du registre familier au registre soutenu, marqueurs du discours oral.',
  lessonIds: ['c2-register-1', 'c2-register-2'],
  canDo: [
    'Je peux employer des phrasal verbs et des expressions figées avancés avec naturel.',
    'Je peux adapter mon registre, du message informel au courriel professionnel, et ponctuer l’oral de marqueurs comme mind you ou having said that.',
  ],
};

export const register1: Lesson = {
  id: 'c2-register-1',
  cefr: 'C2',
  unitId: 'c2-register',
  title: 'Phrasal verbs avancés et expressions figées',
  subtitle: 'Iron out, fall through, by and large, touch and go',
  kcIds: [PHR, FIXED],
  estMinutes: 10,
  explanation: [
    {
      title: 'Des phrasal verbs de niveau avancé',
      table: [
        ['iron out', 'aplanir (des difficultés)'],
        ['gloss over', 'passer sous silence, survoler'],
        ['fall through', 'tomber à l’eau'],
        ['brush up on', 'se remettre à niveau en'],
        ['factor in', 'prendre en compte'],
        ['phase out', 'supprimer progressivement'],
        ['mull over', 'réfléchir longuement à'],
        ['bank on', 'compter sur'],
        ['live up to', 'être à la hauteur de'],
        ['come up against', 'se heurter à'],
      ],
      examples: [
        { en: 'We still need to iron out a few details with the caterers.', fr: 'Il nous reste à régler quelques détails avec le traiteur.' },
        { en: 'The sequel didn’t quite live up to the original.', fr: 'La suite n’a pas vraiment été à la hauteur de l’original.' },
      ],
      tip: 'Avec un pronom, un phrasal verb séparable place le pronom au milieu : « iron them out », jamais « iron out them ». Les verbes à trois éléments (live up to, come up against) ne se séparent jamais : « live up to it ».',
    },
    {
      title: 'Expressions figées et binômes',
      table: [
        ['by and large', 'dans l’ensemble'],
        ['first and foremost', 'avant tout'],
        ['few and far between', 'rares'],
        ['touch and go', 'incertain jusqu’au bout'],
        ['on the spur of the moment', 'sur un coup de tête'],
        ['for the time being', 'pour l’instant'],
        ['to all intents and purposes', 'pratiquement, en fait'],
      ],
      examples: [
        { en: 'By and large, the new timetable works well.', fr: 'Dans l’ensemble, le nouvel horaire fonctionne bien.' },
        { en: 'We decided to go to Rome on the spur of the moment.', fr: 'Nous avons décidé d’aller à Rome sur un coup de tête.' },
      ],
      tip: 'L’ordre des mots est figé : pros and cons, sooner or later, odds and ends. Méfie-toi des déformations courantes : « to all intents and purposes », pas « for all intensive purposes ».',
    },
  ],
  exercises: exercises('c2-register-1', 'C2', { kc: PHR })
    .mcq('We still need to ___ a few problems before the launch.',
      ['iron out', 'gloss over', 'phase out', 'fall through'], 0,
      'iron out = aplanir, régler. gloss over = passer sous silence ; phase out = supprimer progressivement ; fall through est intransitif.', { d: 3.0 })
    .cloze('The deal ___ through at the last minute, so we are looking for another buyer.', ['fell'],
      'fall through = tomber à l’eau ; prétérit : fell.', { hint: 'fall, au passé', d: 3.0 })
    .cloze('I need to brush ___ on my Spanish before the trip.', ['up'],
      'brush up on = se remettre à niveau en.', { d: 3.0 })
    .cloze('Did the hotel live up ___ your expectations?', ['to'],
      'live up to = être à la hauteur de (verbe à trois éléments, inséparable).', { d: 3.0 })
    .type('Remplace « take… into account » par un phrasal verb avec « factor » : « Did you take inflation into account? »',
      ['Did you factor in inflation?', 'Did you factor inflation in?'],
      'factor in = prendre en compte ; séparable avec un nom.', { d: 3.2 })
    .cloze('Good bookshops are few and ___ between in this part of town.', ['far'],
      'few and far between = rares : binôme figé.', { kc: FIXED, d: 3.0 })
    .cloze('We booked the trip on the spur of the ___.', ['moment'],
      'on the spur of the moment = sur un coup de tête.', { kc: FIXED, d: 3.0 })
    .order('Avant tout, je tiens à remercier les bénévoles.', 'First and foremost, I would like to thank the volunteers.',
      'First and foremost = avant tout : binôme figé, en tête de discours.', { kc: FIXED, distractors: ['firstly', 'forward'], d: 3.0 })
    .tr('Je vais y réfléchir ce week-end.',
      ['I’ll mull it over this weekend.', 'I will mull it over this weekend.', 'I’ll think it over this weekend.', 'I’ll think about it this weekend.', 'I’ll sleep on it this weekend.'],
      'mull it over / think it over : le pronom se place entre le verbe et la particule.', { d: 3.1 })
    .tr('Pour l’instant, nous restons à Lyon.',
      ['For the time being, we are staying in Lyon.', 'For now, we are staying in Lyon.', 'For the moment, we are staying in Lyon.', 'For the time being, we will stay in Lyon.', 'For the time being, we are staying in Lyons.'],
      'for the time being = pour l’instant (situation provisoire).', { kc: FIXED, d: 3.0 })
    .listen('We were banking on good weather, but the forecast has forced us to move the party indoors.', 'Sur quoi comptaient-ils ?',
      ['Sur le beau temps', 'Sur un prêt de la banque', 'Sur une salle à l’intérieur', 'Sur l’annulation de la fête'], 0,
      'bank on = compter sur.', { d: 3.0 })
    .listen('It was touch and go whether we’d catch the ferry, but we made it with a minute to spare.', 'Ont-ils pris le ferry ?',
      ['Non, ils l’ont manqué de peu', 'Oui, de justesse', 'Oui, avec une heure d’avance', 'Le ferry a été annulé'], 1,
      'touch and go = incertain jusqu’au bout ; with a minute to spare = avec une minute d’avance.', { kc: FIXED, d: 3.1 })
    .say('Nous allons supprimer progressivement les sacs en plastique.',
      ['We are going to phase out plastic bags', 'We will phase out plastic bags', 'We are phasing out plastic bags', 'We are going to gradually phase out plastic bags'],
      'phase out = supprimer progressivement.', { d: 3.0 })
    .answer('Tell us about a plan that did not go smoothly at first. Use at least two phrasal verbs (come up against, run into, iron out, sort out, work out…).',
      'We came up against a lot of problems when we organised the school trip, but after a few meetings we ironed them out and everything worked out in the end.',
      'Un phrasal verb pour le problème (come up against, run into, fall through), un autre pour la solution (iron out, sort out, work out).',
      { d: 3.2, minWords: 15, keywords: [['came up against', 'come up against', 'ran into', 'run into', 'fell through', 'banked on'], ['ironed', 'iron out', 'worked out', 'work out', 'sorted out', 'sort out']] })
    .build(),
};

export const register2: Lesson = {
  id: 'c2-register-2',
  cefr: 'C2',
  unitId: 'c2-register',
  title: 'Changer de registre et marqueurs du discours',
  subtitle: 'Postpone ou put off, mind you, having said that',
  kcIds: [REG, DM],
  estMinutes: 10,
  explanation: [
    {
      title: 'Du familier au soutenu',
      body: 'Le registre soutenu préfère les mots d’origine latine, les tournures indirectes et l’impersonnel ; le registre courant préfère les phrasal verbs et les mots courts.',
      table: [
        ['courant', 'soutenu'],
        ['put off', 'postpone'],
        ['look into', 'investigate'],
        ['find out', 'discover, ascertain'],
        ['need', 'require'],
        ['enough', 'sufficient'],
        ['Sorry for…', 'We apologise for…'],
        ['Can you…?', 'We would be grateful if you could…'],
      ],
      examples: [
        { en: 'We would be grateful if you could confirm your attendance by Friday.', fr: 'Nous vous serions reconnaissants de bien vouloir confirmer votre présence d’ici vendredi.' },
        { en: 'Visitors are kindly requested to refrain from eating in the gallery.', fr: 'Les visiteurs sont priés de ne pas manger dans la galerie.' },
      ],
      tip: 'Avantage des francophones : les mots latins (require, assist, commence) leur sont familiers. Risque : les employer à l’oral entre amis, ce qui sonne guindé. « Shall we commence? » au café fait sourire : dis « Shall we start? ».',
    },
    {
      title: 'Les marqueurs du discours oral',
      table: [
        ['Mind you', 'remarque (ajoute une réserve)'],
        ['As it happens', 'justement, il se trouve que'],
        ['Come to think of it', 'à bien y réfléchir'],
        ['Having said that / That said', 'cela dit'],
        ['Still / All the same', 'quand même, tout de même'],
        ['Speaking of which', 'à propos'],
        ['Anyway', 'bref, enfin bref'],
      ],
      examples: [
        { en: 'The flat is small. Mind you, the view is incredible.', fr: 'L’appartement est petit. Remarque, la vue est incroyable.' },
        { en: 'You need a translator? As it happens, my sister is one.', fr: 'Tu cherches un traducteur ? Justement, ma sœur l’est.' },
      ],
      tip: '« Actually » corrige ou contredit poliment (« en fait »), il ne signifie jamais « actuellement » (currently). Et « Anyway » sert à clore une digression ou à revenir au sujet, comme « bref ».',
    },
  ],
  exercises: exercises('c2-register-2', 'C2', { kc: REG })
    .mcq('Which is the most formal equivalent of « We need to put off the meeting »?',
      ['We need to postpone the meeting.', 'We gotta push the meeting back.', 'We need to put the meeting off a bit.', 'Let’s bin the meeting.'], 0,
      'postpone est l’équivalent latin et soutenu de put off.', { d: 3.0 })
    .cloze('Passengers are ___ to keep their luggage with them at all times.', ['required'],
      'be required to = être tenu de : formulation officielle.', { hint: 'formel : obligés (require)', d: 3.0 })
    .type('Reformule en registre formel en commençant par « We would be grateful if » : « Can you send us the signed form? »',
      ['We would be grateful if you could send us the signed form.', 'We would be grateful if you would send us the signed form.', 'We would be grateful if you could return the signed form to us.'],
      'We would be grateful if you could… : requête indirecte et courtoise.', { d: 3.2 })
    .type('Reformule en registre courant avec un phrasal verb : « We will investigate the matter. »',
      ['We will look into the matter.', 'We will look into it.'],
      'investigate (soutenu) = look into (courant).', { d: 3.0 })
    .mcq('The hotel was a bit noisy. ___, the breakfast was fantastic.',
      ['Mind you', 'Come to think of it', 'Speaking of which', 'As it happens'], 0,
      'Mind you introduit une réserve qui nuance ce qui précède (remarque…).', { kc: DM, d: 3.1 })
    .mcq('You’re looking for a plumber? ___, my cousin is one.',
      ['As it happens', 'Mind you', 'All the same', 'Having said that'], 0,
      'As it happens = justement, il se trouve que.', { kc: DM, d: 3.0 })
    .order('Cela dit, je comprends ton point de vue.', 'Having said that, I understand your point of view.',
      'Having said that = cela dit : introduit une nuance.', { kc: DM, distractors: ['Saying', 'tell'], d: 3.0 })
    .tr('Veuillez trouver ci-joint le rapport.',
      ['Please find attached the report.', 'Please find the report attached.', 'Attached please find the report.', 'Please find enclosed the report.', 'Please find the report enclosed.', 'Please see the attached report.'],
      'Please find attached… : formule figée du courriel professionnel.', { d: 3.0 })
    .tr('Bref, on s’est bien amusés.',
      ['Anyway, we had a great time.', 'Anyway, we had a lot of fun.', 'Anyway, we had a good time.', 'Anyway, we really enjoyed ourselves.', 'Anyhow, we had a great time.', 'In short, we had a great time.'],
      'Anyway = bref, pour conclure un récit.', { kc: DM, d: 3.0 })
    .mcq('Which statement best compares the two versions?',
      ['They convey different requests', 'They convey the same request; B uses formal vocabulary and indirect phrasing', 'A is more polite than B', 'B is informal because it uses « Please »'], 1,
      'heads-up / ASAP / get them to me / Cheers contre please note / requested / forward / at your earliest convenience / Kind regards : même message, deux registres.',
      {
        d: 3.1,
        passage: 'Version A: “Hi all, quick heads-up: the boss wants the figures by Friday, so can you get them to me ASAP? Cheers, Sam.” Version B: “Dear colleagues, please note that the management team has requested the quarterly figures by Friday. I would be grateful if you could forward them to me at your earliest convenience. Kind regards, Samuel Hart.”',
      })
    .listen('I wasn’t keen on the idea at first. Still, I have to admit it worked out rather well.', 'Quelle est l’opinion finale du locuteur ?',
      ['Il reste opposé à l’idée', 'Il reconnaît que l’idée a bien fonctionné', 'Il n’a pas d’avis', 'Il regrette d’avoir essayé'], 1,
      'Still = quand même : il nuance sa réticence initiale.', { kc: DM, d: 3.0 })
    .listen('Customers are kindly requested to refrain from using mobile phones in the reading room.', 'Que demande-t-on aux usagers ?',
      ['De recharger leur téléphone', 'De ne pas utiliser leur téléphone dans la salle de lecture', 'De réserver une salle', 'D’appeler l’accueil'], 1,
      'are kindly requested to refrain from + -ing : interdiction formulée en registre très soutenu.', { d: 3.0 })
    .say('À propos, tu as des nouvelles de Julie ?',
      ['Speaking of which, have you heard from Julie', 'By the way, have you heard from Julie', 'Incidentally, have you heard from Julie', 'Speaking of which, any news from Julie', 'By the way, have you had any news from Julie'],
      'Speaking of which / By the way = à propos.', { kc: DM, d: 3.0 })
    .answer('Your friend wrote: « Hey, can’t make it Thursday, sorry! » Rewrite this as a formal sentence to a client.',
      'I regret to inform you that I will be unable to attend the meeting on Thursday, and I apologise for any inconvenience this may cause.',
      'Passe au registre soutenu : I regret to inform you, unable to attend, I apologise for any inconvenience.',
      { d: 3.2, minWords: 15, keywords: [['regret', 'unfortunately', 'unable', 'apologise', 'apologize'], ['thursday']] })
    .build(),
};
