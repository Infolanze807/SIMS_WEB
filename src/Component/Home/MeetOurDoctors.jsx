import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCertificate,
  FaLanguage,
  FaUserMd,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import AnimateInView, { fadeUp } from '../Services/AnimateInView';
import { DOCTORS } from '../../data/doctors';

import 'swiper/css';
import 'swiper/css/pagination';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';

const DoctorImage = ({ src, alt, className }) => {
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

const DoctorCard = ({ doctor }) => {
  const whatsappUrl = `https://wa.me/971525231028?text=${encodeURIComponent(
    `Hi SIMS Healthcare, I would like to book a home visit appointment with ${doctor.name} (${doctor.specialty}).`
  )}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100/80 bg-white shadow-[0_12px_30px_rgba(0,61,77,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/30 hover:shadow-[0_20px_40px_rgba(0,61,77,0.08)]">
      {/* Image Section */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
        <DoctorImage
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/15 to-transparent opacity-90 group-hover:via-brand-dark/20 transition-all duration-500" />

        {/* Rating Floating Badge */}
        {/* <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-brand-dark shadow-sm">
          <FaStar className="text-amber-400 text-[10px]" />
          <span>{doctor.rating}</span>
          <span className="text-slate-400 font-normal text-[10px]">({doctor.reviewsCount})</span>
        </div> */}

        {/* Availability Floating Badge */}
        {/* <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-[#25d366]/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          <span>On-Call</span>
        </div> */}

        {/* DHA Licensed Floating Badge */}
        {/* <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md px-3.5 py-2 text-xs shadow-sm">
          <span className="flex items-center gap-1.5 font-bold text-brand-dark">
            <FaCertificate className="text-brand-accent text-sm shrink-0" />
            DHA Licensed
          </span>
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100/80 px-2 py-0.5 rounded-md">
            {doctor.dhaLicense}
          </span>
        </div> */}
      </div>

      {/* Info & Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-brand-accent">
              {doctor.specialty}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-brand-dark transition-colors group-hover:text-brand-accent duration-300">
              {doctor.name}
            </h3>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-sm">
            <FaUserMd className="text-base" />
          </div>
        </div>

        {/* Bio */}
        <p className="mb-5 line-clamp-2 text-[13px] leading-relaxed text-slate-500 flex-1">
          {doctor.bio}
        </p>

        {/* Technical/Experience Grid */}
        {/* <div className="mb-6 space-y-3.5 border-t border-slate-100 pt-4 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-brand-dark flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-brand-accent" />
              Experience:
            </span>
            <span className="font-bold text-brand-dark-mid bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
              {doctor.experience}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-brand-dark flex items-center gap-1.5">
              <FaLanguage className="text-brand-accent text-sm" />
              Languages:
            </span>
            <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
              {doctor.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-brand-dark/5 px-2 py-0.5 text-[10px] font-bold text-brand-dark-mid"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* Quick Booking CTAs */}
        {/* <div className="mt-auto grid grid-cols-2 gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25d366] py-3 text-xs font-extrabold text-white shadow-sm transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-md hover:scale-[1.02]"
          >
            <FaWhatsapp className="text-[14px]" />
            <span>Book Visit</span>
          </a>
          <a
            href="tel:+971525231028"
            className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 bg-white py-2.5 text-xs font-extrabold text-brand-dark transition-all duration-300 hover:border-brand-accent/50 hover:bg-slate-50 hover:text-brand-accent hover:scale-[1.02]"
          >
            <FaPhoneAlt className="text-[11px]" />
            <span>Call Now</span>
          </a>
        </div> */}
      </div>
    </article>
  );
};

const MeetOurDoctors = () => {
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.isBeginning) {
      const slidesPerView = swiper.params.slidesPerView;
      const lastStartIndex = Math.max(DOCTORS.length - Math.ceil(slidesPerView), 0);
      swiper.slideTo(lastStartIndex);
      return;
    }

    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.isEnd) {
      swiper.slideTo(0);
      return;
    }

    swiper.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFD] px-6 py-24 font-sans antialiased text-brand-dark lg:px-10 lg:py-28">
      {/* Decorative Blur Spheres */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-accent/8 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-dark/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <AnimateInView variants={fadeUp} className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                Expert Medical Team
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl text-brand-dark">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-brand-accent to-brand-dark-mid bg-clip-text text-transparent">
                Doctors
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              DHA-licensed physicians ready for home, hotel, and on-call visits across Dubai —
              compassionate care delivered where you are most comfortable.
            </p>
          </AnimateInView>

          <AnimateInView variants={fadeUp} className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous doctors"
              onClick={handlePrev}
              className="meet-doctors-prev flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark shadow-sm transition-all hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white hover:scale-105 active:scale-95 duration-300"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              type="button"
              aria-label="Next doctors"
              onClick={handleNext}
              className="meet-doctors-next flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark shadow-sm transition-all hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white hover:scale-105 active:scale-95 duration-300"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </AnimateInView>
        </div>

        <AnimateInView variants={fadeUp}>
          <Swiper
            modules={[Pagination, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={600}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, spaceBetween: 24, slidesPerGroup: 1 },
            }}
            className="meet-doctors-swiper !pb-14"
          >
            {DOCTORS.map((doctor) => (
              <SwiperSlide key={doctor.id} className="!h-auto">
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimateInView>
      </div>

      <style>{`
        .meet-doctors-swiper .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 0.35;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .meet-doctors-swiper .swiper-pagination-bullet-active {
          background: #25b8a7;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default MeetOurDoctors;
