import React from 'react';
import { FaUserMd, FaShieldAlt, FaBriefcaseMedical, FaHeartbeat } from 'react-icons/fa';

const ExperienceCare = () => {
  return (
    <section className="w-full bg-[#002e3a] py-28 px-6 lg:px-10 font-sans antialiased text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        <div className="lg:col-span-7 space-y-10">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25b8a7]/10 border border-[#25b8a7]/20 text-[#25b8a7] text-[10px] font-black tracking-widest uppercase">
              <span>Dubai Clinical Authority</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Experience Care on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25b8a7] to-[#4fc3c0]">
                Your Home.
              </span>
            </h2>
            
            <div className="space-y-2 pt-2">
              <p className="text-base sm:text-lg font-bold text-slate-200 tracking-tight">
                Redefining Home-Based Healthcare in Dubai
              </p>
              <p className="text-xs font-bold text-[#25b8a7] uppercase tracking-widest">
                Professional, Personalized, 24/7 Medical Support Wherever You Are
              </p>
            </div>
          </div>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#25b8a7] to-teal-400 rounded-full"></div>

          <div className="space-y-6 text-slate-300 font-normal text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              At SIMS Home Healthcare, we are redefining how healthcare is delivered in Dubai. By providing healthcare 24/7, our mission is to ensure that expert medical care is always within reach—no matter where you are. From your home to your workplace or even on the go, our licensed doctors, nurses, physiotherapists, and healthcare professionals deliver prompt, personalized, and reliable support, around the clock. Your health, our priority—anytime, anywhere.
            </p>
            
            <p className="border-l-4 border-[#25b8a7] pl-4 italic text-slate-200 bg-white/5 py-4 pr-4 rounded-r-2xl backdrop-blur-sm border-t border-b border-r border-white/5">
              As a premier provider of home-based medical services, we merge clinical expertise with state-of-the-art technology to achieve meaningful results. Our business-oriented approach guarantees efficient service delivery, reduced wait times, and outstanding customer care that accommodates the hectic lifestyles of individuals, families, and corporate clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl shadow-sm hover:bg-white/10 transition-colors duration-300">
              <FaUserMd className="text-[#25b8a7] text-base" />
              <span className="text-xs font-bold text-slate-200">Clinical Expertise</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl shadow-sm hover:bg-white/10 transition-colors duration-300">
              <FaShieldAlt className="text-teal-400 text-base" />
              <span className="text-xs font-bold text-slate-200">Reduced Wait Times</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl shadow-sm hover:bg-white/10 transition-colors duration-300">
              <FaBriefcaseMedical className="text-[#25b8a7] text-base" />
              <span className="text-xs font-bold text-slate-200">Corporate Standards</span>
            </div>
          </div>

        </div>

        <div className="lg:col-span-5 relative w-full flex justify-center items-center min-h-[500px]">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#25b8a7]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="absolute -inset-4 border-2 border-dashed border-white/10 rounded-[64px] pointer-events-none scale-95"></div>

          <div className="relative w-full max-w-[380px] bg-white/[0.03] backdrop-blur-md rounded-[48px] p-4 border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] group overflow-hidden">
            
            <div className="w-full aspect-[4/4] rounded-[36px] overflow-hidden relative border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="SIMS Elite Medical Team Group" 
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e3a]/60 via-transparent to-transparent"></div>
            </div>

            <div className="w-full bg-gradient-to-b from-[#25b8a7] to-[#0a5568] text-white p-6 rounded-[32px] mt-4 shadow-xl text-center relative overflow-hidden group-hover:brightness-105 transition-all duration-300">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="space-y-1 relative z-10">
                <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm">
                  24/7 MEDICAL
                </span>
                <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[#002e3a] leading-none">
                  SUPPORT
                </span>
                <span className="block text-[10px] font-bold text-slate-100 uppercase tracking-widest pt-2">
                  HOME-BASED MEDICAL SERVICES
                </span>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/20 flex flex-col items-center justify-center">
                <span className="text-[11px] font-black text-white tracking-wider uppercase">SIMS HEALTHCARE</span>
                <span className="text-[8px] font-bold text-teal-100 uppercase tracking-tight mt-0.5">Trusted Healthcare. Delivered to You.</span>
              </div>
            </div>

          </div>

          <div className="absolute -bottom-6 right-2 sm:-right-4 bg-white/[0.08] backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-xl flex items-center gap-3 z-20">
            <div className="h-3 w-3 rounded-full bg-[#25b8a7] relative flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25b8a7] opacity-75 animate-ping"></span>
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-black uppercase text-slate-400 tracking-wider leading-none">Status</span>
              <span className="block text-xs font-bold text-white mt-1">Active Across Dubai</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceCare;