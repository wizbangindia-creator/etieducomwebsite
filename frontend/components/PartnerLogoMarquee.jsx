'use client';

import Marquee from '@/components/Marquee';

const P = '/images/partners';
const LOGOS = [
  { name: 'Microsoft', src: `${P}/microsoft.svg` },
  { name: 'Adobe', src: `${P}/adobe.svg` },
  { name: 'Cisco', src: `${P}/cisco.svg` },
  { name: 'IBM', src: `${P}/ibm.svg` },
  { name: 'Meta', src: `${P}/meta.svg` },
  { name: 'EC-Council', src: `${P}/eccouncil.png` },
  { name: 'Autodesk', src: `${P}/autodesk.png` },
  { name: 'Tally', src: `${P}/tally.png` },
  { name: 'QuickBooks', src: `${P}/quickbooks.png` },
];

export default function PartnerLogoMarquee({ testid }) {
  return (
    <Marquee items={LOGOS} duration={30} testid={testid} renderItem={(l) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={l.src} alt={l.name} className="h-8 w-28 object-contain mx-2" loading="eager" />
    )} />
  );
}
