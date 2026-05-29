import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const caseStudies = [
  {
    id: 1,
    industry: 'BFSI',
    industryColor: 'text-warning border-warning bg-warning-bg',
    icon: '🏦',
    title: 'Stopping a Targeted Attack Before It Reached the SWIFT Network',
    client: 'A leading regional bank with 2.4 million customers',
    challenge:
      'A sophisticated spear-phishing campaign had compromised three corporate banking accounts before the bank detected unusual activity. The attackers were systematically escalating privileges and pivoting toward SWIFT transaction systems — which, if accessed, could have enabled fraudulent international transfers worth crores. The bank had 72 hours before the next transaction window opened.',
    solution:
      'Alites deployed its incident response team within three hours of the initial alert. We conducted rapid threat hunting across the environment, mapped the full scope of compromise, and isolated affected systems before any SWIFT access was achieved. Simultaneously, we deployed deception technology to monitor attacker movement while we built our containment perimeter. Post-incident, we implemented DMARC, DKIM, phishing-resistant MFA, and a 14-control security hardening programme.',
    results: [
      'Breach fully contained within 6 hours — SWIFT systems never accessed',
      'Three compromised accounts remediated with zero confirmed data exfiltration',
      '14 security controls implemented, reducing phishing risk by 94%',
      'Staff phishing click rate dropped from 42% to 3% in 90 days via training',
    ],
    duration: '6 weeks total',
    team: 'IR + SOC + Red Team',
  },
  {
    id: 2,
    industry: 'Healthcare',
    industryColor: 'text-success border-success bg-success-bg',
    icon: '🏥',
    title: 'Recovering from Ransomware in 36 Hours — Without Paying',
    client: 'A multi-specialty hospital chain with 8 facilities across South India',
    challenge:
      'Ransomware encrypted critical patient data across six of eight hospital facilities, crippling EHR systems, pharmacy management, and radiology. With ₹18 crore in ransom demanded and patient care at immediate risk, the hospital needed to restore clinical operations — without paying. Every hour offline meant patients being turned away and manual processes straining already overstretched staff.',
    solution:
      'Alites forensics specialists were on-site within four hours. We identified the attack vector — an unpatched VPN appliance exploited three weeks prior — isolated active malware, and began parallel recovery using clean, air-gapped backups. Working in shifts over 36 continuous hours, we restored clinical systems in priority order: A&E first, then ICU, then general wards. Post-recovery, we designed and implemented a comprehensive hardening programme including network segmentation and immutable backup architecture.',
    results: [
      'Critical patient care systems restored in 36 hours — zero ransom paid',
      '99.2% of encrypted data recovered from clean backups',
      'Network segmentation now limits any future breach blast radius by 80%',
      'HIPAA compliance certification achieved 4 months post-incident',
    ],
    duration: '12 weeks (IR + hardening)',
    team: 'IR + Forensics + Cloud Security',
  },
  {
    id: 3,
    industry: 'Government',
    industryColor: 'text-accent border-accent bg-accent-muted',
    icon: '🏛️',
    title: 'Zero Non-Conformities: National Framework Compliance 3 Weeks Ahead of Deadline',
    client: 'A state government department managing services for 8 million residents',
    challenge:
      'A national cybersecurity audit found 47 high-priority control gaps — with a six-month deadline to achieve full compliance. The agency managed welfare, identity, and financial services for millions of citizens, but had limited internal IT security resources and no existing ISMS framework. The cost of failing the final audit: loss of federal funding and mandatory operational shutdown pending remediation.',
    solution:
      'Alites conducted a comprehensive gap assessment, built a phased remediation roadmap, and provided hands-on implementation support for all 47 control gaps. Key deliverables included a full ISMS implementation, privileged access management, data classification framework, and a security awareness training programme covering all 200 IT staff. We stood beside the team through the final audit, providing real-time support to auditors.',
    results: [
      'Full framework compliance achieved 3 weeks ahead of the 6-month deadline',
      '47 critical control gaps closed — zero findings in the final audit',
      'Mean time to detect security events dropped from 72 hours to under 30 minutes',
      'IT staff security awareness score improved from 54% to 91%',
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
          style={{ background: 'radial-gradient(ellipse at top, var(--color-accent-light) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Real Engagements. Measurable Outcomes.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-base mb-6"
          >
            Results That <span className="text-gradient">Speak for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-sub text-lg max-w-2xl mx-auto leading-relaxed"
          >
            These aren't hypothetical scenarios. They're real engagements with real organisations facing real threats — and the specific, measurable outcomes we delivered together.
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
              className="bg-surface border border-border rounded-2xl overflow-hidden card-hover shadow-card"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8 border-b border-white/5">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span className={`inline-flex items-center gap-1.5 border text-xs font-medium px-3 py-1 rounded-full font-syne ${cs.industryColor}`}>
                    {cs.icon} {cs.industry}
                  </span>
                  <div className="flex gap-3 ml-auto">
                    <span className="text-xs text-text-muted bg-secondary border border-border px-3 py-1 rounded-full">
                      {cs.duration}
                    </span>
                    <span className="text-xs text-text-muted bg-secondary border border-border px-3 py-1 rounded-full">
                      {cs.team}
                    </span>
                  </div>
                </div>
                <h2 className="font-syne font-bold text-text-base text-xl sm:text-2xl mb-2">
                  {cs.title}
                </h2>
                <p className="text-accent text-sm font-medium">{cs.client}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-syne font-semibold text-text-base text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-danger/60" />
                    The Situation
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="font-syne font-semibold text-text-base text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-accent/60" />
                    What We Did
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="px-6 sm:px-8 pb-8">
                <h3 className="font-syne font-semibold text-text-base text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-success/60" />
                  Outcomes Delivered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-secondary border border-border-subtle rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span className="text-text-sub text-sm">{result}</span>
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
              background: 'linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-bg-secondary) 100%)',
              border: '1px solid var(--color-border)',
            }}
          >
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-text-base mb-4">
              Your Organisation Could Be Our Next Success Story
            </h2>
            <p className="text-text-sub text-base max-w-xl mx-auto mb-8">
              Whether you're dealing with an active incident or want to find your vulnerabilities before attackers do, our team is ready. The first conversation is free.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent-bright transition-all duration-200 hover:shadow-lg hover:shadow-accent-muted"
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
