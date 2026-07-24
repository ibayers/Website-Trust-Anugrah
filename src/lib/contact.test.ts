import { describe, it, expect } from 'vitest';
import { mailtoLink, waLink, verifiedValue } from './contact';
import type { ContentSlot } from '@/types/content';

const verified = <T>(value: T): ContentSlot<T> => ({
  status: 'verified',
  value,
  source: 'test',
});

const unconfirmed = <T>(value: T): ContentSlot<T> => ({
  status: 'unconfirmed',
  value,
  reason: 'test',
});

const tbd: ContentSlot<string> = { status: 'tbd', reason: 'test' };

describe('contact helpers — anti-hallucination gate', () => {
  describe('verifiedValue', () => {
    it('returns value when Verified', () => {
      expect(verifiedValue(verified('cs@pt-trustap.com'))).toBe('cs@pt-trustap.com');
    });

    it('returns null when Unconfirmed', () => {
      expect(verifiedValue(unconfirmed('021-87702337'))).toBeNull();
    });

    it('returns null when TBD', () => {
      expect(verifiedValue(tbd)).toBeNull();
    });
  });

  describe('mailtoLink', () => {
    it('builds mailto: for Verified email', () => {
      expect(mailtoLink(verified('cs@pt-trustap.com'))).toBe('mailto:cs@pt-trustap.com');
    });

    it('appends URL-encoded subject when provided', () => {
      expect(mailtoLink(verified('cs@pt-trustap.com'), 'Quote Request')).toBe(
        'mailto:cs@pt-trustap.com?subject=Quote%20Request',
      );
    });

    it('returns null for non-verified slot (gate closes)', () => {
      expect(mailtoLink(unconfirmed('x@example.com'))).toBeNull();
      expect(mailtoLink(tbd)).toBeNull();
    });
  });

  describe('waLink', () => {
    it('builds wa.me link from raw international format', () => {
      expect(waLink(verified('62 812 3456 7890'))).toBe('https://wa.me/6281234567890');
    });

    it('strips non-digits (dashes, plus, spaces)', () => {
      expect(waLink(verified('+62-812-3456-7890'))).toBe('https://wa.me/6281234567890');
    });

    it('appends URL-encoded text when provided', () => {
      expect(waLink(verified('6281234567890'), "I'd like a quote")).toBe(
        "https://wa.me/6281234567890?text=I'd%20like%20a%20quote",
      );
    });

    it('returns null when slot is TBD (PRD §7 Q1 blocked)', () => {
      expect(waLink(tbd)).toBeNull();
    });
  });
});
