import React from 'react';

const ACCENTS = [
  'from-brand-dark to-brand-dark-mid',
  'from-brand-accent to-brand-dark-mid',
  'from-brand-dark-mid to-brand-accent',
];

const ServiceDetailSteps = ({ title, subtitle, steps = [] }) => {
  if (!steps.length) return null;

  return (
    <section className="w-full bg-[#FAFBFD] py-24 px-6 lg:px-10 font-sans antialiased relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end border-b border-slate-200/80 pb-10">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-black tracking-widest uppercase">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm text-slate-500 leading-relaxed">
            {subtitle ||
              'Book in minutes. Our DHA-certified team arrives at your location across Dubai — fast, private, and professional.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

          {steps.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="relative bg-white rounded-[32px] border border-slate-100 p-8 space-y-5 hover:shadow-[0_25px_50px_rgba(0,61,77,0.08)] hover:-translate-y-1 transition-all duration-500 group overflow-hidden"
            >
              <div
                className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${ACCENTS[i % ACCENTS.length]}`}
              />
              <div className="flex items-center justify-between pt-2">
                <span className="h-14 w-14 rounded-2xl bg-brand-dark text-white font-black flex items-center justify-center text-xl shadow-lg group-hover:scale-105 transition-transform">
                  {i + 1}
                </span>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-dark leading-snug">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              {item.points?.length > 0 && (
                <ul className="space-y-2 pt-1 border-t border-slate-100">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSteps;
