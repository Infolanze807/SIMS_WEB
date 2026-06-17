import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

const AboutHero = () => {
  const bullets = [
    'Get professional care at home with our DHA-licensed doctors and nurses—available 24/7.',
    'From doctor visits to home nursing, SIMS Healthcare ensures safe, convenient, and trusted care.',
    'We bring hospital-quality care home—fast, reliable, and always close by.',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-[#003d4d] via-[#0a5568] to-[#25b8a7] py-20 font-sans text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,195,192,0.15),transparent_50%)]" />
        <motion.div
          className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#25b8a7]/10 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
        <motion.div
          className="space-y-6 lg:col-span-6"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-4">
            <motion.span
              className="text-[10px] font-black uppercase tracking-[0.2em] text-[#25b8a7]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Premium Healthcare Excellence
            </motion.span>
            <motion.h1
              className="text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              Home Healthcare in Dubai – <span className="text-[#4fc3c0]">Trusted Care</span> Where You Live
            </motion.h1>
          </div>

          <motion.div
            className="space-y-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {bullets.map((text, i) => (
              <motion.div
                key={text}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#25b8a7]/30 bg-[#25b8a7]/10 text-[8px] text-[#25b8a7]">
                  ■
                </div>
                <p className="text-sm font-light leading-relaxed text-white/85">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="pt-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
            <motion.a
              href="tel:+971525231028"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black tracking-wide text-[#003d4d] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt /> +971 5252 310 28
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:col-span-6"
          initial={{ opacity: 0, x: 32, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-[500px] w-full max-w-lg overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80"
              alt="SIMS Healthcare"
              className="h-full w-full rounded-[40px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            />
            <motion.div
              className="absolute bottom-8 left-8 flex items-center gap-4 rounded-3xl bg-white/95 p-6 text-[#003d4d] shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -4 }}
            >
              <div className="rounded-2xl bg-[#25b8a7]/10 p-4 text-center text-xs font-black leading-tight text-[#25b8a7]">
                24/7
                <br />
                SERVICE
              </div>
              <div>
                <p className="text-lg font-black leading-tight">30 MINUTES</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Anywhere in Dubai
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
