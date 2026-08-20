'use client';

import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { useLang } from '@/lib/i18n';

// PRD §5.4 + §6: new tower cranes for sale (MG5023, MG6015, MG6036, MG7030).
// Spec PDFs extracted from legacy .zip archive (2 sheets per model).
const MODELS = [
  {
    id: '01',
    model: 'MG5023',
    descId: 'Seri Industri • Kapasitas Maks 5T',
    descEn: 'Industrial Series • Max Capacity 5T',
    sheets: ['/specs/MG5023/MG5023-1.pdf', '/specs/MG5023/MG5023-2.pdf'],
  },
  {
    id: '02',
    model: 'MG6015',
    descId: 'Seri Presisi • Optimasi Jangkauan',
    descEn: 'Precision Series • Reach Optimization',
    sheets: ['/specs/MG6015/MG6015-1.pdf', '/specs/MG6015/MG6015-2.pdf'],
  },
  {
    id: '03',
    model: 'MG6036',
    descId: 'Seri Heavy-Duty • Jib Variabel',
    descEn: 'Heavy-Duty Series • Variable Jib',
    sheets: ['/specs/MG6036/MG6036-1.pdf', '/specs/MG6036/MG6036-2.pdf'],
  },
  {
    id: '04',
    model: 'MG7030',
    descId: 'Skala Mega-Proyek • Elevasi Tinggi',
    descEn: 'Mega-Project Scale • High Elevation',
    sheets: ['/specs/MG7030/MG7030-1.pdf', '/specs/MG7030/MG7030-2.pdf'],
  },
] as const;

export default function SellPage() {
  const { lang } = useLang();
  const t = {
    id: {
      heroEyebrow: 'Peralatan Dijual',
      heroTitle: (
        <>
          Tower Crane Baru <span className="text-secondary">Dijual</span>
        </>
      ),
      heroSubtitle:
        'MG5023, MG6015, MG6036, MG7030 — lembar data teknis dapat diunduh di bawah. Harga dan waktu tunggu tersedia atas permintaan.',
      colModel: 'TIPE / MODEL PERALATAN',
      colDocs: 'DOKUMENTASI',
      colAction: 'AKSI',
      contact: 'Hubungi Kami',
      stats: [
        ['20+', 'Tahun Keunggulan'],
        ['4', 'Model Tersedia'],
        ['24/7', 'Inti Dukungan'],
      ] as readonly [string, string][],
      ctaTitle: 'Minta ketentuan penjualan',
      ctaDesc: 'Email untuk harga, ketersediaan, dan pengiriman luar Jawa.',
      emailSubject: 'Pertanyaan Pembelian Tower Crane',
      waText: 'Halo, saya ingin bertanya tentang pembelian tower crane.',
      sheet: (i: number) => `Lembar Data Teknis ${i + 1} (PDF)`,
    },
    en: {
      heroEyebrow: 'Equipment for Sale',
      heroTitle: (
        <>
          New Tower Cranes <span className="text-secondary">For Sale</span>
        </>
      ),
      heroSubtitle:
        'MG5023, MG6015, MG6036, MG7030 — spec sheets downloadable below. Pricing and lead time available on request.',
      colModel: 'EQUIPMENT TYPE / MODEL',
      colDocs: 'DOCUMENTATION',
      colAction: 'ACTION',
      contact: 'Contact Us',
      stats: [
        ['20+', 'Years Excellence'],
        ['4', 'Models Available'],
        ['24/7', 'Support Core'],
      ] as readonly [string, string][],
      ctaTitle: 'Request sale terms',
      ctaDesc: 'Email for pricing, availability, and delivery outside Java.',
      emailSubject: 'Tower Crane Sale Inquiry',
      waText: "Hello, I'd like to ask about purchasing a tower crane.",
      sheet: (i: number) => `Technical Data Sheet ${i + 1} (PDF)`,
    },
  }[lang];

  return (
    <PageShell
      heroEyebrow={t.heroEyebrow}
      heroTitle={t.heroTitle}
      heroSubtitle={t.heroSubtitle}
      heroImage="/images/design/sell/hero.jpg"
    >
      {/* Spec-sheet table. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="overflow-hidden p-0">
          {/* Table header */}
          <div className="grid grid-cols-12 bg-surface-container-highest px-6 py-4 border-b border-outline-variant">
            <div className="col-span-1 font-label-technical text-on-surface-variant">ID</div>
            <div className="col-span-4 font-label-technical text-on-surface-variant">
              {t.colModel}
            </div>
            <div className="col-span-5 font-label-technical text-on-surface-variant">
              {t.colDocs}
            </div>
            <div className="col-span-2 font-label-technical text-on-surface-variant text-right">
              {t.colAction}
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {MODELS.map((m) => (
              <div
                key={m.model}
                className="grid grid-cols-12 px-6 py-8 items-center hover:bg-white/5 transition-colors group border-b border-outline-variant/10 last:border-b-0"
              >
                <div className="col-span-1 font-label-technical text-secondary">{m.id}</div>
                <div className="col-span-4">
                  <div className="font-headline-md text-lg text-on-surface group-hover:text-secondary transition-colors">
                    Tower Crane — {m.model}
                  </div>
                  <div className="text-on-surface-variant text-sm mt-1">
                    {lang === 'id' ? m.descId : m.descEn}
                  </div>
                </div>
                <div className="col-span-5 flex flex-col gap-2">
                  {m.sheets.map((s, i) => (
                    <a
                      key={s}
                      href={s}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]" aria-hidden>
                        description
                      </span>
                      {t.sheet(i)}
                    </a>
                  ))}
                </div>
                <div className="col-span-2 text-right">
                  <Link
                    href="/contact/"
                    className="bg-transparent border border-secondary text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-bold text-sm"
                  >
                    {t.contact}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Stats banner. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="flex items-center justify-center gap-8 py-12 border-y border-outline-variant/10">
          {t.stats.map(([value, label], i) => (
            <div key={label} className="flex items-center gap-8">
              {i > 0 && <div className="w-px h-12 bg-outline-variant/30" />}
              <div className="text-center">
                <div className="font-headline-md text-3xl text-secondary">{value}</div>
                <div className="text-xs uppercase tracking-widest text-on-surface-variant">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{t.ctaTitle}</h2>
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
