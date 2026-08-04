import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.4. All content Verified against Tower_Crane.html (legacy backup).
// Page ported from _archive/design/tower_crane_modernized/code.html.
const tcTypesForRent = [
  { name: 'Potain FO23 / B', note: 'Industry standard for versatility' },
  { name: 'Potain H30/30', note: 'High-speed lifting series' },
  { name: 'Potain H3/36', note: 'Advanced variable frequency' },
  { name: 'Raimondi ER180', note: 'Italian precision, heavy lifting' },
  { name: 'Jianglu JL120', note: 'Robust performance, 50m jib' },
  { name: 'Jianglu JL150', note: 'High-reliability electronics' },
  { name: 'Tower Crane QT80', note: 'Compact footprint, quick erection' },
  { name: 'TC Peinner', note: 'Specialized deployments' },
];

const tcForSale = ['MG5023', 'MG6015', 'MG6036', 'MG7030'];

const tcCapabilities = [
  {
    icon: 'build',
    title: 'Erection & Dismantling',
    desc: 'Precision deployment of equipment up to 60T using advanced mobile cranes and expert technicians. We manage the entire lifecycle from arrival to site clearance.',
  },
  {
    icon: 'electric_bolt',
    title: 'Electrical Troubleshooting',
    desc: 'Certified diagnostics for crane control systems, wirerope, and slewing rings. Parts sourced globally from France, Belgium, and China.',
  },
  {
    icon: 'engineering',
    title: 'Licensed Operators',
    desc: 'Experienced and professional crews with man power department licenses, ensuring safety-first operations on every shift.',
  },
];

const tcSpecs = [
  { model: 'Potain FO23 / B', huh: '20m - 60m', jib: '45m - 50m', load: 'Varies per config' },
  { model: 'MG Series (5023 - 7030)', huh: 'Variable', jib: '40m - 70m', load: 'Industrial Heavy' },
  { model: 'Raimondi ER180', huh: 'Custom Setup', jib: 'Up to 65m', load: 'Precision Control' },
];

const otherServices = [
  'Services and maintenance periodically every month',
  'Trucking tower crane to destination in/out side Java',
  'Normal Erection and dismantling',
  'Erection and dismantling that needs 60T mobile crane or manual crane',
  'Bressing or wall tie in',
];

export default function TowerCranePage() {
  return (
    <PageShell
      heroEyebrow="Precision Elevation Systems"
      heroTitle={
        <>
          Tower Crane <br />
          <span className="text-secondary">Solutions 2026</span>
        </>
      }
      heroSubtitle="Elevating the skyline of Jakarta and beyond. Rental, erection, dismantling, parts, and certified operators — industrial-grade reliability."
      heroImage="/images/design/tower-crane/tc-2.jpg"
    >
      {/* Equipment Fleet — bento grid: featured + secondary + 3 spec cards. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">TC Equipment Fleet</h2>
            <p className="text-on-surface-variant">Global standard machinery for diverse construction requirements.</p>
          </div>
          <Link
            href="/sell/"
            className="hidden md:inline-flex items-center gap-2 font-label-technical text-secondary uppercase tracking-widest hover:gap-3 transition-all"
          >
            New units for sale
            <span className="material-symbols-outlined text-sm" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Featured main */}
          <GlassCard className="md:col-span-8 group relative overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design/tower-crane/tc-3.jpg"
              alt="Potain tower crane on Jakarta construction site"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary text-on-secondary font-label-technical text-xs rounded-full">
                  MOST POPULAR
                </span>
                <span className="px-3 py-1 border border-outline text-on-surface font-label-technical text-xs rounded-full">
                  FRENCH ENGINEERING
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Potain FO23 / B</h3>
              <p className="text-on-surface-variant max-w-md">
                The industry gold standard for versatility and load capacity. Optimized for Jakarta&apos;s dense urban environments.
              </p>
            </div>
          </GlassCard>

          {/* Secondary */}
          <GlassCard className="md:col-span-4 group relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design/tower-crane/tc-fix-1.jpg"
              alt="Raimondi ER180 crane detail"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-headline-md text-2xl mb-1">Raimondi ER180</h3>
              <p className="text-on-surface-variant text-sm">Italian precision for heavy lifting tasks.</p>
              <Link
                href="/contact/"
                className="mt-4 text-secondary font-label-technical inline-flex items-center gap-2 group/btn"
              >
                INQUIRE <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden>download</span>
              </Link>
            </div>
          </GlassCard>

          {/* Spec cards row */}
          {tcTypesForRent.slice(2, 5).map((t) => (
            <GlassCard key={t.name} className="md:col-span-4 p-6">
              <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary" aria-hidden>
                  precision_manufacturing
                </span>
              </div>
              <h4 className="font-headline-md text-xl mb-4">{t.name}</h4>
              <p className="text-on-surface-variant text-sm mb-6">{t.note}</p>
              <ul className="space-y-2 font-label-technical text-xs text-secondary opacity-80">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-secondary rounded-full" /> Verified rental unit
                </li>
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Comprehensive Lifecycle Services — 2-col with image right + service list left + badge. */}
      <section className="bg-surface-container-low/40 py-section-gap">
        <div className="px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8">
              Comprehensive <br />
              Lifecycle Services
            </h2>
            <div className="space-y-8">
              {tcCapabilities.map((cap) => (
                <div key={cap.title} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface flex items-center justify-center border border-outline-variant group-hover:border-secondary transition-colors">
                    <span className="material-symbols-outlined text-3xl" aria-hidden>
                      {cap.icon}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-headline-md text-lg mb-2">{cap.title}</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] glass-panel rounded-2xl overflow-hidden border border-outline-variant/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/design/tower-crane/tc-fix-2.jpg"
                alt="Technician performing crane maintenance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Stats floating card */}
            <GlassCard className="absolute -bottom-10 -left-10 p-8 shadow-2xl border-secondary/30 hidden md:block">
              <div className="text-secondary font-display-xl text-5xl mb-1">20+</div>
              <div className="font-label-technical text-xs tracking-widest text-on-surface uppercase">
                Years Experience
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Other capabilities list. */}
      <section className="px-margin-desktop py-section-gap">
        <h2 className="font-headline-md text-3xl mb-8 flex items-center gap-4">
          <span className="w-2 h-8 bg-secondary" />
          Additional Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {otherServices.map((cap) => (
            <div
              key={cap}
              className="flex items-center gap-3 px-4 py-3 bg-surface-container-low/40 rounded font-body-md text-body-md text-on-surface"
            >
              <span className="material-symbols-outlined text-secondary text-sm" aria-hidden>
                check_circle
              </span>
              {cap}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Performance Metrics — spec table. */}
      <section className="px-margin-desktop py-section-gap">
        <h2 className="font-headline-md text-3xl mb-12 flex items-center gap-4">
          <span className="w-2 h-8 bg-secondary" />
          Technical Performance Metrics
        </h2>
        <div className="overflow-hidden border border-outline-variant/30 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high font-label-technical text-xs uppercase tracking-widest text-secondary">
                <th className="p-6 border-b border-outline-variant">Equipment Model</th>
                <th className="p-6 border-b border-outline-variant">Max Hook Height (HUH)</th>
                <th className="p-6 border-b border-outline-variant">Jib Length Range</th>
                <th className="p-6 border-b border-outline-variant">Load Capacity</th>
                <th className="p-6 border-b border-outline-variant text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-body-md">
              {tcSpecs.map((row, i) => (
                <tr
                  key={row.model}
                  className={
                    i % 2 === 0
                      ? 'bg-surface hover:bg-white/5 transition-colors'
                      : 'bg-surface-container-lowest hover:bg-white/5 transition-colors'
                  }
                >
                  <td className="p-6 border-b border-outline-variant/20 font-bold">{row.model}</td>
                  <td className="p-6 border-b border-outline-variant/20">{row.huh}</td>
                  <td className="p-6 border-b border-outline-variant/20">{row.jib}</td>
                  <td className="p-6 border-b border-outline-variant/20">{row.load}</td>
                  <td className="p-6 border-b border-outline-variant/20 text-right">
                    <Link
                      href="/contact/"
                      className="px-4 py-2 border border-outline text-xs rounded hover:bg-secondary hover:text-on-secondary transition-all"
                    >
                      INQUIRE
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* New units for sale — pulled from /sell/ as cross-link. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <span className="font-label-technical text-tertiary uppercase tracking-widest text-xs">
                Available Now
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-2">New units for sale</h2>
            </div>
            <Link
              href="/sell/"
              className="font-label-technical text-secondary uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all"
            >
              View all
              <span className="material-symbols-outlined text-sm" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tcForSale.map((m) => (
              <div
                key={m}
                className="px-4 py-3 bg-surface-container-low/40 rounded text-center font-label-technical text-tertiary"
              >
                {m}
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Request tower crane rental
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Tell us your site, height, and jib requirements. We will match the right model.
          </p>
          <ContactCTA
            emailSubject="Tower Crane Inquiry"
            waText="Hello, I'd like to ask about tower crane rental."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
