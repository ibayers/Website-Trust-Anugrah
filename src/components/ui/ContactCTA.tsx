import { Button } from './Button';
import { mailtoLink, waLink } from '@/lib/contact';
import { contact } from '@/content/contact';

// Canonical CTA pair: primary email + WhatsApp.
// PRD §5.11: no form. PRD §7 Q1: WhatsApp number TBD — when TBD, render email-only.
interface ContactCTAProps {
  emailSubject?: string;
  waText?: string;
  className?: string;
}

export function ContactCTA({ emailSubject, waText, className = '' }: ContactCTAProps) {
  const mailHref = mailtoLink(contact.email, emailSubject);
  const waHref = waLink(contact.whatsapp, waText);

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {mailHref && (
        <Button href={mailHref} external variant="primary">
          <span className="material-symbols-outlined" aria-hidden>
            mail
          </span>
          Email Us
        </Button>
      )}
      {waHref && (
        <Button href={waHref} external variant="secondary">
          <span className="material-symbols-outlined" aria-hidden>
            chat
          </span>
          WhatsApp
        </Button>
      )}
    </div>
  );
}
