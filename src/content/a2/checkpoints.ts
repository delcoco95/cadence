import type { Exercise } from '../types';
import { exercises } from '../builders';

/**
 * Défis de fin d'unité : items d'ÉVALUATION, jamais montrés en leçon ni en révision.
 * Ils mesurent le transfert (contextes nouveaux, formats variés, production) avant de débloquer l'unité suivante.
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */

const assess = (list: Exercise[]): Exercise[] => list.map((e) => ({ ...e, role: 'assessment' as const }));

export const CHECKPOINTS: Record<string, Exercise[]> = {
  'a2-basics': assess(
    exercises('cp-basics', 'A2', { kc: 'grammar.articles' })
      .mcq('She’s ___ honest person.', ['a', 'an', 'the'], 1, 'honest : le h est muet → an honest person.', { d: 0 })
      .cloze('Two ___ are waiting outside.', ['men'], 'man → men (pluriel irrégulier).', { kc: 'grammar.plurals', hint: 'man' })
      .mcq('Is this your bag? — Yes, it’s ___.', ['my', 'mine', 'me'], 1, 'Pronom possessif seul → mine.', { kc: 'grammar.possessives' })
      .cloze('Can you help ___? I’m lost.', ['me'], 'Complément → me.', { kc: 'grammar.pronouns', hint: 'moi' })
      .order('Il y a une pharmacie près d’ici ?', 'Is there a pharmacy near here?', 'Question : Is there + singulier.', { kc: 'grammar.there_is' })
      .tr('Le chat est sous la table.', ['The cat is under the table.', "The cat's under the table."], 'sous = under.', { kc: 'grammar.prepositions.place' })
      .say('C’est la voiture de ma sœur.', ["It's my sister's car", 'It is my sister’s car', 'This is my sister’s car', "That's my sister's car"], 'Possession → my sister’s car.', { kc: 'grammar.possessives' })
      .build(),
  ),
  'a2-present-simple': assess(
    exercises('cp-ps', 'A2', { kc: 'tense.present_simple.third_person_s' })
      .cloze('My dad ___ the dishes every evening.', ['washes'], 'he + verbe en -sh → washes.', { hint: 'wash' })
      .mcq('___ they live near you?', ['Do', 'Does', 'Are'], 0, 'they → do.', { kc: 'tense.present_simple.question' })
      .cloze('She ___ like spicy food.', ['doesn’t', "doesn't", 'does not'], 'Négation avec she → doesn’t + base.', { kc: 'tense.present_simple.negative' })
      .order('Je bois rarement du café.', 'I rarely drink coffee.', 'Adverbe de fréquence avant le verbe.', { kc: 'tense.present_simple.usage' })
      .tr('Est-ce qu’il travaille le samedi ?', ['Does he work on Saturdays?', 'Does he work on Saturday?', 'Does he work Saturdays?'], 'Question : Does + sujet + base.', { kc: 'tense.present_simple.question' })
      .listen('My sister studies law in London.', 'Que fait la sœur ?', ['Elle étudie le droit', 'Elle enseigne le droit', 'Elle habite à Leeds'], 0, 'studies law = étudie le droit.')
      .say('Il ne regarde pas la télé.', ["He doesn't watch TV", 'He does not watch TV', "He doesn't watch television"], 'doesn’t + base verbale.', { kc: 'tense.present_simple.negative' })
      .build(),
  ),
  'a2-present-continuous': assess(
    exercises('cp-pc', 'A2', { kc: 'tense.present_continuous.form' })
      .cloze('Look! It ___ snowing.', ['is', "'s", '’s'], 'Action en cours → is + -ing.', { kc: 'tense.present_continuous.usage' })
      .cloze('They’re ___ in the park right now.', ['running'], 'run → running (consonne doublée).', { hint: 'run' })
      .mcq('I ___ to work by bike every day.', ['go', 'am going', 'goes'], 0, 'Habitude → present simple.', { kc: 'tense.contrast.simple_vs_continuous' })
      .mcq('Shh! I ___ to the radio.', ['listen', 'am listening', 'listens'], 1, 'En ce moment → present continuous.', { kc: 'tense.contrast.simple_vs_continuous' })
      .tr('Qu’est-ce que tu fais ?', ['What are you doing?', "What're you doing?"], 'Question : What + are + you + -ing.', { kc: 'tense.present_continuous.form' })
      .listen('Sorry, I can’t talk now. I’m driving.', 'Pourquoi ne peut-il pas parler ?', ['Il conduit', 'Il dort', 'Il est en réunion'], 0, 'I’m driving = je conduis.', { kc: 'tense.present_continuous.usage' })
      .say('Je travaille de chez moi cette semaine.', ["I'm working from home this week", 'I am working from home this week'], 'Situation temporaire → present continuous.', { kc: 'tense.contrast.simple_vs_continuous' })
      .build(),
  ),
  'a2-questions': assess(
    exercises('cp-q', 'A2', { kc: 'grammar.questions.wh' })
      .mcq('___ do you go to the gym? — Twice a week.', ['How often', 'How much', 'How long'], 0, 'Fréquence → how often.')
      .mcq('___ is your birthday? — In May.', ['When', 'Where', 'Who'], 0, 'Date → when.')
      .mcq('Who ___ the window?', ['broke', 'did break', 'did broke'], 0, 'Question sur le sujet : pas de did.', { kc: 'grammar.questions.subject' })
      .order('Où est-ce que tu habites ?', 'Where do you live?', 'Wh- + do + sujet + base.')
      .tr('Combien de frères as-tu ?', ['How many brothers do you have?', 'How many brothers have you got?'], 'Dénombrable → how many.')
      .say('À quelle heure part le train ?', ['What time does the train leave', 'When does the train leave', 'What time does the train go'], 'What time + does + sujet + base.')
      .build(),
  ),
  'a2-past-simple': assess(
    exercises('cp-past', 'A2', { kc: 'tense.past_simple.irregular' })
      .cloze('Last night I ___ a strange dream.', ['had'], 'have → had.', { hint: 'have' })
      .cloze('We ___ our grandparents last weekend.', ['visited'], 'Régulier → -ed.', { kc: 'tense.past_simple.regular', hint: 'visit' })
      .mcq('She didn’t ___ the answer.', ['know', 'knew', 'known'], 0, 'didn’t + base.', { kc: 'tense.past_simple.negative' })
      .mcq('___ you enjoy the concert?', ['Did', 'Do', 'Were'], 0, 'Question au passé → did.', { kc: 'tense.past_simple.question' })
      .tr('J’ai perdu mes clés hier.', ['I lost my keys yesterday.', 'Yesterday I lost my keys.'], 'lose → lost.')
      .listen('We took a taxi because we missed the last bus.', 'Pourquoi ont-ils pris un taxi ?', ['Ils ont raté le dernier bus', 'Il pleuvait', 'Ils étaient en retard au travail'], 0, 'missed the last bus = raté le dernier bus.')
      .answer('What did you do last weekend?', 'Last weekend I visited my friends and we watched a film.', 'Raconte au past simple : visited, went, watched…', { minWords: 6 })
      .build(),
  ),
  'a2-future': assess(
    exercises('cp-fut', 'A2', { kc: 'tense.future.going_to' })
      .mcq('Look at those clouds! It ___ rain.', ['is going to', 'will', 'goes to'], 0, 'Preuve visible → going to.')
      .mcq('The phone is ringing. — I ___ get it!', ['’ll', '’m going to', 'get'], 0, 'Décision immédiate → will.', { kc: 'tense.future.will' })
      .cloze('I think she ___ love the present.', ['will', "'ll", '’ll'], 'Prédiction / opinion → will.', { kc: 'tense.future.will' })
      .order('Nous allons déménager l’année prochaine.', 'We are going to move next year.', 'Projet → be going to + base.')
      .tr('Je t’appellerai demain.', ["I'll call you tomorrow.", 'I will call you tomorrow.'], 'Promesse → will.', { kc: 'tense.future.will' })
      .say('Qu’est-ce que tu vas faire ce soir ?', ['What are you going to do tonight', 'What are you doing tonight', 'What are you going to do this evening'], 'Projet → going to.')
      .build(),
  ),
  'a2-compare': assess(
    exercises('cp-cmp', 'A2', { kc: 'grammar.comparatives' })
      .cloze('My new flat is ___ than my old one.', ['bigger'], 'big → bigger (consonne doublée).', { hint: 'big' })
      .mcq('It’s the ___ day of the year.', ['hottest', 'hotter', 'most hot'], 0, 'Superlatif court → the hottest.', { kc: 'grammar.superlatives' })
      .mcq('This test is ___ than the last one.', ['easier', 'more easy', 'easyer'], 0, 'easy → easier.')
      .cloze('She’s the ___ person I know.', ['most generous'], 'Adjectif long → the most …', { kc: 'grammar.superlatives', hint: 'generous', loose: true })
      .tr('Mon frère est plus grand que moi.', ['My brother is taller than me.', 'My brother is taller than I am.', "My brother's taller than me."], 'tall → taller than.')
      .say('C’est le pire film de l’année.', ["It's the worst film of the year", 'It is the worst film of the year', "It's the worst movie of the year"], 'bad → the worst.', { kc: 'grammar.superlatives' })
      .build(),
  ),
  'a2-quantities': assess(
    exercises('cp-qty', 'A2', { kc: 'grammar.quantifiers' })
      .mcq('There isn’t ___ milk left.', ['any', 'some', 'many'], 0, 'Négation → any.')
      .mcq('How ___ people came to the party?', ['many', 'much', 'lot'], 0, 'people est dénombrable → many.')
      .mcq('I don’t have ___ time today.', ['much', 'many', 'a few'], 0, 'time (indénombrable) → much.', { kc: 'grammar.countable' })
      .cloze('Would you like ___ tea?', ['some'], 'Proposition polie → some.')
      .tr('Il y a beaucoup de voitures dans cette rue.', ['There are a lot of cars in this street.', 'There are lots of cars in this street.', 'There are many cars in this street.', 'There are a lot of cars on this street.'], 'a lot of / many + pluriel.')
      .say('Je n’ai pas beaucoup d’argent.', ["I don't have much money", 'I do not have much money', "I haven't got much money"], 'money (indénombrable) → much.', { kc: 'grammar.countable' })
      .build(),
  ),
  'a2-modals': assess(
    exercises('cp-mod', 'A2', { kc: 'modals.must_have_to' })
      .mcq('You look tired. You ___ go to bed early.', ['should', 'must to', 'have'], 0, 'Conseil → should + base.', { kc: 'modals.should' })
      .mcq('I ___ swim when I was five.', ['could', 'can', 'must'], 0, 'Capacité passée → could.', { kc: 'modals.can' })
      .mcq('___ you open the window, please?', ['Could', 'Must', 'Should'], 0, 'Demande polie → Could you…?', { kc: 'modals.could_request' })
      .cloze('We don’t ___ to wear a uniform at work.', ['have'], 'Absence d’obligation → don’t have to.', { hint: 'obligation' })
      .tr('Tu ne dois pas fumer ici.', ["You mustn't smoke here.", 'You must not smoke here.', "You can't smoke here.", 'You cannot smoke here.'], 'Interdiction → mustn’t.')
      .say('Est-ce que je peux m’asseoir ici ?', ['Can I sit here', 'Could I sit here', 'May I sit here'], 'Permission → Can / Could I…?', { kc: 'modals.can' })
      .build(),
  ),
  'a2-prepositions': assess(
    exercises('cp-prep', 'A2', { kc: 'grammar.prepositions.time' })
      .mcq('My birthday is ___ July.', ['in', 'on', 'at'], 0, 'Mois → in.')
      .mcq('The shop closes ___ 6 pm.', ['at', 'on', 'in'], 0, 'Heure → at.')
      .mcq('I’ll see you ___ Friday evening.', ['on', 'in', 'at'], 0, 'Jour (même avec un moment) → on.')
      .cloze('We usually go skiing ___ winter.', ['in'], 'Saison → in.')
      .mcq('The keys are ___ the drawer.', ['in', 'on', 'at'], 0, 'À l’intérieur → in.', { kc: 'grammar.prepositions.place' })
      .tr('Je suis né en 1995.', ['I was born in 1995.'], 'Année → in.')
      .build(),
  ),
};

/** Objectifs « Je peux… » affichés avant chaque défi. */
export const CAN_DO: Record<string, string[]> = {
  'a2-basics': ['Je peux parler des objets et des gens autour de moi.', 'Je peux dire à qui appartient quelque chose.'],
  'a2-present-simple': ['Je peux décrire ma routine et celle des autres.', 'Je peux poser des questions sur les habitudes.'],
  'a2-present-continuous': ['Je peux dire ce qui se passe en ce moment.', 'Je peux distinguer une habitude d’une situation temporaire.'],
  'a2-questions': ['Je peux poser toutes les questions du quotidien.'],
  'a2-past-simple': ['Je peux raconter ce que j’ai fait hier ou le week-end dernier.'],
  'a2-future': ['Je peux parler de mes projets et faire des prédictions.'],
  'a2-compare': ['Je peux comparer des lieux, des objets et des personnes.'],
  'a2-quantities': ['Je peux parler de quantités : courses, nourriture, argent.'],
  'a2-modals': ['Je peux demander poliment, donner un conseil, parler d’obligations.'],
  'a2-prepositions': ['Je peux situer un événement dans le temps et un objet dans l’espace.'],
};
