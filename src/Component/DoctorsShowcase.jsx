import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AnimateInView, { fadeUp } from './Services/AnimateInView';
import DoctorCard from './DoctorCard';
import { DOCTORS } from '../data/doctors';

import 'swiper/css';
import 'swiper/css/pagination';

const DoctorsShowcase = ({
  eyebrow = 'Expert Medical Team',
  title = (
    <>
      Meet Our{' '}
      <span className="bg-gradient-to-r from-brand-accent to-brand-dark-mid bg-clip-text text-transparent">
        Excellent Team
      </span>
    </>
  ),
  description = 'DHA-licensed physicians ready for home, hotel, and on-call visits across Dubai — compassionate care delivered where you are most comfortable.',
  headerAlign = 'left',
}) => {
  const swiperRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const updateSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    updateSwiper();
    window.addEventListener('resize', updateSwiper);

    const section = sectionRef.current;
    if (!section) {
      return () => window.removeEventListener('resize', updateSwiper);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          updateSwiper();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => {
      window.removeEventListener('resize', updateSwiper);
      observer.disconnect();
    };
  }, []);

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

  const isCentered = headerAlign === 'center';

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FAFBFD] px-6 py-24 font-sans antialiased text-brand-dark lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-accent/8 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand-dark/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`mb-12 flex flex-col gap-6 lg:mb-14 ${
            isCentered
              ? 'items-center text-center'
              : 'lg:flex-row lg:items-end lg:justify-between'
          }`}
        >
          <AnimateInView
            variants={fadeUp}
            className={`max-w-2xl space-y-4 ${isCentered ? 'mx-auto' : ''}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className={`max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px] ${isCentered ? 'mx-auto' : ''}`}>
              {description}
            </p>
          </AnimateInView>

          <AnimateInView variants={fadeUp} className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous doctors"
              onClick={handlePrev}
              className="meet-doctors-prev flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark shadow-sm transition-all duration-300 hover:scale-105 hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white active:scale-95"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <button
              type="button"
              aria-label="Next doctors"
              onClick={handleNext}
              className="meet-doctors-next flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark shadow-sm transition-all duration-300 hover:scale-105 hover:border-brand-accent/40 hover:bg-brand-accent hover:text-white active:scale-95"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </AnimateInView>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Pagination, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              requestAnimationFrame(() => swiper.update());
            }}
            observer
            observeParents
            resizeObserver
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
        </div>
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

export default DoctorsShowcase;
