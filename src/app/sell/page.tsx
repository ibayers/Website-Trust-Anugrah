import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';

// PRD §5.4 + §6: new tower cranes for sale (MG5023, MG6015, MG6036, MG7030).
// Ported from _archive/design/sell_modernized/code.html.
// Spec PDFs extracted in Task 14 from legacy .zip archive (2 sheets per model).
const tcForSale = [
  {
    id: '01',
    model: 'MG5023',
    desc: 'Industrial Series • Max Capacity 5T',
    sheets: ['/specs/MG5023/MG5023-1.pdf', '/specs/MG5023/MG5023-2.pdf'],
  },
  {
    id: '02',
    model: 'MG6015',
    desc: 'Precision Series • Reach Optimization',
    sheets: ['/specs/MG6015/MG6015-1.pdf', '/specs/MG6015/MG6015-2.pdf'],
  },
  {
    id: '03',
    model: 'MG6036',
    desc: 'Heavy-Duty Series • Variable Jib',
    sheets: ['/specs/MG6036/MG6036-1.pdf', '/specs/MG6036/MG6036-2.pdf'],
  },
  {
    id: '04',
    model: 'MG7030',
    desc: 'Mega-Project Scale • High Elevation',
    sheets: ['/specs/MG7030/MG7030-1.pdf', '/specs/MG7030/MG7030-2.pdf'],
  },
] as const;

export default function SellPage() {
  return (
    <PageShell
      heroEyebrow="Equipment for Sale"
      heroTitle={
        <>
          New Tower Cranes <span className="text-secondary">For Sale</span>
        </>
      }
      heroSubtitle="MG5023, MG6015, MG6036, MG7030 — spec sheets downloadable below. Pricing and lead time available on request."
      heroImage="/images/design/sell/hero.jpg"
    >
      {/* Spec-sheet table. */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="overflow-hidden p-0">
          {/* Table header */}
          <div className="grid grid-cols-12 bg-surface-container-highest px-6 py-4 border-b border-outline-variant">
            <div className="col-span-1 font-label-technical text-on-surface-variant">ID</div>
            <div className="col-span-4 font-label-technical text-on-surface-variant">
              EQUIPMENT TYPE / MODEL
            </div>
            <div className="col-span-5 font-label-technical text-on-surface-variant">
              DOCUMENTATION
            </div>
            <div className="col-span-2 font-label-technical text-on-surface-variant text-right">
              ACTION
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {tcForSale.map((t) => (
              <div
                key={t.model}
                className="grid grid-cols-12 px-6 py-8 items-center hover:bg-white/5 transition-colors group border-b border-outline-variant/10 last:border-b-0"
              >
                <div className="col-span-1 font-label-technical text-secondary">{t.id}</div>
                <div className="col-span-4">
                  <div className="font-headline-md text-lg text-on-surface group-hover:text-secondary transition-colors">
                    Tower Crane — {t.model}
                  </div>
                  <div className="text-on-surface-variant text-sm mt-1">{t.desc}</div>
                </div>
                <div className="col-span-5 flex flex-col gap-2">
                  {t.sheets.map((s, i) => (
                    <a
                      key={s}
                      href={s}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]" aria-hidden>
                        description
                      </span>
                      Technical Data Sheet {i + 1} (PDF)
                    </a>
                  ))}
                </div>
                <div className="col-span-2 text-right">
                  <Link
                    href="/contact/"
                    className="bg-transparent border border-secondary text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all font-bold text-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Stats banner. */}
      <section className="px-margin-desktop py-section-gap">
        <div className="flex items-center justify-center gap-8 py-12 border-y border-outline-variant/10">
          <div className="text-center">
            <div className="font-headline-md text-3xl text-secondary">20+</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant">Years Excellence</div>
          </div>
          <div className="w-px h-12 bg-outline-variant/30" />
          <div className="text-center">
            <div className="font-headline-md text-3xl text-secondary">4</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant">Models Available</div>
          </div>
          <div className="w-px h-12 bg-outline-variant/30" />
          <div className="text-center">
            <div className="font-headline-md text-3xl text-secondary">24/7</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant">Support Core</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Request sale terms</h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Email for pricing, availability, and delivery outside Java.
          </p>
          <ContactCTA
            emailSubject="Tower Crane Sale Inquiry"
            waText="Hello, I'd like to ask about purchasing a tower crane."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
