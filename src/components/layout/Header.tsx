'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navMain, equipmentLinks, isEquipmentActive } from '@/lib/nav';
import { company } from '@/content/company';
import { verifiedValue } from '@/lib/contact';

// Compact top-nav: 5 visible items + Equipment dropdown (design top-bar pattern).
// 'use client' for mobile menu toggle + dropdown toggle + usePathname active link.
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const legalName = verifiedValue(company.legalName);
  const equipmentActive = isEquipmentActive(pathname);

  return (
    <header className="sticky top-0 z-50 bg-surface-container/40 backdrop-blur-xl border-b border-outline-variant/30 shadow-md transition-all duration-300">
      <nav className="flex justify-between items-center px-margin-desktop py-4 w-full">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter"
        >
          {legalName}
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-headline-md text-body-md">
          {/* Home */}
          <Link
            href="/"
            className={pathname === '/' ? 'text-secondary font-bold border-b-2 border-secondary pb-1 transition-colors' : 'text-on-surface-variant hover:text-on-surface transition-colors'}
          >
            Home
          </Link>

          {/* Equipment dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEquipOpen(true)}
            onMouseLeave={() => setEquipOpen(false)}
          >
            <button
              type="button"
              onClick={() => setEquipOpen((v) => !v)}
              className={
                equipmentActive
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1 transition-colors inline-flex items-center gap-1'
                  : 'text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-1'
              }
              aria-expanded={equipOpen}
            >
              Equipment
              <span className="material-symbols-outlined text-sm" aria-hidden>
                expand_more
              </span>
            </button>
            {equipOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <ul className="glass-panel rounded-xl border border-outline-variant/30 overflow-hidden shadow-2xl">
                  {equipmentLinks.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={
                            active
                              ? 'block px-6 py-3 text-body-md text-secondary bg-secondary/10'
                              : 'block px-6 py-3 text-body-md text-on-surface hover:text-secondary hover:bg-white/5 transition-colors'
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Remaining flat items */}
          {navMain
            .filter((i) => i.href !== '/')
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? 'text-secondary font-bold border-b-2 border-secondary pb-1 transition-colors'
                      : 'text-on-surface-variant hover:text-on-surface transition-colors'
                  }
                >
                  {item.label}
                </Link>
              );
            })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden md:inline-flex px-5 py-2 bg-secondary-container text-on-secondary-container font-headline-md text-body-md font-bold rounded-lg hover:brightness-110 transition-all shadow-glow"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 border border-outline-variant text-on-surface rounded-lg"
          >
            <span className="material-symbols-outlined" aria-hidden>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface-container/95 backdrop-blur-xl">
          <ul className="flex flex-col py-2">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={
                  pathname === '/'
                    ? 'block px-margin-desktop py-3 font-body-md text-body-md text-secondary font-bold bg-surface-container-high/50'
                    : 'block px-margin-desktop py-3 font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                }
              >
                Home
              </Link>
            </li>
            <li className="px-margin-desktop py-1 text-label-technical text-outline uppercase tracking-widest text-xs">
              Equipment
            </li>
            {equipmentLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="pl-8">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      active
                        ? 'block px-4 py-2 font-body-md text-body-md text-secondary'
                        : 'block px-4 py-2 font-body-md text-body-md text-on-surface-variant hover:text-on-surface'
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            {navMain
              .filter((i) => i.href !== '/')
              .map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={
                        active
                          ? 'block px-margin-desktop py-3 font-body-md text-body-md text-secondary font-bold bg-surface-container-high/50'
                          : 'block px-margin-desktop py-3 font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </header>
  );
}
