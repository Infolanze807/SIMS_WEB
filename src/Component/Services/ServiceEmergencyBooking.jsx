import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import AnimateInView, { fadeUp, slideFromLeft, slideFromRight } from './AnimateInView';

const SERVICE_OPTIONS = [
  'Service Required',
  'Doctor at Home',
  'Lab Test at Home',
  'Physiotherapy at Home',
  'Nurse Care at Home',
  'Elderly Care',
  'IV Drip & Vitamin Infusion',
  'PCR Test at Home',
  'Health Check-up',
  'Post Operative Care',
  'Other',
];

const ServiceEmergencyBooking = () => {
  return (
    <section className="w-full bg-[#FAFBFD] py-28 px-6 lg:px-10 font-sans antialiased text-slate-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-brand-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        <AnimateInView variants={slideFromLeft} className="space-y-8 lg:col-span-5 lg:sticky lg:top-12">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.2em] text-brand-accent uppercase block">
              With access to
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-dark leading-[1.08]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-dark-mid">
                24 Hour
              </span>{' '}
              Emergency Assistance
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            Whether it&apos;s an emergency or a scheduled home healthcare visit, our licensed
            doctors, nurses, and medical professionals are just a click away. Fill out the form and
            we&apos;ll respond immediately.
          </p>

          <div className="w-16 h-[2px] bg-brand-accent/40 rounded-full" />

          <div className="space-y-3">
            {[
              'We respond within minutes of your request',
              'Emergency cases get priority handling',
              'All submissions are 100% confidential & secure',
            ].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-slate-100/70 bg-white p-3.5 shadow-sm"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <FaCheckCircle className="shrink-0 text-base text-brand-accent" />
                <span className="text-xs font-bold text-slate-700 sm:text-sm">{text}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="tel:+971525231028"
            className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-2xl font-black text-sm tracking-wide hover:bg-brand-dark-mid transition-all shadow-lg"
          >
            <FaPhoneAlt /> +971525231028
          </a>
        </AnimateInView>

        <AnimateInView variants={slideFromRight} className="w-full rounded-[40px] border border-slate-100 bg-white p-8 shadow-[0_30px_60px_rgba(0,61,77,0.04)] sm:p-10 lg:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                Enter Name
              </label>
              <input
                type="text"
                placeholder="Enter Your name"
                className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your E-mail Address"
                  className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                  Contact No.
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end">
              <div className="sm:col-span-7 space-y-2">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide block">
                  Gender
                </label>
                <div className="flex items-center gap-3">
                  {['Men', 'Female', 'Other'].map((g) => (
                    <label
                      key={g}
                      className="flex-1 bg-[#FAFBFD] border border-slate-200/80 px-3 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-700 cursor-pointer shadow-sm hover:border-brand-accent/50 transition-colors"
                    >
                      <input type="radio" name="gender" value={g} className="accent-brand-accent" />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-5 space-y-1.5">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Age"
                  className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                  Service Required
                </label>
                <div className="relative">
                  <select className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm appearance-none cursor-pointer">
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                  Preferred Time to Contact
                </label>
                <div className="relative">
                  <select className="w-full bg-[#FAFBFD] border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm appearance-none cursor-pointer">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-brand-dark uppercase tracking-wide">
                Health Concern
              </label>
              <textarea
                rows="4"
                placeholder="Enter Your Health Concern in detail"
                className="w-full bg-[#FAFBFD] border border-slate-200/80 p-4 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-accent transition-colors shadow-sm resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-accent to-brand-dark-mid px-10 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_10px_25px_rgba(37,184,167,0.25)] transition-all duration-300 hover:from-brand-accent/90 hover:to-brand-dark hover:shadow-none sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Submit</span>
              <FaPaperPlane className="text-[10px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.button>
          </form>
        </AnimateInView>
      </div>
    </section>
  );
};

export default ServiceEmergencyBooking;
