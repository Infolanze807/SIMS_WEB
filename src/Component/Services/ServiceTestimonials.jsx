import React from 'react';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const ServiceTestimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Mohammed R.',
      role: 'STD Test at Home',
      location: 'Dubai',
      initials: 'MR',
      text: 'I used their STD test at home service — the process was private, quick, and professional. Results came on time, and the staff ensured confidentiality throughout.',
    },
    {
      id: 2,
      name: 'Omar T.',
      role: 'Pediatrician at Home',
      location: 'Dubai',
      initials: 'OT',
      text: 'SIMS Healthcare provided excellent care when I needed a pediatrician urgently at home. Dr. Sarah was very gentle with my daughter and resolved her fever issue promptly.',
    },
    {
      id: 3,
      name: 'Zahra M.',
      role: 'Health Check-up at Home',
      location: 'Dubai',
      initials: 'ZM',
      text: 'They conducted a full health check-up at home for my elderly parents. The lab technician was punctual, and the results were shared digitally Convenient.Thank you SIMS!',
    },
  ];

  return (
    <section className="w-full bg-white py-28 px-6 lg:px-10 font-sans antialiased text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25b8a7]/10 text-[#25b8a7] text-[10px] font-black tracking-widest uppercase">
            <FaStar className="text-[9px]" /> <span>Verified Patient Feedback</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#003d4d] leading-none">
            Hear from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25b8a7] to-[#0a5568]">Our Patients</span>
          </h2>

          <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-[0.25em] italic">
            Real Stories. <span className="text-[#25b8a7]">Real Results.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-4">
          {reviews.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#FAFBFD] border border-slate-100 rounded-[36px] p-8 space-y-8 relative shadow-[0_20px_40px_rgba(0,61,77,0.02)] hover:shadow-[0_30px_60px_rgba(0,61,77,0.06)] hover:bg-white transition-all duration-500 group ${
                index === 1 ? 'md:translate-y-6 border-[#25b8a7]/20 bg-gradient-to-b from-[#FAFBFD] to-white' : ''
              }`}
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#25b8a7]/10 rounded-[36px] transition-colors pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-2xl bg-[#003d4d]/5 group-hover:bg-[#25b8a7]/10 flex items-center justify-center text-[#003d4d] group-hover:text-[#25b8a7] transition-colors duration-300">
                  <FaQuoteLeft className="text-xs" />
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#25b8a7] text-[10px]" />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed tracking-wide min-h-[110px]">
                {item.text}
              </p>

              <div className="w-full h-[1px] bg-slate-200/60" />

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#003d4d] to-[#0a5568] text-[#25b8a7] font-black text-sm tracking-tighter flex items-center justify-center shadow-inner group-hover:from-[#25b8a7] group-hover:to-[#0a5568] group-hover:text-white transition-all duration-500">
                  {item.initials}
                </div>

                <div className="space-y-0.5 text-left">
                  <h4 className="text-sm font-black text-[#003d4d] tracking-tight group-hover:text-[#25b8a7] transition-colors">
                    {item.name}
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-[11px] font-bold text-slate-400">
                    <span className="text-[#25b8a7]/90">{item.role}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="flex items-center gap-0.5 font-medium text-slate-400/80">
                      <FaMapMarkerAlt className="text-[9px]" /> {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
