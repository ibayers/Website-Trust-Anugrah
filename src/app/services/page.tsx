import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.3. Eight services lifted from Home.html job description (§3).
const services = [
  {
    icon: 'precision_manufacturing',
    title: 'Tower Crane — Rental, Service & Maintenance',
    href: '/tower-crane/',
  },
  {
    icon: 'elevator',
    title: 'Passenger Hoist — Rental, Service & Maintenance',
    href: '/passenger-hoist/',
  },
  {
    icon: 'forklift',
    title: 'Material Lift — Rental, Service & Maintenance',
    href: '/material-lift/',
  },
  {
    icon: 'bolt',
    title: 'Generator Set — Rental, Service & Maintenance',
    href: '/genset/',
  },
  {
    icon: 'settings_input_component',
    title: 'Parts Supply — slewing ring, joystick, wire rope, etc.',
    href: '/parts/',
  },
  {
    icon: 'build_circle',
    title: 'Build & Rebuild Parts',
    href: '/parts/',
  },
  {
    icon: 'troubleshoot',
    title: 'Troubleshooting',
    href: '/contact/',
  },
  {
    icon: 'engineering',
    title: 'Manual Crane — design, manufacture, dismantling support',
    href: '/manual-crane/',
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      heroEyebrow="Full-Spectrum Equipment Services"
      heroTitle="Services"
      heroSubtitle="Eight core services covering rental, parts supply, troubleshooting, and custom engineering — for tower crane, hoist, material lift, genset, and manual crane."
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {services.map((svc) => (
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
                    Learn more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Need something specific?
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Share your requirements; we will route to the right team.
          </p>
          <ContactCTA
            emailSubject="Service Inquiry"
            waText="Hello, I'd like to ask about a service."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
