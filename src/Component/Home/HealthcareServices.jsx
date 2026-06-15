import React from 'react';
import { 
  FaPhoneAlt, FaFlask, FaUserMd, FaHeartbeat, 
  FaSyringe, FaLungs, FaVirus, FaShieldVirus, 
  FaStethoscope, FaBaby, FaBriefcaseMedical, FaArrowRight 
} from 'react-icons/fa';

const SERVICES_DATA = [
  {
    title: "Doctor On Call",
    description: "Our DHA-certified doctors bring personalized medical care right to your doorstep, hotel room, or workplace anytime you need it.",
    icon: <FaPhoneAlt />,
    bgImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Lab Test at Home",
    description: "Get reliable, confidential lab tests at your convenience. Our licensed professionals cover a wide range of tests, delivered and collected safely at your location.",
    icon: <FaFlask />,
    bgImage: "https://images.unsplash.com/photo-1511174511575-235b9c39263a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Physiotherapy at Home",
    description: "Personalized physiotherapy sessions delivered to your home, helping you recover from injuries, manage pain, and improve mobility in comfort.",
    icon: <FaUserMd />,
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Nursing Care at Home",
    description: "Our trained nurses offer compassionate, professional care tailored to your needs, from elderly support to post-surgical recovery.",
    icon: <FaHeartbeat />,
    bgImage: "https://images.unsplash.com/photo-1584515901107-d5d4d38c6411?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "IV Therapies",
    description: "Boost energy, immunity, and hydration with our range of IV drip therapies, safely administered by licensed nurses at home or hotel.",
    icon: <FaBriefcaseMedical />,
    bgImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Oxygen Therapy at Home",
    description: "Oxygen support for respiratory conditions delivered and monitored by healthcare professionals in your home.",
    icon: <FaLungs />,
    bgImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Covid PCR Test at Home",
    description: "Certified COVID-19 PCR testing with quick home sample collection and official DHA-approved reports.",
    icon: <FaVirus />,
    bgImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Flu Vaccination at Home in Dubai",
    description: "Stay protected from seasonal flu with licensed nurses administering vaccines in the comfort and safety of your home.",
    icon: <FaShieldVirus />,
    bgImage: "https://images.unsplash.com/photo-1632550944664-ab2b757e8006?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Health Checkup at Home",
    description: "Comprehensive health screening packages including lab tests and doctor consultations, tailored to your wellness goals and delivered to your doorstep.",
    icon: <FaStethoscope />,
    bgImage: "https://images.unsplash.com/photo-1606206595346-8618e7283c9d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Injection Service at Home",
    description: "SIMS Health Care offers safe and professional injection service at home with trained nurses, ensuring comfort, hygiene, and complete privacy.",
    icon: <FaSyringe />,
    bgImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Mother & baby care",
    description: "SIMS Health Care provides expert mother & baby care at home with skilled nurses, ensuring safety, comfort, support, and personalized attention.",
    icon: <FaBaby />,
    bgImage: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Elderly care",
    description: "SIMS Health Care offers compassionate elderly care at home with trained caregivers, ensuring dignity, safety, comfort, and reliable daily support.",
    icon: <FaUserMd />,
    bgImage: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=600"
  }
];

const HealthcareServices = () => {
  return (
    <section className="w-full bg-[#FAFBFD] py-28 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#25b8a7]/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25b8a7]/10 text-[#25b8a7] text-xs font-semibold tracking-wider uppercase mb-1">
            <span>Premium Home Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Comprehensive Home <span className="text-[#25b8a7] relative inline-block">Healthcare Services</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            From Lab Tests to Post-Surgical Care — All in the Comfort of Your Home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-[32px] p-8 sm:p-9 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[420px] overflow-hidden cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)] hover:-translate-y-2"
            >
              
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/40"></div>
              </div>

              <div className="space-y-6 w-full relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-[#25b8a7]/5 text-[#25b8a7] text-xl flex items-center justify-center border border-[#25b8a7]/10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white group-hover:scale-110 group-hover:rotate-[360deg]">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="mt-4 mb-8 w-full relative z-10">
                <p className="text-[14px] text-slate-500 group-hover:text-slate-300 leading-relaxed font-normal transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              <div className="w-full relative z-10 pt-2">
                <button className="inline-flex items-center justify-between w-full bg-slate-50 border border-slate-100 text-slate-700 font-bold text-xs tracking-wider py-4 px-5 rounded-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white group-hover:backdrop-blur-md">
                  <span className="uppercase tracking-widest font-extrabold">Learn More</span>
                  <div className="h-7 w-7 rounded-xl bg-[#25b8a7] text-white flex items-center justify-center transition-all duration-500 transform group-hover:bg-white group-hover:text-slate-950 group-hover:translate-x-1">
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthcareServices;