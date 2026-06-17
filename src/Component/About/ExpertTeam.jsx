import React from 'react';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';

const ExpertTeam = () => {
  const items = [
    {
      title: 'Clinical Precision',
      text: 'With years of experience and ongoing medical training, our doctors are equipped to treat a wide range of conditions on-site — with precision and care.',
    },
    {
      title: 'Clinic-Quality Care',
      text: 'Each home visit is backed by medical-grade equipment and advanced portable diagnostics, ensuring clinic-quality care in your personal space.',
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Meet Our Team of <span className="text-teal-600">DHA-Licensed Experts</span>
          </h2>
          <div className="mx-auto mb-8 h-1.5 w-24 rounded-full bg-teal-500" />
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            Our team is composed of general practitioners, emergency care physicians, pediatricians, nurses, and wellness professionals, all registered with the Dubai Health Authority (DHA).
          </p>
        </AnimateInView>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <h4 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertTeam;
