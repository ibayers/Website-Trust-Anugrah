import { shouldDisplay, type ContentSlot } from '@/types/content';

// Pure helpers for turning ContentSlot values into render-ready strings/links.
// PRD §4 rule 2: mailto + wa.me only, no forms.
// PRD §4 rule 4 + §5.13: unconfirmed/TBD slots render null.

/** Returns the verified value or null. Same as getVerifiedValue but tree-shakeable. */
export function verifiedValue<T>(slot: ContentSlot<T>): T | null {
  return shouldDisplay(slot) ? slot.value : null;
}

/** Build a mailto: link. Returns null if the email slot is not Verified. */
export function mailtoLink(emailSlot: ContentSlot<string>, subject?: string): string | null {
  const email = verifiedValue(emailSlot);
  if (!email) return null;
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Build a wa.me link. Number must be international digits only (no "+", spaces, or dashes).
 * Returns null if the slot is TBD/Unconfirmed so CTAs can render an alternative action.
 */
export function waLink(numberSlot: ContentSlot<string>, text?: string): string | null {
  const raw = verifiedValue(numberSlot);
  if (!raw) return null;
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return null;
  if (!text) return `https://wa.me/${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

/** Format a phone number for display, returning null for non-verified slots. */
export function formatPhone(phoneSlot: ContentSlot<string>): string | null {
  return verifiedValue(phoneSlot);
}
