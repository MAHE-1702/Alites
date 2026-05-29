/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        surface:  'var(--color-bg-surface)',
        elevated: 'var(--color-bg-elevated)',
        accent:   'var(--color-accent-primary)',
        'accent-bright': 'var(--color-accent-hover)',
        'accent-dim':    'var(--color-accent-light)',
        'accent-muted':  'var(--color-accent-light)',
        'text-base':     'var(--color-text-primary)',
        'text-sub':      'var(--color-text-secondary)',
        'text-muted':    'var(--color-text-muted)',
        danger:   'var(--color-danger)',
        success:  'var(--color-success)',
        warning:  'var(--color-warning)',
      },
      fontFamily: {
        syne:     ['Syne', 'sans-serif'],
        dm:       ['DM Sans', 'sans-serif'],
        terminal: ['Courier New', 'Lucida Console', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
        subtle:  'var(--color-border-subtle)',
        base:    'var(--color-border)',
        strong:  'var(--color-accent-primary)',
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover':'0 4px 24px var(--color-accent-muted), 0 8px 32px rgba(0,0,0,0.1)',
      },
      letterSpacing: {
        terminal: '1.5px',
        wide2:    '2px',
      },
    },
  },
  plugins: [],
};
