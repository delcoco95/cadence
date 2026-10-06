import type { Exercise } from '../types';
import { exercises } from '../builders';
import { assessment } from '../level';

/**
 * Défis de fin d'unité C2 : items d'ÉVALUATION inédits, jamais montrés en leçon.
 * Ajouter les nouveaux items À LA FIN de chaque liste pour ne pas décaler les identifiants.
 */
export const CHECKPOINTS_C2: Record<string, Exercise[]> = {
  'c2-aspect': assessment(
    exercises('cp-c2-aspect', 'C2', { kc: 'c2.aspect.distancing' })
      .mcq('Which version would a receptionist most likely use to sound courteous?',
        ['Did you need a taxi for tomorrow morning?', 'Do you need a taxi or not?', 'You will need a taxi tomorrow.', 'Have you been needing a taxi?'], 0,
        'Le prétérit « Did you need…? » adoucit l’offre sans renvoyer au passé.', { d: 3.0 })
      .cloze('In the last chapter, the heroine ___ home and finds the house empty.', ['returns'],
        'Résumé d’intrigue : présent de narration (returns… finds).', { kc: 'c2.aspect.historic_present', hint: 'return', d: 3.0 })
      .cloze('The museum ___ in 2020, but the pandemic delayed the project by three years.', ['was to have opened'],
        'Programme officiel non réalisé : was to have + participe passé.', { kc: 'c2.aspect.future_in_past', hint: 'open : programme non réalisé, avec be to', d: 3.6 })
      .mcq('« You’re being very generous today. » The speaker suggests that the person is:',
        ['always generous by nature', 'unusually generous at the moment', 'never generous', 'pretending to be poor'], 1,
        'be being + adjectif : comportement du moment, inhabituel.', { kc: 'c2.aspect.stative_dynamic', d: 3.1 })
      .tr('Je me demandais si tu pourrais m’aider à déménager samedi.',
        ['I was wondering if you could help me move on Saturday.', 'I was wondering whether you could help me move on Saturday.', 'I was wondering if you could help me move house on Saturday.', 'I was wondering if you could help me to move on Saturday.'],
        'I was wondering if / whether + could : demande très courtoise.', { d: 3.1 })
      .listen('When I first walked into that tiny studio, I had no idea it would become my home for the next ten years.', 'Que savait le locuteur à son arrivée ?',
        ['Qu’il resterait dix ans', 'Rien de la durée de son séjour', 'Qu’il partirait vite', 'Que le studio était trop petit pour lui'], 1,
        '« it would become my home » : futur vu du passé, ignoré du locuteur à l’époque.', { kc: 'c2.aspect.future_in_past', d: 3.1 })
      .answer('Tell a short anecdote about something funny that happened on a journey, switching to the historic present for the key moment.',
        'Last spring we were driving through Wales, and suddenly a sheep walks into the road, stops right in front of the car and just stares at us for a full minute.',
        'Pose le décor au passé, puis bascule au présent pour le moment fort.',
        { kc: 'c2.aspect.historic_present', d: 3.4, minWords: 18, keywords: [['walks', 'comes', 'stops', 'says', 'looks', 'stares', 'turns', 'asks', 'goes']] })
      .build(),
  ),
  'c2-inversion': assessment(
    exercises('cp-c2-inversion', 'C2', { kc: 'c2.inversion.negative' })
      .mcq('Seldom ___ such a generous offer from a stranger.',
        ['we receive', 'do we receive', 'we do receive', 'receive we'], 1,
        'Seldom en tête + inversion avec do : do we receive.', { d: 3.0 })
      .cloze('No sooner had the speaker finished ___ the fire alarm went off.', ['than'],
        'No sooner… than.', { kc: 'c2.inversion.time', d: 3.0 })
      .type('Réécris en commençant par « Only when » : « I realised how late it was only when the lights went out. »',
        ['Only when the lights went out did I realise how late it was.'],
        'Only when + subordonnée, puis inversion dans la principale : did I realise.', { kc: 'c2.inversion.time', d: 3.6 })
      .cloze('So fierce ___ the wind that the ferry stayed in port.', ['was'],
        'So + adjectif + be + sujet : So fierce was the wind.', { kc: 'c2.inversion.so_such', d: 3.1 })
      .tr('Si j’avais su, je serais venu plus tôt.',
        ['Had I known, I would have come earlier.', 'Had I known, I would have come sooner.', 'If I had known, I would have come earlier.', 'Had I known, I’d have come earlier.'],
        'Inversion conditionnelle : Had I known = If I had known.', { kc: 'c2.inversion.fronting', d: 3.1 })
      .listen('Suffice it to say that the second attempt went a great deal better than the first.', 'Que veut dire le locuteur ?',
        ['Qu’il refuse de parler de la seconde tentative', 'Que la seconde tentative a été bien meilleure, sans entrer dans les détails', 'Que les deux tentatives ont échoué', 'Qu’il faut une troisième tentative'], 1,
        '« Suffice it to say » = disons simplement que.', { kc: 'c2.inversion.fronting', d: 3.3 })
      .answer('Write the opening line of a speech for a team that has achieved something remarkable, using at least one inversion.',
        'Never have I been prouder of a team, and so remarkable was your effort this year that our small library now welcomes twice as many visitors.',
        'Ouvre avec Never have I…, Not only…, ou So + adjectif + was…',
        { kc: 'c2.inversion.so_such', d: 3.5, minWords: 18, keywords: [['never have', 'not only', 'so remarkable was', 'so great was', 'such was', 'rarely have', 'seldom have', 'little did', 'so impressive was']] })
      .build(),
  ),
  'c2-stance': assessment(
    exercises('cp-c2-stance', 'C2', { kc: 'c2.modality.likelihood' })
      .mcq('The road is closed and the next bus isn’t for an hour, so we ___ get a taxi.',
        ['might as well', 'may well', 'are bound to', 'could hardly'], 0,
        'might as well = autant (option raisonnable faute de mieux).', { kc: 'c2.modality.pragmatic', d: 3.0 })
      .cloze('With all these roadworks, there are ___ to be delays on the motorway.', ['bound'],
        'there are bound to be = il y aura forcément.', { d: 3.0 })
      .cloze('You ___ have bought me a present; it was very kind, but not necessary.', ['needn’t', 'need not'],
        'needn’t have + p.p. = c’était inutile, mais tu l’as fait.', { kc: 'c2.modality.dare_need', d: 3.2 })
      .mcq('The phone is ___ unbreakable, yet mine cracked the first time I dropped it.',
        ['supposedly', 'presumably', 'admittedly', 'arguably'], 0,
        'supposedly = soi-disant : le locuteur doute, et la suite le prouve.', { kc: 'c2.modality.stance_adverbs', d: 3.1 })
      .tr('J’aurais cru que tu serais ravi de la nouvelle.',
        ['I would have thought you would be delighted with the news.', 'I would have thought you would be delighted by the news.', 'I would have thought you would be thrilled with the news.', 'I would have thought you would be pleased with the news.'],
        'I would have thought + would : surprise polie.', { kc: 'c2.modality.pragmatic', d: 3.2 })
      .listen('How dare you suggest that I copied your recipe! I’ve been making this cake for twenty years.', 'Comment réagit la locutrice ?',
        ['Elle remercie son interlocuteur', 'Elle s’indigne d’une accusation', 'Elle avoue avoir copié la recette', 'Elle demande la recette'], 1,
        '« How dare you…! » exprime une vive indignation.', { kc: 'c2.modality.dare_need', d: 3.0 })
      .answer('Is it worth learning a third language? Give your view using « arguably », « admittedly » or « may well ».',
        'Learning a third language is arguably one of the best investments you can make; admittedly, it takes years, but it may well open doors you never expected.',
        'Associe un adverbe de position et un modal de probabilité.',
        { kc: 'c2.modality.stance_adverbs', d: 3.3, minWords: 15, keywords: [['arguably', 'admittedly', 'presumably', 'undeniably', 'may well', 'might well']] })
      .build(),
  ),
  'c2-academic': assessment(
    exercises('cp-c2-academic', 'C2', { kc: 'c2.academic.nominalisation' })
      .mcq('The new policy has had a significant impact ___ local businesses.',
        ['on', 'of', 'at', 'for'], 0,
        'an impact ON.', { d: 3.0 })
      .type('Nominalise en commençant par « The rapid » : « Online shopping has grown rapidly, which has hurt small shops. »',
        ['The rapid growth of online shopping has hurt small shops.', 'The rapid growth in online shopping has hurt small shops.', 'The rapid growth of online shopping has harmed small shops.', 'The rapid rise of online shopping has hurt small shops.'],
        'grown rapidly → the rapid growth of / in.', { d: 3.4 })
      .cloze('We stayed in a ___ cottage near the coast.', ['three-bedroom'],
        'Adjectif composé : nom au singulier, trait d’union.', { kc: 'c2.academic.noun_phrases', hint: 'trois chambres (adjectif composé)', d: 3.0 })
      .mcq('Which sentence is appropriately hedged for a research paper?',
        ['This proves that music improves concentration.', 'These findings suggest that music may improve concentration in some contexts.', 'Music obviously improves concentration.', 'Everyone knows music helps concentration.'], 1,
        'suggest + may + in some contexts : triple atténuation.', { kc: 'c2.academic.hedging', d: 3.0 })
      .tr('Les résultats montrent clairement un lien entre le sommeil et la mémoire.',
        ['The results clearly show a link between sleep and memory.', 'The findings clearly show a link between sleep and memory.', 'The results clearly demonstrate a link between sleep and memory.', 'The results clearly show a connection between sleep and memory.'],
        'clearly + show / demonstrate : renforcement.', { kc: 'c2.academic.boosting', d: 3.1 })
      .listen('It would appear that participants who cycled to work reported slightly higher levels of energy.', 'Comment le résultat est-il présenté ?',
        ['Comme une certitude absolue', 'Avec prudence', 'Comme une erreur de mesure', 'Comme une opinion personnelle sans données'], 1,
        '« It would appear » + « slightly » : formulation prudente.', { kc: 'c2.academic.hedging', d: 3.1 })
      .answer('In one or two formal sentences, summarise the effect of smartphones on the way people read, hedging at least one claim.',
        'The widespread use of smartphones appears to have led to a decline in sustained reading, although there is some evidence that people now read more short texts than ever.',
        'Nominalise (the widespread use of, a decline in) et atténue (appears to, some evidence).',
        { kc: 'c2.academic.hedging', d: 3.4, minWords: 18, keywords: [['appears', 'seems', 'may', 'might', 'suggest', 'some evidence', 'tend'], ['use', 'decline', 'increase', 'rise', 'reduction', 'growth']] })
      .build(),
  ),
  'c2-cohesion': assessment(
    exercises('cp-c2-cohesion', 'C2', { kc: 'c2.cohesion.substitution' })
      .mcq('Is the shop still open? — I’m afraid ___. It closed at six.',
        ['not', 'no', 'so', 'none'], 0,
        'I’m afraid not = j’ai bien peur que non.', { d: 3.0 })
      .cloze('The climate in the north is harsher than ___ in the south.', ['that'],
        'that in / that of : reprise d’un nom singulier.', { d: 3.0 })
      .type('Évite la répétition par ellipse : « I didn’t think I would enjoy the opera, but I enjoyed the opera. »',
        ['I didn’t think I would enjoy the opera, but I did.', 'I didn’t think I would enjoy the opera but I did.'],
        'L’auxiliaire seul (did) reprend toute l’action.', { kc: 'c2.cohesion.ellipsis', d: 3.1 })
      .cloze('___ as I respect his opinion, I think he is wrong about this.', ['Much'],
        'Much as = bien que, j’ai beau.', { kc: 'c2.concession.advanced', d: 3.1 })
      .tr('Aussi petit soit-il, ce jardin est magnifique.',
        ['Small as it is, this garden is beautiful.', 'Small though it is, this garden is beautiful.', 'However small it is, this garden is beautiful.', 'Small as it may be, this garden is beautiful.', 'Small as it is, this garden is magnificent.'],
        'Adjectif + as / though + sujet + verbe : concession par antéposition.', { kc: 'c2.concession.fronted', d: 3.4 })
      .listen('The new software is faster, albeit a little harder to learn.', 'Que dit le locuteur du nouveau logiciel ?',
        ['Il est plus rapide mais un peu plus difficile à apprendre', 'Il est plus lent et plus difficile', 'Il est plus facile mais plus lent', 'Il n’a aucun défaut'], 0,
        'albeit = quoique : concession compacte.', { kc: 'c2.concession.advanced', d: 3.0 })
      .answer('Give a balanced opinion on living in a big city, using « For all », « Granted » or « Much as ».',
        'For all the noise and the high rents, I enjoy city life; granted, it can be exhausting, but I would miss the museums and the energy if I left.',
        'Concède les inconvénients, puis défends ta position.',
        { kc: 'c2.concession.advanced', d: 3.3, minWords: 18, keywords: [['for all', 'granted', 'much as', 'albeit', 'admittedly']] })
      .build(),
  ),
  'c2-figurative': assessment(
    exercises('cp-c2-figurative', 'C2', { kc: 'c2.figurative.idioms' })
      .mcq('« The complaints we received were just the tip of the iceberg. » This means:',
        ['the problem was much bigger than it first appeared', 'the complaints were very cold', 'the problem has been solved', 'only a few people complained, so it does not matter'], 0,
        'the tip of the iceberg = la partie émergée de l’iceberg.', { d: 3.0 })
      .cloze('The new manager wants to make sure everyone is on the same ___ before the launch.', ['page'],
        'on the same page = d’accord sur le plan à suivre.', { d: 3.0 })
      .mcq('After a twelve-hour flight with a delay, your friend says: « Well, that was slightly longer than planned. » This is:',
        ['understatement', 'hyperbole', 'euphemism for being unemployed', 'a metaphor of war'], 0,
        'Minimiser un fait évident : litote.', { kc: 'c2.figurative.understatement', d: 3.0 })
      .cloze('The advert describes the car as « pre-___ », which simply means second-hand.', ['owned'],
        'pre-owned : euphémisme commercial pour « d’occasion ».', { kc: 'c2.figurative.euphemism', d: 3.0 })
      .tr('Rater ce bus a été un mal pour un bien.',
        ['Missing that bus was a blessing in disguise.', 'Missing the bus was a blessing in disguise.', 'Missing that bus turned out to be a blessing in disguise.', 'Missing the bus turned out to be a blessing in disguise.'],
        'a blessing in disguise = un mal pour un bien.', { d: 3.1 })
      .listen('Oh, brilliant. The printer has jammed again, five minutes before the meeting.', 'Quel est le ton du locuteur ?',
        ['Enthousiaste', 'Ironique et agacé', 'Indifférent', 'Reconnaissant'], 1,
        '« Oh, brilliant » dit l’inverse de ce qu’il pense : ironie.', { kc: 'c2.figurative.understatement', d: 3.0 })
      .answer('Describe a time when you had too much to do, using at least one idiom (bite off more than you can chew, cut corners, back to square one…).',
        'Last year I bit off more than I could chew by agreeing to organise two events in one week, and when the venue cancelled, we were back to square one.',
        'Emploie un ou deux idiomes du cours dans un récit au passé.',
        { d: 3.3, minWords: 18, keywords: [['bit off more', 'bite off more', 'cut corners', 'square one', 'blessing in disguise', 'tip of the iceberg', 'ball rolling', 'reinvent the wheel']] })
      .build(),
  ),
  'c2-lexis': assessment(
    exercises('cp-c2-lexis', 'C2', { kc: 'c2.lexis.affixes' })
      .mcq('The home team was heavily ___ but still won the match.',
        ['outnumbered', 'misnumbered', 'overnumbered', 'counternumbered'], 0,
        'out- = surpasser : être en infériorité numérique = be outnumbered.', { d: 3.0 })
      .cloze('The ___ of the forecast surprised everyone: it was right to the hour.', ['accuracy'],
        'accurate → accuracy (-cy).', { kc: 'c2.lexis.word_families', hint: 'accurate', d: 3.1 })
      .mcq('Which word would a friend use to describe you POSITIVELY for speaking your mind?',
        ['frank', 'blunt', 'tactless', 'rude'], 0,
        'frank = franc (positif) ; blunt, tactless et rude sont négatifs.', { kc: 'c2.lexis.connotation', d: 3.0 })
      .cloze('The documentary was ___ moving; several viewers wrote to thank the director.', ['deeply'],
        'deeply moving = profondément émouvant : collocation.', { kc: 'c2.lexis.collocation', hint: 'profondément', d: 3.1 })
      .tr('Il est très peu probable qu’il pleuve demain.',
        ['It is highly unlikely that it will rain tomorrow.', 'It is highly unlikely to rain tomorrow.', 'It’s highly unlikely that it will rain tomorrow.', 'It is very unlikely that it will rain tomorrow.'],
        'highly unlikely : collocation adverbe + adjectif.', { kc: 'c2.lexis.collocation', d: 3.0 })
      .listen('I wouldn’t call him stingy; he’s just careful with money and hates waste.', 'Comment le locuteur présente-t-il cette personne ?',
        ['Comme quelqu’un de radin', 'Comme quelqu’un d’économe', 'Comme quelqu’un de dépensier', 'Comme quelqu’un de pauvre'], 1,
        'Il refuse le mot péjoratif stingy au profit d’une description valorisante.', { kc: 'c2.lexis.connotation', d: 3.0 })
      .answer('Describe a film or book you found overrated or underrated, and explain why.',
        'I found the latest detective series massively overrated, because the plot was predictable, whereas an old radio drama I discovered last year is seriously underrated.',
        'Emploie overrated / underrated et justifie ton avis.',
        { d: 3.2, minWords: 15, keywords: [['overrated', 'underrated', 'overhyped'], ['because', 'since', 'as', 'whereas']] })
      .build(),
  ),
  'c2-register': assessment(
    exercises('cp-c2-register', 'C2', { kc: 'c2.phrasal.advanced' })
      .mcq('The new café didn’t really ___ all the hype.',
        ['live up to', 'come up against', 'gloss over', 'phase out'], 0,
        'live up to = être à la hauteur de.', { d: 3.0 })
      .cloze('By and ___, the trip went smoothly.', ['large'],
        'by and large = dans l’ensemble.', { kc: 'c2.phrasal.fixed_expressions', d: 3.0 })
      .type('Reformule en registre soutenu avec « postpone » : « They’ve put off the launch until May. »',
        ['They have postponed the launch until May.', 'They postponed the launch until May.', 'The launch has been postponed until May.'],
        'put off (courant) = postpone (soutenu).', { kc: 'c2.register.shifting', d: 3.0 })
      .mcq('The flat is tiny. ___, it’s right next to the beach.',
        ['Mind you', 'As it happens', 'Speaking of which', 'Come to think of it'], 0,
        'Mind you introduit une réserve positive après une critique.', { kc: 'c2.register.discourse_markers', d: 3.0 })
      .tr('Nous vous serions reconnaissants de bien vouloir répondre avant vendredi.',
        ['We would be grateful if you could reply by Friday.', 'We would be grateful if you could reply before Friday.', 'We would be grateful if you would reply by Friday.', 'We would be grateful if you could respond by Friday.'],
        'We would be grateful if you could… : requête formelle.', { kc: 'c2.register.shifting', d: 3.1 })
      .listen('Come to think of it, I haven’t heard from Sarah since the conference.', 'Que vient de réaliser le locuteur ?',
        ['Qu’il a oublié la conférence', 'Qu’il n’a pas eu de nouvelles de Sarah depuis la conférence', 'Que Sarah organise une conférence', 'Qu’il doit appeler la conférence'], 1,
        '« Come to think of it » = à bien y réfléchir : une prise de conscience soudaine.', { kc: 'c2.register.discourse_markers', d: 3.0 })
      .answer('Explain to a friend, informally, how you sorted out a problem at work or school, using at least one phrasal verb and one discourse marker.',
        'Anyway, we came up against a scheduling problem last week, but as it happens my colleague had a spare room, so we sorted it out in ten minutes.',
        'Mêle phrasal verbs (come up against, sort out, iron out) et marqueurs (anyway, as it happens, mind you).',
        { d: 3.3, minWords: 15, keywords: [['came up against', 'sorted', 'ironed', 'worked out', 'ran into', 'figured out'], ['anyway', 'as it happens', 'mind you', 'having said that', 'still', 'that said']] })
      .build(),
  ),
};
