import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import ServicesStackScroll from '../components/Servicesstackscroll';

const methodology = [
  {
    step: '01',
    title: 'Define Objectives',
    description: 'We start by understanding your environment, risk appetite, compliance obligations, and specific security goals — so the engagement delivers answers that matter to your business.',
  },
  {
    step: '02',
    title: 'Assess & Test',
    description: 'Our certified experts execute the engagement using proven methodologies (OWASP, PTES, NIST). Every test is tailored — not templated — to reflect the actual threats your organisation faces.',
  },
  {
    step: '03',
    title: 'Report & Prioritise',
    description: "You receive a full technical report plus an executive summary with findings ranked by business impact, not just CVSS score. No jargon, no fluff — just actionable intelligence.",
  },
  {
    step: '04',
    title: 'Remediate & Retest',
    description: "We don't disappear after delivery. Our team supports your remediation effort and retests critical findings — confirming that fixes work before closing the engagement.",
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, var(--color-accent-light) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
          >
            <Shield className="w-3.5 h-3.5" />
            End-to-End Cybersecurity Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-base mb-6"
          >
            Put Your Defenses <span className="text-gradient">to the Test</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-sub text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From attack simulation to round-the-clock monitoring, our services are built to find your weaknesses before attackers do — and keep your organisation protected long after the engagement ends.
          </motion.p>
        </div>
      </section>

      {/* Services Grid with Stat Badges */}
<ServicesStackScroll />

      {/* Methodology Section */}
      <SectionWrapper className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-base">
              A Goal-Based Methodology, Not a Checkbox Exercise
            </h2>
            <p className="mt-4 text-text-sub max-w-2xl mx-auto text-base">
              Every engagement is structured around your specific objectives — not a generic template. We test your systems in the full context of your business environment to deliver outcomes that actually matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map(({ step, title, description }) => (
              <div key={step} className="group relative bg-secondary border border-border rounded-xl p-6 card-hover shadow-card">
                <div className="font-syne font-extrabold text-5xl text-accent-muted mb-4 leading-none select-none group-hover:text-accent transition-colors">
                  {step}
                </div>
                <h3 className="font-syne font-bold text-text-base text-base mb-3 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-text-sub text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-secondary border border-border rounded-xl p-6 shadow-card">
            <h3 className="font-syne font-semibold text-text-base text-sm mb-4">What's included in every engagement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Upfront goal-setting and scoping session',
                'Tailored objectives for your environment',
                'Detailed findings with remediation recommendations',
                'Free retest of critical and high-severity items within 90 days',
                'Executive summary for board or leadership',
                'Post-engagement debrief with your technical team',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-sub text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-bg-secondary) 100%)',
              border: '1px solid var(--color-border)',
            }}
          >
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-text-base mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-text-sub text-base max-w-xl mx-auto mb-8">
              Most organisations don't know their biggest security gap until they look. Our consultants will assess your environment and tell you exactly where to focus — free, with no obligation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent-bright transition-all duration-200 hover:shadow-lg hover:shadow-accent-muted"
            >
              Talk to a Security Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}






      // <SectionWrapper className="pb-20">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      //       {services.map((service) => (
      //         <div key={service.id} className="flex flex-col gap-0">
      //           <ServiceCard
      //             icon={service.icon}
      //             title={service.title}
      //             description={service.description}
      //             features={service.features}
      //             showDetails={true}
      //           />
      //           {service.stat && (
      //             <div className="bg-accent/5 border border-accent/20 border-t-0 rounded-b-xl px-5 py-4 flex items-start gap-3">
      //               <span className="font-syne font-extrabold text-accent text-lg shrink-0 leading-tight">{service.stat.value}</span>
      //               <p className="text-slate-500 text-xs leading-relaxed">{service.stat.label}</p>
      //             </div>
      //           )}
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </SectionWrapper>