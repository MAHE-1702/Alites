import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

function PagePanel({ index, total, scrollYProgress, bg, children }) {
  const isLast = index === total - 1;
  const segStart = index / total;
  const segEnd = (index + 1) / total;

  const scale = useTransform(
    scrollYProgress,
    [segStart, isLast ? 1 : segEnd],
    [1, isLast ? 1 : 0.92]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [segStart, isLast ? 1 : segEnd],
    ['0px', isLast ? '0px' : '20px']
  );
  const dimOpacity = useTransform(
    scrollYProgress,
    [segStart, isLast ? 1 : segEnd],
    [0, isLast ? 0 : 0.3]
  );

  return (
    <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: index + 1 }}>
      <motion.div
        style={{
          scale,
          borderRadius,
          transformOrigin: 'top center',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: bg || '#050D1A',
        }}
        className="relative"
      >
        <motion.div
          style={{ opacity: dimOpacity }}
          className="absolute inset-0 bg-slate-300/40 pointer-events-none z-10"
        />
        <div className="relative z-0 h-full">{children}</div>
      </motion.div>
    </div>
  );
}

export default function PageStack({ panels }) {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  if (isMobile) {
    return (
      <div>
        {panels.map((p, i) => (
          <div key={i} className="min-h-screen" style={{ background: p.bg }}>
            {p.content}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${panels.length * 100}vh` }}>
      {panels.map((p, i) => (
        <PagePanel
          key={i}
          index={i}
          total={panels.length}
          scrollYProgress={scrollYProgress}
          bg={p.bg}
        >
          {p.content}
        </PagePanel>
      ))}
    </div>
  );
}
