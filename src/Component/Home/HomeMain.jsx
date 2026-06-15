import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaBriefcaseMedical } from 'react-icons/fa';

const SLIDE_DATA = [
  {
    id: 1,
    tagline: "SIMS HOME HEALTHCARE DUBAI",
    pillText: "DHA LICENSED PROVIDER",
    title: "Dubai's Fastest On-Call Healthcare",
    subtitle: "24 HOURS A DAY / 7 DAYS A WEEK",
    bullets: [
      "24/7 Home Visits by Licensed Doctors, Nurses & Lab Technicians",
      "From Sunset to Sunrise, Trusted Healthcare at Your Doorstep",
      "Anywhere in Dubai, Anytime You Need Us — We Bring Healthcare to You"
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
  },
  {
    id: 2,
    tagline: "SIMS MEDICAL RESPONSE UNIT",
    pillText: "EXPERT MEDICAL TEAM",
    title: "Professional Services At Your Doorstep",
    subtitle: "YOUR EMERGENCY IS OUR ABSOLUTE PRIORITY",
    bullets: [
      "Expert care delivered straight to your Home",
      "Your Emergency is Our Priority - Anytime, Anywhere",
      "Dubai's 24/7 Mobile Healthcare Experts"
    ],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800"
  }
];

const HomeMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Effect 1: Smoothly increment the progress bar line loader
  useEffect(() => {
    const slideDuration = 5000; // 5 seconds per slide
    const updateInterval = 30;  // Frame tick rate (30ms)
    const increment = (updateInterval / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100; // Hand over calculation to Effect 2
        return prev + increment;
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, [currentSlide]); // Clears and recreates the timer cleanly whenever slide switches

  // Effect 2: Watchdog that handles the automatic switch when track finishes loading
  useEffect(() => {
    if (progress >= 100) {
      // Small timeout gives a fluid window for the fade animations to cycle
      const switchTimeout = setTimeout(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
        setProgress(0);
      }, 200);
      return () => clearTimeout(switchTimeout);
    }
  }, [progress]);

  // Click handler if someone physically forces a frame swap
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center bg-[#003d4d] font-sans text-white overflow-hidden select-none">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {SLIDE_DATA.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-gradient-to-tr from-[#003d4d] via-[#0a5568] to-[#25b8a7] transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,195,192,0.15),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-full opacity-10 bg-gradient-to-l from-white/10 to-transparent transform -skew-x-12 origin-top"></div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-6">
          
          <div className="relative min-h-[360px] md:min-h-[380px] w-full">
            {SLIDE_DATA.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full flex flex-col justify-center space-y-5 transition-all duration-700 ease-out transform ${
                  index === currentSlide 
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                    : "opacity-0 translate-y-4 pointer-events-none z-0"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-black tracking-widest text-[#25b8a7] uppercase">
                    {slide.tagline}
                  </span>
                  <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/5 uppercase">
                    {slide.pillText}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                  {slide.title.split(" ").map((word, i) => (
                    <span key={i} className={i === 1 || i === 2 ? "text-[#4fc3c0]" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  {slide.subtitle}
                </p>

                <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 border border-white/[0.06] shadow-xl">
                  <ul className="space-y-3.5">
                    {slide.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded bg-[#25b8a7]/10 border border-[#25b8a7]/30 text-[#25b8a7] text-[7px]">
                          ■
                        </div>
                        <p className="text-xs md:text-sm text-white/85 font-light leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <a
              href="tel:+971525231028"
              className="flex items-center justify-between bg-white text-[#003d4d] hover:bg-gray-50 p-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="space-y-0.5">
                <span className="block text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Direct Call 24/7</span>
                <span className="text-xs font-black tracking-wide">+971 5252 31028</span>
              </div>
              <div className="h-8 w-8 rounded-xl bg-[#003d4d]/5 flex items-center justify-center text-[#003d4d] group-hover:bg-[#25b8a7] group-hover:text-white transition-all">
                <FaPhoneAlt className="text-xs" />
              </div>
            </a>

            <a
              href="https://wa.me/971525231028"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] p-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="space-y-0.5">
                <span className="block text-[9px] font-extrabold uppercase tracking-wider text-white/40">Instant Booking</span>
                <span className="text-xs font-bold text-white tracking-wide">WhatsApp Us</span>
              </div>
              <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center text-[#25d366] group-hover:bg-[#25d366] group-hover:text-white transition-all">
                <FaWhatsapp className="text-sm" />
              </div>
            </a>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <div className="flex gap-3 w-full">
              {SLIDE_DATA.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => handleIndicatorClick(idx)}
                  className="flex-1 group text-left focus:outline-none"
                >
                  <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden relative mb-2">
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#25b8a7] transition-all duration-100 ease-out"
                      style={{ 
                        width: idx === currentSlide ? `${progress}%` : idx < currentSlide ? '100%' : '0%' 
                      }}
                    ></div>
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest transition-colors block ${
                    idx === currentSlide ? "text-[#25b8a7]" : "text-white/30 group-hover:text-white/50"
                  }`}>
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="lg:col-span-6 xl:col-span-7 h-[50vh] lg:h-[75vh] flex items-end justify-center relative mt-6 lg:mt-0">
          
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#0a5568]/40 to-[#4fc3c0]/20 blur-3xl bottom-10 z-0"></div>

          {SLIDE_DATA.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute bottom-0 h-full w-full flex items-end justify-center transition-all duration-1000 transform ${
                index === currentSlide 
                  ? "opacity-100 translate-x-0 scale-100 z-10 visible" 
                  : "opacity-0 translate-x-8 scale-95 z-0 invisible"
              }`}
            >
              <div className="h-full w-full max-w-md lg:max-w-xl relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] bg-gradient-to-b from-white/5 to-transparent p-3">
                <img
                  src={slide.image}
                  alt="SIMS Medical Professional Concept"
                  className="h-full w-full object-cover rounded-[32px] brightness-[1.05] contrast-[1.02]"
                />
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 -right-2 z-20 bg-white text-[#003d4d] px-6 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-gray-100 flex items-center gap-4 animate-bounce-slow max-w-xs hidden sm:flex">
            <div className="h-10 w-10 rounded-xl bg-[#25b8a7]/10 flex items-center justify-center text-[#25b8a7] shrink-0">
              <FaBriefcaseMedical className="text-lg" />
            </div>
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 leading-none mb-1">DHA Standards</p>
              <p className="text-xs font-black leading-tight text-[#003d4d]">Premium In-Home Medical Services</p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default HomeMain;