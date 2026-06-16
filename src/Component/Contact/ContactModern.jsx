import React from 'react';
import { motion } from 'framer-motion';

const ContactModern = () => {
  return (
 <div className="bg-[#0A0F1D] text-white min-h-screen font-sans">
      {/* 1. Header Section */}
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="text-xl font-bold text-teal-400">SIMS HEALTHCARE</div>
        <div className="space-x-6 text-sm uppercase tracking-widest">
          {['Home', 'About Us', 'Services', 'Contact', 'Blog'].map(link => (
            <a key={link} href="#" className="hover:text-teal-400 transition">{link}</a>
          ))}
        </div>
      </nav>

      {/* 2. Hero Section (image_4b0ba7.jpg) */}
      <section className="h-[40vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('image_4b0ba7.jpg')] bg-cover bg-center opacity-40" />
        <h1 className="text-5xl font-bold relative z-10">Contact Us</h1>
      </section>

      {/* 3. Main Content Grid */}
      <main className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-12 mt-12">
        {/* Left: Info Details */}
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-slate-400">Have questions or need assistance? Our team is here to help you 24/7.</p>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Address', val: 'Al Barsha 1, Sheikh Zayed Rd' },
              { label: 'Contact', val: '+971 5252 310 28' },
              { label: 'Hours', val: '24/7 Available' },
              { label: 'Email', val: 'connect@simshealthcare.ae' }
            ].map(item => (
              <div key={item.label} className="border-l-2 border-teal-500 pl-4">
                <p className="text-xs uppercase text-slate-500">{item.label}</p>
                <p className="font-medium">{item.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-[#151B2E] p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="text-xl mb-6">Drop Us a Line</h3>
          <input className="w-full bg-white/5 p-4 rounded-lg mb-4 border border-white/10" placeholder="Full Name" />
          <input className="w-full bg-white/5 p-4 rounded-lg mb-4 border border-white/10" placeholder="Email" />
          <textarea className="w-full bg-white/5 p-4 rounded-lg mb-4 border border-white/10 h-32" placeholder="Message" />
          <button className="w-full bg-teal-600 p-4 rounded-lg font-bold hover:bg-teal-500 transition">Submit Now</button>
        </form>
      </main>

      {/* 4. Map Section */}
      <section className="h-[400px] mt-20 bg-slate-900 border-t border-white/10 relative">
        <div className="absolute inset-0 flex items-center justify-center text-teal-800">
           {/* Replace with actual Map component (e.g., Google Maps API) */}
           [Sims Home Healthcare | 24/7 Doctor on call Dubai Location Map]
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="p-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>Licensed by Dubai Health Authority (DHA) | © 2026 SIMS Home Healthcare</p>
      </footer>
    </div>
  );
};

export default ContactModern;