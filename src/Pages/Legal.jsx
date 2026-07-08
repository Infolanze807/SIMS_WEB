import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LegalHero from '../Component/Legal/LegalHero';
import LegalPageBody from '../Component/Legal/LegalPageBody';
import { getLegalPage } from '../data/legalContent';

const Legal = () => {
  const { slug } = useParams();
  const page = getLegalPage(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-[#FAFBFD] font-sans antialiased">
      <LegalHero
        eyebrow={page.eyebrow}
        title={page.title}
        effectiveDate={page.effectiveDate}
        slug={slug}
      />
      <LegalPageBody sections={page.sections} />
    </div>
  );
};

export default Legal;
