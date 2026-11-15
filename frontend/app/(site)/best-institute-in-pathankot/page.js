import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Phone, Mail, Clock, Award, Users, GraduationCap, CheckCircle,
  ChevronRight, Monitor, Wifi, BookOpen, Building2, Star, Navigation,
  Code, Calculator, TrendingUp, Shield, Briefcase, Target, Sparkles,
  ThumbsUp
} from 'lucide-react';

const SITE_URL = 'https://www.etieducom.com';
const PAGE_URL = `${SITE_URL}/best-institute-in-pathankot`;

export const metadata = {
  title: 'Best Computer Institute in Pathankot | Computer Courses Near Me',
  description:
    'Top-rated computer institute in Pathankot since 2017. ETI Educom offers Python, Tally, Digital Marketing, Web Development, Cybersecurity & summer training courses with 100% placement support. Visit our Pathankot center on Dhangu Road. Call 9646727676.',
  keywords: [
    'best computer institute in pathankot',
    'computer institutes in pathankot',
    'computer institutes pathankot',
    'institutes in pathankot',
    'computer courses in pathankot',
    'computer institute near me',
    'institutes near me',
    'IT institute in pathankot',
    'IT training pathankot',
    'python course in pathankot',
    'python training in pathankot',
    'tally course in pathankot',
    'tally course near me',
    'digital marketing institute in pathankot',
    'digital marketing institutes near me',
    'summer training in pathankot',
    'industrial training in pathankot',
    'web development course pathankot',
    'cybersecurity training pathankot',
    'graphic design course pathankot',
    'data analytics course pathankot',
    'AI course pathankot',
    'best IT training institute pathankot punjab',
    'ETI Educom pathankot',
    'computer training pathankot',
  ].join(', '),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Best Computer Institute in Pathankot',
    description:
      'Punjab\'s premier Computer Career School. Python, Tally, Digital Marketing, Web Development, Cybersecurity courses with placement support. 5000+ students trained.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'ETI Educom',
    locale: 'en_IN',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'ETI Educom - Best Computer Institute in Pathankot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Computer Institute in Pathankot - ETI Educom®',
    description:
      'Top-rated computer institute in Pathankot. Python, Tally, Digital Marketing courses. Call 9646727676.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'geo.region': 'IN-PB',
    'geo.placename': 'Pathankot',
    'geo.position': '32.2643;75.6421',
    'ICBM': '32.2643, 75.6421',
  },
};

const branchInfo = {
  name: 'ETI Educom Pathankot',
  tagline: 'Best Computer Institute in Pathankot',
  address: 'Jodhamal Colony, Dhangu Road, Pathankot, Punjab - 145001',
  phone: '+91 9646727676',
  email: 'helpdesk@etieducom.com',
  timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
  geo: { lat: 32.2643, lng: 75.6421 },
  mapUrl: 'https://maps.google.com/maps?q=32.2643,75.6421&z=16&output=embed',
};

const facilities = [
  { icon: Monitor, title: 'Modern Computer Labs', desc: 'Latest hardware with high-speed internet' },
  { icon: Wifi, title: 'High-Speed Internet', desc: 'Uninterrupted connectivity for online learning' },
  { icon: BookOpen, title: 'Digital Library', desc: 'Access to e-books and learning resources' },
  { icon: Users, title: 'Small Batch Sizes', desc: 'Personalized attention for every student' },
];

const highlights = [
  'Certiport Authorized Testing Center (CATC)',
  'ISO 9001:2015 Certified Institute',
  'MSME Registered Organization',
  '5000+ Students Trained Since 2017',
  '95% Placement Rate (Top Recruiters)',
  'Industry Expert Faculty',
  'Hands-on Project Training',
  'Flexible Batch Timings (Morning/Evening/Weekend)',
];

const popularCoursesPathankot = [
  { name: 'Python Course in Pathankot', duration: '3 Months', slug: 'python', icon: Code, desc: 'Master Python programming with hands-on projects, web scraping, automation, and Django/Flask. PCEP/PCAP certifications included.' },
  { name: 'Tally Course in Pathankot', duration: '3 Months', slug: 'e-accounting', icon: Calculator, desc: 'Tally Prime + GST, TDS, payroll, e-way bills, financial accounting. Get certified Tally Professional & GST Practitioner certificates.' },
  { name: 'Digital Marketing in Pathankot', duration: '4 Months', slug: 'digital-marketing', icon: TrendingUp, desc: 'SEO, Google Ads, Meta Ads, social media marketing & analytics. Google + Meta Blueprint certified course in Pathankot.' },
  { name: 'Web Development in Pathankot', duration: '6 Months', slug: 'web-development', icon: Code, desc: 'Full-stack development with React.js, Node.js, MongoDB. Build real production-grade web applications.' },
  { name: 'Cybersecurity & Ethical Hacking', duration: '6 Months', slug: 'ethical-hacking', icon: Shield, desc: 'CEH, CompTIA Security+ track. Learn penetration testing, network security, ethical hacking in Pathankot.' },
  { name: 'Graphic Designing Course', duration: '3 Months', slug: 'graphic-designing', icon: Sparkles, desc: 'Adobe Photoshop, Illustrator, InDesign + brand design. Adobe Certified Professional curriculum.' },
];

const stats = [
  { icon: GraduationCap, value: '5000+', label: 'Students Trained' },
  { icon: Award, value: '40+', label: 'Certifications' },
  { icon: Briefcase, value: '95%', label: 'Placement Rate' },
  { icon: Star, value: '4.8/5', label: 'Student Rating' },
];

const faqs = [
  {
    q: 'Which is the best computer institute in Pathankot?',
    a: 'ETI Educom is widely regarded as the best computer institute in Pathankot, established in 2017. With over 5000+ students trained, 95% placement rate, ISO 9001:2015 certification, and a 4.8/5 rating on Justdial, it is Punjab\'s premier Computer Career School. ETI Educom offers career-focused courses in Python, Tally, Digital Marketing, Web Development, Cybersecurity, and more — all with industry-recognized certifications and placement assistance.',
  },
  {
    q: 'Where can I find the best Python course in Pathankot?',
    a: 'ETI Educom offers a comprehensive Python course in Pathankot lasting 3 months. The curriculum covers Python fundamentals, OOP, web scraping, automation, and frameworks like Django and Flask. Students get certified for PCEP and PCAP (Python Institute) along with hands-on projects. Located on Dhangu Road, our Pathankot Python training is taught by industry-expert faculty with flexible batch timings.',
  },
  {
    q: 'Is there a Tally course near me in Pathankot?',
    a: 'Yes — ETI Educom\'s Pathankot center on Dhangu Road, Jodhamal Colony, offers an industry-leading Tally course (e-Accounting) in Pathankot. The 3-month program covers Tally Prime, GST compliance, TDS/TCS, payroll, and financial reporting with certifications including Tally Certified Professional and GST Practitioner. Call 9646727676 to enroll.',
  },
  {
    q: 'Do you provide summer training in Pathankot for college students?',
    a: 'Absolutely. ETI Educom Pathankot offers summer training programs (4-6 weeks) every year for B.Tech, BCA, MCA, and B.Sc students from Pathankot, Gurdaspur, Jammu, and surrounding areas. Choose from Python, Java, Web Development, Data Analytics, AI, Digital Marketing, and Cybersecurity. Includes live projects, certificates, and internship opportunities.',
  },
  {
    q: 'Where are digital marketing institutes near me in Pathankot?',
    a: 'ETI Educom Pathankot (Dhangu Road) is one of the top digital marketing institutes near you in Pathankot. The 4-month Digital Marketing course covers SEO, SEM, Google Ads, Meta Ads, social media marketing, content marketing, and Google Analytics 4. Get Google Ads, Google Analytics, Meta Blueprint, and HubSpot certifications.',
  },
  {
    q: 'What computer courses are available at ETI Educom Pathankot?',
    a: 'ETI Educom offers 50+ computer courses in Pathankot including: IT Foundation, Python Programming, Web Designing, Web Development, Tally + e-Accounting, Digital Marketing, Graphic Designing, UI/UX Designing, Data Analytics, AI Engineering, SOC Analyst, Ethical Hacking, MS Office, Spoken English, and Personality Development. We also run summer & industrial training programs.',
  },
  {
    q: 'Where is ETI Educom located in Pathankot?',
    a: 'ETI Educom Pathankot is located at Jodhamal Colony, Dhangu Road, Pathankot, Punjab - 145001. The institute is easily accessible from all parts of the city. We are open Monday to Saturday from 9:00 AM to 7:00 PM. Call us on +91-9646727676 or visit etieducom.com to book a free counselling session.',
  },
  {
    q: 'Does ETI Educom Pathankot provide job placement?',
    a: 'Yes, ETI Educom has a 95% placement record. We have tie-ups with 50+ companies across India and offer dedicated placement assistance, mock interviews, resume building, and career counselling. Students from our Pathankot center have been placed in roles like Software Developer, Digital Marketer, Data Analyst, SOC Analyst, Graphic Designer, and Tally Operator.',
  },
];

// JSON-LD: LocalBusiness + EducationalOrganization combined (richer signal)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': PAGE_URL,
  name: 'ETI Educom — Best Computer Institute in Pathankot',
  alternateName: ['ETI Educom Pathankot', 'ETI Educom®', 'Educational Training Institute'],
  description:
    'ETI Educom is the best computer institute in Pathankot offering certified IT courses in Python, Tally, Digital Marketing, Web Development, Cybersecurity, AI, Data Analytics, Graphic Design and more. ISO 9001:2015 certified with 5000+ students trained and 95% placement rate.',
  url: PAGE_URL,
  logo: `${SITE_URL}/images/logo-blue.png`,
  image: [`${SITE_URL}/images/og-image.jpg`],
  telephone: '+91-9646727676',
  email: 'helpdesk@etieducom.com',
  priceRange: '₹₹',
  foundingDate: '2017',
  slogan: 'The Computer Career School — Training | Certification | Placement',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jodhamal Colony, Dhangu Road',
    addressLocality: 'Pathankot',
    addressRegion: 'Punjab',
    postalCode: '145001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.2643,
    longitude: 75.6421,
  },
  areaServed: [
    { '@type': 'City', name: 'Pathankot' },
    { '@type': 'City', name: 'Gurdaspur' },
    { '@type': 'City', name: 'Dalhousie' },
    { '@type': 'City', name: 'Kathua' },
    { '@type': 'City', name: 'Jammu' },
    { '@type': 'AdministrativeArea', name: 'Punjab' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/etieducom',
    'https://www.instagram.com/etieducom/',
    'https://www.linkedin.com/company/etieducom',
    'https://www.youtube.com/@ETIEducomofficial',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Computer Courses in Pathankot',
    itemListElement: popularCoursesPathankot.map((c, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Course',
        name: c.name,
        url: `${SITE_URL}/programs/${c.slug}`,
        description: c.desc,
        provider: { '@type': 'EducationalOrganization', name: 'ETI Educom', sameAs: SITE_URL },
      },
    })),
  },
  // aggregateRating omitted — populated only when /api/reviews/stats reports
  // 5+ moderated reviews to avoid Google spam-rating penalty.
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9646727676',
    contactType: 'customer service',
    email: 'helpdesk@etieducom.com',
    availableLanguage: ['English', 'Hindi', 'Punjabi'],
    areaServed: 'IN',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Best Computer Institute in Pathankot', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PathankotBranchPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="pathankot-branch-page">
      {/* SEO: Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BranchHero />
      <StatsStrip />
      <IntroSection />
      <CoursesSection />
      <TrainingSection />
      <FacilitiesSection />
      <LocationSection />
      <FaqSection />
      <ServiceAreas />
      <BranchCta />
    </div>
  );
}

function SectionLabel({ icon: Icon, children, light }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${light ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'}`}>
      <Icon className="w-4 h-4" /> {children}
    </div>
  );
}

function BranchHero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-24 lg:pt-14 lg:pb-32 overflow-hidden" data-testid="branch-hero">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main relative">
        <nav className="text-sm text-gray-500 mb-8 flex items-center gap-1" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary" data-testid="branch-breadcrumb-home">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Pathankot Branch</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <SectionLabel icon={Building2}>ISO 9001:2015 Certified · MSME Registered · Since 2017</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Best Computer Institute in <span className="text-primary">Pathankot</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              ETI Educom — Punjab&apos;s #1 Computer Career School delivering certified training in
              <strong className="text-gray-900"> Python, Tally, Digital Marketing, Web Development, Cybersecurity</strong>,
              and more — with 100% placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-counselling" className="btn-primary justify-center px-8 py-4" data-testid="branch-hero-counselling-btn">
                Book Free Counselling <ChevronRight className="w-5 h-5" />
              </Link>
              <a href={`tel:${branchInfo.phone}`} className="btn-secondary justify-center px-8 py-4" data-testid="branch-hero-call-btn">
                <Phone className="w-4 h-4" /> Call 9646727676
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-gray-700">{branchInfo.address}</span></div>
              <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-gray-700">{branchInfo.timings}</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/branch-campus.jpg" alt="ETI Educom Pathankot campus and computer lab" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100" data-testid="branch-rating-card">
              <div className="flex gap-1 mb-1">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
              <p className="font-bold text-gray-900">4.8/5 on Justdial</p>
              <p className="text-xs text-gray-500">Loved by 5000+ students</p>
            </div>
            <div className="hidden sm:flex absolute -top-6 -right-4 bg-gray-900 text-white rounded-2xl shadow-xl px-5 py-4 items-center gap-3">
              <Award className="w-6 h-6 text-yellow-400" />
              <div>
                <p className="font-bold text-sm">Certiport CATC</p>
                <p className="text-xs text-gray-400">Authorized test centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="container-main -mt-10 relative z-10" data-testid="branch-stats">
      <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-primary text-white overflow-hidden shadow-xl">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div key={label} className={`p-6 md:p-8 flex items-center gap-4 hover:bg-primary-dark transition-colors ${i > 0 ? 'md:border-l border-white/15' : ''}`}>
            <Icon className="w-8 h-8 text-yellow-300 flex-shrink-0" />
            <div>
              <p className="text-2xl md:text-3xl font-bold">{value}</p>
              <p className="text-xs md:text-sm text-blue-100">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container-main grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Top-Rated Computer Institute in Pathankot Since 2017</h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              Looking for the <strong>best computer institute in Pathankot</strong>? ETI Educom is a
              Punjab-based computer career school dedicated to bridging the gap between academic
              education and industry requirements. Located at Jodhamal Colony, Dhangu Road, our
              Pathankot branch has trained over <strong>5000+ students</strong> since 2017 in
              cutting-edge IT skills with industry-recognized certifications.
            </p>
            <p>
              Whether you are searching for <em>computer institutes in Pathankot</em>,
              <em> institutes near me</em>, a <em>Python course in Pathankot</em>,
              <em> Tally course near me</em>, or a <em>digital marketing institute in Pathankot</em> —
              ETI Educom offers career-focused programs designed for placement, not just education.
              Our students have been hired by leading companies across India in roles such as
              Software Developer, Digital Marketer, Data Analyst, SOC Analyst, Graphic Designer,
              Tally Operator, and Network Engineer.
            </p>
            <p>
              ETI Educom is an <strong>ISO 9001:2015 Certified institute</strong>,
              <strong> MSME registered</strong>, and a <strong>Certiport Authorized Testing Center
              (CATC)</strong>. We partner with global certification bodies including Microsoft,
              Adobe, Google, Meta, EC-Council, CompTIA, Cisco, Tally, and HubSpot — ensuring
              students leave with certifications that employers recognize and value.
            </p>
          </div>
        </div>
        <div className="lg:sticky lg:top-28 rounded-3xl bg-gray-900 text-white p-8" data-testid="branch-highlights-card">
          <SectionLabel icon={ThumbsUp} light>Why students choose us</SectionLabel>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionLabel icon={Target}>Most Popular in Pathankot</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Top Computer Courses in Pathankot</h2>
            <p className="text-gray-600 text-lg">From Python and Tally to Digital Marketing — explore the most enrolled courses at our Pathankot center.</p>
          </div>
          <Link href="/programs" className="btn-secondary self-start md:self-auto" data-testid="branch-all-courses-btn">
            View All 50+ Courses <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCoursesPathankot.map((course) => {
            const Icon = course.icon;
            return (
              <Link key={course.slug} href={`/programs/${course.slug}`} className="group bg-white rounded-3xl p-7 border border-gray-100 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300" data-testid={`course-card-${course.slug}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-5 line-clamp-3">{course.desc}</p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                  View Details <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  const cards = [
    { href: '/summer-training', testId: 'summer-training-link', icon: Sparkles, title: 'Summer Training in Pathankot', cta: 'Apply for Summer Training', text: '4-6 week summer training programs for B.Tech, BCA, MCA, and B.Sc students from Pathankot, Gurdaspur, Dalhousie, and Jammu region. Choose Python, Java, Web Development, Data Analytics, Digital Marketing, AI, or Cybersecurity. Live projects, certificates & internship opportunities included.' },
    { href: '/industrial-training', testId: 'industrial-training-link', icon: Briefcase, title: 'Industrial Training in Pathankot', cta: 'Explore Industrial Training', text: '6-month industrial training programs for engineering and CS students. PTU, GNDU, and IK Gujral PTU approved curriculum with hands-on real-world projects, mentorship from industry professionals, and final-year project support. Perfect for placement preparation.' },
  ];
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container-main grid md:grid-cols-2 gap-6">
        {cards.map(({ href, testId, icon: Icon, title, cta, text }, i) => (
          <Link key={href} href={href} className={`group rounded-3xl p-8 lg:p-10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl ${i === 0 ? 'bg-gray-900 text-white' : 'bg-primary text-white'}`} data-testid={testId}>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-yellow-300" />
            </div>
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <p className="text-white/75 mb-6 leading-relaxed">{text}</p>
            <span className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-[gap]">
              {cta} <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <SectionLabel icon={Building2}>Our Facilities</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Infrastructure in Pathankot</h2>
          <p className="text-gray-600">Modern labs, certified faculty, and student-first amenities — everything you need to learn and grow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-20 lg:py-24 bg-white" data-testid="branch-location">
      <div className="container-main">
        <div className="rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden grid lg:grid-cols-[1fr_1.2fr]">
          <div className="p-8 lg:p-12">
            <SectionLabel icon={MapPin}>Visit Our Pathankot Center</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Computer Institute Near You in Pathankot</h2>
            <p className="text-gray-600 mb-8">
              ETI Educom Pathankot is centrally located on Dhangu Road, easily accessible from
              Sukhdev Nagar, Bhatia Chowk, Salwa Pul, and all surrounding areas. Walk in for a
              free campus tour and counselling session.
            </p>
            <div className="space-y-5 mb-8">
              <ContactRow icon={MapPin} label="Address" value={branchInfo.address} />
              <ContactRow icon={Phone} label="Phone" value={branchInfo.phone} href={`tel:${branchInfo.phone}`} />
              <ContactRow icon={Mail} label="Email" value={branchInfo.email} href={`mailto:${branchInfo.email}`} />
              <ContactRow icon={Clock} label="Timings" value={branchInfo.timings} />
            </div>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${branchInfo.geo.lat},${branchInfo.geo.lng}&destination_place_id=ETI+Educom+Pathankot`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2" data-testid="branch-directions-btn">
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>
          <div className="min-h-[400px] bg-gray-100">
            <iframe
              src={branchInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ETI Educom Pathankot - Best Computer Institute Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container-main grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <SectionLabel icon={BookOpen}>Frequently Asked Questions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions About Computer Courses in Pathankot</h2>
          <p className="text-gray-600 mb-6">Got questions? We&apos;ve answered the most common queries from students across Pathankot, Gurdaspur, and Jammu region.</p>
          <Link href="/free-counselling" className="btn-primary" data-testid="branch-faq-counselling-btn">Ask a Counsellor <ChevronRight className="w-4 h-4" /></Link>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details key={faq.q} className="group bg-white rounded-2xl border border-gray-200 open:shadow-md transition-shadow" data-testid={`branch-faq-item-${idx}`}>
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center group-open:rotate-90 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-700 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    'Pathankot City', 'Sukhdev Nagar', 'Dhangu Road', 'Jodhamal Colony',
    'Bhoa', 'Sujanpur', 'Dinanagar', 'Gurdaspur', 'Batala', 'Amritsar',
    'Dalhousie', 'Banikhet', 'Chamba', 'Nurpur', 'Kathua', 'Samba',
    'Jammu', 'Udhampur',
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-main max-w-5xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Serving Students Across the Region</h2>
        <p className="text-gray-600 mb-8">ETI Educom Pathankot welcomes students from these surrounding areas:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span key={area} className="px-4 py-2 bg-slate-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchCta() {
  return (
    <section className="pb-20 bg-white">
      <div className="container-main">
        <div className="rounded-[2rem] bg-gray-900 px-8 py-14 md:px-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/40 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Best Computer Institute in Pathankot?</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Visit our Pathankot center for a free career counselling session. Talk to our experts,
              tour the facility, and discover the right computer course for your career goals.
              Walk-ins welcome Monday to Saturday, 9 AM to 7 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-counselling" className="btn-primary px-8 py-4 text-lg justify-center" data-testid="branch-cta-counselling-btn">Book Free Counselling</Link>
              <a href={`tel:${branchInfo.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 rounded-xl transition-colors" data-testid="branch-cta-call-btn">
                <Phone className="w-5 h-5" /> Call {branchInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">{label}</h4>
        {href ? <a href={href} className="text-primary hover:underline">{value}</a> : <p className="text-gray-600">{value}</p>}
      </div>
    </div>
  );
}
