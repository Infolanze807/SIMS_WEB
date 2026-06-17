import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import AnimateInView, { fadeUp } from './AnimateInView';

const ServiceWellnessBanner = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans antialiased">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-accent" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,195,192,0.25),transparent_60%)]" />

      <AnimateInView
        variants={fadeUp}
        className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center sm:py-24"
      >
        <motion.div
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-brand-accent-light"
          whileHover={{ scale: 1.08, rotate: 5 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <FaHeartbeat className="text-xl" />
        </motion.div>
        <h2 className="text-2xl font-black leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
          We are pleased to offer you the chance to{' '}
          <span className="text-brand-accent-light">live life healthy</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-white/70 sm:text-base">
          Trusted home healthcare in Dubai — professional, private, and always within reach.
        </p>
      </AnimateInView>
    </section>
  );
};

export default ServiceWellnessBanner;
