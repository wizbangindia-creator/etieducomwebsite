import { Users, Zap, Rocket, BrainCircuit, Sparkles, History } from 'lucide-react';

const STEPS = [
  { icon: Users, title: 'Enroll', desc: 'Get free counselling, pick the right program and start your journey.' },
  { icon: Zap, title: 'Start Orientation', desc: 'Meet your mentors, understand the course structure and set your goals.' },
  { icon: Rocket, title: 'Learn', desc: 'Hands-on classroom and lab training to build in-demand skills.' },
  { icon: BrainCircuit, title: 'Practice', desc: 'Apply your learning through assignments, live projects and global certifications.' },
  { icon: Sparkles, title: 'Get Hired*', desc: 'Become interview-ready with placement support. *T&C apply', highlight: true },
];

function NumberBadge({ n }) {
  return (
    <div className="w-[76px] h-[76px] rounded-full border-2 border-dotted border-primary/30 flex items-center justify-center mx-auto">
      <div className="w-14 h-14 rounded-full border-2 border-primary bg-white flex items-center justify-center text-lg font-bold text-gray-900">
        {String(n).padStart(2, '0')}
      </div>
    </div>
  );
}

function StepCard({ step }) {
  const Icon = step.icon;
  return (
    <div className="bg-white rounded-3xl p-7 shadow-[0_10px_40px_-15px_rgba(21,69,234,0.25)] border border-white hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(21,69,234,0.35)] transition-[transform,box-shadow] duration-300">
      <Icon className="w-11 h-11 text-primary mb-6 mx-auto lg:mx-0" strokeWidth={1.6} />
      <h3 className={`font-bold uppercase tracking-tight mb-2 ${step.highlight ? 'text-primary' : 'text-gray-900'}`}>{step.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
    </div>
  );
}

export default function LearningJourney() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-blue-50/40 relative overflow-hidden" data-testid="learning-journey-section">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-main relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <History className="w-4 h-4" /> How it works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight">Your Learning Journey</h2>
          <p className="text-gray-600 mt-4 text-lg">Every step brings you closer to your future.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {STEPS.map((s, i) => {
            const even = i % 2 === 1;
            return (
              <div key={s.title} className={`flex flex-col-reverse gap-6 text-center lg:text-left ${even ? 'lg:flex-col-reverse lg:justify-end' : 'lg:flex-col'}`} data-testid={`journey-step-${i + 1}`}>
                <div className={even ? 'lg:mt-36' : ''}><StepCard step={s} /></div>
                <NumberBadge n={i + 1} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
