import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { contact } from '@/content/contact';
import { mailtoLink, verifiedValue, formatPhone } from '@/lib/contact';
import { shouldDisplay } from '@/types/content';

// PRD §5.11. No form (per user decision). No map embed (PRD §7 Q4 pending full address confirm).
// Phone/fax ship only when Verified — current state: Unconfirmed, so gated.
export default function ContactPage() {
  const address = verifiedValue(contact.address);
  const email = verifiedValue(contact.email);
  const emailSecondary = verifiedValue(contact.emailSecondary);
  const mailHref = mailtoLink(contact.email);
  const mailSecondaryHref = mailtoLink(contact.emailSecondary);

  const phoneLocal = formatPhone(contact.phoneLocal);
  const phoneDisplay = phoneLocal ?? null;
  const phonePending = !shouldDisplay(contact.phoneLocal);

  return (
    <PageShell
      heroEyebrow="Get in Touch"
      heroTitle="Contact"
      heroSubtitle="Email is our primary channel. WhatsApp coming soon. No online form — direct conversations only."
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Email</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Primary
                </p>
                {mailHref && email ? (
                  <a
                    href={mailHref}
                    className="text-on-surface hover:text-secondary transition-colors text-body-lg break-all"
                  >
                    {email}
                  </a>
                ) : null}
              </li>
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  Secondary (fallback)
                </p>
                {mailSecondaryHref && emailSecondary ? (
                  <a
                    href={mailSecondaryHref}
                    className="text-on-surface-variant hover:text-secondary transition-colors text-body-md break-all"
                  >
                    {emailSecondary}
                  </a>
                ) : null}
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Address</h2>
            {address && (
              <address className="not-italic text-body-md text-on-surface leading-relaxed">
                {address.street}
                <br />
                {address.city}
                <br />
                {address.postal}
              </address>
            )}
            <p className="mt-6 text-on-surface-variant text-sm">
              Map embed pending full address confirmation (PRD §7 Q4).
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Phone &amp; Fax</h2>
            {phonePending ? (
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Legacy numbers (021-87702337 / 021-8700119) are pending client confirmation that
                they are still active. Display gated behind PRD §7 Q2 / Q3 sign-off.
              </p>
            ) : (
              phoneDisplay && <p className="text-body-md text-on-surface">{phoneDisplay}</p>
            )}
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">WhatsApp</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Direct wa.me link pending client-supplied number in international format
              (PRD §7 Q1). Once supplied, the WhatsApp button below activates automatically.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="px-margin-desktop py-section-gap">
        <GlassCard className="p-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Start a conversation
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            Email is checked throughout the business day. WhatsApp number is being set up.
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
