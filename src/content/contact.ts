import type { ContentSlot, Verified } from '@/types/content';

// PRD §3 + §5.11. All values Verified against Contact_Us.html unless marked Unconfirmed.
// WhatsApp resolved 2026-07-25 (PRD §7 Q1). Phone/fax still pending sign-off (Q2/Q3).

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
    status: 'verified' as const,
    // ponytail: client gave 08121896949 (local format). wa.me butuh internasional tanpa leading 0 → 628121896949.
    value: '628121896949',
    source: 'Client-supplied 2026-07-25 (PRD §7 Q1 resolved)',
  } satisfies Verified<string>,
  address: {
    status: 'verified' as const,
    value: {
      street: 'Kp. Kebayunan RT.02 RW.016',
      city: 'Kel. Tapos, Kec. Tapos',
      postal: 'Depok, Jawa Barat',
    } as Address,
    source: 'Client-supplied 2026-07-27 (PRD §7 Q4 resolved)',
  } satisfies Verified<Address>,
} as const;

export type Contact = typeof contact;
export type AddressSlot = ContentSlot<Address>;
