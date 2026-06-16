import React from 'react';
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
