import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronRight,
  FaClock,
  FaYoutube,
  FaCcAmex,
  FaCreditCard,
  FaMoneyBillWave,
  FaApplePay,
} from 'react-icons/fa';
import simsLogo from '../assets/sims-logo.webp';
import dhaLogo from '../assets/DHALOGO.webp';
import dhaHealthBadge from '../assets/logoo.webp';
import { GoogleRatingBadge } from './GoogleRatingBadge';
import { HEADER_NAV_SERVICES } from '../data/headerNavServices';
import { LEGAL_LINKS } from '../data/legalContent';
import { IconGooglePay, IconX } from './BrandIcons';
import { SiOpenai, SiClaude, SiPerplexity } from 'react-icons/si';

/** Official xAI Grok mark (not yet in react-icons/simple-icons). */
const SiGrok = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" fillRule="evenodd">
    <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
  </svg>
);

const AI_ASSIST_PROMPT = `I'm looking for convenient healthcare services in Dubai. Please review SIMS Home Healthcare at www.simshomehealthcare.ae and help me choose the most suitable service based on my needs. SIMS provides Doctor On Call, Doctor At Home, Doctor At Hotel, IV Therapy At Home, Lab Tests at Home, STD Test At Home, Pediatrician At Home, Nurse At Home, Physiotherapy At Home, Health Checkups at Home, Oxygen Therapy at Home, and other DHA-licensed home healthcare services. Explain which SIMS service may be relevant, what it is typically used for, how the service works, and when professional medical assessment may be appropriate. Prioritize information available from www.simshomehealthcare.ae and clearly distinguish medical information from general guidance. If I want to book or speak with the SIMS team, their WhatsApp Contact: +971 52 523 1028 and Website www.simshomehealthcare.ae.`;

const AI_ASSIST_LINKS = [
  {
    label: 'ChatGPT',
    href: `https://chatgpt.com/?q=${encodeURIComponent(AI_ASSIST_PROMPT)}`,
    icon: SiOpenai,
    iconClass: 'text-[#10a37f]',
  },
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${encodeURIComponent(AI_ASSIST_PROMPT)}`,
    icon: SiClaude,
    iconClass: 'text-[#D97757]',
  },
  {
    label: 'Grok',
    href: `https://grok.com/?q=${encodeURIComponent(AI_ASSIST_PROMPT)}`,
    icon: SiGrok,
    iconClass: 'text-black',
  },
  {
    label: 'Perplexity',
    href: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(AI_ASSIST_PROMPT)}`,
    icon: SiPerplexity,
    iconClass: 'text-[#20808D]',
  },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Blog', to: '/blog' },
];

const featuredServices = [
  { label: 'Doctor On Call', slug: 'doctor-on-call' },
  { label: 'Doctor at Hotel', slug: 'doctor-at-hotel' },
  { label: 'Lab Test at Home', slug: 'lab-test-at-home' },
  { label: 'Nurse at Home', slug: 'nursing-care-at-home' },
  { label: 'IV Therapy at Home', slug: 'iv-therapies' },
  { label: 'Health Checkup at Home', slug: 'health-checkup-at-home' },
];

const serviceTags = HEADER_NAV_SERVICES.slice(0, 8).map((s) => ({
  label: s.title,
  slug: s.slug,
}));

const areasCovered = [
  { name: 'Al Barsha', detail: 'Sheikh Zayed Road' },
  { name: 'Al Warqa' },
  { name: 'Arabian Ranches' },
  { name: 'Arjan' },
  { name: 'Business Bay' },
  { name: 'Damac Hills' },
  { name: 'Deira & Bur Dubai' },
  { name: 'Downtown Dubai' },
  { name: 'Dubai Festival City' },
  { name: 'Dubai Marina & JBR' },
  { name: 'Dubai Silicon Oasis' },
  { name: 'Dubai Sports City' },
  { name: 'Dubai World Trade Centre' },
  { name: 'Emirates Hills' },
  { name: 'International City' },
  { name: 'Jebel Ali' },
  { name: 'JLT', detail: 'Jumeirah Lake Towers' },
  { name: 'Jumeirah' },
  { name: 'JVC', detail: 'Jumeirah Village Circle' },
  { name: 'JVT', detail: 'Jumeirah Village Triangle' },
  { name: 'Mizhar' },
  { name: 'Nad Al Sheba' },
  { name: 'Palm Jumeirah' },
  { name: 'Umm Suqeim' },
];

const paymentMethods = [
  { label: 'Amex', icon: FaCcAmex, iconClass: 'text-[#2E77BC]' },
  { label: 'Debit or Credit Card', icon: FaCreditCard, iconClass: 'text-[#003d4d]' },
  { label: 'Cash', icon: FaMoneyBillWave, iconClass: 'text-[#14804a]' },
  { label: 'Apple Pay', icon: FaApplePay, iconClass: 'text-black' },
  { label: 'Google Pay', icon: IconGooglePay, iconClass: 'text-[#3c4043] h-5 w-5' },
];

const FooterLink = ({ to, children, className = '' }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `group flex items-center gap-2 text-sm transition ${className} ${isActive ? 'text-brand-accent-light' : 'text-white/80 hover:text-brand-accent-light'
      }`
    }
  >
    <FaChevronRight className="text-[10px] text-brand-accent-light transition group-hover:translate-x-0.5" />
    {children}
  </NavLink>
);

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden bg-brand-dark font-sans text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,184,167,0.12),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(79,195,192,0.08),transparent_40%)]" />
        <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-dark-mid" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-24 lg:gap-10">
            {/* Brand */}
            <div className="space-y-6 lg:col-span-6">
              <Link to="/" className="inline-flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex flex-col items-center gap-5">
                  {/* SIMS Logo */}
                  <div className="flex h-16 w-[250px] items-center justify-center rounded-2xl bg-white px-6 shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <img
                      src={simsLogo}
                      alt="SIMS Healthcare"
                      width="180"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-[97px] object-contain"
                    />
                  </div>

                  {/* DHA Logo */}
                  <div className="flex h-16 w-[250px] items-center justify-center rounded-2xl bg-white px-6 shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <img
                      src={dhaLogo}
                      alt="Dubai Health Authority"
                      width="180"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-[135px] object-contain"
                    />
                  </div>
                </div>
                {/* <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-brand-accent/30 duration-300">
                  <img src={dhaLogo} alt="Dubai Health Authority Logo" className="h-8 w-auto object-contain shrink-0" />
                </div> */}
              </Link>

              <p className="text-sm leading-relaxed text-white/75">
                At SIMS Home Healthcare we bring DHA-approved medical care directly to your doorstep
                — whether at home, hotel, or office. Our experienced doctors, nurses, and
                physiotherapists provide 24/7 healthcare services across Dubai.
              </p>

              <div className="flex flex-col items-start gap-3">
                <GoogleRatingBadge />
                <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors hover:border-[#25b8a7]/30">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white">
                    <img src={dhaHealthBadge} alt="DHA" width="24" height="24" loading="lazy" decoding="async" className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#25b8a7]">
                      Officially Licensed
                    </p>
                    <p className="text-xs font-bold text-white">DHA Certified Professionals</p>
                    <p className="text-[11px] font-semibold text-white/80">License No. 6394609</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {serviceTags.map((tag) => (
                  <Link
                    key={tag.slug}
                    to={`/services/${tag.slug}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/70 transition hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent-light"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {[
                  { href: 'https://www.facebook.com/SIMSHomeHealthcare', icon: FaFacebookF, label: 'Facebook' },
                  { href: 'https://www.instagram.com/simshomehealthcare/', icon: FaInstagram, label: 'Instagram' },
                  { href: 'https://www.linkedin.com/company/sims-home-healthcare/', icon: FaLinkedinIn, label: 'LinkedIn' },
                  { href: 'https://www.youtube.com/@SIMSHomeHealthcareCenterLLC', icon: FaYoutube, label: 'YouTube' },
                  { href: 'https://x.com/SIMSHealthDubai', icon: IconX, label: 'X' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Services */}
            <div className="lg:col-span-4">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Popular Services
              </p>
              <ul className="space-y-3">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="group flex items-center gap-2 text-sm text-white/80 transition hover:text-brand-accent-light"
                    >
                      <FaChevronRight className="text-[10px] text-brand-accent-light transition group-hover:translate-x-0.5" />
                      {service.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 pt-2 text-xs font-black uppercase tracking-widest text-brand-accent-light transition hover:text-white"
                  >
                    View All Services
                    <FaChevronRight className="text-[10px]" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-3">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Legal
              </p>
              <ul className="space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link
                      to={`/legal/${link.slug}`}
                      className="group flex items-center gap-2 text-sm text-white/80 transition hover:text-brand-accent-light"
                    >
                      <FaChevronRight className="text-[10px] text-brand-accent-light transition group-hover:translate-x-0.5" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5 lg:col-span-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Contact Us
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:gap-4 sm:p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed text-white/85">
                   AB Center - 207 Sheikh Zayed Rd - Al Barsha First - Al Barsha - Dubai
                  </p>
                </div>
                <a
                  href="mailto:connect@simshomehealthcare.ae"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-brand-accent/30 hover:bg-brand-accent/5 sm:gap-4 sm:p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <span className="min-w-0 flex-1 whitespace-nowrap text-[12px] leading-relaxed text-white/85 sm:text-sm">
                    connect@simshomehealthcare.ae
                  </span>
                </a>
                <a
                  href="tel:+971525231028"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-brand-accent/30 hover:bg-brand-accent/5 sm:gap-4 sm:p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaPhoneAlt className="text-sm" />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-bold text-white pt-2">+971525231028</span>
                </a>
              </div>

              <div className="rounded-[24px] border border-brand-accent/20 bg-gradient-to-br from-brand-accent/15 to-transparent p-5">
                <div className="mb-2 flex items-center gap-2">
                  <FaClock className="text-brand-accent-light" />
                  <span className="text-xs font-black uppercase tracking-widest text-brand-accent-light">
                    Available 24/7
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  Compassionate care at your doorstep — anytime, including weekends and public
                  holidays.
                </p>
                <a
                  href="https://wa.me/971525231028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0a6b37] px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#085c2f]"
                >
                  <FaWhatsapp />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Areas We Cover
              </p>
              <p className="text-xs text-white/55">
                Home, hotel, and workplace visits across Dubai
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {areasCovered.map((area) => (
                <li
                  key={area.name}
                  className="flex min-h-[52px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <FaMapMarkerAlt className="shrink-0 text-[10px] text-brand-accent-light" />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold leading-tight text-white/90">{area.name}</span>
                    {area.detail && (
                      <span className="mt-0.5 block text-[10px] leading-tight text-white/50">{area.detail}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
              Payment Methods
            </p>
            <ul className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <li key={method.label}>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white px-3 py-2 text-[#003d4d] shadow-sm">
                      <Icon className={`h-5 w-5 shrink-0 ${method.iconClass}`} aria-hidden="true" />
                      <span className="text-xs font-bold leading-none">{method.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#022a35] p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 space-y-1">
                <p className="text-base font-bold tracking-tight text-white sm:text-lg">
                  Get to know SIMS Healthcare with AI
                </p>
                <p className="text-sm text-white/60">Ask AI about our services</p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {AI_ASSIST_LINKS.map(({ label, href, icon: Icon, iconClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-[#111827] shadow-sm transition hover:bg-slate-50"
                    aria-label={`Ask ${label} about SIMS Healthcare services`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-white/50 sm:flex-row lg:px-10">
            <p>
              © 2026 SIMS Home Healthcare | Licensed by Dubai Health Authority (DHA) | All Rights
              Reserved
            </p>
            <p className="font-bold text-brand-accent-light">Your Health, Our Priority</p>
          </div>
        </div>
      </footer>

      {/* Floating action buttons (chatbot bubble sits below this stack) */}
      <div className="fixed bottom-[84px] right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/971525231028"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a6b37] text-white shadow-lg transition hover:scale-105 hover:bg-[#085c2f]"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </a>
        <a
          href="tel:+971525231028"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg transition hover:scale-105 hover:bg-brand-accent-light"
          aria-label="Call us"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </>
  );
};

export default Footer;