import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight, FaCertificate, FaLanguage, FaUserMd } from 'react-icons/fa';
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

const DoctorCard = ({ doctor }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_16px_40px_rgba(0,61,77,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#25b8a7]/25 hover:shadow-[0_24px_50px_rgba(0,61,77,0.1)]">
    <div className="relative aspect-[4/3] overflow-hidden">
      <DoctorImage
        src={doctor.image}
        alt={doctor.name}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003d4d]/70 via-[#003d4d]/10 to-transparent" />
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#003d4d] shadow-sm">
        <FaCertificate className="text-[#25b8a7]" />
        DHA Licensed
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black tracking-tight text-[#003d4d] transition-colors group-hover:text-[#25b8a7]">
            {doctor.name}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-[#25b8a7]">{doctor.specialty}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25b8a7]/10 text-[#25b8a7]">
          <FaUserMd className="text-sm" />
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">{doctor.bio}</p>

      <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <p>
          <span className="font-bold text-[#003d4d]">Experience:</span> {doctor.experience}
        </p>
        <p className="flex items-center gap-1.5">
          <FaLanguage className="shrink-0 text-[#25b8a7]" />
          <span>{doctor.languages.join(' · ')}</span>
        </p>
      </div>
    </div>
  </article>
);

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
    <section className="relative w-full overflow-hidden bg-[#FAFBFD] px-6 py-24 font-sans antialiased text-[#003d4d] lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#25b8a7]/8 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#003d4d]/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <AnimateInView variants={fadeUp} className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#25b8a7]/20 bg-[#25b8a7]/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25b8a7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#25b8a7]">
                Expert Medical Team
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-[#25b8a7] to-[#0a5568] bg-clip-text text-transparent">
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
              className="meet-doctors-prev flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#003d4d] shadow-sm transition-all hover:border-[#25b8a7]/40 hover:bg-[#25b8a7] hover:text-white"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              type="button"
              aria-label="Next doctors"
              onClick={handleNext}
              className="meet-doctors-next flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#003d4d] shadow-sm transition-all hover:border-[#25b8a7]/40 hover:bg-[#25b8a7] hover:text-white"
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
            className="meet-doctors-swiper !pb-12"
          >
            {DOCTORS.map((doctor) => (
              <SwiperSlide key={doctor.id} className="!h-auto">
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimateInView>

        {/* <AnimateInView variants={fadeUp} className="mt-10 text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-[#003d4d] px-7 py-3.5 text-sm font-bold text-[#003d4d] transition-all duration-300 hover:border-[#25b8a7] hover:bg-[#25b8a7] hover:text-white"
          >
            View Full Medical Team
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        </AnimateInView> */}
      </div>

      <style>{`
        .meet-doctors-swiper .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 0.5;
        }
        .meet-doctors-swiper .swiper-pagination-bullet-active {
          background: #25b8a7;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default MeetOurDoctors;
