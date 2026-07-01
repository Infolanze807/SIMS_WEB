import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import placeLogoBadge from '../../../assets/PLACELOGO.png';
import dhaLogo from '../../../assets/DHALOGO.png';

const ServiceDetailHero = ({ eyebrow, headline, subheadline, bullets = [], image, title, badges = {} }) => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-brand-dark font-sans text-white">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-25"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark-mid/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,184,167,0.25),transparent_55%)]" />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-light/80 transition-colors hover:text-white"
          >
            ← All Services
          </Link>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="space-y-6 lg:col-span-7"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {headline}
            </motion.h1>
            {subheadline && (
              <motion.p
                className="max-w-2xl text-base font-medium leading-relaxed text-white/75 lg:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                {subheadline}
              </motion.p>
            )}

            <div className="grid gap-3 pt-2 sm:grid-cols-1">
              {bullets.map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-accent-light" />
                  <p className="text-sm leading-relaxed text-white/85">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="tel:+971525231028"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-black tracking-wide text-brand-dark shadow-xl"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhoneAlt /> +971525231028
              </motion.a>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-brand-accent/40 bg-brand-accent/20 px-5 py-4 text-xs font-black uppercase tracking-widest text-brand-accent-light">
                24/7 Dubai
              </span>
            </motion.div>

            {/* DHA Logo — large trust badge below CTA */}
            {badges.showDha && (
              <motion.div
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm px-5 py-4 w-fit"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
              >
                <img src={dhaLogo} alt="Dubai Health Authority" className="h-14 w-14 object-contain shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">Licensed by</p>
                  <p className="text-sm font-black text-white leading-tight">Dubai Health Authority</p>
                  <p className="text-[10px] font-medium text-white/60 mt-0.5">DHA-Certified Medical Professionals</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute -inset-4 rotate-2 rounded-[48px] border border-brand-accent/20" />
            <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-[40px] border border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <img src={image} alt={title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />



              {/* Bottom card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-base font-black text-brand-dark">{title}</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  DHA Certified · SIMS Healthcare
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
