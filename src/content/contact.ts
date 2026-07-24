import type { ContentSlot, Verified, TBD } from '@/types/content';

// PRD §3 + §5.11. All values Verified against Contact_Us.html unless marked TBD.
// WhatsApp number blocked on client input (PRD §7 Q1).

type Address = {
  street: string;
  city: string;
  postal: string;
};

export const contact = {
  email: {
    status: 'verified' as const,
    value: 'cs@pt-trustap.com',
    source: 'Contact_Us.html',
  } satisfies Verified<string>,
  emailSecondary: {
    status: 'verified' as const,
    value: 'pt.trust_anugrah_persada@engineer.com',
    source: 'Contact_Us.html',
  } satisfies Verified<string>,
  phoneLocal: {
    status: 'unconfirmed' as const,
    value: '021-87702337',
    reason: 'Legacy 2017 number — confirm still active (PRD §7 Q2)',
  },
  phoneIntl: {
    status: 'unconfirmed' as const,
    value: '622187702337',
    reason: 'Legacy 2017 number — confirm still active (PRD §7 Q2)',
  },
  faxLocal: {
    status: 'unconfirmed' as const,
    value: '021-8700119',
    reason: 'Legacy 2017 fax — confirm still in use (PRD §7 Q3)',
  },
  faxIntl: {
    status: 'unconfirmed' as const,
    value: '62218700119',
    reason: 'Legacy 2017 fax — confirm still in use (PRD §7 Q3)',
  },
  whatsapp: {
    status: 'tbd' as const,
    reason: 'Awaiting client-supplied number in international format (PRD §7 Q1)',
  } satisfies TBD,
  address: {
    status: 'verified' as const,
    value: {
      street: 'Jl. Kelapa Dua Wetan No.1',
      city: 'Jakarta Timur, DKI Jakarta',
      postal: '13730',
    } as Address,
    source: 'Contact_Us.html (map URL: city=Jakarta Timur, pin=13730)',
  } satisfies Verified<Address>,
} as const;

export type Contact = typeof contact;
export type AddressSlot = ContentSlot<Address>;
