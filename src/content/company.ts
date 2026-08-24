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
      'Experienced since 1985. PT. TRUST ANUGRAH PERSADA is engaged in equipment lifting services, man power services, installation services, and mechanical and electrical suppliers. We serve tower crane, passenger hoist, material lift, manual crane, and genset operations across Indonesia — covering rental, service and maintenance, erection and dismantling, mobilization and demobilization, loading and unloading, wall tie-in, and repair of damaged units, supported by certified operators and technicians. Safety is Number 1!',
    source: 'Gallery.html + client revisions 2026-08-23/25',
  } satisfies Verified<string>,
  coreBusiness: {
    status: 'verified' as const,
    value: [
      'Equipment Lifting Services',
      'Man Power Services',
      'Installation Services',
      'Mechanical and Electrical Suppliers',
    ] as readonly string[],
    source: 'client revision 2026-08-23',
  } satisfies Verified<readonly string[]>,
} as const;

// Indonesian counterparts of the verified English fields above.
// Translations derived from `company` (source of truth); keyed identically
// so pages can pick via `lang === 'id' ? companyId : verifiedValue(company.x)`.
export const companyId = {
  tagline: 'Mitra Terpercaya Anda',
  motto: 'Keselamatan Nomor 1!',
  foundingNarrative:
    'Berpengalaman sejak 1985. PT. TRUST ANUGRAH PERSADA bergerak di bidang equipment lifting services, man power services, jasa instalasi, serta mechanical and electrical suppliers. Kami melayani tower crane, passenger hoist, material lift, manual crane, dan genset di seluruh Indonesia — mencakup sewa, servis dan perawatan, erection dan dismantling, mobilisasi dan demobilisasi, loading dan unloading, wall tie-in, serta perbaikan unit rusak, didukung operator dan teknisi bersertifikat. Keselamatan Nomor 1!',
  coreBusiness: [
    'Equipment Lifting Services',
    'Man Power Services',
    'Jasa Instalasi',
    'Mechanical and Electrical Suppliers',
  ] as readonly string[],
} as const;
