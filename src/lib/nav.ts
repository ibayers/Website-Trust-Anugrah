// trailingSlash:true in next.config means every route ends with "/".
export interface NavItem {
  href: string;
  label: string;
}

// Full set — used by Footer quick-links (split into equipment + primary there).
export const navItems: readonly NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/tower-crane/', label: 'Tower Crane' },
  { href: '/passenger-hoist/', label: 'Passenger Hoist' },
  { href: '/material-lift/', label: 'Material Lift' },
  { href: '/manual-crane/', label: 'Manual Crane' },
  { href: '/genset/', label: 'Genset' },
  { href: '/parts/', label: 'Parts' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/sell/', label: 'Sell' },
  { href: '/contact/', label: 'Contact' },
] as const;

// Compact top-nav — design top bar shows 6 items; equipment grouped in dropdown.
export const navMain: readonly NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

// Dropdown contents for "Equipment" group.
export const equipmentLinks: readonly NavItem[] = [
  { href: '/tower-crane/', label: 'Tower Crane' },
  { href: '/passenger-hoist/', label: 'Passenger Hoist' },
  { href: '/material-lift/', label: 'Material Lift' },
  { href: '/manual-crane/', label: 'Manual Crane' },
  { href: '/genset/', label: 'Genset' },
];

// Active if pathname starts with any equipment href.
export function isEquipmentActive(pathname: string): boolean {
  return equipmentLinks.some((e) => pathname.startsWith(e.href));
}
