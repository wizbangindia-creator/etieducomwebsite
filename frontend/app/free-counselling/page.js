import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle, Phone, Award, Users, Briefcase, GraduationCap, ChevronRight, ShieldCheck,
  Clock, Star, Target, TrendingUp, Lock, MapPin, BadgeCheck, CalendarCheck, PhoneCall, MessageSquare
} from 'lucide-react';
import FreeCounsellingForm from '@/components/FreeCounsellingForm';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Free Career Counselling | Get Expert IT Career Guidance',
  description: 'Book your FREE career counselling session with ETI Educom® experts. Get personalized IT career guidance, program recommendations, and placement support. Limited slots!',
  keywords: 'free counselling, career guidance, IT career, consultation, career counselling Pathankot',
  openGraph: {
    title: 'Free Career Counselling',
    description: 'Get expert guidance for your IT career journey. Book your FREE session now!',
    url: 'https://www.etieducom.com/free-counselling',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.etieducom.com/free-counselling',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PHONE = '+91 9646727676';
const PHONE_HREF = 'tel:+919646727676';

const credentials = [
  { icon: ShieldCheck, label: 'ISO 9001:2015 Certified' },
  { icon: BadgeCheck, label: 'Certiport Authorized (CATC)' },
  { icon: Award, label: 'MSME Registered' },
  { icon: CalendarCheck, label: 'Trusted Since 2017' },
];

const heroPoints = [
  'One-on-one session with a certified career counsellor',
  'Honest course advice based on your education and goals',
  'No fees, no pressure, no obligation to enroll',
];

const steps = [
  { icon: MessageSquare, title: 'Share your details', desc: 'Fill the short form with your name, phone, education and area of interest. It takes under a minute.' },
  { icon: PhoneCall, title: 'We call you within 24 hours', desc: 'A counsellor calls you to understand your background and fixes a convenient time for your session.' },
  { icon: Target, title: 'Get your career roadmap', desc: 'Receive a clear plan with the right program, certifications, duration and job roles to target.' },
];

const coverage = [
  { icon: Target, title: 'Career Assessment', desc: 'Understand your strengths and interests, and which IT career path suits you best.' },
  { icon: GraduationCap, title: 'Program Roadmap', desc: 'A personalised learning path with timeline, batch options and certification details.' },
  { icon: TrendingUp, title: 'Market & Salary Insights', desc: 'Realistic view of job roles, hiring companies and expected starting packages.' },
  { icon: Briefcase, title: 'Placement Support', desc: 'How our placement cell, mock interviews and resume building help you get hired.' },
];

const stats = [
  { value: '5000+', label: 'Students counselled' },
  { value: '40+', label: 'Global certifications' },
  { value: '95%', label: 'Placement rate' },
  { value: '24 hrs', label: 'Callback time' },
];

const partners = ['microsoft', 'adobe', 'cisco', 'ibm', 'meta', 'eccouncil', 'autodesk', 'tally', 'quickbooks'];

const testimonials = [
  { name: 'Rahul Sharma', role: 'Web Developer at TCS', text: 'The counselling session helped me choose the right course. Now I\'m working as a developer!' },
  { name: 'Priya Gupta', role: 'Digital Marketing Executive', text: 'Best decision I made. The career guidance was spot-on and I got placed within 3 months.' },
  { name: 'Amit Kumar', role: 'Cybersecurity Analyst', text: 'From confused graduate to cybersecurity professional - ETI made it possible.' },
];

const faqs = [
  { q: 'Is the counselling session really free?', a: 'Yes. The session is completely free and there is no obligation to enroll in any program afterwards.' },
  { q: 'Who will I speak with?', a: 'You will speak with an experienced ETI Educom career counsellor who understands current industry hiring trends and our programs in detail.' },
  { q: 'Can I attend the session at the institute?', a: 'Absolutely. You can choose a phone call or visit our centre in person, Monday to Saturday between 9:00 AM and 7:00 PM.' },
  { q: 'Can my parents join the session?', a: 'Yes, parents and guardians are welcome. We encourage families to join so everyone gets clarity on the career plan.' },
];

function LandingHeader() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 z-50" data-testid="counselling-header">
      <div className="container-main flex items-center justify-between">
        <Link href="/" data-testid="counselling-logo-link">
          <Image src="/images/logo-blue-cropped.png" alt="ETI Educom" width={463} height={357} className="h-11 w-auto" style={{ width: 'auto' }} priority />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-primary" /> Mon–Sat, 9:00 AM – 7:00 PM
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors" data-testid="counselling-header-call-btn">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function FormCard() {
  return (
    <div className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(21,69,234,0.25)] border border-gray-100 overflow-hidden" data-testid="counselling-form-card">
      <div className="bg-gray-900 text-white px-6 sm:px-8 py-5">
        <h2 className="text-xl font-bold">Book Your Free Session</h2>
        <p className="text-gray-400 text-sm mt-1">A counsellor will call you within 24 hours</p>
      </div>
      <div className="p-6 sm:p-8">
        <FreeCounsellingForm />
        <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-100 text-center">
          <div className="text-xs text-gray-500"><Lock className="w-4 h-4 text-green-600 mx-auto mb-1" />Data kept private</div>
          <div className="text-xs text-gray-500"><ShieldCheck className="w-4 h-4 text-primary mx-auto mb-1" />ISO certified</div>
          <div className="text-xs text-gray-500"><Users className="w-4 h-4 text-primary mx-auto mb-1" />5000+ trained</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden" data-testid="counselling-hero">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Free 1-on-1 Career Counselling
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Plan Your IT Career with <span className="text-primary">Expert Guidance</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            Not sure which course is right for you? Speak with an ETI Educom career counsellor and get
            clear, honest advice on the program, certifications and career path that fit your goals.
          </p>
          <a href="#top" className="lg:hidden btn-primary w-full justify-center mb-8" data-testid="counselling-mobile-book-btn">
            Book My Free Session <ChevronRight className="w-5 h-5" />
          </a>
          <ul className="space-y-3 mb-10">
            {heroPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
          <div className="relative hidden sm:block rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
            <Image src="/images/counselling-session.jpg" alt="ETI Educom counsellor guiding a student and parent" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
              <span className="text-sm font-semibold text-gray-900">Rated 4.8/5 by students</span>
            </div>
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <FormCard />
          <p className="text-center text-sm text-gray-500 mt-5">
            Prefer to talk now? Call <a href={PHONE_HREF} className="text-primary font-semibold hover:underline" data-testid="counselling-hero-call-link">{PHONE}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function CredentialsBar() {
  return (
    <section className="border-y border-gray-100 bg-white" data-testid="counselling-credentials">
      <div className="container-main py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {credentials.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
            <Icon className="w-5 h-5 text-primary" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 bg-white" data-testid="counselling-how-it-works">
      <div className="container-main">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three simple steps to clarity</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative p-8 rounded-3xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,background-color] duration-300">
              <span className="absolute top-6 right-8 text-6xl font-bold text-gray-200/80 select-none">0{i + 1}</span>
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6"><Icon className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="py-20 bg-gray-900 text-white" data-testid="counselling-coverage">
      <div className="container-main grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Your session covers</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to decide with confidence</h2>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div key={s.label} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {coverage.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors duration-300">
              <Icon className="w-8 h-8 text-blue-300 mb-5" />
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-14 bg-white" data-testid="counselling-partners">
      <div className="container-main">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">Training and certifications aligned with global technology leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={p} src={`/images/partners/${p}.${['tally', 'autodesk', 'eccouncil', 'quickbooks'].includes(p) ? 'png' : 'svg'}`} alt={p} className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-slate-50" data-testid="counselling-testimonials">
      <div className="container-main">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Student stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">It started with one conversation</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">{t.name[0]}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 bg-white" data-testid="counselling-faq">
      <div className="container-main max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Common questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white open:shadow-md transition-shadow" data-testid={`counselling-faq-item-${i}`}>
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 font-semibold text-gray-900">
                {f.q}
                <ChevronRight className="w-5 h-5 text-primary transition-transform group-open:rotate-90 flex-shrink-0" />
              </summary>
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        <div className="rounded-3xl bg-primary px-8 py-12 md:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-2">Take the first step today</h2>
            <p className="text-blue-100">Book your free session or call our counselling desk directly.</p>
          </div>
          <div className="relative flex flex-wrap gap-4">
            <a href="#top" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors" data-testid="counselling-final-book-btn">
              Book Free Session <ChevronRight className="w-5 h-5" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-colors" data-testid="counselling-final-call-btn">
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image src="/images/logo-white.png" alt="ETI Educom" width={100} height={40} className="h-8 w-auto" />
          <span className="text-gray-400 text-sm flex items-center gap-1"><MapPin className="w-4 h-4" /> Dhangu Road, Pathankot, Punjab</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-white" data-testid="counselling-privacy-link">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-white" data-testid="counselling-terms-link">Terms</Link>
          <span>© {new Date().getFullYear()} ETI Educom®</span>
        </div>
      </div>
    </footer>
  );
}

export default function FreeCounsellingPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="free-counselling-page">
      <Toaster position="top-right" richColors />
      <LandingHeader />
      <Hero />
      <CredentialsBar />
      <HowItWorks />
      <Coverage />
      <Partners />
      <Testimonials />
      <Faq />
      <FinalCta />
      <LandingFooter />
    </div>
  );
}
