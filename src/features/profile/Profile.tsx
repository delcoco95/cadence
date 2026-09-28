import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, updateSettings, type Accent, type ThemePref } from '../../db/db';
import { applyGoalToToday, loadStats } from '../../db/activity';
import { exportBackup, importBackup } from '../../db/backup';
import { useSettings } from '../../db/hooks';
import { speak } from '../../speech/tts';
import { formatMinutes } from '../../ui/format';

export const GOAL_OPTIONS = [5, 10, 15, 20, 30];

export function Profile() {
  const settings = useSettings();
  const stats = useLiveQuery(() => loadStats());
  const lessonsDone = useLiveQuery(() => db.lessonProgress.count());
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  if (!settings) return null;

  const setGoal = async (minutes: number) => {
    await updateSettings({ dailyGoalMinutes: minutes });
    await applyGoalToToday(minutes);
  };

  const doExport = async () => {
    const blob = await exportBackup();
    const file = new File([blob], `cadence-${new Date().toISOString().slice(0, 10)}.json`, { type: 'application/json' });
    // Sur iPhone, la feuille de partage permet d'enregistrer dans Fichiers / iCloud Drive.
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: 'Sauvegarde Cadence' }).catch(() => undefined);
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const doImport = async (file: File) => {
    if (!confirm('Remplacer toutes tes données actuelles par cette sauvegarde ?')) return;
    try {
      await importBackup(file);
      setMessage('Sauvegarde restaurée.');
    } catch (e) {
      setMessage((e as Error).message);
    }
  };

  return (
    <div className="screen">
      <header>
        <p className="muted small">Profil</p>
        <h1>Réglages</h1>
      </header>

      {stats && (
        <section className="stats">
          <div className="stat"><b>{stats.totalXp}</b><span>XP au total</span></div>
          <div className="stat"><b>{lessonsDone ?? 0}</b><span>leçons terminées</span></div>
          <div className="stat"><b>{formatMinutes(stats.totalSeconds)}</b><span>temps actif</span></div>
          <div className="stat"><b>{stats.streak.best}</b><span>meilleure série</span></div>
        </section>
      )}

      <section className="card stack">
        <h3>Objectif quotidien</h3>
        <div className="segmented">
          {GOAL_OPTIONS.map((m) => (
            <button key={m} className={`option${settings.dailyGoalMinutes === m ? ' selected' : ''}`} onClick={() => void setGoal(m)}>
              {m}
            </button>
          ))}
        </div>
        <p className="small muted">Minutes de pratique active par jour.</p>
      </section>

      <section className="card">
        <Link to="/focus" className="setting" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div>
            <p style={{ fontWeight: 600 }}>🔒 Blocage des apps</p>
            <p className="small muted">{settings.blockingEnabled ? (settings.blockingSetupDone ? 'Activé' : 'À configurer') : 'Désactivé'}</p>
          </div>
          <span className="muted">›</span>
        </Link>
        <div className="setting">
          <div>
            <p style={{ fontWeight: 600 }}>🎙️ Exercices oraux</p>
            <p className="small muted">Parler dans le micro pendant les leçons et révisions</p>
          </div>
          <label className="toggle">
            <input type="checkbox" checked={settings.speakingEnabled} onChange={(e) => void updateSettings({ speakingEnabled: e.target.checked })} />
            <span />
          </label>
        </div>
        <div className="setting">
          <p style={{ fontWeight: 600 }}>Nouveaux mots par jour</p>
          <select className="field" value={settings.newWordsPerDay} onChange={(e) => void updateSettings({ newWordsPerDay: Number(e.target.value) })}>
            {[4, 8, 12, 16, 20].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="setting">
          <p style={{ fontWeight: 600 }}>Accent des voix</p>
          <select className="field" value={settings.accent} onChange={(e) => void updateSettings({ accent: e.target.value as Accent })}>
            <option value="en-GB">🇬🇧 British</option>
            <option value="en-US">🇺🇸 American</option>
            <option value="en-AU">🇦🇺 Australian</option>
          </select>
        </div>
        <div className="setting">
          <p style={{ fontWeight: 600 }}>Débit</p>
          <select className="field" value={settings.speechRate} onChange={(e) => void updateSettings({ speechRate: Number(e.target.value) })}>
            <option value={0.7}>Lent</option>
            <option value={0.9}>Normal</option>
            <option value={1}>Naturel</option>
          </select>
        </div>
        <div className="setting">
          <p className="small muted grow">Tester la voix</p>
          <button className="btn secondary small" onClick={() => speak('Hello! This is how I sound. Have a great day.', settings.accent, settings.speechRate)}>
            ▶︎ Écouter
          </button>
        </div>
        <div className="setting">
          <p style={{ fontWeight: 600 }}>Apparence</p>
          <select className="field" value={settings.theme} onChange={(e) => void updateSettings({ theme: e.target.value as ThemePref })}>
            <option value="system">Automatique</option>
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
          </select>
        </div>
      </section>

      <section className="card stack">
        <h3>Sauvegarde</h3>
        <p className="small muted">
          Tes données restent sur ton iPhone. Exporte une sauvegarde de temps en temps (Fichiers / iCloud Drive).
        </p>
        <div className="row">
          <button className="btn secondary small grow" onClick={() => void doExport()}>Exporter</button>
          <button className="btn secondary small grow" onClick={() => fileRef.current?.click()}>Importer</button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void doImport(f);
            e.target.value = '';
          }}
        />
        {message && <p className="small">{message}</p>}
      </section>

      <p className="center tiny muted">Cadence v0.1</p>
    </div>
  );
}
