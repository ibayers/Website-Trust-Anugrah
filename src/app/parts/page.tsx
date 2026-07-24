import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.9. Parts list from Home.html (§3): slewing ring, joystick, wire rope, etc.
// + Build & Rebuild Part capability.
const parts = [
  { name: 'Slewing Ring', origin: 'China' },
  { name: 'Crane Controller', origin: 'France' },
  { name: 'Wire Rope', origin: 'Belgium' },
  { name: 'Crane Cabins', origin: 'Various' },
  { name: 'Resistors', origin: 'Various' },
  { name: 'Control Cabinets', origin: 'Various' },
  { name: 'Joystick', origin: 'Various' },
];

export default function PartsPage() {
  return (
    <PageShell
      heroEyebrow="Supply & Fabrication"
      heroTitle="Parts Supply"
      heroSubtitle="Slewing ring, joystick, wire rope, controllers, cabins, resistors — sourced internationally and supported by our build & rebuild capability."
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <GlassCard className="lg:col-span-2 p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Catalog</h2>
            <ul className="divide-y divide-outline-variant/30">
              {parts.map((p) => (
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
              Build &amp; Rebuild
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We do not only supply — we build and rebuild parts. Our engineers fabricate cage,
              brake hoist, and other custom components for passenger hoist and tower crane fleets.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Request a part
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Tell us the part number, machine model, or describe the problem — we will source or
            fabricate it.
          </p>
          <ContactCTA
            emailSubject="Parts Inquiry"
            waText="Hello, I'd like to ask about a part."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
