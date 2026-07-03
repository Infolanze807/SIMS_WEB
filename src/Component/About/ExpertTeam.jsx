import React from 'react';
import AnimateInView from '../Services/AnimateInView';
import DoctorCard from '../DoctorCard';
import { DOCTORS } from '../../data/doctors';

const ExpertTeam = () => (
  <section className="relative overflow-hidden bg-[#FAFBFD] px-6 py-14 font-sans antialiased lg:px-10 lg:py-16">
    <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-accent/8 blur-[90px]" />
    <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-dark/5 blur-[80px]" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <AnimateInView className="mb-10 max-w-2xl">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
          Our Clinical Team
        </span>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
          Meet Our Team Of DHA-Licensed <span className="text-brand-accent">Experts</span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          Our team is composed of general practitioners, emergency care physicians, pediatricians,
          nurses, and wellness professionals, all registered with the Dubai Health Authority (DHA).
        </p>
      </AnimateInView>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {DOCTORS.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  </section>
);

export default ExpertTeam;
