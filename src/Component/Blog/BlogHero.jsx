import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const BlogHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-brand-dark via-brand-dark-mid to-brand-accent py-20 font-sans text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,195,192,0.15),transparent_50%)]" />
        <motion.div
          className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Available 24/7 Support
          </motion.span>
          <motion.h1
            className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            SIMS Health <span className="text-brand-accent-light">Blog</span>
          </motion.h1>
          <motion.p
            className="text-sm leading-relaxed text-white/80 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Expert insights on home healthcare in Dubai — from doctor on call and IV therapy to
            hotel visits and everyday wellness tips from our DHA-certified team.
          </motion.p>
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <motion.a
              href="tel:+971525231028"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black tracking-wide text-brand-dark shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt /> +971 5252 310 28
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
