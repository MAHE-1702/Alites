import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const timelineEvents = [
  {
    year: '2012',
    title: 'Founded',
    description:
      'Rajesh Kumar establishes Alites Cybersecurity Solutions in Coimbatore with a team of 5 security professionals and a mission to democratize enterprise security.',
  },
  {
    year: '2014',
    title: 'First Enterprise Client',
    description:
      'Alites secures its first major banking client, delivering a comprehensive penetration testing engagement that uncovers 23 critical vulnerabilities in core banking infrastructure.',
  },
  {
    year: '2016',
    title: 'ISO 27001 Certified',
    description:
      'Alites achieves ISO 27001:2013 certification, demonstrating its commitment to information security management and establishing credibility with enterprise clients.',
  },
  {
    year: '2018',
    title: 'SOC Launch',
    description:
      'The Alites Security Operations Centre goes live, providing 24/7 monitoring and threat detection services to an initial cohort of 30 enterprise clients.',
  },
  {
    year: '2020',
    title: '50+ Team',
    description:
      'The team grows to over 50 certified security professionals, including specialists in cloud security, OT/ICS, and digital forensics.',
  },
  {
    year: '2022',
    title: '500 Clients Milestone',
    description:
      'Alites celebrates serving 500 organizations, with clients across banking, healthcare, government, and technology sectors throughout South Asia.',
  },
  {
    year: '2024',
    title: 'Cloud Security Expansion',
    description:
      'Alites launches a dedicated Cloud Security practice, offering CSPM, cloud-native pen testing, and DevSecOps integration services for AWS, Azure, and GCP.',
  },
  {
    year: 'Present',
    title: 'Growing Strong',
    description:
      'With a 99.9% client retention rate, Alites continues to expand its capabilities in AI-powered threat detection, zero-trust architecture, and managed security services.',
  },
];

const partners = [
  'Microsoft Security',
  'Palo Alto Networks',
  'CrowdStrike',
  'Tenable',
  'IBM Security',
];

export default function About() {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            About <span className="text-gradient">Alites</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Over a decade of defending organizations against cyber threats. Our story is one of relentless dedication to making the digital world safer.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                Built on a Foundation of Trust and Expertise
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Alites Cybersecurity Solutions was founded in 2012 in Coimbatore, Tamil Nadu, with a singular vision: to make enterprise-grade cybersecurity accessible to organizations of all sizes. Our founder, Rajesh Kumar, recognized that small and mid-sized businesses were just as vulnerable as large enterprises but lacked access to the specialized expertise they needed.
                </p>
                <p>
                  Starting with a team of five passionate security professionals, we took on our first clients in the BFSI sector, delivering penetration testing services that uncovered critical vulnerabilities and helped our clients strengthen their defenses. Word spread quickly — not because we sold hard, but because our work delivered measurable results.
                </p>
                <p>
                  Today, Alites is a 50+ person organization serving over 500 clients across India and beyond. We've built a reputation for technical excellence, ethical conduct, and genuine partnership with our clients. We don't just deliver reports — we work alongside your team to fix problems and build lasting security maturity.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Certified by ISO 27001',
                  'PCI DSS Qualified SA',
                  'OSCP Certified Testers',
                  '100% Client Confidentiality',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '500+', sub: 'Clients Served' },
                { label: '12+', sub: 'Years in Business' },
                { label: '50+', sub: 'Security Experts' },
                { label: '99.9%', sub: 'Uptime SLA' },
              ].map(({ label, sub }) => (
                <div
                  key={sub}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center card-hover"
                >
                  <div className="font-syne font-extrabold text-3xl text-accent mb-1">{label}</div>
                  <div className="text-slate-400 text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-20 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white/[0.03] border border-accent/20 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-syne font-bold text-white text-2xl mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver world-class cybersecurity services that empower organizations to operate with confidence in an increasingly hostile digital environment. We are committed to providing honest assessments, practical solutions, and enduring partnerships that measurably improve our clients' security posture.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-syne font-bold text-white text-2xl mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be South Asia's most trusted cybersecurity firm — recognized not just for technical excellence, but for the depth of trust we build with every client we serve. We envision a digital ecosystem where every organization, regardless of size, has access to the security expertise it needs to thrive safely.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              12+ Years of Growth
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

            <div className="space-y-10">
              {timelineEvents.map((event, idx) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-primary shadow-lg shadow-accent/30" />

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 bg-white/[0.03] border border-white/10 rounded-xl p-5 card-hover ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="font-syne font-extrabold text-accent text-lg mb-1">
                      {event.year}
                    </div>
                    <h3 className="font-syne font-bold text-white text-base mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Technology Partners */}
      <SectionWrapper className="py-16 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Technology Partners
            </p>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white">
              We Work with Industry Leaders
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="border border-white/10 bg-white/[0.03] rounded-xl px-8 py-5 flex items-center justify-center card-hover min-w-[160px]"
              >
                <span className="font-syne font-semibold text-slate-400 text-sm text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
            Ready to Join Our Growing Client Family?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Experience the Alites difference — where technical excellence meets genuine partnership.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
