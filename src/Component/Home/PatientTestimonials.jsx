import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';

const reviews = [
  {
    id: 1,
    name: 'Fatima Al Mazrouei',
    role: 'Post-Surgery Care',
    location: 'Jumeirah, Dubai',
    initials: 'FM',
    text: 'SIMS Health Care provided exceptional nursing support after my surgery. The nurse was kind, professional, and always punctual. Truly a lifesaver at home!',
  },
  {
    id: 2,
    name: 'Omar Khan',
    role: 'Hotel Doctor Service',
    location: 'Downtown Dubai',
    initials: 'OK',
    text: 'I booked a doctor on call while staying in a hotel. The service was quick, discreet, and the doctor was DHA-certified and very thorough. Highly recommended!',
  },
  {
    id: 3,
    name: 'Ayesha Hassan',
    role: 'Home Lab Diagnostics',
    location: 'Marina, Dubai',
    initials: 'AH',
    text: '"Very satisfied with lab test at home by SIMS Health Care. Staff was polite, punctual, were accurate and delivered with care and total privacy ensured."',
  },
];

const PatientTestimonials = () => {
  return (
    <section className="w-full select-none overflow-hidden bg-white px-6 py-28 font-sans antialiased text-slate-900 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-16">
        <AnimateInView className="mx-auto max-w-2xl space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#25b8a7]/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#25b8a7]">
            <FaStar className="text-[9px]" /> <span>Verified Patient Feedback</span>
          </div>

          <h2 className="text-4xl font-black leading-none tracking-tight text-[#003d4d] sm:text-5xl">
            Hear from{' '}
            <span className="bg-gradient-to-r from-[#25b8a7] to-[#0a5568] bg-clip-text text-transparent">
              Our Patients
            </span>
          </h2>

          <p className="text-xs font-bold uppercase italic tracking-[0.25em] text-slate-400 sm:text-sm">
            Real Stories. <span className="text-[#25b8a7]">Real Results.</span>
          </p>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-1 items-start gap-8 pt-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group relative space-y-8 rounded-[36px] border border-slate-100 bg-[#FAFBFD] p-8 shadow-[0_20px_40px_rgba(0,61,77,0.02)] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,61,77,0.06)] ${
                index === 1
                  ? 'border-[#25b8a7]/20 bg-gradient-to-b from-[#FAFBFD] to-white md:translate-y-6'
                  : ''
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[36px] border-2 border-transparent transition-colors group-hover:border-[#25b8a7]/10" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#003d4d]/5 text-[#003d4d] transition-colors duration-300 group-hover:bg-[#25b8a7]/10 group-hover:text-[#25b8a7]">
                  <FaQuoteLeft className="text-xs" />
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[10px] text-[#25b8a7]" />
                  ))}
                </div>
              </div>

              <p className="min-h-[110px] text-sm font-normal leading-relaxed tracking-wide text-slate-600 sm:text-base">
                {item.text}
              </p>

              <div className="h-[1px] w-full bg-slate-200/60" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#003d4d] to-[#0a5568] text-sm font-black tracking-tighter text-[#25b8a7] shadow-inner transition-all duration-500 group-hover:from-[#25b8a7] group-hover:to-[#0a5568] group-hover:text-white">
                  {item.initials}
                </div>

                <div className="space-y-0.5 text-left">
                  <h4 className="text-sm font-black tracking-tight text-[#003d4d] transition-colors group-hover:text-[#25b8a7]">
                    {item.name}
                  </h4>

                  <div className="flex flex-col text-[11px] font-bold text-slate-400 sm:flex-row sm:items-center sm:gap-2">
                    <span className="text-[#25b8a7]/90">{item.role}</span>
                    <span className="hidden text-slate-300 sm:inline">•</span>
                    <span className="flex items-center gap-0.5 font-medium text-slate-400/80">
                      <FaMapMarkerAlt className="text-[9px]" /> {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
