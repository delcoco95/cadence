import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate } from 'react-router-dom';
import { KCS, kcLabel } from '../../content/kcs';
import { EVIDENCE_LABELS, EVIDENCE_LEVELS } from '../../core/evidence';
import { STATE_LABELS } from '../../core/mastery';
import { ERROR_LABELS } from '../../core/errors';
import { learningStats, type KcReport } from '../../db/learning';
import { BackIcon } from '../../ui/Icons';
import { ProgressBar } from '../../ui/ProgressBar';

const STATE_CHIP: Record<string, string> = {
  learning: 'chip',
  practicing: 'chip amber',
  developing: 'chip accent',
  mastered: 'chip success',
};

const CAP_TEXT = {
  no_production: 'Plafonnée à 60 % : il manque des preuves de production (traduire, dire, écrire).',
  no_free_production: 'Plafonnée à 80 % : il manque de la production libre (réponse orale libre, tâche réelle).',
};

/** Détail honnête par notion : niveau de preuve, maîtrise, rétention, ce qui manque. */
export function ProgressScreen() {
  const navigate = useNavigate();
  const stats = useLiveQuery(() => learningStats());
  if (!stats) return null;

  const order = new Map(KCS.map((k, i) => [k.id, i]));
  const reports = [...stats.kcs].sort((a, b) => (order.get(a.kcId) ?? 999) - (order.get(b.kcId) ?? 999));

  return (
    <div className="screen full">
      <div className="row">
        <button className="icon-btn" aria-label="Retour" onClick={() => navigate(-1)}><BackIcon /></button>
        <h2>Détail par notion</h2>
      </div>
      <p className="small muted">
        La maîtrise vient surtout de la production (écrire, dire, réutiliser) ; la rétention indique si tu t’en souviens aujourd’hui.
      </p>

      {stats.persistent.length > 0 && (
        <section className="card stack">
          <h3>Difficultés persistantes</h3>
          {stats.persistent.map((p) => (
            <p key={p.kcId + p.tag} className="small">
              <b>{ERROR_LABELS[p.tag]}</b> · {kcLabel(p.kcId)} <span className="muted">— {p.count} fois en 14 jours</span>
            </p>
          ))}
        </section>
      )}

      {reports.length === 0 && <p className="muted">Fais une leçon pour voir apparaître tes notions.</p>}
      {reports.map((r) => <KcCard key={r.kcId} report={r} />)}
    </div>
  );
}

function KcCard({ report }: { report: KcReport }) {
  const s = report.summary;
  return (
    <section className="card stack" style={{ gap: 10 }}>
      <div className="row spread" style={{ alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: 16 }}>{kcLabel(report.kcId)}</h3>
        <span className={STATE_CHIP[s.state] ?? 'chip'}>{STATE_LABELS[s.state]}</span>
      </div>
      <div className="row spread small">
        <span>Maîtrise</span>
        <span className="muted">{s.confident && s.value !== null ? `${Math.round(s.value * 100)} %` : `pas assez de données (${s.observations})`}</span>
      </div>
      <ProgressBar value={s.value ?? 0} thin />
      {report.retention !== undefined && (
        <div className="row spread small">
          <span>Rétention aujourd’hui</span>
          <span className={report.retention < 0.7 ? '' : 'muted'} style={report.retention < 0.7 ? { color: 'var(--amber)' } : undefined}>
            {Math.round(report.retention * 100)} %
          </span>
        </div>
      )}
      <div className="evidence-grid">
        {EVIDENCE_LEVELS.map((e) => (
          <div key={e} className={`evidence${s.byLevel[e] === null ? ' empty' : ''}`}>
            <span>{EVIDENCE_LABELS[e]}</span>
            <b>{s.byLevel[e] === null ? '—' : `${Math.round(s.byLevel[e]! * 100)} %`}</b>
          </div>
        ))}
      </div>
      {s.cap && <p className="tiny muted" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>{CAP_TEXT[s.cap]}</p>}
    </section>
  );
}
