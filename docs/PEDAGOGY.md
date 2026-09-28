# Cadence — Audit pédagogique et nouveau modèle (v0.3, à valider)

> Question directrice : **« Est-ce que cet utilisateur est réellement meilleur en anglais qu'il y a 30 jours ? »**
> Priorité : résultats d'apprentissage > pédagogie > maîtrise > pratique > gamification.

---

## 1. Architecture pédagogique actuelle

```
Parcours (PATH) = liste ordonnée de 15 leçons A2, regroupées en 10 unités.
Leçon = explication (sections) + ~15-20 exercices d'une même notion.
Exercice = { type, cefr, skill (1 seule), kcIds, difficulty, prompt, réponse(s), explication }.
Moteur :
  - grading.ts / speaking.ts : correction déterministe (normalisation, fautes de frappe, oral par intelligibilité)
  - mastery.ts : 1 θ (Elo) par notion, tous types d'exercices confondus
  - srs.ts : FSRS en jours, sur cartes « kc », « vocab », « irregular »
  - session.ts : séance = révisions dues (50 %) + points faibles (25 %) + nouveaux mots/verbes
  - generators.ts : exercices générés pour 224 mots et 90 verbes, avec une échelle
    reconnaissance → écoute → rappel → oral
Données : Dexie v2 (attempts, srsCards, kcMastery, lessonProgress, dailyActivity, settings).
```

## 2. Audit

### 2.1 Ce qui est déjà bon (à conserver)
| Élément | Pourquoi c'est bon |
|---|---|
| Moteur pur TypeScript (`src/core`), 24 tests | Déterministe, testable, transparent, conforme au principe « pas de ML opaque ». |
| Journal `attempts` complet (réponse, durée, score, notions) | Permet de **recalculer** n'importe quel nouveau modèle a posteriori (migration sans perte). |
| FSRS planifié en jours, note déduite de la réponse et du temps | Base solide pour la **rétention**. |
| Correction orale par intelligibilité, sans pénaliser l'accent | Conforme à l'objectif. |
| Générateurs vocabulaire/verbes avec progression de format | Embryon de l'échelle reconnaissance → production. |
| Exemples contextualisés (cloze à partir de la phrase d'exemple) | Va dans le sens des cartes contextualisées. |
| DSL de contenu + test d'intégrité (chaque réponse de référence est acceptée) | Base du futur validateur de contenu. |
| Temps actif (visible + interaction < 60 s), série, blocage Raccourcis, sauvegarde | Indépendants de la pédagogie : aucune raison d'y toucher. |

### 2.2 Problèmes constatés (par gravité)

**Bugs et incohérences pédagogiques**
1. **Le repêchage est identique à l'essai raté.** Un exercice raté revient en fin de leçon avec le même contenu et le **même ordre** d'options : le mélange est calculé à partir de l'identifiant de l'exercice (`seededShuffle(…, exercise.id)`). On réussit alors en se souvenant de la position de la bonne réponse, pas de la règle. C'est ce que tu as remarqué.
2. **Faux « points faibles ».** La maîtrise est multipliée par `min(1, tentatives/6)`, si bien que 3 bonnes réponses d'affilée donnent une maîtrise de 0,33, ce qui déclenche l'étiquette « faible » (vérifié numériquement). Le manque de preuves est confondu avec la faiblesse.
3. **Une leçon est « terminée » quel que soit le score.** Même avec 14 % de réussite, le parcours avance. Il n'existe aucune porte de maîtrise.
4. **Les révisions et les points faibles réutilisent exactement les mêmes exercices** que la leçon (`orderedForKc` repasse même en premier les exercices ratés). L'utilisateur finit par mémoriser des réponses au lieu de consolider une règle.
5. **Reconnaissance = maîtrise.** Un QCM réussi pèse autant qu'une phrase produite. 10 QCM réussis peuvent donc afficher « maîtrisé ».
6. **Un mot est déclaré « appris »** dès que sa carte FSRS est stable, même s'il n'a jamais été produit. Il n'y a pas de distinction entre vocabulaire passif et vocabulaire actif.
7. **Le tableau de bord affiche des moyennes de score comme des compétences.** « Grammar 71 % » mélange les QCM et les repêchages : cet indicateur est trompeur.
8. **Les réponses libres à l'oral** ne sont vérifiées que sur la longueur et les mots-clés. C'est honnête sans IA, mais le système leur donne le même poids qu'une vraie preuve de production.

**Ce qui manque**
9. Des objectifs « Can Do », des prérequis entre notions, des états d'unité, des checkpoints et des examens de niveau.
10. Une taxonomie des erreurs : les réponses sont stockées mais jamais analysées.
11. La remédiation : le « travail ciblé » se contente de rejouer les mêmes exercices.
12. La rétention comme mesure distincte de la maîtrise (FSRS la calcule, mais elle n'est jamais montrée).
13. Un **récapitulatif de fin de séance** qui fait revenir, sans aide, ce qu'on a vu dans la journée.
14. Le test de placement (le bouton est désactivé).
15. La compétence Reading n'a aucun contenu. Il n'existe pas non plus d'écoute longue, d'écrit libre, d'interaction, de médiation ni de parcours de prononciation.
16. Les niveaux intermédiaires (A2+, B1+, B2+).
17. Des familles d'items : chaque notion n'a que les 10 à 20 exercices de sa leçon, sans variantes.
18. Une seule compétence par exercice (par exemple `translate` compté en « writing »), et aucune notion de niveau de preuve.

### 2.3 À refactoriser (sans tout réécrire)
- `mastery.ts` → modèle **par niveau de preuve** (voir §5), rétention séparée.
- `session.ts` → composition par **objectifs pédagogiques** (révision, remédiation, nouveau, écoute, production, récap) et proportions adaptatives.
- `content/types.ts` → nouveaux champs (preuve, rôle, erreurs, prérequis), sans casser le contenu existant (valeurs déduites par défaut).
- `ExerciseRunner` → repêchage **varié**, question de confiance optionnelle, étape « récap ».
- Tests de contenu → **validateur** `npm run validate-content`.

---

## 3. Modèle de niveaux

8 bandes sur une échelle logit commune (θ) partagée par les apprenants et les items :

| Bande | θ min | Exemple de descripteur global |
|---|---|---|
| A2 | −1,5 | Échanges simples et directs sur des sujets familiers. |
| A2+ | −0,8 | Idem, avec plus d'aisance ; courts récits au passé. |
| B1 | −0,1 | Se débrouiller au quotidien, raconter, donner son avis simplement. |
| B1+ | 0,6 | Discussions suivies, textes factuels, explications. |
| B2 | 1,3 | Argumenter, interagir spontanément, textes complexes. |
| B2+ | 1,9 | Nuance, registre, discours long et structuré. |
| C1 | 2,5 | Expression fluide, implicite, usage professionnel exigeant. |
| C2 | 3,2 | Quasi natif : nuances fines, ironie, style. |

Chaque compétence reçoit **sa propre bande estimée** (grammaire, vocabulaire, lecture, écoute, écrit, oral, interaction), toujours affichée comme **« estimation »**, avec un indice de confiance, et jamais comme une certification CECRL.

---

## 4. Knowledge Components (KC)

```ts
interface KnowledgeComponent {
  id: string;                 // 'grammar.present_simple.third_person_s'
  label: string;              // FR
  domain: 'grammar' | 'vocabulary' | 'function' | 'pronunciation' | 'listening'
        | 'reading' | 'speaking' | 'writing' | 'interaction' | 'mediation';
  band: CefrBand;             // bande où elle est introduite
  prerequisites: string[];    // KC requises (graphe orienté, sans cycle : testé)
  related: string[];          // liens transversaux (grammaire ↔ vocabulaire ↔ fonction)
  errorTags: ErrorTag[];      // erreurs typiques rattachées
  explanationRef?: string;    // section de cours réutilisée en remédiation
  masteryThreshold?: number;  // défaut 0,8
}
```
- Registre central `src/content/kcs.ts` (remplace les simples libellés). Tout `kcId` d'exercice doit exister : le validateur le vérifie.
- Les domaines « fonction » (`function.ask_for_repetition`, `function.order_food`) et « compétence » (`listening.main_idea`, `reading.inference`) sont des KC comme les autres. Un exercice d'écoute sur le past simple travaille donc à la fois `grammar.past_simple.*` et `listening.specific_information`.

---

## 5. Modèle de maîtrise

### 5.1 Niveaux de preuve
Chaque exercice produit une preuve d'un niveau donné, déduit de son type (et surchargeable dans le contenu) :

| Preuve | Exercices | Poids max |
|---|---|---|
| **Recognition** | QCM, QCM audio | faible |
| **Recall** | texte à trous, réponse tapée, dictée, remise en ordre | moyen |
| **Controlled production** | traduction, oral « dis-le en anglais », transformation | élevé |
| **Free production** | réponse libre orale ou écrite | élevé (pondéré par la fiabilité de la correction) |
| **Transfer** | tâche réelle dans un contexte nouveau (récit de 60 s, e-mail, jeu de rôle) | le plus élevé |

### 5.2 Calcul
- Pour chaque couple (KC, niveau de preuve) : θ Elo et nombre d'observations (reprend `updateKc`).
- **Maîtrise globale d'une KC** = moyenne pondérée des niveaux, avec des **plafonds** :
  - sans preuve de production : au plus **60 %** ;
  - sans production libre ni transfert : au plus **80 %** ;
  - le statut « maîtrisée » exige au moins 2 niveaux de production et une réussite **sans aide** à au moins 2 jours d'intervalle.
- **Confiance statistique** : on affiche « pas assez de données » au lieu d'un faux 33 %. Le manque de preuves n'est **plus** confondu avec la faiblesse (correction du bug n° 2).
- La vitesse de réponse, les indices utilisés et la confiance déclarée sont des signaux secondaires : ils modulent le pas d'apprentissage, sans jamais pénaliser seuls.

### 5.3 États d'une KC
`non commencée → en apprentissage → en pratique → en développement → maîtrisée`, avec un drapeau **« à réviser »** quand la rétention baisse.

### 5.4 Rétention (séparée)
- Rétention = probabilité de rappel FSRS aujourd'hui, `R = (1 + t / (9·S))⁻¹`, où t est le nombre de jours écoulés et S la stabilité.
- Exemple de message : « Tu maîtrises le past simple (maîtrise 88 %) mais tu commences à l'oublier (rétention 61 %) → il est prévu dans ta séance. »
- Les cartes FSRS couvrent les notions, les mots, les verbes, les expressions, les collocations, les phrasal verbs, les phrases utiles et les **erreurs récurrentes** : une erreur persistante devient elle-même une carte.

### 5.5 Vocabulaire passif et actif
Un mot passe par 5 paliers : reconnu → compris en contexte → rappelé → utilisé dans une phrase → utilisé à l'oral. « Mots appris » ne compte que les mots **actifs** (au moins le palier « utilisé dans une phrase »). Les mots passifs sont affichés à part.

---

## 6. Erreurs et remédiation

### 6.1 Taxonomie
`third_person_s`, `missing_auxiliary`, `auxiliary_with_base`, `wrong_tense`, `irregular_form`, `regularized_irregular` (« goed »), `article_missing`, `article_wrong`, `wrong_preposition`, `word_order`, `plural_form`, `countable_uncountable`, `modal_to` (« must to »), `false_friend`, `wrong_collocation`, `vocabulary_missing`, `spelling`, `listening_misunderstanding`, `pronunciation_intelligibility`, `insufficient_answer`.

### 6.2 Détection (déterministe)
1. **Détecteurs génériques** qui comparent la réponse à la réponse attendue, mot par mot. Exemples : « work » au lieu de « works » après he/she → `third_person_s` ; même ensemble de mots dans un autre ordre → `word_order` ; « goed/taked » → `regularized_irregular` ; préposition remplacée par une autre de la liste in/on/at/to/for → `wrong_preposition`.
2. **Motifs propres à l'exercice** (`errorPatterns` dans le contenu), pour les pièges prévus :
   `{ match: 'doesn’t works', tag: 'auxiliary_with_base', feedback: 'Après doesn’t, pas de -s…' }`.
3. Chaque erreur est enregistrée dans `errorEvents`. Une **difficulté persistante** correspond à au moins 3 occurrences d'un même tag sur une même KC en 14 jours. Elle s'affiche sur l'accueil et déclenche une remédiation.

### 6.3 Séquence de remédiation
1. Explication courte (la section de cours de la KC).
2. Paire contrastée (ex. *He work* ✗ / *He works* ✓, avec audio).
3. Exercice facile (reconnaissance).
4. Exercice intermédiaire (rappel).
5. Exercice sans aide (production).
6. Écoute.
7. Production orale.
8. Mini-test de 3 items **jamais vus**. La KC est réévaluée : si elle est réussie, la difficulté persistante est levée ; sinon, une nouvelle séquence est prévue 2 jours plus tard.

### 6.4 Variété des items (correction du bug n° 1)
- **Familles d'items** : chaque exercice appartient à une famille (`familyId`) de variantes équivalentes (autre sujet, autre verbe, autre contexte). Pour les notions à forte fréquence (3ᵉ personne, auxiliaires, irréguliers, prépositions de temps), des **gabarits** génèrent des variantes : phrase-cadre × sujets × verbes.
- **Repêchage** : après une erreur, la notion revient **au moins 3 items plus tard**, sous la forme d'une **variante** de la même famille. Si aucune variante n'existe, on change de format (le QCM devient une réponse tapée) et on mélange à nouveau les options avec une graine qui change à chaque passage.
- **Rôle** des items : `practice` (leçons, révisions) ou `assessment` (checkpoints, examens, mini-tests). Les items d'évaluation ne sont **jamais** vus en pratique : c'est la seule façon de mesurer le transfert.

---

## 7. Curriculum

### 7.1 Unité
```ts
interface Unit {
  id; band; title;
  canDo: string[];                 // « Je peux raconter ce que j'ai fait hier. »
  kcIds: string[];                 // notions visées
  prerequisites: string[];         // KC ou unités requises
  lessons: string[];               // séquence d'acquisition
  realWorldTask: string;           // tâche finale de transfert (id d'exercice)
  checkpointId?: string;
}
```
Un **graphe de dépendances** relie les unités : Present Simple → Present Continuous → Past Simple → Present Perfect → Past Perfect → Futurs → Conditionnels → Mixtes → Structures avancées. Une notion revient à plusieurs niveaux (le Present Perfect en B1, puis en B1+ pour la durée, puis en B2 dans le contraste avec le continuous).

**États d'unité** : `LOCKED → LEARNING → PRACTICING → DEVELOPING → MASTERED`, et `REVIEW` quand la rétention baisse. Les prérequis ne bloquent jamais durement : une unité verrouillée peut s'ouvrir avec un avertissement.

**Porte de maîtrise** : elle combine la performance récente et historique, au moins une preuve de production et une de rétention (révision réussie J+2 ou plus), l'absence d'erreur persistante et la réussite de la tâche réelle.

### 7.2 Leçon
Une leçon suit le cycle d'acquisition :
| Phase | Contenu |
|---|---|
| 1. Exposure | Court dialogue ou texte (audio) contenant la notion en situation. |
| 2. Understanding | Explication + une question d'observation (« Qu'ont en commun *works*, *watches*, *studies* ? »). |
| 3. Controlled practice | Reconnaissance puis rappel, avec aide. |
| 4. Guided production | Traduction, transformation, oral guidé. |
| 5. Free production | Réponse libre orale ou écrite. |
| 6. Exit ticket | 3 à 4 items **d'évaluation**, sans aide et entrelacés avec les notions précédentes. |

Résultat de la leçon : « apprise » si l'exit ticket atteint au moins 70 %, sinon « à consolider » : la leçon compte comme vue et une remédiation est programmée. Plus jamais « terminée » à 14 %.

### 7.3 Checkpoint (toutes les 3 ou 4 unités)
Il contient des items d'évaluation pour chaque compétence (grammaire, vocabulaire, écoute, lecture, oral) et une mini-tâche de transfert. Résultat par compétence : ✓ / ⚠ / ✕, puis un **plan de remédiation** ajouté aux séances des jours suivants. Il n'est pas bloquant.

### 7.4 Examen de niveau (fin de A2, B1…)
- Ses items sont tous nouveaux (pool `assessment`), et ses **tâches de transfert** sont obligatoires : récit oral de 60 s, message écrit, texte à lire, audio long.
- Résultat : **profil estimé** par compétence (par exemple « Grammaire B1, Écoute A2+ ») et priorités.
- L'examen se repasse au bout de 14 jours au minimum, avec d'autres items.

### 7.5 Test de placement
- Test adaptatif par compétence (grammaire, vocabulaire, lecture, écoute), plus un court écrit et un oral facultatif.
- Pour chaque section, les items d'évaluation sont choisis près du θ estimé. Arrêt quand l'erreur standard descend sous 0,45 ou après 10 items.
- Résultat : un profil multidimensionnel (« Grammar B1 · Vocabulary B1 · Reading B1+ · Listening A2+ · Speaking A2+ »), une **recommandation de départ**, et la **liste des prérequis manquants**, c'est-à-dire les KC ratées sous le niveau recommandé, qui deviennent des remédiations.
- On peut toujours choisir de démarrer à A2.

---

## 8. Séance quotidienne

### 8.1 Trois formats
| Format | Contenu | Libellé |
|---|---|---|
| **Quick 5** | 1 min révision · 1 min grammaire · 1 min vocabulaire · 1 min écoute · 1 min oral | « Minimum atteint » |
| **Recommandé 15** | voir 8.2 | « Recommandé » |
| **Approfondi 30** | idem + lecture ou écoute longue + tâche réelle | « Pratique approfondie » |

L'objectif paramétré reste le minimum de régularité, celui qui débloque les apps. L'accueil indique clairement que 5 minutes ne suffisent pas pour progresser de façon optimale.

### 8.2 Composition adaptative (base)
| Bloc | Part | Ajustement |
|---|---|---|
| Répétition espacée | 30 % | augmente si beaucoup de cartes sont dues ou si la rétention baisse |
| Points faibles / remédiation | 20 % | augmente en cas de difficulté persistante |
| Nouvel apprentissage | 30 % | baisse si la charge de révision est élevée |
| Écoute | 10 % | augmente si l'écoute est la compétence la plus faible |
| Production (oral/écrit) | 10 % | augmente si l'oral ou l'écrit est la compétence la plus faible |
| **Récap du jour** | toujours à la fin | 3 à 6 items en **rappel ou production** sur ce qui a été vu aujourd'hui et hier (mots, verbes, structures), sans aide et dans un autre format. C'est le « revoir en fin de série » que tu demandes. |

Règles : **entrelacement** (jamais plus de 2 items consécutifs sur la même notion hors phase d'acquisition, notions voisines mélangées pour obliger à choisir la bonne structure) ; difficulté visée autour de 70 à 85 % de réussite attendue.

### 8.3 Confiance (facultatif, léger)
Après certains items de rappel ou de production (environ 1 sur 4), on demande : « Sûr de toi ? 1 J'ai deviné · 2 Pas sûr · 3 Plutôt sûr · 4 Certain ». Une réponse juste mais devinée compte comme *Hard* pour FSRS et fait peu progresser la maîtrise. Une réponse juste et certaine compte comme *Good* ou *Easy*.

---

## 9. Compétences et contenu

- **Reading** : textes **originaux** au format de la vie réelle (message, annonce, e-mail, menu, brève d'actualité, article de blog, notice, offre d'emploi). On ne copie pas d'articles de presse réels, pour des raisons de droits d'auteur. On en reproduit en revanche le style, la longueur et le vocabulaire, par bande. Questions : idée principale, détails, inférence, vocabulaire en contexte, intention de l'auteur, résumé. Des liens vers des sources réelles adaptées (News in Levels, BBC Learning English) peuvent être ajoutés comme lecture externe.
- **Listening** : passages et dialogues de plusieurs phrases, lus par la synthèse vocale avec plusieurs voix et accents. Débit progressif. Exercices : idée principale, information précise, dictée, cloze, intention du locuteur, prise de notes.
- **Speaking** : shadowing, oral guidé, réponse libre, jeu de rôle (enchaînement de répliques), opinion, argumentation. L'aide diminue avec le niveau. Le profil oral affiche plusieurs dimensions : intelligibilité, fluidité (mots/min, pauses), longueur, étendue lexicale, précision (si mesurable). La conversation avec une IA reste optionnelle.
- **Prononciation** : paires minimales (ship/sheep, think/sink), accent de mot, accent de phrase, formes faibles, *connected speech*. Objectif : l'intelligibilité.
- **Writing** : messages, puis e-mails, puis argumentation, puis essais. Sans IA, l'évaluation automatique se limite à la tâche, la longueur, la présence des structures et connecteurs attendus, et une autocorrection guidée avec une liste de contrôle. LanguageTool reste une option (le texte est alors envoyé à leur serveur).
- **Interaction** et **médiation** : répliques fonctionnelles (demander de répéter, clarifier, être d'accord ou non, négocier), puis dès B1 des tâches de médiation (lire une info en français et l'expliquer en anglais).
- **Vocabulaire** : des *chunks* et collocations en plus des mots isolés (*make a decision*, *take a break*), familles de mots, faux amis, registre.
- **Pas de faux contenu** : peu de leçons, mais soignées. Chaque exercice porte au moins une KC et un niveau de preuve ; le validateur refuse le reste.

---

## 10. Tableau de bord

```
Ton anglais (estimation)       Grammar B1 · Vocabulary A2+ · Reading — · Listening A2 · Speaking A2
Priorité actuelle              Écoute
Difficultés persistantes       3ᵉ personne du singulier (5 erreurs / 14 j)
À réviser                      Past simple irrégulier (rétention 58 %)
Mission du jour                Recommandé 15 min · Minimum 5 min ✓
Rétention globale              82 %
Croissance sur 30 jours        Grammar +1 bande · Listening +½
────────────────────────────────────────────────────────
Motivation (séparé)            🔥 série · XP · temps
```
**Language Growth** : sur 30 jours, variation pondérée des θ par compétence (production ×1,5, réception ×1), corrigée par la rétention moyenne et recalée sur les résultats de checkpoints et d'examens. Elle ne dépend **pas** de la moyenne des scores d'exercices.

---

## 11. Modifications techniques

### 11.1 Types (`src/content/types.ts`), rétrocompatibles
- `CefrBand = 'A2' | 'A2+' | 'B1' | 'B1+' | 'B2' | 'B2+' | 'C1' | 'C2'`
- `ExerciseBase` + `evidence?` (déduit du type si absent), `role?: 'practice' | 'assessment'`, `familyId?`, `support?: 'none' | 'hint' | 'full'`, `errorPatterns?`, `skills?: Skill[]` (plusieurs compétences), `reviewEligible?`.
- `Skill` + `'interaction' | 'pronunciation' | 'mediation'`.
- Nouveaux types d'exercices : `read` (texte + questions), `listen_passage`, `write`, `roleplay`, `minimal_pair`, `transform`.
- `Passage`, `KnowledgeComponent`, `Unit` (canDo, prerequisites, realWorldTask), `Lesson` (phases, exitTicket), `Checkpoint`, `LevelExam`, `CanDo`.

### 11.2 IndexedDB (Dexie v3)
| Store | Contenu |
|---|---|
| `kcEvidence` | `[kcId+evidence]` → θ, n, dernière date (remplace `kcMastery`, **recalculé depuis `attempts`** à la migration) |
| `errorEvents` | tag, kcId, exerciseId, date |
| `unitState` | état, dates, résultat de la porte de maîtrise |
| `assessments` | placement, checkpoints, examens (profil par compétence) |
| `skillSnapshots` | θ par compétence et par jour, pour la croissance sur 30 jours |
| `attempts` | + `evidence`, `confidence?`, `errorTags[]`, `familyId` |

### 11.3 Tests à ajouter
- Maîtrise : les plafonds par preuve ; 3 bonnes réponses ne donnent plus « faible » ; 10 QCM ne donnent jamais « maîtrisé ».
- Rétention : formule FSRS et message « maîtrisé mais oublié ».
- Taxonomie : chaque détecteur, avec des cas positifs et négatifs (*He work*, *goed*, *must to*, *in Monday*).
- Remédiation : la séquence contient les 8 étapes et le mini-test n'utilise que des items d'évaluation jamais vus.
- Repêchage : jamais le même item consécutivement ; une variante ou un changement de format ; un ordre d'options différent.
- Session : proportions adaptatives, entrelacement (au plus 2 items consécutifs sur une même KC), présence du récap.
- Placement : il converge vers le bon θ sur des apprenants simulés (A2, B1, B2).
- Validateur de contenu : doublons, réponses invalides, KC ou prérequis inexistants, cycle de prérequis, unité sans Can Do ni tâche réelle, leçon sans exit ticket, niveau d'un item incohérent avec sa KC, familles trop pauvres.

---

## 12. Ordre d'implémentation proposé

Chaque lot est livré, testé, déployé, et laisse une application utilisable.

| Lot | Contenu | Répond à |
|---|---|---|
| **3a** ✅ | Registre des KC + niveaux de preuve + nouvelle maîtrise + rétention (correction des bugs 2, 5, 6) · taxonomie d'erreurs + difficultés persistantes · **repêchage varié** (bug 1) · **récap de fin de séance** · entrelacement · validateur de contenu | tes remarques 1 et 3 |
| **3b** | Modèle de curriculum : unités Can Do, prérequis, états, exit tickets, porte de maîtrise · restructuration des 15 leçons A2 existantes · familles d'items pour les notions fréquentes · séquence de remédiation | |
| **3c** | **Test de placement** multidimensionnel + items d'évaluation A2 à B2 | ta remarque 2 |
| **3d** | **Module Lecture** : 20 à 30 textes de la vie courante (A2 à B1) + écoute de passages | ta remarque 4 |
| 3e | Séance adaptative complète (Quick 5, 15, 30) + nouveau tableau de bord + Language Growth | |
| 4 | Parcours prononciation, jeux de rôle, interaction | |
| 5 | Écrit structuré, médiation | |
| 6 | Checkpoints et examen A2 | |
| 7 | Contenu B1, puis B1+, B2… (branche pro dès B1+) | |
