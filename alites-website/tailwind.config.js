// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#050D1A',
//         accent: '#00E5FF',
//       },
//       fontFamily: {
//         syne: ['Syne', 'sans-serif'],
//         dm: ['DM Sans', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#0D0900',
        surface1: '#0a0700',
        surface2: '#110b00',
        accent:   '#f59e0b',
        'accent-bright': '#fcd34d',
        'accent-dim':    'rgba(245, 158, 11, 0.45)',
        'accent-muted':  'rgba(245, 158, 11, 0.12)',
        danger:   '#ef4444',
        success:  '#22c55e',
      },
      fontFamily: {
        syne:     ['Syne', 'sans-serif'],
        dm:       ['DM Sans', 'sans-serif'],
        terminal: ['Courier New', 'Lucida Console', 'monospace'],
      },
      borderColor: {
        DEFAULT:  'rgba(245, 158, 11, 0.12)',
        subtle:   'rgba(245, 158, 11, 0.12)',
        base:     'rgba(245, 158, 11, 0.35)',
        strong:   'rgba(245, 158, 11, 0.60)',
      },
      boxShadow: {
        'amber':    '0 0 24px rgba(245,158,11,0.25), 0 0 64px rgba(245,158,11,0.08)',
        'amber-sm': '0 0 12px rgba(245,158,11,0.18)',
        'amber-lg': '0 0 40px rgba(245,158,11,0.30), 0 0 100px rgba(245,158,11,0.10)',
        'card-hover': '0 0 28px rgba(245,158,11,0.12), 0 8px 32px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grid-sm': `
          linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)
        `,
        'grid-lg': `
          linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)
        `,
        'hero-glow': `
          radial-gradient(ellipse 70% 50% at 30% 50%,
            rgba(245,158,11,0.07) 0%, transparent 70%)
        `,
        'gradient-amber': 'linear-gradient(135deg, #f59e0b, #fcd34d)',
        'gradient-warm':  'linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)',
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-lg': '64px 64px',
      },
      letterSpacing: {
        terminal: '1.5px',
        wide2:    '2px',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'dot-pulse':    'dot-pulse 2s ease-out infinite',
        'input-glow':   'input-glow-pulse 1.6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'dot-pulse': {
          '0%':   { boxShadow: '0 0 0 0   rgba(245,158,11,0.5)' },
          '70%':  { boxShadow: '0 0 0 6px rgba(245,158,11,0)' },
          '100%': { boxShadow: '0 0 0 0   rgba(245,158,11,0)' },
        },
        'input-glow-pulse': {
          '0%':   { boxShadow: '0 0 0 0   rgba(245,158,11,0.2)' },
          '50%':  { boxShadow: '0 0 0 4px rgba(245,158,11,0.08)' },
          '100%': { boxShadow: '0 0 0 0   rgba(245,158,11,0.2)' },
        },
      },
    },
  },
  plugins: [],
};