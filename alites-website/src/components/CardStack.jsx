import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const STACK_OFFSET = 28;

function StackCard({ index, total, scrollYProgress, stickyTop, children }) {
  const isLast = index === total - 1;
  const segStart = index / total;
  const segEnd = (index + 1) / total;

  const scale = useTransform(
    scrollYProgress,
    [segStart, isLast ? 1 : segEnd],
    [1, isLast ? 1 : 0.94]
  );
  const dimOpacity = useTransform(
    scrollYProgress,
    [segStart, isLast ? 1 : segEnd],
    [0, isLast ? 0 : 0.22]
  );

  return (
    <div style={{ position: 'sticky', top: stickyTop + index * STACK_OFFSET, zIndex: index + 1 }}>
      <motion.div style={{ scale, transformOrigin: 'top center' }} className="relative">
        <motion.div
          style={{ opacity: dimOpacity }}
          className="absolute inset-0 bg-slate-200/50 rounded-2xl pointer-events-none z-10"
        />
        {children}
      </motion.div>
    </div>
  );
}

export default function CardStack({
  items,
  renderItem,
  scrollPerItem = 800,
  stickyTop = 80,
  mobileClassName = 'space-y-6',
}) {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  if (isMobile) {
    return (
      <div className={mobileClassName}>
        {items.map((item, i) => renderItem(item, i))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${items.length * scrollPerItem}px` }}>
      {items.map((item, i) => (
        <StackCard
          key={i}
          index={i}
          total={items.length}
          scrollYProgress={scrollYProgress}
          stickyTop={stickyTop}
        >
          {renderItem(item, i)}
        </StackCard>
      ))}
    </div>
  );
}
