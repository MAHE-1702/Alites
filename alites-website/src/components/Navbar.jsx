import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Shield, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1, height: 'auto',
    transition: { duration: 0.28, ease: 'easeOut', staggerChildren: 0.055, delayChildren: 0.05 },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: 'easeOut' } },
};

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  // { label: 'Industries',  to: '/industries' },
  { label: 'About', to: '/about' },
  // { label: 'Team',        to: '/team' },
  // { label: 'Case Studies',to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const ThemeToggle = ({ className = "" }) => (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-surface border border-border hover:border-accent transition-all duration-200 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-accent" />
      ) : (
        <Sun className="w-5 h-5 text-accent" />
      )}
    </button>
  );

  const getLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 relative group ${isActive ? 'text-accent' : 'text-slate-400 hover:text-accent'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 shadow-sm shadow-black/40'
          : 'bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Alites Home">
            <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Shield className="w-4 h-4 text-accent" />
            </div>
            <span className="font-syne text-xl font-bold text-white">
              Alites<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={getLinkClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold text-sm px-5 py-2.5 rounded hover:bg-accent/90 transition-all duration-200 hover:shadow-md hover:shadow-accent/20"
            >
              Get Free Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-400 hover:text-accent transition-colors p-2 rounded"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div key="mobile-menu" variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="lg:hidden overflow-hidden">
            <div className="bg-[#111111] border-t border-white/10 px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={linkVariants}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded text-sm font-medium transition-colors duration-200 ${isActive
                        ? 'text-accent bg-accent/10 border-l-2 border-accent'
                        : 'text-slate-400 hover:text-accent hover:bg-accent/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="pt-3 flex items-center gap-3">
                <Link
                  to="/contact"
                  className="flex-1 text-center bg-accent text-white font-syne font-semibold text-sm px-5 py-3 rounded hover:bg-accent/90 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <ThemeToggle className="h-full py-3 px-4" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
