import React from 'react'
import Seo from '../Component/Seo'
import { HOME_DESCRIPTION, HOME_TITLE, homepageJsonLd } from '../seo/site'
import HomeMain from '../Component/Home/HomeMain'
import HealthcareHeroSection from '../Component/Home/HealthcareHeroSection'
import BookingSteps from '../Component/Home/BookingSteps'
import HealthcareServices from '../Component/Home/HealthcareServices'
import HomeVisitDoctors from '../Component/Home/HomeVisitDoctors'
import MeetOurDoctors from '../Component/Home/MeetOurDoctors'
import HomeFeaturedServices from '../Component/Home/HomeFeaturedServices'
import HealthcareAbout from '../Component/Home/HealthcareAbout'
import WhyChooseUs from '../Component/Home/WhyChooseUs'
import ExperienceCare from '../Component/Home/ExperienceCare'
import SIMSBookingAndAudience from '../Component/Home/SIMSBookingAndAudience'
import PatientTestimonials from '../Component/Home/PatientTestimonials'
import NewsAndBlog from '../Component/Home/NewsAndBlog'
import ModernFAQs from '../Component/Home/ModernFAQs'
import HomeLocation from '../Component/Home/HomeLocation'

const Home = () => {
  return (
    <div>
        <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={homepageJsonLd()} />
        {/* <HomeMain /> */}
        <HealthcareHeroSection />
        <BookingSteps />
        <HealthcareServices />
        <HomeVisitDoctors />
        <HomeFeaturedServices />
        <HealthcareAbout />
        <WhyChooseUs />
        <ExperienceCare />
        <SIMSBookingAndAudience />
        <MeetOurDoctors />
        <PatientTestimonials />
        <NewsAndBlog />
        <HomeLocation />
        <ModernFAQs />
    </div>
  )
}

export default Home