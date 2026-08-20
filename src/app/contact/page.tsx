'use client';

import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { contact } from "@/content/contact";
import { verifiedValue } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

// PRD §5.11. No form (per user decision). No map embed (PRD §7 Q4 pending full address confirm).
// ponytail: api.whatsapp.com/send? — mobile + desktop sama, draft pesan ikut tersimpan di web.
const WHATSAPP_TEXT = {
  id: encodeURIComponent("Halo, saya ingin bertanya tentang layanan Anda."),
  en: encodeURIComponent("Hello, I'd like to ask about your services."),
} as const;

const WHATSAPP_PLACEHOLDER =
  "https://api.whatsapp.com/send?phone=6285156996949&text=";
const PHONE_LEGACY = "021-87702337";
const FAX_LEGACY = "021-8700119";

export default function ContactPage() {
  const { lang } = useLang();
  const address = verifiedValue(contact.address);
  const t = {
    id: {
      heroEyebrow: "Hubungi Kami",
      heroTitle: "Kontak",
      heroSubtitle:
        "WhatsApp adalah kanal utama kami — percakapan langsung saja. Tanpa formulir online.",
      waTitle: "WhatsApp",
      waLabel: "Chat langsung",
      waTap: "Ketuk untuk mulai chat",
      pfTitle: "Telepon & Faks",
      phone: "Telepon",
      fax: "Faks",
      addressTitle: "Alamat",
      emailTitle: "Surel",
      primary: "Utama",
      secondary: "Cadangan",
      ctaTitle: "Mulai percakapan",
      ctaDesc: "WhatsApp dipantau sepanjang jam kerja. Surel untuk dokumen & kontrak.",
      waText: "Halo, saya ingin bertanya tentang layanan Anda.",
      emailSubject: "Pertanyaan Website",
    },
    en: {
      heroEyebrow: "Get in Touch",
      heroTitle: "Contact",
      heroSubtitle:
        "WhatsApp is our primary channel — direct conversations only. No online form.",
      waTitle: "WhatsApp",
      waLabel: "Direct chat",
      waTap: "Tap to start chat",
      pfTitle: "Phone & Fax",
      phone: "Phone",
      fax: "Fax",
      addressTitle: "Address",
      emailTitle: "Email",
      primary: "Primary",
      secondary: "Secondary (fallback)",
      ctaTitle: "Start a conversation",
      ctaDesc: "WhatsApp monitored during working hours. Email for documents & contracts.",
      waText: "Hello, I'd like to ask about your services.",
      emailSubject: "Website Inquiry",
    },
  }[lang];

  return (
    <PageShell
      heroEyebrow={t.heroEyebrow}
      heroTitle={t.heroTitle}
      heroSubtitle={t.heroSubtitle}
    >
      <section className="px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              {t.waTitle}
            </h2>
            <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-2">
              {t.waLabel}
            </p>
            <a
              href={WHATSAPP_PLACEHOLDER + WHATSAPP_TEXT[lang]}
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
              {t.waTap}
            </a>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              {t.pfTitle}
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  {t.phone}
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
                  {t.fax}
                </p>
                <span className="text-on-surface text-body-md">
                  {FAX_LEGACY}
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              {t.addressTitle}
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
              {t.emailTitle}
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-1">
                  {t.primary}
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
                  {t.secondary}
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
            {t.ctaTitle}
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <ContactCTA
            emailSubject={t.emailSubject}
            waText={t.waText}
            className="justify-center"
          />
        </GlassCard>
      </section>
    </PageShell>
  );
}
