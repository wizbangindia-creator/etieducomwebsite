'use client';

import { useEffect, useRef, useState } from 'react';
import HeroForm from '@/components/HeroForm';

const OUTCOMES = [
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 40, suffix: '+', label: 'Certification Programs' },
  { value: 15, suffix: '+', label: 'Certification Partners' },
];

function CountUp({ end, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1600);
        setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n.toLocaleString('en-IN')}<span className="text-primary text-3xl align-top ml-0.5">{suffix}</span></span>;
}

export default function OutcomesSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-gray-100" data-testid="outcomes-section">
      <div className="container-main grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Outcomes That Speak Louder Than <span className="text-primary">Certificates</span></h2>
          <p className="text-gray-600 text-lg mb-10">Real results from ETI Educom students since 2017.</p>
          <div className="grid grid-cols-2 gap-5">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-300" data-testid={`outcome-${o.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-4xl sm:text-5xl font-bold text-[#0b1f6b]"><CountUp end={o.value} suffix={o.suffix} /></p>
                <p className="mt-2 font-medium text-gray-700">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mt-4" data-testid="outcomes-enquiry"><HeroForm /></div>
      </div>
    </section>
  );
}
