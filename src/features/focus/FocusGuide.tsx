import { useState, type ReactNode } from 'react';

interface Step {
  title: string;
  intro: string;
  items: ReactNode[];
}

const DATE_STEP = (
  <>
    Ajoute l’action <b>Formater la date</b> : Date = <i>Date actuelle</i>, Format de date = <i>Personnalisé</i>,
    chaîne de format <code>yyyy-MM-dd</code>, Format d’heure = <i>Aucun</i>.
  </>
);

const STEPS: Step[] = [
  {
    title: '1. Raccourci « Cadence Valider »',
    intro: 'Cadence le lance quand ton objectif est atteint. Il crée un fichier au nom de la date du jour.',
    items: [
      <>Ouvre l’app <b>Raccourcis</b>, onglet <b>Raccourcis</b>, puis touche <b>+</b>.</>,
      <>Touche le nom en haut et renomme-le exactement <code>Cadence Valider</code>.</>,
      DATE_STEP,
      <>Ajoute l’action <b>Texte</b> et écris <code>ok</code>.</>,
      <>
        Ajoute <b>Enregistrer le fichier</b> (entrée : <i>Texte</i>). Ouvre ses options : désactive{' '}
        <i>Demander où enregistrer</i>, mets comme sous-chemin <code>Cadence/</code> + la variable <i>Date formatée</i> +{' '}
        <code>.txt</code>, et active <i>Écraser si le fichier existe</i>.
      </>,
      <>Touche ▶︎ une fois pour tester. Si iOS demande l’accès au dossier, choisis <b>Toujours autoriser</b>.</>,
    ],
  },
  {
    title: '2. Raccourci « Cadence Contrôle »',
    intro: 'Il vérifie si le fichier du jour existe. Sinon, il te renvoie à l’écran d’accueil.',
    items: [
      <>Nouveau raccourci nommé <code>Cadence Contrôle</code>.</>,
      DATE_STEP,
      <>
        Ajoute <b>Obtenir le fichier</b> (dossier <i>Raccourcis</i>), chemin <code>Cadence/</code> + <i>Date formatée</i> +{' '}
        <code>.txt</code>. Désactive <i>Afficher le sélecteur de documents</i> et <i>Erreur si introuvable</i>.
      </>,
      <>Ajoute <b>Si</b> : <i>Fichier</i> <b>n’a aucune valeur</b>.</>,
      <>Dans le « Si », ajoute <b>Afficher la notification</b> : <code>🔒 Fais d’abord ta session d’anglais sur Cadence</code>.</>,
      <>Toujours dans le « Si », ajoute <b>Aller à l’écran d’accueil</b>.</>,
    ],
  },
  {
    title: '3. Automatisation : les apps à bloquer',
    intro: 'C’est elle qui s’exécute chaque fois que tu ouvres une app choisie.',
    items: [
      <>Onglet <b>Automatisation</b>, puis <b>+</b> (Nouvelle automatisation).</>,
      <>Choisis <b>App</b>, puis <b>Choisir</b> : coche Instagram, TikTok, Snapchat, YouTube, Reddit… N’ajoute ni Safari, ni Téléphone, ni Messages.</>,
      <>Laisse <i>Est ouverte</i> coché et choisis <b>Exécuter immédiatement</b>.</>,
      <>Touche <b>Suivant</b> et ajoute l’action <b>Exécuter le raccourci</b> : <i>Cadence Contrôle</i>.</>,
      <>Test : ouvre une app bloquée. Tu dois recevoir la notification et revenir à l’écran d’accueil.</>,
    ],
  },
];

export function FocusGuide({ onDone, doneLabel = 'J’ai tout configuré' }: { onDone: () => void; doneLabel?: string }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="stack">
      <div className="card stack">
        <h3>Comment ça marche</h3>
        <p className="small">
          Chaque jour à minuit, les apps que tu choisis sont bloquées. Quand ta session d’anglais est faite, un bouton
          <b> Débloquer mes apps</b> les libère jusqu’au lendemain.
        </p>
        <p className="small muted">
          Le blocage passe par l’app Raccourcis d’Apple (gratuit, iOS 17+). iOS n’autorise pas un site à installer des
          raccourcis tout seul : la configuration se fait une fois, à la main (5 min). Ce n’est pas un verrou absolu, tu
          peux désactiver l’automatisation dans Raccourcis. C’est un engagement envers toi-même, comme sur Duolingo.
        </p>
      </div>

      {STEPS.map((step, i) => (
        <section key={step.title} className="card stack">
          <button
            className="row spread"
            style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <h3>{step.title}</h3>
            <span className="muted">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <>
              <p className="small muted">{step.intro}</p>
              <ol className="steps">
                {step.items.map((item, j) => <li key={j}>{item}</li>)}
              </ol>
              {i < STEPS.length - 1 && (
                <button className="btn secondary small" onClick={() => setOpen(i + 1)}>Étape suivante</button>
              )}
            </>
          )}
        </section>
      ))}

      <button className="btn" onClick={onDone}>{doneLabel}</button>
    </div>
  );
}
