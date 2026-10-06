import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { VOCAB_A2, IRREGULAR_VERBS } from '../../content';
import { learningStats } from '../../db/learning';
import { MascotSays } from '../../ui/Mascot';
import { useProfileText } from '../../ui/profile';
import { BookIcon, ChartIcon, LetterIcon, RefreshIcon, TargetIcon } from '../../ui/Icons';
import { ProgressBar } from '../../ui/ProgressBar';

export function PracticeHub() {
  const stats = useLiveQuery(() => learningStats());
  const p = useProfileText();
  const due = stats?.dueCount ?? 0;
  const wordsSeen = (stats?.wordsActive ?? 0) + (stats?.wordsPassive ?? 0);

  return (
    <div className="screen">
      <header>
        <h1>Réviser</h1>
      </header>

      <MascotSays mood={due > 0 ? 'think' : 'happy'}>
        {due > 0
          ? `${due} élément${due > 1 ? 's' : ''} t’attend${due > 1 ? 'ent' : ''}. Réviser au bon moment, c’est la clé pour ne pas oublier !`
          : p.t('Tout est à jour, bravo ! Tu peux découvrir de nouveaux mots ou attaquer tes points faibles.')}
      </MascotSays>

      <Link to="/practice/all" className="cta-card" style={{ textDecoration: 'none' }}>
        <div className="row">
          <span className="icon-tile" style={{ background: 'rgb(255 255 255 / .2)', color: '#fff' }}><RefreshIcon /></span>
          <div className="grow">
            <h2 style={{ fontSize: 21 }}>Séance du jour</h2>
            <p className="small">Révisions espacées, nouveaux mots, points faibles</p>
          </div>
        </div>
        <span className="btn white">{due > 0 ? `Réviser (${due})` : 'Lancer la séance'}</span>
      </Link>

      <div className="module-grid">
        <Link className="module tone-pink" to="/practice/vocab">
          <span className="icon-tile"><BookIcon /></span>
          <b>Vocabulaire</b>
          <span>{wordsSeen} / {VOCAB_A2.length} mots vus</span>
          <ProgressBar value={wordsSeen / VOCAB_A2.length} thin tone="primary" />
        </Link>
        <Link className="module tone-teal" to="/practice/irregular">
          <span className="icon-tile"><LetterIcon /></span>
          <b>Verbes irréguliers</b>
          <span>{stats?.verbsStarted ?? 0} / {IRREGULAR_VERBS.length} verbes</span>
          <ProgressBar value={(stats?.verbsStarted ?? 0) / IRREGULAR_VERBS.length} thin tone="primary" />
        </Link>
        <Link className="module tone-danger" to="/practice/weak">
          <span className="icon-tile"><TargetIcon /></span>
          <b>Points faibles</b>
          <span>{stats?.weak.length ?? 0} notion{(stats?.weak.length ?? 0) > 1 ? 's' : ''} à renforcer</span>
        </Link>
        <Link className="module tone-sun" to="/progress">
          <span className="icon-tile"><ChartIcon /></span>
          <b>Mes notions</b>
          <span>Maîtrise et mémoire, notion par notion</span>
        </Link>
      </div>

      <Link to="/placement" className="card list-link" style={{ padding: 16 }}>
        <span className="icon-tile tone-sun"><TargetIcon /></span>
        <span className="grow">
          <b style={{ display: 'block' }}>Test de niveau</b>
          <span className="note">Mesure ta progression sur l’échelle CECRL, quand tu veux.</span>
        </span>
      </Link>

      {stats && stats.retention !== null && (
        <section className="card list-link" style={{ padding: 16 }}>
          <span className="icon-tile tone-primary"><ChartIcon /></span>
          <span className="grow">
            <b style={{ display: 'block' }}>Mémoire globale : {Math.round(stats.retention * 100)} %</b>
            <span className="note">Probabilité que tu te souviennes aujourd’hui de ce que tu as appris.</span>
          </span>
        </section>
      )}
    </div>
  );
}
