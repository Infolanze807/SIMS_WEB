import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceDetailHero = ({ eyebrow, headline, subheadline, bullets = [], image, title }) => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-brand-dark overflow-hidden font-sans text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark-mid/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,184,167,0.25),transparent_55%)]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="mb-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-light/80 hover:text-white transition-colors"
          >
            ← All Services
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent-light text-[10px] font-black tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-base lg:text-lg text-white/75 font-medium leading-relaxed max-w-2xl">
                {subheadline}
              </p>
            )}

            <div className="grid sm:grid-cols-1 gap-3 pt-2">
              {bullets.map((text, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-accent-light" />
                  <p className="text-sm text-white/85 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+971525231028"
                className="inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-2xl font-black text-sm tracking-wide hover:bg-brand-accent-light transition-all shadow-xl hover:-translate-y-0.5"
              >
                <FaPhoneAlt /> +971 5252 310 28
              </a>
              <span className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent-light px-5 py-4 rounded-2xl text-xs font-black uppercase tracking-widest">
                24/7 Dubai
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-brand-accent/20 rounded-[48px] rotate-2 pointer-events-none" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.4)] aspect-[4/5] max-h-[520px]">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">
                <p className="font-black text-brand-dark text-lg">{title}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  DHA Certified · SIMS Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
