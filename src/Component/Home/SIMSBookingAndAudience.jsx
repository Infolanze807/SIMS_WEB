import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCheckCircle, FaUserMd, FaHospitalUser, FaBuilding, FaUserClock, FaPaperPlane } from 'react-icons/fa';
import AnimateInView, { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from '../Services/AnimateInView';

const SIMSBookingAndAudience = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    service: '',
    time: '',
    concern: ''
  });

  return (
    <div className="w-full font-sans antialiased text-slate-900 select-none">
      <section className="w-full bg-white py-24 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#25b8a7]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 left-12 w-64 h-64 bg-[#003d4d]/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <AnimateInView variants={slideFromLeft} className="space-y-8 lg:col-span-5 lg:sticky lg:top-12">
            <div className="space-y-3">
              <span className="text-xs font-black tracking-[0.2em] text-[#25b8a7] uppercase block">
                On-Demand Access
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#003d4d] leading-[1.08]">
                With access to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25b8a7] to-[#0a5568]">
                  24 Hour
                </span> <br />
                at Your Door
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              Whether it's an emergency or a scheduled home healthcare visit, our licensed doctors, nurses, and medical professionals are just a click away. Fill out the form below and we'll respond immediately.
            </p>

            <div className="w-16 h-[2px] bg-[#25b8a7]/40 rounded-full"></div>

            <div className="space-y-4">
              <h4 className="text-xs font-black text-[#003d4d] uppercase tracking-wider">
                Quick Notes for Trust & Conversion:
              </h4>
              
              <div className="space-y-3">
                {[
                  'We respond within minutes of your request',
                  'Emergency cases get priority handling',
                  'All submissions are 100% confidential & secure',
                ].map((text, i) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100/70 bg-[#FAFBFD] p-3.5 shadow-sm"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FaCheckCircle className="shrink-0 text-base text-[#25b8a7]" />
                    <span className="text-xs font-bold text-slate-700 sm:text-sm">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView variants={slideFromRight} className="w-full rounded-[40px] border border-slate-100 bg-[#FAFBFD] p-8 shadow-[0_30px_60px_rgba(0,61,77,0.04)] sm:p-10 lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Enter Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Your name" 
                  className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Contact No.</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Your Contact Number" 
                    className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end">
                <div className="sm:col-span-7 space-y-2">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide block">Gender</label>
                  <div className="flex items-center gap-3">
                    {['Men', 'Female', 'Other'].map((g) => (
                      <label key={g} className="flex-1 bg-white border border-slate-200/80 px-3 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-700 cursor-pointer shadow-sm hover:border-[#25b8a7]/50 transition-colors">
                        <input type="radio" name="gender" value={g} className="accent-[#25b8a7]" />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Age</label>
                  <input 
                    type="number" 
                    placeholder="Enter Your Age" 
                    className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Service Required</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm appearance-none cursor-pointer">
                      <option>Service Required</option>
                      <option>Doctor Consultation</option>
                      <option>Nursing Care</option>
                      <option>Physiotherapy</option>
                      <option>IV Therapy</option>
                      <option>Elderly Care</option>
                      <option>Post-Surgery Care</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Preferred Time to Contact</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200/80 px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm appearance-none cursor-pointer">
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#003d4d] uppercase tracking-wide">Health Concern</label>
                <textarea 
                  rows="4"
                  placeholder="Enter Your Health Concern in detail" 
                  className="w-full bg-white border border-slate-200/80 p-4 rounded-xl text-sm font-medium focus:outline-none focus:border-[#25b8a7] transition-colors shadow-sm resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25b8a7] to-[#0a5568] px-10 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_10px_25px_rgba(37,184,167,0.25)] transition-all duration-300 hover:from-[#1fa394] hover:to-[#084656] hover:shadow-none sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Submit Request</span>
                <FaPaperPlane className="text-[10px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.button>

            </form>
          </AnimateInView>

        </div>
      </section>

      <section className="w-full bg-[#002e3a] py-28 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#25b8a7]/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <AnimateInView variants={slideFromLeft} className="relative z-10 space-y-10 lg:col-span-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-sm font-extrabold text-[#25b8a7] tracking-wider block uppercase">
                  SIMS Home Healthcare
                </span>
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
                  Who We Serve
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm font-bold text-slate-300 italic tracking-wide">
                We cater to a wide array of patients and clients, including:
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <FaBuilding className="text-sm" />, iconClass: 'bg-[#25b8a7]/20 border-[#25b8a7]/30 text-[#25b8a7]', title: 'Hotels & Tourism', desc: 'Partners in need of on-site medical services' },
                { icon: <FaHospitalUser className="text-sm" />, iconClass: 'bg-teal-500/20 border-teal-500/30 text-teal-400', title: 'Families & Individuals', desc: 'Seeking medical care at home' },
                { icon: <FaUserMd className="text-sm" />, iconClass: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400', title: 'Corporate Clients', desc: 'Looking for workplace wellness solutions' },
                { icon: <FaUserClock className="text-sm" />, iconClass: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400', title: 'Elderly Patients', desc: 'Needing continuous care' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.iconClass}`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-extrabold text-white">{item.title}</h5>
                    <p className="text-xs font-normal leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-4 bg-white/[0.04] border border-white/10 p-4 rounded-3xl backdrop-blur-sm">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#25b8a7] to-teal-500 text-white flex items-center justify-center shadow-md shadow-[#25b8a7]/20">
                <FaPhoneAlt className="text-sm animate-pulse" />
              </div>
              <div className="text-left pr-6">
                <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">24/7 Priority Emergency Line</span>
                <span className="block text-xl sm:text-2xl font-black text-[#25b8a7] tracking-tight mt-1">+971 5252 310 28</span>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView variants={slideFromRight} className="relative z-10 flex min-h-[440px] w-full items-center justify-center lg:col-span-6">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(37,184,167,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none rounded-[40px]"></div>

            <div className="relative w-full max-w-[440px] aspect-square rounded-[50px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.3)] bg-slate-900/40 group">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="SIMS Associated Professional Practitioners Group" 
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-[1200ms] ease-out mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e3a] via-[#002e3a]/20 to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl shadow-lg pointer-events-none group-hover:bg-[#25b8a7] group-hover:text-white transition-all duration-500">
                <span>+</span>
              </div>
            </div>
          </AnimateInView>

        </div>
      </section>

    </div>
  );
};

export default SIMSBookingAndAudience;