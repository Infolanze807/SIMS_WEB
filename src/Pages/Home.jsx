import React from 'react'
import HomeMain from '../Component/Home/HomeMain'
import BookingSteps from '../Component/Home/BookingSteps'
import HealthcareServices from '../Component/Home/HealthcareServices'
import HealthcareAbout from '../Component/Home/HealthcareAbout'
import WhyChooseUs from '../Component/Home/WhyChooseUs'
import ExperienceCare from '../Component/Home/ExperienceCare'
import SIMSBookingAndAudience from '../Component/Home/SIMSBookingAndAudience'
import PatientTestimonials from '../Component/Home/PatientTestimonials'
import NewsAndBlog from '../Component/Home/NewsAndBlog'
import ModernFAQs from '../Component/Home/ModernFAQs'

const Home = () => {
  return (
    <div>
        <HomeMain />
        <BookingSteps />
        <HealthcareServices />
        <HealthcareAbout />
        <WhyChooseUs />
        <ExperienceCare />
        <SIMSBookingAndAudience />
        <PatientTestimonials />
        <NewsAndBlog />
        <ModernFAQs />
    </div>
  )
}

export default Home