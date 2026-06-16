import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServiceDetailCoverage = ({ title, intro, items = [], idealFor = [] }) => {
  return (
    <section className="w-full bg-brand-dark py-24 px-6 lg:px-10 font-sans antialiased text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-black tracking-[0.2em] text-brand-accent-light uppercase">
            Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">{title}</h2>
          {intro && <p className="text-sm text-white/70 leading-relaxed">{intro}</p>}
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <FaCheckCircle className="text-brand-accent-light shrink-0 mt-0.5 text-sm" />
                <span className="text-sm text-white/85 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {idealFor.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent-light">
                Ideal For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {idealFor.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/75">
                    <FaCheckCircle className="text-brand-accent-light text-xs shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCoverage;
