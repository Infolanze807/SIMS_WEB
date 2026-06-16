import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const ServiceWellnessBanner = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans antialiased">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-accent" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,195,192,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-24 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/10 border border-white/20 text-brand-accent-light mb-6">
          <FaHeartbeat className="text-xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight">
          We are pleased to offer you the chance to{' '}
          <span className="text-brand-accent-light">live life healthy</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/70 font-medium max-w-2xl mx-auto">
          Trusted home healthcare in Dubai — professional, private, and always within reach.
        </p>
      </div>
    </section>
  );
};

export default ServiceWellnessBanner;
