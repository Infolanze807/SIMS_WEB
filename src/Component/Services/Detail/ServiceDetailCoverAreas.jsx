import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../AnimateInView';

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const AREA_PHOTOS = {
  'downtown dubai': u('photo-1512453979798-5ea266f8880c'),
  'dubai marina': u('photo-1722502831583-b4e93ecc6027'),
  'dubai marina & jbr': u('photo-1768463852076-8317da3d58ca'),
  jbr: u('photo-1677988435213-a6ddc5c27995'),
  'business bay': u('photo-1726533765275-a69cfd7f9897'),
  'palm jumeirah': u('photo-1748373491503-bf21fe5ef9e2'),
  'jumeirah 1, 2, 3':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jumeirah_Mosque.jpg/1280px-Jumeirah_Mosque.jpg',
  'jumeirah & umm suqeim': u('photo-1546412414-e1885259563a'),
  'deira & bur dubai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Dubai_Creek_from_an_abra_3.jpg/1280px-Dubai_Creek_from_an_abra_3.jpg',
  'al barsha': u('photo-1526495124232-a04e1849168c'),
  'al barsha & sheikh zayed road': u('photo-1526495124232-a04e1849168c'),
  'dubai world trade centre area':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Dubai_World_Trade_Centre_and_skyline.jpg/1280px-Dubai_World_Trade_Centre_and_skyline.jpg',
  'arabian ranches': u('photo-1613490493576-7fde63acd811'),
  'damac hills': u('photo-1600596542815-ffad4c1539a9'),
  'nad al sheba': u('photo-1512917774080-9991f1c4c750'),
  mizhar: u('photo-1460317442991-0ec209397118'),
  'al warqa': u('photo-1600585154526-990dced4db0d'),
};

const photoFor = (area) => {
  if (area.image) return area.image;
  const key = (area.title || '').trim().toLowerCase();
  return AREA_PHOTOS[key] || AREA_PHOTOS['downtown dubai'];
};

const ServiceDetailCoverAreas = ({ title, intro, areas = [], note }) => {
  if (!areas.length) return null;

  return (
    <section className="w-full bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-7xl space-y-14">
        <AnimateInView animateOnMount className="grid items-end gap-6 border-b border-slate-200/80 pb-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
              Areas We Cover
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="text-base font-medium leading-relaxed text-slate-500 lg:col-span-5">
              {intro}
            </p>
          )}
        </AnimateInView>

        <motion.ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {areas.map((area) => (
            <motion.li
              key={area.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(0,61,77,0.06)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(0,61,77,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={photoFor(area)}
                  alt={area.title}
                  width="640"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold leading-snug text-brand-dark">
                  <FaMapMarkerAlt className="shrink-0 text-sm text-brand-accent" />
                  {area.title}
                </h3>
                {area.description && (
                  <p className="text-sm leading-relaxed text-slate-500">{area.description}</p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {note && (
          <AnimateInView animateOnMount delay={0.08}>
            <p className="rounded-[28px] border border-brand-accent/20 bg-brand-accent/10 px-6 py-5 text-base font-medium leading-relaxed text-brand-dark sm:px-8">
              {note}
            </p>
          </AnimateInView>
        )}
      </div>
    </section>
  );
};

export default ServiceDetailCoverAreas;
