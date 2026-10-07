import { useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACEMENT_ITEMS, type PlacementExercise } from '../../content/placement';
import { UNITS } from '../../content';
import { gradeExercise, type ExerciseResponse } from '../../core/exercise';
import {
  MAX_ITEMS, SECTIONS, nextPlacementItem, placementResult, type PlacementResponse, type PlacementResult, type PlacementSection,
} from '../../core/placement';
import { genderizeDeep } from '../../core/gender';
import { useSettings } from '../../db/hooks';
import { savePlacement } from '../../db/units';
import { useSpeaker } from '../../speech/useSpeaker';
import { ExerciseView } from '../lesson/ExerciseView';
import { useActiveTime } from '../lesson/useActiveTime';
import { Mascot, MascotSays } from '../../ui/Mascot';
import { ProgressBar } from '../../ui/ProgressBar';
import { sfx } from '../../ui/sfx';
import { useProfileText } from '../../ui/profile';
import { BookIcon, ChatIcon, ClockIcon, CloseIcon, HeadphonesIcon, LetterIcon } from '../../ui/Icons';
import { PlacementResultView } from './PlacementResult';

const SECTION_ICONS: Record<PlacementSection, ReactNode> = {
  grammar: <LetterIcon />,
  vocabulary: <BookIcon />,
  reading: <ChatIcon />,
  listening: <HeadphonesIcon />,
};

const SECTION_LINES: Record<PlacementSection, string> = {
  grammar: 'Des phrases à compléter. Les questions s’adaptent à tes réponses.',
  vocabulary: 'Le bon mot au bon endroit.',
  reading: 'De courts documents de la vie réelle : messages, annonces, articles.',
  listening: 'Monte le son ! Tu peux réécouter autant de fois que tu veux.',
};

type Phase = 'intro' | 'section' | 'question' | 'result';

export function PlacementTest() {
  const navigate = useNavigate();
  const settings = useSettings();
  const profile = useProfileText();
  const ping = useActiveTime();
  const [phase, setPhase] = useState<Phase>('intro');
  const [responses, setResponses] = useState<PlacementResponse[]>([]);
  const [item, setItem] = useState<PlacementExercise | null>(null);
  const [answer, setAnswer] = useState<ExerciseResponse | null>(null);
  const [result, setResult] = useState<{ result: PlacementResult; id: number } | null>(null);
  const startedAt = useRef(Date.now());

  const say = useSpeaker(ping);

  const pool = useMemo(() => PLACEMENT_ITEMS.map((e) => ({ ...e.placement, exercise: e })), []);

  function advance(nextResponses: PlacementResponse[]) {
    const next = nextPlacementItem(nextResponses, pool);
    if (!next) {
      void finish(nextResponses);
      return;
    }
    const changed = !item || next.section !== item.placement.section;
    setItem(next.exercise);
    setAnswer(null);
    setPhase(changed ? 'section' : 'question');
  }

  async function finish(all: PlacementResponse[]) {
    const r = placementResult(all, UNITS);
    const id = await savePlacement(r, all);
    sfx.complete();
    setResult({ result: r, id });
    setPhase('result');
  }

  function submit(dontKnow = false) {
    if (!item || (!answer && !dontKnow)) return;
    const correct = !dontKnow && !!answer && gradeExercise(item, answer).verdict === 'correct';
    sfx.tap();
    const r: PlacementResponse = { ...item.placement, correct };
    const next = [...responses, r];
    setResponses(next);
    advance(next);
  }

  if (phase === 'result' && result) {
    return <PlacementResultView result={result.result} id={result.id} durationMs={Date.now() - startedAt.current} />;
  }

  const sectionIndex = item ? SECTIONS.findIndex((s) => s.section === item.placement.section) : 0;

  if (phase === 'intro') {
    return (
      <div className="screen full">
        <div className="lesson-top">
          <button className="icon-btn" aria-label="Fermer" onClick={() => navigate(-1)}><CloseIcon /></button>
        </div>
        <div className="ob-body" style={{ alignItems: 'center', textAlign: 'center' }}>
          <Mascot mood="think" size={130} />
          <h1>Test de niveau</h1>
          <p className="muted" style={{ fontWeight: 700 }}>
            {profile.t('{Prêt|Prête|Prêt·e}')} à découvrir ton niveau d’anglais ? Le test s’adapte à toi : plus tu réussis, plus les questions montent en niveau.
          </p>
          <div className="card stack" style={{ textAlign: 'left', width: '100%', gap: 10 }}>
            <div className="row"><span className="icon-tile tone-primary"><ClockIcon /></span><p className="small"><b>Environ 10 minutes</b>, {MAX_ITEMS} questions au plus, en 4 parties.</p></div>
            <div className="row"><span className="icon-tile tone-sky"><HeadphonesIcon /></span><p className="small"><b>Une partie d’écoute</b> : mets le son ou tes écouteurs.</p></div>
            <div className="row"><span className="icon-tile tone-sun"><LetterIcon /></span><p className="small"><b>Pas de correction pendant le test.</b> Si tu ne sais pas, dis-le : deviner fausse le résultat.</p></div>
          </div>
          <p className="note">
            Inspiré du format des tests de placement officiels (Cambridge, Oxford, EF SET) et de l’échelle européenne CECRL.
            Questions originales. Le résultat est une estimation, pas une certification.
          </p>
        </div>
        <div className="bottom-action">
          <button className="btn" onClick={() => advance([])}>Commencer le test</button>
        </div>
      </div>
    );
  }

  if (!item) return null;
  const section = SECTIONS[sectionIndex];
  const shown = genderizeDeep(item, profile.gender);

  return (
    <div className="screen full">
      <div className="lesson-top">
        <button className="icon-btn" aria-label="Quitter le test" onClick={() => navigate(-1)}><CloseIcon /></button>
        <ProgressBar value={responses.length / MAX_ITEMS} tone="primary" label="Progression du test" />
      </div>

      {phase === 'section' ? (
        <>
          <div className="card section-card pop">
            <div className="section-dots">{SECTIONS.map((s, i) => <i key={s.section} className={i <= sectionIndex ? 'on' : ''} />)}</div>
            <span className="icon-tile tone-primary" style={{ width: 64, height: 64, borderRadius: 20 }}>{SECTION_ICONS[section.section]}</span>
            <p className="tiny muted">Partie {sectionIndex + 1} sur {SECTIONS.length}</p>
            <h1>{section.label}</h1>
            <p className="muted" style={{ fontWeight: 700 }}>{SECTION_LINES[section.section]}</p>
          </div>
          <MascotSays mood="happy" size={70}>{sectionIndex === 0 ? 'C’est parti, je suis avec toi !' : 'Bien avancé ! On continue.'}</MascotSays>
          <div className="bottom-action">
            <button className="btn" onClick={() => setPhase('question')}>Continuer</button>
          </div>
        </>
      ) : (
        <>
          <span className="chip primary source-chip">{SECTION_ICONS[section.section]}{section.label}</span>
          <ExerciseView
            key={item.id}
            exercise={shown}
            locked={false}
            onChange={setAnswer}
            onSubmit={() => submit()}
            say={say}
            lang={settings?.accent ?? 'en-US'}
            onSkipSpeaking={() => undefined}
            shuffleSeed={`${item.id}-${startedAt.current}`}
          />
          <div className="bottom-action stack" style={{ gap: 4 }}>
            <button className="btn" disabled={!answer} onClick={() => submit()}>Valider</button>
            <button className="btn ghost" onClick={() => submit(true)}>Je ne sais pas</button>
          </div>
        </>
      )}
    </div>
  );
}
