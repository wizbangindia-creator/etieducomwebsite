'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Award, FolderOpen, ChevronRight, Sparkles } from 'lucide-react';
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

const HIGHLIGHTS = ['3–12 Month Programs', '100% Placement Assistance', 'Globally Recognised Certifications'];

export const openProgramFinder = () => window.dispatchEvent(new Event('open-program-finder'));

function FloatingBadge({ icon: Icon, children, className, testId }) {
  return (
    <div className={`absolute z-20 flex items-center gap-2 rounded-xl border border-gray-900/80 px-3 py-2 text-sm leading-tight text-gray-900 shadow-[3px_3px_0_0_rgba(17,24,39,0.9)] animate-float ${className}`} data-testid={testId}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span>{children}</span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] h-[440px] sm:h-[520px]" data-testid="hero-visual">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[82%] h-[82%] bg-primary rounded-[2.5rem_2.5rem_9rem_9rem] shadow-[10px_10px_0_0_#0b1f6b]" />
      <Image src="/images/hero-student.webp" alt="ETI Educom student ready for a tech career" width={640} height={980} priority sizes="(max-width: 1024px) 80vw, 420px" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[100%] w-auto object-contain z-10 [mask-image:linear-gradient(to_bottom,#000_88%,transparent)]" />
      <FloatingBadge icon={Briefcase} className="bg-white top-[22%] -left-2 sm:-left-10" testId="hero-badge-placed">Get placed at <strong>top<br />IT companies</strong></FloatingBadge>
      <FloatingBadge icon={Award} className="bg-lime-200 top-[10%] -right-2 sm:-right-6 [animation-delay:1s]" testId="hero-badge-certified">Earn global<br /><strong>certifications</strong></FloatingBadge>
      <FloatingBadge icon={FolderOpen} className="bg-blue-100 bottom-[18%] -left-2 sm:-left-12 [animation-delay:2s]" testId="hero-badge-portfolio">Build your<br /><strong>project portfolio</strong></FloatingBadge>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20" data-testid="home-hero">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[linear-gradient(rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_left,#000_60%,transparent)] pointer-events-none" />
      <div className="container-main relative grid lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
        <div className="min-w-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /> ISO 9001:2015 Certified · Since 2017
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-[#0b1f6b] mb-6">
            Build a Career in Tech at ETI Educom<span className="text-primary"> — The Computer Career School</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-2xl">
            Choose from career tracks and courses in Software Development, Cybersecurity, Data, Design &amp; Digital Marketing — taught hands-on at our Pathankot campus.
          </p>
          <p className="text-lg font-bold text-gray-900 mb-6">Classroom + Lab Training. Learn by Doing.</p>
          <p className="text-sm text-gray-500 mb-3">Get certified by global technology leaders like:</p>
          <div className="mb-6 max-w-2xl">
            <Marquee items={LOGOS} duration={30} testid="hero-logo-strip" renderItem={(l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={l.src} alt={l.name} className="h-8 w-28 object-contain mx-2" loading="eager" />
            )} />
          </div>
          <div className="grid sm:grid-cols-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur mb-8 max-w-2xl divide-y sm:divide-y-0 sm:divide-x divide-gray-200" data-testid="hero-highlights">
            {HIGHLIGHTS.map((h) => <p key={h} className="px-4 py-3 text-sm font-semibold text-[#0b1f6b]">{h}</p>)}
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={openProgramFinder} className="inline-flex items-center gap-2 bg-[#0b1f6b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary transition-colors" data-testid="hero-choose-program-btn">
              Choose The Right Program <ChevronRight className="w-5 h-5" />
            </button>
            <Link href="/free-counselling" className="inline-flex items-center gap-2 border-2 border-[#0b1f6b] text-[#0b1f6b] font-semibold px-8 py-4 rounded-lg hover:bg-[#0b1f6b] hover:text-white transition-colors" data-testid="hero-free-counselling-btn">
              Free Counselling
            </Link>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
