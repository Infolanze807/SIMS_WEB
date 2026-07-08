import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const AnimatedBlock = ({ children, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.24), ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const LegalPageBody = ({ sections = [] }) => {
  let blockIndex = 0;

  return (
    <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-accent/5 blur-[90px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,61,77,0.08)]">
        <div className="h-1 bg-gradient-to-r from-brand-accent via-[#0a5568] to-brand-dark" />

        <article className="space-y-8 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          {sections.map((section, index) => {
            if (section.type === 'heading' && section.level !== 3) {
              const i = blockIndex++;
              return (
                <AnimatedBlock key={index} index={i}>
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-sm font-black text-brand-accent">
                      §
                    </span>
                    <h2 className="text-xl font-black tracking-tight text-brand-dark sm:text-2xl lg:text-[1.65rem]">
                      {section.text}
                    </h2>
                  </div>
                </AnimatedBlock>
              );
            }

            if (section.type === 'heading' && section.level === 3) {
              const i = blockIndex++;
              return (
                <AnimatedBlock key={index} index={i}>
                  <h3 className="flex items-center gap-2 text-base font-bold text-brand-dark sm:text-lg">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    {section.text}
                  </h3>
                </AnimatedBlock>
              );
            }

            if (section.type === 'paragraph') {
              const i = blockIndex++;
              return (
                <AnimatedBlock key={index} index={i}>
                  <p className="text-[15px] leading-[1.8] text-slate-600">
                    {section.parts?.join('') ?? section.text}
                  </p>
                </AnimatedBlock>
              );
            }

            if (section.type === 'bullets') {
              const i = blockIndex++;
              return (
                <AnimatedBlock key={index} index={i}>
                  <ul className="grid gap-2.5 sm:grid-cols-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#FAFBFD] px-4 py-3.5 transition-colors hover:border-brand-accent/20 hover:bg-brand-accent/[0.03]"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-brand-accent" />
                        <span className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AnimatedBlock>
              );
            }

            if (section.type === 'ordered-list') {
              const i = blockIndex++;
              return (
                <AnimatedBlock key={index} index={i}>
                  <ol className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-[#FAFBFD] p-5 transition-all hover:border-brand-accent/20 hover:shadow-sm sm:p-6"
                      >
                        <div className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-[#0a5568] text-sm font-black text-white shadow-sm">
                            {itemIndex + 1}
                          </span>
                          <div className="min-w-0 flex-1 pt-0.5">
                            <h4 className="text-base font-bold text-brand-dark">{item.label}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </AnimatedBlock>
              );
            }

            return null;
          })}
        </article>

        <div className="border-t border-slate-100 bg-gradient-to-r from-brand-accent/5 to-transparent px-6 py-6 sm:px-10 lg:px-12">
          <p className="text-center text-sm text-slate-500">
            Questions? Contact{' '}
            <a
              href="mailto:info@simshomehealthcare.ae"
              className="font-semibold text-brand-accent transition hover:text-brand-dark"
            >
              info@simshomehealthcare.ae
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPageBody;
