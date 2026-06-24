import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimateInView, { fadeUp, slideFromLeft, staggerContainer } from '../AnimateInView';

const ServiceDetailIntro = ({ eyebrow = 'About This Service', title, paragraphs = [] }) => {
  return (
    <section className="w-full bg-white px-6 py-20 font-sans antialiased lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <AnimateInView animateOnMount variants={slideFromLeft} className="space-y-6 lg:col-span-8">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent">{eyebrow}</span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            {title}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-sm leading-relaxed text-slate-600 sm:text-base"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-accent transition-colors hover:text-brand-dark"
          >
            Learn More About Us →
          </NavLink>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-3 gap-4 lg:col-span-4 lg:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: 'Medical Staff', value: '50+' },
            { label: 'UAE Experience', value: '10+ Yrs' },
            { label: 'Patients Covered', value: '10K+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-100 bg-[#FAFBFD] p-6 text-center transition-shadow hover:shadow-md"
            >
              <p className="text-2xl font-black text-brand-accent">{stat.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailIntro;
