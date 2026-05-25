import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { heroStats } from '../data/stats';
import { services } from '../data/services';

const ThreatGlobe = lazy(() => import('./ThreatGlobe'));

const sections = [
  {
    eyebrow: 'Track Record Since 2012',
    heading: ['A Decade of', 'Measurable Impact'],
    body: "Since 2012, we've protected 500+ organisations across South Asia from threats that grow more sophisticated every year. The numbers speak clearly.",
    type: 'stats',
  },
  {
    eyebrow: 'What We Do',
    heading: ['Full-Spectrum', 'Cybersecurity'],
    body: 'From proactive attack simulation to round-the-clock threat monitoring — every layer of your environment, covered by specialists who have seen it all.',
    type: 'services',
  },
  {
    eyebrow: 'Deep Dive',
    heading: ['Scroll to Explore', 'Each Service'],
    body: 'Each service is purpose-built to address a specific attack surface. Keep scrolling to go deeper into what we do and how we deliver results.',
    type: 'cta',
  },
];

function SectionContent({ section }) {
  return (
    <div className="space-y-6 max-w-md w-full">
      <div>
        <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">
          {section.eyebrow}
        </p>
        <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
          {section.heading[0]}
          <br />
          <span className="text-gradient">{section.heading[1]}</span>
        </h2>
      </div>

      <p className="text-slate-600 text-base leading-relaxed">
        {section.body}
      </p>

      {section.type === 'stats' && (
        <div className="grid grid-cols-2 gap-3">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="font-syne font-extrabold text-2xl text-accent leading-none mb-1">{value}</div>
              <div className="text-slate-500 text-xs leading-tight">{label}</div>
            </div>
          ))}
        </div>
      )}

      {section.type === 'services' && (
        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
          {services.map((s) => (
            <div key={s.id} className="flex items-center gap-2 text-slate-700 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {s.title}
            </div>
          ))}
        </div>
      )}

      {section.type === 'cta' && (
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-accent font-syne font-semibold text-sm"
        >
          <ArrowRight className="w-4 h-4 rotate-90" />
          Keep scrolling to explore services
        </motion.div>
      )}
    </div>
  );
}

/* ── Desktop sticky split layout ── */
function DesktopLayout({ active }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 1 / 3) setActive(0);
      else if (v < 2 / 3) setActive(1);
      else setActive(2);
    });
    return unsub;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress]);

  // We need to hoist setActive out — handled by parent passing it
  return null;
}

export default function GlobeScrollSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 1 / 3) setActive(0);
      else if (v < 2 / 3) setActive(1);
      else setActive(2);
    });
    return unsub;
  }, [scrollYProgress]);

  /* ── Mobile: stacked, no sticky ── */
  if (isMobile) {
    return (
      <div className="bg-white">
        {/* Globe once at top */}
        <div className="h-[45vh] w-full">
          <Suspense fallback={null}>
            <ThreatGlobe activeSection={active} />
          </Suspense>
        </div>
        {/* Three stacked panels */}
        {sections.map((section, i) => (
          <div key={i} className="px-6 py-14 border-t border-slate-100">
            <SectionContent section={section} />
          </div>
        ))}
      </div>
    );
  }

  /* ── Desktop: 300vh sticky container ── */
  return (
    <div ref={containerRef} style={{ height: '300vh' }} className="relative bg-white">
      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex"
        style={{ willChange: 'transform' }}
      >
        {/* ── Left: text panels ── */}
        <div className="w-1/2 relative flex items-center justify-center px-10 xl:px-16">
          {/* Subtle grid background */}
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          {/* Animated section content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <SectionContent section={sections[active]} />
            </motion.div>
          </AnimatePresence>

          {/* Section progress indicator */}
          <div className="absolute bottom-10 left-10 xl:left-16 flex items-center gap-3">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-400 ${
                  i === active ? 'w-8 bg-accent' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
            <span className="text-slate-400 text-xs ml-1">
              {active + 1} / {sections.length}
            </span>
          </div>

          {/* Vertical scroll progress bar */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-100">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top', height: '100%' }}
              className="w-full bg-accent/30"
            />
          </div>
        </div>

        {/* ── Right: sticky globe ── */}
        <div className="w-1/2 relative">
          <Suspense fallback={null}>
            <ThreatGlobe activeSection={active} />
          </Suspense>

          {/* Drag hint (fades away after first interaction) */}
          <DragHint />
        </div>
      </div>
    </div>
  );
}

function DragHint() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(id);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 text-xs pointer-events-none select-none"
        >
          <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center">
            ↺
          </span>
          Drag to rotate
        </motion.div>
      )}
    </AnimatePresence>
  );
}
