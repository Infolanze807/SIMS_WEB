import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
    <section className="py-28 bg-white px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark">FAQs</h2>
          <p className="text-slate-500 font-medium tracking-wide italic">
            Have Questions? We&apos;ve Got You Covered — See Our FAQs Below
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.id}
                className={`transition-all duration-500 ease-in-out border rounded-3xl overflow-hidden ${
                  isOpen
                    ? 'bg-white shadow-[0_20px_40px_rgba(0,61,77,0.08)] border-brand-accent/20'
                    : 'bg-[#FAFBFD] border-slate-200 hover:bg-white hover:border-brand-accent/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span
                    className={`font-black text-brand-dark text-sm sm:text-base ${isOpen ? 'text-brand-accent' : ''}`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full shrink-0 ${isOpen ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                    {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;
