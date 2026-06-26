import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ServiceContactCTA = () => {
  return (
    <section className="w-full font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[32px] overflow-hidden shadow-[0_25px_50px_rgba(0,61,77,0.1)]">
          <div className="bg-brand-dark px-8 sm:px-12 py-12 sm:py-14 flex items-center">
            <div className="space-y-3">
              <span className="text-[10px] font-black tracking-[0.2em] text-brand-accent-light uppercase">
                SIMS Home Healthcare
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                Get in touch with our professionals
              </h3>
              <p className="text-sm text-white/60 max-w-sm">
                Licensed DHA-certified team ready to assist you 24/7 across Dubai.
              </p>
            </div>
          </div>

          <a
            href="tel:+971525231028"
            className="bg-gradient-to-r from-brand-accent to-brand-dark-mid px-8 sm:px-12 py-12 sm:py-14 flex items-center gap-5 group hover:brightness-105 transition-all"
          >
            <div className="h-16 w-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/70">
                Call Us Anytime
              </p>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                +971 05252 310 28
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactCTA;
