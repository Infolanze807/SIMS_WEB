import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AnimateInView, { fadeUp } from '../Services/AnimateInView';
import { getServiceBySlug } from '../../data/servicesCatalog';

const IV_SERVICE = getServiceBySlug('iv-therapies');
const LAB_SERVICE = getServiceBySlug('lab-test-at-home');

const IV_THERAPY_ITEMS = [
  { label: 'Vitamin Infusion', slug: 'iv-therapies' },
  { label: 'Immunity Boost', slug: 'iv-therapies' },
  { label: 'Energy Boost', slug: 'iv-therapies' },
  { label: 'Hydration IV', slug: 'iv-therapies' },
  { label: 'Skin Glow Drip', slug: 'iv-therapies' },
  { label: 'Hangover Recovery', slug: 'iv-therapies' },
];

const LAB_FEATURED_SLUGS = [
  'beta-hcg-test-at-home',
  'hormones-lab-test',
  'std-test-at-home',
  'hiv-test-at-home',
  'nipt-test-at-home',
  'dna-test-at-home',
];

const LAB_TEST_ITEMS = LAB_FEATURED_SLUGS.map((slug) => {
  const service = getServiceBySlug(slug);
  return {
    label: service?.title ?? slug,
    slug,
  };
});

const toThumb = (url) =>
  url?.replace('w=1200', 'w=600').replace('q=80', 'q=85') ??
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';

const ServicePanel = ({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  mainImage,
  mainImageAlt,
  previewImage,
  previewLabel,
  items,
  allServicesHref,
  allServicesLabel = 'All Services',
  badge,
  bgClass = 'bg-[#FAFBFD]',
  reverse = false,
}) => (
  <AnimateInView variants={fadeUp}>
    <div className={`${bgClass} px-6 py-10 lg:px-10 lg:py-14`}>
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[28px] border border-[#25b8a7]/10 bg-white shadow-[0_20px_60px_rgba(0,61,77,0.07)] lg:grid-cols-12 ${
            reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
          }`}
        >
          {/* Left — main image */}
          <div className="relative min-h-[220px] lg:col-span-3 lg:min-h-0">
            <img
              src={toThumb(mainImage)}
              alt={mainImageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003d4d]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#003d4d]/10" />
          </div>

          {/* Center — content */}
          <div className="flex flex-col justify-center border-[#25b8a7]/10 px-6 py-8 lg:col-span-5 lg:border-x lg:px-10 lg:py-10">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#25b8a7]">
              {eyebrow}
            </span>
            <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#003d4d] sm:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              {description}
            </p>
            <Link
              to={ctaHref}
              className="group mt-7 inline-flex w-fit items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#25b8a7] to-[#0a5568] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:from-[#1fa394] hover:to-[#084656] hover:shadow-lg"
            >
              {ctaLabel}
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right — preview + list */}
          <div className="relative border-t border-[#25b8a7]/10 px-6 py-8 lg:col-span-4 lg:border-t-0 lg:px-8 lg:py-10">
            {badge && (
              <span className="mb-4 inline-block rounded-full bg-[#003d4d] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {badge}
              </span>
            )}

            <div className="relative mb-5 overflow-hidden rounded-2xl">
              <img
                src={toThumb(previewImage)}
                alt=""
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-28 w-full object-cover sm:h-32"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d4d]/70 to-transparent" />
              {previewLabel && (
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                  {previewLabel}
                </span>
              )}
            </div>

            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={`${item.slug}-${item.label}`}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="group flex items-center justify-between text-sm font-medium text-slate-500 transition-colors hover:text-[#25b8a7]"
                  >
                    <span>{item.label}</span>
                    <FaArrowRight className="text-[10px] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {allServicesHref && (
              <Link
                to={allServicesHref}
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#003d4d] transition-colors hover:text-[#25b8a7]"
              >
                {allServicesLabel}
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </AnimateInView>
);

const HomeFeaturedServices = () => {
  return (
    <section className="font-sans text-[#003d4d]">
      <ServicePanel
        eyebrow="IV Therapy"
        title="Premium SIMS IV Therapy"
        description={
          IV_SERVICE?.description ??
          'Get personalized IV therapy administered by licensed nurses in the comfort of your home to boost energy, immunity, and overall wellness.'
        }
        ctaHref="/services/iv-therapies"
        ctaLabel="Get Started"
        mainImage={IV_SERVICE?.image}
        mainImageAlt="IV therapy at home in Dubai"
        previewImage={IV_SERVICE?.image}
        previewLabel="IV Drip at Home"
        items={IV_THERAPY_ITEMS}
        bgClass="bg-[#FAFBFD]"
      />

      <ServicePanel
        eyebrow="Lab Tests"
        title="Lab Tests at Home"
        description={
          LAB_SERVICE?.description ??
          'Getting your blood sample collected is now easy with SIMS lab tests at home. Quick reporting ensures timely diagnosis and treatment.'
        }
        ctaHref="/services/lab-test-at-home"
        ctaLabel="Get Started"
        mainImage={LAB_SERVICE?.image}
        mainImageAlt="Lab tests at home in Dubai"
        previewImage={LAB_SERVICE?.image}
        previewLabel="Home Sample Collection"
        items={LAB_TEST_ITEMS}
        allServicesHref="/services/lab-test-at-home"
        allServicesLabel="All Lab Services"
        badge="Most Popular"
        bgClass="bg-white"
        reverse
      />
    </section>
  );
};

export default HomeFeaturedServices;
