
export const services = [
  {
    id: 1,
    icon: 'Target',
    title: 'Penetration Testing',
    description:
      'Before attackers find your weaknesses, we do. Our certified ethical hackers simulate the full spectrum of real-world cyberattacks — network intrusions, web application exploits, mobile vulnerabilities, and social engineering — using OWASP, PTES, and OSSTMM methodologies. Every engagement ends with a clear, prioritised roadmap so your team knows exactly what to fix and why.',
    features: [
      'Network & Infrastructure Penetration Testing',
      'Web Application & API Security Testing',
      'Mobile App Penetration Testing',
      'Social Engineering & Phishing Simulations',
      'Executive Summary + Full Technical Report',
    ],
    stat: {
      value: '32%',
      label: 'of ransomware attacks exploit unpatched vulnerabilities — the exact gaps our pen tests uncover.',
    },
  },
  {
    id: 2,
    icon: 'ShieldAlert',
    title: 'VAPT',
    description:
      'A single scan isn\'t enough. Our Vulnerability Assessment and Penetration Testing (VAPT) combines automated discovery with expert manual exploitation — giving you both breadth and depth. We catalogue every gap, validate its real-world impact, and prioritise remediation by business risk. Fully aligned with PCI DSS, ISO 27001, and HIPAA audit requirements.',
    features: [
      'Automated Vulnerability Scanning & Discovery',
      'Manual Exploitation & Real-World Validation',
      'Risk-Based Prioritisation Framework',
      'Compliance-Aligned Reporting (PCI DSS, ISO 27001)',
      'Remediation Verification Re-Testing',
    ],
    stat: {
      value: '61%',
      label: 'of web applications contain at least one high-severity vulnerability not in the OWASP Top 10.',
    },
  },
  {
    id: 3,
    icon: 'MonitorDot',
    title: 'SOC as a Service',
    description:
      'Your attackers don\'t work 9-to-5. Neither do we. Our Security Operations Centre runs 24/7/365, powered by enterprise SIEM technology and continuously updated threat intelligence. We monitor, triage, and escalate in real time — integrating seamlessly with your existing tools and workflows so you get the protection of an in-house SOC without the cost or complexity of building one.',
    features: [
      '24/7/365 Security Monitoring & Real-Time Alerting',
      'SIEM Deployment, Tuning & Management',
      'Global Threat Intelligence Integration',
      'Incident Triage, Escalation & Guided Response',
      'Monthly Security Reviews & Executive Reporting',
    ],
    stat: {
      value: '15 min',
      label: 'mean time to detect under our SOC — versus the industry average of 197 days.',
    },
  },
  {
    id: 4,
    icon: 'Cloud',
    title: 'Cloud Security',
    description:
      'Cloud misconfiguration is now the #1 cause of data breaches. Our Cloud Security practice secures your AWS, Azure, and GCP environments from the ground up — from identity and access management audits to cloud-native penetration testing and zero-trust architecture implementation. We\'ve helped 80+ enterprises migrate to cloud without sacrificing security or compliance.',
    features: [
      'Cloud Security Posture Management (CSPM)',
      'IAM Policy Review & Privilege Hardening',
      'Cloud-Native Penetration Testing',
      'Container, Kubernetes & DevSecOps Security',
      'Multi-Cloud Architecture & Zero-Trust Review',
    ],
    stat: {
      value: '80%',
      label: 'of cloud breaches are caused by misconfigurations that our CSPM reviews catch and remediate.',
    },
  },
  {
    id: 5,
    icon: 'Siren',
    title: 'Incident Response',
    description:
      'When a breach happens, every minute of delay costs you more. Our Incident Response team deploys within hours — not days — to contain the threat, preserve evidence, and get your operations back online. We follow the NIST IR framework, maintain full forensic chain of custody, and deliver a post-incident report with root cause analysis and a hardening roadmap to prevent recurrence.',
    features: [
      'Rapid Threat Containment (On-site or Remote)',
      'Digital Forensics & Root Cause Analysis',
      'Malware Analysis, Isolation & Removal',
      'Legal-Ready Evidence Preservation',
      'Post-Incident Hardening Roadmap',
    ],
    stat: {
      value: '36 hrs',
      label: 'average system recovery time for our IR clients — versus the global average of 23 days.',
    },
  },
  {
    id: 6,
    icon: 'FileCheck',
    title: 'Compliance Advisory',
    description:
      'Compliance isn\'t a checkbox — it\'s a competitive advantage. Our advisory experts have guided 200+ organisations through ISO 27001, PCI DSS, HIPAA, SOC 2, GDPR, and RBI mandates without disrupting operations. We conduct gap assessments, build your policies, implement controls, and stand beside you through audit day — so you pass the first time.',
    features: [
      'ISO 27001 / SOC 2 / PCI DSS Readiness Assessment',
      'Gap Analysis & Remediation Roadmap',
      'Policy, Procedure & Control Development',
      'Audit Preparation, Support & Representation',
      'Continuous Compliance Monitoring',
    ],
    stat: {
      value: '100%',
      label: 'of our compliance clients passed their first audit attempt — with zero major non-conformities.',
    },
  },
];