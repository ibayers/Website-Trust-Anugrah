import { shouldDisplay, type ContentSlot } from '@/types/content';

// PRD §4 rule 4 + §5.13: stats counters in design HTML are fabricated
// ("142 Units", "00 Safety Incidents", "Industry Leader since 2005").
// This component renders null for anything not Verified — the type system
// makes fabrication impossible to express.
interface StatCounterProps {
  slot: ContentSlot<string>;
  label: string;
}

export function StatCounter({ slot, label }: StatCounterProps) {
  if (!shouldDisplay(slot)) return null;
  return (
    <div className="flex flex-col gap-1">
      <span className="font-headline-lg text-headline-lg text-secondary">{slot.value}</span>
      <span className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs">
        {label}
      </span>
    </div>
  );
}
