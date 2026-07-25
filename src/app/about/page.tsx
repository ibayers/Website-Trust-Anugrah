import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company } from '@/content/company';
import { verifiedValue } from '@/lib/contact';

// PRD §5.2. Team section, projects counter, years counter intentionally absent
// (PRD §5.2 ❌ → TBD: needs client sign-off). Ship only Verified content.
export default function AboutPage() {
  const narrative = verifiedValue(company.foundingNarrative) ?? '';
  const motto = verifiedValue(company.motto) ?? '';
  const tagline = verifiedValue(company.tagline) ?? '';
  const coreBusiness = verifiedValue(company.coreBusiness) ?? [];

  return (
    <PageShell
      heroEyebrow="Experienced since 1985"
      heroTitle="About"
      heroSubtitle="CV established October 9, 1993. Incorporated as PT on October 13, 1998. Four decades of equipment services, construction, installation, and mechanical supply."
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          <div className="relative">
            <div className="aspect-[4/5] glass-panel rounded-2xl overflow-hidden border border-outline-variant/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/design/tower-crane/hero.jpg"
                alt="PT Trust Anugrah field operation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <GlassCard className="absolute -bottom-8 -right-4 p-6 w-48 hidden md:block">
              <div className="font-display-xl text-headline-lg text-secondary">1985</div>
              <div className="font-label-technical text-xs text-on-surface-variant uppercase">
                Experienced Since
              </div>
            </GlassCard>
          </div>

          <div>
            <span className="font-label-technical text-secondary uppercase tracking-widest text-xs">
              {tagline}
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight">
              {motto}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">{narrative}</p>
          </div>
        </div>
      </section>

      {/* Core pillars + fleet image. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch">
          <GlassCard className="p-8 order-2 lg:order-1">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              Core business pillars
            </h3>
            <ul className="space-y-3">
              {coreBusiness.map((pillar, i) => (
                <li key={pillar} className="flex items-start gap-4">
                  <span className="font-label-technical text-tertiary text-sm pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-body-md text-on-surface">{pillar}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="relative order-1 lg:order-2 min-h-[320px]">
            <GlassCard className="absolute inset-0 overflow-hidden p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/design/gallery/02-crew.jpg"
                alt="Crew on-site during operation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-technical text-xs text-secondary uppercase tracking-widest">
                  FIELD OPERATIONS
                </span>
                <p className="text-on-surface-variant text-sm mt-1">
                  Licensed crews deployed across Java and beyond.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Work with us
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Rental, service, parts, troubleshooting, build &amp; rebuild. Tell us what you need.
          </p>
          <ContactCTA
            emailSubject="General Inquiry"
            waText="Hello, I'd like to discuss a project."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
