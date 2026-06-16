import React from "react";
import { motion } from "framer-motion";

const SimsHealthcarePage = () => {
    return (
        <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans selection:bg-cyan-200">
            <main className="max-w-7xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h1 className="text-5xl font-extrabold text-slate-950 mb-6">Get in Touch</h1>
                    <p className="text-slate-600 max-w-xl text-lg">
                        Have questions or need assistance with our healthcare services? Our team is here to help you anytime. Reach out to SIMS Health Care for bookings, inquiries, or support, and we'll respond promptly with care.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 grid grid-cols-1 gap-8">
                        {[
                            { title: "Address", val: "Al Barsha 1, Sheikh Zayed Rd, Dubai" },
                            { title: "Phone Support", val: "+971 5252 310 28" },
                            { title: "Direct Email", val: "connect@simshealthcare.ae" },
                            { title: "Working Hours", val: "24/7 Professional Assistance" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                                <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">{item.title}</p>
                                <p className="text-xl font-semibold text-slate-800">{item.val}</p>
                            </div>
                        ))}
                    </div>

                    <motion.form
                        className="lg:col-span-6 bg-[#2D4263] p-10 rounded-3xl shadow-2xl text-white"
                    >
                        <p className="text-center font-medium text-cyan-300 uppercase tracking-widest text-sm mb-2">Need emergency?</p>
                        <h3 className="text-3xl font-bold text-center mb-8">Drop Us a Line</h3>
                        <form className="space-y-4">
                            <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your Full Name" />
                            <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your email" />
                            <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your Phone number" />
                            <textarea className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none h-32" placeholder="Health Concern / Message" />

                            <button className="w-full bg-white text-[#2D4263] py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all mt-4">
                                Submit Now
                            </button>
                        </form>
                    </motion.form>
                </div>
                {/* 
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {[
              { title: "Address", val: "Al Barsha 1, Sheikh Zayed Road, Dubai" },
              { title: "Contact no", val: "+97 15252 31028" },
              { title: "Opening Hours", val: "24/7 Available" },
              { title: "Mail", val: "connect@simshomehealthcare.ae" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-cyan-600 mb-3 text-2xl">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center font-bold text-sm">ICON</div>
                </div>
                <h4 className="font-bold text-lg text-slate-950">{item.title}</h4>
                <p className="text-slate-600 mt-1">{item.val}</p>
              </div>
            ))}
          </div>

          <motion.div 
            className="bg-[#2D4263] p-10 rounded-3xl shadow-2xl text-white"
          >
            <p className="text-center font-medium text-cyan-300 uppercase tracking-widest text-sm mb-2">Need emergency?</p>
            <h3 className="text-3xl font-bold text-center mb-8">Drop Us a Line</h3>
            
            <form className="space-y-4">
              <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your Full Name" />
              <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your email" />
              <input className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none" placeholder="Enter Your Phone number" />
              <textarea className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none h-32" placeholder="Health Concern / Message" />
              
              <button className="w-full bg-white text-[#2D4263] py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all mt-4">
                Submit Now
              </button>
            </form>
          </motion.div>
        </div> */}

                {/* Map Section */}
                <div className="mt-20 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <iframe
                        title="Location"
                        src="https://www.google.com/maps?q=25.1055,55.1957&z=15&output=embed"
                        width="100%" height="100%" style={{ border: 0 }}
                    />
                </div>
            </main>
        </div>
    );
};

export default SimsHealthcarePage;