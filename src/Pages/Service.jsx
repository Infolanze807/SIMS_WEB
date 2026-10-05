import React from 'react';
import Seo from '../Component/Seo';
import { pageJsonLd } from '../seo/site';
import ServiceHero from '../Component/Services/ServiceHero';
import ServicesGrid from '../Component/Services/ServicesGrid';
import ServiceWellnessBanner from '../Component/Services/ServiceWellnessBanner';
import ServiceEmergencyBooking from '../Component/Services/ServiceEmergencyBooking';
import ServiceTestimonials from '../Component/Services/ServiceTestimonials';
import ServiceFAQs from '../Component/Services/ServiceFAQs';
import ServiceContactCTA from '../Component/Services/ServiceContactCTA';

const Service = () => {
  return (
    <div className="font-sans antialiased">
      <Seo
        title="Home Healthcare Services in Dubai | SIMS Home Healthcare"
        description="Book DHA-licensed doctor visits, nursing, IV therapy, physiotherapy, and lab tests at your home or hotel in Dubai. Available 24/7, including holidays."
        path="/services"
        jsonLd={pageJsonLd({
          path: '/services',
          name: 'Home Healthcare Services in Dubai',
          description:
            'Book DHA-licensed doctor visits, nursing, IV therapy, physiotherapy, and lab tests at your home or hotel in Dubai. Available 24/7, including holidays.',
        })}
      />
      <ServiceHero />
      <ServicesGrid />
      <ServiceWellnessBanner />
      <ServiceEmergencyBooking />
      <ServiceTestimonials />
      <ServiceFAQs />
      {/* <div className="pb-28">
        <ServiceContactCTA />
      </div> */}
    </div>
  );
};

export default Service;
