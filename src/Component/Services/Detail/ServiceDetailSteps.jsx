import React from 'react';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ACCENTS = [
  'from-brand-dark to-brand-dark-mid',
  'from-brand-accent to-brand-dark-mid',
  'from-brand-dark-mid to-brand-accent',
];

const ServiceDetailSteps = ({ title, subtitle, steps = [] }) => {
  if (!steps.length) return null;

  return (
    <section className="w-full bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-7xl space-y-14">
        <AnimateInView animateOnMount className="grid items-end gap-6 border-b border-slate-200/80 pb-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
              Simple Process
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
              {title}
            </h2>
          </div>
          {subtitle !== '' && (
            <p className="text-sm leading-relaxed text-slate-500 lg:col-span-5">
              {subtitle ||
                'Book in minutes. Our DHA-certified team arrives at your location across Dubai — fast, private, and professional.'}
            </p>
          )}
        </AnimateInView>

        <motion.div
          className={`relative grid grid-cols-1 gap-8 ${
            steps.length === 4
              ? 'sm:grid-cols-2 xl:grid-cols-4'
              : steps.length === 5
                ? 'sm:grid-cols-2 lg:grid-cols-6'
                : 'md:grid-cols-3'
          }`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {steps.length === 3 && (
            <div className="absolute left-[16%] right-[16%] top-20 hidden h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent md:block" />
          )}

          {steps.map((item, i) => {
            const spanClass =
              steps.length !== 5
                ? ''
                : i < 3
                  ? 'lg:col-span-2'
                  : i === steps.length - 1
                    ? 'sm:col-span-2 lg:col-span-3'
                    : 'lg:col-span-3';

            return (
            <motion.div
              key={`${item.title}-${i}`}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group relative space-y-5 overflow-hidden rounded-[32px] border border-slate-100 bg-[#FAFBFD] p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_50px_rgba(0,61,77,0.08)] ${spanClass}`}
            >
              <div
                className={`absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r ${ACCENTS[i % ACCENTS.length]}`}
              />
              <div className="flex items-center justify-between pt-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-dark text-xl font-black text-white shadow-lg transition-transform group-hover:scale-105">
                  {i + 1}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug text-brand-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              {item.points?.length > 0 && (
                <ul className="space-y-2 border-t border-slate-100 pt-1">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailSteps;
