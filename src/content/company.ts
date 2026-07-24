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
