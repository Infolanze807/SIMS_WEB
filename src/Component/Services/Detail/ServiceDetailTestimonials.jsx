import React from 'react';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

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
    <section className="w-full bg-white py-24 px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-black tracking-widest uppercase">
            <FaStar className="text-[9px]" /> Verified Patient Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">
            Hear from <span className="text-brand-accent">Our Patients</span>
          </h2>
          <p className="text-sm font-bold text-slate-400 italic">Real Stories. Real Results.</p>
        </div>

        <div className={`grid ${gridClass} gap-8`}>
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`bg-[#FAFBFD] border border-slate-100 rounded-[32px] p-8 space-y-6 ${
                index === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <FaQuoteLeft className="text-brand-accent text-sm" />
              <p className="text-slate-600 text-sm leading-relaxed min-h-[100px]">{item.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-dark to-brand-dark-mid text-brand-accent-light font-black text-xs flex items-center justify-center">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-brand-dark">{item.name}</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="text-brand-accent">{item.role}</span>
                    <FaMapMarkerAlt className="text-[8px]" /> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailTestimonials;
