import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const panels = [
  {
    id: "managed",
    category: "01 / Managed Services",
    headline: "Always-On Protection",
    sub: "Continuous security operations so threats are caught before they escalate — 24/7/365, no gaps.",
    accent: "#F97316",
    bg: "#080808",
    services: [
      {
        icon: "🛡",
        name: "Managed Detection & Response",
        abbr: "MDR",
        desc: "We hunt, detect, and neutralise threats in real time across your endpoints, network, and cloud — without the overhead of building an in-house SOC.",
        tags: ["24/7 Monitoring", "Threat Hunting", "Automated Containment"],
        stat: { val: "15 min", label: "Mean time to detect vs 197-day industry avg" },
      },
      {
        icon: "⚡",
        name: "Incident Response",
        abbr: "IR",
        desc: "When a breach hits, every hour matters. Our IR team deploys within hours — on-site or remote — to contain, investigate, and restore operations fast.",
        tags: ["Rapid Deployment", "Digital Forensics", "Root Cause Analysis"],
        stat: { val: "36 hrs", label: "Avg recovery time vs 23-day global avg" },
      },
      {
        icon: "🔍",
        name: "Vulnerability Management",
        abbr: "Managed Risk",
        desc: "Continuous discovery, prioritisation, and tracking of every exploitable weakness across your attack surface — with risk-based remediation guidance.",
        tags: ["Continuous Scanning", "Risk Scoring", "Remediation Tracking"],
        stat: { val: "61%", label: "Of web apps have high-severity vulns not in OWASP Top 10" },
      },
    ],
  },
  {
    id: "advisory",
    category: "02 / Advisory Services",
    headline: "Strategic Security Guidance",
    sub: "Expert advisors embedded in your business — turning complex security challenges into clear, executable strategy.",
    accent: "#F59E0B",
    bg: "#090909",
    services: [
      {
        icon: "📋",
        name: "Security Services Retainer",
        abbr: "Retainer",
        desc: "On-demand access to senior security consultants who know your environment. Strategic advice, escalation support, and tactical guidance whenever you need it.",
        tags: ["On-Demand Access", "Strategic Advice", "Dedicated Consultant"],
        stat: { val: "200+", label: "Organisations advised across industries" },
      },
      {
        icon: "🏛",
        name: "Advisory Services Overview",
        abbr: "vCISO",
        desc: "Virtual CISO and programme advisory — helping you build, mature, and communicate your security strategy to leadership, boards, and regulators.",
        tags: ["vCISO", "Board Reporting", "Programme Maturity"],
        stat: { val: "40%", label: "Avg reduction in risk exposure after 6-month advisory" },
      },
      {
        icon: "🔬",
        name: "Security Testing",
        abbr: "VAPT / Pen Test",
        desc: "From web application and API testing to full red-team engagements — our certified testers find what automated tools miss, then show you exactly how to fix it.",
        tags: ["Penetration Testing", "VAPT", "Red Team"],
        stat: { val: "32%", label: "Of ransomware attacks exploit unpatched vulns we uncover" },
      },
    ],
  },
  {
    id: "professional",
    category: "03 / Professional Services",
    headline: "Hands-On Delivery",
    sub: "Our engineers embedded alongside your team — building, hardening, and operating security capabilities that last.",
    accent: "#10B981",
    bg: "#0A0A0A",
    services: [
      {
        icon: "🤝",
        name: "Security Services Retainer",
        abbr: "Operational",
        desc: "Beyond advice — a dedicated team of security engineers on retainer to execute projects, manage tools, and handle operational security tasks at scale.",
        tags: ["Dedicated Engineers", "Project Execution", "Tool Management"],
        stat: { val: "80+", label: "Enterprise security programmes delivered" },
      },
      {
        icon: "⚙️",
        name: "Operational Support",
        abbr: "SecOps",
        desc: "Day-to-day security operations support — SIEM tuning, policy enforcement, patch coordination, and security tooling management for resource-constrained teams.",
        tags: ["SIEM Management", "Policy Enforcement", "Patch Coordination"],
        stat: { val: "99.9%", label: "SLA uptime across all managed security tooling" },
      },
      {
        icon: "☁️",
        name: "Cloud Security",
        abbr: "CSPM / DevSecOps",
        desc: "Secure your AWS, Azure, and GCP environments end to end — from IAM hardening and CSPM to container security and zero-trust architecture.",
        tags: ["Cloud Posture", "IAM Hardening", "Zero Trust"],
        stat: { val: "80%", label: "Of cloud breaches caused by misconfigs we catch and fix" },
      },
    ],
  },
  {
    id: "tools",
    category: "04 / Complimentary Tools",
    headline: "Know Your Baseline",
    sub: "Free, no-obligation assessments that give you an honest picture of where you stand — so you know exactly where to focus.",
    accent: "#8B5CF6",
    bg: "#0B0B0B",
    services: [
      {
        icon: "📊",
        name: "NIST Assessment",
        abbr: "Free Tool",
        desc: "Benchmark your security programme against the NIST Cybersecurity Framework. Identify gaps across Identify, Protect, Detect, Respond, and Recover in under 30 minutes.",
        tags: ["NIST CSF", "Gap Analysis", "Free to Use"],
        stat: { val: "5 functions", label: "Assessed across Identify, Protect, Detect, Respond, Recover" },
      },
      {
        icon: "🇪🇺",
        name: "NIS2 Assessment",
        abbr: "Free Tool",
        desc: "Check your readiness for the EU's NIS2 Directive before regulators do. Our tool maps your controls to NIS2 requirements and surfaces the highest-priority gaps first.",
        tags: ["NIS2 Directive", "EU Compliance", "Free to Use"],
        stat: { val: "Oct 2024", label: "NIS2 enforcement deadline — are you ready?" },
      },
      {
        icon: "🏆",
        name: "Compliance Advisory",
        abbr: "ISO / PCI / SOC 2",
        desc: "ISO 27001, PCI DSS, HIPAA, SOC 2, GDPR, and RBI mandates — our advisors have guided 200+ organisations through every major framework without disrupting operations.",
        tags: ["ISO 27001", "PCI DSS", "SOC 2"],
        stat: { val: "100%", label: "First-audit pass rate — zero major non-conformities" },
      },
    ],
  },
];

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

function ServiceCard({ icon, name, abbr, desc, tags, stat, accent }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 16,
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      flex: 1,
      minWidth: 0,
    }}>
      <div>
        <div style={{ fontSize: 26, lineHeight: 1, marginBottom: 10 }}>{icon}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{name}</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3, fontWeight: 500 }}>{abbr}</div>
      </div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0, flex: 1 }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {tags.map((t) => (
          <span key={t} style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 100,
            padding: "3px 10px",
            fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingTop: 14,
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: accent,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>{stat.val}</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>{stat.label}</span>
      </div>
    </div>
  );
}

// ─── PANEL ────────────────────────────────────────────────────────────────────

function Panel({ panel, index, totalPanels, progress }) {
  // Calculate discrete windows for each panel transition
  const step = 1 / totalPanels;
  const dwell = 0.1; // 10% dwell time at the start/end of each panel

  // Transition Window for this specific panel sliding in
  // Panel 0 is always there. Panel 1 slides in during the second 'step', etc.
  const start = index * step + (index === 0 ? 0 : dwell);
  const end = (index + 1) * step - dwell;

  // For the scale/opacity of the PREVIOUS panel (happens when the NEXT panel slides in)
  const nextStart = (index + 1) * step + dwell;
  const nextEnd = (index + 2) * step - dwell;

  const xInput = index === 0 ? [0, 1] : [start, end];
  const xValues = index === 0 ? [0, 0] : [100, 0];

  // Scale and Opacity should trigger when the NEXT panel starts coming in
  const scOpInput = [nextStart, nextEnd];
  const scOut = [1, 0.93];
  const opOut = [1, 0.4];

  const rawX = useTransform(progress, xInput, xValues);
  const rawSc = useTransform(progress, scOpInput, scOut);
  const rawOp = useTransform(progress, scOpInput, opOut);

  const springX = useSpring(rawX, { stiffness: 70, damping: 20, mass: 1 });
  const scale = useSpring(rawSc, { stiffness: 70, damping: 20, mass: 1 });
  const opacity = useSpring(rawOp, { stiffness: 70, damping: 20, mass: 1 });

  // Convert rawX spring number to string percentage
  const x = useTransform(springX, (v) => `${v}%`);

  return (
    <motion.div style={{
      position: "absolute",
      inset: 0,
      x, scale, opacity,
      transformOrigin: "center center",
      willChange: "transform",
      zIndex: index + 1,
      overflowY: "auto",
    }}>
      <div style={{
        minHeight: "100vh",
        background: panel.bg,
        padding: "80px clamp(24px, 5vw, 64px) 48px",
        display: "flex",
        flexDirection: "column",
        gap: 36,
        boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "5px 14px",
            borderRadius: 100,
            border: `1px solid ${panel.accent}35`,
            background: `${panel.accent}0D`,
            fontSize: 11,
            fontWeight: 600,
            color: panel.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            width: "fit-content",
            fontFamily: "'Syne', sans-serif",
          }}>
            {panel.category}
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 52px)",
            color: "#fff",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}>
            {panel.headline}
          </h2>
          <p style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.4)",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: 500,
          }}>
            {panel.sub}
          </p>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", flex: 1 }}>
          {panel.services.map((svc) => (
            <div key={svc.name} style={{ flex: "1 1 240px", display: "flex", minWidth: 0 }}>
              <ServiceCard {...svc} accent={panel.accent} />
            </div>
          ))}
        </div>

        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${panel.accent}50 0%, transparent 60%)`,
          flexShrink: 0,
        }} />
      </div>
    </motion.div>
  );
}

// ─── PROGRESS DOT ─────────────────────────────────────────────────────────────

function ProgressDot({ index, totalPanels, progress, panel }) {
  const step = 1 / totalPanels;
  const start = index * step;
  const end = (index + 1) * step;
  const p = useTransform(progress, [start, end], [0, 1]);
  const bg = useTransform(p, (v) => v > 0.1 ? panel.accent : "rgba(255,255,255,0.2)");
  const width = useTransform(p, [0, 1], [6, 20]);
  return <motion.div style={{ height: 6, width, borderRadius: 3, background: bg, flexShrink: 0 }} />;
}

// ─── COUNTER LABEL ────────────────────────────────────────────────────────────

function CounterLabel({ index, totalPanels, progress }) {
  const step = 1 / totalPanels;
  const start = index * step;
  const end = (index + 1) * step;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

  return (
    <motion.span style={{ position: "absolute", right: 0, opacity, whiteSpace: "nowrap" }}>
      {String(index + 1).padStart(2, "0")} / {String(totalPanels).padStart(2, "0")}
    </motion.span>
  );
}

// ─── SCROLL HINT ──────────────────────────────────────────────────────────────

function ScrollHint({ progress }) {
  const opacity = useTransform(progress, [0, 0.06], [1, 0]);
  return (
    <motion.div style={{
      position: "absolute",
      bottom: 52,
      right: "clamp(20px, 5vw, 60px)",
      opacity,
      zIndex: 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      pointerEvents: "none",
    }}>
      <span style={{
        fontSize: 10,
        color: "rgba(255,255,255,0.25)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "'Syne', sans-serif",
        fontWeight: 600,
      }}>Scroll</span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{
          width: 1,
          height: 28,
          background: "linear-gradient(180deg, rgba(249,115,22,0.7) 0%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function ServicesStackScroll() {
  const containerRef = useRef(null);
  const totalPanels = panels.length;

  // Track window scroll — this is the key fix.
  // useScroll with no target tracks the entire page scroll.
  const { scrollY } = useScroll();

  // We need to know where this container sits on the page so we can
  // map raw scrollY pixels → 0..1 progress within this section.
  const [bounds, setBounds] = useState({ top: 0, height: 1 });

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate absolute top, adjusted for the 64px sticky offset
      const top = rect.top + window.scrollY - 64;
      // The scrollable distance is the parent height minus the sticky child height
      const height = containerRef.current.offsetHeight - (window.innerHeight - 64);
      setBounds({ top, height });
    }

    // Use a small timeout to ensure other components above have settled
    const timer = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Map scrollY pixels to 0→1 progress within this section
  const progress = useTransform(
    scrollY,
    [bounds.top, bounds.top + bounds.height],
    [0, 1],
    { clamp: true }
  );

  // Increased height factor (120 instead of 100) to make it feel more "locked"
  const totalHeight = `${totalPanels * 120}vh`;

  return (
    <div
      ref={containerRef}
      style={{ height: totalHeight, position: "relative" }}
    >
      <div style={{
        position: "sticky",
        top: 64, // Accounts for navbar height
        height: "calc(100vh - 64px)",
        overflow: "hidden",
        background: "#080808",
      }}>

        {/* Top-left label */}
        <div style={{
          position: "absolute",
          top: 24,
          left: "clamp(20px, 5vw, 60px)",
          zIndex: 300,
          display: "flex",
          alignItems: "center",
          gap: 8,
          pointerEvents: "none",
        }}>
          <div style={{
            width: 7, height: 7,
            borderRadius: "50%",
            background: "#F97316",
            boxShadow: "0 0 10px rgba(249,115,22,0.7)",
          }} />
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>Services</span>
        </div>

        {/* Top-right counter */}
        <div style={{
          position: "absolute",
          top: 24,
          right: "clamp(20px, 5vw, 60px)",
          zIndex: 300,
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.06em",
          pointerEvents: "none",
        }}>
          <div style={{ position: "relative" }}>
            <span style={{ opacity: 0 }}>
              {String(totalPanels).padStart(2, "0")} / {String(totalPanels).padStart(2, "0")}
            </span>
            {panels.map((_, i) => (
              <CounterLabel key={i} index={i} totalPanels={totalPanels} progress={progress} />
            ))}
          </div>
        </div>

        {/* Panels */}
        {panels.map((panel, i) => (
          <Panel
            key={panel.id}
            panel={panel}
            index={i}
            totalPanels={totalPanels}
            progress={progress}
          />
        ))}

        {/* Progress dots */}
        <div style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
          alignItems: "center",
          zIndex: 300,
          pointerEvents: "none",
        }}>
          {panels.map((panel, i) => (
            <ProgressDot
              key={panel.id}
              panel={panel}
              index={i}
              totalPanels={totalPanels}
              progress={progress}
            />
          ))}
        </div>

        <ScrollHint progress={progress} />
      </div>
    </div>
  );
}