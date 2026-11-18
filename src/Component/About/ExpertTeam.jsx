import React from 'react';
import DoctorsShowcase from '../DoctorsShowcase';

const ExpertTeam = () => (
  <DoctorsShowcase
    eyebrow="Our Clinical Team"
    title={
      <>
        Meet Our Team Of DHA-Licensed{' '}
        <span className="bg-gradient-to-r from-brand-accent to-brand-dark-mid bg-clip-text text-transparent">
          Experts
        </span>
      </>
    }
    description="Our team is composed of general practitioners, emergency care physicians, pediatricians, nurses, and wellness professionals, all registered with the Dubai Health Authority (DHA)."
  />
);

export default ExpertTeam;
