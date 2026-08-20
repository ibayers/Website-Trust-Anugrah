import type { Verified } from '@/types/content';

// PRD §3 — all values Verified against backup HTML files.
// Source refs in `source` field trace each fact to its origin file.

export const company = {
  legalName: {
    status: 'verified' as const,
    value: 'PT. TRUST ANUGRAH PERSADA',
    source: 'Gallery.html',
  } satisfies Verified<string>,
  tagline: {
    status: 'verified' as const,
    value: 'Your Trusty Partners',
    source: 'index.html L144',
  } satisfies Verified<string>,
  motto: {
    status: 'verified' as const,
    value: 'Safety is Number 1!',
    source: 'index.html L107',
  } satisfies Verified<string>,
  foundingNarrative: {
    status: 'verified' as const,
    value:
      'Experienced since 1985. CV established October 9, 1993. Incorporated as PT on October 13, 1998. PT. TRUST ANUGRAH PERSADA is engaged in equipment services, construction services, installation services, mechanical and suppliers.',
    source: 'Gallery.html + index.html L107',
  } satisfies Verified<string>,
  coreBusiness: {
    status: 'verified' as const,
    value: [
      'Equipment services',
      'Construction services',
      'Installation services',
      'Mechanical & suppliers',
    ] as readonly string[],
    source: 'Gallery.html',
  } satisfies Verified<readonly string[]>,
} as const;

// Indonesian counterparts of the verified English fields above.
// Translations derived from `company` (source of truth); keyed identically
// so pages can pick via `lang === 'id' ? companyId : verifiedValue(company.x)`.
export const companyId = {
  tagline: 'Mitra Terpercaya Anda',
  motto: 'Keselamatan Nomor 1!',
  foundingNarrative:
    'Berpengalaman sejak 1985. CV berdiri pada 9 Oktober 1993. Menjadi PT pada 13 Oktober 1998. PT. TRUST ANUGRAH PERSADA bergerak di bidang jasa peralatan, jasa konstruksi, jasa instalasi, mekanikal dan supplier.',
  coreBusiness: [
    'Jasa peralatan',
    'Jasa konstruksi',
    'Jasa instalasi',
    'Mekanikal & supplier',
  ] as readonly string[],
} as const;
