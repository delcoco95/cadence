import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UNITS } from '../../content';
import { SECTIONS, type PlacementBand, type PlacementResult } from '../../core/placement';
import { applyPlacement } from '../../db/units';
import { Confetti } from '../../ui/Confetti';
import { Mascot } from '../../ui/Mascot';
import { useProfileText } from '../../ui/profile';
import { CheckIcon } from '../../ui/Icons';

/** Descripteurs globaux, reformulés d'après l'échelle globale du CECRL (Conseil de l'Europe). */
export const BAND_DESCRIPTORS: Record<PlacementBand, string> = {
  A1: 'Tu comprends et utilises des expressions familières et des phrases très simples pour des besoins concrets.',
  A2: 'Tu échanges sur des sujets simples et familiers : toi, ta famille, les achats, le travail, ton quartier.',
  'A2+': 'Tu échanges sur des sujets familiers avec plus d’aisance, et tu racontes simplement ce qui s’est passé.',
  B1: 'Tu te débrouilles dans la plupart des situations du quotidien et du voyage, tu racontes et donnes ton avis.',
  'B1+': 'Tu suis une discussion sur des sujets connus et tu expliques tes idées avec une certaine aisance.',
  B2: 'Tu comprends l’essentiel de textes complexes et tu échanges avec spontanéité avec des anglophones.',
  'B2+': 'Tu argumentes avec nuance et tu adaptes ton registre à la situation.',
  C1: 'Tu t’exprimes couramment et de façon structurée, y compris dans un cadre professionnel exigeant.',
  C2: 'Tu comprends pratiquement tout et tu t’exprimes avec finesse, presque comme un natif.',
};

const SCALE: PlacementBand[] = ['A1', 'A2', 'A2+', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];
const bandRatio = (b: PlacementBand) => (SCALE.indexOf(b) + 1) / SCALE.length;

export function PlacementResultView({ result, id, durationMs }: { result: PlacementResult; id: number; durationMs: number }) {
  const navigate = useNavigate();
  const p = useProfileText();
  const [busy, setBusy] = useState(false);
  const skipped = result.testedOutUnits.map((u) => UNITS.find((x) => x.id === u)!).filter(Boolean);
  const startUnit = UNITS.find((u) => !result.testedOutUnits.includes(u.id));
  const allDone = !startUnit;
  const minutes = Math.max(1, Math.round(durationMs / 60_000));

  async function accept() {
    setBusy(true);
    await applyPlacement(id);
    navigate('/path', { replace: true });
  }

  return (
    <div className="screen full">
      <Confetti />
      <div className="stack" style={{ alignItems: 'center', textAlign: 'center', gap: 12, marginTop: 12 }}>
        <Mascot mood="cheer" size={110} />
        <p className="tiny muted">Ton niveau estimé</p>
        <div className="band-reveal">{result.band}</div>
        <p style={{ fontWeight: 700, maxWidth: 380 }}>{BAND_DESCRIPTORS[result.band]}</p>
        <p className="note">Test terminé en {minutes} min · {SECTIONS.reduce((a, s) => a + (result.sections[s.section]?.n ?? 0), 0)} questions</p>
      </div>

      <section className="card stack" style={{ gap: 12 }}>
        <h3>Ton profil par compétence</h3>
        {SECTIONS.map((s) => {
          const r = result.sections[s.section];
          if (!r) return null;
          return (
            <div key={s.section} className="skill-row">
              <b>{s.label}</b>
              <div className="bar primary thin"><i style={{ width: `${bandRatio(r.band) * 100}%` }} /></div>
              <span>{r.band}</span>
            </div>
          );
        })}
        <p className="note">Estimation sur l’échelle européenne CECRL, à partir des réponses à ce test. Ce n’est pas une certification officielle.</p>
      </section>

      <section className="card stack" style={{ gap: 10 }}>
        {skipped.length > 0 ? (
          <>
            <h3>{p.t('Bonne nouvelle, tu es déjà {avancé|avancée|avancé·e} !')}</h3>
            <p className="small">Tu as prouvé ces bases : tu peux sauter {skipped.length === 1 ? 'cette unité' : `ces ${skipped.length} unités`}.</p>
            {skipped.map((u) => (
              <p key={u.id} className="can-do small"><CheckIcon />{u.title}</p>
            ))}
            {allDone ? (
              <p className="note">Tout le parcours est validé : les révisions et les défis entretiennent tes acquis.</p>
            ) : (
              <p className="small">Tu commenceras au niveau <b>{startUnit!.cefr}</b>, unité <b>{startUnit!.title}</b>.</p>
            )}
          </>
        ) : (
          <>
            <h3>Ton point de départ</h3>
            <p className="small">On commence par les bases A2 : chaque unité se termine par un défi, et tu avances à ton rythme.</p>
          </>
        )}
      </section>

      <div className="bottom-action stack">
        {skipped.length > 0 ? (
          <>
            <button className="btn" disabled={busy} onClick={() => void accept()}>
              {allDone ? 'Valider le parcours' : `Commencer en ${startUnit!.cefr} : « ${startUnit!.title} »`}
            </button>
            <button className="btn secondary" onClick={() => navigate('/path', { replace: true })}>Tout reprendre depuis le début</button>
          </>
        ) : (
          <button className="btn" onClick={() => navigate('/path', { replace: true })}>Voir mon parcours</button>
        )}
      </div>
    </div>
  );
}
