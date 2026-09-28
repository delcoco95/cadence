import { useEffect, type ReactNode } from 'react';
import { HashRouter, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useSettings } from './db/hooks';
import { Onboarding } from './features/onboarding/Onboarding';
import { Home } from './features/home/Home';
import { PathScreen } from './features/path/PathScreen';
import { Profile } from './features/profile/Profile';
import { LessonPlayer } from './features/lesson/LessonPlayer';
import { FocusScreen } from './features/focus/FocusScreen';
import { PracticePlayer } from './features/practice/PracticePlayer';
import { HomeIcon, PathIcon, ProfileIcon } from './ui/Icons';

function TabBar() {
  const tab = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');
  return (
    <div className="tabbar">
      <nav>
        <NavLink to="/" end className={tab}><HomeIcon />Accueil</NavLink>
        <NavLink to="/path" className={tab}><PathIcon />Parcours</NavLink>
        <NavLink to="/profile" className={tab}><ProfileIcon />Profil</NavLink>
      </nav>
    </div>
  );
}

function WithTabs({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TabBar />
    </>
  );
}

/** La clé remonte le lecteur quand on passe d'une leçon à la suivante. */
function LessonRoute() {
  const { lessonId } = useParams();
  return <LessonPlayer key={lessonId} />;
}

/** La clé recrée la séance quand on passe d'un type de séance à un autre. */
function PracticeRoute() {
  const { focus } = useParams();
  return <PracticePlayer key={focus} />;
}

export function App() {
  const settings = useSettings();

  useEffect(() => {
    const root = document.documentElement;
    if (!settings || settings.theme === 'system') delete root.dataset.theme;
    else root.dataset.theme = settings.theme;
  }, [settings?.theme]);

  if (!settings) return null;
  if (!settings.onboarded) return <Onboarding />;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WithTabs><Home /></WithTabs>} />
        <Route path="/path" element={<WithTabs><PathScreen /></WithTabs>} />
        <Route path="/profile" element={<WithTabs><Profile /></WithTabs>} />
        <Route path="/lesson/:lessonId" element={<LessonRoute />} />
        <Route path="/focus" element={<FocusScreen />} />
        <Route path="/practice/:focus" element={<PracticeRoute />} />
        <Route path="*" element={<WithTabs><Home /></WithTabs>} />
      </Routes>
    </HashRouter>
  );
}
