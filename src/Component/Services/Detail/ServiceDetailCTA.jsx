import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ServiceDetailCTA = ({ title, description, buttonText }) => {
  return (
    <section className="w-full py-20 px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-accent p-10 sm:p-14 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">{title}</h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{description}</p>
          <a
            href="tel:+971525231028"
            className="inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-2xl font-black text-sm hover:bg-brand-accent-light transition-all shadow-lg"
          >
            <FaPhoneAlt />
            {buttonText || 'Call +971 5252 310 28'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCTA;
