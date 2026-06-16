import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceDetailIntro = ({ eyebrow = 'About This Service', title, paragraphs = [] }) => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          <span className="text-xs font-black tracking-[0.2em] text-brand-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight">
            {title}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-black text-brand-accent uppercase tracking-widest hover:text-brand-dark transition-colors"
          >
            Learn More About Us →
          </NavLink>
        </div>

        <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
          {[
            { label: 'Medical Staff', value: '50+' },
            { label: 'UAE Experience', value: '10+ Yrs' },
            { label: 'Patients Covered', value: '10K+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FAFBFD] border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-2xl font-black text-brand-accent">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailIntro;
