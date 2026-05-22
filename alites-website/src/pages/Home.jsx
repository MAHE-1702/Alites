import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Clock,
  Globe,
  Layers,
  Zap,
  DollarSign,
  BadgeCheck,
} from 'lucide-react';

const PARTICLES = [
  { id: 0, left: '12%', top: '22%', size: 2, dur: 5.2, delay: 0 },
  { id: 1, left: '78%', top: '15%', size: 3, dur: 6.8, delay: 1.1 },
  { id: 2, left: '55%', top: '68%', size: 2, dur: 4.5, delay: 0.6 },
  { id: 3, left: '88%', top: '52%', size: 1.5, dur: 7.1, delay: 2.0 },
  { id: 4, left: '32%', top: '80%', size: 2.5, dur: 5.9, delay: 0.3 },
  { id: 5, left: '65%', top: '35%', size: 1.5, dur: 6.3, delay: 1.5 },
  { id: 6, left: '8%', top: '60%', size: 2, dur: 4.9, delay: 0.9 },
  { id: 7, left: '45%', top: '10%', size: 1, dur: 8.0, delay: 2.4 },
  { id: 8, left: '90%', top: '80%', size: 2, dur: 5.5, delay: 0.4 },
  { id: 9, left: '20%', top: '45%', size: 1.5, dur: 6.7, delay: 1.8 },
];
import SectionWrapper from '../components/SectionWrapper';
import StatBar from '../components/StatBar';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { testimonials } from '../data/testimonials';

const whyFeatures = [
  {
    num: '01',
    icon: Users,
    title: 'Expert Team',
    description:
      'Our team of 50+ certified security professionals brings decades of combined experience across every domain of cybersecurity.',
  },
  {
    num: '02',
    icon: Clock,
    title: '24/7 Monitoring',
    description:
      'Round-the-clock SOC operations ensure threats are detected and neutralized before they can impact your business.',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Global Compliance',
    description:
      'We align all our services with international standards including ISO 27001, PCI DSS, HIPAA, GDPR, and SOC 2.',
  },
  {
    num: '04',
    icon: Layers,
    title: 'Scalable Solutions',
    description:
      'From SMEs to large enterprises, our security solutions scale with your growth without compromising coverage.',
  },
  {
    num: '05',
    icon: Zap,
    title: 'Rapid Response',
    description:
      'Our incident response team deploys within hours of an alert, minimizing damage and reducing recovery time.',
  },
  {
    num: '06',
    icon: DollarSign,
    title: 'Cost Effective',
    description:
      'Enterprise security at competitive pricing — we make world-class protection accessible without hidden costs.',
  },
];

const certifications = [
  'ISO 27001',
  'ISO 9001',
  'CEH',
  'OSCP',
  'CISSP',
  'PCI DSS QSA',
];

export default function Home() {
  const reduced = useReducedMotion();

  const wordVariants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 28, skewX: -4 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      skewX: 0,
      transition: { duration: reduced ? 0.15 : 0.55, delay: reduced ? 0 : 0.1 + i * 0.16, ease: 'easeOut' },
    }),
  };

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Floating particles */}
        {!reduced && PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent/40 pointer-events-none"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}

        {/* Cyan glow orb */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,229,255,0.03) 40%, transparent 70%)',
          }}
          animate={reduced ? {} : { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Second glow */}
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,128,255,0.06) 0%, transparent 70%)',
          }}
          animate={reduced ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Trusted by 500+ Organizations Worldwide
          </motion.div>

          {/* Main headline — word-by-word stagger */}
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight">
            {['Defend.', 'Detect.', 'Respond.'].map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block mr-[0.25em] ${i === 1 ? 'text-gradient' : ''}`}
              >
                {word}
                {i === 1 && <br />}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Your Shield in the Digital World. Alites delivers enterprise-grade cybersecurity — penetration testing, 24/7 SOC, cloud security, and compliance — to protect what matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 text-base"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-syne font-semibold px-8 py-4 rounded-lg hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-200 text-base"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {['ISO 27001 Certified', 'OSCP Experts', 'PCI DSS QSA', '24/7 SOC'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-slate-500 text-sm">
                <BadgeCheck className="w-4 h-4 text-accent/60" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* 2. STATS BAR */}
      <SectionWrapper className="py-16 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatBar />
        </div>
      </SectionWrapper>

      {/* 3. SERVICES GRID */}
      <SectionWrapper id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              Our Security Services
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Comprehensive cybersecurity services designed to protect your business at every layer — from code to cloud.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                showDetails={false}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-accent/40 text-accent font-syne font-semibold px-6 py-3 rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. WHY ALITES */}
      <SectionWrapper id="why-alites" className="py-20 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              The Alites Advantage
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Six reasons thousands of organizations trust Alites to protect their most critical assets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map(({ num, icon: Icon, title, description }) => (
              <div
                key={num}
                className="group relative bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover"
              >
                <div className="absolute top-4 right-4 font-syne font-extrabold text-4xl text-accent/10 group-hover:text-accent/20 transition-colors select-none">
                  {num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-syne font-bold text-white text-base mb-2 group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. INDUSTRIES */}
      <SectionWrapper id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Sectors We Protect
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              Industries We Serve
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Deep domain expertise across eight critical sectors means our security solutions fit your industry's unique challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-5 card-hover flex flex-col items-center text-center gap-3"
              >
                <div className="text-4xl">{industry.icon}</div>
                <h3 className="font-syne font-semibold text-white text-sm group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 border border-accent/40 text-accent font-syne font-semibold px-6 py-3 rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. CERTIFICATIONS */}
      <SectionWrapper id="certifications" className="py-16 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Accreditations
            </p>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white">
              Certifications & Standards
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="group flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-6 py-3 hover:border-accent/60 hover:bg-accent/10 transition-all duration-200 cursor-default"
              >
                <BadgeCheck className="w-4 h-4 text-accent" />
                <span className="font-syne font-semibold text-white text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. TESTIMONIALS */}
      <SectionWrapper id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Client Stories
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex flex-col gap-5"
              >
                {/* Quote mark */}
                <div className="font-syne text-5xl text-accent/20 leading-none select-none">"</div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 -mt-4">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-syne font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. CTA BANNER */}
      <SectionWrapper id="cta" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden p-10 sm:p-16 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(0,128,255,0.08) 50%, rgba(0,229,255,0.05) 100%)',
              border: '1px solid rgba(0,229,255,0.25)',
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Get a complimentary security assessment from our experts. No commitment required — just actionable insights to improve your security posture.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 text-base"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-syne font-semibold px-8 py-4 rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-200 text-base"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
