import { Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';

// Self-hosted via next/font: no external request, zero layout shift, preloaded.
// CSS vars consumed by tailwind.config.ts -> fontFamily.
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains',
  display: 'swap',
});
