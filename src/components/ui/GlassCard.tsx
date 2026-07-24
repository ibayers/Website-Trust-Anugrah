import { type ReactNode } from 'react';

// Design HTML canonical glass-panel: bg rgba(16,20,22,0.4) + backdrop-blur(20px) + light-stroke top/left.
// See globals.css `.glass-panel` — utility class is the source of truth, this just composes it.
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

export function GlassCard({ children, className = '', as: Tag = 'div' }: GlassCardProps) {
  return (
    <Tag className={`glass-panel rounded-xl border border-outline-variant/30 ${className}`}>
      {children}
    </Tag>
  );
}
