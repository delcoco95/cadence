# Cadence — Cours d'italien et d'espagnol (A1 → C2)

Ce document fixe la structure des deux nouveaux cours et les règles d'écriture du contenu.
Il complète `docs/PEDAGOGY.md` (modèle pédagogique) et reprend les formats du cours d'anglais.

## 1. Principes

- Public : francophones adultes. Toutes les consignes, explications et traductions sont **en français** ; les phrases à apprendre sont dans la langue cible.
- Italien : italien standard. Espagnol : **espagnol d'Espagne** (castillan) : *vosotros*, vocabulaire péninsulaire (*ordenador*, *coche*, *móvil*, *zumo*), passé composé pour un passé récent (*hoy he comido*).
- Le cours commence à **A1** (vrais débutants) et va jusqu'à **C2**, comme l'anglais va de A2 à C2.
- Volume par niveau, aligné sur l'anglais : 8 unités, 2 leçons par unité (16 leçons), 15 exercices par leçon, un défi de 7 items par unité, 120 à 150 mots de vocabulaire.
- Le contenu est original. Aucune reprise de manuels ni de tests officiels.

## 2. Arborescence

```
src/content/<lang>/            lang = it | es
  index.ts                     assemble le cours (ITALIAN / SPANISH) : ne pas modifier
  verbs.ts                     verbes irréguliers (infinitif, présent 1re pers., participe passé)
  placement.ts                 banque du test de niveau
  a1/ … c2/                    un module de niveau par dossier
    index.ts                   export const A1: LevelModule (unités, leçons, défis, notions, thèmes, vocabulaire)
    kcs.ts                     notions du niveau
    vocab.ts                   thèmes et vocabulaire du niveau
    checkpoints.ts             défis de fin d'unité
    <unité>.ts                 un fichier par unité : ses 2 leçons
```

## 3. Identifiants (ne jamais les changer une fois publiés : la progression y est attachée)

| Élément | Format | Exemple |
|---|---|---|
| Unité | `<lang>-<niveau>-<slug>` | `it-a1-articles` |
| Leçon | `<unité>-1`, `<unité>-2` | `it-a1-articles-1` |
| Exercice de leçon | préfixe = id de la leçon (`exercises(lessonId, …)`) | `it-a1-articles-1-07` |
| Item de défi | préfixe `cp-<unité>` | `cp-it-a1-articles-03` |
| Notion | `<lang>.<niveau>.<domaine>.<nom>` | `it.a1.grammar.definite_articles` |
| Thème de vocabulaire | `<niveau>_<nom>` (sans langue) | `a1_food` |
| Mot | automatique : `vocabFromRows('A1', ROWS, 'it')` | `it-a1-a1_food-il-pane` |
| Verbe | automatique : `verbsFromRows('it', …)` | `it-andare` |
| Item du test de niveau | automatique | `it-pl-grammar-01` |

Les nouveaux exercices s'ajoutent **à la fin** d'une liste (les identifiants sont numérotés dans l'ordre).

## 4. Écrire une leçon

- Constructeur : `const exercises = makeExercises('it')` (ou `'es'`) importé de `../../builders`. Les consignes (« Traduis en italien. ») suivent la langue.
- Cycle (voir PEDAGOGY § 7.2) : explication courte et structurée (2 à 3 sections : `title`, `body`, `table`, `examples` {en: phrase cible, fr: traduction}, `tip` sur le piège typique d'un francophone), puis exercices de la reconnaissance vers la production.
- Mélange minimal par leçon de 15 exercices : 3 QCM ou textes à trous, 2 réponses tapées, 1 phrase à remettre dans l'ordre, 2 traductions, 2 écoutes (`listen`), 1 dictée, 1 répétition orale (`repeat`), 1 `say`, 1 réponse libre (`answer`) dès A2 (en A1 : une 2e répétition ou un `say`), et au moins un texte à lire (`mcq` avec `passage`) par unité.
- Réponses acceptées : lister TOUTES les formulations correctes plausibles. Sujet exprimé ou non (*Sono stanco.* / *Io sono stanco.*), les deux genres quand la phrase française est accordée (`{allé|allée}` → *sono andato* / *sono andata*), synonymes courants, avec ou sans ¿ ¡. Le correcteur ignore la ponctuation et la casse ; un oubli d'accent compte comme faute légère.
- Accents et ponctuation exacts dans la langue cible (*è*, *perché*, *¿Dónde está?*). Phrases naturelles, telles qu'un natif les dirait.
- Le français des consignes s'accorde avec `{prêt|prête}` quand il s'adresse à l'apprenant.
- Difficulté `d` (échelle logit) : A1 −2,8 à −1,6 · A2 −1,6 à −0,6 · B1 −0,6 à 0,4 · B2 0,4 à 1,4 · C1 1,4 à 2,4 · C2 2,2 à 3.
- Écoutes : `listen(audio, question, options, answer, explication)` ; la question et les options sont en français (compréhension), ou dans la langue cible à partir de B2.
- Réponse libre : `answer(question, exemple, explication, { keywords, minWords })` ; l'exemple doit satisfaire lui-même les mots-clés et la longueur.
- Pas d'emoji.

## 5. Notions, défis, vocabulaire

- Notions (`kcs.ts`) : libellé français, bande (`A1`, `A2`, `A2+`, `B1`, `B1+`…), prérequis **du même niveau** uniquement, `errorTags` parmi les étiquettes existantes (dont `gender_agreement`, `ser_estar`, `subjunctive`, `clitic_pronoun`, `wrong_auxiliary`, `article_wrong`, `wrong_preposition`, `irregular_form`, `wrong_tense`, `word_order`, `spelling`), `lessonId` de la leçon qui l'explique. Au moins 3 exercices par notion.
- Défis (`checkpoints.ts`) : `assessment(exercises('cp-<unité>', …)…build())`, 7 items inédits par unité, toutes compétences (écrit, écoute, oral).
- Vocabulaire (`vocab.ts`) : lignes `[mot, français, exemple, traduction de l'exemple]` groupées par thème ; noms avec leur article (*il pane*, *el pan*), verbes à l'infinitif ; variantes séparées par « / ». Chaque mot a un exemple traduit, et le mot apparaît tel quel dans l'exemple quand c'est possible (exercice à trou).
- Thèmes imposés (liés aux objectifs de l'apprenant) :
  - A1 : `a1_greetings`, `a1_family`, `a1_food`, `a1_home`, `a1_city`, `a1_time`, `a1_travel`, `a1_ph_travel` (Phrases utiles · Voyage), `a1_ph_people` (Phrases utiles · Rencontres)
  - A2 : `a2_work`, `a2_travel`, `a2_leisure`, `a2_feelings`, `a2_health`, `a2_shopping`, `a2_ph_travel`, `a2_ph_work`, `a2_ph_studies`, `a2_ph_culture` (Phrases utiles · Films et séries), `a2_ph_people`
  - B1 : `b1_work`, `b1_studies`, `b1_travel`, `b1_health`, `b1_media`, `b1_relationships`
  - B2 : `b2_work`, `b2_society`, `b2_environment`, `b2_culture`, `b2_science`, `b2_economy`
  - C1, C2 : thèmes libres préfixés `c1_`, `c2_`.

## 6. Verbes irréguliers et test de niveau

- `verbs.ts` : 90 verbes du plus au moins fréquent, `[infinitif, présent 1re personne, participe passé, français]` (*andare, vado, andato* ; *ir, voy, ido*). Variantes séparées par « / ». Les 40 premiers sont A1, les 30 suivants A2, les 20 derniers B1.
- `placement.ts` : banque originale, même format que l'anglais (`src/content/placement.ts`) : grammaire ~32 items, vocabulaire ~20, lecture ~12, écoute ~14, de A1 à C1. Les items A1 et A2 indiquent l'unité qu'ils valident (`unit: 'it-a1-articles'`), pour la dispense unité par unité. Questions de compréhension dans la langue cible, explications en français.

## 7. Programme

### Italien

| Niveau | Unités (`id` · titre · contenu) |
|---|---|
| A1 | `it-a1-hello` · Premiers mots · saluer, se présenter, *essere*, pronoms sujets, prononciation (c/g, ch/gh, gli, gn, doubles) |
| | `it-a1-nouns` · Noms et articles indéfinis · genre et nombre (-o/-a/-e, -i/-e), *un, uno, una, un'* |
| | `it-a1-articles` · Articles définis · *il, lo, la, l', i, gli, le*, *c'è / ci sono* |
| | `it-a1-avere` · Avoir et décrire · *avere*, âge, accord des adjectifs, couleurs, *molto* |
| | `it-a1-present-are` · Présent en -are · conjugaison, négation *non*, questions, mots interrogatifs |
| | `it-a1-present-ere-ire` · Présent en -ere et -ire · -isc-, *fare, andare, venire, volere, potere, dovere* |
| | `it-a1-time` · Nombres et temps · nombres, heure, jours, mois, prépositions *a, in, di, da* |
| | `it-a1-daily` · Ma journée · verbes pronominaux (*mi chiamo, mi alzo*), *piacere*, fréquence |
| A2 | `it-a2-prepositions` · Prépositions articulées · *al, nel, dal, sul, del*, lieux et déplacements |
| | `it-a2-possessives` · Possessifs et démonstratifs · *il mio / mia madre*, *questo / quello* |
| | `it-a2-passato-avere` · Passato prossimo (1) · avec *avere*, participes réguliers et irréguliers |
| | `it-a2-passato-essere` · Passato prossimo (2) · avec *essere*, accord du participe, pronominaux |
| | `it-a2-imperfetto` · Imparfait · habitudes, descriptions, contraste avec le passato prossimo |
| | `it-a2-pronouns` · Pronoms compléments · *lo, la, li, le, gli, le*, *ne*, *ci* |
| | `it-a2-future` · Futur et modaux · *futuro semplice*, *stare per*, *stare* + gérondif |
| | `it-a2-compare` · Comparer et conseiller · comparatifs, superlatifs, *migliore*, impératif (*tu, voi, Lei*) |
| B1 | `it-b1-condizionale` · Conditionnel présent · politesse, souhaits, conseils |
| | `it-b1-congiuntivo` · Subjonctif présent · *penso che, voglio che, è importante che* |
| | `it-b1-pronomi-combinati` · Pronoms combinés · *me lo, glielo, ce ne*, place avec infinitif et impératif |
| | `it-b1-relative` · Relatives · *che, cui, il quale, chi* |
| | `it-b1-racconto` · Raconter · *trapassato prossimo*, *passato remoto* (reconnaissance) |
| | `it-b1-impersonale` · Impersonnel et passif · *si* impersonnel et passivant, passif *essere / venire* |
| | `it-b1-ipotesi` · Hypothèses · période hypothétique réelle et possible (*se* + subj. imparfait + conditionnel) |
| | `it-b1-discorso` · Relier et rapporter · connecteurs (*perché, quindi, però, mentre, anche se*), discours rapporté au présent |
| B2 | `it-b2-congiuntivo` · Subjonctif (2) · passé, imparfait, plus-que-parfait, concordance des temps |
| | `it-b2-ipotesi` · Irréel du passé · période hypothétique irréelle, hypothèses mixtes |
| | `it-b2-condizionale-passato` · Conditionnel passé · futur dans le passé, regret, information non confirmée |
| | `it-b2-indiretto` · Discours indirect · discours rapporté au passé, concordance |
| | `it-b2-passivo` · Passif avancé · *venire / andare* + participe, *si* passivant |
| | `it-b2-forme-implicite` · Formes implicites · gérondif, participe, infinitif passé |
| | `it-b2-connettivi` · Concession et condition · *sebbene, benché, purché, a meno che* + subjonctif |
| | `it-b2-lessico` · Verbes idiomatiques · *andarsene, farcela, cavarsela, metterci*, suffixes (*-ino, -one, -accio*) |
| C1 | `it-c1-congiuntivo` · Subjonctif avancé · relatives, superlatifs, *chiunque, qualunque* |
| | `it-c1-futuro` · Supposer · futur antérieur et futur de probabilité, concordance complète |
| | `it-c1-registro` · Registre formel · *Lei*, lettres, langue administrative |
| | `it-c1-passato-remoto` · Passato remoto · récit écrit, littérature |
| | `it-c1-coesione` · Cohésion · *pertanto, tuttavia, ciononostante, infatti*, nominalisation |
| | `it-c1-espressioni` · Expressions idiomatiques · locutions courantes |
| | `it-c1-argomentare` · Argumenter · nuancer, *magari, semmai, qualora* |
| | `it-c1-enfasi` · Mise en relief · dislocations, *è lui che*, ordre marqué |
| C2 | `it-c2-sfumature` · Nuances modales · futur et conditionnel épistémiques, atténuation |
| | `it-c2-letterario` · Langue littéraire · *trapassato remoto*, style soutenu |
| | `it-c2-idiomi` · Idiomes et proverbes |
| | `it-c2-giornalistico` · Langue des médias · titres, style nominal |
| | `it-c2-accademico` · Langue académique · argumentation écrite |
| | `it-c2-parlato` · Italien parlé · *allora, cioè, insomma, mica*, marqueurs du discours, variétés régionales (reconnaissance) |
| | `it-c2-retorica` · Rhétorique · figures, ironie, sous-entendus |
| | `it-c2-precisione` · Précision lexicale · faux amis, paronymes |

### Espagnol (Espagne)

| Niveau | Unités (`id` · titre · contenu) |
|---|---|
| A1 | `es-a1-hello` · Premiers mots · saluer, se présenter, *ser*, pronoms sujets, prononciation (*j, g, ll, ñ, c/z, r/rr*) |
| | `es-a1-nouns` · Noms et articles indéfinis · genre et nombre, *un, una, unos, unas* |
| | `es-a1-articles` · Articles définis · *el, la, los, las*, *hay* |
| | `es-a1-tener` · Avoir et décrire · *tener*, âge, accord des adjectifs, couleurs, *muy / mucho* |
| | `es-a1-present-ar` · Présent en -ar · conjugaison, négation, questions, mots interrogatifs |
| | `es-a1-present-er-ir` · Présent en -er et -ir · diphtongues (*e > ie, o > ue*), *ir, hacer, poder, querer* |
| | `es-a1-time` · Nombres et temps · nombres, heure, jours, mois, prépositions *a, en, de* |
| | `es-a1-daily` · Ma journée · verbes pronominaux (*me llamo, me levanto*), *gustar*, fréquence |
| A2 | `es-a2-ser-estar` · Ser ou estar · identité, état, lieu, *hay / está* |
| | `es-a2-possessives` · Possessifs et démonstratifs · *mi / mío*, *este, ese, aquel* |
| | `es-a2-perfecto` · Pretérito perfecto · *he comido*, participes irréguliers, *ya / todavía no* |
| | `es-a2-indefinido` · Pretérito indefinido · réguliers et irréguliers (*fui, hice, tuve*) |
| | `es-a2-imperfecto` · Imparfait · habitudes, descriptions, contraste avec l'indefinido |
| | `es-a2-pronouns` · Pronoms compléments · *lo, la, le*, *se lo*, place des pronoms |
| | `es-a2-future` · Futur et obligation · *ir a* + infinitif, futur simple, *tener que, hay que*, *estar* + gérondif |
| | `es-a2-compare` · Comparer et conseiller · comparatifs, superlatifs, impératif affirmatif (*tú, usted, vosotros*) |
| B1 | `es-b1-condicional` · Conditionnel · politesse, souhaits, conseils |
| | `es-b1-subjuntivo` · Subjonctif présent · *quiero que, es importante que, ojalá, cuando* + subj. |
| | `es-b1-imperativo` · Impératif négatif · *no hagas*, place des pronoms |
| | `es-b1-relativos` · Relatives · *que, quien, donde, lo que, el que* |
| | `es-b1-relato` · Raconter · plus-que-parfait, enchaîner les temps du passé |
| | `es-b1-por-para` · Por ou para · emplois, prépositions courantes |
| | `es-b1-hipotesis` · Hypothèses · *si* + présent, *si* + subj. imparfait + conditionnel |
| | `es-b1-conectores` · Relier et rapporter · connecteurs, discours rapporté au présent |
| B2 | `es-b2-subjuntivo` · Subjonctif (2) · imparfait et passé, concordance des temps |
| | `es-b2-hipotesis` · Irréel du passé · *si hubiera…, habría…*, hypothèses mixtes |
| | `es-b2-temporales` · Subordonnées · subjonctif dans les relatives et temporelles (*cuando llegues, el que quieras*) |
| | `es-b2-estilo-indirecto` · Discours indirect · au passé, concordance |
| | `es-b2-pasiva` · Passif et impersonnel · *ser* + participe, passive réfléchie, *se* impersonnel |
| | `es-b2-perifrasis` · Périphrases verbales · *llevar* + gérondif, *acabar de, volver a, dejar de, ponerse a* |
| | `es-b2-concesivas` · Concession et condition · *aunque* + ind./subj., *a pesar de que, con tal de que, a no ser que* |
| | `es-b2-cambio` · Verbes de changement · *ponerse, volverse, hacerse, quedarse*, suffixes |
| C1 | `es-c1-subjuntivo` · Subjonctif avancé · valeurs fines, *quienquiera, cualquiera* |
| | `es-c1-probabilidad` · Supposer · futur et conditionnel de probabilité, futur antérieur |
| | `es-c1-registro` · Registre formel · *usted*, lettres, langue administrative |
| | `es-c1-coherencia` · Cohésion · *no obstante, por consiguiente, en cambio*, nominalisation |
| | `es-c1-expresiones` · Expressions idiomatiques · locutions courantes |
| | `es-c1-argumentar` · Argumenter · nuancer, concéder, réfuter |
| | `es-c1-enfasis` · Mise en relief · *lo* + adjectif, *es… quien / donde*, dislocations |
| | `es-c1-oraciones` · Phrase complexe · participe absolu, gérondif, infinitif composé |
| C2 | `es-c2-matices` · Nuances modales · atténuation, valeurs épistémiques |
| | `es-c2-literario` · Langue littéraire · style soutenu, temps littéraires |
| | `es-c2-modismos` · Idiomes et proverbes |
| | `es-c2-periodistico` · Langue des médias · titres, style nominal |
| | `es-c2-academico` · Langue académique · argumentation écrite |
| | `es-c2-coloquial` · Espagnol parlé · *vale, o sea, pues, venga*, marqueurs du discours, variétés (reconnaissance de l'espagnol d'Amérique) |
| | `es-c2-retorica` · Rhétorique · figures, ironie, sous-entendus |
| | `es-c2-precision` · Précision lexicale · faux amis, paronymes |

## 8. Vérifier

```bash
npx tsx tools/validate-content.ts it
npx tsx tools/validate-content.ts es
```
Aucune erreur bloquante ; les avertissements se relisent.
