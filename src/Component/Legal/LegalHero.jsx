import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight, FaShieldAlt, FaGavel } from 'react-icons/fa';

const PAGE_META = {
  'patient-rights': {
    icon: FaShieldAlt,
    tagline: 'Your rights, our commitment to compassionate home healthcare.',
  },
  'privacy-policy': {
    icon: FaShieldAlt,
    tagline: 'How we collect, protect, and use your personal information.',
  },
  'terms-and-conditions': {
    icon: FaGavel,
    tagline: 'Terms governing your use of our website and services.',
  },
};

const AnimatedBlock = ({ children, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.2), ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const LegalHero = ({ eyebrow, title, effectiveDate, slug }) => {
  const meta = PAGE_META[slug] ?? PAGE_META['privacy-policy'];
  const Icon = meta.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-[#0a5568] to-[#01222a] px-4 py-16 font-sans text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-accent/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-black/20 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <nav className="mb-6 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/55">
          <Link to="/" className="transition hover:text-brand-accent-light">
            Home
          </Link>
          <FaChevronRight className="text-[9px]" />
          <span className="text-brand-accent-light">{eyebrow}</span>
        </nav>

        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-accent-light shadow-lg backdrop-blur-sm">
            <Icon className="text-xl" />
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {meta.tagline}
          </p>
          {effectiveDate && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              Effective Date: {effectiveDate}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
