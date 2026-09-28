# Cadence — Architecture v0.2 (PWA gratuite)

> Application personnelle d'apprentissage de l'anglais A2 → C2, sous forme de **PWA** (site web installé sur l'écran d'accueil de l'iPhone, plein écran, hors ligne), **100 % gratuite**.
> La v0.1 (app native Expo + Screen Time) est abandonnée pour l'instant : elle exigeait un compte Apple Developer payant (99 €/an). Elle reste possible plus tard, le moteur pédagogique étant réutilisable tel quel.

---

## 1. Ce qui change avec une PWA

| Besoin | v0.1 native | **v0.2 PWA (gratuite)** |
|---|---|---|
| Installation | EAS + compte Apple 99 €/an | Safari › Partager › « Sur l'écran d'accueil ». Icône, plein écran, hors ligne |
| Blocage d'apps | API Screen Time (Family Controls) | **Automatisations de l'app Raccourcis d'iOS** (officiel, gratuit), voir §4 |
| Données | SQLite + Supabase | **IndexedDB** (dans le téléphone) + export/import JSON. Synchro cloud gratuite en option plus tard |
| Voix (TTS) | Azure | **Voix iOS intégrées** (`speechSynthesis`) : en-US, en-GB, en-AU, en-IE, en-IN, en-ZA… gratuites et hors ligne |
| Reconnaissance vocale | Azure | `webkitSpeechRecognition` (Safari), sinon **dictée du clavier iOS** (toujours disponible, gratuite) |
| Correction de l'écrit | Claude | **LanguageTool** (API publique gratuite) + règles internes ; IA en option plus tard |
| Conversation IA | Claude | Phase ultérieure, en option : il n'existe pas de LLM de qualité gratuit sans limite (voir §6) |
| Coût | ~10 €/mois + 99 €/an | **0 €** |

---

## 2. Architecture

```
iPhone — Cadence (PWA installée)
├─ UI React (écrans, lecteur de leçon, dashboard, profil)
├─ core/        moteur pédagogique pur TypeScript (testé avec Vitest)
│    temps actif · objectif · série · correction · FSRS · maîtrise · sessions · placement
├─ content/     contenu structuré (niveaux → unités → leçons → exercices)
├─ db/          IndexedDB via Dexie (réglages, tentatives, progression, SRS)
├─ speech/      TTS iOS + reconnaissance vocale
└─ Service worker (hors ligne, mise à jour auto)

App Raccourcis iOS (configurée une fois par l'utilisateur)
├─ Raccourci « Cadence Valider »  ← lancé par l'app quand l'objectif est atteint
│     écrit Raccourcis/Cadence/AAAA-MM-JJ.txt
└─ Automatisation « Quand Instagram / TikTok / … est ouvert »
      → le fichier du jour existe ? sinon notification + retour à l'écran d'accueil

Hébergement statique gratuit : GitHub Pages ou Cloudflare Pages (HTTPS requis pour une PWA)
```

**Stack** : Vite + React 19 + TypeScript, React Router, Dexie (IndexedDB), vite-plugin-pwa (Workbox), ts-fsrs, Vitest. Pas de framework CSS : design tokens CSS (clair/sombre).

**Structure**
```
src/
  core/        logique pure + tests (*.test.ts)
  content/     types + données de contenu (a2/, b1/, …)
  db/          schéma Dexie + accès
  features/    onboarding, home, lesson, focus (blocage), profile
  ui/          composants génériques
  styles/      tokens.css, global.css
docs/
tools/         scripts (icônes, validation de contenu)
```

---

## 3. Données (IndexedDB)

Contenu (fichiers versionnés dans le code, facilement extensible à des milliers d'items) :
- `Lesson { id, cefr, unitId, title, kcIds, themeIds, explanation (sections structurées), exercises[] }`
- `Exercise { id, type, cefr, skill, themeIds, difficulty, kcIds, tense?, prompt, answer, explanation, vocab? }`
- `VocabEntry`, `IrregularVerb`, `Passage`, `SpeakingPrompt`, `WritingPrompt` (étapes suivantes)

Utilisateur (stores Dexie) :
| Store | Contenu |
|---|---|
| `settings` | objectif quotidien, niveau de départ, blocage activé, thème, onboarding fait |
| `dailyActivity` | `date` → secondes actives, objectif, heure d'atteinte, XP |
| `attempts` | journal de chaque réponse (exercice, notions, score, durée, tags d'erreur) : la base de la personnalisation |
| `lessonProgress` | statut, meilleur score, date |
| `srsCards` | état FSRS de chaque élément (étape 2) |
| `kcMastery` | maîtrise par notion (étape 2) |
| `skillEstimates` | niveau CECRL par compétence (étape 3) |

Stats globales d'exercices : calculées localement à partir de `attempts`.
Sauvegarde : export/import JSON depuis le Profil (à faire régulièrement tant qu'il n'y a pas de synchro cloud). Une PWA installée sur l'écran d'accueil n'est pas soumise à l'effacement automatique de Safari (7 jours), et l'app demande le stockage persistant.

---

## 4. Blocage d'applications : Raccourcis iOS

Comme Duolingo : à la première ouverture, l'app demande « Veux-tu te forcer à apprendre en bloquant chaque jour les apps de ton choix ? ». Si oui, un guide pas à pas t'accompagne dans la configuration (5 minutes, une seule fois). Le blocage est facultatif, et le Strict Mode est supprimé.

**Fonctionnement**
1. Tu fais ta session. Quand l'objectif est atteint : « ✅ Objectif atteint » → bouton **Débloquer mes apps** → lance le raccourci *Cadence Valider* (via `shortcuts://run-shortcut`), qui crée le fichier du jour.
2. Chaque fois que tu ouvres une app choisie, l'automatisation vérifie le fichier du jour. S'il n'existe pas : notification « 🔒 Fais d'abord ta session d'anglais » et retour à l'écran d'accueil.
3. **Minuit** : la date change, le fichier du jour n'existe plus, donc les apps sont de nouveau bloquées automatiquement. Aucun serveur, aucun réseau.

**Limites honnêtes**
- Ce n'est pas un vrai verrou Screen Time : l'app s'ouvre une fraction de seconde puis tu es renvoyé à l'accueil.
- Contournable volontairement : désactiver l'automatisation ou lancer *Cadence Valider* à la main. Mais le mécanisme d'engagement est le même que celui de Duolingo : une friction volontaire, que tu choisis.
- iOS n'autorise pas l'installation automatique de raccourcis depuis un site : il faut les créer à la main en suivant le guide intégré (captures textuelles pas à pas).
- Nécessite iOS 17+ pour que l'automatisation s'exécute sans confirmation.

---

## 5. Moteur pédagogique (inchangé sur le fond)

- **Progression** A2 → B1 → B2 → C1 → C2 : niveaux → unités → leçons → exercices, avec déblocage par maîtrise, checkpoints d'unités et possibilité de tester pour sauter une unité.
- **Test de placement adaptatif** (modèle de Rasch) : vocabulaire, grammaire, conjugaison, lecture, écoute, écrit court. Résultat par compétence, et choix entre « niveau recommandé » et A2.
- **Répétition espacée FSRS** (≈ J1, J2, J4, J8, J16, J30… adapté à tes erreurs), notes déduites de tes réponses, détection des « sangsues ».
- **Maîtrise par notion** (type Elo) + **tags d'erreurs** (ex. `been_missing`), pour plus d'exercices sur tes faiblesses et moins sur ce que tu maîtrises.
- **Session quotidienne** : ~30 % révisions, ~20 % faiblesses, ~40 % nouvelle leçon, ~10 % production. Seul le **temps actif** compte (onglet visible + interaction dans les 60 dernières secondes).
- **Réduction progressive du français** et exercices « Think in English » dès B1.
- **Profil linguistique dynamique** par compétence (« tu lis au niveau B1 mais ton oral est encore A2… »).
- **Gamification sobre** : XP, série (+ gel hebdomadaire), meilleure série, jours complétés, temps total, mots appris, notions maîtrisées, badges discrets.

Types d'exercices : `mcq`, `type_answer`, `cloze`, `word_bank`, `translate`, `conjugate`, `listen_mcq`, `dictation`, `listen_cloze`, `read_questions`, `speak_repeat`, `speak_prompt`, `write_prompt`, `think_in_english`…

---

## 6. IA et parole, versions gratuites

- **Écoute** : voix iOS, choix de l'accent (US/UK/AU…) et du débit (lent A2 → naturel C1).
- **Oral** : reconnaissance vocale Safari (ou dictée iOS) → score d'**intelligibilité** (mots reconnus vs attendus), débit (mots/min), longueur. On ne pénalise pas l'accent français : seul compte d'être compris.
- **Écrit** : LanguageTool (gratuit, 20 requêtes/min ; le texte est envoyé à leurs serveurs) + critères de longueur et de vocabulaire du niveau.
- **Conversation IA et feedback détaillé** : plus tard, en option, avec ta propre clé. Gemini propose une offre gratuite limitée (données utilisables par Google). Claude est payant à l'usage, quelques $/mois. Le code isolera l'IA derrière une interface pour pouvoir brancher l'un ou l'autre.

---

## 7. Plan de développement

| # | Étape | Statut |
|---|---|---|
| 1 | Socle PWA, design clair/sombre, onboarding (objectif + blocage), dashboard, temps actif, série, lecteur de leçon (5 types), premières leçons A2, guide Raccourcis, export/import | ✅ |
| 2 | FSRS + maîtrise par notion + séance du jour (révisions, points faibles, nouveaux mots/verbes) + 15 leçons A2 (255 exercices) + 224 mots + 90 verbes irréguliers + exercices oraux (répéter, traduire à l’oral, répondre librement) et d’écoute (QCM audio, dictée) | ✅ |
| 3 | Test de placement + profil de compétences | |
| 4 | Parcours A2 complet (grammaire, conjugaison, irréguliers, vocabulaire par thèmes) | |
| 5 | Listening (dictée, cloze audio, accents) + Reading (textes + questions) | |
| 6 | Speaking (reconnaissance vocale, shadowing, prompts) + Writing (LanguageTool) | |
| 7 | Contenu B1 → C2 par vagues, checkpoints, examens de niveau | |
| 8 | Options : synchro cloud gratuite, IA conversationnelle | |

---

## 8. Mise en ligne gratuite

Une PWA exige HTTPS. Options gratuites : **GitHub Pages** (workflow fourni dans `.github/workflows/deploy.yml`) ou **Cloudflare Pages**. Ensuite, sur l'iPhone : ouvrir l'URL dans Safari › Partager › « Sur l'écran d'accueil ».
⚠️ Sur iOS, la version installée a son **propre stockage**, distinct de Safari : utilise toujours l'icône de l'écran d'accueil.
