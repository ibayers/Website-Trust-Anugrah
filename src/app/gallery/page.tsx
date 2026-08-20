'use client';

import { useState } from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company, companyId } from '@/content/company';
import { verifiedValue } from '@/lib/contact';
import { useLang } from '@/lib/i18n';

// PRD §5.10. Ported from _archive/design/gallery_modernized/code.html.
type Filter = 'ALL' | 'TOWER_CRANES' | 'PASSENGER_HOIST' | 'FIELD_SERVICE';

const ITEMS = [
  { src: '/images/design/tower-crane/tc-4.jpg', icon: 'precision_manufacturing', titleId: 'Unit Tower Crane', titleEn: 'Tower Crane Unit', tagId: 'PERALATAN', tagEn: 'EQUIPMENT', filter: 'TOWER_CRANES' },
  { src: '/images/design/tower-crane/tc-fix-1.jpg', icon: 'engineering', titleId: 'Detail Crane', titleEn: 'Crane Detail', tagId: 'PERALATAN', tagEn: 'EQUIPMENT', filter: 'TOWER_CRANES' },
  { src: '/images/design/field-service/fs-2.jpg', icon: 'construction', titleId: 'Deployment Manual Crane', titleEn: 'Manual Crane Deploy', tagId: 'LAYANAN LAPANGAN', tagEn: 'FIELD SERVICE', filter: 'FIELD_SERVICE' },
  { src: '/images/design/gallery/03-manual-crane.jpg', icon: 'build', titleId: 'Rig Manual Crane', titleEn: 'Manual Crane Rig', tagId: 'LAYANAN LAPANGAN', tagEn: 'FIELD SERVICE', filter: 'FIELD_SERVICE' },
  { src: '/images/Tower_Full..jpg', icon: 'fullscreen', titleId: 'Erection Penuh', titleEn: 'Full Erection', tagId: 'SEWA', tagEn: 'RENTAL', filter: 'TOWER_CRANES' },
  { src: '/images/A1 CRANE.jpg', icon: 'verified', titleId: 'Unit Terverifikasi', titleEn: 'Verified Unit', tagId: 'TERSERTIFIKASI', tagEn: 'CERTIFIED', filter: 'TOWER_CRANES' },
  { src: '/images/design/field-service/fs-3.jpg', icon: 'build', titleId: 'Layanan Lapangan', titleEn: 'Field Service', tagId: 'PERAWATAN', tagEn: 'MAINTENANCE', filter: 'FIELD_SERVICE' },
  { src: '/images/Picture 234.jpg', icon: 'photo_camera', titleId: 'Koordinasi Lapangan', titleEn: 'Field Coordination', tagId: 'OPS', tagEn: 'OPS', filter: 'FIELD_SERVICE' },
  { src: '/images/design/passenger-hoist/ph-2.jpg', icon: 'elevator', titleId: 'Hoist Dual Cage', titleEn: 'Dual Cage Hoist', tagId: 'TRANSPORT VERTIKAL', tagEn: 'VERTICAL TRANSPORT', filter: 'PASSENGER_HOIST' },
  { src: '/images/design/passenger-hoist/feature-04.jpg', icon: 'height', titleId: 'Deployment Hoist Gedung Tinggi', titleEn: 'High-Rise Hoist Deploy', tagId: 'OPERASI', tagEn: 'OPERATIONS', filter: 'PASSENGER_HOIST' },
] as const;

const FLAGSHIP_SRC = '/images/design/tower-crane/tc-fix-3.jpg';

export default function GalleryPage() {
  const { lang } = useLang();
  const narrative =
    (lang === 'id' ? companyId.foundingNarrative : verifiedValue(company.foundingNarrative)) ?? '';
  const motto = (lang === 'id' ? companyId.motto : verifiedValue(company.motto)) ?? '';
  const [active, setActive] = useState<Filter>('ALL');

  const t = {
    id: {
      heroEyebrow: 'Arsip Proyek',
      heroTitle: (
        <>
          Visualisasi <span className="text-secondary">Presisi</span> dalam Gerakan.
        </>
      ),
      heroSubtitle:
        'Puluhan tahun keandalan kelas industri. Jelajahi portofolio instalasi alat berat, layanan mekanikal, dan keberhasilan konstruksi kami.',
      archiveLabel: 'ARSIP PROYEK',
      sinceLabel: 'BERPENGALAMAN SEJAK',
      linesLabel: 'LINI PERALATAN',
      categories: [
        { key: 'ALL' as Filter, label: 'SEMUA PROYEK' },
        { key: 'TOWER_CRANES' as Filter, label: 'TOWER CRANES' },
        { key: 'PASSENGER_HOIST' as Filter, label: 'PASSENGER HOIST' },
        { key: 'FIELD_SERVICE' as Filter, label: 'LAYANAN LAPANGAN' },
      ],
      flagshipTag: 'PROYEK UNGGULAN',
      flagshipTitle: 'Sistem Hoisting Central District',
      flagshipDesc: 'Seri heavy lift untuk proyek pembangunan kawasan skyline.',
      identityTitle: 'Identitas & Misi Perusahaan',
      foundationLabel: 'FONDASI',
      foundation: 'CV berdiri 9 Oktober 1993. Menjadi PT pada 13 Oktober 1998.',
      expertiseLabel: 'KEAHLIAN',
      expertise:
        'Bertahun-tahun pengalaman khususnya dalam konstruksi tower crane dan alat lainnya.',
      ctaTitle: 'Ingin melihat pekerjaan tertentu?',
      ctaDesc: 'Minta kami foto yang relevan dengan lokasi atau tipe alat Anda.',
      emailSubject: 'Permintaan Galeri',
      waText: 'Halo, saya ingin melihat foto proyek tertentu.',
    },
    en: {
      heroEyebrow: 'Project Archive',
      heroTitle: (
        <>
          Visualizing <span className="text-secondary">Precision</span> in Motion.
        </>
      ),
      heroSubtitle:
        'Decades of industrial-grade reliability. Explore our portfolio of heavy equipment installations, mechanical services, and construction triumphs.',
      archiveLabel: 'PROJECT ARCHIVE',
      sinceLabel: 'EXPERIENCED SINCE',
      linesLabel: 'EQUIPMENT LINES',
      categories: [
        { key: 'ALL' as Filter, label: 'ALL PROJECTS' },
        { key: 'TOWER_CRANES' as Filter, label: 'TOWER CRANES' },
        { key: 'PASSENGER_HOIST' as Filter, label: 'PASSENGER HOIST' },
        { key: 'FIELD_SERVICE' as Filter, label: 'FIELD SERVICE' },
      ],
      flagshipTag: 'FLAGSHIP PROJECT',
      flagshipTitle: 'Central District Hoisting System',
      flagshipDesc: 'Heavy lift series deployed for the skyline redevelopment project.',
      identityTitle: 'Corporate Identity & Mission',
      foundationLabel: 'FOUNDATION',
      foundation: 'CV established October 9, 1993. Incorporated as PT on October 13, 1998.',
      expertiseLabel: 'EXPERTISE',
      expertise:
        'Many years of experience in particular construction of tower cranes and other tools.',
      ctaTitle: 'Want to see specific work?',
      ctaDesc: 'Ask us for photos relevant to your site or equipment type.',
      emailSubject: 'Gallery Request',
      waText: "Hello, I'd like to see specific project photos.",
    },
  }[lang];

  const items = ITEMS.filter((it) => active === 'ALL' || it.filter === active);
  const showFlagship = active === 'ALL' || active === 'TOWER_CRANES';

  return (
    <PageShell heroEyebrow={t.heroEyebrow} heroTitle={t.heroTitle} heroSubtitle={t.heroSubtitle}>
      {/* Stats banner */}
      <section className="px-margin-desktop pt-section-gap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-label-technical uppercase tracking-widest text-secondary">
                {t.archiveLabel}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <GlassCard className="p-6 flex flex-col items-center">
              <span className="font-display-xl text-headline-lg text-secondary">1985</span>
              <span className="font-label-technical text-xs">{t.sinceLabel}</span>
            </GlassCard>
            <GlassCard className="p-6 flex flex-col items-center">
              <span className="font-display-xl text-headline-lg text-primary">5</span>
              <span className="font-label-technical text-xs">{t.linesLabel}</span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="px-margin-desktop">
        <div className="flex overflow-x-auto gap-4 mb-12 pb-4">
          {t.categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              aria-pressed={active === cat.key}
              className={
                active === cat.key
                  ? 'px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-technical whitespace-nowrap'
                  : 'px-6 py-2 glass-panel border border-outline-variant/30 text-on-surface hover:border-secondary transition-all rounded-full font-label-technical whitespace-nowrap'
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Masonry Gallery */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Flagship large feature — hidden when filter excludes it. */}
          {showFlagship && (
            <GlassCard className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden cursor-pointer p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FLAGSHIP_SRC}
                alt={t.flagshipTitle}
                className="w-full h-full min-h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="font-label-technical text-xs bg-secondary text-on-secondary-container px-2 py-1 mb-2 inline-block">
                  {t.flagshipTag}
                </span>
                <h3 className="font-headline-md text-body-lg font-bold mb-2">{t.flagshipTitle}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2">{t.flagshipDesc}</p>
              </div>
            </GlassCard>
          )}

          {/* Standard items */}
          {items.map((item) => (
            <GlassCard key={item.src} className="relative group overflow-hidden cursor-pointer p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={lang === 'id' ? item.titleId : item.titleEn}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-surface-dim/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-4xl text-secondary" aria-hidden>
                  {item.icon}
                </span>
              </div>
              <div className="p-4 border-t border-outline-variant/20">
                <h4 className="font-bold text-sm">{lang === 'id' ? item.titleId : item.titleEn}</h4>
                <p className="text-xs text-on-surface-variant font-label-technical">
                  {lang === 'id' ? item.tagId : item.tagEn}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Corporate identity / mission block. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="overflow-hidden p-0">
          <div className="p-8 border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="font-headline-md text-headline-md">{t.identityTitle}</h2>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="w-3 h-3 rounded-full bg-tertiary" />
            </div>
          </div>
          <div className="p-8 grid-overlay">
            <div className="max-w-3xl space-y-6">
              <p className="text-body-lg text-on-surface leading-relaxed">{narrative}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter py-8">
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="font-label-technical text-secondary mb-2">{t.foundationLabel}</h4>
                  <p className="text-sm">{t.foundation}</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-label-technical text-primary mb-2">{t.expertiseLabel}</h4>
                  <p className="text-sm">{t.expertise}</p>
                </div>
              </div>
              <p className="text-on-surface-variant italic">&quot;{motto}&quot;</p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <ContactCTA
            emailSubject={t.emailSubject}
            waText={t.waText}
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
