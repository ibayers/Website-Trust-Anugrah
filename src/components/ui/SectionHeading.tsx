import { type ReactNode } from 'react';

// Design pattern: thin orange tick + mono eyebrow, then big headline + muted subtitle.
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-12 h-[2px] bg-secondary" />
          <span className="font-label-technical text-secondary tracking-widest uppercase">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 leading-tight">{title}</h2>
      {subtitle && <p className="text-on-surface-variant text-body-lg">{subtitle}</p>}
    </div>
  );
}
