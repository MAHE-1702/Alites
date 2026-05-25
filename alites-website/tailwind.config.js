/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#0D0D0D',
        accent:   '#F97316',
        'accent-bright': '#FB923C',
        'accent-dim':    'rgba(249, 115, 22, 0.45)',
        'accent-muted':  'rgba(249, 115, 22, 0.12)',
        surface1: '#1A1A1A',
        surface2: '#242424',
        danger:   '#EF4444',
        success:  '#10B981',
      },
      fontFamily: {
        syne:     ['Syne', 'sans-serif'],
        dm:       ['DM Sans', 'sans-serif'],
        terminal: ['Courier New', 'Lucida Console', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'rgba(249, 115, 22, 0.15)',
        subtle:  'rgba(249, 115, 22, 0.08)',
        base:    'rgba(249, 115, 22, 0.30)',
        strong:  'rgba(249, 115, 22, 0.60)',
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
        'card-hover':'0 4px 24px rgba(249,115,22,0.20), 0 8px 32px rgba(0,0,0,0.4)',
      },
      letterSpacing: {
        terminal: '1.5px',
        wide2:    '2px',
      },
    },
  },
  plugins: [],
};
