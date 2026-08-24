'use client';

import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { useLang } from '@/lib/i18n';

// PRD §5.3. Eight services lifted from Home.html job description (§3).
const C = {
  id: {
    heroEyebrow: 'Man Power Services',
    heroTitle: 'Dukungan Penuh Operator & Teknisi',
    heroSubtitle:
      'Operator dan teknisi bersertifikat untuk tower crane dan passenger hoist; servis dan perawatan elektrikal & mekanikal; erection dan dismantling; mobilisasi/demobilisasi; loading/unloading kontainer; wall tie-in; serta perbaikan unit rusak.',
    learnMore: 'Pelajari',
    ctaTitle: 'Butuh sesuatu yang spesifik?',
    ctaDesc: 'Sampaikan kebutuhan Anda; kami arahkan ke tim yang tepat.',
    emailSubject: 'Pertanyaan Layanan',
    waText: 'Halo, saya ingin bertanya tentang layanan.',
    services: [
      { icon: 'workspace_premium', title: 'Operator dan teknisi bersertifikat untuk tower crane dan passenger hoist', href: '/crew/' },
      { icon: 'build', title: 'Servis elektrikal dan mekanikal', href: '/contact/' },
      { icon: 'handyman', title: 'Perawatan elektrikal dan mekanikal', href: '/contact/' },
      { icon: 'construction', title: 'Erection dan dismantling', href: '/manual-crane/' },
      { icon: 'local_shipping', title: 'Mobilisasi dan demobilisasi', href: '/contact/' },
      { icon: 'inventory_2', title: 'Loading dan unloading kontainer', href: '/contact/' },
      { icon: 'link', title: 'Wall tie-in', href: '/contact/' },
      { icon: 'build_circle', title: 'Perbaikan unit rusak (bengkok atau patah)', href: '/parts/' },
    ],
  },
  en: {
    heroEyebrow: 'Man Power Services',
    heroTitle: 'Full Support for Operators and Technicians',
    heroSubtitle:
      'Certified operators and technicians for tower crane and passenger hoist; electrical and mechanical servicing and maintenance; erection and dismantling; mobilization/demobilization; container loading/unloading; wall tie-in; and repair of damaged units.',
    learnMore: 'Learn more',
    ctaTitle: 'Need something specific?',
    ctaDesc: 'Share your requirements; we will route to the right team.',
    emailSubject: 'Service Inquiry',
    waText: "Hello, I'd like to ask about a service.",
    services: [
      { icon: 'workspace_premium', title: 'Provide certified operators and technicians for tower crane and passenger hoist', href: '/crew/' },
      { icon: 'build', title: 'Electrical and mechanical servicing', href: '/contact/' },
      { icon: 'handyman', title: 'Electrical and mechanical maintenance', href: '/contact/' },
      { icon: 'construction', title: 'Erection and dismantling', href: '/manual-crane/' },
      { icon: 'local_shipping', title: 'Mobilization and demobilization', href: '/contact/' },
      { icon: 'inventory_2', title: 'Container loading and unloading', href: '/contact/' },
      { icon: 'link', title: 'Wall tie-in', href: '/contact/' },
      { icon: 'build_circle', title: 'Repair of damaged units (bent or broken)', href: '/parts/' },
    ],
  },
} as const;

export default function ServicesPage() {
  const { lang } = useLang();
  const L = C[lang];

  return (
    <PageShell
      heroEyebrow={L.heroEyebrow}
      heroTitle={L.heroTitle}
      heroSubtitle={L.heroSubtitle}
      heroImage="/images/services.jpg"
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {L.services.map((svc) => (
            <Link
              key={svc.title}
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
                  <span className="font-label-technical text-tertiary uppercase tracking-widest text-xs">
                    {L.learnMore}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Foto lapangan — services2.jpg, full-color. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="wm glass-panel rounded-2xl overflow-hidden border border-outline-variant/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services2.jpg"
            alt="PT Trust Anugrah field services"
            className="w-full h-auto"
            loading="lazy"
          />
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
