"use client";

import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { company, companyId } from "@/content/company";
import { verifiedValue } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

// PRD §5.2. Team section, projects counter, years counter intentionally absent
// (PRD §5.2 ❌ → TBD: needs client sign-off). Ship only Verified content.
const C = {
  id: {
    heroEyebrow: "Berpengalaman sejak 1985",
    heroTitle: "Tentang Kami",
    heroSubtitle:
      "Berpengalaman sejak 1985 di tower crane, passenger hoist, material lift, manual crane, dan genset.",
    sinceLabel: "Berpengalaman Sejak",
    coreTitle: "Pilar bisnis inti",
    fieldLabel: "OPERASI LAPANGAN",
    fieldDesc: "Kru bersertifikat dikerahkan di seluruh Jawa dan luar Jawa.",
    awardLabel: "PENGHARGAAN",
    awardTitle: "Piagam Penghargaan",
    awardDesc:
      "Apresiasi atas komitmen PT Trust Anugrah dalam layanan peralatan konstruksi yang aman dan andal selama berpuluh tahun.",
    qualityLabel: "SERTIFIKAT",
    qualityTitle: "Sertifikat Kualitas",
    qualityDesc:
      "Sertifikat kualitas yang menegaskan standar layanan peralatan angkat PT Trust Anugrah — komitmen pada keselamatan dan keandalan di setiap operasi.",
    ctaTitle: "Kerja sama dengan kami",
    ctaDesc:
      "Sewa, servis, sparepart, troubleshooting, bangun & rebuild. Sampaikan kebutuhan Anda.",
    emailSubject: "Pertanyaan Umum",
    waText: "Halo, saya ingin mendiskusikan sebuah proyek.",
  },
  en: {
    heroEyebrow: "Experienced since 1985",
    heroTitle: "About",
    heroSubtitle:
      "Experienced since 1985 in tower crane, passenger hoist, material lift, manual crane, and genset.",
    sinceLabel: "Experienced Since",
    coreTitle: "Core business pillars",
    fieldLabel: "FIELD OPERATIONS",
    fieldDesc: "Licensed crews deployed across Java and beyond.",
    awardLabel: "AWARDS",
    awardTitle: "Certificate of Appreciation",
    awardDesc:
      "Recognition of PT Trust Anugrah's commitment to safe and reliable construction equipment services over the decades.",
    qualityLabel: "CERTIFICATE",
    qualityTitle: "Quality Certificate",
    qualityDesc:
      "A quality certificate affirming PT Trust Anugrah's service standards for lifting equipment — commitment to safety and reliability in every operation.",
    ctaTitle: "Work with us",
    ctaDesc:
      "Rental, service, parts, troubleshooting, build & rebuild. Tell us what you need.",
    emailSubject: "General Inquiry",
    waText: "Hello, I'd like to discuss a project.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLang();
  const L = C[lang];
  const narrative =
    (lang === "id"
      ? companyId.foundingNarrative
      : verifiedValue(company.foundingNarrative)) ?? "";
  const motto =
    (lang === "id" ? companyId.motto : verifiedValue(company.motto)) ?? "";
  const tagline =
    (lang === "id" ? companyId.tagline : verifiedValue(company.tagline)) ?? "";
  const coreBusiness =
    lang === "id"
      ? companyId.coreBusiness
      : (verifiedValue(company.coreBusiness) ?? []);

  return (
    <PageShell
      heroEyebrow={L.heroEyebrow}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/certif-no-wm.jpg"
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          <div className="relative">
            <div className="wm glass-panel rounded-2xl overflow-hidden border border-outline-variant/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about2.jpg"
                alt="PT Trust Anugrah field operation"
                className="w-auto h-auto max-w-full max-h-[560px] mx-auto block"
                loading="lazy"
              />
            </div>
            <GlassCard className="absolute -bottom-8 -right-4 p-6 w-48 hidden md:block">
              <div className="font-display-xl text-headline-lg text-secondary">
                1985
              </div>
              <div className="font-label-technical text-xs text-on-surface-variant uppercase">
                {L.sinceLabel}
              </div>
            </GlassCard>
          </div>

          <div>
            <span className="font-label-technical text-secondary uppercase tracking-widest text-xs">
              {tagline}
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight">
              {motto}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {narrative}
            </p>
          </div>
        </div>
      </section>

      {/* Core pillars + fleet image. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch">
          <GlassCard className="p-8 order-2 lg:order-1">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              {L.coreTitle}
            </h3>
            <ul className="space-y-3">
              {coreBusiness.map((pillar, i) => (
                <li key={pillar} className="flex items-start gap-4">
                  <span className="font-label-technical text-tertiary text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body-md text-on-surface">{pillar}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="relative order-1 lg:order-2">
            <GlassCard className="wm relative overflow-hidden p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about.jpg"
                alt="Crew on-site during operation"
                className="w-auto h-auto max-w-full max-h-[480px] mx-auto block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-technical text-xs text-secondary uppercase tracking-widest">
                  {L.fieldLabel}
                </span>
                <p className="text-on-surface-variant text-sm mt-1">
                  {L.fieldDesc}
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Penghargaan & Sertifikat — 2 dokumen dari asset client. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
          <GlassCard className="p-6">
            <div className="wm glass-panel rounded-2xl overflow-hidden border border-outline-variant/30 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/piagam-trust-anugrah.jpg"
                alt="Piagam penghargaan PT Trust Anugrah"
                className="w-auto h-auto max-w-full max-h-[480px] mx-auto block"
                loading="lazy"
              />
            </div>
            <span className="font-label-technical text-secondary uppercase tracking-widest text-xs">
              {L.awardLabel}
            </span>
            <h3 className="mt-3 font-headline-md text-headline-md text-on-surface mb-3 leading-tight">
              {L.awardTitle}
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {L.awardDesc}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="wm wm-black glass-panel rounded-2xl overflow-hidden border border-outline-variant/30 mb-6">
              <img
                src="/images/certif-no-wm.jpg"
                alt="Sertifikat kualitas PT Trust Anugrah"
                className="w-auto h-auto max-w-full max-h-[480px] mx-auto block"
                loading="lazy"
              />
            </div>
            <span className="font-label-technical text-secondary uppercase tracking-widest text-xs">
              {L.qualityLabel}
            </span>
            <h3 className="mt-3 font-headline-md text-headline-md text-on-surface mb-3 leading-tight">
              {L.qualityTitle}
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {L.qualityDesc}
            </p>
          </GlassCard>
        </div>
      </section>

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
