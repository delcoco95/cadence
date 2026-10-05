# Cadence

Application personnelle d'apprentissage de l'anglais (A2 → C2), sous forme de PWA gratuite à installer sur l'iPhone.
Architecture : [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Design et expérience : [docs/DESIGN.md](docs/DESIGN.md).

## Développer (sur le PC)

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # tests du moteur et intégrité du contenu
npm run build      # build de production dans dist/
```

## Mettre en ligne gratuitement (GitHub Pages)

1. Crée un compte GitHub (gratuit) et un dépôt, par exemple `cadence`.
2. Dans ce dossier :
   ```bash
   git add -A
   git commit -m "Cadence v0.1"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/cadence.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings › Pages › Source : GitHub Actions**. Le workflow `.github/workflows/deploy.yml` teste, compile et publie automatiquement à chaque push.
4. L'app est en ligne sur `https://<ton-pseudo>.github.io/cadence/`.

## Installer sur l'iPhone

1. Ouvre l'URL dans **Safari**.
2. Touche **Partager › Sur l'écran d'accueil › Ajouter**.
3. Ouvre Cadence **depuis l'icône** (pas depuis Safari : sur iOS, les deux ont des données séparées).
4. Suis l'onboarding. Le guide « Blocage des apps » explique comment configurer l'app Raccourcis.

Les mises à jour s'installent toutes seules à la prochaine ouverture (service worker).

## Ajouter du contenu

Les leçons sont dans `src/content/<niveau>/*.ts` (types dans `src/content/types.ts`) et sont déclarées dans `src/content/index.ts`.
`npm test` vérifie les identifiants uniques, les références entre unités et leçons, et que chaque réponse de référence est bien acceptée par le correcteur.
