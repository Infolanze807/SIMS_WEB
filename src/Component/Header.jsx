import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import simsLogo from "../assets/sims-logo.png";

const services = [
    {
        title: "Doctor On Call",
        children: [
            "Doctor At Home",
            "Doctor at Hotel",
            "Pediatrician at Home",
            "Pediatrician on Call",
        ],
    },
    {
        title: "Lab Test at Home",
        children: [
            "STD Test at Home",
            "NIPT Test at Home",
            "DNA Test at Home",
            "HIV Test at Home",
            "Semen Analysis",
            "Hormones Lab Test",
            "Beta HCG Test at Home",
            "Vitamin & Minerals Test at Home",
        ],
    },
    {
        title: "Physiotherapy At Home",
        children: [],
    },
    {
        title: "Nursing Care at Home",
        children: [
            "Elderly care at home",
            "Mother & Baby Care",
            "Post Surgical Care",
            "ECG at Home",
            "Wound Care",
            "Dressing Care at Home",
            "Urine Catheter Management",
            "Medication Management",
        ],
    },
    {
        title: "IV Therapy at Home",
        children: [],
    },
    {
        title: "Oxygen Therapy at Home",
        children: [],
    },
    {
        title: "Covid PCR Test at Home",
        children: [],
    },
    {
        title: "Flu Vaccination at Home",
        children: [],
    },
    {
        title: "Health Checkup at Home",
        children: [],
    },
    {
        title: "Injection Service",
        children: [],
    },
];

const Header = () => {
    const [showServices, setShowServices] = useState(false);
    const [activeService, setActiveService] = useState(null);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <a href="/">
                    <img
                        src={simsLogo}
                        alt="SIMS Healthcare"
                        className="h-16 w-auto object-contain"
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    <a
                        href="/"
                        className="font-medium text-gray-800 transition hover:text-teal-500"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="font-medium text-gray-800 transition hover:text-teal-500"
                    >
                        About Us
                    </a>

                    {/* Services Mega Menu */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowServices(true)}
                        onMouseLeave={() => setShowServices(false)}
                    >
                        <button className="font-medium text-gray-800 transition hover:text-teal-500">
                            Our Services
                        </button>

                        {showServices && (
                            <div className="absolute left-1/2 top-full z-50 mt-4 flex -translate-x-1/2">
                                {/* Left Menu */}
                                <div className="w-[320px] border-2 border-teal-400 bg-white shadow-2xl">
                                    {services.map((service) => (
                                        <div
                                            key={service.title}
                                            onMouseEnter={() => setActiveService(service)}
                                            className={`flex cursor-pointer items-center justify-between border-b border-gray-100 px-6 py-5 text-lg font-semibold transition-all duration-200 ${activeService?.title === service.title
                                                ? "bg-[#25b8a7] text-white"
                                                : "bg-white text-gray-800 hover:bg-gray-50"
                                                }`}
                                        >
                                            <span>{service.title}</span>

                                            {service.children.length > 0 && (
                                                <span className="text-3xl font-light">+</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {activeService?.children?.length > 0 && (
                                    <div className="w-[330px] border-y-2 border-r-2 border-teal-400 bg-white shadow-2xl">
                                        {activeService.children.map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="block border-b border-gray-100 px-6 py-5 text-lg font-medium text-gray-800 transition hover:bg-gray-50"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <a
                        href="#contact"
                        className="font-medium text-gray-800 transition hover:text-teal-500"
                    >
                        Contact Us
                    </a>

                    <a
                        href="#blog"
                        className="font-medium text-gray-800 transition hover:text-teal-500"
                    >
                        Blog
                    </a>
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <a
                        href="tel:0525231028"
                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-300"
                    >
                        <FaPhoneAlt />
                        052 523 1028
                    </a>

                    <a
                        href="https://wa.me/971525231028"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                        <FaWhatsapp />
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;