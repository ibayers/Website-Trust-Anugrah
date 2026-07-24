import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.6: Material Lift — Single & Double.
// Specs verified against Material_Lift.html (engine: Peter-Lister, 800kg, 40m max).
// Ported from _archive/design/material_lift_modernized/code.html.
const mlSpecs = [
  { label: 'Device Name', value: 'Material Lifts (Single / Double)' },
  { label: 'Capacity', value: '800 kg' },
  { label: 'Max. Height', value: '40 Meters' },
  { label: 'Engine', value: 'Peter - Lister' },
  { label: 'Configuration', value: '3 Cyl. Industrial Grade' },
];

const mlServices = [
  {
    icon: 'construction',
    title: 'Erection Service',
    desc: 'Professional deployment and rigging by our senior engineering crew.',
  },
  {
    icon: 'link',
    title: 'Wall Tie-In',
    desc: 'Precision structural anchoring for maximum stability at peak heights.',
  },
  {
    icon: 'layers_clear',
    title: 'Dismantling',
    desc: 'Safe and systematic decommissioning post-project completion.',
  },
];

export default function MaterialLiftPage() {
  return (
    <PageShell
      heroEyebrow="Engineering Excellence"
      heroTitle="Material Lift Systems"
      heroSubtitle="Heavy-duty freight elevators designed for maximum vertical efficiency during intensive construction finishing periods. Engineered for reliability, safety, and rapid deployment."
      heroImage="/images/design/material-lift/hero.jpg"
    >
      {/* Bento: spec table card + side action cards. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Spec table card */}
          <GlassCard className="md:col-span-8 p-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant">
              <h2 className="font-headline-md text-headline-md">Technical Specifications</h2>
              <span className="material-symbols-outlined text-secondary" aria-hidden>
                analytics
              </span>
            </div>
            <div className="flex flex-col gap-0 overflow-hidden rounded-lg">
              {mlSpecs.map((row, i) => (
                <div
                  key={row.label}
                  className={
                    i === mlSpecs.length - 1
                      ? 'spec-row grid grid-cols-2 p-4 font-label-technical text-on-surface-variant'
                      : 'spec-row grid grid-cols-2 p-4 font-label-technical text-on-surface-variant border-b border-outline-variant/10'
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> {row.label}
                  </span>
                  <span className="text-on-surface font-bold">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-surface-container-highest/30 rounded-lg border border-outline-variant/20 italic text-on-surface-variant">
              &quot;This tool significantly overcomes the material needs of freight elevators in buildings during finishing
              periods. Operation requires a certified specialist. Rental costs are drastically reduced by optimizing
              site logistics with this unit.&quot;
            </div>
          </GlassCard>

          {/* Side actions */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            {mlServices.map((svc) => (
              <GlassCard
                key={svc.title}
                className="p-8 flex-1 group cursor-pointer hover:bg-surface-container-highest/40 transition-all"
              >
                <span
                  className={`material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block`}
                  aria-hidden
                >
                  {svc.icon}
                </span>
                <h3 className="font-headline-md text-xl mb-2">{svc.title}</h3>
                <p className="text-on-surface-variant text-sm">{svc.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Schematics gallery — 2-col technical diagrams. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">Configurations</h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {[
            { src: '/images/design/material-lift/schematic-01.jpg', title: 'Single Configuration', desc: 'Compact footprint for narrow shafts and lighter load profiles.' },
            { src: '/images/design/material-lift/schematic-02.jpg', title: 'Double Configuration', desc: 'Doubled throughput for high-demand finishing-phase logistics.' },
          ].map((s) => (
            <GlassCard key={s.src} className="p-0 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-xl mb-2">{s.title}</h3>
                <p className="text-on-surface-variant text-sm">{s.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Description card. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-8 max-w-3xl">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Description</h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Given the material needs of freight elevators in the building during the finishing period, this tool can
            overcome them. It requires an operator to run it, and rental costs can be reduced by using this equipment.
          </p>
          <p className="mt-6 text-on-surface-variant text-sm">
            Available in single and double configurations. Peter-Lister 3-cyl. industrial-grade engine, 800 kg capacity,
            40-meter maximum height.
          </p>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Ask about material lift rental
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Single or double configuration, site access, finishing-phase timeline.
          </p>
          <ContactCTA
            emailSubject="Material Lift Inquiry"
            waText="Hello, I'd like to ask about material lift rental."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
