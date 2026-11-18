import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import doctorOnCallImage from '../../assets/DoctorOnCall04.webp';
import ivTherapiesImage from '../../assets/IVTherapies001.webp';
import physiotherapyAtHomeImage from '../../assets/PhysiotherapyAtHome003.webp';
import labTestAtHomeImage from '../../assets/LabTestAtHome02.webp';
import nursingCareAtHomeImage from '../../assets/NursingAtHome01.webp';
import healthCheckupAtHomeImage from '../../assets/HealthCheckupAtHome03.webp';

const HERO_SERVICES = [
  { slug: 'doctor-on-call', title: 'Doctor On Call', image: doctorOnCallImage },
  { slug: 'iv-therapies', title: 'IV Therapy At Home', image: ivTherapiesImage },
  { slug: 'physiotherapy-at-home', title: 'Physiotherapy', image: physiotherapyAtHomeImage },
  { slug: 'lab-test-at-home', title: 'Lab Tests At Home', image: labTestAtHomeImage },
  { slug: 'nursing-care-at-home', title: 'Nurse At Home', image: nursingCareAtHomeImage },
  { slug: 'health-checkup-at-home', title: 'Health Checkups', image: healthCheckupAtHomeImage },
];

const HeroClinicalStrip = () => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
    {HERO_SERVICES.map((service) => (
      <div key={service.slug} className="min-w-0">
        <Link
          to={`/services/${service.slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#002833] duration-300 hover:border-[#25b8a7]/40"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#002833]">
            <img
              src={service.image}
              alt=""
              width="320"
              height="400"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex min-h-[52px] flex-1 items-center justify-between gap-2 p-3">
            <p className="text-xs font-bold leading-tight tracking-wide text-white group-hover:text-[#25b8a7] transition-colors duration-300">
              {service.title}
            </p>
            <FaArrowRight
              size={10}
              className="shrink-0 text-white/30 transition-all duration-300 group-hover:text-[#25b8a7] group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default HeroClinicalStrip;
