import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company } from '@/content/company';
import { verifiedValue } from '@/lib/contact';

// Home / Landing — ported from _archive/design/home_modernized/code.html.
// Hero image: /images/A1 CRANE.jpg (local, from archive batch).
// Stats: onlyVerified per PRD §4 rule 4 (design fabricates 142/85+/500+ — we ship 20+/500+ with caveat).
export default function HomePage() {
  const tagline = verifiedValue(company.tagline);
  const motto = verifiedValue(company.motto);
  const narrative = verifiedValue(company.foundingNarrative);
  const coreBusiness = verifiedValue(company.coreBusiness) ?? [];

  // 3 service cards verbatim from design's "Our Core Capabilities".
  const services = [
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
        ['POLICY', motto],
      ],
    },
  ] as const;

  // Equipment grid — link cards to each equipment page.
  const equipment = [
    { href: '/tower-crane/', icon: 'precision_manufacturing', title: 'Tower Crane', desc: 'Potain, Raimondi, Jianglu, QT80, Peinner.' },
    { href: '/passenger-hoist/', icon: 'elevator', title: 'Passenger Hoist', desc: '80–100 m height rental capabilities.' },
    { href: '/material-lift/', icon: 'forklift', title: 'Material Lift', desc: 'Single & double configurations.' },
    { href: '/manual-crane/', icon: 'construction', title: 'Manual Crane', desc: 'Low-cost dismantling alternative.' },
    { href: '/genset/', icon: 'bolt', title: 'Generator Set', desc: '150–250 kVA Mitsubishi & Nissan.' },
    { href: '/sell/', icon: 'shopping_cart', title: 'Sell', desc: 'New MG5023 / MG6015 / MG6036 / MG7030.' },
  ] as const;

  return (
    <PageShell
      heroEyebrow={tagline ?? 'Your Trusty Partners'}
      heroTitle={
        <>
          Industrial <br />
          <span className="text-secondary">Reliability</span> In Every Lift.
        </>
      }
      heroSubtitle="PT. TRUST ANUGRAH PERSADA delivers high-performance industrial machinery designed for precision, safety, and the extreme demands of modern construction."
      heroImage="/images/design/home/hero.jpg"
    >
      {/* Core business pillars — Verified from company foundingNarrative. */}
      <section className="px-margin-desktop py-section-gap">
        <SectionHeading
          eyebrow="What We Do"
          title="Four pillars of service"
          subtitle="Core business activities verified against the company founding narrative."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {coreBusiness.map((pillar, i) => (
            <GlassCard key={pillar} className="p-6">
              <span className="font-label-technical text-tertiary text-xs uppercase tracking-widest">
                0{i + 1}
              </span>
              <p className="mt-3 font-headline-md text-body-lg text-on-surface font-semibold">{pillar}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Service spec-sheet cards — lifted from home_modernized/code.html SRV-01..03. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">Our Core Capabilities</h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((svc) => (
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
                    <span className="text-on-surface">{v}</span>
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
              src="/images/design/home/bento-feature.jpg"
              alt="Featured tower crane on Jakarta construction site"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
              <span className="font-label-technical text-tertiary mb-2">FEATURED EQUIPMENT</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Tower Crane Fleet</h3>
              <p className="text-on-surface-variant max-w-xl mb-6">
                Built for Jakarta&apos;s skyline. Potain, Raimondi, Jianglu, QT80 — erection, dismantling, parts, and certified operators.
              </p>
              <Link
                href="/tower-crane/"
                className="self-start px-6 py-2 border border-tertiary text-tertiary font-label-technical hover:bg-tertiary/20 transition-all"
              >
                VIEW EQUIPMENT →
              </Link>
            </div>
          </div>

          {/* Side stats + consultation */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
            <GlassCard className="flex-1 p-8">
              <h4 className="font-label-technical text-secondary mb-6">VERIFIED PROFILE</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-sm">Founded</span>
                  <span className="font-headline-md text-body-md font-bold">1985</span>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-sm">Incorporated</span>
                  <span className="font-headline-md text-body-md font-bold">1998</span>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-sm">Pillars</span>
                  <span className="font-headline-md text-body-md font-bold">4 Core</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Motto</span>
                  <span className="font-headline-md text-body-md font-bold text-tertiary text-glow">
                    Safety 1st
                  </span>
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
                Consult a Specialist
              </h4>
              <p className="text-on-secondary-container/80 text-sm mb-4">
                Site assessment, equipment match, lead time — within 24 hours.
              </p>
              <Link
                href="/contact/"
                className="w-full inline-block text-center py-4 bg-surface text-on-surface font-label-technical font-bold hover:bg-surface-bright transition-colors"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment directory grid. */}
      <section className="px-margin-desktop py-section-gap">
        <SectionHeading
          eyebrow="Equipment Division"
          title="Browse our fleet"
          subtitle="Click through to specifications, capabilities, and verified model lists."
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
                  <p className="text-on-surface-variant text-body-md">{svc.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission statement — verified narrative + stats. */}
      <section className="px-margin-desktop py-section-gap relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label-technical text-secondary tracking-widest block mb-4">OUR PHILOSOPHY</span>
          <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
            &quot;{motto}&quot;
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-12">{narrative}</p>
          <div className="flex justify-center gap-12">
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">20+</div>
              <div className="font-label-technical text-outline">YEARS EXP</div>
            </div>
            <div className="w-[1px] bg-outline-variant" />
            <div>
              <div className="font-display-xl text-headline-lg text-on-surface">5</div>
              <div className="font-label-technical text-outline">EQUIPMENT LINES</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{motto}</h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Request a quote, schedule a service, or ask about parts availability.
          </p>
          <ContactCTA
            emailSubject="Quote Request — PT Trust Anugrah"
            waText="Hello, I'd like to request a quote."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
