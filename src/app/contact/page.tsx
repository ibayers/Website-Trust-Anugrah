import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { contact } from "@/content/contact";
import { verifiedValue } from "@/lib/contact";

// PRD §5.11. No form (per user decision). No map embed (PRD §7 Q4 pending full address confirm).
// WhatsApp link aktif: nomor client 08121896949 (PRD §7 Q1 resolved).
// Phone/fax: tampilkan angka legacy untuk sementara (PRD §7 Q2/Q3 masih pending sign-off).
// ponytail: api.whatsapp.com/send? — mobile + desktop sama, draft pesan ikut tersimpan di web.
const WHATSAPP_PLACEHOLDER =
  "https://api.whatsapp.com/send?phone=628121896949&text=" +
  encodeURIComponent("Hello, I'd like to ask about your services.");
const PHONE_LEGACY = "021-87702337";
const FAX_LEGACY = "021-8700119";

export default function ContactPage() {
  const address = verifiedValue(contact.address);

  return (
    <PageShell
      heroEyebrow="Get in Touch"
      heroTitle="Contact"
      heroSubtitle="WhatsApp is our primary channel — direct conversations only. No online form."
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              WhatsApp
            </h2>
            <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-2">
              Chat langsung
            </p>
            <a
              href={WHATSAPP_PLACEHOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-surface hover:text-secondary transition-colors text-body-lg break-all"
            >
              <span
                className="material-symbols-outlined text-secondary"
                aria-hidden
              >
                chat
              </span>
              Tap to start chat
            </a>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Phone &amp; Fax
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${PHONE_LEGACY.replace(/[^0-9]/g, "")}`}
                  className="text-on-surface hover:text-secondary transition-colors text-body-lg"
                >
                  {PHONE_LEGACY}
                </a>
              </li>
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Fax
                </p>
                <span className="text-on-surface text-body-md">
                  {FAX_LEGACY}
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Address
            </h2>
            {address && (
              <address className="not-italic text-body-md text-on-surface leading-relaxed">
                {address.street}
                <br />
                {address.city}
                <br />
                {address.postal}
              </address>
            )}
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Email
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Primary
                </p>
                <a
                  href={`mailto:${contact.email.value}`}
                  className="text-on-surface hover:text-secondary transition-colors text-body-md break-all"
                >
                  {contact.email.value}
                </a>
              </li>
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Secondary (fallback)
                </p>
                <a
                  href={`mailto:${contact.emailSecondary.value}`}
                  className="text-on-surface-variant hover:text-secondary transition-colors text-body-md break-all"
                >
                  {contact.emailSecondary.value}
                </a>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start a conversation
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            WhatsApp dipantau sepanjang jam kerja. Email untuk dokumen &amp;
            kontrak.
          </p>
          <ContactCTA
            emailSubject="Website Inquiry"
            waText="Hello, I'd like to ask about your services."
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
