import React, { useState, useRef, useEffect } from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import simsLogo from '../assets/sims-logo.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HEADER_NAV_SERVICES } from '../data/servicesCatalog';

const navLinkClass = ({ isActive }) =>
  `font-medium transition ${isActive ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const servicesRef = useRef(null);
  const [showServices, setShowServices] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [expandedMobileService, setExpandedMobileService] = useState(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setExpandedMobileService(null);
  };

  const openServicesMenu = () => {
    setShowServices(true);
    import('../data/serviceOverrides');
    import('../data/serviceManualOverrides');
    if (!activeService) {
      const firstWithChildren = HEADER_NAV_SERVICES.find((s) => s.children.length > 0);
      if (firstWithChildren) setActiveService(firstWithChildren);
    }
  };

  const closeServicesMenu = () => {
    setShowServices(false);
    setActiveService(null);
  };

  const goToService = (slug) => {
    closeServicesMenu();
    closeMobileMenu();
    navigate(`/services/${slug}`);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!showServices) return;

    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        closeServicesMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showServices]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/95 shadow-[0_4px_24px_rgba(0,61,77,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6 lg:py-5">
        <NavLink to="/" onClick={closeMobileMenu}>
          <img
            src={simsLogo}
            alt="SIMS Healthcare"
            className="h-12 w-auto object-contain lg:h-16"
          />
        </NavLink>

        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 font-medium transition ${
                  isActive || showServices
                    ? 'text-brand-accent'
                    : 'text-brand-dark hover:text-brand-accent'
                }`
              }
            >
              Our Services
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}
              />
            </NavLink>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  className="absolute left-0 top-full z-50 pt-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Hover bridge — keeps menu open when moving from link to panel */}
                  <div className="absolute -top-3 left-0 h-3 w-full" aria-hidden="true" />

                  <div className="flex overflow-hidden rounded-[24px] shadow-[0_28px_60px_-16px_rgba(0,61,77,0.28)] ring-1 ring-slate-200/90">
                    {/* Main services — left column (matches live site) */}
                    <div className="w-[300px] shrink-0 bg-white">
                      <div className="border-b border-slate-100 bg-[#FAFBFD] px-5 py-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                          Our Services
                        </p>
                      </div>

                      <div className="">
                      {HEADER_NAV_SERVICES.map((service) => {
                        const isActive = activeService?.slug === service.slug;
                        const hasChildren = service.children.length > 0;

                        return (
                          <div
                            key={service.slug}
                            role="button"
                            tabIndex={0}
                            onMouseEnter={() => setActiveService(service)}
                            onClick={() => goToService(service.slug)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                goToService(service.slug);
                              }
                            }}
                            className={`group flex cursor-pointer items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 text-left transition-all duration-200 last:border-b-0 ${
                              isActive
                                ? 'bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-dark text-white'
                                : 'bg-white text-brand-dark hover:bg-[#FAFBFD] hover:text-brand-accent'
                            }`}
                          >
                            <span className="text-[15px] font-bold leading-snug tracking-tight">
                              {service.title}
                            </span>
                            {hasChildren && (
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs transition-all duration-200 ${
                                  isActive
                                    ? 'bg-white/15 text-white'
                                    : 'bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white'
                                }`}
                              >
                                <FaPlus className="text-[10px]" />
                              </span>
                            )}
                            {!hasChildren && (
                              <FaChevronRight
                                className={`shrink-0 text-[10px] transition-all ${
                                  isActive ? 'text-brand-accent-light' : 'text-slate-300 group-hover:text-brand-accent'
                                }`}
                              />
                            )}
                          </div>
                        );
                      })}
                      </div>
                    </div>

                    {/* Sub-services — right column (opens beside left list) */}
                    {activeService?.children?.length > 0 && (
                      <motion.div
                        className="w-[310px] shrink-0 border-l border-slate-100 bg-[#FAFBFD]"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-b border-slate-100 bg-brand-dark px-5 py-3.5">
                          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-accent-light">
                            {activeService.title}
                          </p>
                        </div>

                        <div className="">
                          {activeService.children.map((item) => (
                            <button
                              key={item.slug}
                              type="button"
                              onClick={() => goToService(item.slug)}
                              className="group/item flex w-full items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 text-left transition-all duration-200 last:border-b-0 hover:bg-white hover:pl-6"
                            >
                              <span className="text-sm font-semibold text-brand-dark transition-colors group-hover/item:text-brand-accent">
                                {item.title}
                              </span>
                              <FaChevronRight className="shrink-0 text-[9px] text-slate-300 transition-all group-hover/item:translate-x-0.5 group-hover/item:text-brand-accent" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:0525231028"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-accent/30 hover:text-brand-accent sm:flex sm:px-4"
          >
            <FaPhoneAlt />
            <span className="hidden md:inline">052 523 1028</span>
          </a>

          <a
            href="https://wa.me/971525231028"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-green px-3 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.45)] transition hover:brightness-105 sm:px-5"
          >
            <FaWhatsapp />
            <span className="hidden sm:inline">Book Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark transition hover:border-brand-accent/30 hover:text-brand-accent lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="border-t border-slate-100 bg-white lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                      isActive
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                      isActive
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                    }`
                  }
                >
                  About Us
                </NavLink>

                <div className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-semibold transition ${
                      mobileServicesOpen || location.pathname.startsWith('/services')
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                    }`}
                  >
                    Our Services
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pb-2 pl-2 pt-1">
                          <NavLink
                            to="/services"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                                isActive
                                  ? 'text-brand-accent'
                                  : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                              }`
                            }
                          >
                            All Services
                          </NavLink>

                          {HEADER_NAV_SERVICES.map((service) => {
                            const hasChildren = service.children.length > 0;
                            const isExpanded = expandedMobileService === service.slug;

                            return (
                              <div key={service.slug} className="rounded-lg">
                                <div className="flex items-stretch">
                                  <button
                                    type="button"
                                    onClick={() => goToService(service.slug)}
                                    className="flex-1 rounded-lg px-4 py-3 text-left text-sm font-semibold text-brand-dark transition hover:bg-slate-50 hover:text-brand-accent"
                                  >
                                    {service.title}
                                  </button>
                                  {hasChildren && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setExpandedMobileService(isExpanded ? null : service.slug)
                                      }
                                      className="flex w-11 shrink-0 items-center justify-center rounded-lg text-brand-accent transition hover:bg-brand-accent/10"
                                      aria-expanded={isExpanded}
                                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${service.title}`}
                                    >
                                      <FaChevronDown
                                        className={`text-[10px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                      />
                                    </button>
                                  )}
                                </div>

                                <AnimatePresence>
                                  {hasChildren && isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="space-y-0.5 border-l-2 border-brand-accent/20 py-1 pl-4">
                                        {service.children.map((item) => (
                                          <button
                                            key={item.slug}
                                            type="button"
                                            onClick={() => goToService(item.slug)}
                                            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-brand-dark transition hover:bg-slate-50 hover:text-brand-accent"
                                          >
                                            <span>{item.title}</span>
                                            <FaChevronRight className="shrink-0 text-[9px] text-slate-300" />
                                          </button>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                      isActive
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                    }`
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                      isActive
                        ? 'bg-brand-accent/10 text-brand-accent'
                        : 'text-brand-dark hover:bg-slate-50 hover:text-brand-accent'
                    }`
                  }
                >
                  Blog
                </NavLink>
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:hidden">
                <a
                  href="tel:0525231028"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent/30 hover:text-brand-accent"
                >
                  <FaPhoneAlt />
                  052 523 1028
                </a>
                <a
                  href="https://wa.me/971525231028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.45)] transition hover:brightness-105"
                >
                  <FaWhatsapp />
                  Book Now on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
