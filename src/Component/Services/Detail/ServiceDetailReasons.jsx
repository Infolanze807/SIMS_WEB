import React from 'react';
import {
  FaClock,
  FaHome,
  FaShieldAlt,
  FaUserMd,
  FaHeartbeat,
  FaCheckCircle,
} from 'react-icons/fa';

const ICONS = [FaClock, FaHome, FaUserMd, FaShieldAlt, FaHeartbeat, FaCheckCircle];

const ServiceDetailReasons = ({ title, subtitle, reasons = [] }) => {
  const gridClass =
    reasons.length >= 6
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : reasons.length === 5
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="w-full bg-[#FAFBFD] py-24 px-6 lg:px-10 font-sans antialiased relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-black tracking-widest uppercase">
            Why Choose SIMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base text-slate-500 font-medium leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className={`grid ${gridClass} gap-6`}>
          {reasons.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-100 rounded-[28px] p-7 space-y-4 hover:shadow-[0_25px_50px_rgba(0,61,77,0.08)] hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-accent/15 to-brand-accent/5 text-brand-accent flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <span className="text-3xl font-black text-slate-100 group-hover:text-brand-accent/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-dark leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailReasons;
