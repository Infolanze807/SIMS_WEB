import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AnimateInView, { fadeUp } from './AnimateInView';

const faqs = [
  {
    id: 1,
    question: '1. What is the Doctor On Call service?',
    answer:
      'Our Doctor On Call service allows you to receive expert medical care at your home, hotel, or office in Dubai — available 24/7 for your convenience.',
  },
  {
    id: 2,
    question: '2. Can I request a pediatrician for my child at home or hotel?',
    answer:
      'Yes, we provide experienced pediatricians for home or hotel visits to ensure your child receives safe and comfortable care without the hassle of clinic visits.',
  },
  {
    id: 3,
    question: '3. What types of lab tests can be done at home?',
    answer:
      'We offer a wide range of lab tests at home including STD tests, NIPT, DNA, HIV, semen analysis, hormone tests, allergy & food intolerance tests, and more.',
  },
  {
    id: 4,
    question: '4. Are IV drips and vitamin injections safe at home?',
    answer:
      'Absolutely. All our IV therapies and vitamin injections are administered by licensed nurses using sterilized equipment and under doctor guidance.',
  },
  {
    id: 5,
    question: '5. Do you offer post-surgical care and physiotherapy at home?',
    answer:
      'Yes, our home care team provides post-surgical care, wound dressing, catheter management, and physiotherapy sessions based on your recovery plan.',
  },
  {
    id: 6,
    question: '6. Do you offer elderly and nursing care at home?',
    answer:
      'We specialize in elderly care services, including 24/7 nursing, medication management, hygiene care, and chronic illness support, all at home.',
  },
];

const ServiceFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-6 py-28 font-sans antialiased lg:px-10">
      <div className="mx-auto max-w-4xl">
        <AnimateInView className="mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-black text-brand-dark sm:text-5xl">FAQs</h2>
          <p className="font-medium italic tracking-wide text-slate-500">
            Have Questions? We&apos;ve Got You Covered — See Our FAQs Below
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
                key={item.id}
                variants={fadeUp}
                layout
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-accent/20 bg-white shadow-[0_20px_40px_rgba(0,61,77,0.08)]'
                    : 'border-slate-200 bg-[#FAFBFD] hover:border-brand-accent/20 hover:bg-white'
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
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-500">{item.answer}</p>
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

export default ServiceFAQs;
