import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  {
    end: 500,
    suffix: '+',
    label: 'Clients Secured',
    description: 'Trusted by businesses across industries',
  },
  {
    end: 12,
    suffix: '+',
    label: 'Years Experience',
    description: 'Serving clients since 2012',
  },
  {
    end: 50,
    suffix: '+',
    label: 'Security Experts',
    description: 'Certified professionals on our team',
  },
  {
    end: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'Uptime SLA',
    description: 'Guaranteed service availability',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function StatItem({ end, suffix, label, description, decimals = 0, inView, reduced }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col items-center text-center p-6 bg-white/[0.03] border border-white/10 rounded-xl card-hover"
    >
      <div className="font-syne font-extrabold text-4xl md:text-5xl text-accent mb-1">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={reduced ? 0 : 2.5}
            decimals={decimals}
            suffix={suffix}
            useEasing
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="font-syne font-semibold text-white text-base mt-1">{label}</div>
      <div className="text-slate-500 text-xs mt-1">{description}</div>
    </motion.div>
  );
}

export default function StatBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} inView={inView} reduced={reduced} />
      ))}
    </motion.div>
  );
}
