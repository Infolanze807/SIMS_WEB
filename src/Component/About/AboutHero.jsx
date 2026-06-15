import React from 'react';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

const AboutHero = () => {
    return (
        <section className="relative w-full bg-gradient-to-tr from-[#003d4d] via-[#0a5568] to-[#25b8a7] py-20 lg:py-32 overflow-hidden font-sans text-white">

            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 w-full h-full"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,195,192,0.15),transparent_50%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-20">

                <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black tracking-[0.2em] text-[#25b8a7] uppercase">
                            Premium Healthcare Excellence
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                            Home Healthcare in Dubai – <span className="text-[#4fc3c0]">Trusted Care</span> Where You Live
                        </h1>
                    </div>

                    <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/[0.06] shadow-xl space-y-4">
                        {[
                            "Get professional care at home with our DHA-licensed doctors and nurses—available 24/7.",
                            "From doctor visits to home nursing, SIMS Healthcare ensures safe, convenient, and trusted care.",
                            "We bring hospital-quality care home—fast, reliable, and always close by."
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#25b8a7]/10 border border-[#25b8a7]/30 text-[#25b8a7] text-[8px]">
                                    ■
                                </div>
                                <p className="text-white/85 font-light leading-relaxed text-sm">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <a
                            href="tel:+971525231028"
                            className="inline-flex items-center gap-3 bg-white text-[#003d4d] px-8 py-4 rounded-2xl font-black tracking-wide hover:bg-gray-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                        >
                            <FaPhoneAlt /> +971 5252 310 28
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-6 relative flex justify-center">
                    <div className="h-[500px] w-full max-w-lg relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] bg-gradient-to-b from-white/5 to-transparent p-3">
                        <img
                            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80"
                            alt="SIMS Healthcare"
                            className="h-full w-full rounded-[40px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                        />


                        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-4 text-[#003d4d]">
                            <div className="bg-[#25b8a7]/10 text-[#25b8a7] p-4 rounded-2xl font-black text-xs text-center leading-tight">
                                24/7<br />SERVICE
                            </div>
                            <div>
                                <p className="font-black text-lg leading-tight">30 MINUTES</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Anywhere in Dubai</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutHero;