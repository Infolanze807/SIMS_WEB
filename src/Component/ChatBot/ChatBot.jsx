import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaComments,
  FaTimes,
  FaHome,
  FaStethoscope,
  FaBookOpen,
  FaClipboardList,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { HEADER_NAV_SERVICES } from '../../data/servicesCatalog';

// Flat list of every service (parent services + their sub-services)
const CHAT_SERVICE_LINKS = HEADER_NAV_SERVICES.flatMap((service) => [
  { slug: service.slug, title: service.title, child: false },
  ...(service.children?.length
    ? service.children.map((item) => ({ slug: item.slug, title: item.title, child: true }))
    : []),
]);

const linkButtonClass =
  'group flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-brand-dark transition hover:bg-slate-50 hover:text-brand-accent';

const linkIconClass =
  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white';

/**
 * Static, frontend-only quick answers.
 * The bot "understands" the open page from the URL only —
 * no backend, no text input, no data fetching.
 */
const getPageContext = (pathname) => {
  if (pathname === '/') {
    return {
      message: 'Welcome to SIMS Healthcare! What would you like to do?',
      actions: [
        { to: '/services', icon: FaStethoscope, label: 'View our services' },
        { to: '/contact', icon: FaClipboardList, label: 'Book an appointment' },
        { to: '/blog', icon: FaBookOpen, label: 'Read our blog' },
        { to: '/about', icon: FaHome, label: 'About us' },
      ],
    };
  }

  if (pathname.startsWith('/services/')) {
    return {
      message: 'You are viewing a service. Choose another service or get in touch:',
      actions: [
        { to: '/contact', icon: FaEnvelope, label: 'Contact us' },
        { to: '/', icon: FaHome, label: 'Back to home' },
      ],
      showServices: true,
    };
  }

  if (pathname === '/services') {
    return {
      message: 'You are browsing our services. Choose a service to view details:',
      actions: [
        { to: '/contact', icon: FaEnvelope, label: 'Contact us' },
        { to: '/', icon: FaHome, label: 'Back to home' },
      ],
      showServices: true,
    };
  }

  if (pathname === '/contact') {
    return {
      message: 'You are on our contact page. Need something else?',
      actions: [
        { to: '/services', icon: FaStethoscope, label: 'Browse our services' },
        { to: '/blog', icon: FaBookOpen, label: 'Read our blog' },
        { to: '/', icon: FaHome, label: 'Back to home' },
      ],
    };
  }

  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return {
      message: 'Enjoying our articles? See how we can help you.',
      actions: [
        { to: '/services', icon: FaStethoscope, label: 'View our services' },
        { to: '/contact', icon: FaClipboardList, label: 'Book an appointment' },
        { to: '/', icon: FaHome, label: 'Back to home' },
      ],
    };
  }

  // About, legal, or any other page
  return {
    message: 'Hi there! Here are some quick links to help you.',
    actions: [
      { to: '/contact', icon: FaClipboardList, label: 'Contact us' },
      { to: '/services', icon: FaStethoscope, label: 'Our services' },
      { to: '/', icon: FaHome, label: 'Back to home' },
    ],
  };
};

const ChatBot = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // The chatbot stays open while the user navigates between pages.
  // It only closes automatically when arriving back on the home page —
  // otherwise it closes only when the user clicks the close button.
  useEffect(() => {
    if (location.pathname === '/') {
      setOpen(false);
    }
  }, [location.pathname]);

  const { message, actions, showServices = false } = getPageContext(location.pathname);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            className="pointer-events-auto w-[calc(100vw-2rem)] max-w-[320px] overflow-hidden rounded-3xl bg-white shadow-[0_28px_60px_-16px_rgba(0,61,77,0.35)] ring-1 ring-slate-200"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Quick help"
          >
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-brand-dark via-brand-dark-mid to-brand-dark px-5 py-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light">
                  SIMS Assistant
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{message}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white transition hover:bg-white/25"
                aria-label="Close quick help"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            <div className="space-y-1 px-3 py-3">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className={linkButtonClass}
                >
                  <span className="flex items-center gap-3">
                    <span className={linkIconClass}>
                      <action.icon className="text-xs" />
                    </span>
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>

            {showServices && (
              <div className="border-t border-slate-100 px-3 pb-3 pt-2">
                <p className="px-1 pb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                  View Our Services
                </p>
                <div className="max-h-52 space-y-0.5 overflow-y-auto pr-1">
                  {CHAT_SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className={`group/item flex w-full items-center justify-between gap-2 rounded-lg text-left text-sm font-semibold text-brand-dark transition hover:bg-slate-50 hover:text-brand-accent ${
                        service.child ? 'py-2 pl-8 pr-3 text-[13px]' : 'px-3 py-2.5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {service.child && (
                          <span className="h-1 w-1 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                        )}
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-slate-100 bg-[#FAFBFD] px-4 py-3">
              <a
                href="https://wa.me/971525231028"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-green px-3 py-2.5 text-xs font-semibold text-white transition hover:brightness-105"
              >
                <FaWhatsapp className="text-[11px]" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg transition hover:scale-105 hover:brightness-105"
        aria-expanded={open}
        aria-label={open ? 'Close quick help' : 'Open quick help'}
      >
        {open ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
      </button>
    </div>
  );
};

export default ChatBot;
