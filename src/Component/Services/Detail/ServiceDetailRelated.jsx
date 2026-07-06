import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const ServiceDetailRelated = ({
  title = 'Explore more of our home health offerings',
  subtitle,
  items = [],
  services = [],
}) => {
  const useExplore = items.length > 0;
  const display = useExplore ? items : services;

  if (!display.length) return null;

  return (
    <section className="w-full bg-[#FAFBFD] px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <AnimateInView animateOnMount className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent">
            {useExplore ? 'More From SIMS' : 'Explore More'}
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="text-sm leading-relaxed text-slate-500">{subtitle}</p>}
        </AnimateInView>

        <motion.div
          className={`grid gap-7 lg:gap-8 ${
            display.length >= 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {display.map((item, index) => {
            const slug = item.slug;
            const cardKey = `${slug || item.title}-${index}`;
            const card = (
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-b from-slate-100 to-white shadow-[0_14px_45px_rgba(0,61,77,0.1)] transition-all duration-500 group-hover:shadow-[0_22px_55px_rgba(0,61,77,0.16)]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-dark to-brand-accent">
                      <span className="px-6 text-center text-lg font-bold text-white">{item.title}</span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(0,61,77,0.12)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-0">
                    <h3 className="text-lg font-bold tracking-tight text-brand-dark sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      DHA Certified · SIMS Healthcare
                    </p>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-brand-dark/20 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:p-6">
                    <div className="translate-y-4 space-y-3 transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="line-clamp-4 text-sm leading-relaxed text-white/85">
                          {item.description}
                        </p>
                      )}
                      {slug && (
                        <span className="inline-flex items-center gap-2 pt-1 text-xs font-black uppercase tracking-widest text-brand-accent">
                          <span>Learn more</span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-accent/20 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                            <FaArrowRight className="text-[9px]" />
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );

            return slug ? (
              <Link key={cardKey} to={`/services/${slug}`} className="block">
                {card}
              </Link>
            ) : (
              <div key={cardKey}>{card}</div>
            );
          })}
        </motion.div>

        <AnimateInView animateOnMount className="text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-8 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-brand-dark-mid"
            >
              View All Services
            </Link>
          </motion.div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default ServiceDetailRelated;
