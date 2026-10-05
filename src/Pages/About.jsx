import React from 'react'
import Seo from '../Component/Seo'
import { clipText, pageJsonLd, SITE_NAME } from '../seo/site'
import AboutHero from '../Component/About/AboutHero'
import ContentSection from '../Component/About/ContentSection'
import HealthcareServices from '../Component/Home/HealthcareServices'
import WhyChooseUs from '../Component/Home/WhyChooseUs'
import PatientTestimonials from '../Component/Home/PatientTestimonials'
import MissionAndVision from '../Component/About/MissionAndVision'
import ExpertTeam from '../Component/About/ExpertTeam'

const About = () => {
  return (
    <div>
        <Seo
          title={`About ${SITE_NAME} | DHA-Licensed Care in Dubai`}
          description={clipText(
            'SIMS Home Healthcare brings DHA-approved doctors, nurses, and physiotherapists to your home, hotel, or office across Dubai, 24 hours a day.',
          )}
          path="/about"
          jsonLd={pageJsonLd({
            path: '/about',
            name: `About ${SITE_NAME}`,
            description:
              'SIMS Home Healthcare brings DHA-approved doctors, nurses, and physiotherapists to your home, hotel, or office across Dubai, 24 hours a day.',
          })}
        />
        <AboutHero />
        <ContentSection />
        <HealthcareServices />
         <WhyChooseUs />
         <MissionAndVision />
         <ExpertTeam />
         <PatientTestimonials />
    </div>
  )
}

export default About