import React from 'react';
import { FaClock, FaUserShield, FaHeartbeat, FaBriefcaseMedical, FaCogs } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-28 px-6 lg:px-10 font-sans antialiased text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 relative w-full flex justify-center items-center min-h-[420px]">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#25b8a7]/10 via-[#003d4d]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

\          <div className="absolute top-12 left-6 w-72 h-72 rounded-[40px] border-2 border-dashed border-[#25b8a7]/20 pointer-events-none"></div>

          <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-[60px] rounded-br-[180px] overflow-hidden shadow-[0_30px_70px_rgba(0,61,77,0.15)] border-4 border-white z-10 group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Home Healthcare Patient Care" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out brightness-[0.98] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d4d]/30 via-transparent to-transparent"></div>
          </div>

         <div className="absolute top-20 -right-4 bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_15px_30px_rgba(0,0,0,0.05)] py-3 px-5 rounded-2xl z-20 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#25b8a7] animate-pulse"></span>
            <span className="text-[10px] font-black tracking-widest text-[#003d4d] uppercase">Premium Care</span>
          </div>

        </div>

        <div className="lg:col-span-7 space-y-12">
          
          <div className="space-y-3">
            <span className="text-sm font-bold tracking-wider text-[#25b8a7] uppercase block">
              Why Choose
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#003d4d] leading-none">
              SIMS Home Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            <div className="md:col-span-7 bg-[#FAFBFD] hover:bg-white border border-slate-100/80 p-6 rounded-[32px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-[#25b8a7]/5 transition-colors duration-300 select-none">01</div>
              <div className="h-10 w-10 rounded-xl bg-[#25b8a7]/10 text-[#25b8a7] flex items-center justify-center text-base mb-4">
                <FaClock />
              </div>
              <h4 className="text-base font-bold text-[#003d4d] tracking-tight">24/7 Doctor on Call</h4>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                No waiting. No trips to the clinic. Just quick, responsive care at your convenience.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#FAFBFD] hover:bg-white border border-slate-100/80 p-6 rounded-[32px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-[#0a5568]/5 transition-colors duration-300 select-none">02</div>
              <div className="h-10 w-10 rounded-xl bg-[#0a5568]/10 text-[#0a5568] flex items-center justify-center text-base mb-4">
                <FaUserShield />
              </div>
              <h4 className="text-base font-bold text-[#003d4d] tracking-tight">Licensed Medical Professionals</h4>
              <p className="text-xs text-slate-500 font-normal mt-2 leading-relaxed">
                All our healthcare personnel are certified and adhere to the highest regulatory standards.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#FAFBFD] hover:bg-white border border-slate-100/80 p-6 rounded-[32px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-rose-500/5 transition-colors duration-300 select-none">03</div>
              <div className="h-10 w-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-base mb-4">
                <FaHeartbeat />
              </div>
              <h4 className="text-base font-bold text-[#003d4d] tracking-tight">Patient-Centered Care</h4>
              <p className="text-xs text-slate-500 font-normal mt-2 leading-relaxed">
                We customize each visit to address your specific health needs with compassion, professionalism, and confidentiality.
              </p>
            </div>

            <div className="md:col-span-7 bg-[#FAFBFD] hover:bg-white border border-slate-100/80 p-6 rounded-[32px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-cyan-500/5 transition-colors duration-300 select-none">04</div>
              <div className="h-10 w-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-base mb-4">
                <FaBriefcaseMedical />
              </div>
              <h4 className="text-base font-bold text-[#003d4d] tracking-tight">Comprehensive In-Home Services</h4>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                From diagnostic lab tests and physiotherapy to post-operative nursing and elder care—we handle it all.
              </p>
            </div>

            <div className="md:col-span-12 bg-[#FAFBFD] hover:bg-white border border-slate-100/80 p-6 rounded-[32px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-[#25b8a7]/5 transition-colors duration-300 select-none">05</div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#25b8a7] flex items-center justify-center text-base shrink-0">
                  <FaCogs />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#003d4d] tracking-tight">Commercial-grade Efficiency</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 leading-relaxed">
                    Our systems are designed for speed, precision, and service excellence—perfect for both individuals and organizations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;