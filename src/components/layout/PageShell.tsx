import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// Canonical page wrapper: Header + hero + main + Footer.
// heroTitle/heroSubtitle accept ReactNode so pages can compose styled spans
// (e.g. <span className="text-secondary">accent</span>) per design HTML.
interface PageShellProps {
  heroEyebrow?: ReactNode;
  heroTitle: ReactNode;
  heroSubtitle?: ReactNode;
  heroImage?: string;
  children: ReactNode;
}

export function PageShell({ heroEyebrow, heroTitle, heroSubtitle, heroImage, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          {heroImage && (
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover grayscale opacity-40"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
            </div>
          )}
          <div className="relative z-10 px-margin-desktop max-w-4xl py-24 md:py-32">
            {heroEyebrow && (
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-secondary" />
                <span className="font-label-technical text-secondary tracking-widest uppercase">
                  {heroEyebrow}
                </span>
              </div>
            )}
            <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
              {heroTitle}
            </h1>
            {heroSubtitle && (
              <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {heroSubtitle}
              </p>
            )}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
