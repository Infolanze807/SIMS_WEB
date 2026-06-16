import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
    <section className="w-full bg-[#FAFBFD] py-24 px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-[0.2em] text-brand-accent uppercase">
            {useExplore ? 'More From SIMS' : 'Explore More'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-slate-500 leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div
          className={`grid gap-6 ${
            display.length >= 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {display.map((item, index) => {
            const slug = item.slug;
            const cardKey = `${slug || item.title}-${index}`;
            const card = (
              <div className="group bg-white border border-slate-100 rounded-[24px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {item.image && (
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 space-y-2 flex-1 flex flex-col">
                  <h3 className="font-bold text-brand-dark group-hover:text-brand-accent transition-colors text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  {slug && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-brand-accent pt-1">
                      Learn more <FaArrowRight className="text-[8px]" />
                    </span>
                  )}
                </div>
              </div>
            );

            return slug ? (
              <Link key={cardKey} to={`/services/${slug}`}>
                {card}
              </Link>
            ) : (
              <div key={cardKey}>{card}</div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-dark-mid transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailRelated;
