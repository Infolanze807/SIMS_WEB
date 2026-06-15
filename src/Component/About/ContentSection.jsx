import React from 'react';
import { 
  FaWhatsapp, 
  FaArrowRight, 
  FaUserMd, 
  FaSyringe, 
  FaVial, 
  FaBaby, 
  FaHeartbeat, 
  FaBriefcaseMedical, 
  FaCheckCircle 
} from 'react-icons/fa';

const ContentSection = () => {
  const services = [
    {
      title: "Doctor at Home",
      desc: "Immediate medical attention for general illnesses, flu, fever, infections, or injuries.",
      icon: <FaUserMd className="text-xl text-teal-600" />,
      bgColor: "bg-teal-50 border-teal-100/50",
    },
    {
      title: "IV Therapy at Home",
      desc: "Hydration, vitamins, and recovery drips customized to your needs.",
      icon: <FaSyringe className="text-xl text-amber-600" />,
      bgColor: "bg-amber-50 border-amber-100/50",
    },
    {
      title: "Laboratory Tests at Home",
      desc: "Blood tests, PCR, and diagnostics with fast results.",
      icon: <FaVial className="text-xl text-indigo-600" />,
      bgColor: "bg-indigo-50 border-indigo-100/50",
    },
    {
      title: "Child & Family Care",
      desc: "Pediatric visits, family checkups, and elderly care at home.",
      icon: <FaBaby className="text-xl text-rose-600" />,
      bgColor: "bg-rose-50 border-rose-100/50",
    },
    {
      title: "Urgent Care Services",
      desc: "Fast treatment for non-life-threatening conditions.",
      icon: <FaHeartbeat className="text-xl text-emerald-600" />,
      bgColor: "bg-emerald-50 border-emerald-100/50",
    },
    {
      title: "Post-Surgery & Chronic Care",
      desc: "Compassionate, long-term follow-ups from licensed nurses and doctors.",
      icon: <FaBriefcaseMedical className="text-xl text-sky-600" />,
      bgColor: "bg-sky-50 border-[#145a6e]/10",
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-slate-800">
      
      {/* SECTION 1: ABOUT SIMS HEALTHCARE */}
      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#25b8a7]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Canvas (Left) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant background shapes */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full border-2 border-dashed border-[#25b8a7]/20 pointer-events-none"></div>
            
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-4 -right-4 w-[90%] h-[90%] rounded-[40px] border-4 border-[#25b8a7]/30 pointer-events-none transform translate-x-2 translate-y-2"></div>
            
            {/* Main Premium Image Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[1.4] lg:aspect-[1.1] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,61,77,0.12)] border border-slate-100 z-10 group">
              <img 
                src="/home_medical_room.png" 
                alt="SIMS Premium Medical Care Room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.97]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Luxury Trust Badge */}
            <div className="absolute -bottom-2 left-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_15px_35px_rgba(0,61,77,0.1)] py-4 px-6 rounded-2xl z-20 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]">
                <FaCheckCircle className="text-xl animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest text-[#003d4d] uppercase leading-none">24/7 Available</p>
                <p className="text-[10px] text-slate-500 font-medium mt-1">In-Home Medical Services</p>
              </div>
            </div>
          </div>

          {/* Content Canvas (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-extrabold tracking-widest text-[#25b8a7] uppercase bg-[#25b8a7]/10 px-4 py-2 rounded-full inline-block">
                About SIMS Healthcare
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#003d4d] leading-[1.1] tracking-tight">
                Redefining Medical Care <br />
                <span className="bg-gradient-to-r from-[#25b8a7] to-[#0a5568] bg-clip-text text-transparent">at Home in Dubai</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              At SIMS Healthcare, we believe that quality medical care should be accessible, personalized, and right where you are most comfortable—your home. Based in Dubai, we specialize in delivering 24/7 home healthcare services tailored to your family's needs. From doctor visits and nursing care to lab testing and elderly support, our team is committed to raising the bar for in-home healthcare in the UAE.
            </p>

            <div className="pt-4">
              <a
                href="https://wa.me/971525231028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20ba56] text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 group"
              >
                <FaWhatsapp className="text-xl" />
                <span>Book Now</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-b from-[#f4fbfc] to-white border-y border-slate-100">
        
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#4fc3c0]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-extrabold tracking-widest text-[#25b8a7] uppercase bg-[#25b8a7]/10 px-4 py-2 rounded-full inline-block">
                What We Do
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#003d4d] leading-[1.1] tracking-tight">
                Home Medical Services <br />
                <span className="bg-gradient-to-r from-[#25b8a7] to-[#0a5568] bg-clip-text text-transparent">in Dubai</span>
              </h2>
              <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                Our range of in-home healthcare services includes:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 group`}
                >
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#003d4d] group-hover:text-[#25b8a7] transition-colors duration-250">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#25b8a7] pl-4 py-1">
              "With a focus on both preventive and acute care, we ensure that our patients get the attention they deserve – without waiting rooms or hospital delays."
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/971525231028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20ba56] text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 group"
              >
                <FaWhatsapp className="text-xl" />
                <span>Book Now</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center lg:sticky lg:top-32">
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full border-2 border-dashed border-[#25b8a7]/20 pointer-events-none"></div>
            
            <div className="absolute -top-4 -right-4 w-[90%] h-[90%] rounded-[40px] border-4 border-[#25b8a7]/30 pointer-events-none transform -translate-x-2 -translate-y-2"></div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[1.4] lg:aspect-[1.1] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,61,77,0.12)] border border-slate-100 z-10 group bg-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Smiling Professional Doctors" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.98] contrast-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default ContentSection;