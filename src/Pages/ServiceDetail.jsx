import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getServiceDetail } from '../data/serviceDetailContent';
import { getRelatedServices } from '../data/servicesCatalog';
import ServiceDetailHero from '../Component/Services/Detail/ServiceDetailHero';
import ServiceDetailIntro from '../Component/Services/Detail/ServiceDetailIntro';
import ServiceDetailReasons from '../Component/Services/Detail/ServiceDetailReasons';
import ServiceDetailSteps from '../Component/Services/Detail/ServiceDetailSteps';
import ServiceDetailCoverage from '../Component/Services/Detail/ServiceDetailCoverage';
import ServiceDetailRelated from '../Component/Services/Detail/ServiceDetailRelated';
import ServiceDetailTestimonials from '../Component/Services/Detail/ServiceDetailTestimonials';
import ServiceDetailFAQs from '../Component/Services/Detail/ServiceDetailFAQs';
import ServiceDetailCTA from '../Component/Services/Detail/ServiceDetailCTA';

const ServiceDetail = () => {
  const { slug } = useParams();
  const detail = getServiceDetail(slug);

  if (!detail) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(detail.relatedSlugs);

  return (
    <div className="font-sans antialiased">
      <ServiceDetailHero {...detail.hero} title={detail.title} image={detail.image} />
      <ServiceDetailIntro {...detail.intro} />
      <ServiceDetailReasons
        title={detail.reasonsTitle}
        subtitle={detail.reasonsSubtitle}
        reasons={detail.reasons}
      />
      <ServiceDetailSteps title={detail.stepsTitle} subtitle={detail.stepsSubtitle} steps={detail.steps} />
      <ServiceDetailCoverage
        title={detail.coverageTitle}
        intro={detail.coverageIntro}
        items={detail.coverage}
        idealFor={detail.idealFor}
      />
      <ServiceDetailRelated
        title={detail.exploreTitle}
        items={detail.exploreServices}
        services={related}
      />
      <ServiceDetailTestimonials testimonials={detail.testimonials} />
      <ServiceDetailFAQs title={detail.faqsTitle} faqs={detail.faqs} />
      {detail.cta && (
        <div className="pb-20">
          <ServiceDetailCTA {...detail.cta} />
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
