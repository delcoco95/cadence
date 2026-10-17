import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { loadScenes, type Scene } from '../../content/scenes';
import { CEFR_LEVELS } from '../../content/types';
import { useSettings } from '../../db/hooks';
import { sceneStats } from '../../db/scenes';
import { ChatIcon } from '../../ui/Icons';
import { ProgressBar } from '../../ui/ProgressBar';

/** Liste des scènes de conversation, par niveau. */
export function ConversationHub() {
  const settings = useSettings();
  const lang = settings?.language ?? 'en';
  const [scenes, setScenes] = useState<Scene[] | null>(null);
  const stats = useLiveQuery(() => sceneStats());

  useEffect(() => {
    let alive = true;
    void loadScenes(lang).then((s) => alive && setScenes(s));
    return () => {
      alive = false;
    };
  }, [lang]);

  const levels = CEFR_LEVELS.filter((l) => scenes?.some((s) => s.cefr === l));

  return (
    <div className="screen">
      <header>
        <h1>Parler</h1>
        <p className="muted small" style={{ fontWeight: 700 }}>
          Des conversations guidées avec des personnages. Réponds à voix haute avec tes propres mots : c’est le sens qui
          compte, pas une phrase exacte. Les aides disparaissent au fil des parties.
        </p>
      </header>

      {!scenes && <p className="muted">Chargement…</p>}

      {levels.map((level) => (
        <section key={level} className="stack" style={{ gap: 10 }}>
          <p className="tiny muted">Niveau {level}</p>
          {scenes!
            .filter((s) => s.cefr === level)
            .map((s) => {
              const st = stats?.get(s.id);
              return (
                <Link key={s.id} to={`/talk/${s.id}`} className="card scene-card">
                  <span className="icon-tile tone-teal"><ChatIcon /></span>
                  <div className="grow stack" style={{ gap: 4 }}>
                    <div className="row spread">
                      <h3>{s.title}</h3>
                      {st?.completed ? <span className="chip success">{st.completed}×</span> : <span className="chip">Nouveau</span>}
                    </div>
                    <p className="small muted">{s.character.name}, {s.character.role} · {s.goal}</p>
                    {st && <ProgressBar value={st.best} tone="primary" thin label={`Meilleur score ${Math.round(st.best * 100)} %`} />}
                  </div>
                </Link>
              );
            })}
        </section>
      ))}

      <p className="note">
        La reconnaissance vocale de ton téléphone transcrit ta voix ; Cadence vérifie ensuite que ta réponse a le bon sens et
        utilise les formes travaillées. Sans micro, tu peux répondre par écrit.
      </p>
    </div>
  );
}
