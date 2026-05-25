import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer base {
//   html {
//     scroll-behavior: smooth;
//   }

//   body {
//     background-color: #0D0900;
//     color: #d97706;
//     font-family: 'DM Sans', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-family: 'Courier New', 'Lucida Console', monospace;
//     color: #f59e0b;
//     letter-spacing: -0.3px;
//   }

//   a {
//     color: #f59e0b;
//     text-decoration: none;
//   }

//   a:hover {
//     color: #fcd34d;
//   }

//   ::selection {
//     background: rgba(245, 158, 11, 0.25);
//     color: #fcd34d;
//   }
// }

// @layer utilities {

//   /* ── Accent colors ── */
//   .text-amber {
//     color: #f59e0b;
//   }

//   .text-amber-bright {
//     color: #fcd34d;
//   }

//   .text-amber-dim {
//     color: rgba(245, 158, 11, 0.45);
//   }

//   .text-amber-muted {
//     color: rgba(245, 158, 11, 0.25);
//   }

//   /* ── Gradient text ── */
//   .text-gradient {
//     background: linear-gradient(135deg, #f59e0b, #fcd34d);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }

//   .text-gradient-warm {
//     background: linear-gradient(135deg, #d97706, #f59e0b, #fbbf24);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }

//   /* ── Surface layers ── */
//   .surface-base {
//     background-color: #0D0900;
//   }

//   .surface-1 {
//     background-color: #0a0700;
//   }

//   .surface-2 {
//     background-color: #110b00;
//   }

//   .surface-nav {
//     background-color: rgba(10, 7, 0, 0.96);
//     backdrop-filter: blur(12px);
//     -webkit-backdrop-filter: blur(12px);
//   }

//   /* ── Grid background ── */
//   .grid-bg {
//     background-image:
//       linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px);
//     background-size: 40px 40px;
//   }

//   .grid-bg-lg {
//     background-image:
//       linear-gradient(rgba(245, 158, 11, 0.04) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(245, 158, 11, 0.04) 1px, transparent 1px);
//     background-size: 64px 64px;
//   }

//   /* ── Borders ── */
//   .border-amber {
//     border-color: rgba(245, 158, 11, 0.35);
//   }

//   .border-amber-dim {
//     border-color: rgba(245, 158, 11, 0.12);
//   }

//   .border-amber-strong {
//     border-color: rgba(245, 158, 11, 0.6);
//   }

//   /* ── Glows ── */
//   .glow-amber {
//     box-shadow: 0 0 24px rgba(245, 158, 11, 0.25), 0 0 64px rgba(245, 158, 11, 0.08);
//   }

//   .glow-amber-sm {
//     box-shadow: 0 0 12px rgba(245, 158, 11, 0.18);
//   }

//   .glow-amber-text {
//     text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);
//   }

//   /* ── Card hover ── */
//   .card-hover {
//     transition: all 0.3s ease;
//   }

//   .card-hover:hover {
//     border-color: rgba(245, 158, 11, 0.55);
//     box-shadow: 0 0 28px rgba(245, 158, 11, 0.12), 0 8px 32px rgba(0, 0, 0, 0.5);
//     transform: translateY(-2px);
//   }

//   /* ── Buttons ── */
//   .btn-primary {
//     background: #f59e0b;
//     color: #0D0900;
//     font-family: 'Courier New', monospace;
//     font-size: 11px;
//     font-weight: 700;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 10px 22px;
//     border: none;
//     transition: background 0.2s ease, box-shadow 0.2s ease;
//   }

//   .btn-primary:hover {
//     background: #fcd34d;
//     box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
//   }

//   .btn-outline {
//     background: transparent;
//     color: #f59e0b;
//     font-family: 'Courier New', monospace;
//     font-size: 11px;
//     font-weight: 700;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 10px 22px;
//     border: 1px solid rgba(245, 158, 11, 0.45);
//     transition: all 0.2s ease;
//   }

//   .btn-outline:hover {
//     border-color: #f59e0b;
//     color: #fcd34d;
//     box-shadow: 0 0 14px rgba(245, 158, 11, 0.15);
//   }

//   /* ── Badges / pills ── */
//   .badge-amber {
//     background: rgba(245, 158, 11, 0.08);
//     border: 1px solid rgba(245, 158, 11, 0.3);
//     color: #f59e0b;
//     font-family: 'Courier New', monospace;
//     font-size: 10px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 3px 10px;
//     border-radius: 2px;
//   }

//   .badge-danger {
//     background: rgba(239, 68, 68, 0.08);
//     border: 1px solid rgba(239, 68, 68, 0.3);
//     color: #fca5a5;
//     font-family: 'Courier New', monospace;
//     font-size: 10px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 3px 10px;
//     border-radius: 2px;
//   }

//   .badge-success {
//     background: rgba(34, 197, 94, 0.08);
//     border: 1px solid rgba(34, 197, 94, 0.3);
//     color: #86efac;
//     font-family: 'Courier New', monospace;
//     font-size: 10px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 3px 10px;
//     border-radius: 2px;
//   }

//   .badge-warning {
//     background: rgba(245, 158, 11, 0.08);
//     border: 1px solid rgba(245, 158, 11, 0.3);
//     color: #fcd34d;
//     font-family: 'Courier New', monospace;
//     font-size: 10px;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     padding: 3px 10px;
//     border-radius: 2px;
//   }

//   /* ── Terminal text style ── */
//   .font-terminal {
//     font-family: 'Courier New', 'Lucida Console', monospace;
//     letter-spacing: 0.5px;
//   }

//   .terminal-prompt::before {
//     content: '> ';
//     color: rgba(245, 158, 11, 0.45);
//   }

//   /* ── Scan line decoration ── */
//   .scanline {
//     position: relative;
//     overflow: hidden;
//   }

//   .scanline::after {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: repeating-linear-gradient(
//       0deg,
//       transparent,
//       transparent 2px,
//       rgba(245, 158, 11, 0.015) 2px,
//       rgba(245, 158, 11, 0.015) 4px
//     );
//     pointer-events: none;
//   }

//   /* ── Hero radial glow ── */
//   .hero-glow {
//     background: radial-gradient(
//       ellipse 70% 50% at 30% 50%,
//       rgba(245, 158, 11, 0.07) 0%,
//       transparent 70%
//     );
//   }

//   /* ── Status dot ── */
//   .status-dot-active {
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background: #f59e0b;
//     box-shadow: 0 0 6px rgba(245, 158, 11, 0.6);
//   }

//   .status-dot-dim {
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background: rgba(245, 158, 11, 0.3);
//   }

//   .status-dot-danger {
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background: #ef4444;
//     box-shadow: 0 0 6px rgba(239, 68, 68, 0.6);
//   }

//   /* ── Divider ── */
//   .divider-amber {
//     border-color: rgba(245, 158, 11, 0.1);
//   }
// }

// /* ── Input focus glow ── */
// @keyframes input-glow-pulse {
//   0%   { box-shadow: 0 0 0 0   rgba(245, 158, 11, 0.2); }
//   50%  { box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.08); }
//   100% { box-shadow: 0 0 0 0   rgba(245, 158, 11, 0.2); }
// }

// .input-focus-glow:focus {
//   outline: none;
//   border-color: rgba(245, 158, 11, 0.6);
//   animation: input-glow-pulse 1.6s ease-in-out infinite;
// }

// /* ── Blinking cursor ── */
// @keyframes cursor-blink {
//   0%, 100% { opacity: 1; }
//   50%       { opacity: 0; }
// }

// .cursor-blink {
//   display: inline-block;
//   width: 8px;
//   height: 1em;
//   background: #f59e0b;
//   vertical-align: middle;
//   animation: cursor-blink 1s step-end infinite;
// }

// /* ── Status dot pulse ── */
// @keyframes dot-pulse {
//   0%   { box-shadow: 0 0 0 0   rgba(245, 158, 11, 0.5); }
//   70%  { box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); }
//   100% { box-shadow: 0 0 0 0   rgba(245, 158, 11, 0); }
// }

// .dot-pulse {
//   animation: dot-pulse 2s ease-out infinite;
// }

// /* ── Reduced motion ── */
// @media (prefers-reduced-motion: reduce) {
//   .input-focus-glow:focus { animation: none; }
//   .cursor-blink           { animation: none; opacity: 1; }
//   .dot-pulse              { animation: none; }
//   .card-hover:hover       { transform: none; }

//   * {
//     animation-duration:       0.01ms !important;
//     animation-iteration-count: 1     !important;
//     transition-duration:      0.01ms !important;
//   }
// }

// /* ── Scrollbar ── */
// ::-webkit-scrollbar       { width: 6px; }
// ::-webkit-scrollbar-track { background: #0D0900; }
// ::-webkit-scrollbar-thumb {
//   background: rgba(245, 158, 11, 0.2);
//   border-radius: 3px;
// }
// ::-webkit-scrollbar-thumb:hover { background: rgba(245, 158, 11, 0.4); }