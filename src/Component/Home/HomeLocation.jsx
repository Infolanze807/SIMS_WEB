import React from 'react';

const MAP_SRC =
  'https://www.google.com/maps?q=AB+Center+207+Sheikh+Zayed+Rd+Al+Barsha+First+Dubai&z=16&output=embed';

const HomeLocation = () => {
  return (
    <section className="bg-[#FAFBFD] px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4">
          <span className="inline-flex rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
            Our Location
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Visit SIMS Home Healthcare
          </h2>
          <p className="text-base font-medium leading-relaxed text-slate-600">
            AB Center, 207 Sheikh Zayed Rd, Al Barsha First, Al Barsha, Dubai. Home and hotel visits
            are available across the city, 24 hours a day.
          </p>
        </div>
        <div className="h-[380px] overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,61,77,0.08)] lg:col-span-8">
          <iframe
            title="SIMS Home Healthcare location"
            src={MAP_SRC}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLocation;
