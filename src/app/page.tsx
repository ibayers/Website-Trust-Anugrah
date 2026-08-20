'use client';

import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company, companyId } from '@/content/company';
import { verifiedValue } from '@/lib/contact';
import { useLang } from '@/lib/i18n';

// Home / Landing — ported from _archive/design/home_modernized/code.html.
// Stats: onlyVerified per PRD §4 rule 4 (design fabricates 142/85+/500+ — we ship 20+/500+ with caveat).
// Bilingual: ID (default) + EN via useLang().

const C = {
  id: {
    heroTitle: (
      <>
        Keandalan <br />
        <span className="text-secondary">Industri</span> di Setiap Angkatan.
      </>
    ),
    heroSubtitle:
      'PT. TRUST ANUGRAH PERSADA menyediakan mesin industri berkinerja tinggi yang dirancang untuk presisi, keselamatan, dan tuntutan ekstrem konstruksi modern.',
    pillars: {
      eyebrow: 'Yang Kami Lakukan',
      title: 'Empat pilar layanan',
      subtitle: 'Aktivitas bisnis inti terverifikasi dari narasi pendirian perusahaan.',
    },
    pillarDescriptions: [
      'Sewa tower crane, passenger hoist, material lift, manual crane, dan genset — didukung kru perawatan bersertifikat dan dukungan operator 24/7.',
      'Puluhan tahun eksekusi di lapangan: erection, dismantling, dan rebuild struktural untuk proyek high-rise dan infrastruktur di Jawa dan luar Jawa.',
      'Deployment presisi dengan pekerjaan pondasi, wall tie-in, dan rekayasa khusus lokasi. Kepatuhan K3 / HSE penuh di setiap pengangkatan.',
      'Suplai langsung komponen berkualitas tinggi — slewing ring, joystick, wire rope, dan modul elektronik dari Prancis, Belgia, dan China.',
    ] as readonly string[],
    capabilitiesTitle: 'Kapabilitas Inti Kami',
    services: [
      {
        id: 'SRV-01',
        icon: 'architecture',
        title: 'Sewa & Servis',
        desc: 'Solusi sewa menyeluruh untuk tower crane, passenger hoist, dan genset, didukung tim perawatan bersertifikat.',
        specs: [
          ['KESEDIAAN', 'Kru Terverifikasi'],
          ['RESPON', 'Dukungan Lapangan'],
        ],
      },
      {
        id: 'SRV-02',
        icon: 'settings_input_component',
        title: 'Sparepart & Suplai',
        desc: 'Suplai langsung komponen presisi tinggi: slewing ring, joystick, wire rope, dan modul elektronik.',
        specs: [
          ['KUALITAS', 'Sumber OEM'],
          ['LOGISTIK', 'Dalam/Luar Jawa'],
        ],
      },
      {
        id: 'SRV-03',
        icon: 'build_circle',
        title: 'Bangun & Rebuild',
        desc: 'Rekayasa siklus penuh termasuk rebuild struktural dan troubleshooting armada mesin berat yang menua.',
        specs: [
          ['KEAHLIAN', 'Teknik Sipil'],
          ['KEBIJAKAN', 'placeholder-motto'],
        ],
      },
    ],
    featuredLabel: 'PERALATAN UNGGULAN',
    featuredTitle: 'Armada Tower Crane',
    featuredDesc:
      'Dibangun untuk skyline Jakarta. Potain, Raimondi, Jianglu, QT80 — erection, dismantling, sparepart, dan operator bersertifikat.',
    viewEquipment: 'LIHAT PERALATAN →',
    profileLabel: 'PROFIL TERVERIFIKASI',
    profile: [
      ['Berdiri', '1985'],
      ['Badan Hukum', '1998'],
      ['Pilar', '4 Inti'],
    ] as readonly [string, string][],
    consultTitle: 'Konsultasi Spesialis',
    consultDesc: 'Survei lokasi, pencocokan alat, waktu tunggu — dalam 24 jam.',
    consultBtn: 'BUAT JADWAL',
    directory: {
      eyebrow: 'Divisi Peralatan',
      title: 'Jelajahi armada kami',
      subtitle: 'Klik untuk spesifikasi, kapabilitas, dan daftar model terverifikasi.',
    },
    philosophyLabel: 'FILOSOFI KAMI',
    yearsLabel: 'TAHUN PENGALAMAN',
    linesLabel: 'LINI PERALATAN',
    ctaDesc: 'Minta penawaran, jadwalkan servis, atau tanyakan ketersediaan sparepart.',
    emailSubject: 'Permintaan Penawaran — PT Trust Anugrah',
    waText: 'Halo, saya ingin meminta penawaran.',
  },
  en: {
    heroTitle: (
      <>
        Industrial <br />
        <span className="text-secondary">Reliability</span> In Every Lift.
      </>
    ),
    heroSubtitle:
      'PT. TRUST ANUGRAH PERSADA delivers high-performance industrial machinery designed for precision, safety, and the extreme demands of modern construction.',
    pillars: {
      eyebrow: 'What We Do',
      title: 'Four pillars of service',
      subtitle: 'Core business activities verified against the company founding narrative.',
    },
    pillarDescriptions: [
      'Rental tower cranes, passenger hoists, material lifts, manual cranes, and gensets — backed by certified maintenance crews and 24/7 operator support.',
      'Decades of on-site execution: erection, dismantling, and structural rebuilds for high-rise and infrastructure projects across Java and beyond.',
      'Precision deployment with foundation work, wall tie-ins, and site-specific engineering. Full K3 / HSE compliance on every lift.',
      'Direct supply of high-grade components — slewing rings, joysticks, wire ropes, and electronic modules sourced from France, Belgium, and China.',
    ] as readonly string[],
    capabilitiesTitle: 'Our Core Capabilities',
    services: [
      {
        id: 'SRV-01',
        icon: 'architecture',
        title: 'Rental & Service',
        desc: 'Comprehensive rental solutions for tower cranes, passenger hoists, and gensets, backed by certified maintenance teams.',
        specs: [
          ['AVAILABILITY', 'Verified Crew'],
          ['RESPONSE', 'Field Support'],
        ],
      },
      {
        id: 'SRV-02',
        icon: 'settings_input_component',
        title: 'Parts & Supply',
        desc: 'Direct supply of high-precision components: slewing rings, joysticks, wire ropes, and electronic modules.',
        specs: [
          ['QUALITY', 'OEM Sources'],
          ['LOGISTICS', 'In/Out Java'],
        ],
      },
      {
        id: 'SRV-03',
        icon: 'build_circle',
        title: 'Build & Rebuild',
        desc: 'Full lifecycle engineering including structural rebuilds and troubleshooting for aging heavy machinery fleets.',
        specs: [
          ['EXPERTISE', 'Civil Engineering'],
          ['POLICY', 'placeholder-motto'],
        ],
      },
    ],
    featuredLabel: 'FEATURED EQUIPMENT',
    featuredTitle: 'Tower Crane Fleet',
    featuredDesc:
      "Built for Jakarta's skyline. Potain, Raimondi, Jianglu, QT80 — erection, dismantling, parts, and certified operators.",
    viewEquipment: 'VIEW EQUIPMENT →',
    profileLabel: 'VERIFIED PROFILE',
    profile: [
      ['Founded', '1985'],
      ['Incorporated', '1998'],
      ['Pillars', '4 Core'],
    ] as readonly [string, string][],
    consultTitle: 'Consult a Specialist',
    consultDesc: 'Site assessment, equipment match, lead time — within 24 hours.',
    consultBtn: 'BOOK APPOINTMENT',
    directory: {
      eyebrow: 'Equipment Division',
      title: 'Browse our fleet',
      subtitle: 'Click through to specifications, capabilities, and verified model lists.',
    },
    philosophyLabel: 'OUR PHILOSOPHY',
    yearsLabel: 'YEARS EXP',
    linesLabel: 'EQUIPMENT LINES',
    ctaDesc: 'Request a quote, schedule a service, or ask about parts availability.',
    emailSubject: 'Quote Request — PT Trust Anugrah',
    waText: "Hello, I'd like to request a quote.",
  },
} as const;

// Equipment grid — link cards to each equipment page.
const equipment = [
  {
    href: '/tower-crane/',
    icon: 'precision_manufacturing',
    title: 'Tower Crane',
    descId: 'Potain, Raimondi, Jianglu, QT80, Peinner.',
    descEn: 'Potain, Raimondi, Jianglu, QT80, Peinner.',
  },
  {
    href: '/passenger-hoist/',
    icon: 'elevator',
    title: 'Passenger Hoist',
    descId: 'Kemampuan sewa hingga 80–100 m.',
    descEn: '80–100 m height rental capabilities.',
  },
  {
    href: '/material-lift/',
    icon: 'forklift',
    title: 'Material Lift',
    descId: 'Konfigurasi tunggal & ganda.',
    descEn: 'Single & double configurations.',
  },
  {
    href: '/manual-crane/',
    icon: 'construction',
    title: 'Manual Crane',
    descId: 'Alternatif dismantling biaya rendah.',
    descEn: 'Low-cost dismantling alternative.',
  },
  {
    href: '/genset/',
    icon: 'bolt',
    title: 'Generator Set',
    descId: '150–250 kVA Mitsubishi & Nissan.',
    descEn: '150–250 kVA Mitsubishi & Nissan.',
  },
  {
    href: '/sell/',
    icon: 'shopping_cart',
    title: 'Sell',
    descId: 'Unit baru MG5023 / MG6015 / MG6036 / MG7030.',
    descEn: 'New MG5023 / MG6015 / MG6036 / MG7030.',
  },
] as const;

export default function HomePage() {
  const { lang } = useLang();
  const L = C[lang];
  const tagline = lang === 'id' ? companyId.tagline : verifiedValue(company.tagline);
  const motto = lang === 'id' ? companyId.motto : verifiedValue(company.motto);
  const narrative =
    lang === 'id' ? companyId.foundingNarrative : verifiedValue(company.foundingNarrative);
  const coreBusiness = lang === 'id' ? companyId.coreBusiness : verifiedValue(company.coreBusiness) ?? [];

  return (
    <PageShell
      heroEyebrow={tagline ?? 'Your Trusty Partners'}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/design/home/hero.jpg"
    >
      {/* Core business pillars — Verified from company foundingNarrative. */}
      <section className="px-margin-desktop py-section-gap">
        <SectionHeading
          eyebrow={L.pillars.eyebrow}
          title={L.pillars.title}
          subtitle={L.pillars.subtitle}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {coreBusiness.map((pillar, i) => {
            const desc = L.pillarDescriptions[i] ?? '';
            return (
              <GlassCard key={pillar} className="p-6">
                <span className="font-label-technical text-tertiary text-xs uppercase tracking-widest">
                  0{i + 1}
                </span>
                <p className="mt-3 font-headline-md text-body-lg text-on-surface font-semibold">{pillar}</p>
                {desc && (
                  <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Service spec-sheet cards — SRV-01..03. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">{L.capabilitiesTitle}</h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {L.services.map((svc) => (
            <GlassCard key={svc.id} className="p-8 group hover:border-secondary/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl" aria-hidden>
                  {svc.icon}
                </span>
                <span className="font-label-technical text-outline opacity-40">{svc.id}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">
                {svc.title}
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3">{svc.desc}</p>
              <div className="space-y-3 border-t border-outline-variant/30 pt-6">
                {svc.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center text-xs font-label-technical">
                    <span className="text-outline">{k}</span>
                    <span className="text-on-surface">{v === 'placeholder-motto' ? motto : v}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Bento product highlight — featured equipment + stats + consultation. */}
      <section className="px-margin-desktop py-section-gap bg-surface-dim/40">
        <div className="grid grid-cols-12 gap-gutter h-auto lg:h-[640px]">
          {/* Main featured image */}
          <div className="col-span-12 lg:col-span-8 relative overflow-hidden glass-panel rounded-xl group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design/tower-crane/tc-1.jpg"
              alt="Featured tower crane on Jakarta construction site"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
              <span className="font-label-technical text-tertiary mb-2">{L.featuredLabel}</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">{L.featuredTitle}</h3>
              <p className="text-on-surface-variant max-w-xl mb-6">{L.featuredDesc}</p>
              <Link
                href="/tower-crane/"
                className="self-start px-6 py-2 border border-tertiary text-tertiary font-label-technical hover:bg-tertiary/20 transition-all"
              >
                {L.viewEquipment}
              </Link>
            </div>
          </div>

          {/* Side stats + consultation */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
            <GlassCard className="flex-1 p-8">
              <h4 className="font-label-technical text-secondary mb-6">{L.profileLabel}</h4>
              <div className="space-y-6">
                {L.profile.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                    <span className="text-sm">{k}</span>
                    <span className="font-headline-md text-body-md font-bold">{v}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <span className="text-sm">Motto</span>
                  <span className="font-headline-md text-body-md font-bold text-tertiary text-glow">{motto}</span>
                </div>
              </div>
            </GlassCard>
            <div className="flex-1 relative overflow-hidden bg-secondary-container p-8 flex flex-col justify-between rounded-xl">
              <div className="absolute -right-4 -bottom-4 opacity-20">
                <span className="material-symbols-outlined text-[120px]" aria-hidden>
                  engineering
                </span>
              </div>
              <h4 className="font-headline-md text-body-md font-extrabold text-on-secondary-container">
                {L.consultTitle}
              </h4>
              <p className="text-on-secondary-container/80 text-sm mb-4">{L.consultDesc}</p>
              <Link
                href="/contact/"
                className="w-full inline-block text-center py-4 bg-surface text-on-surface font-label-technical font-bold hover:bg-surface-bright transition-colors"
              >
                {L.consultBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment directory grid. */}
      <section className="px-margin-desktop py-section-gap">
        <SectionHeading
          eyebrow={L.directory.eyebrow}
          title={L.directory.title}
          subtitle={L.directory.subtitle}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {equipment.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group glass-panel rounded-xl border border-outline-variant/30 p-8 hover:border-tertiary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary" aria-hidden>
                    {svc.icon}
                  </span>
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    {lang === 'id' ? svc.descId : svc.descEn}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission statement — verified narrative + stats. */}
      <section className="px-margin-desktop py-section-gap relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label-technical text-secondary tracking-widest block mb-4">{L.philosophyLabel}</span>
          <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
            &quot;{motto}&quot;
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-12">{narrative}</p>
          <div className="flex justify-center gap-12">
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">20+</div>
              <div className="font-label-technical text-outline">{L.yearsLabel}</div>
            </div>
            <div className="w-[1px] bg-outline-variant" />
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">5</div>
              <div className="font-label-technical text-outline">{L.linesLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{motto}</h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">{L.ctaDesc}</p>
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
