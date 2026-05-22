import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const caseStudies = [
  {
    id: 1,
    industry: 'BFSI',
    industryColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    icon: '🏦',
    title: 'Stopping a Targeted Phishing Campaign at a Regional Bank',
    client: 'A leading regional bank with 2.4 million customers',
    challenge:
      'The bank faced a sophisticated spear-phishing campaign targeting its corporate banking team. Attackers had crafted highly convincing emails mimicking internal HR communications, successfully compromising 3 employee accounts before the bank engaged Alites. The threat actors were pivoting through the network seeking access to SWIFT transaction systems.',
    solution:
      'Alites deployed its incident response team within 3 hours of initial contact. We conducted rapid threat hunting across the environment, identified the full scope of compromise, and implemented emergency containment measures. Simultaneously, we deployed deception technology to track attacker movement and gather intelligence. Post-containment, we performed a comprehensive email security review and implemented DMARC, DKIM, and advanced phishing-resistant MFA across all systems.',
    results: [
      'Contained the breach within 6 hours, preventing access to SWIFT systems',
      'Identified and remediated 3 compromised accounts with zero data exfiltration',
      'Implemented 14 security controls reducing phishing risk by 94%',
      'Staff phishing simulation scores improved from 42% click rate to 3% in 90 days',
    ],
    duration: '6 weeks',
    team: 'IR + SOC + Red Team',
  },
  {
    id: 2,
    industry: 'Healthcare',
    industryColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    icon: '🏥',
    title: 'Ransomware Recovery and Hardening for Multi-Site Hospital Network',
    client: 'A multi-specialty hospital chain operating 8 facilities',
    challenge:
      'A ransomware attack encrypted critical patient data across 6 of 8 hospital facilities, crippling electronic health record systems, pharmacy management, and radiology. The attackers demanded $2.4 million in cryptocurrency. With patient care at risk and regulatory obligations under threat, the hospital needed immediate expert assistance to recover operations and prevent further spread.',
    solution:
      'Alites\'s incident response team deployed forensics specialists on-site within 4 hours. We isolated affected systems, identified the attack vector (unpatched VPN appliance), and began parallel recovery operations using clean backups. Our team worked around the clock for 36 hours to restore critical clinical systems in priority order. Post-recovery, we designed and implemented a comprehensive hardening program including network segmentation, privileged access management, and an immutable backup architecture.',
    results: [
      'Restored critical patient care systems within 36 hours without paying the ransom',
      'Recovered 99.2% of encrypted data from clean backups with minimal data loss',
      'Implemented network segmentation reducing blast radius of future incidents by 80%',
      'Achieved HIPAA compliance certification 4 months after the incident',
    ],
    duration: '12 weeks',
    team: 'IR + Forensics + Cloud Security',
  },
  {
    id: 3,
    industry: 'Government',
    industryColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    icon: '🏛️',
    title: 'Comprehensive Compliance Overhaul for a State Government Agency',
    client: 'A state government department managing citizen services for 8 million residents',
    challenge:
      'A state government agency managing welfare, identity, and financial services for millions of citizens was found to have critical gaps in its cybersecurity posture during a national audit. The agency faced a 6-month deadline to achieve full compliance with the national cybersecurity framework and implement controls to protect citizen data. Internal IT resources were insufficient to manage the scope of remediation required.',
    solution:
      'Alites performed a comprehensive gap assessment against the national cybersecurity framework, identifying 47 high-priority control gaps. We developed a phased remediation roadmap, provided hands-on implementation support for technical controls, and trained the agency\'s 200-person IT team. Key deliverables included a full ISMS implementation, privileged access management, data classification framework, security awareness training, and a continuous monitoring program with monthly reporting to the agency\'s security committee.',
    results: [
      'Achieved full framework compliance 3 weeks ahead of the 6-month deadline',
      'Closed 47 critical control gaps with zero audit findings in the final assessment',
      'Reduced mean time to detect security events from 72 hours to under 30 minutes',
      '200 IT staff trained and security awareness score increased from 54% to 91%',
    ],
    duration: '20 weeks',
    team: 'Compliance + SOC + Training',
  },
];

export default function CaseStudies() {
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
            <BookOpen className="w-3.5 h-3.5" />
            Real Results, Real Clients
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Case <span className="text-gradient">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stories from the field — how Alites has helped organizations detect, respond to, and recover from real-world cybersecurity incidents.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <SectionWrapper className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden card-hover"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8 border-b border-white/5">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 border text-xs font-medium px-3 py-1 rounded-full font-syne ${cs.industryColor}`}
                  >
                    {cs.icon} {cs.industry}
                  </span>
                  <div className="flex gap-3 ml-auto">
                    <span className="text-xs text-slate-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                      Duration: {cs.duration}
                    </span>
                    <span className="text-xs text-slate-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                      Team: {cs.team}
                    </span>
                  </div>
                </div>
                <h2 className="font-syne font-bold text-white text-xl sm:text-2xl mb-2">
                  {cs.title}
                </h2>
                <p className="text-accent text-sm font-medium">{cs.client}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenge */}
                <div>
                  <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-red-400/60" />
                    The Challenge
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-accent/60" />
                    Our Solution
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="px-6 sm:px-8 pb-8">
                <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-green-400/60" />
                  Results Achieved
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-2xl p-10 sm:p-14"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(0,128,255,0.05) 100%)',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
              Could Your Organization Be Our Next Success Story?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Whether you're dealing with an active incident or want to strengthen your defenses proactively, our team is ready to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Start Your Engagement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
