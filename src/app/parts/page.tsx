'use client';

import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { useLang } from '@/lib/i18n';

// PRD §5.9. Parts list from Home.html (§3): slewing ring, joystick, wire rope, etc.
// + Build & Rebuild Part capability.
const C = {
  id: {
    heroEyebrow: 'Suplai & Fabrikasi',
    heroTitle: 'Suplai Sparepart',
    heroSubtitle:
      'Slewing ring, joystick, wire rope, controller, kabin, resistor — disuplai secara internasional dan didukung kapabilitas bangun & rebuild kami.',
    catalog: 'Katalog',
    buildTitle: 'Bangun & Rebuild',
    buildDesc:
      'Kami tidak hanya menyuplai — kami membangun dan merebuild sparepart. Insinyur kami memfabrikasi cage, brake hoist, dan komponen khusus lain untuk armada passenger hoist dan tower crane.',
    ctaTitle: 'Minta Sparepart',
    ctaDesc:
      'Sebutkan nomor part, model mesin, atau jelaskan kendalanya — kami carikan atau fabrikasi.',
    emailSubject: 'Pertanyaan Sparepart',
    waText: 'Halo, saya ingin bertanya tentang sparepart.',
    parts: [
      { name: 'Slewing Ring', origin: 'China' },
      { name: 'Crane Controller', origin: 'Prancis' },
      { name: 'Wire Rope', origin: 'Belgia' },
      { name: 'Crane Cabins', origin: 'Berbagai' },
      { name: 'Resistors', origin: 'Berbagai' },
      { name: 'Control Cabinets', origin: 'Berbagai' },
      { name: 'Joystick', origin: 'Berbagai' },
    ],
  },
  en: {
    heroEyebrow: 'Supply & Fabrication',
    heroTitle: 'Parts Supply',
    heroSubtitle:
      'Slewing ring, joystick, wire rope, controllers, cabins, resistors — sourced internationally and supported by our build & rebuild capability.',
    catalog: 'Catalog',
    buildTitle: 'Build & Rebuild',
    buildDesc:
      'We do not only supply — we build and rebuild parts. Our engineers fabricate cage, brake hoist, and other custom components for passenger hoist and tower crane fleets.',
    ctaTitle: 'Request a part',
    ctaDesc:
      'Tell us the part number, machine model, or describe the problem — we will source or fabricate it.',
    emailSubject: 'Parts Inquiry',
    waText: "Hello, I'd like to ask about a part.",
    parts: [
      { name: 'Slewing Ring', origin: 'China' },
      { name: 'Crane Controller', origin: 'France' },
      { name: 'Wire Rope', origin: 'Belgium' },
      { name: 'Crane Cabins', origin: 'Various' },
      { name: 'Resistors', origin: 'Various' },
      { name: 'Control Cabinets', origin: 'Various' },
      { name: 'Joystick', origin: 'Various' },
    ],
  },
} as const;

export default function PartsPage() {
  const { lang } = useLang();
  const L = C[lang];

  return (
    <PageShell
      heroEyebrow={L.heroEyebrow}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/parts.jpg"
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <GlassCard className="lg:col-span-2 p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">{L.catalog}</h2>
            <ul className="divide-y divide-outline-variant/30">
              {L.parts.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between py-3 font-label-technical"
                >
                  <span className="text-on-surface text-body-md">{p.name}</span>
                  <span className="text-on-surface-variant uppercase tracking-widest text-xs">
                    {p.origin}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              {L.buildTitle}
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {L.buildDesc}
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
