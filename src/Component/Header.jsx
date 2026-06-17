import React, { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import simsLogo from '../assets/sims-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { HEADER_NAV_SERVICES } from '../data/servicesCatalog';

const Header = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const [showServices, setShowServices] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const closeServicesMenu = () => {
    setShowServices(false);
    setActiveService(null);
  };

  const goToService = (slug) => {
    closeServicesMenu();
    navigate(`/services/${slug}`);
  };

  useEffect(() => {
    if (!showServices) return;

    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        closeServicesMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showServices]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <NavLink to="/">
          <img src={simsLogo} alt="SIMS Healthcare" className="h-16 w-auto object-contain" />
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${isActive ? 'text-[#25b8a7]' : 'text-gray-800 hover:text-[#25b8a7]'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition ${isActive ? 'text-[#25b8a7]' : 'text-gray-800 hover:text-[#25b8a7]'}`
            }
          >
            About Us
          </NavLink>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={closeServicesMenu}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-medium transition ${isActive ? 'text-[#25b8a7]' : 'text-gray-800 hover:text-[#25b8a7]'}`
              }
            >
              Our Services +
            </NavLink>

            {showServices && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="flex">
                  <div className="w-[320px] border-2 border-teal-400 bg-white shadow-2xl">
                    {HEADER_NAV_SERVICES.map((service) => (
                      <div
                        key={service.slug}
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setActiveService(service)}
                        onClick={() => goToService(service.slug)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            goToService(service.slug);
                          }
                        }}
                        className={`flex cursor-pointer items-center justify-between border-b border-gray-100 px-6 py-5 text-lg font-semibold transition-all duration-200 ${
                          activeService?.slug === service.slug
                            ? 'bg-[#25b8a7] text-white'
                            : 'bg-white text-gray-800 hover:bg-gray-50'
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
                        <button
                          key={item.slug}
                          type="button"
                          onClick={() => goToService(item.slug)}
                          className="block w-full border-b border-gray-100 px-6 py-5 text-left text-lg font-medium text-gray-800 transition hover:bg-gray-50"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition ${isActive ? 'text-[#25b8a7]' : 'text-gray-800 hover:text-[#25b8a7]'}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `font-medium transition ${isActive ? 'text-[#25b8a7]' : 'text-gray-800 hover:text-[#25b8a7]'}`
            }
          >
            Blog
          </NavLink>
        </nav>

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
