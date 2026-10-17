# Publier Cadence sur Google Play et l'App Store (depuis Windows, sans Mac)

Recherche du 17/10/2026. Les règles changent souvent : revérifie les liens au moment de publier.

## Ce qu'il faut retenir

| | Android | iOS |
|---|---|---|
| Technique | **TWA** (Trusted Web Activity) via Bubblewrap ou PWABuilder : la PWA tourne dans Chrome. La reconnaissance vocale, la synthèse vocale, le service worker et le cache audio marchent tels quels. | **Capacitor** + modules natifs. Dans WKWebView, la reconnaissance vocale web existe mais **ne fonctionne pas** ([WebKit 239816](https://bugs.webkit.org/show_bug.cgi?id=239816)) : il faut `@capacitor-community/speech-recognition`. |
| Coût | 25 $ une seule fois ([source](https://support.google.com/googleplay/android-developer/answer/6112435)) | 99 $/an ([source](https://developer.apple.com/fr/support/compare-memberships/)) |
| Compilation | GitHub Actions Linux (gratuit) | GitHub Actions macOS (gratuit si dépôt public) ou Codemagic (500 min/mois gratuites, [tarifs](https://codemagic.io/pricing/)) avec fastlane `match` + clé API App Store Connect |
| Tests | **Test fermé : au moins 12 testeurs inscrits 14 jours d'affilée** (compte personnel créé après le 13/11/2023, [source](https://support.google.com/googleplay/android-developer/answer/14151465)) | TestFlight sur ton iPhone (pas de simulateur sans Mac) |
| Point bloquant | `/.well-known/assetlinks.json` doit être à la **racine** du domaine : il faut un domaine à toi (environ 10 €/an) ou un dépôt `<pseudo>.github.io` | Règle **4.2** : une app qui n'est qu'un site emballé est refusée. Il faut du natif (reconnaissance vocale native, notifications locales de rappel, haptique, fonctionnement 100 % hors ligne). |

## Règles à respecter

- **Android** : API cible 36 (Android 16) depuis le 31/08/2026 ([source](https://developer.android.com/google/play/requirements/target-sdk)). Formulaires Data safety, politique de confidentialité, classification du contenu. Le risque « webview spam » est écarté en montrant le hors-ligne et l'oral ([source](https://android-developers.googleblog.com/2020/10/developer-tips-and-guides-common-policy.html)).
- **iOS** ([règles](https://developer.apple.com/app-store/review/guidelines/)) :
  - 4.2.3(ii) : annoncer la taille d'un téléchargement au premier lancement (audio) ;
  - 5.1.1(v) : suppression de compte dans l'app s'il y a des comptes ;
  - questionnaire « App Privacy » ;
  - textes `NSMicrophoneUsageDescription` et `NSSpeechRecognitionUsageDescription` ;
  - taille maximale 4 Go, avertissement au-delà de 200 Mo en données mobiles.
- **UE (DSA)** : déclarer le statut professionnel ou non professionnel dans les deux consoles. Un professionnel voit son adresse, son téléphone et son e-mail **affichés publiquement**.
- **RGPD** : la reconnaissance vocale envoie l'audio aux serveurs d'Apple ou de Google. Il faut le dire dans la politique de confidentialité, et activer la reconnaissance sur l'appareil quand c'est possible.

## Audio (555 Mo)

- GitHub Pages : site de 1 Go maximum, environ 100 Go/mois de bande passante, soit environ 180 téléchargements complets de toutes les voix ([limites](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)).
- Recommandé : **Cloudflare R2** (10 Go gratuits, sortie gratuite) pour le web et Android ; pour iOS, embarquer l'audio (plus solide face à la règle 4.2) ou proposer un téléchargement par voix avec un écran de consentement.
- Sortir ensuite les MP3 du dépôt Git (`public/audio`), qui devient trop lourd.

## Parcours conseillé

1. **Toi** (identité, paiement) :
   - compte Google Play personnel ;
   - compte Apple Developer ;
   - déclarations DSA ;
   - politique de confidentialité ;
   - 12 testeurs Android ;
   - clé API App Store Connect (.p8, téléchargeable une seule fois).
2. **Moi** (code et CI) :
   - nouveau nom et nouvelle identité ;
   - domaine et `assetlinks.json` ;
   - audio sur R2 ;
   - projet Capacitor iOS avec reconnaissance vocale native, notifications et haptique ;
   - workflows GitHub Actions : AAB Android signé, IPA iOS envoyée sur TestFlight.
3. **Calendrier indicatif** :
   - semaine 1 : comptes et CI ;
   - semaines 2 à 4 : test fermé Android de 14 jours, en parallèle de TestFlight ;
   - ensuite : soumissions.

**Coût de la première année** : 25 $ + 99 $ + environ 10 € de domaine. CI et hébergement gratuits à petite échelle.
