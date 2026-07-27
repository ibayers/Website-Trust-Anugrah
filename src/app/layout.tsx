import './globals.css';
import { inter, hanken, jetbrains } from './fonts';
import { Agentation } from 'agentation';

// metadataBase uses placeholder domain — PRD §7 Q5 pending. OG paths resolve against this.
export const metadata = {
  metadataBase: new URL('https://www.pt-trustap.com'),
  title: {
    default: 'PT. TRUST ANUGRAH PERSADA — Tower Crane, Hoist & Genset Rental',
    template: '%s — PT. TRUST ANUGRAH PERSADA',
  },
  description:
    'Tower crane, passenger hoist, material lift, manual crane, and genset rental, service, and parts. Serving Indonesian construction since 1985.',
  applicationName: 'PT Trust Anugrah',
  authors: [{ name: 'PT. TRUST ANUGRAH PERSADA' }],
  keywords: [
    'tower crane rental Indonesia',
    'passenger hoist Jakarta',
    'material lift',
    'manual crane',
    'genset rental',
    'crane service',
    'crane parts',
    'PT Trust Anugrah',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'PT. TRUST ANUGRAH PERSADA',
    title: 'PT. TRUST ANUGRAH PERSADA — Tower Crane, Hoist & Genset Rental',
    description:
      'Tower crane, passenger hoist, material lift, manual crane, and genset rental, service, and parts. Since 1985.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. TRUST ANUGRAH PERSADA',
    description:
      'Tower crane, hoist, material lift, manual crane, and genset rental, service, and parts.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <head>
        {/* Icon font — kept as a link; icon glyphs are progressive, not render-critical. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
