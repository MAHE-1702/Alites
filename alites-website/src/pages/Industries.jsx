import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { industries } from '../data/industries';

const challenges = [
  {
    title: 'Evolving Threat Landscape',
    description:
      'Cyber threats are growing in sophistication and frequency. Each industry faces unique attack vectors — from nation-state APTs targeting critical infrastructure to ransomware groups targeting healthcare.',
  },
  {
    title: 'Regulatory Complexity',
    description:
      'Organizations must navigate an ever-growing web of regulations — HIPAA, PCI DSS, GDPR, RBI guidelines, and sector-specific mandates — each with distinct technical and procedural requirements.',
  },
  {
    title: 'Supply Chain Risk',
    description:
      'Modern organizations depend on vast ecosystems of vendors and partners. A single compromised supplier can expose your entire operation to data breaches, operational disruption, and reputational damage.',
  },
];

export default function Industries() {
  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(0,229,255,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
          >
            <Globe className="w-3.5 h-3.5" />
            Sector-Specific Security
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every industry faces its own unique cybersecurity challenges. Our domain experts deliver tailored solutions that understand your regulatory environment, threat landscape, and operational constraints.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl shrink-0 group-hover:bg-accent/20 transition-colors">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Challenges Section */}
      <SectionWrapper className="py-20 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Common Challenges
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              Industry-Specific Cybersecurity Challenges
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
              Regardless of sector, organizations face a set of universal challenges that our tailored programs are designed to address head-on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover"
              >
                <div className="font-syne font-extrabold text-5xl text-accent/15 mb-4 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-3">{challenge.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
            Tailored Security for Your Industry
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Our industry specialists will craft a security program that aligns with your sector's regulations, risks, and operational realities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Discuss Your Industry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
