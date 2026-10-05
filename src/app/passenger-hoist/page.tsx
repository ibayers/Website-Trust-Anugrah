'use client';

import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { useLang } from "@/lib/i18n";

// PRD §5.5. Content Verified against Passenger_Hoist.html (legacy backup).
const C = {
  id: {
    heroEyebrow: "Transportasi Vertikal Industri",
    heroTitle: (
      <>
        Solusi <br />
        <span className="text-secondary">Passenger Hoist</span> Berkinerja Tinggi
      </>
    ),
    heroSubtitle:
      "Merekayasa keandalan di setiap meter vertikal. Armada passenger hoist ketinggian kami dirancang untuk efisiensi maksimal dalam konstruksi gedung pencakar langit.",
    profileTitle: "Profil Operasional",
    profileDesc:
      "Transportasi vertikal yang direkayasa untuk skyline tertinggi, dengan kemampuan tinggi terverifikasi 80-100m dan sistem keselamatan redundan.",
    capacityLabel: "KAPASITAS OPERASIONAL",
    maxReach: "JANGKAUAN MAKS",
    precisionTitle: "Kontrol Presisi",
    precisionDesc:
      "Variable frequency drive (VFD) canggih untuk akselerasi dan deselerasi yang halus.",
    lifecycleTitle: "Siklus Servis",
    lifecycleDesc:
      "Dukungan perawatan prediktif penuh dan pemantauan diagnostik real-time.",
    commitmentPrefix: "Komitmen Sewa & Servis",
    commitmentAccent: "Kami",
    capabilities: [
      {
        icon: "height",
        title: "Kapasitas Jangkauan Luas",
        desc: "Sewa passenger lift dengan kemampuan tinggi 80-100m, dapat disesuaikan dengan kebutuhan vertikal proyek.",
      },
      {
        icon: "bolt",
        title: "Troubleshooting Teknis",
        desc: "Diagnosis kelistrikan menyeluruh, suplai komponen, resistor, dan penggantian controller.",
      },
      {
        icon: "engineering",
        title: "Manufaktur & Kru",
        desc: "Fabrikasi cage dan komponen brake hoist di lokasi, plus operator bersertifikat dari depnaker.",
      },
    ],
    capabilitiesTitle: "Kapabilitas",
    services: [
      "Sewa passenger lift dengan tinggi 80-100m tergantung tipe passenger lift",
      "Troubleshooting kelistrikan, suplai komponen, resistor, controller dll",
      "Servis & perawatan berkala",
      "Manufaktur bagian passenger lift seperti cage, brake hoist dll",
      "Trucking, lifting, hingga lokasi termasuk luar Jawa",
      "Penyediaan kru bersertifikat dari depnaker",
    ],
    ctaTitle: "Jadwalkan sewa hoist",
    ctaDesc:
      "Sampaikan detail lokasi dan tinggi yang dibutuhkan; kami usulkan unit yang tepat.",
    emailSubject: "Pertanyaan Passenger Hoist",
    waText: "Halo, saya ingin bertanya tentang sewa passenger hoist.",
  },
  en: {
    heroEyebrow: "Industrial Vertical Transportation",
    heroTitle: (
      <>
        High-Performance <br />
        <span className="text-secondary">Passenger Hoist</span> Solutions
      </>
    ),
    heroSubtitle:
      "Engineering reliability into every vertical meter. Our fleet of high-altitude passenger hoists is designed for maximum efficiency in skyscraper construction.",
    profileTitle: "Operational Profile",
    profileDesc:
      "Vertical transport engineered for the tallest skylines, with verified 80-100m height capability and redundant safety systems.",
    capacityLabel: "OPERATIONAL CAPACITY",
    maxReach: "MAX REACH",
    precisionTitle: "Precision Control",
    precisionDesc:
      "Advanced variable frequency drive (VFD) for smooth acceleration and deceleration.",
    lifecycleTitle: "Service Lifecycle",
    lifecycleDesc:
      "Full predictive maintenance support and real-time diagnostic monitoring.",
    commitmentPrefix: "Our Rental & Service",
    commitmentAccent: "Commitment",
    capabilities: [
      {
        icon: "height",
        title: "Extended Range Capacity",
        desc: "Rental passenger lift with 80-100m height capabilities, adaptable to specific project verticality needs.",
      },
      {
        icon: "bolt",
        title: "Technical Troubleshooting",
        desc: "Comprehensive electrical diagnostics, supply components, resistors, and controller replacements.",
      },
      {
        icon: "engineering",
        title: "Manufacturing & Crew",
        desc: "On-site fabrication of cages, brake hoist components, plus licensed operators from man power department.",
      },
    ],
    capabilitiesTitle: "Capabilities",
    services: [
      "Rental passenger lift with 80-100m height depending on passenger lift type",
      "Electrical troubleshooting, supply components, resistors, controllers etc",
      "Service & maintenance periodically",
      "Manufacturing part of passenger lift such as cage, brake hoist etc",
      "Trucking, lifting, until destination inc outside Java",
      "Provide crew with licensed from manpower department",
    ],
    ctaTitle: "Schedule hoist rental",
    ctaDesc: "Share site details and required height; we will propose the right unit.",
    emailSubject: "Passenger Hoist Inquiry",
    waText: "Hello, I'd like to ask about passenger hoist rental.",
  },
} as const;

export default function PassengerHoistPage() {
  const { lang } = useLang();
  const L = C[lang];

  return (
    <PageShell heroEyebrow={L.heroEyebrow}>
      {/* Hero custom: teks kiri, gambar kanan (rasio asli, tanpa crop). */}
      <section className="px-margin-desktop pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
              {L.heroTitle}
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {L.heroSubtitle}
            </p>
          </div>
          <div className="wm glass-panel rounded-2xl overflow-hidden border border-outline-variant/30 mx-auto w-fit max-w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/revisi/37.jpg"
              alt="Passenger hoist PT Trust Anugrah"
              className="h-auto max-h-[420px] w-auto max-w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Hero metric + Bento showcase. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-4">{L.profileTitle}</h2>
            <p className="text-on-surface-variant text-body-lg">{L.profileDesc}</p>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="font-label-technical text-on-surface-variant">
              {L.capacityLabel}
            </span>
            <div className="text-display-xl font-display-xl text-secondary">
              100<span className="text-body-md align-top ml-1">M</span>
            </div>
            <span className="text-on-surface-variant">{L.maxReach}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Featured unit */}
          <GlassCard className="wm md:col-span-8 relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/revisi/38.jpg"
              alt="Twin-cage passenger hoist on Jakarta high-rise"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-label-technical text-sm text-on-surface">
                  UNIT ID: PH-T100-26
                </span>
              </div>
              <h3 className="font-headline-md text-on-surface">Dual Cage Heavy Duty Hoist</h3>
            </div>
          </GlassCard>

          {/* Side feature cards */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <GlassCard className="p-0 overflow-hidden flex flex-col">
              <div className="wm overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/revisi/39.jpg"
                  alt="Variable frequency drive control panel"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-lg mb-2">{L.precisionTitle}</h4>
                <p className="text-on-surface-variant text-sm">{L.precisionDesc}</p>
              </div>
            </GlassCard>
            <GlassCard className="p-0 overflow-hidden flex flex-col">
              <div className="wm overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/design/passenger-hoist/service-lifecycle.jpg"
                  alt="Service technician inspecting hoist"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-lg mb-2">{L.lifecycleTitle}</h4>
                <p className="text-on-surface-variant text-sm">{L.lifecycleDesc}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Lifecycle services — 2-col with cards. */}
      <section className="bg-surface-container-low/40 py-section-gap">
        <div className="px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-12">
            {L.commitmentPrefix}{" "}
            <span className="text-tertiary">{L.commitmentAccent}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {L.capabilities.map((cap) => (
              <GlassCard key={cap.title} className="p-8">
                <div className="w-12 h-12 shrink-0 glass-panel flex items-center justify-center border border-secondary/30 mb-6">
                  <span
                    className="material-symbols-outlined text-secondary"
                    aria-hidden
                  >
                    {cap.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-xl mb-2">{cap.title}</h4>
                <p className="text-on-surface-variant text-sm">{cap.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Full capabilities list — Verified from source. */}
      <section className="px-margin-desktop py-section-gap">
        <h2 className="font-headline-md text-3xl mb-8 flex items-center gap-4">
          <span className="w-2 h-8 bg-secondary" />
          {L.capabilitiesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {L.services.map((cap, i) => (
            <GlassCard key={i} className="p-4 flex items-start gap-3">
              <span className="font-label-technical text-tertiary text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body-md text-on-surface leading-relaxed pt-1">{cap}</p>
            </GlassCard>
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
