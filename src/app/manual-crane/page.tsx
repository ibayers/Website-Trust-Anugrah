'use client';

import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { useLang } from "@/lib/i18n";

// PRD §5.7. Content Verified against Manual_Crane.html (legacy backup).
const C = {
  id: {
    heroEyebrow: "Dismantling Akses Sulit",
    heroTitle: (
      <>
        Manual Crane <br />
        <span className="text-secondary">Logika Akses</span>
      </>
    ),
    heroSubtitle:
      "Saat mobile crane kecil tak bisa menjangkau, manual crane mengambil alih — bongkar tower crane dari area sulit dengan biaya lebih rendah dan keandalan tinggi.",
    logicTitle: "Logika Akses Khusus",
    logicP:
      "Dalam konstruksi urban modern, keterbatasan ruang sering membuat mobile crane standar tidak bisa dipakai. Manual crane dibutuhkan untuk membongkar tower crane dari area sulit yang tidak bisa didekati mobile crane kecil. Sistem rekayasa kami menjembatani kebutuhan itu — alternatif biaya rendah dengan keandalan tinggi yang menyerupai fungsi tower crane dengan jejak ruang jauh lebih kecil.",
    metrics: "METRIK DEPLOYMENT",
    specs: [
      { label: "Jejak Min.", value: "1,2m × 1,2m" },
      { label: "SWL Tipikal", value: "500 kg - 2000 kg" },
      { label: "Busur Rotasi", value: "360° Kontinu" },
    ],
    useCases: [
      {
        icon: "analytics",
        title: "Ambang Biaya Lebih Rendah",
        desc: "Capai hasil heavy-duty dengan biaya operasional dan mobilisasi yang jauh lebih rendah dibanding alternatif mekanis.",
      },
      {
        icon: "architecture",
        title: "Fabrikasi Kustom",
        desc: "Selain layanan sewa manual crane, insinyur kami merancang dan memproduksi sistem khusus sesuai geometri unik proyek Anda.",
      },
    ],
    rentalTitle: "Sewa",
    rentalP:
      "Dalam kondisi tertentu, manual crane dibutuhkan untuk membongkar tower crane dari area sulit yang tidak bisa dimasuki mobile crane kecil. Kami dapat memakai manual crane sama seperti tower crane, dengan biaya lebih rendah.",
    manufactureTitle: "Desain & manufaktur",
    manufactureP:
      "Selain menyewakan manual crane ke klien, insinyur kami juga telah merancang dan memproduksi manual crane. Konfigurasi kustom tersedia — sampaikan kendala lokasi Anda kepada kami.",
    galleryTitle: "Deployment Lapangan",
    gallery: [
      { src: "/images/design/tower-crane/tc-3.jpg", label: "Setup rigging" },
      { src: "/images/design/tower-crane/tc-fix-1.jpg", label: "Jangkar struktural" },
      { src: "/images/design/tower-crane/tc-4.jpg", label: "Operasi angkat" },
      { src: "/images/design/passenger-hoist/ph-1.jpg", label: "Jejak ringkas" },
      { src: "/images/design/tower-crane/tc-fix-2.jpg", label: "Sekuens dismantling" },
      { src: "/images/design/passenger-hoist/ph-2.jpg", label: "Detail komponen" },
      { src: "/images/design/field-service/fs-2.jpg", label: "Integrasi lokasi" },
      { src: "/images/design/tower-crane/tc-fix-3.jpg", label: "Unit utama" },
      { src: "/images/design/field-service/fs-3.jpg", label: "Detail deployment" },
    ],
    ctaTitle: "Diskusikan kendala dismantling Anda",
    ctaDesc: "Kami usulkan unit sewa atau manual crane fabrikasi kustom.",
    emailSubject: "Pertanyaan Manual Crane",
    waText: "Halo, saya ingin bertanya tentang sewa atau fabrikasi manual crane.",
  },
  en: {
    heroEyebrow: "Difficult-Access Dismantling",
    heroTitle: (
      <>
        Manual Crane <br />
        <span className="text-secondary">Access Logic</span>
      </>
    ),
    heroSubtitle:
      "Where small mobile cranes cannot reach, manual cranes take over — dismantle tower cranes from difficult areas with lower cost and high reliability.",
    logicTitle: "Specialized Access Logic",
    logicP:
      "In modern urban construction, spatial constraints often render standard mobile cranes obsolete. Manual cranes are needed to dismantle tower cranes from difficult areas that small mobile cranes cannot approach. Our engineered systems bridge this gap, offering a low-cost, high-reliability alternative that mirrors tower crane functionality at a fraction of the spatial footprint.",
    metrics: "DEPLOYMENT METRICS",
    specs: [
      { label: "Min. Footprint", value: "1.2m × 1.2m" },
      { label: "Typical SWL", value: "500 kg - 2000 kg" },
      { label: "Rotation Arc", value: "360° Continuous" },
    ],
    useCases: [
      {
        icon: "analytics",
        title: "Lower Cost Threshold",
        desc: "Achieve heavy-duty results with significantly reduced operational and mobilization expenses compared to mechanized alternatives.",
      },
      {
        icon: "architecture",
        title: "Custom Fabrication",
        desc: "Beside rental manual crane services, our engineers design and manufacture bespoke systems tailored to your project's unique geometry.",
      },
    ],
    rentalTitle: "Rental",
    rentalP:
      "For some reason, manual cranes are needed to dismantle tower cranes from difficult areas where small mobile cranes cannot get close to the tower crane. We can use a manual crane just like a tower crane, with lower cost.",
    manufactureTitle: "Design & manufacture",
    manufactureP:
      "Beside rental manual crane to our client, our engineers have been designing and manufacturing manual cranes too. Custom configurations available — share your site constraints with us.",
    galleryTitle: "Field Deployments",
    gallery: [
      { src: "/images/design/tower-crane/tc-3.jpg", label: "Rigging setup" },
      { src: "/images/design/tower-crane/tc-fix-1.jpg", label: "Structural anchor" },
      { src: "/images/design/tower-crane/tc-4.jpg", label: "Lift operation" },
      { src: "/images/design/passenger-hoist/ph-1.jpg", label: "Compact footprint" },
      { src: "/images/design/tower-crane/tc-fix-2.jpg", label: "Dismantling sequence" },
      { src: "/images/design/passenger-hoist/ph-2.jpg", label: "Component detail" },
      { src: "/images/design/field-service/fs-2.jpg", label: "Site integration" },
      { src: "/images/design/tower-crane/tc-fix-3.jpg", label: "Hero unit" },
      { src: "/images/design/field-service/fs-3.jpg", label: "Deployment detail" },
    ],
    ctaTitle: "Discuss your dismantling constraints",
    ctaDesc: "We will propose either a rental unit or a custom-manufactured manual crane.",
    emailSubject: "Manual Crane Inquiry",
    waText: "Hello, I'd like to ask about manual crane rental or fabrication.",
  },
} as const;

export default function ManualCranePage() {
  const { lang } = useLang();
  const L = C[lang];

  return (
    <PageShell
      heroEyebrow={L.heroEyebrow}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/design/tower-crane/tc-2.jpg"
    >
      {/* Main: Specialized Access Logic + spec card. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <GlassCard className="md:col-span-8 p-10">
            <h2 className="font-headline-lg text-headline-lg mb-6 border-b border-outline-variant/30 pb-4">
              {L.logicTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
              {L.logicP}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {L.useCases.map((u) => (
                <div key={u.title} className="flex gap-4 items-start">
                  <span
                    className="material-symbols-outlined text-secondary"
                    aria-hidden
                  >
                    {u.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 uppercase tracking-tight">
                      {u.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Spec mini-panel */}
          <GlassCard className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-label-technical text-secondary mb-4">{L.metrics}</h3>
              <div className="space-y-4">
                {L.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between border-b border-outline-variant/10 pb-2"
                  >
                    <span className="text-on-surface-variant text-sm">{s.label}</span>
                    <span className="font-label-technical text-on-surface">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="h-40 w-full rounded overflow-hidden border border-outline-variant/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/design/field-service/fs-1.jpg"
                  alt="Manual crane deployment detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Rental vs manufacture. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              {L.rentalTitle}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {L.rentalP}
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              {L.manufactureTitle}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {L.manufactureP}
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Field deployment gallery — 9 photos. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">{L.galleryTitle}</h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {L.gallery.map((p, i) => (
            <div
              key={p.src + "-" + i}
              className="aspect-square relative group overflow-hidden bg-surface-variant rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-label-technical text-white">{p.label}</span>
              </div>
            </div>
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
