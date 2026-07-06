import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCertificate, FaCheckCircle } from 'react-icons/fa';
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

const TRUST_POINTS = ['DHA Licensed', '24/7 Available', 'At Your Doorstep'];

const ServicePanel = ({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  image,
  imageAlt,
  imageLabel,
  imagePosition,
  items,
  allServicesHref,
  allServicesLabel = 'All Services',
  badge,
  bgClass = 'bg-[#FFFFFF]',
  reverse = false,
}) => (
  <AnimateInView variants={fadeUp}>
    <div className={`relative overflow-hidden ${bgClass} px-4 py-10 sm:px-6 lg:px-8 lg:py-12`}>
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#25b8a7]/6 blur-[80px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#003d4d]/4 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[24px] border border-slate-100/80 bg-white shadow-[0_16px_50px_rgba(0,61,77,0.08)]">
          <div className="h-1 bg-gradient-to-r from-[#25b8a7] via-[#0a5568] to-[#003d4d]" />

          <div
            className={`grid grid-cols-1 lg:grid-cols-12 lg:items-stretch ${
              reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
            }`}
          >
            {/* Compact image */}
            <div className="border-b border-slate-100 p-5 sm:p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-7">
              <div className="relative mx-auto max-w-[320px] lg:max-w-none">
                {badge && (
                  <span className="absolute -right-1 -top-1 z-10 rounded-full bg-[#003d4d] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
                    {badge}
                  </span>
                )}

                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={imagePosition ? { objectPosition: imagePosition } : undefined}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003d4d]/35 to-transparent" />
                </div>

                {imageLabel && (
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#25b8a7]/15 bg-[#25b8a7]/5 px-3.5 py-2.5">
                    <FaCertificate className="shrink-0 text-sm text-[#25b8a7]" />
                    <div>
                      <p className="text-xs font-bold text-[#003d4d]">{imageLabel}</p>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                        SIMS Healthcare
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-8 lg:col-span-8 lg:px-9 lg:py-9">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#25b8a7]/20 bg-[#25b8a7]/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#25b8a7]">
                {eyebrow}
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#003d4d] sm:text-[1.75rem] lg:text-3xl">
                {title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                {description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {TRUST_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600"
                  >
                    <FaCheckCircle className="text-[10px] text-[#25b8a7]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to={ctaHref}
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#25b8a7] to-[#0a5568] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                {ctaLabel}
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="mt-7 border-t border-slate-100 pt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    Popular Services
                  </p>
                  {allServicesHref && (
                    <Link
                      to={allServicesHref}
                      className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-[#003d4d] transition-colors hover:text-[#25b8a7]"
                    >
                      {allServicesLabel}
                      <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>

                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {items.map((item, i) => (
                    <li key={`${item.slug}-${item.label}`}>
                      <Link
                        to={`/services/${item.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-[#FAFBFD] px-3 py-2.5 transition-all duration-200 hover:border-[#25b8a7]/35 hover:bg-white hover:shadow-sm"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[9px] font-bold text-[#25b8a7] shadow-sm ring-1 ring-slate-100">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-600 group-hover:text-[#003d4d]">
                          {item.label}
                        </span>
                        <FaArrowRight className="shrink-0 text-[8px] text-[#25b8a7] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
        image={IV_SERVICE?.image}
        imageAlt="IV therapy at home in Dubai"
        imageLabel="IV Drip at Home"
        imagePosition="center top"
        items={IV_THERAPY_ITEMS}
        bgClass="bg-[#FFFFFF]"
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
        image={LAB_SERVICE?.image}
        imageAlt="Lab tests at home in Dubai"
        imageLabel="Home Sample Collection"
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
