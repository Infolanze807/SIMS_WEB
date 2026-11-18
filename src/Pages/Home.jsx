import React from 'react'
import Seo from '../Component/Seo'
import LazySection from '../Component/LazySection'
import { HOME_DESCRIPTION, HOME_TITLE, homepageJsonLd } from '../seo/site'
import HealthcareHeroSection from '../Component/Home/HealthcareHeroSection'

const loadBookingSteps = () => import('../Component/Home/BookingSteps')
const loadHealthcareServices = () => import('../Component/Home/HealthcareServices')
const loadHomeVisitDoctors = () => import('../Component/Home/HomeVisitDoctors')
const loadHomeFeaturedServices = () => import('../Component/Home/HomeFeaturedServices')
const loadHealthcareAbout = () => import('../Component/Home/HealthcareAbout')
const loadWhyChooseUs = () => import('../Component/Home/WhyChooseUs')
const loadExperienceCare = () => import('../Component/Home/ExperienceCare')
const loadSIMSBookingAndAudience = () => import('../Component/Home/SIMSBookingAndAudience')
const loadMeetOurDoctors = () => import('../Component/Home/MeetOurDoctors')
const loadPatientTestimonials = () => import('../Component/Home/PatientTestimonials')
const loadNewsAndBlog = () => import('../Component/Home/NewsAndBlog')
const loadHomeLocation = () => import('../Component/Home/HomeLocation')
const loadModernFAQs = () => import('../Component/Home/ModernFAQs')

const Home = () => {
  return (
    <div>
      <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={homepageJsonLd()} />
      <HealthcareHeroSection />
      <LazySection loader={loadBookingSteps} minHeight={520} />
      <LazySection loader={loadHealthcareServices} minHeight={640} />
      <LazySection loader={loadHomeVisitDoctors} minHeight={640} />
      <LazySection loader={loadHomeFeaturedServices} minHeight={520} />
      <LazySection loader={loadHealthcareAbout} minHeight={640} />
      <LazySection loader={loadWhyChooseUs} minHeight={640} />
      <LazySection loader={loadExperienceCare} minHeight={640} />
      <LazySection loader={loadSIMSBookingAndAudience} minHeight={780} />
      <LazySection loader={loadMeetOurDoctors} minHeight={640} />
      <LazySection loader={loadPatientTestimonials} minHeight={520} />
      <LazySection loader={loadNewsAndBlog} minHeight={560} />
      <LazySection loader={loadHomeLocation} minHeight={520} />
      <LazySection loader={loadModernFAQs} minHeight={560} />
    </div>
  )
}

export default Home
