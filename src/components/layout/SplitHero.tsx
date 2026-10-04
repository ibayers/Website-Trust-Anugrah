import { type ReactNode } from 'react';

// Hero 2 kolom: teks kiri, gambar kanan (rasio asli, tanpa crop).
// Dipakai halaman yang tidak memakai hero background PageShell.
interface SplitHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  imageAlt?: string;
}

export function SplitHero({ eyebrow, title, subtitle, image, imageAlt = '' }: SplitHeroProps) {
  return (
    <section className="px-margin-desktop pt-16 md:pt-24 pb-8">
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-12 h-[2px] bg-secondary" />
          <span className="font-label-technical text-secondary tracking-widest uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="wm glass-panel rounded-2xl overflow-hidden border border-outline-variant/30 mx-auto w-fit max-w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-auto max-h-[420px] w-auto max-w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
