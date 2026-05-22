import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon, title, description, features, showDetails = false }) {
  const IconComponent = LucideIcons[icon] || LucideIcons.Shield;

  return (
    <div
      className={`group relative bg-white/[0.03] border border-white/10 rounded-xl p-6 card-hover flex flex-col ${
        showDetails ? 'gap-5' : 'gap-4'
      }`}
    >
      {/* Glow overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"
        whileHover={{ scale: 1.18, rotate: 6, backgroundColor: 'rgba(0,229,255,0.22)' }}
        transition={{ type: 'spring', stiffness: 320, damping: 14 }}
      >
        <IconComponent className="w-6 h-6 text-accent" />
      </motion.div>

      {/* Title */}
      <h3 className="font-syne font-bold text-lg text-white group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className={`text-slate-400 text-sm leading-relaxed ${showDetails ? '' : 'line-clamp-3'}`}>
        {description}
      </p>

      {/* Features (only when showDetails) */}
      {showDetails && features && features.length > 0 && (
        <div className="space-y-2.5">
          <h4 className="font-syne font-semibold text-sm text-slate-300 uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Buttons */}
      {showDetails ? (
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
          <Link
            to="/contact"
            className="flex-1 text-center bg-accent text-primary font-syne font-semibold text-sm px-4 py-2.5 rounded hover:bg-accent/90 transition-all duration-200"
          >
            Get Quote
          </Link>
          <Link
            to="/contact"
            className="flex-1 text-center border border-accent/40 text-accent font-syne font-semibold text-sm px-4 py-2.5 rounded hover:bg-accent/10 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      ) : (
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-auto group/link hover:gap-2.5 transition-all duration-200"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
