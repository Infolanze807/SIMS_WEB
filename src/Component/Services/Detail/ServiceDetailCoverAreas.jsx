import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ServiceDetailCoverAreas = ({ title, intro, areas = [], note }) => {
  if (!areas.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-14">
        <AnimateInView animateOnMount className="grid items-end gap-6 border-b border-slate-200/80 pb-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
              Areas We Cover
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="text-base font-medium leading-relaxed text-slate-500 lg:col-span-5">
              {intro}
            </p>
          )}
        </AnimateInView>

        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {areas.map((area) => (
            <motion.li
              key={area.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-4 rounded-[24px] border border-slate-100 bg-[#FAFBFD] p-6 transition-all duration-300 hover:border-brand-accent/25 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,61,77,0.08)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent transition-transform duration-300 group-hover:scale-105">
                <FaMapMarkerAlt />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold leading-snug text-brand-dark">{area.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{area.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {note && (
          <AnimateInView animateOnMount delay={0.08}>
            <p className="rounded-[28px] border border-brand-accent/20 bg-brand-accent/10 px-6 py-5 text-base font-medium leading-relaxed text-brand-dark sm:px-8">
              {note}
            </p>
          </AnimateInView>
        )}
      </div>
    </section>
  );
};

export default ServiceDetailCoverAreas;
