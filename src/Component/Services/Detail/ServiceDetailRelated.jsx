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
        <AnimateInView className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent">
            {useExplore ? 'More From SIMS' : 'Explore More'}
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="text-sm leading-relaxed text-slate-500">{subtitle}</p>}
        </AnimateInView>

        <motion.div
          className={`grid gap-6 ${
            display.length >= 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {display.map((item, index) => {
            const slug = item.slug;
            const cardKey = `${slug || item.title}-${index}`;
            const card = (
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white transition-all duration-300 hover:shadow-lg"
              >
                {item.image && (
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col space-y-2 p-5">
                  <h3 className="text-sm font-bold text-brand-dark transition-colors group-hover:text-brand-accent">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                  {slug && (
                    <span className="inline-flex items-center gap-1 pt-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
                      Learn more <FaArrowRight className="text-[8px]" />
                    </span>
                  )}
                </div>
              </motion.div>
            );

            return slug ? (
              <Link key={cardKey} to={`/services/${slug}`}>
                {card}
              </Link>
            ) : (
              <div key={cardKey}>{card}</div>
            );
          })}
        </motion.div>

        <AnimateInView className="text-center">
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
