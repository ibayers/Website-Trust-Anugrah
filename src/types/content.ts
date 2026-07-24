// Anti-hallucination type system — PRD §1 "Rules of engagement".
// Status of every content slot must be explicit at the type level.
//
// ✅ Verified<T>   — traceable to a backup file. Safe to render.
// ⚠️ Unconfirmed<T> — plausible but needs client sign-off. Render only behind a gate.
// TBD               — needs client input. Never render.
//
// Fabricated content has NO type-level path. The design HTML's fake stats
// ("142 Units", "00 Safety Incidents", "Industry Leader since 2005") cannot
// be expressed here without lying in the type. That is the point.

export type Verified<T> = { status: 'verified'; value: T; source: string };
export type Unconfirmed<T> = { status: 'unconfirmed'; value: T; reason: string };
export type TBD = { status: 'tbd'; reason: string };

export type ContentSlot<T> = Verified<T> | Unconfirmed<T> | TBD;

// Render gate — PRD §4 rule 4: only Verified ships; Unconfirmed/TBD render null.
export function shouldDisplay<T>(slot: ContentSlot<T>): slot is Verified<T> {
  return slot.status === 'verified';
}

export function getVerifiedValue<T>(slot: ContentSlot<T>): T | null {
  return shouldDisplay(slot) ? slot.value : null;
}
