import React from 'react';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, scaleIn, slideFromRight, staggerContainer } from '../Services/AnimateInView';

const CONTACT_ITEMS = [
  { title: 'Address', val: '207, AB Center , Sheikh Zayed Road,  Al Barsha First , Dubai' },
  { title: 'Phone Support', val: '+971525231028' },
  { title: 'Direct Email', val: 'connect@simshomehealthcare.ae' },
  { title: 'Working Hours', val: '24/7 Professional Assistance' },
];

const SimsHealthcarePage = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] font-sans text-slate-900 selection:bg-cyan-200">
      <main className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h1 className="mb-6 text-5xl font-extrabold text-slate-950">Get in Touch</h1>
          <p className="max-w-xl text-lg text-slate-600">
            Have questions or need assistance with our healthcare services? Our team is here to help you anytime. Reach out to SIMS Health Care for bookings, inquiries, or support, and we&apos;ll respond promptly with care.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            className="grid grid-cols-1 gap-8 lg:col-span-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {CONTACT_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-lg"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-600">{item.title}</p>
                <p className="text-xl font-semibold text-slate-800">{item.val}</p>
              </motion.div>
            ))}
          </motion.div>

          <AnimateInView variants={slideFromRight} className="lg:col-span-6">
            <div className="rounded-3xl bg-[#2D4263] p-10 text-white shadow-2xl">
              <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-cyan-300">
                Need emergency?
              </p>
              <h3 className="mb-8 text-center text-3xl font-bold">Drop Us a Line</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full rounded-xl bg-white p-4 text-slate-900 outline-none"
                  placeholder="Enter Your Full Name"
                />
                <input
                  className="w-full rounded-xl bg-white p-4 text-slate-900 outline-none"
                  placeholder="Enter Your email"
                />
                <input
                  className="w-full rounded-xl bg-white p-4 text-slate-900 outline-none"
                  placeholder="Enter Your Phone number"
                />
                <textarea
                  className="h-32 w-full rounded-xl bg-white p-4 text-slate-900 outline-none"
                  placeholder="Health Concern / Message"
                />
                <motion.button
                  type="submit"
                  className="mt-4 w-full rounded-xl bg-white py-4 text-lg font-bold text-[#2D4263] transition-all hover:bg-cyan-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Now
                </motion.button>
              </form>
            </div>
          </AnimateInView>
        </div>

        <AnimateInView variants={scaleIn} className="mt-20">
          <div className="h-[400px] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=25.1055,55.1957&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            />
          </div>
        </AnimateInView>
      </main>
    </div>
  );
};

export default SimsHealthcarePage;
