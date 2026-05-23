// Industry threat statistics — used for the "Why You Need Security" proof-point section
// Sources: Verizon DBIR 2024, IBM Cost of a Data Breach 2024, Sophos State of Ransomware 2024,
//          Gartner, CERT-In Annual Report 2023

export const threatStats = [
  {
    id: 1,
    value: '₹17.6 Cr',
    label: 'Average cost of a data breach in India in 2024 — the highest ever recorded.',
    source: 'IBM Cost of a Data Breach Report 2024',
    icon: 'DollarSign',
  },
  {
    id: 2,
    value: '197 days',
    label: 'Average time organisations take to detect a breach without 24/7 monitoring.',
    source: 'IBM Security Report 2024',
    icon: 'Clock',
  },
  {
    id: 3,
    value: '32%',
    label: 'Ransomware victims who say attackers exploited unpatched vulnerabilities as the entry point.',
    source: 'Sophos State of Ransomware 2024',
    icon: 'ShieldOff',
  },
  {
    id: 4,
    value: '3x',
    label: 'Increase in cyberattacks on Indian organisations reported by CERT-In in 2023.',
    source: 'CERT-In Annual Report 2023',
    icon: 'TrendingUp',
  },
  {
    id: 5,
    value: '91%',
    label: 'Organisations that seek advisory services when building their security architecture.',
    source: 'Gartner Future of Security Architecture Survey 2024',
    icon: 'Users',
  },
  {
    id: 6,
    value: '61%',
    label: 'Web applications with at least one high-severity vulnerability not in the OWASP Top 10.',
    source: 'Gartner Magic Quadrant for Application Security Testing',
    icon: 'Globe',
  },
];

// Used in the hero and elsewhere as bold, attention-grabbing claims
export const heroStats = [
  {
    value: '500+',
    label: 'Clients Secured',
  },
  {
    value: '12+',
    label: 'Years Experience',
  },
  {
    value: '50+',
    label: 'Certified Experts',
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
  },
];

// Technology / OEM partners
export const partners = [
  { name: 'Microsoft Security', abbr: 'MS' },
  { name: 'Palo Alto Networks', abbr: 'PA' },
  { name: 'CrowdStrike', abbr: 'CS' },
  { name: 'Tenable', abbr: 'TN' },
  { name: 'IBM Security', abbr: 'IBM' },
  { name: 'Fortinet', abbr: 'FN' },
];