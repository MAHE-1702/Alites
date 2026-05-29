  import React, { useRef } from 'react';
  import { motion, useInView, useReducedMotion } from 'framer-motion';

  export default function SectionWrapper({ children, className = '', id }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const reduced = useReducedMotion();

    const hidden = reduced ? { opacity: 0 } : { opacity: 0, y: 40 };
    const visible = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={hidden}
        animate={inView ? visible : hidden}
        transition={{ duration: reduced ? 0.15 : 0.6, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.section>
    );
  }
