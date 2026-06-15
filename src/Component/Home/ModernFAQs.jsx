import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ModernFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "1. What areas in Dubai do you cover for home healthcare services ?",
      answer: "We provide comprehensive home healthcare services across all major areas in Dubai including Downtown, Marina, JLT, Al Barsha, Mirdif, and more. Contact us to confirm service availability in your area."
    },
    {
      id: 2,
      question: "2. Are your doctors and nurses certified?",
      answer: "Yes, all our doctors are DHA-certified and our nurses are licensed professionals trained to deliver medical care at home, in hotels, or at workplaces."
    },
    {
      id: 3,
      question: "3. How do I book a doctor on call or lab test at home?",
      answer: "You can book any service through our website, WhatsApp, or call. Just share your location and preferred time — we’ll take care of the rest."
    },
    {
      id: 4,
      question: "4. Is the COVID PCR test at home approved for travel?",
      answer: "Yes, our COVID-19 PCR tests are DHA-approved and come with official reports accepted for travel, work, or medical purposes."
    },
    {
      id: 5,
      question: "5. What types of lab tests do you offer at home?",
      answer: "We offer a wide range of lab tests including blood tests, vitamin profiles, diabetes, cholesterol, hormone panels, and more — all collected safely at your home."
    },
    {
      id: 6,
      question: "6. Do you offer physiotherapy at home for elderly patients?",
      answer: "Absolutely. Our personalized physiotherapy sessions are designed for all age groups, including seniors, and are conducted by trained physiotherapists in the comfort of your home."
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#003d4d] mb-4">FAQs</h2>
          <p className="text-slate-500 font-medium tracking-wide">
            Have Questions? We've Got You Covered — See Our FAQs Below
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
                    ? 'bg-white shadow-[0_20px_40px_rgba(0,61,77,0.08)] border-[#25b8a7]/20' 
                    : 'bg-white/50 border-slate-200 hover:bg-white hover:border-[#25b8a7]/20'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-black text-[#003d4d] ${isOpen ? 'text-[#25b8a7]' : ''}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full ${isOpen ? 'bg-[#25b8a7] text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                      {item.answer}
                    </p>
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

export default ModernFAQs;