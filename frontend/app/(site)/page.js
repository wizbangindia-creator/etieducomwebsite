import Link from 'next/link';
import { ChevronRight, Phone, Zap } from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import OutcomesSection from '@/components/OutcomesSection';
import ReviewsSection from '@/components/ReviewsSection';
import EventsSection from '@/components/EventsSection';
import BlogsSection from '@/components/BlogsSection';
import PartnersSection from '@/components/PartnersSection';
import ProgramsCarousel from '@/components/ProgramsCarousel';
import LearningJourney from '@/components/LearningJourney';
import EtiAdvantage from '@/components/EtiAdvantage';
import PlacementsSection from '@/components/PlacementsSection';
import RecentEventsSection from '@/components/RecentEventsSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: { absolute: 'ETI Educom® | The Computer Career School - Professional IT Training Institute in India' },
  description: 'ETI Educom® is India\'s premier Computer Career School since 2017. We offer industry-certified training programs in Software Development, Cybersecurity, Digital Marketing & IT Support with guaranteed placement assistance.',
  keywords: 'ETI Educom, computer training institute India, IT training, software development course, cybersecurity training, digital marketing course, professional IT training, best computer institute Punjab',
  openGraph: {
    title: 'ETI Educom® | Professional IT Training Institute',
    description: 'India\'s leading Computer Career School offering industry-certified training in Software Development, Cybersecurity, Digital Marketing & IT Support since 2017.',
    url: 'https://www.etieducom.com',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.etieducom.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeHero />

      <OutcomesSection />

      <ProgramsCarousel />

      <LearningJourney />

      <EtiAdvantage />

      {/* Partners Section */}
      <PartnersSection />

      {/* Placements Section */}
      <PlacementsSection />

      {/* Events Section */}
      <EventsSection />

      {/* Recent Events Section */}
      <RecentEventsSection />

      {/* Blogs Section */}
      <BlogsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container-main relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
            <Zap className="w-4 h-4" />
            Begin Your Transformation
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Advance Your Career?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully transitioned into rewarding IT careers 
            with ETI Educom. Schedule a free consultation with our career advisors today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-counselling" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl transition-all hover:bg-gray-100">
              Schedule Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919646727676" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20">
              <Phone className="w-5 h-5" />
              +91 9646-727676
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
