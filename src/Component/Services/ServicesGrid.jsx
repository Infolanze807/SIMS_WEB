import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { SERVICES_CATALOG } from '../../data/servicesCatalog';
import AnimateInView, { fadeUp, staggerContainer } from './AnimateInView';

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#FAFBFD] px-4 py-28 font-sans antialiased selection:bg-brand-accent/20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateInView className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            <span>Certified by SIMS Home Healthcare</span>
          </div>
          <h2 className="text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Home Healthcare{' '}
            <span className="relative inline-block text-brand-accent">Services in Dubai</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-slate-500 md:text-base">
            From Doctor Visits to Lab Tests — Complete Care at Your Doorstep
          </p>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SERVICES_CATALOG.map((service, idx) => (
            <motion.article
              key={service.slug}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,61,77,0.12)]"
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black tracking-widest text-brand-dark backdrop-blur-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-3 p-6 sm:p-7">
                  <h3 className="text-lg font-bold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-accent sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
                  <span className="inline-flex items-center gap-2 pt-1 text-xs font-black uppercase tracking-widest text-brand-accent">
                    <span>Learn more</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-accent/10 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                      <FaArrowRight className="text-[9px]" />
                    </span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
