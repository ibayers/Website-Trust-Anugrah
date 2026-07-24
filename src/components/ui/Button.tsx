import Link from 'next/link';
import { type ReactNode } from 'react';

// Design HTML (home_modernized + tower_crane_modernized) canonical button classes.
// 3 variants only. No polymorphic asChild — premature abstraction for this site.
type Variant = 'primary' | 'secondary' | 'technical';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:brightness-110 transition-all shadow-glow',
  secondary:
    'border border-outline-variant text-on-surface hover:bg-white/5 transition-colors rounded-lg',
  technical:
    'border border-tertiary text-tertiary font-label-technical hover:bg-tertiary/10 transition-colors rounded',
};

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export function Button({ variant = 'primary', className = '', children, href, external, onClick, type = 'button', ariaLabel }: ButtonProps) {
  const cls = `px-6 py-2 font-headline-md text-body-md inline-flex items-center justify-center gap-2 ${VARIANTS[variant]} ${className}`;
  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
