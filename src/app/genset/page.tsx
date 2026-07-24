import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SpecRow } from '@/components/ui/SpecRow';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.8. Content Verified against Genset.html (legacy backup).
// Ported from _archive/design/genset_modernized/code.html.
const gensetSpecs = [
  { label: 'Capacity', value: 'From 150 kVA to 250 kVA' },
  { label: 'Operator', value: '24 hour stand-by' },
  { label: 'Maintenance', value: 'Monthly and service over haul' },
  { label: 'Rental', value: 'Monthly rental' },
  { label: 'Parts', value: 'Spare part replacement' },
  { label: 'Type', value: 'Open type or silent type' },
  { label: 'Use case A', value: 'Power requirement for tower cranes' },
  { label: 'Use case B', value: 'Power requirement for backup at factories, lighting' },
  { label: 'Use case C', value: 'Power needs for reserve apartments, housing, research, etc.' },
];

export default function GensetPage() {
  return (
    <PageShell
      heroEyebrow="Division: Industrial Power"
      heroTitle={
        <>
          Uninterrupted <span className="text-secondary">Precision</span> Energy.
        </>
      }
      heroSubtitle="Diesel generating sets — rental, repair, maintenance. Mitsubishi, Nissan, and other brands. 150-250 kVA with 24-hour operator stand-by."
      heroImage="/images/design/genset/hero.jpg"
    >
      {/* Hero stat + featured unit image. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <GlassCard className="lg:col-span-7 p-8">
            <h2 className="font-headline-md text-headline-md mb-6">What is a diesel generator?</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed mb-4">
              A diesel generator is the combination of a diesel engine with an electrical generator (often called an
              alternator) to generate electrical energy. Diesel generating sets are used in places without connection
              to the power grid or as emergency power-supply if the grid fails.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We provide rental services, repairs, and maintenance for various brands such as Mitsubishi, Nissan, etc.
              Genset is needed for tower crane and passenger hoist.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-outline-variant/30">
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">150-250</div>
                <div className="font-label-technical text-xs text-outline">KVA RANGE</div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">24/7</div>
                <div className="font-label-technical text-xs text-outline">OPERATOR</div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">2</div>
                <div className="font-label-technical text-xs text-outline">TYPE OPTIONS</div>
              </div>
            </div>
          </GlassCard>

          {/* Featured genset image */}
          <GlassCard className="lg:col-span-5 relative overflow-hidden min-h-[400px] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design/genset/hero.jpg"
              alt="Industrial diesel generator set"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-label-technical text-secondary text-xs uppercase tracking-widest">
                Verified Unit
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">Mitsubishi / Nissan Fleet</h3>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Use cases — split image + list. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <GlassCard className="lg:col-span-5 p-0 overflow-hidden">
            <div className="aspect-[4/3]">
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
            <h2 className="font-headline-lg text-headline-lg mb-4">Deployment Scenarios</h2>
            <div className="w-24 h-1 bg-secondary mb-8" />
            <ul className="space-y-4">
              {[
                'Power requirement for tower cranes',
                'Backup power for factories and lighting towers',
                'Reserve power for apartments, housing, and research facilities',
                'Silent or open-type configuration per site needs',
              ].map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1" aria-hidden>
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
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Specifications</h2>
        <p className="text-on-surface-variant text-body-lg mb-12">
          Nine verified specs lifted verbatim from the source.
        </p>
        <div className="rounded-xl border border-outline-variant/30 overflow-hidden">
          {gensetSpecs.map((s, i) => (
            <SpecRow key={s.label} label={s.label} value={s.value} alt={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Request genset rental</h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Capacity, type (open/silent), and duration — we will match the right unit and crew.
          </p>
          <ContactCTA
            emailSubject="Genset Inquiry"
            waText="Hello, I'd like to ask about genset rental."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
