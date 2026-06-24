import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserCheck } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ServiceDetailCoverage = ({ title, intro, items = [], idealFor = [] }) => {
  if (!items.length && !idealFor.length) return null;

  const gridClass =
    items.length >= 9
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : items.length >= 5
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-2';

  return (
    <section className="relative w-full overflow-hidden bg-brand-dark px-6 py-24 font-sans text-white antialiased lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark-mid/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,184,167,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-14">
        <AnimateInView animateOnMount className="grid items-end gap-6 border-b border-white/10 pb-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent-light">
              What We Cover
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="text-base font-medium leading-relaxed text-white/70 lg:col-span-5">
              {intro}
            </p>
          )}
        </AnimateInView>

        {items.length > 0 && (
          <motion.div
            className={`grid grid-cols-1 gap-4 ${gridClass}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {items.map((item, i) => (
              <motion.div
                key={`${item}-${i}`}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/95 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-brand-accent/40 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 text-brand-accent transition-transform duration-300 group-hover:scale-105">
                  <FaCheckCircle className="text-sm" />
                </div>
                <p className="pt-1.5 text-[15px] font-medium leading-relaxed text-slate-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {idealFor.length > 0 && (
          <AnimateInView animateOnMount delay={0.08}>
            <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.2)] lg:p-10">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/15 text-lg text-brand-accent ring-1 ring-brand-accent/20">
                    <FaUserCheck />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-brand-dark">Ideal For</h3>
                    <p className="mt-0.5 text-sm text-slate-500">
                      Who benefits most from this service
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-bold text-brand-accent">
                  {idealFor.length} {idealFor.length === 1 ? 'group' : 'groups'}
                </span>
              </div>

              <motion.div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {idealFor.map((item, i) => (
                  <motion.div
                    key={`${item}-${i}`}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#FAFBFD] px-4 py-3.5 transition-colors hover:border-brand-accent/25 hover:bg-white"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-brand-accent" />
                    <span className="text-sm font-medium leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimateInView>
        )}
      </div>
    </section>
  );
};

export default ServiceDetailCoverage;
