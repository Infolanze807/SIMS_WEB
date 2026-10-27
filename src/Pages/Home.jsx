import React, { lazy } from 'react'
import Seo from '../Component/Seo'
import { HOME_DESCRIPTION, HOME_TITLE, homepageJsonLd } from '../seo/site'
import HealthcareHeroSection from '../Component/Home/HealthcareHeroSection'
import DeferredSection from '../Component/Home/DeferredSection'

const BookingSteps = lazy(() => import('../Component/Home/BookingSteps'))
const HealthcareServices = lazy(() => import('../Component/Home/HealthcareServices'))
const HomeVisitDoctors = lazy(() => import('../Component/Home/HomeVisitDoctors'))
const HomeFeaturedServices = lazy(() => import('../Component/Home/HomeFeaturedServices'))
const HealthcareAbout = lazy(() => import('../Component/Home/HealthcareAbout'))
const WhyChooseUs = lazy(() => import('../Component/Home/WhyChooseUs'))
const ExperienceCare = lazy(() => import('../Component/Home/ExperienceCare'))
const SIMSBookingAndAudience = lazy(() => import('../Component/Home/SIMSBookingAndAudience'))
const MeetOurDoctors = lazy(() => import('../Component/Home/MeetOurDoctors'))
const PatientTestimonials = lazy(() => import('../Component/Home/PatientTestimonials'))
const NewsAndBlog = lazy(() => import('../Component/Home/NewsAndBlog'))
const HomeLocation = lazy(() => import('../Component/Home/HomeLocation'))
const ModernFAQs = lazy(() => import('../Component/Home/ModernFAQs'))

const Home = () => {
  return (
    <div>
        <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={homepageJsonLd()} />
        <HealthcareHeroSection />
        <DeferredSection minHeight={560}>
          <BookingSteps />
        </DeferredSection>
        <DeferredSection minHeight={720}>
          <HealthcareServices />
        </DeferredSection>
        <DeferredSection minHeight={640}>
          <HomeVisitDoctors />
        </DeferredSection>
        <DeferredSection minHeight={720}>
          <HomeFeaturedServices />
        </DeferredSection>
        <DeferredSection minHeight={560}>
          <HealthcareAbout />
        </DeferredSection>
        <DeferredSection minHeight={560}>
          <WhyChooseUs />
        </DeferredSection>
        <DeferredSection minHeight={560}>
          <ExperienceCare />
        </DeferredSection>
        <DeferredSection minHeight={720}>
          <SIMSBookingAndAudience />
        </DeferredSection>
        <DeferredSection minHeight={560}>
          <MeetOurDoctors />
        </DeferredSection>
        <DeferredSection minHeight={480}>
          <PatientTestimonials />
        </DeferredSection>
        <DeferredSection minHeight={560}>
          <NewsAndBlog />
        </DeferredSection>
        <DeferredSection minHeight={420}>
          <HomeLocation />
        </DeferredSection>
        <DeferredSection minHeight={480}>
          <ModernFAQs />
        </DeferredSection>
    </div>
  )
}

export default Home
