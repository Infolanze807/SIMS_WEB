import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronRight,
} from 'react-icons/fa'
import simsLogo from '../assets/sims-logo.png'

const serviceTags = [
  'Home Healthcare in Dubai',
  'Doctor on Call',
  'Lab Tests at Home',
  'Nursing Care',
  'Physiotherapy',
  'IV Therapy',
  'Elderly Care',
  'Post-Surgery Care',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
  { label: 'Blog', href: '#blog' },
]

const Footer = () => {
  return (
    <>
      <footer className="bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left column */}
            <div className="space-y-5 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-2xl bg-white px-5 py-3">
                  <img
                    src={simsLogo}
                    alt="SIMS Healthcare"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Dubai Health Authority
                  </p>
                  <p className="text-xs font-bold text-brand-dark">Licensed Provider</p>
                </div>
              </div>

              <p className="text-sm font-bold leading-relaxed text-white/90">
                {serviceTags.join(' | ')}
              </p>

              <p className="text-sm leading-relaxed text-white/75">
                At SIMS Home Healthcare we bring DHA-approved medical care directly to your
                doorstep – whether at home, hotel, or office. Our experienced doctors, nurses,
                and physiotherapists provide 24/7 healthcare services across Dubai, ensuring you
                and your loved ones receive professional, private, and personalized treatment at
                your convenience.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark-mid text-white transition hover:bg-brand-accent"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark-mid text-white transition hover:bg-brand-accent"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark-mid text-white transition hover:bg-brand-accent"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>

              <ul className="space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark-mid">
                    <FaMapMarkerAlt className="text-xs text-brand-accent-light" />
                  </span>
                  Al Barsha1, Shaikh Zayed Road, Dubai
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark-mid">
                    <FaEnvelope className="text-xs text-brand-accent-light" />
                  </span>
                  <a
                    href="mailto:connect@simshomehealthcare.ae"
                    className="transition hover:text-brand-accent-light"
                  >
                    connect@simshomehealthcare.ae
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark-mid">
                    <FaPhoneAlt className="text-xs text-brand-accent-light" />
                  </span>
                  <a href="tel:+971525231028" className="transition hover:text-brand-accent-light">
                    +971 5252 310 28
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-base font-bold text-white">Quick Links:</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/85 transition hover:text-brand-accent-light"
                    >
                      <FaChevronRight className="text-xs text-brand-accent-light" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* We're Available */}
            <div className="lg:col-span-4">
              <h3 className="mb-5 text-base font-bold text-white">We&apos;re Available</h3>
              <p className="text-sm leading-relaxed text-white/75">
                <span className="font-bold text-white">Available 24/7</span>
                {' – Compassionate Care at Your Doorstep, Anytime.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto px-6 py-5 text-center text-xs text-white/60 lg:px-10">
            © 2026 SIMS Home Healthcare | Licensed by Dubai Health Authority (DHA) | All Rights
            Reserved Your Health, Our Priority
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
          href="tel:0525231028"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg transition hover:scale-105 hover:bg-brand-accent-light"
          aria-label="Call us"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </>
  )
}

export default Footer
