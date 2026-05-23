// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Globe } from 'lucide-react';
// import SectionWrapper from '../components/SectionWrapper';
// import { industries } from '../data/industries';

// const challenges = [
//   {
//     title: 'Evolving Threat Landscape',
//     description:
//       'Cyber threats are growing in sophistication and frequency. Each industry faces unique attack vectors — from nation-state APTs targeting critical infrastructure to ransomware groups targeting healthcare.',
//   },
//   {
//     title: 'Regulatory Complexity',
//     description:
//       'Organizations must navigate an ever-growing web of regulations — HIPAA, PCI DSS, GDPR, RBI guidelines, and sector-specific mandates — each with distinct technical and procedural requirements.',
//   },
//   {
//     title: 'Supply Chain Risk',
//     description:
//       'Modern organizations depend on vast ecosystems of vendors and partners. A single compromised supplier can expose your entire operation to data breaches, operational disruption, and reputational damage.',
//   },
// ];

// export default function Industries() {
//   return (
//     <div className="pt-16 overflow-x-hidden">
//       {/* Page Hero */}
//       <section className="relative py-20 sm:py-28 overflow-hidden">
//         <div className="absolute inset-0 grid-bg opacity-40" />
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at top, rgba(0,229,255,0.1) 0%, transparent 70%)',
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
//           >
//             <Globe className="w-3.5 h-3.5" />
//             Sector-Specific Security
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
//           >
//             Industries We <span className="text-gradient">Serve</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
//           >
//             Every industry faces its own unique cybersecurity challenges. Our domain experts deliver tailored solutions that understand your regulatory environment, threat landscape, and operational constraints.
//           </motion.p>
//         </div>
//       </section>

//       {/* Industries Grid */}
//       <SectionWrapper className="pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
//             {industries.map((industry) => (
//               <div
//                 key={industry.id}
//                 className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex gap-5"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl shrink-0 group-hover:bg-accent/20 transition-colors">
//                   {industry.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-syne font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">
//                     {industry.name}
//                   </h3>
//                   <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* Challenges Section */}
//       <SectionWrapper className="py-20 bg-white/[0.015] border-y border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
//               Common Challenges
//             </p>
//             <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
//               Industry-Specific Cybersecurity Challenges
//             </h2>
//             <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
//               Regardless of sector, organizations face a set of universal challenges that our tailored programs are designed to address head-on.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {challenges.map((challenge, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover"
//               >
//                 <div className="font-syne font-extrabold text-5xl text-accent/15 mb-4 leading-none select-none">
//                   {String(idx + 1).padStart(2, '0')}
//                 </div>
//                 <h3 className="font-syne font-bold text-white text-lg mb-3">{challenge.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed">{challenge.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* CTA */}
//       <SectionWrapper className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
//             Tailored Security for Your Industry
//           </h2>
//           <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
//             Our industry specialists will craft a security program that aligns with your sector's regulations, risks, and operational realities.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-accent text-primary font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
//           >
//             Discuss Your Industry
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </SectionWrapper>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldAlert } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { industries } from '../data/industries';

const challenges = [
  {
    title: 'Evolving Threat Actors',
    description:
      'Nation-state groups, ransomware syndicates, and opportunistic cybercriminals all use different tactics — but they share a common goal: your data and your infrastructure. Industry-specific knowledge lets us anticipate the playbooks used against your sector before they\'re deployed against you.',
  },
  {
    title: 'Regulatory Complexity',
    description:
      'India\'s regulatory landscape is changing faster than ever — CERT-In\'s 6-hour breach reporting mandate, the new DPDP Act, RBI\'s cybersecurity directives, and global frameworks like HIPAA, GDPR, and PCI DSS. We translate compliance obligations into practical security controls that pass audits without paralysing operations.',
  },
  {
    title: 'Supply Chain Exposure',
    description:
      'Your vendors, partners, and third-party software are as much a part of your attack surface as your own infrastructure. A single compromised supplier can expose your entire organisation. We assess supply chain risk as part of every engagement — because your security is only as strong as your weakest link.',
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
          style={{ background: 'radial-gradient(ellipse at top, rgba(0,229,255,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
          >
            <Globe className="w-3.5 h-3.5" />
            Sector-Specific Security Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            We Know Your Industry's <span className="text-gradient">Threats</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Generic cybersecurity doesn't protect specific industries. Our domain experts understand your regulatory environment, attack vectors, and operational constraints — and build security programs around them.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid — expanded with threats and frameworks */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl shrink-0 group-hover:bg-accent/20 transition-colors">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-white text-lg mb-1 group-hover:text-accent transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
                  <div>
                    <p className="text-slate-600 text-xs uppercase tracking-wider mb-2">Key Threats</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.threats.map((threat) => (
                        <span key={threat} className="text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs uppercase tracking-wider mb-2">Frameworks</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.frameworks.map((fw) => (
                        <span key={fw} className="text-xs bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded-full">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
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
              Universal Challenges
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              The Security Problems Every Industry Faces
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
              Regardless of sector, three fundamental challenges underpin every organisation's cybersecurity risk — and every Alites engagement is designed to address them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover">
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
          <ShieldAlert className="w-10 h-10 text-accent mx-auto mb-5" />
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
            Tailored Security for Your Industry
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Our industry specialists will build a security program aligned with your sector's specific risks, regulations, and operational requirements — not a template built for someone else.
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