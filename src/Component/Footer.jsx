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
} from 'react-icons/fa';
import simsLogo from '../assets/sims-logo.png';
import { HEADER_NAV_SERVICES } from '../data/servicesCatalog';

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
  { label: 'Nursing Care at Home', slug: 'nursing-care-at-home' },
  { label: 'IV Therapy at Home', slug: 'iv-therapies' },
  { label: 'Health Checkup at Home', slug: 'health-checkup-at-home' },
];

const serviceTags = HEADER_NAV_SERVICES.slice(0, 8).map((s) => ({
  label: s.title,
  slug: s.slug,
}));

const FooterLink = ({ to, children, className = '' }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `group flex items-center gap-2 text-sm transition ${className} ${
        isActive ? 'text-brand-accent-light' : 'text-white/80 hover:text-brand-accent-light'
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="space-y-6 lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-4">
                <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
                  <img src={simsLogo} alt="SIMS Healthcare" className="h-12 w-auto object-contain" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent-light">
                    DHA Licensed
                  </p>
                  <p className="text-xs font-bold text-white">Dubai Health Authority</p>
                </div>
              </Link>

              <p className="text-sm leading-relaxed text-white/75">
                At SIMS Home Healthcare we bring DHA-approved medical care directly to your doorstep
                — whether at home, hotel, or office. Our experienced doctors, nurses, and
                physiotherapists provide 24/7 healthcare services across Dubai.
              </p>

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
                  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
                  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
                  { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
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
            <div className="lg:col-span-3">
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

            {/* Contact & 24/7 */}
            <div className="space-y-5 lg:col-span-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                Contact Us
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed text-white/85">
                    207, AB Center , Sheikh Zayed Road,  Al Barsha First , Dubai
                  </p>
                </div>
                <a
                  href="mailto:connect@simshomehealthcare.ae"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-brand-accent/30 hover:bg-brand-accent/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <span className="min-w-0 flex-1 break-all text-sm leading-relaxed text-white/85">
                    connect@simshomehealthcare.ae
                  </span>
                </a>
                <a
                  href="tel:+971525231028"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-brand-accent/30 hover:bg-brand-accent/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent-light">
                    <FaPhoneAlt className="text-sm" />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-bold text-white pt-2">+971 5252 310 28</span>
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
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp />
                  Book on WhatsApp
                </a>
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

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/971525231028"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
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
