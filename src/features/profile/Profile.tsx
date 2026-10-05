import { useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, updateSettings, type ThemePref } from '../../db/db';
import { applyGoalToToday, loadStats } from '../../db/activity';
import { exportBackup, importBackup } from '../../db/backup';
import { learningStats } from '../../db/learning';
import { useSettings } from '../../db/hooks';
import { BADGES, badgeProgress, type BadgeIcon } from '../../core/badges';
import type { Gender } from '../../core/gender';
import { formatMinutes } from '../../ui/format';
import { ProgressBar } from '../../ui/ProgressBar';
import { sfx } from '../../ui/sfx';
import {
  BoltIcon, BookIcon, BrainIcon, ChevronIcon, ClockIcon, CrownIcon, FlameIcon, LetterIcon, LockIcon, StarIcon, TrophyIcon,
} from '../../ui/Icons';
import { VoicePicker } from './VoicePicker';

export const GOAL_OPTIONS = [5, 10, 15, 20, 30];

export const GENDER_OPTIONS: { value: Gender; label: string; example: string }[] = [
  { value: 'f', label: 'Femme', example: '« Tu es prête ? »' },
  { value: 'm', label: 'Homme', example: '« Tu es prêt ? »' },
  { value: 'n', label: 'Je préfère ne pas préciser', example: '« Tu es prêt·e ? »' },
];

const BADGE_ICONS: Record<BadgeIcon, ReactNode> = {
  book: <BookIcon />, flame: <FlameIcon />, letter: <LetterIcon />, brain: <BrainIcon />,
  clock: <ClockIcon />, bolt: <BoltIcon />, crown: <CrownIcon />, star: <StarIcon />,
};

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="toggle">
      <input type="checkbox" aria-label={label} checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span />
    </label>
  );
}

export function Profile() {
  const settings = useSettings();
  const stats = useLiveQuery(() => loadStats());
  const learning = useLiveQuery(() => learningStats());
  const lessonsDone = useLiveQuery(() => db.lessonProgress.count());
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
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

  const displayName = settings.firstName.trim();
  const since = new Date(settings.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const badgeInput = {
    lessonsDone: lessonsDone ?? 0,
    bestStreak: stats?.streak.best ?? 0,
    wordsActive: learning?.wordsActive ?? 0,
    verbsLearned: learning?.verbsLearned ?? 0,
    mastered: learning?.byState.mastered ?? 0,
    totalSeconds: stats?.totalSeconds ?? 0,
    totalXp: stats?.totalXp ?? 0,
  };
  const unlocked = BADGES.filter((b) => badgeProgress(b, badgeInput).unlocked).length;

  return (
    <div className="screen">
      <header className="profile-head">
        <div className="avatar" aria-hidden="true">{(displayName[0] ?? 'C').toUpperCase()}</div>
        <div className="grow">
          <h1 style={{ fontSize: 26 }}>{displayName || 'Mon profil'}</h1>
          <p className="small muted" style={{ fontWeight: 700 }}>Niveau {settings.startLevel} · depuis {since}</p>
        </div>
      </header>

      {stats && (
        <section className="stats">
          <div className="stat"><span className="icon-tile tone-flame"><FlameIcon /></span><div><b>{stats.streak.best}</b><span>meilleure série</span></div></div>
          <div className="stat"><span className="icon-tile tone-sun"><BoltIcon /></span><div><b>{stats.totalXp}</b><span>XP au total</span></div></div>
          <div className="stat"><span className="icon-tile tone-primary"><BookIcon /></span><div><b>{lessonsDone ?? 0}</b><span>leçons</span></div></div>
          <div className="stat"><span className="icon-tile tone-sky"><ClockIcon /></span><div><b>{formatMinutes(stats.totalSeconds)}</b><span>de pratique</span></div></div>
        </section>
      )}

      <section className="card stack" style={{ gap: 14 }}>
        <div className="section-title">
          <h3><TrophyIcon style={{ color: 'var(--sun)' }} />Badges</h3>
          <span className="chip sun">{unlocked} / {BADGES.length}</span>
        </div>
        <div className="badges">
          {BADGES.map((b) => {
            const { unlocked: ok, ratio } = badgeProgress(b, badgeInput);
            return (
              <div key={b.id} className={`badge ${b.tone}${ok ? '' : ' locked'}`}>
                <span className="badge-medal">{ok ? BADGE_ICONS[b.icon] : <LockIcon />}</span>
                <b>{b.title}</b>
                {ok ? <span>{b.hint}</span> : <ProgressBar value={ratio} tone="sun" thin label={b.hint} />}
                {!ok && <span>{b.hint}</span>}
              </div>
            );
          })}
        </div>
      </section>

      <h3 className="group-title">À propos de toi</h3>
      <section className="card stack" style={{ gap: 14 }}>
        <label className="stack" style={{ gap: 6 }}>
          <span className="tiny muted">Prénom</span>
          <input
            className="field"
            value={name ?? settings.firstName}
            placeholder="Comment Coco doit t’appeler ?"
            autoComplete="given-name"
            maxLength={24}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (name !== null) void updateSettings({ firstName: name.trim() });
            }}
          />
        </label>
        <div className="stack" style={{ gap: 8 }}>
          <span className="tiny muted">Pour accorder les phrases en français</span>
          {GENDER_OPTIONS.map((g) => (
            <button
              key={g.value}
              className={`option${settings.gender === g.value ? ' selected' : ''}`}
              onClick={() => void updateSettings({ gender: g.value })}
            >
              <span className="grow">{g.label}</span>
              <span className="note">{g.example}</span>
            </button>
          ))}
        </div>
      </section>

      <h3 className="group-title">Voix et sons</h3>
      <section className="card stack" style={{ gap: 14 }}>
        <VoicePicker value={settings} onChange={(patch) => void updateSettings(patch)} />
        <div className="setting" style={{ borderTop: '2px solid var(--surface-2)', paddingTop: 14 }}>
          <b>Vitesse</b>
          <select className="field" value={settings.speechRate} onChange={(e) => void updateSettings({ speechRate: Number(e.target.value) })}>
            <option value={0.7}>Lente</option>
            <option value={0.9}>Normale</option>
            <option value={1}>Naturelle</option>
          </select>
        </div>
        <div className="setting">
          <div><b>Effets sonores</b><p className="note">Petits sons de réussite et d’erreur</p></div>
          <Toggle
            label="Effets sonores"
            checked={settings.soundEffects}
            onChange={(v) => {
              void updateSettings({ soundEffects: v });
              if (v) window.setTimeout(() => sfx.correct(), 50);
            }}
          />
        </div>
      </section>

      <h3 className="group-title">Apprentissage</h3>
      <section className="card stack" style={{ gap: 4 }}>
        <div className="stack" style={{ gap: 8, paddingBottom: 12 }}>
          <b>Objectif quotidien (minutes)</b>
          <div className="segmented">
            {GOAL_OPTIONS.map((m) => (
              <button key={m} className={`option${settings.dailyGoalMinutes === m ? ' selected' : ''}`} onClick={() => void setGoal(m)}>
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="setting">
          <div><b>Exercices oraux</b><p className="note">Parler dans le micro pendant les leçons</p></div>
          <Toggle label="Exercices oraux" checked={settings.speakingEnabled} onChange={(v) => void updateSettings({ speakingEnabled: v })} />
        </div>
        <div className="setting">
          <div>
            <b>{settings.gender === 'f' ? '« Sûre de toi ? »' : settings.gender === 'm' ? '« Sûr de toi ? »' : '« Sûr·e de toi ? »'}</b>
            <p className="note">Une réponse devinée revient plus vite en révision</p>
          </div>
          <Toggle label="Question de confiance" checked={settings.askConfidence} onChange={(v) => void updateSettings({ askConfidence: v })} />
        </div>
        <div className="setting">
          <b>Nouveaux mots par jour</b>
          <select className="field" value={settings.newWordsPerDay} onChange={(e) => void updateSettings({ newWordsPerDay: Number(e.target.value) })}>
            {[4, 8, 12, 16, 20].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <Link to="/focus" className="setting">
          <div>
            <b>Blocage des apps</b>
            <p className="note">{settings.blockingEnabled ? (settings.blockingSetupDone ? 'Activé' : 'À configurer') : 'Désactivé'}</p>
          </div>
          <ChevronIcon style={{ width: 20, height: 20, color: 'var(--muted)' }} />
        </Link>
      </section>

      <h3 className="group-title">Apparence</h3>
      <section className="card">
        <div className="segmented">
          {([['system', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']] as [ThemePref, string][]).map(([v, l]) => (
            <button key={v} className={`option${settings.theme === v ? ' selected' : ''}`} onClick={() => void updateSettings({ theme: v })}>{l}</button>
          ))}
        </div>
      </section>

      <h3 className="group-title">Sauvegarde</h3>
      <section className="card stack">
        <p className="small muted">
          Tes données restent sur ton téléphone. Exporte une sauvegarde de temps en temps (Fichiers / iCloud Drive).
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

      <p className="center note">Cadence</p>
    </div>
  );
}
