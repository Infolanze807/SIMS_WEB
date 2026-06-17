import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUserShield, FaHeartbeat, FaBriefcaseMedical, FaCogs } from 'react-icons/fa';
import AnimateInView, { fadeUp, slideFromLeft, staggerContainer } from '../Services/AnimateInView';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-28 px-6 lg:px-10 font-sans antialiased text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <AnimateInView variants={slideFromLeft} className="relative flex min-h-[420px] w-full items-center justify-center lg:col-span-5">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#25b8a7]/10 via-[#003d4d]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-12 left-6 h-72 w-72 rounded-[40px] border-2 border-dashed border-[#25b8a7]/20 pointer-events-none" />

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

        </AnimateInView>

        <div className="space-y-12 lg:col-span-7">
          <AnimateInView className="space-y-3">
            <span className="text-sm font-bold tracking-wider text-[#25b8a7] uppercase block">
              Why Choose
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#003d4d] leading-none">
              SIMS Home Healthcare
            </h2>
          </AnimateInView>

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {[
              { span: 'md:col-span-7', num: '01', icon: <FaClock />, iconClass: 'bg-[#25b8a7]/10 text-[#25b8a7]', hoverNum: 'group-hover:text-[#25b8a7]/5', title: '24/7 Doctor on Call', desc: 'No waiting. No trips to the clinic. Just quick, responsive care at your convenience.', descClass: 'text-xs sm:text-sm' },
              { span: 'md:col-span-5', num: '02', icon: <FaUserShield />, iconClass: 'bg-[#0a5568]/10 text-[#0a5568]', hoverNum: 'group-hover:text-[#0a5568]/5', title: 'Licensed Medical Professionals', desc: 'All our healthcare personnel are certified and adhere to the highest regulatory standards.', descClass: 'text-xs' },
              { span: 'md:col-span-5', num: '03', icon: <FaHeartbeat />, iconClass: 'bg-rose-50 text-rose-500', hoverNum: 'group-hover:text-rose-500/5', title: 'Patient-Centered Care', desc: 'We customize each visit to address your specific health needs with compassion, professionalism, and confidentiality.', descClass: 'text-xs' },
              { span: 'md:col-span-7', num: '04', icon: <FaBriefcaseMedical />, iconClass: 'bg-cyan-50 text-cyan-500', hoverNum: 'group-hover:text-cyan-500/5', title: 'Comprehensive In-Home Services', desc: 'From diagnostic lab tests and physiotherapy to post-operative nursing and elder care—we handle it all.', descClass: 'text-xs sm:text-sm' },
            ].map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-[32px] border border-slate-100/80 bg-[#FAFBFD] p-6 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] ${card.span}`}
              >
                <div className={`absolute right-6 top-4 select-none text-5xl font-black text-slate-100 transition-colors duration-300 ${card.hoverNum}`}>{card.num}</div>
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-base ${card.iconClass}`}>{card.icon}</div>
                <h4 className="text-base font-bold tracking-tight text-[#003d4d]">{card.title}</h4>
                <p className={`mt-2 font-normal leading-relaxed text-slate-500 ${card.descClass}`}>{card.desc}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-100/80 bg-[#FAFBFD] p-6 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,61,77,0.05)] md:col-span-12"
            >
              <div className="absolute right-6 top-4 select-none text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#25b8a7]/5">05</div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-base text-[#25b8a7]">
                  <FaCogs />
                </div>
                <div>
                  <h4 className="text-base font-bold tracking-tight text-[#003d4d]">Commercial-grade Efficiency</h4>
                  <p className="mt-1 text-xs font-normal leading-relaxed text-slate-500 sm:text-sm">
                    Our systems are designed for speed, precision, and service excellence—perfect for both individuals and organizations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;