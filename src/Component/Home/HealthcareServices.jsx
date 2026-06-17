import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaFlask,
  FaUserMd,
  FaHeartbeat,
  FaSyringe,
  FaLungs,
  FaVirus,
  FaShieldVirus,
  FaStethoscope,
  FaBaby,
  FaBriefcaseMedical,
  FaArrowRight,
} from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';

const SERVICES_DATA = [
  {
    slug: 'doctor-on-call',
    title: 'Doctor On Call',
    description:
      'Our DHA-certified doctors bring personalized medical care right to your doorstep, hotel room, or workplace anytime you need it.',
    icon: <FaPhoneAlt />,
    bgImage:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'lab-test-at-home',
    title: 'Lab Test at Home',
    description:
      'Get reliable, confidential lab tests at your convenience. Our licensed professionals cover a wide range of tests, delivered and collected safely at your location.',
    icon: <FaFlask />,
    bgImage:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy at Home',
    description:
      'Personalized physiotherapy sessions delivered to your home, helping you recover from injuries, manage pain, and improve mobility in comfort.',
    icon: <FaUserMd />,
    bgImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'nursing-care-at-home',
    title: 'Nursing Care at Home',
    description:
      'Our trained nurses offer compassionate, professional care tailored to your needs, from elderly support to post-surgical recovery.',
    icon: <FaHeartbeat />,
    bgImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'iv-therapies',
    title: 'IV Therapies',
    description:
      'Boost energy, immunity, and hydration with our range of IV drip therapies, safely administered by licensed nurses at home or hotel.',
    icon: <FaBriefcaseMedical />,
    bgImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'oxygen-therapy-at-home',
    title: 'Oxygen Therapy at Home',
    description:
      'Oxygen support for respiratory conditions delivered and monitored by healthcare professionals in your home.',
    icon: <FaLungs />,
    bgImage:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'covid-pcr-test-at-home',
    title: 'Covid PCR Test at Home',
    description:
      'Certified COVID-19 PCR testing with quick home sample collection and official DHA-approved reports.',
    icon: <FaVirus />,
    bgImage:
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'flu-vaccination-at-home-in-dubai',
    title: 'Flu Vaccination at Home in Dubai',
    description:
      'Stay protected from seasonal flu with licensed nurses administering vaccines in the comfort and safety of your home.',
    icon: <FaShieldVirus />,
    bgImage:
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'health-checkup-at-home',
    title: 'Health Checkup at Home',
    description:
      'Comprehensive health screening packages including lab tests and doctor consultations, tailored to your wellness goals and delivered to your doorstep.',
    icon: <FaStethoscope />,
    bgImage:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'injection-service-at-home',
    title: 'Injection Service at Home',
    description:
      'SIMS Health Care offers safe and professional injection service at home with trained nurses, ensuring comfort, hygiene, and complete privacy.',
    icon: <FaSyringe />,
    bgImage:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'mother-baby-care',
    title: 'Mother & baby care',
    description:
      'SIMS Health Care provides expert mother & baby care at home with skilled nurses, ensuring safety, comfort, support, and personalized attention.',
    icon: <FaBaby />,
    bgImage:
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600',
  },
  {
    slug: 'elderly-care',
    title: 'Elderly care',
    description:
      'SIMS Health Care offers compassionate elderly care at home with trained caregivers, ensuring dignity, safety, comfort, and reliable daily support.',
    icon: <FaUserMd />,
    bgImage:
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=600',
  },
];

const cardImageVariants = {
  hidden: { scale: 1.08, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const HealthcareServices = () => {
  return (
    <section className="w-full bg-[#FAFBFD] px-4 py-16 font-sans antialiased selection:bg-[#25b8a7]/20 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateInView className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-12">
          <motion.div
            className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#25b8a7]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#25b8a7]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25b8a7]" />
            <span>Premium Home Care</span>
          </motion.div>
          <h2 className="text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Comprehensive Home{' '}
            <span className="relative inline-block text-[#25b8a7]">Healthcare Services</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-slate-500 md:text-base">
            From Lab Tests to Post-Surgical Care — All in the Comfort of Your Home
          </p>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SERVICES_DATA.map((service, idx) => (
            <motion.article
              key={service.slug}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="group relative flex min-h-[130px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:border-[#25b8a7]/30 hover:shadow-[0_16px_40px_-20px_rgba(0,61,77,0.2)] sm:min-h-[140px]"
            >
              <Link
                to={`/services/${service.slug}`}
                className="flex min-w-0 flex-1"
                aria-label={`Learn more about ${service.title}`}
              >
              {/* Full-height image — every service */}
              <div className="relative w-[118px] shrink-0 overflow-hidden sm:w-[132px]">
                <motion.img
                  src={service.bgImage}
                  alt={service.title}
                  loading="lazy"
                  variants={cardImageVariants}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
                <div className="absolute inset-0 bg-[#003d4d]/10 transition-colors duration-300 group-hover:bg-[#003d4d]/0" />

                <motion.div
                  className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 bg-white/95 text-sm text-[#25b8a7] shadow-md backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {service.icon}
                </motion.div>

                <span className="absolute left-2 top-2 rounded-md bg-[#003d4d]/75 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white backdrop-blur-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                <h3 className="text-base font-bold leading-snug tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-[#25b8a7] sm:text-[17px]">
                  {service.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {service.description}
                </p>

                <span className="mt-3 inline-flex w-fit items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#25b8a7]">
                  Learn More
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#25b8a7]/10 text-[#25b8a7] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#25b8a7] group-hover:text-white">
                    <FaArrowRight className="text-[8px]" />
                  </span>
                </span>
              </div>
              </Link>

              <motion.div
                className="absolute bottom-0 left-[118px] right-0 h-0.5 origin-left bg-gradient-to-r from-[#25b8a7] to-[#003d4d] sm:left-[132px]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareServices;
