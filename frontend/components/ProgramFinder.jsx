'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, X, RotateCcw, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const API = process.env.NEXT_PUBLIC_API_URL || '';

const PROGRAMS = {
  'it-foundation': { title: 'IT Foundation Career Track', duration: '6 Months' },
  'software-development': { title: 'Software Development Career Track', duration: '9–12 Months' },
  'digital-design': { title: 'Design & Marketing Career Track', duration: '9–12 Months' },
  'it-networking': { title: 'IT & Cybersecurity Career Track', duration: '9–12 Months' },
  'web-development': { title: 'Full Stack Web Development', duration: '6 Months' },
  python: { title: 'Python Programming', duration: '3 Months' },
  'data-analytics': { title: 'Data Analytics', duration: '4 Months' },
  'ai-engineering': { title: 'AI & ML Engineering', duration: '6 Months' },
  'digital-marketing': { title: 'Digital Marketing', duration: '4 Months' },
  'graphic-designing': { title: 'Graphic Designing', duration: '3 Months' },
  'ethical-hacking': { title: 'Ethical Hacking', duration: '6 Months' },
  'soc-analyst': { title: 'SOC Analyst', duration: '6 Months' },
  'e-accounting': { title: 'E-Accounting (Tally Prime)', duration: '3 Months' },
  'ms-office': { title: 'MS Office with AI Tools', duration: '2 Months' },
};

const QUESTIONS = [
  {
    id: 'interest', text: 'Hi! I can find your ideal program in seconds. What interests you most?',
    options: [
      { label: 'Coding & apps', w: { 'software-development': 3, 'web-development': 3, python: 2 } },
      { label: 'Design & creativity', w: { 'graphic-designing': 3, 'digital-design': 3 } },
      { label: 'Marketing & social media', w: { 'digital-marketing': 4, 'digital-design': 2 } },
      { label: 'Cybersecurity', w: { 'ethical-hacking': 3, 'soc-analyst': 3, 'it-networking': 3 } },
      { label: 'Data & AI', w: { 'data-analytics': 3, 'ai-engineering': 3, python: 2 } },
      { label: 'Accounting & office', w: { 'e-accounting': 4, 'ms-office': 3, 'it-foundation': 1 } },
    ],
  },
  {
    id: 'level', text: 'Great choice! What best describes you right now?',
    options: [
      { label: 'School student / 12th pass', w: { 'it-foundation': 3, 'web-development': 1, 'graphic-designing': 1, 'ms-office': 1 } },
      { label: 'College student', w: { python: 2, 'web-development': 2, 'data-analytics': 2, 'digital-marketing': 1 } },
      { label: 'Graduate looking for a job', w: { 'software-development': 2, 'data-analytics': 2, 'soc-analyst': 2, 'digital-marketing': 2 } },
      { label: 'Working professional', w: { 'ai-engineering': 2, 'ethical-hacking': 2, 'e-accounting': 1, 'ms-office': 1 } },
    ],
  },
  {
    id: 'time', text: 'Last one — how much time can you give?',
    options: [
      { label: '2–3 months', w: { python: 2, 'graphic-designing': 2, 'e-accounting': 2, 'ms-office': 2 } },
      { label: '4–6 months', w: { 'web-development': 2, 'data-analytics': 2, 'digital-marketing': 2, 'ethical-hacking': 2, 'soc-analyst': 2, 'ai-engineering': 2, 'it-foundation': 2 } },
      { label: '9–12 months (full career track)', w: { 'software-development': 3, 'digital-design': 3, 'it-networking': 3 } },
    ],
  },
];

const recommend = (answers) => {
  const scores = {};
  answers.forEach((a) => Object.entries(a.w).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; }));
  return Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([slug]) => ({ slug, ...PROGRAMS[slug] }));
};

function BotMsg({ children }) {
  return (
    <div className="flex items-end gap-2 animate-fade-in">
      <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"><Bot className="w-4 h-4" /></div>
      <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]">{children}</div>
    </div>
  );
}

function UserMsg({ children }) {
  return <div className="flex justify-end animate-fade-in"><div className="bg-primary text-white text-sm rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]">{children}</div></div>;
}

function CallbackForm({ program }) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [state, setState] = useState('idle');
  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.phone.replace(/\D/g, '').length < 10) { setState('invalid'); return; }
    setState('loading');
    try {
      const res = await fetch(`${API}/api/quick-enquiry`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone.replace(/\D/g, ''), interest: program, source: 'program-finder' }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch { setState('error'); }
  };
  if (state === 'done') return <BotMsg><span className="inline-flex items-center gap-1 font-medium"><CheckCircle2 className="w-4 h-4 text-green-600" /> Thanks {form.name}! A counsellor will call you within 24 hours.</span></BotMsg>;
  return (
    <form onSubmit={submit} className="bg-white border border-gray-200 rounded-2xl p-3 space-y-2" data-testid="finder-callback-form">
      <p className="text-xs font-semibold text-gray-700">Get free guidance on this program</p>
      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-primary outline-none" data-testid="finder-name-input" />
      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" type="tel" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-primary outline-none" data-testid="finder-phone-input" />
      {state === 'invalid' && <p className="text-xs text-red-600" data-testid="finder-form-error">Please enter your name and a valid 10-digit phone.</p>}
      {state === 'error' && <p className="text-xs text-red-600" data-testid="finder-form-error">Could not submit. Please call +91 96467 27676.</p>}
      <button disabled={state === 'loading'} className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2" data-testid="finder-callback-submit">
        {state === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : null} Request Callback
      </button>
    </form>
  );
}

function Results({ recs }) {
  const [top, ...rest] = recs;
  return (
    <div className="space-y-3" data-testid="finder-results">
      <BotMsg>Your best match is ready!</BotMsg>
      <div className="rounded-2xl bg-[#0b1f6b] text-white p-4" data-testid={`finder-top-${top.slug}`}>
        <p className="text-xs text-blue-200 mb-1">Recommended for you</p>
        <p className="font-bold text-lg leading-snug">{top.title}</p>
        <p className="text-sm text-blue-100 mb-3">Duration: {top.duration}</p>
        <Link href={`/programs/${top.slug}`} className="block text-center bg-white text-[#0b1f6b] font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-50" data-testid="finder-view-top-btn">View Program</Link>
      </div>
      {rest.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Also a good fit:</p>
          {rest.map((r) => (
            <Link key={r.slug} href={`/programs/${r.slug}`} className="flex items-center justify-between text-sm border border-gray-200 rounded-xl px-3 py-2 hover:border-primary hover:text-primary transition-colors" data-testid={`finder-alt-${r.slug}`}>
              <span>{r.title}</span><ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      )}
      <CallbackForm program={top.title} />
    </div>
  );
}

function FinderPanel({ onClose }) {
  const [answers, setAnswers] = useState([]);
  const end = useRef(null);
  const done = answers.length === QUESTIONS.length;
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [answers]);
  return (
    <div className="fixed z-[70] bottom-24 md:bottom-28 left-4 md:left-6 w-[calc(100vw-2rem)] max-w-sm h-[min(560px,70vh)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in" role="dialog" aria-label="Program finder" data-testid="program-finder-panel">
      <div className="bg-[#0b1f6b] text-white px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center"><Bot className="w-5 h-5" /></div>
        <div className="flex-1">
          <p className="font-bold leading-tight">Program Finder</p>
          <p className="text-xs text-blue-200">Find your program in 3 quick taps</p>
        </div>
        {answers.length > 0 && <button onClick={() => setAnswers([])} aria-label="Restart" className="p-1.5 rounded-full hover:bg-white/10" data-testid="finder-restart-btn"><RotateCcw className="w-4 h-4" /></button>}
        <button onClick={onClose} aria-label="Close" className="p-1.5 rounded-full hover:bg-white/10" data-testid="finder-close-btn"><X className="w-5 h-5" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {QUESTIONS.slice(0, answers.length + 1).map((q, i) => (
          <div key={q.id} className="space-y-3">
            {i < QUESTIONS.length && <BotMsg>{q.text}</BotMsg>}
            {answers[i] ? <UserMsg>{answers[i].label}</UserMsg> : (
              <div className="flex flex-wrap gap-2 pl-9" data-testid={`finder-options-${q.id}`}>
                {q.options.map((o, j) => (
                  <button key={o.label} onClick={() => setAnswers([...answers, o])} className="text-sm border border-primary/40 text-primary rounded-full px-3 py-1.5 hover:bg-primary hover:text-white transition-colors" data-testid={`finder-option-${q.id}-${j}`}>
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {done && <Results recs={recommend(answers)} />}
        <div ref={end} />
      </div>
    </div>
  );
}

export default function ProgramFinder() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(true);
  const [heroCtaVisible, setHeroCtaVisible] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const cta = document.querySelector('[data-testid="hero-choose-program-btn"]');
    if (!cta) { setHeroCtaVisible(false); return; }
    const obs = new IntersectionObserver(([e]) => setHeroCtaVisible(e.isIntersecting));
    obs.observe(cta);
    return () => obs.disconnect();
  }, [pathname]);
  useEffect(() => {
    const h = () => { setOpen(true); setHint(false); };
    window.addEventListener('open-program-finder', h);
    return () => window.removeEventListener('open-program-finder', h);
  }, []);
  const hidden = heroCtaVisible && !open;
  return (
    <>
      {open && <FinderPanel onClose={() => setOpen(false)} />}
      <div className={`fixed z-50 bottom-20 md:bottom-6 left-4 md:left-6 items-end gap-3 transition-opacity duration-300 ${open ? 'hidden md:flex' : 'flex'} ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} data-testid="program-finder-launcher">
        <button onClick={() => { setOpen(!open); setHint(false); }} aria-label="Find your program" className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-[#0b1f6b] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform" data-testid="program-finder-bubble">
          {!open && <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />}
          {open ? <X className="w-6 h-6 relative" /> : <Bot className="w-7 h-7 md:w-8 md:h-8 relative" />}
        </button>
        {hint && !open && (
          <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-2xl rounded-bl-sm px-4 py-2.5 mb-2 animate-fade-in" data-testid="program-finder-hint">
            <button onClick={() => { setOpen(true); setHint(false); }} className="text-sm font-semibold text-gray-900" data-testid="program-finder-hint-btn">Click me to find your program</button>
            <button onClick={() => setHint(false)} aria-label="Dismiss" className="text-gray-400 hover:text-gray-600" data-testid="program-finder-hint-close"><X className="w-3.5 h-3.5" /></button>
          </div>
        )}
      </div>
    </>
  );
}
