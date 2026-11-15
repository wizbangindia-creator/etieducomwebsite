import Link from 'next/link';
import Image from 'next/image';
import { Target, Award, Code, Briefcase, Users, Clock, ArrowRight, BadgeCheck } from 'lucide-react';

const ADVANTAGES = [
  { title: 'Industry-Aligned Curriculum', desc: 'Programs designed with industry experts to match current market requirements.', icon: Target },
  { title: 'International Certifications', desc: 'Authorized testing center for Microsoft, Adobe, EC-Council and Tally certifications.', icon: Award },
  { title: 'Hands-On Training', desc: 'Project-based learning with real-world scenarios and industry case studies.', icon: Code },
  { title: 'Placement Assistance', desc: 'Dedicated placement cell, mock interviews and resume building for every student.', icon: Briefcase },
  { title: 'Expert Faculty', desc: 'Learn from certified trainers with extensive industry experience.', icon: Users },
  { title: 'Flexible Learning', desc: 'Morning, evening and weekend batches to fit your schedule.', icon: Clock },
];

function AdvantageCard({ item, index }) {
  const Icon = item.icon;
  return (
    <div className="group relative p-6 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 overflow-hidden" data-testid={`advantage-card-${index + 1}`}>
      <span className="absolute -top-2 right-4 text-7xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors select-none">{index + 1}</span>
      <div className="relative w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="relative font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="relative text-sm text-gray-600 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function EtiAdvantage() {
  return (
    <section className="section-padding bg-white" data-testid="eti-advantage-section">
      <div className="container-main">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
          <div className="relative rounded-3xl overflow-hidden min-h-[460px] bg-gray-900 flex flex-col justify-end" data-testid="advantage-hero-card">
            <Image src="/images/advantage-mentor.jpg" alt="ETI Educom mentor guiding students" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081a5c] via-[#081a5c]/60 to-transparent" />
            <div className="relative p-8 text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <BadgeCheck className="w-4 h-4" /> ISO 9001:2015 · Certiport CATC
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">The ETI Advantage</h2>
              <p className="text-blue-100 mb-6">Why ETI Educom is the first choice of students who want a real career in technology.</p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors" data-testid="advantage-learn-more-btn">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((item, i) => <AdvantageCard key={item.title} item={item} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
