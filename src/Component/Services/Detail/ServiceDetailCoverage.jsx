import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import AnimateInView, { fadeUp, slideFromLeft, staggerContainer } from '../AnimateInView';

const ServiceDetailCoverage = ({ title, intro, items = [], idealFor = [] }) => {
  return (
    <section className="w-full bg-brand-dark px-6 py-24 font-sans antialiased text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <AnimateInView variants={slideFromLeft} className="space-y-4 lg:col-span-5">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent-light">
            Coverage
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="text-sm leading-relaxed text-white/70">{intro}</p>}
        </AnimateInView>

        <div className="space-y-8 lg:col-span-7">
          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-brand-accent-light" />
                <span className="text-sm leading-relaxed text-white/85">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {idealFor.length > 0 && (
            <AnimateInView delay={0.1} className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent-light">
                Ideal For
              </h3>
              <motion.div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {idealFor.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-2 text-sm text-white/75"
                  >
                    <FaCheckCircle className="shrink-0 text-xs text-brand-accent-light" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </AnimateInView>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCoverage;
