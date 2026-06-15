import React from 'react'
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