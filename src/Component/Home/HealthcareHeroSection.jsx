import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBriefcaseMedical,
  FaArrowRight,
  FaGoogle,
  FaUserMd,
  FaAward,
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';
import dhaHealthBadge from '../../assets/logoo.png';
import doctorAtHomeImage from '../../assets/Home01.png';
import doctorOnCallImage from '../../assets/DoctorOnCall04.png';
import ivTherapiesImage from '../../assets/IVTherapies03.jpeg';
import physiotherapyAtHomeImage from '../../assets/PhysiotherapyAtHome003.jpeg';
import labTestAtHomeImage from '../../assets/LabTestAtHome02.jpeg';
import nursingCareAtHomeImage from '../../assets/NursingAtHome01.jpeg';
import healthCheckupAtHomeImage from '../../assets/HealthCheckupAtHome03.jpeg';

const HERO_SERVICES = [
  { slug: 'doctor-on-call', title: 'Doctor On Call', image: doctorOnCallImage },
  { slug: 'iv-therapies', title: 'IV Therapy At Home', image: ivTherapiesImage },
  { slug: 'physiotherapy-at-home', title: 'Physiotherapy', image: physiotherapyAtHomeImage },
  { slug: 'lab-test-at-home', title: 'Lab Tests At Home', image: labTestAtHomeImage },
  { slug: 'nursing-care-at-home', title: 'Nurse At Home', image: nursingCareAtHomeImage },
  { slug: 'health-checkup-at-home', title: 'Health Checkups', image: healthCheckupAtHomeImage },
];

const UniqueHeroSection = () => {
  const [form, setForm] = useState({ symptoms: '', phone: '', name: '', location: '' });
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      '⚡ SIMS Priority Home Care Request ⚡',
      form.name && `Patient: ${form.name}`,
      form.phone && `Contact: +971 ${form.phone}`,
      form.location && `Address: ${form.location}`,
      form.symptoms && `Indication: ${form.symptoms}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/971525231028?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#002b36] via-[#003d4d] to-[#01222a] px-4 py-16 sm:px-6 lg:px-8 lg:py-14 text-white overflow-hidden">
      {/* Abstract luxury geometric mesh backgrounds */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#25b8a7]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-8 right-0 h-[400px] w-[400px] rounded-full bg-black/30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* UPPER ECOSYSTEM: Asymmetric Presentation */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-12">
          
          {/* Brand Promise Left Block */}
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#25b8a7]/25 bg-white/5 px-4 py-2.5 shadow-[0_0_24px_rgba(37,184,167,0.12)] backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25b8a7] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25b8a7] shadow-[0_0_8px_#25b8a7]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                24 Hours A Day
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#25b8a7] sm:text-[11px]">
                7 Days A Week
              </span>
            </div>

            <h1 className="max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-[0.06em] text-white sm:text-5xl lg:text-[3.45rem]">
              Dubai&apos;s Fastest{' '}
              <span className="text-[#25b8a7]">On-Call</span>
              <span className="block">
                <span className="text-[#25b8a7]">Healthcare</span> —
              </span>
            </h1>

            <div className="space-y-2 pt-1 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
              {[
                '24/7 Home Visits by Licensed Doctors, Nurses & Lab Technicians',
                'From Sunset to Sunrise, Trusted Healthcare at Your Doorstep',
                'Anywhere in Dubai, Anytime You Need Us — We Bring Healthcare to You',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-white/80">
                    <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors hover:border-[#4285F4]/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <FaGoogle className="text-base text-[#4285F4]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Trusted By Families</p>
                  <p className="text-xs font-bold text-white">5 Star Google Reviews</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors hover:border-[#25b8a7]/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white">
                  <img src={dhaHealthBadge} alt="DHA" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#25b8a7]">Officially Licensed</p>
                  <p className="text-xs font-bold text-white">DHA Certified Professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Visual Composition Right Block */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main Image Framing */}
              <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                <img src={doctorAtHomeImage} alt="Premium Care" className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b36] via-transparent to-transparent" />
              </div>

              {/* Floating Live Dispatch Metric Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-gradient-to-r from-[#003d4d] to-[#002b36] border border-white/10 p-4 shadow-xl backdrop-blur-md max-w-[220px]"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]"><FaUserMd size={18}/></div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">Rapid Response</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-light">Average arrival across Dubai is under 30 minutes.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* COMPACT FLOATING DISPATCH CONSOLE */}
        <motion.div 
          className="w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-6 text-slate-800 mb-12 border border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-3 space-y-0.5 px-2">
              <h3 className="text-base font-bold text-[#003d4d] flex items-center gap-2">
                <FaBriefcaseMedical className="text-[#25b8a7]" size={14}/>
                Instant Intake
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">Request medical dispatch on-demand</p>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><FaUser size={12}/></span>
                <input type="text" required value={form.name} onChange={handleChange('name')} placeholder="Patient Name" className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-9 pr-3 outline-none focus:border-[#25b8a7] focus:bg-white transition-all text-[#003d4d]" />
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-xs font-bold text-slate-400">+971</span>
                <input type="tel" required value={form.phone} onChange={handleChange('phone')} placeholder="Mobile Number" className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-14 pr-3 outline-none focus:border-[#25b8a7] focus:bg-white transition-all text-[#003d4d]" />
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><FaMapMarkerAlt size={12}/></span>
                <input type="text" required value={form.location} onChange={handleChange('location')} placeholder="Your Location/Hotel" className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-9 pr-3 outline-none focus:border-[#25b8a7] focus:bg-white transition-all text-[#003d4d]" />
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#003d4d] text-white text-xs font-bold transition-all duration-300 hover:bg-[#25b8a7] py-3 shadow-md hover:shadow-lg">
                <span>Dispatch Now</span>
                <FaArrowRight size={10} />
              </button>
            </div>

          </form>
        </motion.div>

        {/* LOWER SECTION: Fluid Cascading Service Strips */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#25b8a7]">Clinical Capabilities</h3>
            <a href="tel:+971525231028" className="text-xs font-bold text-white hover:text-[#25b8a7] flex items-center gap-2 transition-colors">
              <FaPhoneAlt size={10}/> Urgent Call Center: +971 52 523 1028
            </a>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {HERO_SERVICES.map((service) => (
              <motion.div key={service.slug} variants={fadeUp} className="min-w-0">
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#002833] duration-300 hover:border-[#25b8a7]/40"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#002833]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-h-[52px] flex-1 items-center justify-between gap-2 p-3">
                    <h4 className="text-xs font-bold leading-tight tracking-wide text-white group-hover:text-[#25b8a7] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <FaArrowRight size={10} className="shrink-0 text-white/30 transition-all duration-300 group-hover:text-[#25b8a7] group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default UniqueHeroSection;