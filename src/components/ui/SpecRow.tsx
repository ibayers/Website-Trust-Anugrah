// Design pattern: spec-sheet row with alternating background, mono label + value.
// Used on Tower Crane, Genset, Material Lift spec tables.
interface SpecRowProps {
  label: string;
  value: string;
  alt?: boolean;
}

export function SpecRow({ label, value, alt = false }: SpecRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 font-label-technical text-xs ${
        alt ? 'bg-surface-container-low/40' : 'bg-transparent'
      }`}
    >
      <span className="text-on-surface-variant uppercase tracking-widest">{label}</span>
      <span className="text-on-surface font-medium">{value}</span>
    </div>
  );
}
