import React, { Suspense, lazy, useEffect, useState } from 'react';
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBriefcaseMedical,
  FaArrowRight,
  FaUserMd,
  FaNotesMedical,
} from 'react-icons/fa';

const doctorAtHomeImage = '/hero-doctor.webp';
const HeroClinicalStrip = lazy(() => import('./HeroClinicalStrip'));

const UniqueHeroSection = () => {
  const [form, setForm] = useState({ symptoms: '', phone: '', name: '', location: '' });
  const [showStrip, setShowStrip] = useState(false);
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  useEffect(() => {
    const enable = () => setShowStrip(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enable, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const timeoutId = window.setTimeout(enable, 1500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      '⚡ SIMS Priority Home Care Request ⚡',
      form.name && `Patient: ${form.name}`,
      form.phone && `Contact: +971 ${form.phone}`,
      form.location && `Address: ${form.location}`,
      form.symptoms && `Symptoms: ${form.symptoms}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/971525231028?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#002b36] via-[#003d4d] to-[#01222a] px-4 py-16 sm:px-6 lg:px-8 lg:py-14 text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#25b8a7]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-8 right-0 h-[400px] w-[400px] rounded-full bg-black/30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#25b8a7]/25 bg-white/5 px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25b8a7]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-[11px]">
                24 Hours A Day
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#25b8a7] sm:text-[11px]">
                7 Days A Week
              </span>
            </div>

            <h1 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              Doctor on Call in Dubai: Fast, 24/7 Care at Your Door
            </h1>

            <div className="space-y-2 pt-1 text-sm font-medium leading-relaxed text-white/90 sm:text-base">
              {[
                '24/7 Home Visits by Licensed Doctors, Nurses & Lab Technicians',
                'From Sunset to Sunrise, Trusted Healthcare at Your Doorstep',
                'Anywhere in Dubai, Anytime You Need Us — We Bring Healthcare to You',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-white/80" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/971525231028?text=Hi%20SIMS%2C%20I%27d%20like%20to%20book%20a%20home%20doctor%20visit%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(15,118,110,0.35)] transition hover:bg-[#0d9488] hover:shadow-[0_14px_32px_rgba(15,118,110,0.45)]"
              >
                Book a Home Visit
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm pb-2 sm:pb-8 sm:pl-4 lg:pl-6">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                <img
                  src={doctorAtHomeImage}
                  alt="Doctor visit at home in Dubai"
                  width="640"
                  height="480"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b36] via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-3 left-3 z-10 max-w-[calc(100%-1.5rem)] rounded-2xl border border-white/10 bg-gradient-to-r from-[#003d4d] to-[#002b36] p-3 shadow-xl sm:bottom-4 sm:left-4 sm:max-w-[220px] sm:p-4 lg:-bottom-6 lg:-left-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]" aria-hidden="true">
                    <FaUserMd size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Rapid Response</p>
                    <p className="text-[11px] text-slate-200 mt-0.5 font-light">
                      Average arrival across Dubai is under 30 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-6 text-slate-800 mb-12 border border-slate-100">
          <form
            onSubmit={handleSubmit}
            toolname="book_home_visit"
            tooldescription="Book a SIMS DHA-licensed home healthcare visit in Dubai. Collects patient name, UAE mobile number, location, and symptoms, then opens WhatsApp dispatch."
            className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-center"
          >
            <div className="lg:col-span-2 space-y-0.5 px-2">
              <h2 className="text-base font-bold text-[#003d4d] flex items-center gap-2">
                <FaBriefcaseMedical className="text-[#25b8a7]" size={14} aria-hidden="true" />
                Instant Intake
              </h2>
              <p className="text-[11px] text-slate-600 font-medium">Request medical dispatch on-demand</p>
            </div>

            <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500" aria-hidden="true">
                  <FaUser size={12} />
                </span>
                <input
                  type="text"
                  name="patient_name"
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Patient Name"
                  aria-label="Patient Name"
                  toolparamdescription="Full name of the patient needing care"
                  autoComplete="name"
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-9 pr-3 outline-none focus:border-[#25b8a7] focus:ring-2 focus:ring-[#25b8a7]/35 focus:bg-white transition-all text-[#003d4d]"
                />
              </div>

              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-xs font-bold text-slate-500" aria-hidden="true">
                  +971
                </span>
                <input
                  type="tel"
                  name="mobile_number"
                  required
                  value={form.phone}
                  onChange={handleChange('phone')}
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                  toolparamdescription="UAE mobile number without country code"
                  autoComplete="tel"
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-14 pr-3 outline-none focus:border-[#25b8a7] focus:ring-2 focus:ring-[#25b8a7]/35 focus:bg-white transition-all text-[#003d4d]"
                />
              </div>

              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500" aria-hidden="true">
                  <FaMapMarkerAlt size={12} />
                </span>
                <input
                  type="text"
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange('location')}
                  placeholder="Your Location/Hotel"
                  aria-label="Your Location or Hotel"
                  toolparamdescription="Home, hotel, or office address in Dubai"
                  autoComplete="street-address"
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-9 pr-3 outline-none focus:border-[#25b8a7] focus:ring-2 focus:ring-[#25b8a7]/35 focus:bg-white transition-all text-[#003d4d]"
                />
              </div>

              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500" aria-hidden="true">
                  <FaNotesMedical size={12} />
                </span>
                <input
                  type="text"
                  name="symptoms"
                  required
                  value={form.symptoms}
                  onChange={handleChange('symptoms')}
                  placeholder="Symptoms"
                  aria-label="Symptoms"
                  toolparamdescription="Brief description of symptoms or care needed"
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl py-3 pl-9 pr-3 outline-none focus:border-[#25b8a7] focus:ring-2 focus:ring-[#25b8a7]/35 focus:bg-white transition-all text-[#003d4d]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#003d4d] text-white text-xs font-bold transition-all duration-300 hover:bg-[#0f766e] py-3 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25b8a7] focus-visible:ring-offset-2"
              >
                <span>Dispatch Now</span>
                <FaArrowRight size={10} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#5eead4]">Clinical Capabilities</h2>
            <a
              href="tel:+971525231028"
              className="text-xs font-bold text-white hover:text-[#25b8a7] flex items-center gap-2 transition-colors"
            >
              <FaPhoneAlt size={10} aria-hidden="true" /> Urgent Call Center: +971 52 523 1028
            </a>
          </div>

          <div className="min-h-[560px] sm:min-h-[420px] lg:min-h-[340px]">
            {showStrip ? (
              <Suspense fallback={null}>
                <HeroClinicalStrip />
              </Suspense>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueHeroSection;
