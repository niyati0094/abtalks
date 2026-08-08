import { Check, ChevronRight, Flame, Home, LayoutDashboard, UserRound } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `button button--${variant} ${className}`;
  return to ? <Link className={classes} to={to}>{children}<ChevronRight size={18} /></Link> : <button className={classes} {...props}>{children}</button>;
}

export function Logo() { return <Link className="logo" to="/"><span className="logo__mark">A</span>ABTalks</Link>; }
export function Card({ children, className = '' }) { return <section className={`card ${className}`}>{children}</section>; }

export function ProgressBar({ value, label }) { return <div className="progress" aria-label={label || `${value}% complete`}><div className="progress__bar"><span style={{ width: `${value}%` }} /></div></div>; }

export function StreakBadge({ streak = 12, compact = false }) { return <div className={`streak-badge ${compact ? 'streak-badge--compact' : ''}`}><Flame size={compact ? 17 : 22} fill="currentColor" /><strong>{streak}</strong><span>day streak</span></div>; }

export function StatusBadge({ children, type = 'neutral' }) { return <span className={`status status--${type}`}>{children}</span>; }

export function BottomNav() {
  return <nav className="bottom-nav" aria-label="Primary navigation">
    <NavLink to="/"><Home size={19} /><span>Home</span></NavLink>
    <NavLink to="/day/12"><Flame size={19} /><span>Challenge</span></NavLink>
    <NavLink to="/dashboard"><LayoutDashboard size={19} /><span>Progress</span></NavLink>
    <a href="#profile" onClick={(e) => e.preventDefault()}><UserRound size={19} /><span>Profile</span></a>
  </nav>;
}

export function ChecklistItem({ item, onToggle, locked = false }) {
  return <button className={`check-item ${item.complete ? 'check-item--done' : ''}`} onClick={() => !locked && onToggle?.(item.id)} aria-pressed={item.complete} disabled={locked}>
    <span className="check-item__box">{item.complete && <Check size={15} strokeWidth={3} />}</span><span>{item.label}</span>
  </button>;
}
