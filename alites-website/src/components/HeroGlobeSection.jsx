import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence,
} from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { heroStats } from '../data/stats';
import { services } from '../data/services';

const ThreatGlobe = lazy(() => import('./ThreatGlobe'));

/* ── Scroll section definitions ─────────────────────────────── */
const SCROLL_SECTIONS = [
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
    eyebrow: 'Explore',
    heading: ['Scroll to Explore', 'Each Service'],
    body: 'Each service is purpose-built to address a specific attack surface. Keep scrolling to go deeper into what we do and how we deliver results.',
    type: 'cta',
  },
];

const wordVariant = {
  hidden: { opacity: 0, y: 28, skewX: 6 },
  visible: (i) => ({
    opacity: 1, y: 0, skewX: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Right-side section content ─────────────────────────────── */
function SectionContent({ section }) {
  return (
    <div className="space-y-6 max-w-md w-full">
      <div>
        <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">
          {section.eyebrow}
        </p>
        <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-text-base leading-tight">
          {section.heading[0]}
          <br />
          <span className="text-gradient">{section.heading[1]}</span>
        </h2>
      </div>
      <p className="text-text-sub text-base leading-relaxed">{section.body}</p>

      {section.type === 'stats' && (
        <div className="grid grid-cols-2 gap-3">
          {heroStats.map(({ value, label }) => (
            <div key={label} className="bg-surface border border-border rounded-xl p-4 shadow-card">
              <div className="font-syne font-extrabold text-2xl text-accent leading-none mb-1">{value}</div>
              <div className="text-text-muted text-xs leading-tight">{label}</div>
            </div>
          ))}
        </div>
      )}

      {section.type === 'services' && (
        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
          {services.map((s) => (
            <div key={s.id} className="flex items-center gap-2 text-text-sub text-sm">
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

/* ── Drag hint ───────────────────────────────────────────────── */
function DragHint() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(id);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 right-[25%] -translate-x-1/2 flex items-center gap-1.5 text-text-muted text-xs pointer-events-none select-none z-20"
        >
          <span className="w-5 h-5 rounded-full border border-border inline-flex items-center justify-center text-[9px]">↺</span>
          Drag to rotate
        </motion.p>
      )}
    </AnimatePresence>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function HeroGlobeSection() {
  const isMobile     = useIsMobile();
  const containerRef = useRef(null);
  const stickyRef    = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  /* Mouse parallax */
  const rawX   = useMotionValue(0);
  const rawY   = useMotionValue(0);
  const spr    = { stiffness: 80, damping: 25 };
  const bgX    = useSpring(useTransform(rawX, v => v * -24), spr);
  const bgY    = useSpring(useTransform(rawY, v => v * -24), spr);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── Timeline (total 400 vh) ──────────────────────────────────
  // 0–7 %  : hero, globe static on right
  // 7–32 % : globe slides right → left (behind hero text)
  // 10–28% : hero text fades out
  // 30–42% : section content fades in on right
  // 32–100%: globe fixed on left, sections cycle on right

  const globeX = useTransform(
    scrollYProgress,
    [0, 0.07, 0.32],
    ['50vw', '50vw', '0vw'],
  );

  const heroOpacity = useTransform(scrollYProgress, [0.10, 0.28], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0.10, 0.28], ['0%', '-6%']);
  const heroPtr     = useTransform(heroOpacity, (o) => (o > 0.05 ? 'auto' : 'none'));

  const sectionsOpacity = useTransform(scrollYProgress, [0.30, 0.42], [0, 1]);
  const sectionsPtr     = useTransform(sectionsOpacity, (o) => (o > 0.05 ? 'auto' : 'none'));

  /* Active section: maps [0.32 → 1.0] to section 0/1/2 */
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const n = Math.max(0, (v - 0.32) / 0.68);
      if (n < 1 / 3)      setActiveSection(0);
      else if (n < 2 / 3) setActiveSection(1);
      else                setActiveSection(2);
    });
    return unsub;
  }, [scrollYProgress]);

  const onMouseMove = (e) => {
    const rect = stickyRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left - rect.width  / 2) / rect.width);
    rawY.set((e.clientY - rect.top  - rect.height / 2) / rect.height);
  };

  /* ── Mobile fallback ────────────────────────────────────── */
  if (isMobile) {
    return (
      <div className="bg-primary">
        <section className="min-h-screen flex items-center px-6 pt-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6">
              <Shield className="w-3.5 h-3.5" />
              India's Trusted Cybersecurity Partner Since 2012
            </div>
            <h1 className="font-syne font-extrabold text-4xl text-text-base leading-tight mb-4">
              Defend What Matters.<br />
              <span className="text-gradient">Before It's Too Late.</span>
            </h1>
            <p className="text-text-sub text-base leading-relaxed mb-8">
              Penetration testing, 24/7 SOC monitoring, incident response, and
              compliance advisory — delivered by 50+ certified experts.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <Link to="/contact" className="text-center bg-accent text-white font-syne font-bold px-6 py-3.5 rounded-lg text-sm hover:bg-accent-bright transition-colors">
                Free Security Assessment
              </Link>
              <Link to="/case-studies" className="text-center border border-border text-text-sub font-syne font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-surface transition-colors">
                View Case Studies
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-text-muted text-xs">
              {['ISO 27001', 'PCI DSS QSA', 'OSCP Team', '500+ Clients'].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />{b}
                </span>
              ))}
            </div>
          </div>
        </section>
        {SCROLL_SECTIONS.map((section, i) => (
          <div key={i} className="min-h-[60vh] px-6 py-16 border-t border-white/5">
            <SectionContent section={section} />
          </div>
        ))}
      </div>
    );
  }

  /* ── Desktop ─────────────────────────────────────────────── */
  return (
    <div ref={containerRef} style={{ height: '400vh' }} className="relative">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden bg-primary"
        onMouseMove={onMouseMove}
      >
        {/* Background grid — parallax */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-0 grid-bg opacity-100 pointer-events-none"
        />
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, var(--color-accent-light) 0%, transparent 65%)' }}
        />

        {/* ── Globe: slides right → left, z below text ─────── */}
        <motion.div
          style={{
            x: globeX,
            position: 'absolute',
            inset: 0,
            width: '50vw',
            zIndex: 5,
          }}
        >
          <Suspense fallback={null}>
            <ThreatGlobe activeSection={activeSection} />
          </Suspense>
        </motion.div>

        {/* ── Hero text (left half, z above globe) ─────────── */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPtr }}
          className="absolute left-0 top-0 w-1/2 h-full flex items-center px-10 xl:px-16 z-10"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-8"
            >
              <Shield className="w-3.5 h-3.5" />
              India's Trusted Cybersecurity Partner Since 2012
            </motion.div>

            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-base leading-tight mb-6 overflow-hidden">
              {"Defend What Matters. Before It's Too Late.".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-[0.3em] ${['Defend', 'Matters.'].includes(word) ? 'text-gradient' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-sub text-lg max-w-lg leading-relaxed mb-10"
            >
              Penetration testing, 24/7 SOC monitoring, incident response, and
              compliance advisory — delivered by 50+ certified experts with a decade
              of field experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-syne font-bold px-8 py-4 rounded-lg hover:bg-accent-bright transition-all duration-200 hover:shadow-lg hover:shadow-accent-muted text-sm"
              >
                Free Security Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-border text-text-sub font-syne font-semibold px-8 py-4 rounded-lg hover:bg-surface transition-all duration-200 text-sm"
              >
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-5 text-text-muted text-xs"
            >
              {['ISO 27001 Certified', 'PCI DSS QSA', 'OSCP Certified Team', '500+ Clients'].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />{b}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Section content (right half, fades in) ───────── */}
        <motion.div
          style={{ opacity: sectionsOpacity, pointerEvents: sectionsPtr }}
          className="absolute right-0 top-0 w-1/2 h-full flex items-center px-10 xl:px-16 z-10"
        >
          {/* Vertical scroll progress line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top', height: '100%' }}
              className="w-full bg-accent"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <SectionContent section={SCROLL_SECTIONS[activeSection]} />
            </motion.div>
          </AnimatePresence>

          {/* Section progress dots */}
          <div className="absolute bottom-10 left-10 xl:left-14 flex items-center gap-3">
            {SCROLL_SECTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeSection ? 'w-8 bg-accent' : 'w-2 bg-border-subtle'
                }`}
              />
            ))}
            <span className="text-text-muted text-xs ml-1">
              {activeSection + 1}&thinsp;/&thinsp;{SCROLL_SECTIONS.length}
            </span>
          </div>
        </motion.div>

        <DragHint />
      </div>
    </div>
  );
}
