import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AnimateInView, { fadeUp } from '../AnimateInView';

const ServiceDetailFAQs = ({ title, faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAFBFD] px-6 py-24 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-4xl">
        <AnimateInView className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl font-black text-brand-dark sm:text-4xl">{title}</h2>
          <p className="font-medium italic text-slate-500">
            Have Questions? We&apos;ve Got You Covered
          </p>
        </AnimateInView>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={item.question}
                variants={fadeUp}
                layout
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-accent/20 bg-white shadow-lg'
                    : 'border-slate-200 bg-white/70 hover:border-brand-accent/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={`text-sm font-black text-brand-dark sm:text-base ${isOpen ? 'text-brand-accent' : ''}`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 rounded-full p-2 ${isOpen ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                    {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="whitespace-pre-line px-6 pb-6 text-sm leading-relaxed text-slate-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailFAQs;
