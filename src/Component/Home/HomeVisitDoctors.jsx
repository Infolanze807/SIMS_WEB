import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaHome,
  FaHotel,
  FaBaby,
  FaPhoneAlt,
  FaClock,
  FaUserMd,
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';
import { getServiceBySlug } from '../../data/servicesCatalog';

const PARENT_SERVICE = getServiceBySlug('doctor-on-call');

/** Exactly 4 cards for the home-visit doctors row */
const FEATURED_DOCTOR_SLUGS = [
  'doctor-at-home',
  'doctor-at-hotel',
  'pediatrician-at-home',
  'doctor-on-call',
];

const SERVICE_ICONS = {
  'doctor-at-home': FaHome,
  'doctor-at-hotel': FaHotel,
  'pediatrician-at-home': FaBaby,
  'doctor-on-call': FaPhoneAlt,
  'pediatrician-on-call': FaPhoneAlt,
};

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400';

const toCardImage = (url) =>
  url ? url.replace('w=1200', 'w=400').replace('q=80', 'q=85') : FALLBACK_IMAGE;

const VISIT_SERVICES = FEATURED_DOCTOR_SLUGS.map((slug) => {
  const service = getServiceBySlug(slug);
  const Icon = SERVICE_ICONS[slug] ?? FaUserMd;

  return {
    title: service?.title ?? slug,
    slug,
    description: service?.description ?? '',
    image: toCardImage(service?.image),
    icon: <Icon />,
  };
});

const DOCTOR_AVATARS = [
  {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=120',
    alt: 'DHA licensed doctor',
  },
  {
    src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120',
    alt: 'Home visit doctor',
  },
  {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=120',
    alt: 'Medical professional',
  },
];

const HERO_IMAGE =
  PARENT_SERVICE?.image ??
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200';

const ServiceImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setImgSrc(FALLBACK_IMAGE)}
      className={className}
    />
  );
};

const HomeVisitDoctors = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#003d4d] px-6 py-20 font-sans text-white antialiased lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#25b8a7]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-white/5 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,184,167,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <AnimateInView variants={fadeUp} className="space-y-7 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25b8a7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#25b8a7]">
                DHA Licensed Doctors
              </span>
            </div>

            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Home Visit{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25b8a7] to-[#4fc3c0]">
                Doctors
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-[15px]">
              {PARENT_SERVICE?.description ??
                'Your personal doctor typically arrives within 30 minutes of booking, fully equipped to provide comprehensive care in the comfort of your home.'}
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-4 transition-all duration-300"
            >
              <div className="flex -space-x-3">
                {DOCTOR_AVATARS.map((avatar, i) => (
                  <div
                    key={avatar.src}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#003d4d] bg-slate-700 shadow-md ring-2 ring-[#25b8a7]/30"
                    style={{ zIndex: DOCTOR_AVATARS.length - i }}
                  >
                    <ServiceImage
                      src={avatar.src}
                      alt={avatar.alt}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                ))}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#003d4d] bg-gradient-to-br from-[#25b8a7] to-[#0a5568] text-[10px] font-black text-white shadow-md">
                  +50
                </div>
              </div>
              <span className="border-b-2 border-[#25b8a7]/40 pb-0.5 text-sm font-bold text-white transition-colors group-hover:border-[#25b8a7] group-hover:text-[#4fc3c0]">
                See Our Doctors
              </span>
            </Link>
          </AnimateInView>

          <div className="relative lg:col-span-7">
            <div className="absolute -inset-3 rounded-[48px] border-2 border-dashed border-[#25b8a7]/30" />

            <motion.div
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-1 shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ServiceImage
                src={HERO_IMAGE}
                alt="SIMS home visit doctor providing care"
                className="block h-[300px] w-full rounded-[36px] object-cover object-center brightness-[0.95] contrast-[1.03] sm:h-[380px] lg:h-[440px]"
              />
              <div className="pointer-events-none absolute inset-1 rounded-[36px] bg-gradient-to-t from-[#002833]/80 via-transparent to-transparent" />
            </motion.div>

            {/* <motion.div
              className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#25b8a7] to-[#0a5568] text-white shadow-md">
                <FaClock className="text-sm" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Average response
                </p>
                <p className="text-sm font-black text-[#003d4d]">Within 30 minutes</p>
              </div>
            </motion.div> */}
          </div>
        </div>

        <motion.div
          className="relative z-20 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:-mt-12 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {VISIT_SERVICES.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25b8a7]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
                  <ServiceImage
                    src={service.image}
                    alt={service.title}
                    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[#003d4d]/20 transition-colors group-hover:bg-transparent" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold leading-snug text-white transition-colors group-hover:text-[#4fc3c0]">
                    {service.title}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 transition-colors group-hover:text-[#25b8a7]">
                    Learn more
                    <FaArrowRight className="text-[8px]" />
                  </span>
                </div>

                <span className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#25b8a7]/15 text-xs text-[#25b8a7] transition-all duration-300 group-hover:bg-[#25b8a7] group-hover:text-white">
                  {service.icon}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeVisitDoctors;
