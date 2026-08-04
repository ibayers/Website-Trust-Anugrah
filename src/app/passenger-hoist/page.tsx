import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";

// PRD §5.5. Content Verified against Passenger_Hoist.html (legacy backup).
// Ported from _archive/design/passenger_hoist_modernized/code.html.
const hoistCapabilities = [
  {
    icon: "height",
    title: "Extended Range Capacity",
    desc: "Rental passenger lift with 80-100m height capabilities, adaptable to specific project verticality needs.",
  },
  {
    icon: "bolt",
    title: "Technical Troubleshooting",
    desc: "Comprehensive electrical diagnostics, supply components, resistors, and controller replacements.",
  },
  {
    icon: "engineering",
    title: "Manufacturing & Crew",
    desc: "On-site fabrication of cages, brake hoist components, plus licensed operators from man power department.",
  },
];

const hoistServices = [
  "Rental passenger lift with 80-100m height depending on passenger lift type",
  "Electrical troubleshooting, supply components, resistors, controllers etc",
  "Service & maintenance periodically",
  "Manufacturing part of passenger lift such as cage, brake hoist etc",
  "Trucking, lifting, until destination inc outside Java",
  "Provide crew with licensed from manpower department",
];

export default function PassengerHoistPage() {
  return (
    <PageShell
      heroEyebrow="Industrial Vertical Transportation"
      heroTitle={
        <>
          High-Performance <br />
          <span className="text-secondary">Passenger Hoist</span> Solutions
        </>
      }
      heroSubtitle="Engineering reliability into every vertical meter. Our fleet of high-altitude passenger hoists is designed for maximum efficiency in skyscraper construction."
      heroImage="/images/design/passenger-hoist/ph-1.jpg"
    >
      {/* Hero metric + Bento showcase. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Operational Profile
            </h2>
            <p className="text-on-surface-variant text-body-lg">
              Vertical transport engineered for the tallest skylines, with
              verified 80-100m height capability and redundant safety systems.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="font-label-technical text-on-surface-variant">
              OPERATIONAL CAPACITY
            </span>
            <div className="text-display-xl font-display-xl text-secondary">
              100<span className="text-body-md align-top ml-1">M</span>
            </div>
            <span className="text-on-surface-variant">MAX REACH</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Featured unit */}
          <GlassCard className="md:col-span-8 h-[400px] relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design/passenger-hoist/ph-2.jpg"
              alt="Twin-cage passenger hoist on Jakarta high-rise"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-label-technical text-sm text-on-surface">
                  UNIT ID: PH-T100-26
                </span>
              </div>
              <h3 className="font-headline-md text-on-surface">
                Dual Cage Heavy Duty Hoist
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-lg mb-2">
                Precision Control
              </h4>
              <p className="text-on-surface-variant text-sm">
                Advanced variable frequency drive (VFD) for smooth acceleration
                and deceleration.
              </p>
            </div>
          </GlassCard>

          {/* Side feature cards */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <GlassCard className="p-0 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/design/passenger-hoist/ph-3.jpg"
                  alt="Variable frequency drive control panel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-lg mb-2">
                  Precision Control
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Advanced variable frequency drive (VFD) for smooth
                  acceleration and deceleration.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="p-0 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/design/passenger-hoist/service-lifecycle.jpg"
                  alt="Service technician inspecting hoist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-lg mb-2">
                  Service Lifecycle
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Full predictive maintenance support and real-time diagnostic
                  monitoring.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Lifecycle services — 2-col with cards. */}
      <section className="bg-surface-container-low/40 py-section-gap">
        <div className="px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-12">
            Our Rental &amp; Service{" "}
            <span className="text-tertiary">Commitment</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {hoistCapabilities.map((cap) => (
              <GlassCard key={cap.title} className="p-8">
                <div className="w-12 h-12 shrink-0 glass-panel flex items-center justify-center border border-secondary/30 mb-6">
                  <span
                    className="material-symbols-outlined text-secondary"
                    aria-hidden
                  >
                    {cap.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-xl mb-2">{cap.title}</h4>
                <p className="text-on-surface-variant text-sm">{cap.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Full capabilities list — Verified from source. */}
      <section className="px-margin-desktop py-section-gap">
        <h2 className="font-headline-md text-3xl mb-8 flex items-center gap-4">
          <span className="w-2 h-8 bg-secondary" />
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {hoistServices.map((cap, i) => (
            <GlassCard key={i} className="p-4 flex items-start gap-3">
              <span className="font-label-technical text-tertiary text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body-md text-on-surface leading-relaxed pt-1">
                {cap}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Schedule hoist rental
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Share site details and required height; we will propose the right
            unit.
          </p>
          <ContactCTA
            emailSubject="Passenger Hoist Inquiry"
            waText="Hello, I'd like to ask about passenger hoist rental."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
