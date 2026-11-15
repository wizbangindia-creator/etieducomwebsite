import Link from 'next/link';
import Image from 'next/image';
import { Award, ArrowRight, ShieldCheck, BadgeCheck, Briefcase, Users, GraduationCap, Sparkles } from 'lucide-react';

const pillars = [
  { icon: BadgeCheck, title: 'Certiport Authorized', desc: 'Official testing center (CATC) for global certifications' },
  { icon: ShieldCheck, title: 'ISO 9001:2015', desc: 'Certified quality management for every program' },
  { icon: GraduationCap, title: 'Industry Curriculum', desc: 'Built with working professionals and recruiters' },
  { icon: Briefcase, title: 'Placement Cell', desc: 'Dedicated team with strong corporate partnerships' },
];

const numbers = [
  { value: '5000+', label: 'Students trained' },
  { value: '40+', label: 'Certifications' },
  { value: '95%', label: 'Placement rate' },
  { value: '2017', label: 'Established' },
];

function ImageCollage() {
  return (
    <div className="relative" data-testid="about-image-collage">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
        <Image src="/images/about-students-lab.jpg" alt="Students training in the ETI Educom computer lab" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        <div className="absolute bottom-5 right-5 flex items-center justify-end gap-2 text-white text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live, hands-on lab sessions every day
        </div>
      </div>
      <div className="hidden sm:block absolute -top-8 -right-6 w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-3 transition-transform duration-500 hover:rotate-0">
        <Image src="/images/about-certification.jpg" alt="ETI Educom student holding certificate" fill sizes="200px" className="object-cover" />
      </div>
      <div className="absolute -bottom-8 left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-4 animate-fade-in" data-testid="about-since-badge">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">Since 2017</p>
          <p className="text-xs text-gray-500">Training excellence</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPreviewSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative" data-testid="about-preview-section">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ImageCollage />
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> About ETI Educom
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Where Ambition Meets <span className="text-primary">Industry-Ready Skills</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              ETI Educom is a professionally managed Computer Career School. We mix real projects, global
              certifications and one-on-one mentoring, so our students walk out job-ready, not just course-complete.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group p-4 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow,background-color,border-color] duration-300" data-testid={`about-pillar-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary" data-testid="about-learn-more-btn">
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/founder" className="btn-secondary" data-testid="about-founder-btn">
                <Users className="w-5 h-5" /> Meet Our Founder
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-gray-900 text-white overflow-hidden" data-testid="about-numbers-strip">
          {numbers.map((n, i) => (
            <div key={n.label} className={`p-6 md:p-8 text-center hover:bg-primary transition-colors duration-300 ${i > 0 ? 'md:border-l border-white/10' : ''}`}>
              <p className="text-3xl md:text-4xl font-bold">{n.value}</p>
              <p className="text-sm text-gray-400 mt-1">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
