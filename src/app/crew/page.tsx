import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company } from '@/content/company';
import { verifiedValue } from '@/lib/contact';

// Ported from _archive/design/crew_professional_workforce/code.html.
// Per PRD §5.2 + §7 Q12: NO fabricated names, bios, or stock photos ship here.
// Division-of-expertise cards describe verified general roles from company.foundingNarrative
// ("experienced & professional crew ... licensed from man power department").
const expertise = [
  {
    icon: 'construction',
    title: 'Tower Crane Operators',
    desc: 'Licensed professionals trained for extreme height precision and heavy load management.',
    badge: 'Man Power Dept. Licensed',
  },
  {
    icon: 'build',
    title: 'Technical Maintenance',
    desc: 'Rapid response team for mechanical diagnostics, lubrication, and structural integrity checks.',
    badge: 'Monthly Service Cycle',
  },
  {
    icon: 'architecture',
    title: 'Project Engineers',
    desc: 'Structural specialists overseeing deployment strategies and wind-load calculations for skyscrapers.',
    badge: 'Civil Engineering',
  },
  {
    icon: 'verified_user',
    title: 'Safety Officers',
    desc: 'Dedicated K3 specialists ensuring full HSE compliance and site-wide behavioral safety protocols.',
    badge: 'HSE Compliance',
  },
] as const;

const fieldPhotos = [
  { src: '/images/design/crew/field-01.jpg', alt: 'Crew on-site' },
  { src: '/images/design/crew/field-02.jpg', alt: 'Operations field' },
  { src: '/images/design/crew/field-03.jpg', alt: 'Maintenance work' },
  { src: '/images/design/crew/field-04.jpg', alt: 'Field coordination' },
] as const;

export default function CrewPage() {
  const motto = verifiedValue(company.motto);

  return (
    <PageShell
      heroEyebrow="On-Site Elite Crew"
      heroTitle={
        <>
          The Pulse of <br />
          <span className="text-secondary">Precision</span>
        </>
      }
      heroSubtitle="Licensed specialists driving Southeast Asia's skyline development. Our workforce is the foundation of every high-rise we support."
      heroImage="/images/design/crew/hero.jpg"
    >
      {/* Mission statement + stats. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-gutter items-center">
          <GlassCard className="p-12">
            <h2 className="font-headline-lg text-headline-lg mb-8">
              Safety is <span className="text-secondary">Number 1</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              At PT. TRUST ANUGRAH PERSADA, technical excellence is inseparable from safety. Our crew-first protocol
              ensures every operator, engineer, and safety officer is licensed by the man power department.
              We don&apos;t just move loads — we manage risk with absolute precision.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">100%</div>
                <div className="font-label-technical text-on-surface-variant uppercase">
                  Licensed Crew Policy
                </div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-secondary">{motto}</div>
                <div className="font-label-technical text-on-surface-variant uppercase">Standing Motto</div>
              </div>
            </div>
          </GlassCard>

          <div className="relative group">
            <div className="aspect-square glass-panel rounded-2xl overflow-hidden border border-outline-variant/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/design/crew/mission-gear.jpg"
                alt="Field crew performing crane foundation work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Division of expertise. */}
      <section className="bg-surface-container-lowest py-section-gap">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-center">
              Division of <span className="text-secondary">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((e) => (
              <GlassCard key={e.title} className="p-8 hover:border-secondary/40 transition-colors group">
                <div className="mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-5xl" aria-hidden>
                    {e.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-body-lg font-bold mb-3">{e.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6">{e.desc}</p>
                <div className="font-label-technical text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" /> {e.badge}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Field operations gallery. */}
      <section className="px-margin-desktop py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">Field Operations</h2>
              <p className="text-on-surface-variant max-w-xl">
                A visual record of our crew executing complex maneuvers on major infrastructure projects across the
                region. Real photos from the company archive — no stock imagery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fieldPhotos.map((p) => (
              <div
                key={p.src}
                className="aspect-square relative group overflow-hidden bg-surface-variant rounded-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="material-symbols-outlined text-white text-4xl" aria-hidden>
                    fullscreen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA. */}
      <section className="px-margin-desktop pb-section-gap">
        <div className="max-w-container-max mx-auto bg-secondary-container p-12 lg:p-24 relative overflow-hidden flex flex-col items-center text-center rounded-xl">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-secondary-fixed mb-8">
              Partner With Our Crew
            </h2>
            <p className="text-on-secondary-fixed-variant text-lg mb-12 font-medium">
              Need licensed operators, certified engineers, or a full deployment crew? We provide experienced
              professionals for short-term projects and long-term contracts.
            </p>
            <ContactCTA
              emailSubject="Crew / Operator Inquiry"
              waText="Hello, I'd like to ask about operator or crew rental."
              className="justify-center"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
