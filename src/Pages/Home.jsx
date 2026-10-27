import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Seo from '../Component/Seo';
import { HOME_DESCRIPTION, HOME_TITLE, homepageJsonLd } from '../seo/site';
import HealthcareHeroSection from '../Component/Home/HealthcareHeroSection';

// Deferred below-the-fold sections loaded on demand as user scrolls
const BookingSteps = lazy(() => import('../Component/Home/BookingSteps'));
const HealthcareServices = lazy(() => import('../Component/Home/HealthcareServices'));
const HomeVisitDoctors = lazy(() => import('../Component/Home/HomeVisitDoctors'));
const HomeFeaturedServices = lazy(() => import('../Component/Home/HomeFeaturedServices'));
const HealthcareAbout = lazy(() => import('../Component/Home/HealthcareAbout'));
const WhyChooseUs = lazy(() => import('../Component/Home/WhyChooseUs'));
const ExperienceCare = lazy(() => import('../Component/Home/ExperienceCare'));
const SIMSBookingAndAudience = lazy(() => import('../Component/Home/SIMSBookingAndAudience'));
const MeetOurDoctors = lazy(() => import('../Component/Home/MeetOurDoctors'));
const PatientTestimonials = lazy(() => import('../Component/Home/PatientTestimonials'));
const NewsAndBlog = lazy(() => import('../Component/Home/NewsAndBlog'));
const HomeLocation = lazy(() => import('../Component/Home/HomeLocation'));
const ModernFAQs = lazy(() => import('../Component/Home/ModernFAQs'));

const LazySection = ({ children, minHeight = '360px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '450px 0px', // Preload 450px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={homepageJsonLd()} />
      
      {/* Above-the-fold hero section rendered immediately */}
      <HealthcareHeroSection />

      {/* Subsequent sections deferred on scroll for optimal mobile LCP, TBT & zero image contention */}
      <LazySection minHeight="420px">
        <BookingSteps />
      </LazySection>

      <LazySection minHeight="480px">
        <HealthcareServices />
      </LazySection>

      <LazySection minHeight="420px">
        <HomeVisitDoctors />
      </LazySection>

      <LazySection minHeight="500px">
        <HomeFeaturedServices />
      </LazySection>

      <LazySection minHeight="420px">
        <HealthcareAbout />
      </LazySection>

      <LazySection minHeight="420px">
        <WhyChooseUs />
      </LazySection>

      <LazySection minHeight="420px">
        <ExperienceCare />
      </LazySection>

      <LazySection minHeight="520px">
        <SIMSBookingAndAudience />
      </LazySection>

      <LazySection minHeight="480px">
        <MeetOurDoctors />
      </LazySection>

      <LazySection minHeight="380px">
        <PatientTestimonials />
      </LazySection>

      <LazySection minHeight="420px">
        <NewsAndBlog />
      </LazySection>

      <LazySection minHeight="380px">
        <HomeLocation />
      </LazySection>

      <LazySection minHeight="380px">
        <ModernFAQs />
      </LazySection>
    </div>
  );
};

export default Home;
