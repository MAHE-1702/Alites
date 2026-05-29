// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users } from 'lucide-react';
// import SectionWrapper from '../components/SectionWrapper';
// import TeamCard from '../components/TeamCard';
// import { team } from '../data/team';

// export default function Team() {
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
//             <Users className="w-3.5 h-3.5" />
//             50+ Security Professionals
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
//           >
//             Meet Our <span className="text-gradient">Team</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
//           >
//             Behind every successful engagement is a team of passionate, certified cybersecurity professionals who live and breathe security. Meet the people who protect your business.
//           </motion.p>
//         </div>
//       </section>

//       {/* Intro Paragraph */}
//       <SectionWrapper className="pb-8">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
//             <p className="text-slate-300 leading-relaxed text-base">
//               Our leadership team combines decades of experience in offensive security, threat intelligence, compliance, and enterprise security architecture. Every member of the Alites team holds multiple industry certifications — including OSCP, CEH, CISSP, CISA, and cloud security credentials — and participates in ongoing research and professional development to stay ahead of the evolving threat landscape. We believe our team's diversity of backgrounds and expertise is our greatest competitive advantage.
//             </p>
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* Team Grid */}
//       <SectionWrapper className="py-12 pb-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {team.map((member) => (
//               <TeamCard
//                 key={member.id}
//                 emoji={member.emoji}
//                 name={member.name}
//                 role={member.role}
//                 bio={member.bio}
//                 linkedin={member.linkedin}
//               />
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* Certifications Strip */}
//       <SectionWrapper className="py-16 bg-white/[0.015] border-y border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
//             Our Team's Credentials
//           </p>
//           <h2 className="font-syne font-bold text-2xl text-white mb-8">
//             Collectively Holding 100+ Certifications
//           </h2>
//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               'OSCP', 'CEH', 'CISSP', 'CISA', 'CRISC',
//               'AWS Security', 'Azure Security', 'GCIH', 'GPEN', 'ISO 27001 LA',
//               'PCI DSS QSA', 'CRTE', 'eCPPT', 'eWPT',
//             ].map((cert) => (
//               <span
//                 key={cert}
//                 className="border border-accent/25 bg-accent/5 text-slate-300 font-syne font-medium text-xs px-4 py-2 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
//               >
//                 {cert}
//               </span>
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>
//     </div>
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';

export default function Team() {
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
            <Users className="w-3.5 h-3.5" />
            50+ Certified Security Professionals
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-base mb-6"
          >
            The People Behind <span className="text-gradient">Your Security</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-sub text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Security is ultimately a human discipline. Every tool, every platform, every dashboard is only as good as the experts behind it. Meet the people who protect our clients — and who've dedicated their careers to staying ahead of the people who'd do them harm.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border rounded-xl p-8 text-center shadow-card">
            <p className="text-text-sub leading-relaxed text-base">
              Our leadership team combines decades of hands-on experience in offensive security, threat intelligence, digital forensics, cloud security, and regulatory compliance. Every member holds multiple industry certifications — OSCP, CEH, CISSP, CISA, GCIH, and cloud security credentials — and participates in active research and continuous professional development. We believe that the security professionals protecting your organisation should be as good as the people trying to breach it. We hire accordingly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Grid */}
      <SectionWrapper className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamCard
                key={member.id}
                emoji={member.emoji}
                name={member.name}
                role={member.role}
                bio={member.bio}
                linkedin={member.linkedin}
                certs={member.certs}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Strip */}
      <SectionWrapper className="py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
            Team Credentials
          </p>
          <h2 className="font-syne font-bold text-2xl text-text-base mb-3">
            100+ Certifications, Collectively Held
          </h2>
          <p className="text-text-muted text-sm max-w-xl mx-auto mb-8">
            Our team's credentials aren't window dressing — they're maintained through continuous training, active research, and real-world engagements that keep our skills sharp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'OSCP', 'CEH', 'CISSP', 'CISA', 'CRISC',
              'AWS Security', 'Azure Security Engineer', 'GCIH', 'GPEN', 'ISO 27001 LA',
              'PCI DSS QSA', 'CRTE', 'eCPPT', 'eWPT', 'CCSP', 'GCFE',
            ].map((cert) => (
              <span
                key={cert}
                className="border border-accent-dim bg-accent-muted text-text-sub font-syne font-medium text-xs px-4 py-2 rounded-full hover:border-accent-muted hover:text-accent transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}