# Cadence — Design et expérience (v0.4)

> Objectif : donner **envie d'apprendre** (esprit Duolingo, Memrise, Speakly) sans rien sacrifier de la rigueur
> pédagogique décrite dans [PEDAGOGY.md](PEDAGOGY.md). Le moteur (`src/core`) n'a pas changé : seule la couche
> d'expérience a été refaite.

## 1. Principes

| Principe | Traduction concrète |
|---|---|
| Un compagnon, pas un logiciel | **Coco**, l'oiseau mélomane (`src/ui/Mascot.tsx`), parle à l'apprenant à chaque écran clé, avec 6 humeurs : `idle`, `happy`, `cheer`, `sad`, `think`, `wow`. |
| Chaque réponse est un moment | Son synthétisé (`src/ui/sfx.ts`, aucun fichier audio), panneau de feedback coloré, phrases d'encouragement variées, combo de bonnes réponses d'affilée. |
| Une progression visible | Anneau d'objectif, quêtes du jour, calendrier de la semaine, chemin sinueux du parcours, badges. |
| Personnel | Prénom, **accord en genre** de tous les textes français, motivation choisie à l'inscription, voix choisie. |
| Jamais punitif | Pas de vies ni de pénalités : une erreur « reviendra plus loin, sous une autre forme ». |
| Honnête | Les indicateurs de maîtrise et de mémoire restent ceux du moteur ; la gamification est un habillage. |

## 2. Design system (`src/styles/global.css`)

- **Police** : Nunito Variable, sous-ensemble latin embarqué (hors ligne, environ 39 Ko).
- **Couleurs** (tokens `:root`, mode sombre complet) : `--primary` violet, `--success` menthe, `--sun` (XP, quêtes),
  `--flame` (série), `--sky` (audio, sélection), `--pink`, `--teal`, `--danger`. Chaque teinte a sa variante `-dark` (ombre 3D) et `-soft` (fond).
- **Relief** : boutons, options, pastilles et cartes ont une bordure basse de 4 px qui s'écrase au toucher.
- **Tons utilitaires** : `.tone-primary|success|sun|sky|pink|teal|danger|flame` fixent `--tile`, `--tile-soft`, `--tile-dark`.
- **Unités** : une couleur par unité (`src/ui/units.ts`), réutilisée par la bannière, les pastilles du parcours, l'intro de leçon et la carte « Continuer ».
- **Icônes** : SVG maison (`src/ui/Icons.tsx`), colorées par `currentColor`. Plus aucun emoji dans l'interface.
- **Accessibilité** : `prefers-reduced-motion` coupe les animations et les confettis ; rôles `progressbar` et `status` ; libellés `aria-label` sur les boutons-icônes.

## 3. Genre

- Réglage `gender: 'f' | 'm' | 'n'` (Femme, Homme, Je préfère ne pas préciser), demandé à l'inscription et modifiable dans le profil.
- **Contenu** : écrire les formes variables entre accolades : `'Je suis {prêt|prête}.'`, avec une 3ᵉ forme facultative
  pour le neutre : `'{Prêt|Prête|Prêt·e}'`. Sans 3ᵉ forme, le neutre est déduit : `occupé·e`, `heureux / heureuse`.
- **Affichage** : `genderizeDeep()` (`src/core/gender.ts`) résout l'exercice avant l'affichage. La correction utilise
  l'exercice d'origine, et les listes `accepted` gardent **les deux** formes : un accord correct n'est jamais refusé.
- **Interface** : `useProfileText()` (`src/ui/profile.ts`) fournit `g('prêt', 'prête')` et `t('{prêt|prête}')`.
- À accorder dans le futur contenu : les phrases où l'apprenant parle de lui-même (« je suis allé », « fatigué », « désolé », un métier).

## 4. Voix

- **Voix de Cadence (par défaut)** : audio pré-généré avec Kokoro (licence Apache 2.0), deux voix américaines naturelles,
  **Lily** (`af_heart`) et **Michael** (`am_michael`). Identiques sur tous les téléphones, sans dépendre des voix installées.
- Recensement des textes lus : `src/speech/corpus.ts` (leçons, défis, test de niveau, vocabulaire, verbes) ; un test vérifie
  qu'aucun texte lu n'est oublié. Clé de fichier : hachage FNV-1a du texte normalisé (`src/speech/audioKey.ts`).
- Lecture (`src/speech/audio.ts`) : un seul élément audio débloqué au premier toucher (contrainte iOS), débit réglable sans
  changer la hauteur de la voix, fichiers mis en cache par le service worker à la première écoute ou d'un coup depuis le profil.
- **Secours** : un texte sans fichier, ou le réglage « voix du téléphone », passe par la synthèse de l'appareil
  (`src/speech/voices.ts` : voix gadget écartées, qualité et identité lues dans le `voiceURI`, indispensable sur iPhone).
- Regénérer après un ajout de contenu : `npm run voices` (voir README).

## 5. Écrans

| Écran | Contenu |
|---|---|
| Onboarding | Coco se présente ; prénom ; genre ; motivation ; installation (iOS) ; niveau ; objectif ; voix ; blocage. |
| Accueil | Série et XP du jour, message de Coco, anneau d'objectif, carte « Continuer » (couleur de l'unité), 3 quêtes du jour, semaine, révisions, points à travailler, progression réelle. |
| Parcours | Chemin sinueux de pastilles 3D, une bannière colorée par unité, Coco à côté de la prochaine leçon. |
| Réviser | Séance du jour, vocabulaire, verbes irréguliers, points faibles, mes notions, mémoire globale. |
| Leçon | Intro aux couleurs de l'unité, consigne en grand, phrases à traduire dites par Coco, combo, feedback animé. |
| Fin de séance | Confettis, Coco qui saute, tuiles XP / précision / temps qui se remplissent, meilleure série. |
| Profil | Avatar, statistiques, 9 badges, réglages regroupés (à propos de toi, voix et sons, apprentissage, apparence, sauvegarde). |

## 6. Pistes suivantes (par impact estimé)

1. **Rappel quotidien** : notifications push de la PWA (iOS 16.4+), avec un message de Coco à l'heure choisie.
2. **Gel de série** : un joker par semaine, déjà prévu par la pédagogie (§ gamification sobre).
3. **Coffres de fin de quête** : petit bonus d'XP animé quand les 3 quêtes du jour sont faites.
4. **Dialogues à deux voix** : une voix féminine et une voix masculine pour les écoutes de passages (lot 3d).
5. **Illustrations de leçon** : une scène par unité (café, aéroport, bureau) pour ancrer le vocabulaire.
6. **Accorder le reste du contenu** au fil des nouvelles leçons (voir § 3).
7. **Découper le bundle** (chargement différé des leçons) quand le contenu B1 arrivera.
