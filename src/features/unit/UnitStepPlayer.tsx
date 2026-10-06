import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { UNITS } from '../../content';
import type { SessionItem } from '../../core/session';
import { CHALLENGE_PASS } from '../../core/units';
import { prepareChallenge, prepareUnitPractice } from '../../db/learning';
import { completePractice, nextStep, recordChallenge, stepPath, type ChallengeOutcome } from '../../db/units';
import { ExerciseRunner, type RunSummary } from '../lesson/ExerciseRunner';
import { GoalBanner } from '../lesson/GoalBanner';
import { SessionSummary } from '../lesson/SessionSummary';
import { useActiveTime } from '../lesson/useActiveTime';
import { Confetti } from '../../ui/Confetti';
import { Mascot, MascotSays } from '../../ui/Mascot';
import { ProgressBar } from '../../ui/ProgressBar';
import { sfx } from '../../ui/sfx';
import { useProfileText } from '../../ui/profile';
import { unitLabel, unitStyle } from '../../ui/units';
import { CheckIcon, CloseIcon, CrownIcon, DumbbellIcon, TargetIcon, TrophyIcon } from '../../ui/Icons';

type Kind = 'practice' | 'challenge';

export function UnitStepPlayer() {
  const { unitId = '', kind: rawKind } = useParams();
  const [search] = useSearchParams();
  const jump = search.get('jump') === '1';
  const kind: Kind = rawKind === 'challenge' ? 'challenge' : 'practice';
  const unit = UNITS.find((u) => u.id === unitId);
  const navigate = useNavigate();
  const p = useProfileText();
  const [items, setItems] = useState<SessionItem[] | null>(null);
  const [phase, setPhase] = useState<'intro' | 'run' | 'done'>('intro');
  const [summary, setSummary] = useState<RunSummary | null>(null);
  const [outcome, setOutcome] = useState<ChallengeOutcome | null>(null);
  const [goalBanner, setGoalBanner] = useState(false);
  const ping = useActiveTime(() => setGoalBanner(true));

  useEffect(() => {
    void (kind === 'challenge' ? prepareChallenge(unitId) : prepareUnitPractice(unitId)).then(setItems);
  }, [kind, unitId]);

  if (!unit) {
    return (
      <div className="screen full">
        <p>Unité introuvable.</p>
        <Link className="btn secondary" to="/path">Retour au parcours</Link>
      </div>
    );
  }

  async function onFinish(s: RunSummary) {
    setSummary(s);
    if (kind === 'practice') {
      await completePractice(unitId, s.xp);
    } else {
      const o = await recordChallenge(unitId, s.score, s.xp, jump);
      setOutcome(o);
      if (o.passed) sfx.complete();
    }
    setPhase('done');
  }

  if (phase === 'done' && summary) {
    if (kind === 'practice') return <SessionSummary title={`Entraînement · ${unit.title}`} summary={summary} />;
    if (outcome) return <ChallengeResult unitId={unitId} summary={summary} outcome={outcome} jump={jump} />;
  }

  if (phase === 'run' && items) {
    return (
      <div style={unitStyle(unitId)}>
        <ExerciseRunner
          items={items}
          context={kind === 'challenge' ? 'checkpoint' : 'drill'}
          onExit={() => navigate('/path')}
          onFinish={(s) => void onFinish(s)}
          onActivity={ping}
          banner={goalBanner && <GoalBanner onClose={() => setGoalBanner(false)} />}
        />
      </div>
    );
  }

  const isChallenge = kind === 'challenge';
  return (
    <div className="screen full" style={unitStyle(unitId)}>
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Fermer" onClick={() => navigate('/path')}><CloseIcon /></button>
      </div>
      <section className="cta-card" style={{ gap: 10 }}>
        <p className="tiny">{unitLabel(unitId)} · {unit.title}</p>
        <div className="row">
          <span className="icon-tile" style={{ background: 'rgb(255 255 255 / .2)', color: '#fff' }}>
            {isChallenge ? <TrophyIcon /> : <DumbbellIcon />}
          </span>
          <h1 style={{ fontSize: 27 }}>{isChallenge ? (jump ? 'Sauter jusqu’ici' : 'Défi de l’unité') : 'Entraînement'}</h1>
        </div>
        <p>
          {isChallenge
            ? `${items?.length ?? '…'} questions inédites, sans aide. Il faut ${Math.round(CHALLENGE_PASS * 100)} % de bonnes réponses.`
            : `${items?.length ?? '…'} exercices qui mélangent toutes les notions de l’unité.`}
        </p>
      </section>

      {isChallenge ? (
        <>
          <MascotSays mood="think" size={72}>
            {jump
              ? p.t('Tu penses déjà maîtriser ça ? Réussis ce défi et tu sautes directement ici, avec les unités d’avant validées !')
              : p.t('Dernière étape avant l’unité suivante. Montre-moi ce que tu as appris, je suis sûr que tu es {prêt|prête|prêt·e} !')}
          </MascotSays>
          {unit.canDo && unit.canDo.length > 0 && (
            <section className="card stack" style={{ gap: 10 }}>
              <h3>Ce que tu vas prouver</h3>
              {unit.canDo.map((c) => <p key={c} className="can-do small"><CheckIcon />{c}</p>)}
            </section>
          )}
        </>
      ) : (
        <MascotSays mood="happy" size={72}>
          Mélanger les notions, c’est ce qui fait vraiment retenir : il faut choisir la bonne règle à chaque fois. Ensuite, place au défi !
        </MascotSays>
      )}

      <div className="bottom-action">
        <button className={`btn${isChallenge ? ' sun' : ''}`} disabled={!items || items.length === 0} onClick={() => setPhase('run')}>
          {isChallenge ? 'Relever le défi' : 'Commencer'}
        </button>
      </div>
    </div>
  );
}

function ChallengeResult({ unitId, summary, outcome, jump }: { unitId: string; summary: RunSummary; outcome: ChallengeOutcome; jump: boolean }) {
  const navigate = useNavigate();
  const p = useProfileText();
  const unit = UNITS.find((u) => u.id === unitId)!;
  const nextUnit = UNITS[UNITS.findIndex((u) => u.id === unitId) + 1];
  const pct = Math.round(summary.score * 100);
  const [next, setNext] = useState<string | null>(null);
  useEffect(() => {
    void nextStep().then((s) => setNext(s ? stepPath(s) : null));
  }, []);

  if (outcome.passed) {
    return (
      <div className="screen full" style={unitStyle(unitId)}>
        <Confetti />
        <div className="stack" style={{ alignItems: 'center', textAlign: 'center', gap: 12, marginTop: 20 }}>
          <div style={{ position: 'relative' }}>
            <Mascot mood="cheer" size={140} />
            <CrownIcon style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', width: 44, height: 44, color: 'var(--sun)' }} />
          </div>
          <p className="tiny muted">{unit.title}</p>
          <h1 className="pop" style={{ color: 'var(--sun-dark)' }}>Unité validée !</h1>
          <p style={{ fontWeight: 700 }}>
            {pct} % de bonnes réponses.{' '}
            {jump && outcome.validated.length > 1
              ? `${outcome.validated.length} unités validées d’un coup !`
              : nextUnit && nextUnit.cefr !== unit.cefr
                ? `Niveau ${unit.cefr} terminé ! Le niveau ${nextUnit.cefr} est débloqué.`
                : nextUnit
                  ? `L’unité « ${nextUnit.title} » est débloquée.`
                  : p.t('Tu as terminé tout le parcours, de A2 à C2. Bravo !')}
          </p>
        </div>
        <section className="card stack" style={{ gap: 10 }}>
          {unit.canDo?.map((c) => <p key={c} className="can-do small"><CheckIcon />{c}</p>)}
        </section>
        <div className="bottom-action stack">
          {next && <Link className="btn" to={next} replace>Étape suivante</Link>}
          <Link className="btn secondary" to="/path" replace>Voir le parcours</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="screen full" style={unitStyle(unitId)}>
      <div className="stack" style={{ alignItems: 'center', textAlign: 'center', gap: 12, marginTop: 20 }}>
        <Mascot mood="sad" size={120} />
        <h1>Presque !</h1>
        <p style={{ fontWeight: 700 }}>
          Tu as obtenu {pct} %, il en faut {Math.round(CHALLENGE_PASS * 100)} pour valider.{' '}
          {pct >= 50
            ? 'Tu n’es pas loin, et chaque essai te fait progresser.'
            : 'C’est encore un peu tôt : un entraînement de plus, et tu verras la différence.'}
        </p>
      </div>
      <section className="card stack score-meter" style={{ gap: 8 }}>
        <div className="row spread small"><b>Ton score</b><span className="muted">objectif {Math.round(CHALLENGE_PASS * 100)} %</span></div>
        <div style={{ position: 'relative' }}>
          <ProgressBar value={summary.score} tone="sun" />
          <span className="mark" style={{ left: `${CHALLENGE_PASS * 100}%` }} />
        </div>
        <p className="note">Les notions ratées sont ajoutées à tes révisions. Un petit entraînement, puis retente le défi !</p>
      </section>
      <div className="bottom-action stack">
        <button className="btn" onClick={() => navigate(`/unit/${unitId}/practice`, { replace: true })}>
          <TargetIcon />S’entraîner encore
        </button>
        <button className="btn secondary" onClick={() => navigate(`/unit/${unitId}/challenge${jump ? '?jump=1' : ''}`, { replace: true })}>
          Retenter le défi
        </button>
      </div>
    </div>
  );
}
