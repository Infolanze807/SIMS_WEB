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
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
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
              className="group"
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-b from-slate-100 to-white shadow-[0_14px_45px_rgba(0,61,77,0.1)] transition-all duration-500 group-hover:shadow-[0_22px_55px_rgba(0,61,77,0.16)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Default pill — visible at rest */}
                  <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(0,61,77,0.12)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-0">
                    <h3 className="text-lg font-bold tracking-tight text-brand-dark sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      DHA Certified · SIMS Home Healthcare
                    </p>
                  </div>

                  {/* Hover details overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-brand-dark/20 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:p-6">
                    <div className="translate-y-4 space-y-3 transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="line-clamp-4 text-sm leading-relaxed text-white/85">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 pt-1 text-xs font-black uppercase tracking-widest text-brand-accent">
                        <span>Learn more</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-accent/20 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                          <FaArrowRight className="text-[9px]" />
                        </span>
                      </span>
                    </div>
                  </div>
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
