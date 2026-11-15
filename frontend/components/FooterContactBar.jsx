'use client';

import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin } from 'lucide-react';

function Item({ icon: Icon, label, value, testId }) {
  return (
    <div className="flex items-center gap-4" data-testid={testId}>
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-white font-medium text-sm">{value}</p>
      </div>
    </div>
  );
}

export default function FooterContactBar({ phone, email, address }) {
  const isHome = usePathname() === '/';
  return (
    <div className={`grid grid-cols-1 ${isHome ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 py-8 border-b border-gray-700`}>
      <Item icon={Phone} label="Call Us" value={phone} testId="footer-phone" />
      <Item icon={Mail} label="Email Us" value={email} testId="footer-email" />
      {!isHome && <Item icon={MapPin} label="Head Office" value={address} testId="footer-head-office" />}
    </div>
  );
}
