import type { Lesson } from '../types';
import { exercises } from '../builders';

const PRES = 'b1.grammar.passive.present';
const PAST = 'b1.grammar.passive.past';
const DEF = 'b1.grammar.relative.defining';
const WW = 'b1.grammar.relative.where_whose';

export const passiveRelatives1: Lesson = {
  id: 'b1-passive-relatives-1',
  cefr: 'B1',
  unitId: 'b1-passive-relatives',
  title: 'La voix passive',
  subtitle: 'It was built in 1889 · English is spoken here',
  kcIds: [PRES, PAST],
  estMinutes: 8,
  explanation: [
    {
      title: 'Forme : be + participe passé',
      table: [
        ['présent', 'is / are + participe : Coffee is grown in Brazil.'],
        ['passé', 'was / were + participe : The bridge was built in 1920.'],
        ['agent', 'by + auteur : The song was written by Adele.'],
      ],
      examples: [
        { en: 'These phones are made in Vietnam.', fr: 'Ces téléphones sont fabriqués au Vietnam.' },
        { en: 'My car was stolen last night.', fr: 'On m’a volé ma voiture hier soir.' },
      ],
    },
    {
      title: 'Quand l’utiliser',
      body: 'Quand l’action compte plus que celui qui la fait, ou quand on ne le connaît pas. On n’ajoute by… que si l’information est utile.',
      examples: [
        { en: 'English is spoken here.', fr: 'Ici, on parle anglais.' },
        { en: 'The museum was designed by a Japanese architect.', fr: 'Le musée a été conçu par un architecte japonais.' },
      ],
      tip: 'Le « on » français se traduit très souvent par un passif : « On m’a offert un poste » → I was offered a job. Et « je suis né » → I was born (au passé !).',
    },
  ],
  exercises: exercises('b1-passive-relatives-1', 'B1', { kc: PAST, tense: 'passive' })
    .cloze('Coffee ___ grown in Colombia.', ['is'], 'Passif présent, sujet singulier → is + participe.', { kc: PRES, d: -0.5 })
    .cloze('The Eiffel Tower ___ built in 1889.', ['was'], 'Passif passé (in 1889) → was + participe.', { d: -0.4 })
    .mcq('The windows ___ every week.', ['are cleaned', 'clean', 'are cleaning'], 0, 'Les fenêtres ne se nettoient pas seules → passif : are cleaned.', { kc: PRES, d: -0.2 })
    .mcq('"Hamlet" was written ___ Shakespeare.', ['by', 'from', 'of'], 0, 'L’agent est introduit par by.', { d: -0.3 })
    .mcq('My bike ___ last night.', ['was stolen', 'stole', 'was stole'], 0, 'steal → stole → stolen : passif = was + participe passé.', { d: -0.1 })
    .type('Mets au passif : Someone cleans the office every evening.', ['The office is cleaned every evening.'], 'someone est inutile → pas de by : The office is cleaned…', { kc: PRES, loose: true, d: 0.3 })
    .type('Mets au passif, avec by : A famous architect designed the museum.', ['The museum was designed by a famous architect.'], 'was designed + by a famous architect.', { loose: true, d: 0.4 })
    .order('Les invitations ont été envoyées hier.', 'The invitations were sent yesterday.', 'Pluriel + passé → were sent.', { distractors: ['sended'], d: 0 })
    .tr('On parle anglais et français au Canada.', ['English and French are spoken in Canada.', 'French and English are spoken in Canada.', 'In Canada, English and French are spoken.', 'People speak English and French in Canada.', 'People speak French and English in Canada.', 'They speak English and French in Canada.'],
      '« on » → passif : are spoken.', { kc: PRES, d: 0.4 })
    .tr('Le colis a été livré ce matin.', ['The parcel was delivered this morning.', 'The package was delivered this morning.', 'The parcel got delivered this morning.', 'The package got delivered this morning.'],
      'this morning (terminé) → passif passé : was delivered.', { d: 0.3 })
    .listen('All our bread is baked on site every morning.', 'Que dit la boulangerie ?', ['Le pain est fait sur place chaque matin', 'Le pain est livré chaque matin', 'Le pain est vendu à moitié prix le matin'], 0,
      'is baked on site = cuit sur place.', { kc: PRES, d: -0.1 })
    .listen('The concert was cancelled because the singer was ill.', 'Pourquoi le concert a-t-il été annulé ?', ['La chanteuse était malade', 'Il pleuvait', 'Pas assez de billets vendus'], 0,
      'was cancelled = a été annulé ; the singer was ill = la chanteuse était malade.', { d: -0.1 })
    .dictation('The meeting room is booked every Monday morning.', 'Passif présent : is booked.', { kc: PRES, d: 0 })
    .say('Ce pont a été construit en 1920.', ['This bridge was built in 1920', 'The bridge was built in 1920'], 'build → built : was built.', { d: 0.2 })
    .answer('Tell me about a famous building in your country. When was it built? Who visits it?', 'The Mont Saint-Michel abbey was built in the Middle Ages and it is visited by millions of people every year.',
      'Utilise le passif : was built, is visited, was designed…', { kc: [PAST, PRES], keywords: [['was', 'were', 'is', 'are'], ['built', 'made', 'designed', 'visited', 'known', 'created']], minWords: 10, d: 0.6 })
    .build(),
};

export const passiveRelatives2: Lesson = {
  id: 'b1-passive-relatives-2',
  cefr: 'B1',
  unitId: 'b1-passive-relatives',
  title: 'Propositions relatives',
  subtitle: 'who, which, that, where, whose',
  kcIds: [DEF, WW],
  estMinutes: 8,
  explanation: [
    {
      title: 'Choisir le relatif',
      table: [
        ['who', 'une personne : the woman who lives next door'],
        ['which', 'une chose : the bike which I bought'],
        ['that', 'personne ou chose : the film that we saw'],
        ['where', 'un lieu : the café where we met'],
        ['whose', 'possession (dont le / la) : the man whose car was stolen'],
      ],
      examples: [
        { en: 'The colleague who helped me is from Spain.', fr: 'Le collègue qui m’a {aidé|aidée} est espagnol.' },
        { en: 'That’s the hotel where we stayed.', fr: 'C’est l’hôtel où nous avons séjourné.' },
        { en: 'I have a friend whose sister is an actress.', fr: 'J’ai un ami dont la sœur est actrice.' },
      ],
      tip: 'Qui / que ne correspondent pas à who / which : le choix dépend de personne ou chose, pas de sujet ou complément.',
    },
    {
      title: 'Omettre le relatif',
      body: 'Quand le relatif est complément (suivi d’un sujet), on peut l’omettre : the book (that) you lent me.',
      tip: 'Ne répète pas le complément : « the book that I read it » ✗ → « the book that I read » ✓.',
    },
  ],
  exercises: exercises('b1-passive-relatives-2', 'B1', { kc: DEF, tense: 'relative' })
    .mcq('The woman ___ lives next door is a nurse.', ['who', 'which', 'whose'], 0, 'Une personne, sujet → who.', { d: -0.5 })
    .mcq('That’s the restaurant ___ we had our first date.', ['where', 'which', 'who'], 0, 'Un lieu → where.', { kc: WW, d: -0.2 })
    .mcq('He’s the colleague ___ wife works at the hospital.', ['whose', 'who', 'who’s'], 0, 'Possession (dont la femme) → whose.', { kc: WW, d: 0.1 })
    .cloze('Is this the train ___ goes to Brighton?', ['that', 'which'], 'Une chose → that ou which.', { d: -0.3 })
    .cloze('I know a café ___ you can work quietly.', ['where'], 'Un lieu → where.', { kc: WW, d: -0.1 })
    .mcq('Quelle phrase est correcte ?', ['The film that we watched was boring.', 'The film that we watched it was boring.', 'The film who we watched was boring.'], 0,
      'that remplace le complément : on ne répète pas « it ». who est réservé aux personnes.', { d: 0.2 })
    .order('C’est l’homme qui a trouvé mon portefeuille.', "That's the man who found my wallet.", 'Personne → who.', { distractors: ['which'], d: 0 })
    .type('Relie avec who : I have a friend. She speaks five languages.', ['I have a friend who speaks five languages.', 'I have a friend that speaks five languages.'], 'who remplace she.', { loose: true, d: 0.3 })
    .tr('Le livre que tu m’as prêté est génial.', ['The book you lent me is great.', 'The book that you lent me is great.', 'The book which you lent me is great.', 'The book you lent me is brilliant.', 'The book that you lent me is brilliant.', 'The book you lent me is amazing.', 'The book that you lent me is amazing.', 'The book you lent me is fantastic.'],
      'Relatif complément → that / which ou rien.', { d: 0.4 })
    .tr('C’est la ville où je suis {né|née}.', ['This is the town where I was born.', 'This is the city where I was born.', "It's the town where I was born.", "It's the city where I was born.", 'It is the town where I was born.', 'It is the city where I was born.', "That's the town where I was born.", "That's the city where I was born."],
      'Lieu → where ; je suis né → I was born.', { kc: WW, d: 0.4 })
    .listen('I’m looking for someone who can repair old watches.', 'Que cherche-t-il ?', ['Quelqu’un qui répare les vieilles montres', 'Une vieille montre à acheter', 'Un magasin de montres neuves'], 0,
      'someone who can repair… = quelqu’un qui sait réparer…', { d: 0 })
    .listen('The hotel where we stayed had a pool on the roof.', 'Qu’avait l’hôtel ?', ['Une piscine sur le toit', 'Un restaurant sur le toit', 'Une vue sur la mer'], 0,
      'a pool on the roof = une piscine sur le toit.', { kc: WW, d: -0.2 })
    .mcq('Quelles candidatures ne seront pas étudiées ?', ['Celles qui arrivent après le 30 juin', 'Celles des personnes qui ne parlent pas allemand', 'Celles envoyées par la poste'], 0,
      'Candidates whose applications arrive after 30 June will not be considered.',
      { kc: WW, passage: 'Job advert:\nWe are looking for a receptionist who speaks English and Spanish. The person we hire will work in our new office, which is located near the central station. Candidates whose applications arrive after 30 June will not be considered.', d: 0.3 })
    .say('J’ai un ami dont le père est pilote.', ['I have a friend whose father is a pilot', "I've got a friend whose father is a pilot", 'I have a friend whose dad is a pilot', "I've got a friend whose dad is a pilot"],
      'dont le père → whose father.', { kc: WW, d: 0.4 })
    .answer('Describe a person who has influenced you.', 'My grandmother is a person who has influenced me a lot. She is someone who always helps people and never gives up.',
      'Utilise who / that pour décrire la personne.', { keywords: [['who', 'that']], minWords: 12, d: 0.6 })
    .build(),
};
