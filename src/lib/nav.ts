// trailingSlash:true in next.config means every route ends with "/".
// label = English, labelId = Indonesian. Use navLabel(item, lang) to pick.
export interface NavItem {
  href: string;
  label: string;
  labelId: string;
}

export function navLabel(item: NavItem, lang: 'id' | 'en'): string {
  return lang === 'id' ? item.labelId : item.label;
}

// Full set — used by Footer quick-links (split into equipment + primary there).
export const navItems: readonly NavItem[] = [
  { href: '/', label: 'Home', labelId: 'Beranda' },
  { href: '/about/', label: 'About', labelId: 'Tentang Kami' },
  { href: '/services/', label: 'Services', labelId: 'Layanan' },
  { href: '/tower-crane/', label: 'Tower Crane', labelId: 'Tower Crane' },
  { href: '/passenger-hoist/', label: 'Passenger Hoist', labelId: 'Lift Penumpang' },
  { href: '/material-lift/', label: 'Material Lift', labelId: 'Lift Material' },
  { href: '/manual-crane/', label: 'Manual Crane', labelId: 'Derek Manual' },
  { href: '/genset/', label: 'Genset', labelId: 'Genset' },
  { href: '/parts/', label: 'Parts', labelId: 'Sparepart' },
  { href: '/gallery/', label: 'Gallery', labelId: 'Galeri' },
  { href: '/sell/', label: 'Sell', labelId: 'Penjualan' },
  { href: '/contact/', label: 'Contact', labelId: 'Kontak' },
];

// Compact top-nav — design top bar shows 6 items; equipment grouped in dropdown.
export const navMain: readonly NavItem[] = [
  { href: '/', label: 'Home', labelId: 'Beranda' },
  { href: '/services/', label: 'Services', labelId: 'Layanan' },
  { href: '/gallery/', label: 'Gallery', labelId: 'Galeri' },
  { href: '/about/', label: 'About', labelId: 'Tentang Kami' },
  { href: '/contact/', label: 'Contact', labelId: 'Kontak' },
];

// Dropdown contents for "Equipment" group.
export const equipmentLinks: readonly NavItem[] = [
  { href: '/tower-crane/', label: 'Tower Crane', labelId: 'Tower Crane' },
  { href: '/passenger-hoist/', label: 'Passenger Hoist', labelId: 'Lift Penumpang' },
  { href: '/material-lift/', label: 'Material Lift', labelId: 'Lift Material' },
  { href: '/manual-crane/', label: 'Manual Crane', labelId: 'Derek Manual' },
  { href: '/genset/', label: 'Genset', labelId: 'Genset' },
];

// Active if pathname starts with any equipment href.
export function isEquipmentActive(pathname: string): boolean {
  return equipmentLinks.some((e) => pathname.startsWith(e.href));
}
