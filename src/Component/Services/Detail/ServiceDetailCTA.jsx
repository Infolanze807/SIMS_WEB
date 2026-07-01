import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import AnimateInView, { scaleIn } from '../AnimateInView';

const ServiceDetailCTA = ({ title, description, buttonText }) => {
  return (
    <section className="w-full px-6 py-20 font-sans antialiased lg:px-10">
      <AnimateInView animateOnMount variants={scaleIn} className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-accent p-10 text-white sm:p-14">
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">{title}</h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
            <motion.a
              href="tel:+971525231028"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-black text-brand-dark shadow-lg"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt />
              {buttonText || 'Call +971525231028'}
            </motion.a>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};

export default ServiceDetailCTA;
