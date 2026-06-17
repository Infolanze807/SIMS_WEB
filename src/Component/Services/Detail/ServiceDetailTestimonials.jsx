import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ServiceDetailTestimonials = ({ testimonials = [] }) => {
  if (!testimonials.length) return null;

  const gridClass =
    testimonials.length === 1
      ? 'grid-cols-1 max-w-xl mx-auto'
      : testimonials.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : testimonials.length >= 4
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          : 'grid-cols-1 md:grid-cols-3';

  return (
    <section className="w-full bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-7xl space-y-14">
        <AnimateInView className="space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
            <FaStar className="text-[9px]" /> Verified Patient Feedback
          </div>
          <h2 className="text-3xl font-black text-brand-dark sm:text-4xl">
            Hear from <span className="text-brand-accent">Our Patients</span>
          </h2>
          <p className="text-sm font-bold italic text-slate-400">Real Stories. Real Results.</p>
        </AnimateInView>

        <motion.div
          className={`grid ${gridClass} gap-8`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`space-y-6 rounded-[32px] border border-slate-100 bg-[#FAFBFD] p-8 ${
                index === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <FaQuoteLeft className="text-sm text-brand-accent" />
              <p className="min-h-[100px] text-sm leading-relaxed text-slate-600">{item.text}</p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-dark to-brand-dark-mid text-xs font-black text-brand-accent-light">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-brand-dark">{item.name}</p>
                  <p className="flex items-center gap-1 text-[11px] text-slate-400">
                    <span className="text-brand-accent">{item.role}</span>
                    <FaMapMarkerAlt className="text-[8px]" /> {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailTestimonials;
