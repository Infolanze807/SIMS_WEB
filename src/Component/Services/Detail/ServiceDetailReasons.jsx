import React from 'react';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaHome,
  FaShieldAlt,
  FaUserMd,
  FaHeartbeat,
  FaCheckCircle,
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ICONS = [FaClock, FaHome, FaUserMd, FaShieldAlt, FaHeartbeat, FaCheckCircle];

const ServiceDetailReasons = ({ title, subtitle, reasons = [] }) => {
  const gridClass =
    reasons.length >= 6
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : reasons.length === 5
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFD] px-6 py-24 font-sans antialiased lg:px-10">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-14">
        <AnimateInView className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
            Why Choose SIMS
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base font-medium leading-relaxed text-slate-500">{subtitle}</p>
          )}
        </AnimateInView>

        <motion.div
          className={`grid ${gridClass} gap-6`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {reasons.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group space-y-4 rounded-[28px] border border-slate-100 bg-white p-7 transition-all duration-500 hover:border-brand-accent/20 hover:shadow-[0_25px_50px_rgba(0,61,77,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 text-lg text-brand-accent transition-transform group-hover:scale-110">
                    <Icon />
                  </div>
                  <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-brand-accent/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug text-brand-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailReasons;
