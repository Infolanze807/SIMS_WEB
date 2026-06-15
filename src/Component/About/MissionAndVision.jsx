import React from 'react';

const MissionAndVision = () => {
  return (
    <section className="bg-gradient-to-tr from-[#003d4d] via-[#0a5568] to-[#25b8a7] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-teal-100 uppercase bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Commitment to <span className="text-teal-200">Excellence</span>
          </h2>
          <p className="text-teal-50 text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            Bridging the gap between clinical expertise and home comfort, SIMS Healthcare is driven by a core set of principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 transition-transform group-hover:rotate-3">
              <span className="text-white font-bold text-xl">01</span>
            </div>
            <h3 className="text-white text-3xl font-semibold tracking-tight mb-4">Our Mission</h3>
            <p className="text-teal-50 leading-relaxed text-lg font-light opacity-90">
              To provide safe, skilled, and compassionate healthcare at home, ensuring every patient feels valued, understood, and well cared for—at every stage of life.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 transition-transform group-hover:rotate-3">
              <span className="text-white font-bold text-xl">02</span>
            </div>
            <h3 className="text-white text-3xl font-semibold tracking-tight mb-4">Our Vision</h3>
            <p className="text-teal-50 leading-relaxed text-lg font-light opacity-90">
              To be Dubai’s most trusted home healthcare partner, redefining comfort and convenience in medical care through innovation, reliability, and human connection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionAndVision;