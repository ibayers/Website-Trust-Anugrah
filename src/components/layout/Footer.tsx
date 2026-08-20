'use client';

import Link from 'next/link';
import { navItems, navLabel } from '@/lib/nav';
import { company, companyId } from '@/content/company';
import { contact } from '@/content/contact';
import { mailtoLink, verifiedValue } from '@/lib/contact';
import { useLang } from '@/lib/i18n';

// Synthesized footer (PRD §5.13 — no design has a real footer).
// 4 columns: brand/about, quick links, equipment, contact.
// Copyright year is dynamic via build-time new Date().
export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  const legalName = verifiedValue(company.legalName);
  const narrative =
    lang === 'id' ? companyId.foundingNarrative : verifiedValue(company.foundingNarrative);
  const mailHref = mailtoLink(contact.email);
  const address = verifiedValue(contact.address);

  const t = {
    id: {
      company: 'Perusahaan',
      equipment: 'Peralatan',
      contact: 'Kontak',
      rights: 'Hak cipta dilindungi.',
    },
    en: {
      company: 'Company',
      equipment: 'Equipment',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  }[lang];

  const equipmentLinksList = navItems.filter((i) =>
    ['/tower-crane/', '/passenger-hoist/', '/material-lift/', '/manual-crane/', '/genset/', '/sell/'].includes(i.href),
  );
  const primaryLinks = navItems.filter((i) =>
    ['/', '/about/', '/services/', '/parts/', '/gallery/', '/contact/'].includes(i.href),
  );

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest/60 backdrop-blur-lg mt-section-gap">
      <div className="px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-headline-md text-headline-md font-bold mb-3">{legalName}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{narrative}</p>
        </div>

        <div>
          <h4 className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-4">
            {t.company}
          </h4>
          <ul className="space-y-2">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-on-surface hover:text-secondary transition-colors text-body-md">
                  {navLabel(item, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-4">
            {t.equipment}
          </h4>
          <ul className="space-y-2">
            {equipmentLinksList.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-on-surface hover:text-secondary transition-colors text-body-md">
                  {navLabel(item, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-technical text-on-surface-variant uppercase tracking-widest text-xs mb-4">
            {t.contact}
          </h4>
          {mailHref && (
            <p className="mb-2">
              <a href={mailHref} className="text-on-surface hover:text-secondary transition-colors text-body-md break-all">
                {verifiedValue(contact.email)}
              </a>
            </p>
          )}
          {address && (
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {address.street}
              <br />
              {address.city} {address.postal}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-outline-variant/20 px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-label-technical text-on-surface-variant text-xs uppercase tracking-widest">
          &copy; {year} {legalName}. {t.rights}
        </p>
        <p className="font-label-technical text-on-surface-variant text-xs uppercase tracking-widest">
          {lang === 'id' ? companyId.motto : verifiedValue(company.motto)}
        </p>
      </div>
    </footer>
  );
}
