import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Shield, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Penetration Testing', to: '/services' },
  { label: 'VAPT', to: '/services' },
  { label: 'SOC as a Service', to: '/services' },
  { label: 'Cloud Security', to: '/services' },
  { label: 'Incident Response', to: '/services' },
  { label: 'Compliance Advisory', to: '/services' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Tagline + Socials */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-accent" />
              </div>
              <span className="font-syne text-xl font-bold text-white">
                Alites<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your Shield in the Digital World. Providing enterprise-grade cybersecurity solutions since 2012.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-accent text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-accent text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  No. 12, Tech Park,<br />
                  Coimbatore – 641014,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-accent text-sm transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:contact@alites.in"
                  className="text-slate-400 hover:text-accent text-sm transition-colors"
                >
                  contact@alites.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Alites Cybersecurity Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-accent text-xs transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-500 hover:text-accent text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
