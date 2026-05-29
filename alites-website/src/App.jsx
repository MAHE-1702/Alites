import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Team from './pages/Team';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/industries" element={<Industries />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary text-slate-200 font-dm">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer base {
//   html {
//     scroll-behavior: smooth;
//   }

//   body {
//     background-color: #050D1A;
//     color: #e2e8f0;
//     font-family: 'DM Sans', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-family: 'Syne', sans-serif;
//   }
// }

// @layer utilities {
//   .glow-cyan {
//     box-shadow: 0 0 20px rgba(0, 229, 255, 0.3), 0 0 60px rgba(0, 229, 255, 0.1);
//   }

//   .glow-cyan-sm {
//     box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
//   }

//   .text-gradient {
//     background: linear-gradient(135deg, #00E5FF, #0080ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }

//   .grid-bg {
//     background-image:
//       linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
//     background-size: 60px 60px;
//   }

//   .card-hover {
//     transition: all 0.3s ease;
//   }

//   .card-hover:hover {
//     border-color: rgba(0, 229, 255, 0.6);
//     box-shadow: 0 0 24px rgba(0, 229, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4);
//     transform: translateY(-2px);
//   }
// }

// /* Input focus glow animation */
// @keyframes input-glow-pulse {
//   0%   { box-shadow: 0 0 0 0   rgba(0, 229, 255, 0.18); }
//   50%  { box-shadow: 0 0 0 4px rgba(0, 229, 255, 0.10); }
//   100% { box-shadow: 0 0 0 0   rgba(0, 229, 255, 0.18); }
// }

// .input-focus-glow:focus {
//   animation: input-glow-pulse 1.6s ease-in-out infinite;
// }

// /* Respect prefers-reduced-motion */
// @media (prefers-reduced-motion: reduce) {
//   .input-focus-glow:focus {
//     animation: none;
//   }
//   .card-hover:hover {
//     transform: none;
//   }
//   * {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//   }
// }

// /* Custom scrollbar */
// ::-webkit-scrollbar {
//   width: 6px;
// }

// ::-webkit-scrollbar-track {
//   background: #050D1A;
// }

// ::-webkit-scrollbar-thumb {
//   background: #00E5FF33;
//   border-radius: 3px;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background: #00E5FF66;
// }
