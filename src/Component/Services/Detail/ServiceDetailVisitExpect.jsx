import React from 'react';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ACCENTS = [
  'from-brand-dark to-brand-dark-mid',
  'from-brand-accent to-brand-dark-mid',
  'from-brand-dark-mid to-brand-accent',
];

const ServiceDetailVisitExpect = ({ title, phases = [] }) => {
  if (!phases.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-14">
        <AnimateInView animateOnMount className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
            Your Visit
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            {title}
          </h2>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {phases.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative space-y-5 overflow-hidden rounded-[32px] border border-slate-100 bg-[#FAFBFD] p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_50px_rgba(0,61,77,0.08)]"
            >
              <div
                className={`absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r ${ACCENTS[i % ACCENTS.length]}`}
              />
              <span className="inline-flex pt-2 text-[10px] font-black uppercase tracking-widest text-brand-accent">
                {item.title}
              </span>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailVisitExpect;
