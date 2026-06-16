import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ServiceDetailFAQs = ({ title, faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FAFBFD] px-6 lg:px-10 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">{title}</h2>
          <p className="text-slate-500 font-medium italic">
            Have Questions? We&apos;ve Got You Covered
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.question}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-white shadow-lg border-brand-accent/20'
                    : 'bg-white/70 border-slate-200 hover:border-brand-accent/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span
                    className={`font-black text-sm sm:text-base text-brand-dark ${isOpen ? 'text-brand-accent' : ''}`}
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
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed whitespace-pre-line">{item.answer}</p>
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

export default ServiceDetailFAQs;
