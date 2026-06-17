import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserMd, FaClock, FaCheckCircle } from 'react-icons/fa';
import AnimateInView, { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from '../Services/AnimateInView';

const HealthcareAbout = () => {
  return (
    <section className="w-full bg-[#003d4d] py-24 px-6 lg:px-10 font-sans antialiased text-white relative overflow-hidden select-none">
      
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#25b8a7]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        <AnimateInView variants={slideFromLeft} className="relative flex w-full items-center justify-center lg:col-span-5">
          
          <div className="relative w-full max-w-md aspect-square rounded-[48px] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            
            <div className="absolute -inset-2 rounded-[54px] border-2 border-dashed border-[#25b8a7]/30 pointer-events-none"></div>
            
            <div className="w-full h-full rounded-[36px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="SIMS Premium Medical Care" 
                className="w-full h-full object-cover brightness-[0.90] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002833] via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white text-[#003d4d] p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4 max-w-[220px]">
              <div className="h-11 w-11 rounded-2xl bg-[#25b8a7] text-white flex items-center justify-center shrink-0 shadow-lg">
                <FaUserMd className="text-xl" />
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight leading-none">30 MIN</span>
                <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Response Time</span>
              </div>
            </div>

          </div>
        </AnimateInView>

        <AnimateInView variants={slideFromRight} className="space-y-8 lg:col-span-7">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#25b8a7] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25b8a7] animate-pulse"></span>
              <span>About Our Institution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
              Trusted Healthcare. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25b8a7] to-cyan-300">
                Delivered Direct To You.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg font-medium text-slate-300 tracking-tight max-w-2xl">
              Hospital-Grade Medical Standards Brought Into Your Personal Space.
            </p>
          </div>

          <div className="space-y-5 text-slate-300/90 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              At SIMS Home Healthcare, we are revolutionizing access to quality medical assistance by offering clinical-grade services directly inside your private environment. Whether you are at home, relaxing in a hotel room, or working at your office, our elite medical framework eliminates the logistical stress of hospital lines.
            </p>
            <p>
              Our expert staff consists exclusively of highly certified, licensed doctors, nurses, and specialists who operate 24 hours a day, 7 days a week, to bring prompt, trustworthy, and tailored medical management right when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-inner">
              <div className="h-10 w-10 rounded-xl bg-[#25b8a7]/20 text-[#25b8a7] flex items-center justify-center shrink-0 border border-[#25b8a7]/30">
                <FaShieldAlt className="text-base" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white tracking-tight">DHA Accredited Standards</h5>
                <p className="text-xs text-slate-400 mt-0.5 leading-normal">Fully certified professionals adhering strictly to international medical protocols.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-inner">
              <div className="h-10 w-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
                <FaClock className="text-base" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white tracking-tight">24/7 Uninterrupted Coverage</h5>
                <p className="text-xs text-slate-400 mt-0.5 leading-normal">From midnight emergencies to early morning diagnostics, we are completely awake.</p>
              </div>
            </div>

          </div>

          <motion.div
            className="grid grid-cols-1 gap-3 pt-2 text-xs font-medium text-slate-200 sm:grid-cols-2 sm:text-sm"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Free Consultation & Guidance',
              'On-Site Laboratory Diagnostics',
              'Elite DHA Certified Practitioners',
              'Full Dubai Territorial Coverage',
            ].map((text) => (
              <motion.div key={text} variants={fadeUp} className="flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-[#25b8a7]" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

        </AnimateInView>

      </div>
    </section>
  );
};

export default HealthcareAbout;