import { useState } from 'react';
import { startCourse, updateSettings, type Settings } from '../../db/db';
import { applyChosenLevel, levelChoices, type LevelChoice } from '../../db/units';
import { LANGUAGES } from '../../content/languages';
import { LANGS } from '../../content/types';
import { Mascot, MascotSays } from '../../ui/Mascot';
import { Flag } from '../../ui/language';
import { sfx } from '../../ui/sfx';
import { SparkleIcon, TargetIcon } from '../../ui/Icons';

/**
 * Première ouverture d'une langue (ajoutée depuis le profil) : on choisit son niveau de départ
 * ou on passe le test. Les autres langues commencées restent accessibles.
 */
export function CourseSetup({ settings }: { settings: Settings }) {
  const lang = settings.language;
  const info = LANGUAGES[lang];
  const [level, setLevel] = useState<LevelChoice | null>(null);
  const others = LANGS.filter((l) => l !== lang && settings.courses[l]);

  async function start() {
    if (!level) return;
    // Le routeur lit l'adresse à son montage : le test s'ouvre directement.
    window.location.hash = level === 'test' ? '#/placement' : '#/';
    await startCourse(lang);
    if (level !== 'test') await applyChosenLevel(level);
    sfx.complete();
  }

  return (
    <div className="screen full">
      <div className="ob-body top">
        <div className="row" style={{ justifyContent: 'center', gap: 12 }}>
          <Mascot mood="cheer" size={110} />
        </div>
        <MascotSays mood="happy">
          C’est parti pour l’{info.name} ! Quel est ton niveau ? Pas sûr ? Le test le trouve pour toi.
        </MascotSays>
        <div className="stack" style={{ gap: 10 }}>
          {levelChoices(lang).map((c) => (
            <button
              key={c.value}
              className={`choice wide${level === c.value ? ' selected' : ''}`}
              onClick={() => {
                sfx.tap();
                setLevel(c.value);
              }}
            >
              <span className={`icon-tile ${c.tone}`}>{c.value === 'test' ? <TargetIcon /> : <b style={{ fontSize: 15 }}>{c.value}</b>}</span>
              <span className="grow">
                {c.label}
                <span className="note" style={{ display: 'block', fontWeight: 600 }}>{c.hint}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="tip"><SparkleIcon />Ta série et ton objectif du jour sont communs à toutes tes langues. Ta progression en {info.name} est à part.</p>
        <div className="bottom-action stack">
          <button className="btn" disabled={!level} onClick={() => void start()}>Commencer</button>
          {others.map((l) => (
            <button key={l} className="btn ghost" onClick={() => void updateSettings({ language: l })}>
              <Flag lang={l} size={22} /> Revenir à l’{LANGUAGES[l].name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
