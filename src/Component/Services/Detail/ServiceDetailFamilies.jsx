import React from 'react';
import AnimateInView from '../AnimateInView';

const ServiceDetailFamilies = ({ title, description, eyebrow = 'Where We Visit' }) => {
  if (!title && !description) return null;

  return (
    <section className="w-full bg-white px-6 py-24 font-sans antialiased lg:px-10">
      <AnimateInView animateOnMount className="mx-auto max-w-4xl space-y-5 text-center">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-dark sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">{description}</p>
        )}
      </AnimateInView>
    </section>
  );
};

export default ServiceDetailFamilies;
