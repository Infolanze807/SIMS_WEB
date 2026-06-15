import React from 'react';
import { FaPhoneAlt, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const STEPS_DATA = [
  {
    stepNumber: "01",
    title: "Contact SIMS Home Healthcare",
    description: "Call us at +971 5252 31028 or send a message via WhatsApp to schedule your appointment instantly.",
    icon: <FaPhoneAlt className="text-xl text-[#003d4d] group-hover:text-white transition-colors duration-300" />,
    accent: "from-[#0a5568] to-[#25b8a7]",
    bgImage: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800"
  },
  {
    stepNumber: "02",
    title: "Medical Experts at Your Door",
    description: "A licensed DHA-certified doctor or nurse will arrive at your home, hotel, or office within 30 minutes—ready to assess and assist.",
    icon: <FaUserMd className="text-2xl text-[#25b8a7] group-hover:text-white transition-colors duration-300" />,
    accent: "from-[#25b8a7] to-[#4fc3c0]",
    bgImage: "https://images.unsplash.com/photo-1584515901107-d5d4d38c6411?auto=format&fit=crop&q=80&w=800"
  },
  {
    stepNumber: "03",
    title: "Receive Full Medical Care at Home",
    description: "Our team provides comprehensive healthcare services, including examination, diagnosis, treatment, and medication management—all from the comfort of your space.",
    icon: <FaHeartbeat className="text-2xl text-[#e11d48] group-hover:text-white transition-colors duration-300" />,
    accent: "from-[#e11d48] to-[#fda4af]",
    bgImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
  }
];

const BookingSteps = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-10 font-sans text-gray-800 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-gray-200/60 pb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003d4d]/5 border border-[#003d4d]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25b8a7] animate-pulse"></span>
              <span className="text-[10px] font-black tracking-widest text-[#003d4d] uppercase">Fast & Personalized</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#003d4d] leading-[1.15]">
              DHA-Certified Doctors & Nurses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003d4d] to-[#25b8a7]">
                At Your Door in 3 Simple Steps
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              At SIMS Home Healthcare, we bring professional medical services straight to you—fast, safe, and tailored around your schedule. Equipped with the latest tools, our team is here to help 24/7.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-transparent -translate-y-12 z-0"></div>

          {STEPS_DATA.map((step, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-10px_rgba(0,61,77,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[350px] z-10 overflow-hidden"
            >
              
              <div className="absolute inset-0 w-full h-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img 
                  src={step.bgImage} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 brightness-[0.65] contrast-[1.05] saturate-[1.1]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002833] via-[#003d4d]/80 to-[#003d4d]/30"></div>
              </div>

              <div className={`absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-gradient-to-r ${step.accent} opacity-100 z-10`}></div>

              <div className="space-y-6 relative z-10 select-none">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#25b8a7] group-hover:border-transparent transition-all duration-300 shadow-inner">
                    {step.icon}
                  </div>
                  
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-white/60 tracking-widest uppercase bg-gray-100 group-hover:bg-white/10 px-2.5 py-1 rounded-md transition-colors duration-300 backdrop-blur-sm">
                    Phase {step.stepNumber}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-[#003d4d] group-hover:text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-white font-normal leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-2 right-4 pointer-events-none select-none z-10">
                <span className="text-7xl font-black text-gray-100/70 group-hover:text-white/[0.08] tracking-tighter block font-mono transition-colors duration-500">
                  {step.stepNumber}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#003d4d] to-[#0a5568] p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(0,61,77,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(37,184,167,0.15),transparent_40%)] pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <h4 className="text-xs font-black tracking-widest text-[#25b8a7] uppercase">Our Core Mission</h4>
            <p className="text-sm md:text-base font-light leading-relaxed text-white/90">
              Whether you are recovering at home, managing a chronic condition, or need urgent medical attention, our mission is to ensure your comfort, recovery, and well-being <span className="font-semibold text-[#4fc3c0]">without the stress of hospital visits</span>. We proudly serve families, individuals, and travelers across Dubai.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;