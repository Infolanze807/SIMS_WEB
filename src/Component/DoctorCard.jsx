import React from 'react';
import { FaCertificate, FaUserMd } from 'react-icons/fa';

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
  <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100/80 bg-white shadow-[0_12px_30px_rgba(0,61,77,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/30 hover:shadow-[0_20px_40px_rgba(0,61,77,0.08)]">
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
      <DoctorImage
        src={doctor.image}
        alt={doctor.name}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/15 to-transparent opacity-90 transition-all duration-500 group-hover:via-brand-dark/20" />
      <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl bg-white/90 px-3.5 py-2.5 text-xs shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-1.5 font-bold text-brand-dark">
          <FaCertificate className="shrink-0 text-sm text-brand-accent" />
          DHA Licensed
        </div>
        <p className="mt-1 pl-5 text-[10px] font-semibold tracking-wide text-slate-500">
          {doctor.dhaLicense}
        </p>
      </div>    </div>

    <div className="flex flex-1 flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-brand-accent">
            {doctor.specialty}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-accent">
            {doctor.name}
          </h3>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/8 text-brand-accent shadow-sm transition-all duration-500 group-hover:bg-brand-accent group-hover:text-white">
          <FaUserMd className="text-base" />
        </div>
      </div>
      <p className="line-clamp-3 flex-1 text-[13px] leading-relaxed text-slate-500">{doctor.bio}</p>
    </div>
  </article>
);

export default DoctorCard;
