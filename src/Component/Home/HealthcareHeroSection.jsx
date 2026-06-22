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
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';
import dhaHealthBadge from '../../assets/logoo.png';

const HERO_SERVICES = [
  {
    slug: 'doctor-on-call',
    title: 'Doctor On Call',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'iv-therapies',
    title: 'IV Therapy At Home',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy At Home',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'lab-test-at-home',
    title: 'Lab Tests At Home',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'nursing-care-at-home',
    title: 'Nursing At Home',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'health-checkup-at-home',
    title: 'Health Checkups',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400',
  },
];

const TRUST_BADGES = [
  {
    icon: <FaGoogle className="text-[#4285F4]" />,
    title: '3K+, 5 Star Google Reviews',
    subtitle: 'Trusted by families across Dubai',
  },
  {
    icon: (
      <img
        src={dhaHealthBadge}
        alt="Dubai Health Authority"
        className="h-8 w-8 object-contain"
      />
    ),
    title: 'Licensed By Dubai Health Authority',
    subtitle: 'DHA-certified medical professionals',
  },
  {
    icon: <FaAward className="text-amber-500" />,
    title: 'JCI Accredited Standards',
    subtitle: 'International standards of care',
  },
];

const QUICK_STATS = [
  { icon: <FaClock />, label: '30 Min Arrival' },
  { icon: <FaHome />, label: 'Home, Hotel & Office' },
  { icon: <FaShieldAlt />, label: 'DHA Licensed' },
];

const HealthcareHeroSection = () => {
  const [form, setForm] = useState({
    symptoms: '',
    phone: '',
    name: '',
    location: '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      'New Healthcare Booking Request',
      form.symptoms && `Symptoms: ${form.symptoms}`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: +971 ${form.phone}`,
      form.location && `Location: ${form.location}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/971525231028?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFD] px-6 py-16 font-sans text-[#003d4d] lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(37,184,167,0.06),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(0,61,77,0.04),transparent_40%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #003d4d08 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimateInView variants={fadeUp} className="mb-12 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#003d4d]/10 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25b8a7]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003d4d]">
              SIMS Home Healthcare Dubai
            </span>
          </div>

          <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-[#003d4d] sm:text-4xl lg:text-[3.25rem]">
            Healthcare That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003d4d] via-[#0a5568] to-[#25b8a7]">
              Comes To You
            </span>
          </h1>

          <p className="max-w-2xl text-sm font-light leading-relaxed text-slate-500 sm:text-base">
            Dubai&apos;s leading provider of healthcare at homes, hotels &amp; offices — 24/7
            DHA-certified doctors, nurses, and lab services at your doorstep.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            {QUICK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-[#25b8a7]/15 bg-white px-4 py-2 text-[11px] font-bold text-[#003d4d] shadow-sm"
              >
                <span className="text-[#25b8a7]">{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 lg:col-span-8">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {HERO_SERVICES.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group relative flex h-full min-h-[148px] flex-col justify-end overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_8px_30px_rgba(0,61,77,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,61,77,0.12)] sm:min-h-[168px]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003d4d]/90 via-[#003d4d]/40 to-transparent" />
                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#25b8a7] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1">
                      <FaArrowRight className="text-[10px]" />
                    </div>
                    <div className="relative z-10 p-4">
                      <p className="text-[13px] font-bold leading-tight text-white sm:text-sm">
                        {service.title}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,61,77,0.08)]"
            >
              <div className="flex flex-col gap-1 border-b border-slate-100 bg-gradient-to-r from-[#003d4d] to-[#0a5568] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <h2 className="text-base font-black text-white sm:text-lg">Book Healthcare Now</h2>
                  <p className="mt-0.5 text-[11px] font-medium text-white/60">
                    Fill in your details — we&apos;ll respond within minutes
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 sm:mt-0">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4fc3c0]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                    Available 24/7
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex min-h-[58px] items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:border-r">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]">
                    <FaStethoscope className="text-sm" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={form.symptoms}
                    onChange={handleChange('symptoms')}
                    placeholder="Symptoms"
                    className="w-full bg-transparent text-sm font-medium text-[#003d4d] placeholder:text-slate-400 outline-none"
                  />
                </div>

                <div className="flex min-h-[58px] items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:border-r">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]">
                    <FaUser className="text-sm" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your Name"
                    className="w-full bg-transparent text-sm font-medium text-[#003d4d] placeholder:text-slate-400 outline-none"
                  />
                </div>

                <div className="flex min-h-[58px] items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:border-r">
                  <div className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#25b8a7]/10 px-2.5 py-2">
                    <span className="text-sm leading-none" aria-hidden="true">
                      🇦🇪
                    </span>
                    <span className="text-xs font-bold text-[#003d4d]">+971</span>
                  </div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-sm font-medium text-[#003d4d] placeholder:text-slate-400 outline-none"
                  />
                </div>

                <div className="flex min-h-[58px] items-center gap-3 border-b border-slate-100 px-4 py-3.5 lg:border-b-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]">
                    <FaMapMarkerAlt className="text-sm" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    value={form.location}
                    onChange={handleChange('location')}
                    placeholder="Location"
                    className="w-full bg-transparent text-sm font-medium text-[#003d4d] placeholder:text-slate-400 outline-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#25b8a7] to-[#0a5568] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:from-[#1fa394] hover:to-[#084656]"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Healthcare</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#25b8a7] transition-transform duration-300 group-hover:translate-x-0.5">
                  <FaArrowRight className="text-[10px]" />
                </span>
              </motion.button>
            </motion.form>
          </div>

          <AnimateInView variants={fadeUp} className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_25px_60px_rgba(0,61,77,0.1)]">
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
                  alt="Doctor consultation at home"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d4d]/80 via-[#003d4d]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#25b8a7] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <FaClock className="text-[9px]" />
                    On-call in 30 min
                  </div>
                  <h2 className="text-xl font-black leading-tight text-white">Consult A Doctor</h2>
                  <p className="mt-1 text-xs font-medium text-white/70">
                    Licensed physicians across all of Dubai
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 p-4">
                {TRUST_BADGES.map((badge) => (
                  <div
                    key={badge.title}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#FAFBFD] px-4 py-3 transition-all duration-300 hover:border-[#25b8a7]/20 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-base shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-105">
                      {badge.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold leading-tight text-[#003d4d]">{badge.title}</p>
                      <p className="mt-0.5 truncate text-[10px] text-slate-500">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 p-4">
                <a
                  href="tel:+971525231028"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#003d4d]/10 bg-[#003d4d]/[0.03] py-3.5 text-sm font-bold text-[#003d4d] transition-all duration-300 hover:bg-[#003d4d] hover:text-white"
                >
                  <FaStethoscope className="text-xs" />
                  Call +971 5252 31028
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
