import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight, Shield, CheckCircle2, Star,
  Target, ShieldAlert, MonitorDot, Cloud, Siren, FileCheck,
  Zap, Eye, Award, HeartHandshake, BarChart3,
} from 'lucide-react';
import PageStack from '../components/PageStack';
import HeroGlobeSection from '../components/HeroGlobeSection';
import { useIsMobile } from '../hooks/useIsMobile';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { testimonials } from '../data/testimonials';

/* ─── Horizontal Services Scroll ────────────────────────── */
const serviceIconMap = { Target, ShieldAlert, MonitorDot, Cloud, Siren, FileCheck };

function ProgressDots({ scrollYProgress, count }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on('change', v => setActive(Math.round(v * (count - 1))));
    return unsub;
  }, [scrollYProgress, count]);

  return (
    <div className="flex items-center gap-2 justify-center pb-8 shrink-0">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-accent' : 'w-1.5 bg-slate-300'}`} />
      ))}
    </div>
  );
}

function HorizServiceCard({ service }) {
  const Icon = serviceIconMap[service.icon] || Shield;
  return (
    <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
      <div className="h-1 w-full md:w-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-accent/60 via-accent to-accent/20 shrink-0" />
      <div className="flex flex-col md:flex-row flex-1 p-7 sm:p-10 gap-8">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4 leading-snug">{service.title}</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
          {service.stat && (
            <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
              <span className="font-syne font-extrabold text-2xl text-accent">{service.stat.value}</span>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{service.stat.label}</p>
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="font-syne font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link to="/contact" className="flex-1 text-center bg-accent text-white font-syne font-bold text-sm px-5 py-3 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25">
              Get a Quote
            </Link>
            <Link to="/services" className="flex-1 text-center border border-accent/40 text-accent font-syne font-semibold text-sm px-5 py-3 rounded-lg hover:bg-accent/5 transition-all duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const CARD_VW = 82;
const GAP_VW  = 3;
const STEP_VW = CARD_VW + GAP_VW;
const INIT_PL = (100 - CARD_VW) / 2;

function HorizontalServicesScroll() {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const endVw = (services.length - 1) * STEP_VW;
  const x = useTransform(scrollYProgress, [0, 1], [`${INIT_PL}vw`, `${INIT_PL - endVw}vw`]);

  if (isMobile) {
    return (
      <div className="py-16 px-4 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-syne font-bold text-3xl text-white mb-2">Full-Spectrum Cybersecurity</h2>
          </div>
          <div className="space-y-6">
            {services.map(svc => <div key={svc.id}><HorizServiceCard service={svc} /></div>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${services.length * 100}vh` }} className="relative bg-[#0D0D0D]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="pt-24 pb-6 text-center shrink-0">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-2">Full-Spectrum Cybersecurity</h2>
          <p className="text-slate-500 text-sm">Scroll to explore each service →</p>
        </div>

        <div className="flex-1 flex items-center overflow-visible min-h-0">
          <motion.div style={{ x, gap: `${GAP_VW}vw` }} className="flex will-change-transform">
            {services.map((svc) => (
              <div key={svc.id} style={{ width: `${CARD_VW}vw`, minWidth: `${CARD_VW}vw`, height: 'clamp(380px, 58vh, 520px)' }}>
                <HorizServiceCard service={svc} />
              </div>
            ))}
          </motion.div>
        </div>

        <ProgressDots scrollYProgress={scrollYProgress} count={services.length} />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200">
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} className="h-full bg-accent" />
        </div>
      </div>
    </div>
  );
}

/* ─── PANEL 3 — Why Alites + Industries ─────────────────── */
const whyCards = [
  { icon: Shield,        title: 'Proven Track Record', desc: '500+ clients secured, 99.9% retention rate, zero data breaches at client sites.' },
  { icon: Zap,           title: 'Rapid Response',      desc: 'On-site incident response within 3 hours. Crisis teams available 24/7/365.' },
  { icon: Award,         title: 'Certified Experts',   desc: 'OSCP, CEH, CISM, CISA, and cloud-certified specialists across every domain.' },
  { icon: Eye,           title: 'Full Transparency',   desc: 'Plain-language reports, no hidden findings, no upsell pressure. Just the truth.' },
  { icon: HeartHandshake,title: 'Genuine Partnership', desc: 'We work alongside your team — not just for the engagement, but long term.' },
  { icon: BarChart3,     title: 'Measurable Outcomes', desc: 'Every engagement delivers quantified risk reduction you can show your board.' },
];

function WhyPanel() {
  return (
    <section className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Why Alites</p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
              Security You Can Trust. Results You Can Measure.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyCards.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:shadow-md hover:border-accent/30 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-syne font-bold text-white text-sm mb-1">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Industries We Serve</p>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-6">Deep Expertise Across Every Sector</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {industries.map((ind) => (
                <div key={ind.id} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:shadow-md hover:border-accent/30 transition-all duration-200">
                  <div className="text-2xl mb-1.5">{ind.icon}</div>
                  <div className="font-syne font-semibold text-slate-800 text-xs">{ind.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white font-syne font-bold text-sm px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                Secure Your Organization <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PANEL 4 — Testimonials + CTA ──────────────────────── */
function SocialPanel() {
  return (
    <section className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(249,115,22,0.05) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Client Stories</p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">Trusted by Security Leaders Across India</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:shadow-md hover:border-accent/30 transition-all duration-200 flex flex-col shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed flex-1 mb-4 italic">"{t.quote}"</p>
              <div className="border-t border-slate-100 pt-3 flex items-center gap-3">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <div className="font-syne font-bold text-white text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
              {t.metric && (
                <div className="mt-3 bg-accent/5 border border-accent/20 rounded-lg px-3 py-2">
                  <span className="text-accent text-xs font-syne font-semibold">{t.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(0,128,255,0.04) 100%)',
            border: '1px solid rgba(249,115,22,0.15)',
          }}
        >
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-3">Ready to Harden Your Defenses?</h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto mb-6">
            Get a free security assessment from our certified experts. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-accent text-white font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 text-sm">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 border border-white/15 text-slate-300 font-syne font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm">
              Read Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home page ──────────────────────────────────────────── */
export default function Home() {
  const bottomPanels = [
    { bg: '#111111', content: <WhyPanel /> },
    { bg: '#0D0D0D', content: <SocialPanel /> },
  ];

  return (
    <div className="pt-16">
      <HeroGlobeSection />
      <HorizontalServicesScroll />
      <PageStack panels={bottomPanels} />
    </div>
  );
}
