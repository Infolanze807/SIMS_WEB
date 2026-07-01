import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaMapMarkerAlt,
  FaStethoscope,
  FaArrowRight,
  FaGoogle,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaHome,
  FaStar,
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';
import dhaHealthBadge from '../../assets/logoo.png';
import placeLogoBadge from '../../assets/PLACELOGOO.png';
import doctorOnCallImage from '../../assets/DoctorOnCall02.png';
import doctorAtHomeImage from '../../assets/DoctorAtHome02.jpeg';
import ivTherapiesImage from '../../assets/IVTherapies03.jpeg';
import physiotherapyAtHomeImage from '../../assets/PhysiotherapyAtHome003.jpeg';
import labTestAtHomeImage from '../../assets/LabTestAtHome02.jpeg';
import nursingCareAtHomeImage from '../../assets/NursingAtHome01.jpeg';
import healthCheckupAtHomeImage from '../../assets/HealthCheckupAtHome03.jpeg';
const HERO_SERVICES = [
  { slug: 'doctor-on-call', title: 'Doctor On Call', image: doctorOnCallImage },
  { slug: 'iv-therapies', title: 'IV Therapy At Home', image: ivTherapiesImage },
  { slug: 'physiotherapy-at-home', title: 'Physiotherapy At Home', image: physiotherapyAtHomeImage },
  { slug: 'lab-test-at-home', title: 'Lab Tests At Home', image: labTestAtHomeImage },
  { slug: 'nursing-care-at-home', title: 'Nursing At Home', image: nursingCareAtHomeImage },
  { slug: 'health-checkup-at-home', title: 'Health Checkups', image: healthCheckupAtHomeImage },
];

const TRUST_BADGES = [
  { icon: <FaGoogle className="text-[#4285F4]" />, title: '3K+, 5 Star Google Reviews', subtitle: 'Trusted by families across Dubai' },
  { icon: <img src={dhaHealthBadge} alt="Dubai Health Authority" className="h-8 w-8 object-contain" />, title: 'Licensed By Dubai Health Authority', subtitle: 'DHA-certified medical professionals' },
];

const QUICK_STATS = [
  { icon: <FaClock />, label: '30 Min Arrival' },
  { icon: <FaHome />, label: 'Home, Hotel & Office' },
  { icon: <FaShieldAlt />, label: 'DHA Licensed' },
];

const HealthcareHeroSection = () => {
  const [form, setForm] = useState({ symptoms: '', phone: '', name: '', location: '' });
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = ['New Healthcare Booking Request', form.symptoms && `Symptoms: ${form.symptoms}`, form.name && `Name: ${form.name}`, form.phone && `Phone: +971 ${form.phone}`, form.location && `Location: ${form.location}`].filter(Boolean).join('\n');
    window.open(`https://wa.me/971525231028?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#003d4d] px-6 py-16 lg:px-10 lg:py-16 text-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimateInView variants={fadeUp} className="mb-12">
          {/* Top badges row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25b8a7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                SIMS Home Healthcare Dubai
              </span>
            </div>
            {QUICK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold text-white shadow-sm"
              >
                <span className="text-[#25b8a7]">{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </div>

          {/* Headline row: text left, PLACELOGO right */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.25rem]">
                Healthcare That <span className="text-[#25b8a7]">Comes To You</span>
              </h1>
              <p className="text-sm font-light leading-relaxed text-white/70 sm:text-base">
                Dubai's leading provider of healthcare at homes, hotels &amp; offices — 24/7 DHA-certified doctors, nurses, and lab services at your doorstep.
              </p>
            </div>

            {/* PLACELOGO — prominent hero badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex-shrink-0 flex flex-col items-center gap-1 lg:mr-16"
            >
              <img
                src={placeLogoBadge}
                alt="At Your Place Just In 30 Minutes — Anywhere In Dubai"
                className="h-52 w-52 object-contain drop-shadow-[0_8px_24px_rgba(37,184,167,0.4)]"
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#25b8a7]">Service Guarantee</span>
            </motion.div> */}
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 lg:col-span-8">
            <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
              {HERO_SERVICES.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link to={`/services/${service.slug}`} className="group relative flex h-full min-h-[148px] flex-col justify-end overflow-hidden rounded-[22px] border border-white/20 bg-white/10 shadow-sm transition-all duration-500 hover:border-[#25b8a7] hover:bg-[#25b8a7]/20">
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                    <div className="relative z-10 p-4 bg-gradient-to-t from-[#003d4d] to-transparent">
                      <p className="text-[13px] font-bold leading-tight text-white sm:text-sm">{service.title}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col gap-1 border-b border-slate-100 bg-[#25b8a7] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <h2 className="text-base font-black text-white sm:text-lg">Book Healthcare Now</h2>
                  <p className="mt-0.5 text-[11px] font-medium text-white/80">Fill in your details — we'll respond within minutes</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                {['symptoms', 'name', 'phone', 'location'].map((f) => (
                  <div key={f} className="flex min-h-[58px] items-center gap-3 border-b border-r border-slate-100 px-4 py-3.5">
                    <input type="text" value={form[f]} onChange={handleChange(f)} placeholder={f.charAt(0).toUpperCase() + f.slice(1)} className="w-full bg-transparent text-sm font-medium text-[#003d4d] placeholder:text-slate-400 outline-none" />
                  </div>
                ))}
              </div>
              <motion.button type="submit" className="flex w-full items-center justify-center gap-3 bg-[#003d4d] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#002b36]">
                <span>Book Healthcare</span>
                <FaArrowRight className="text-[10px]" />
              </motion.button>
            </motion.form>
          </div>

          <AnimateInView variants={fadeUp} className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white text-[#003d4d] shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img src={doctorAtHomeImage} alt="Consult" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d4d]/60 to-transparent" />

                {/* 5-Star Badge — bottom right */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <FaStar className="text-[10px]" />
                    <FaStar className="text-[10px]" />
                    <FaStar className="text-[10px]" />
                    <FaStar className="text-[10px]" />
                    <FaStar className="text-[10px]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#003d4d] ml-1">5.0 Star Rated</span>
                </div>
              </div>


              <div className="space-y-2.5 p-4">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.title} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm">{badge.icon}</div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold leading-tight">{badge.title}</p>
                      <p className="mt-0.5 truncate text-[10px] text-slate-500">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 p-4">
                <a href="tel:+971525231028" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#003d4d] py-3.5 text-sm font-bold text-white hover:bg-[#25b8a7]">
                  Call +971525231028
                </a>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHeroSection;