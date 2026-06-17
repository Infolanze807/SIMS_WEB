import React from 'react';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';

const MissionAndVision = () => {
  const cards = [
    {
      num: '01',
      title: 'Our Mission',
      text: 'To provide safe, skilled, and compassionate healthcare at home, ensuring every patient feels valued, understood, and well cared for—at every stage of life.',
    },
    {
      num: '02',
      title: 'Our Vision',
      text: "To be Dubai's most trusted home healthcare partner, redefining comfort and convenience in medical care through innovation, reliability, and human connection.",
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-[#003d4d] via-[#0a5568] to-[#25b8a7] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-teal-100 backdrop-blur-md">
            Our Purpose
          </span>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Commitment to <span className="text-teal-200">Excellence</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-teal-50 opacity-90 md:text-xl">
            Bridging the gap between clinical expertise and home comfort, SIMS Healthcare is driven by a core set of principles.
          </p>
        </AnimateInView>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.num}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/20 bg-white/5 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-white/10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 to-white/5 transition-transform group-hover:rotate-3">
                <span className="text-xl font-bold text-white">{card.num}</span>
              </div>
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="text-lg font-light leading-relaxed text-teal-50 opacity-90">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAndVision;
