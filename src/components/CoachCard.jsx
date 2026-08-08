import { useEffect, useState } from 'react';
import { BrainCircuit, RefreshCw } from 'lucide-react';

export default function CoachCard({ day = 12 }) {
  const [state, setState] = useState({ loading: true, guidance: '', memories: [], error: '' });
  const loadCoach = async () => {
    setState(current => ({ ...current, loading: true, error: '' }));
    try {
      const response = await fetch(`/api/coach?day=${day}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to reach your coach.');
      setState({ loading: false, guidance: data.guidance, memories: data.memories, error: '' });
    } catch (error) { setState({ loading: false, guidance: '', memories: [], error: error.message }); }
  };
  useEffect(() => { loadCoach(); }, [day]);
  return <section className="coach-card" aria-live="polite"><div className="coach-card__icon"><BrainCircuit size={23} /></div><div className="coach-card__body"><p className="eyebrow">BREETH MEMORY · AI COACH</p><h2>Your next best move</h2>{state.loading && <p>Checking your learning context…</p>}{state.error && <p className="coach-card__error">{state.error}</p>}{state.guidance && <p>{state.guidance}</p>}{state.memories.length > 0 && <p className="coach-card__memory">Remembered: {state.memories[0]}</p>}</div><button className="coach-card__refresh" onClick={loadCoach} disabled={state.loading} aria-label="Refresh AI coaching guidance"><RefreshCw size={18} className={state.loading ? 'spinning' : ''} /></button></section>;
}
