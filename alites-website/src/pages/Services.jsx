import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
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
            <Shield className="w-3.5 h-3.5" />
            Comprehensive Security Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From penetration testing to 24/7 SOC monitoring, our full spectrum of cybersecurity services keeps your organization protected at every layer.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                showDetails={true}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(0,128,255,0.05) 100%)',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Our security consultants will assess your environment and recommend the right mix of services for your threat landscape and budget.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
