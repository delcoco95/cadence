import { useEffect, useReducer } from 'react';
import type { Accent, Settings } from '../../db/db';
import { allVoices, onVoicesChanged, speak, ttsAvailable, voicesFor } from '../../speech/tts';
import { TIER_LABELS, isNovelty, voiceId, voiceTier, type VoiceGenderPref, type VoiceTier } from '../../speech/voices';
import { CheckIcon, SparkleIcon, SpeakerIcon } from '../../ui/Icons';
import { isIOS } from '../focus/shortcuts';

type VoiceSettings = Pick<Settings, 'accent' | 'voiceId' | 'voiceGender' | 'speechRate'>;
// Effacer aussi l'ancien réglage par nom, sinon getSettings le reprendrait comme voix choisie.
const NO_VOICE = { voiceId: undefined, voiceName: undefined } as Partial<VoiceSettings>;

const ACCENTS: { value: Accent; label: string }[] = [
  { value: 'en-GB', label: 'Britannique' },
  { value: 'en-US', label: 'Américain' },
  { value: 'en-AU', label: 'Australien' },
];

const GENDERS: { value: VoiceGenderPref; label: string }[] = [
  { value: 'female', label: 'Féminine' },
  { value: 'male', label: 'Masculine' },
  { value: 'any', label: 'Peu importe' },
];

const TIER: Record<VoiceTier, { label: string; cls: string }> = {
  3: { label: TIER_LABELS[3], cls: 'chip success' },
  2: { label: TIER_LABELS[2], cls: 'chip sky' },
  1: { label: TIER_LABELS[1], cls: 'chip' },
};

const SAMPLE = (name: string) => `Hi, I'm ${name}! Let's learn English together, one step at a time.`;
const MAX_VOICES = 6;

/** Choix de l'accent, du genre de la voix et de la voix elle-même, avec écoute. */
export function VoicePicker({ value, onChange }: { value: VoiceSettings; onChange: (patch: Partial<VoiceSettings>) => void }) {
  const [, refresh] = useReducer((n: number) => n + 1, 0);
  useEffect(() => onVoicesChanged(refresh), []);

  const forAccent = voicesFor(value.accent, value.voiceGender);
  const missingAccent = forAccent.length === 0;
  const ranked = missingAccent ? voicesFor('en', value.voiceGender) : forAccent;
  const filtered = value.voiceGender === 'any' ? ranked : ranked.filter((r) => r.gender === value.voiceGender || !r.gender);
  const list = (filtered.length ? filtered : ranked).slice(0, MAX_VOICES);
  // Ancien réglage par nom : on reconnaît la meilleure voix de ce nom (la liste est déjà triée par qualité).
  const selected =
    list.find((r) => voiceId(r.voice) === value.voiceId)?.voice ?? list.find((r) => r.voice.name === value.voiceId)?.voice ?? list[0]?.voice;
  const selectedId = selected && voiceId(selected);
  const bestTier = ranked[0]?.tier ?? 1;

  const preview = (id: string, label: string) =>
    speak(SAMPLE(label), value.accent, { rate: value.speechRate, voice: { id, gender: value.voiceGender } });

  if (!ttsAvailable()) return <p className="note">La synthèse vocale n’est pas disponible sur ce navigateur.</p>;

  return (
    <div className="stack" style={{ gap: 14 }}>
      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Accent</p>
        <div className="segmented">
          {ACCENTS.map((a) => (
            <button
              key={a.value}
              className={`option${value.accent === a.value ? ' selected' : ''}`}
              onClick={() => onChange({ accent: a.value, ...NO_VOICE })}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <div className="stack" style={{ gap: 8 }}>
        <p className="tiny muted">Voix</p>
        <div className="segmented">
          {GENDERS.map((g) => (
            <button
              key={g.value}
              className={`option${value.voiceGender === g.value ? ' selected' : ''}`}
              onClick={() => onChange({ voiceGender: g.value, ...NO_VOICE })}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {missingAccent && list.length > 0 && (
        <p className="note">Pas de voix {ACCENTS.find((a) => a.value === value.accent)?.label.toLowerCase()} sur cet appareil : voici les autres voix anglaises disponibles.</p>
      )}
      {list.length === 0 ? (
        <p className="note">Aucune voix anglaise sur cet appareil.</p>
      ) : (
        <div className="voice-list">
          {list.map((r) => {
            const id = voiceId(r.voice);
            const isSel = id === selectedId;
            return (
              <div key={id} className={`voice${isSel ? ' selected' : ''}`}>
                <button className="play" aria-label={`Écouter ${r.label}`} onClick={() => preview(id, r.label)}>
                  <SpeakerIcon />
                </button>
                <button
                  className="grow"
                  style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0 }}
                  onClick={() => {
                    onChange({ ...NO_VOICE, voiceId: id });
                    preview(id, r.label);
                  }}
                >
                  <b>{r.label}</b>
                  <span className="row" style={{ gap: 6, marginTop: 2 }}>
                    <span className={TIER[r.tier].cls}>{TIER[r.tier].label}</span>
                    {r.gender && <span className="note">{r.gender === 'female' ? 'féminine' : 'masculine'}</span>}
                  </span>
                </button>
                {isSel && <CheckIcon style={{ width: 22, height: 22, color: 'var(--primary)', flex: 'none' }} />}
              </div>
            );
          })}
        </div>
      )}

      {bestTier < 3 && (
        <div className="tip">
          <SparkleIcon />
          <span>
            {isIOS() ? (
              <>
                Pour une voix bien plus naturelle, télécharge une voix <b>Améliorée</b> ou <b>Premium</b> (gratuite) : Réglages ›
                Accessibilité › Contenu énoncé › Voix › Anglais. Ensuite, <b>ferme complètement Cadence</b> (balaye-la vers le haut
                dans le sélecteur d’apps) et rouvre-la : iOS ne montre les nouvelles voix qu’au redémarrage de l’app.
              </>
            ) : (
              <>Les voix « Natural » (Edge) ou « Premium » (iPhone, Mac) sont bien plus agréables. Installe-en une dans les réglages de ton appareil, puis reviens la choisir ici.</>
            )}
          </span>
        </div>
      )}

      <VoiceDiagnostic selectedId={selectedId} />
    </div>
  );
}

/** Toutes les voix anglaises que l'appareil donne à l'app, avec leur qualité réelle (pour comprendre un souci de voix). */
function VoiceDiagnostic({ selectedId }: { selectedId?: string }) {
  const english = allVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('en'))
    .sort((a, b) => voiceTier(b) - voiceTier(a) || a.name.localeCompare(b.name));
  return (
    <details className="note">
      <summary style={{ cursor: 'pointer', fontWeight: 800 }}>Diagnostic : {english.length} voix anglaises détectées</summary>
      <p style={{ margin: '8px 0' }}>
        Si ta voix téléchargée n’apparaît pas ici, iOS ne la donne pas aux applications web : ferme et rouvre Cadence, ou choisis une
        autre voix « Améliorée ».
      </p>
      <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {english.map((v) => (
          <li key={voiceId(v)} style={voiceId(v) === selectedId ? { color: 'var(--primary)', fontWeight: 800 } : undefined}>
            {v.name} ({v.lang}) · {TIER_LABELS[voiceTier(v)]}
            {isNovelty(v) ? ' · écartée (robotique)' : ''}
            {voiceId(v) === selectedId ? ' · utilisée' : ''}
            <br />
            <span style={{ opacity: 0.7, wordBreak: 'break-all' }}>{v.voiceURI}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
