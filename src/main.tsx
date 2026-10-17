import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.css';
import { startUpdates } from './ui/update';

// Mise à jour proposée sur l'accueil plutôt qu'appliquée d'office (un rechargement couperait une leçon).
startUpdates();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
