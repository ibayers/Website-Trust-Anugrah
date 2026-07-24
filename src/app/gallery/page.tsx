import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { company } from '@/content/company';
import { verifiedValue } from '@/lib/contact';

// PRD §5.10. Ported from _archive/design/gallery_modernized/code.html.
// Photos curated from /public/images/ (verified local copies of archive batch).
const categories = [
  'ALL PROJECTS',
  'TOWER CRANES',
  'PASSENGER HOIST',
  'GENSET',
  'FIELD SERVICE',
] as const;

// Bento gallery — flagship + standard items.
const flagshipItem = {
  src: '/images/design/gallery/flagship.jpg',
  tag: 'FLAGSHIP PROJECT',
  title: 'Central District Hoisting System',
  desc: 'Heavy lift series deployed for the skyline redevelopment project.',
};

const galleryItems = [
  { src: '/images/design/gallery/01-tower-crane.jpg', icon: 'precision_manufacturing', title: 'Tower Crane Unit', tag: 'EQUIPMENT' },
  { src: '/images/design/gallery/02-crew.jpg', icon: 'engineering', title: 'On-Site Crew', tag: 'OPERATIONS' },
  { src: '/images/design/gallery/03-manual-crane.jpg', icon: 'construction', title: 'Manual Crane Deploy', tag: 'FIELD SERVICE' },
  { src: '/images/design/gallery/04-genset.jpg', icon: 'bolt', title: 'Genset Backup Array', tag: 'POWER SOLUTIONS' },
  { src: '/images/Tower_Full..jpg', icon: 'fullscreen', title: 'Full Erection', tag: 'RENTAL' },
  { src: '/images/A1 CRANE.jpg', icon: 'verified', title: 'Verified Unit', tag: 'CERTIFIED' },
  { src: '/images/Picture 017.jpg', icon: 'build', title: 'Field Service', tag: 'MAINTENANCE' },
  { src: '/images/Picture 234.jpg', icon: 'photo_camera', title: 'Field Coordination', tag: 'OPS' },
] as const;

export default function GalleryPage() {
  const narrative = verifiedValue(company.foundingNarrative);
  const motto = verifiedValue(company.motto);

  return (
    <PageShell
      heroEyebrow="Project Archive"
      heroTitle={
        <>
          Visualizing <span className="text-secondary">Precision</span> in Motion.
        </>
      }
      heroSubtitle="Decades of industrial-grade reliability. Explore our portfolio of heavy equipment installations, mechanical services, and construction triumphs."
    >
      {/* Stats banner */}
      <section className="px-margin-desktop pt-section-gap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-label-technical uppercase tracking-widest text-secondary">
                PROJECT ARCHIVE
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <GlassCard className="p-6 flex flex-col items-center">
              <span className="font-display-xl text-headline-lg text-secondary">1985</span>
              <span className="font-label-technical text-xs">EXPERIENCED SINCE</span>
            </GlassCard>
            <GlassCard className="p-6 flex flex-col items-center">
              <span className="font-display-xl text-headline-lg text-primary">5</span>
              <span className="font-label-technical text-xs">EQUIPMENT LINES</span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="px-margin-desktop">
        <div className="flex overflow-x-auto gap-4 mb-12 pb-4">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={
                i === 0
                  ? 'px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-technical whitespace-nowrap'
                  : 'px-6 py-2 glass-panel border border-outline-variant/30 text-on-surface hover:border-secondary transition-all rounded-full font-label-technical whitespace-nowrap'
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Masonry Gallery */}
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Flagship large feature */}
          <GlassCard className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden cursor-pointer p-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flagshipItem.src}
              alt={flagshipItem.title}
              className="w-full h-full min-h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="font-label-technical text-xs bg-secondary text-on-secondary-container px-2 py-1 mb-2 inline-block">
                {flagshipItem.tag}
              </span>
              <h3 className="font-headline-md text-body-lg font-bold mb-2">{flagshipItem.title}</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">{flagshipItem.desc}</p>
            </div>
          </GlassCard>

          {/* Standard items */}
          {galleryItems.map((item) => (
            <GlassCard key={item.src} className="relative group overflow-hidden cursor-pointer p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-surface-dim/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-4xl text-secondary" aria-hidden>
                  {item.icon}
                </span>
              </div>
              <div className="p-4 border-t border-outline-variant/20">
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-on-surface-variant font-label-technical">{item.tag}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Corporate identity / mission block. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="overflow-hidden p-0">
          <div className="p-8 border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="font-headline-md text-headline-md">Corporate Identity &amp; Mission</h2>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="w-3 h-3 rounded-full bg-tertiary" />
            </div>
          </div>
          <div className="p-8 grid-overlay">
            <div className="max-w-3xl space-y-6">
              <p className="text-body-lg text-on-surface leading-relaxed">{narrative}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter py-8">
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="font-label-technical text-secondary mb-2">FOUNDATION</h4>
                  <p className="text-sm">
                    CV established October 9, 1993. Incorporated as PT on October 13, 1998.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-label-technical text-primary mb-2">EXPERTISE</h4>
                  <p className="text-sm">
                    Many years of experience in particular construction of tower cranes and other tools.
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic">&quot;{motto}&quot;</p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Want to see specific work?
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Ask us for photos relevant to your site or equipment type.
          </p>
          <ContactCTA
            emailSubject="Gallery Request"
            waText="Hello, I'd like to see specific project photos."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
