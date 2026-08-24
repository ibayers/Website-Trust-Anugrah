'use client';

import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { SpecRow } from "@/components/ui/SpecRow";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { useLang } from "@/lib/i18n";

// PRD §5.8. Content Verified against Genset.html (legacy backup).
const C = {
  id: {
    heroEyebrow: "Divisi: Daya Industri",
    heroTitle: (
      <>
        Daya <span className="text-secondary">Presisi</span> Tanpa Putus.
      </>
    ),
    heroSubtitle:
      "Genset diesel — sewa, perbaikan, perawatan. Mitsubishi, Nissan, dan merek lain. 150-250 kVA dengan operator siaga 24 jam.",
    whatTitle: "Apa itu genset diesel?",
    whatP1:
      "Genset diesel adalah kombinasi mesin diesel dengan generator listrik (sering disebut alternator) untuk menghasilkan energi listrik. Genset diesel digunakan di lokasi tanpa sambungan jaringan listrik atau sebagai pasokan darurat saat jaringan padam.",
    whatP2:
      "Kami menyediakan layanan sewa, perbaikan, dan perawatan untuk berbagai merek seperti Mitsubishi, Nissan, dll. Genset dibutuhkan untuk tower crane dan passenger hoist.",
    kvaRange: "RENTANG KVA",
    operator: "OPERATOR",
    typeOptions: "PILIHAN TIPE",
    verifiedUnit: "Unit Terverifikasi",
    scenariosTitle: "Skenario Deployment",
    useCases: [
      "Kebutuhan daya untuk tower crane",
      "Daya cadangan untuk pabrik dan menara penerangan",
      "Daya cadangan untuk apartemen, perumahan, dan fasilitas riset",
      "Konfigurasi silent atau open-type sesuai kebutuhan lokasi",
    ],
    specsTitle: "Spesifikasi",
    specsDesc: "Sembilan spesifikasi terverifikasi diangkat verbatim dari sumber.",
    specs: [
      { label: "Kapasitas", value: "Dari 150 kVA hingga 250 kVA" },
      { label: "Operator", value: "Siaga 24 jam" },
      { label: "Perawatan", value: "Bulanan dan service over haul" },
      { label: "Sewa", value: "Sewa bulanan" },
      { label: "Sparepart", value: "Penggantian sparepart" },
      { label: "Tipe", value: "Open type atau silent type" },
      { label: "Use case A", value: "Kebutuhan daya untuk tower crane" },
      { label: "Use case B", value: "Kebutuhan daya cadangan pabrik, penerangan" },
      {
        label: "Use case C",
        value: "Kebutuhan daya cadangan apartemen, perumahan, riset, dll.",
      },
    ],
    ctaTitle: "Minta sewa genset",
    ctaDesc:
      "Kapasitas, tipe (open/silent), dan durasi — kami cocokkan unit dan kru yang tepat.",
    emailSubject: "Pertanyaan Genset",
    waText: "Halo, saya ingin bertanya tentang sewa genset.",
  },
  en: {
    heroEyebrow: "Division: Industrial Power",
    heroTitle: (
      <>
        Uninterrupted <span className="text-secondary">Precision</span> Energy.
      </>
    ),
    heroSubtitle:
      "Diesel generating sets — rental, repair, maintenance. Mitsubishi, Nissan, and other brands. 150-250 kVA with 24-hour operator stand-by.",
    whatTitle: "What is a diesel generator?",
    whatP1:
      "A diesel generator is the combination of a diesel engine with an electrical generator (often called an alternator) to generate electrical energy. Diesel generating sets are used in places without connection to the power grid or as emergency power-supply if the grid fails.",
    whatP2:
      "We provide rental services, repairs, and maintenance for various brands such as Mitsubishi, Nissan, etc. Genset is needed for tower crane and passenger hoist.",
    kvaRange: "KVA RANGE",
    operator: "OPERATOR",
    typeOptions: "TYPE OPTIONS",
    verifiedUnit: "Verified Unit",
    scenariosTitle: "Deployment Scenarios",
    useCases: [
      "Power requirement for tower cranes",
      "Backup power for factories and lighting towers",
      "Reserve power for apartments, housing, and research facilities",
      "Silent or open-type configuration per site needs",
    ],
    specsTitle: "Specifications",
    specsDesc: "Nine verified specs lifted verbatim from the source.",
    specs: [
      { label: "Capacity", value: "From 150 kVA to 250 kVA" },
      { label: "Operator", value: "24 hour stand-by" },
      { label: "Maintenance", value: "Monthly and service over haul" },
      { label: "Rental", value: "Monthly rental" },
      { label: "Parts", value: "Spare part replacement" },
      { label: "Type", value: "Open type or silent type" },
      { label: "Use case A", value: "Power requirement for tower cranes" },
      {
        label: "Use case B",
        value: "Power requirement for backup at factories, lighting",
      },
      {
        label: "Use case C",
        value: "Power needs for reserve apartments, housing, research, etc.",
      },
    ],
    ctaTitle: "Request genset rental",
    ctaDesc:
      "Capacity, type (open/silent), and duration — we will match the right unit and crew.",
    emailSubject: "Genset Inquiry",
    waText: "Hello, I'd like to ask about genset rental.",
  },
} as const;

export default function GensetPage() {
  const { lang } = useLang();
  const L = C[lang];

  return (
    <PageShell
      heroEyebrow={L.heroEyebrow}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/design/genset/hero.jpg"
    >
      {/* Hero stat + featured unit image. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <GlassCard className="lg:col-span-7 p-8">
            <h2 className="font-headline-md text-headline-md mb-6">{L.whatTitle}</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed mb-4">
              {L.whatP1}
            </p>
            <p className="text-on-surface-variant leading-relaxed">{L.whatP2}</p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-outline-variant/30">
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">150-250</div>
                <div className="font-label-technical text-xs text-outline">{L.kvaRange}</div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">24/7</div>
                <div className="font-label-technical text-xs text-outline">{L.operator}</div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">2</div>
                <div className="font-label-technical text-xs text-outline">
                  {L.typeOptions}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Featured genset image */}
          <GlassCard className="wm lg:col-span-5 relative overflow-hidden min-h-[400px] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/genset.jpg"
              alt="Industrial diesel generator set"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-label-technical text-secondary text-xs uppercase tracking-widest">
                {L.verifiedUnit}
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">
                Mitsubishi / Nissan Fleet
              </h3>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Use cases — split image + list. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <GlassCard className="lg:col-span-5 p-0 overflow-hidden">
            <div className="wm aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/design/genset/feature-02.jpg"
                alt="Genset deployed on construction site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </GlassCard>
          <div className="lg:col-span-7">
            <h2 className="font-headline-lg text-headline-lg mb-4">{L.scenariosTitle}</h2>
            <div className="w-24 h-1 bg-secondary mb-8" />
            <ul className="space-y-4">
              {L.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary mt-1"
                    aria-hidden
                  >
                    bolt
                  </span>
                  <span className="text-body-md text-on-surface">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spec sheet — 9 verified rows from source. */}
      <section className="px-margin-desktop py-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          {L.specsTitle}
        </h2>
        <p className="text-on-surface-variant text-body-lg mb-12">{L.specsDesc}</p>
        <div className="rounded-xl border border-outline-variant/30 overflow-hidden">
          {L.specs.map((s, i) => (
            <SpecRow key={s.label} label={s.label} value={s.value} alt={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {L.ctaTitle}
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            {L.ctaDesc}
          </p>
          <ContactCTA
            emailSubject={L.emailSubject}
            waText={L.waText}
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
