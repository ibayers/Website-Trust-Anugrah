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
 * Build a WhatsApp click-to-chat link. Number must be international digits only (no "+", spaces, or dashes).
 * Uses api.whatsapp.com/send? — same behavior on mobile + desktop, and the text draft is preserved on web.
 * Returns null if the slot is TBD/Unconfirmed so CTAs can render an alternative action.
 */
export function waLink(numberSlot: ContentSlot<string>, text?: string): string | null {
  const raw = verifiedValue(numberSlot);
  if (!raw) return null;
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return null;
  const base = `https://api.whatsapp.com/send?phone=${digits}`;
  if (!text) return base;
  return `${base}&text=${encodeURIComponent(text)}`;
}

/** Format a phone number for display, returning null for non-verified slots. */
export function formatPhone(phoneSlot: ContentSlot<string>): string | null {
  return verifiedValue(phoneSlot);
}
