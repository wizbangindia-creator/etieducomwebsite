'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, CalendarCheck } from 'lucide-react';

const PROGRAMS = [
  { slug: 'it-foundation', title: 'IT Foundation Career Track', duration: '6 Months', bestFor: 'Beginners & 12th Pass', category: 'Career Tracks' },
  { slug: 'software-development', title: 'Software Development Career Track', duration: '9-12 Months', bestFor: 'Aspiring Developers', category: 'Career Tracks' },
  { slug: 'digital-design', title: 'Design & Marketing Career Track', duration: '9-12 Months', bestFor: 'Creative Minds', category: 'Career Tracks' },
  { slug: 'it-networking', title: 'IT & Cybersecurity Career Track', duration: '9-12 Months', bestFor: 'Tech Enthusiasts', category: 'Career Tracks' },
  { slug: 'web-development', title: 'Full Stack Web Development', duration: '6 Months', bestFor: '12th Pass & Graduates', category: 'Development' },
  { slug: 'python', title: 'Python Programming', duration: '3 Months', bestFor: 'Students & Beginners', category: 'Development' },
  { slug: 'data-analytics', title: 'Data Analytics', duration: '4 Months', bestFor: 'Graduates', category: 'Development' },
  { slug: 'digital-marketing', title: 'Digital Marketing', duration: '4 Months', bestFor: 'Graduates & Entrepreneurs', category: 'Design & Marketing' },
  { slug: 'graphic-designing', title: 'Graphic Designing', duration: '3 Months', bestFor: 'Creative Beginners', category: 'Design & Marketing' },
  { slug: 'ethical-hacking', title: 'Ethical Hacking', duration: '6 Months', bestFor: 'Security Enthusiasts', category: 'Cybersecurity' },
  { slug: 'soc-analyst', title: 'SOC Analyst', duration: '6 Months', bestFor: 'IT Graduates', category: 'Cybersecurity' },
  { slug: 'e-accounting', title: 'E-Accounting (Tally Prime)', duration: '3 Months', bestFor: 'Commerce Students', category: 'Accounting' },
];

const FILTERS = ['All', 'Career Tracks', 'Development', 'Design & Marketing', 'Cybersecurity', 'Accounting'];
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function ProgramCard({ p }) {
  return (
    <article className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden bg-[#0b1f6b] shadow-lg group flex flex-col" data-testid={`program-card-${p.slug}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={`/images/programs/${p.slug}.jpg`} alt={p.title} fill sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-medium px-3 py-1 rounded-full">Offline</span>
      </div>
      <div className="flex-1 flex flex-col p-6 text-white bg-gradient-to-b from-[#0d2a8a] to-[#081a5c]">
        <h3 className="text-xl font-semibold leading-snug mb-4 min-h-[3.5rem]">{p.title}</h3>
        <div className="grid grid-cols-2 gap-4 text-sm mb-5">
          <div><p className="text-blue-200/80 text-xs">Duration:</p><p className="font-semibold">{p.duration}</p></div>
          <div><p className="text-blue-200/80 text-xs">Best For:</p><p className="font-semibold">{p.bestFor}</p></div>
        </div>
        <div className="border-t border-white/15 pt-4 mb-5 flex items-center gap-2 text-sm font-medium">
          <CalendarCheck className="w-4 h-4 text-blue-200" /> Admissions Open
        </div>
        <Link href={`/programs/${p.slug}`} className="mt-auto block text-center bg-white text-[#0b1f6b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors" data-testid={`program-view-btn-${p.slug}`}>
          View Program
        </Link>
      </div>
    </article>
  );
}

export default function ProgramsCarousel() {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const track = useRef(null);
  const items = filter === 'All' ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);

  const measure = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const n = max <= 2 ? 1 : Math.max(2, Math.round(max / el.clientWidth) + 1);
    setPages(n);
    setPage(el.scrollLeft >= max - 2 ? n - 1 : Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [filter]);

  const go = (i) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: Math.min(i * el.clientWidth, el.scrollWidth - el.clientWidth), behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white" data-testid="programs-carousel-section">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our <span className="text-primary">Programs</span></h2>
            <p className="text-gray-600 mt-3 text-lg">Career-focused training built for the jobs of tomorrow.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={() => go(Math.max(0, page - 1))} disabled={page === 0} className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:pointer-events-none transition-colors" aria-label="Previous" data-testid="programs-prev-btn"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => go(Math.min(pages - 1, page + 1))} disabled={page >= pages - 1} className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:pointer-events-none transition-colors" aria-label="Next" data-testid="programs-next-btn"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 mb-6 [scrollbar-width:none]" data-testid="programs-filters">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`shrink-0 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${filter === f ? 'bg-[#0b1f6b] text-white border-[#0b1f6b]' : 'bg-white text-gray-800 border-gray-200 hover:border-[#0b1f6b]'}`} data-testid={`programs-filter-${slugify(f)}`}>
              {f}
            </button>
          ))}
        </div>
        <div ref={track} onScroll={measure} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-testid="programs-track">
          {items.map((p) => <ProgramCard key={p.slug} p={p} />)}
        </div>
        <div className="sm:hidden h-1 bg-gray-200 rounded-full mt-6 overflow-hidden" data-testid="programs-progress">
          <div className="h-full bg-[#0b1f6b] rounded-full transition-[width] duration-300" style={{ width: `${((page + 1) / pages) * 100}%` }} />
        </div>
        <div className="hidden sm:flex justify-center gap-2 mt-6" data-testid="programs-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${i === page ? 'w-8 bg-[#0b1f6b]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`} data-testid={`programs-dot-${i}`} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/programs" className="btn-primary" data-testid="programs-explore-all-btn">
            Explore All Programs <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
