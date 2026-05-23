// export const industries = [
//   {
//     id: 1,
//     name: 'BFSI',
//     icon: '🏦',
//     description:
//       'Banking, Financial Services, and Insurance sectors face relentless cyber threats targeting sensitive financial data, transactions, and customer PII. We provide PCI DSS compliance, fraud detection frameworks, and real-time threat monitoring tailored for BFSI regulatory environments.',
//   },
//   {
//     id: 2,
//     name: 'Healthcare',
//     icon: '🏥',
//     description:
//       'Healthcare organizations manage highly sensitive patient data governed by HIPAA and other regulations. Our services protect electronic health records (EHR), medical devices, and telehealth platforms against ransomware, data breaches, and insider threats.',
//   },
//   {
//     id: 3,
//     name: 'Government',
//     icon: '🏛️',
//     description:
//       'Government agencies and public sector bodies require the highest levels of security for critical infrastructure and citizen data. We deliver classified-environment security assessments, compliance with national cybersecurity frameworks, and incident response support.',
//   },
//   {
//     id: 4,
//     name: 'IT / ITES',
//     icon: '💻',
//     description:
//       'Technology and IT-enabled services companies are prime targets due to the sensitive intellectual property and client data they handle. We secure development pipelines, cloud infrastructure, APIs, and remote workforce environments for IT companies of all scales.',
//   },
//   {
//     id: 5,
//     name: 'Manufacturing',
//     icon: '🏭',
//     description:
//       'Modern manufacturing relies on interconnected OT/ICS systems that are increasingly vulnerable to cyberattacks. Our industrial cybersecurity services protect SCADA systems, production lines, and supply chains from disruption and espionage.',
//   },
//   {
//     id: 6,
//     name: 'Education',
//     icon: '🎓',
//     description:
//       'Educational institutions hold valuable research data and personal information for thousands of students and staff. We protect university networks, e-learning platforms, and student data repositories against phishing, ransomware, and data theft.',
//   },
//   {
//     id: 7,
//     name: 'Retail',
//     icon: '🛒',
//     description:
//       'Retailers manage high-volume transactions and extensive customer data across physical and digital channels. Our retail security solutions address POS security, e-commerce platform hardening, PCI DSS compliance, and supply chain risk management.',
//   },
//   {
//     id: 8,
//     name: 'Energy',
//     icon: '⚡',
//     description:
//       'Energy and utility companies operate critical infrastructure that nation-state actors actively target. We secure power grids, oil and gas control systems, and renewable energy platforms against sophisticated threats with specialized OT/ICS security expertise.',
//   },
// ];
export const industries = [
  {
    id: 1,
    name: 'BFSI',
    icon: '🏦',
    description:
      'Financial institutions are the most targeted sector globally — facing state-sponsored attackers, sophisticated fraud rings, and strict regulatory oversight simultaneously. We deliver PCI DSS compliance, real-time fraud detection frameworks, core banking penetration testing, and SWIFT security assessments tailored to India\'s RBI and global BFSI regulatory environments.',
    threats: ['Account Takeover', 'SWIFT Fraud', 'Insider Threats', 'Ransomware'],
    frameworks: ['PCI DSS', 'RBI Guidelines', 'ISO 27001'],
  },
  {
    id: 2,
    name: 'Healthcare',
    icon: '🏥',
    description:
      'Patient data is worth 10x more than credit card data on the dark web — making healthcare a prime ransomware target. We protect electronic health records, medical IoT devices, and telehealth platforms against the attacks that shut down hospitals and put lives at risk. Full HIPAA and DISHA compliance built into every engagement.',
    threats: ['Ransomware', 'Medical Device Exploits', 'EHR Data Breaches', 'Phishing'],
    frameworks: ['HIPAA', 'DISHA', 'ISO 27799'],
  },
  {
    id: 3,
    name: 'Government',
    icon: '🏛️',
    description:
      'Government agencies manage citizen data, critical infrastructure, and national security systems that nation-state actors actively target year-round. We deliver classified-environment security assessments, national cybersecurity framework compliance, supply chain risk evaluations, and incident response support for federal and state bodies.',
    threats: ['APT Groups', 'Supply Chain Attacks', 'Data Exfiltration', 'Critical Infrastructure Attacks'],
    frameworks: ['NCSC Framework', 'ISO 27001', 'CERT-In Guidelines'],
  },
  {
    id: 4,
    name: 'IT / ITES',
    icon: '💻',
    description:
      'Technology companies are attacked through their own products — making your supply chain your biggest liability. We secure development pipelines with DevSecOps integration, harden cloud infrastructure and APIs, protect remote workforces, and test the software you ship so your clients never become collateral damage.',
    threats: ['Supply Chain Compromise', 'API Vulnerabilities', 'Source Code Theft', 'Cloud Misconfiguration'],
    frameworks: ['SOC 2', 'ISO 27001', 'OWASP'],
  },
  {
    id: 5,
    name: 'Manufacturing',
    icon: '🏭',
    description:
      'A cyberattack on your OT/ICS systems doesn\'t just steal data — it stops production lines, corrupts product quality, and endangers workers. We specialise in industrial cybersecurity for SCADA systems, PLCs, and connected manufacturing environments, protecting operations without the downtime your production schedule can\'t afford.',
    threats: ['SCADA/ICS Attacks', 'Production Disruption', 'IP Theft', 'Ransomware on OT'],
    frameworks: ['IEC 62443', 'NIST CSF', 'ISO 27001'],
  },
  {
    id: 6,
    name: 'Education',
    icon: '🎓',
    description:
      'Universities and schools hold research data, student PII, and financial records — all with limited IT security budgets. Attacks on education surged 75% in 2023. We secure campus networks, e-learning platforms, student portals, and research databases against the phishing campaigns and ransomware that are increasingly targeting academia.',
    threats: ['Phishing & BEC', 'Ransomware', 'Student Data Theft', 'Research IP Exfiltration'],
    frameworks: ['FERPA', 'ISO 27001', 'PDPB'],
  },
  {
    id: 7,
    name: 'Retail',
    icon: '🛒',
    description:
      'Every transaction is an attack surface. Retailers face POS malware, e-commerce skimmers, loyalty fraud, and supply chain vulnerabilities across thousands of endpoints. Our retail security practice addresses PCI DSS compliance, e-commerce platform hardening, customer data protection, and omnichannel security architecture.',
    threats: ['POS Malware', 'E-Commerce Skimming', 'Loyalty Fraud', 'Supply Chain Risk'],
    frameworks: ['PCI DSS', 'GDPR', 'ISO 27001'],
  },
  {
    id: 8,
    name: 'Energy',
    icon: '⚡',
    description:
      'Power grids, oil pipelines, and renewable energy platforms are high-value targets for nation-state attackers seeking geopolitical leverage. A single breach can affect millions. Our OT/ICS security specialists have deep experience securing energy control systems, SCADA networks, and smart grid infrastructure against the most sophisticated threats in existence.',
    threats: ['Nation-State APTs', 'Grid Disruption', 'SCADA Exploitation', 'Physical-Cyber Convergence'],
    frameworks: ['NERC CIP', 'IEC 62443', 'NIST CSF'],
  },
];