import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { SERVICES_CATALOG } from '../../data/servicesCatalog';

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#FAFBFD] py-28 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-brand-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold tracking-wider uppercase">
            <span>Certified by SIMS Home Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Home Healthcare{' '}
            <span className="text-brand-accent relative inline-block">Services in Dubai</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            From Doctor Visits to Lab Tests — Complete Care at Your Doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES_CATALOG.map((service, idx) => (
            <article
              key={service.slug}
              className="group bg-white rounded-[28px] border border-slate-100 overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,61,77,0.12)] hover:-translate-y-1.5"
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-dark text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-accent pt-1 group/btn">
                    <span>Learn more</span>
                    <span className="h-6 w-6 rounded-lg bg-brand-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                      <FaArrowRight className="text-[9px]" />
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
