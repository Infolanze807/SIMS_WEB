import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LegalHero from '../Component/Legal/LegalHero';
import LegalPageBody from '../Component/Legal/LegalPageBody';
import { getLegalPage } from '../data/legalContent';
import Seo from '../Component/Seo';
import { clipText, pageJsonLd, sectionsToPlainText, SITE_NAME } from '../seo/site';

const Legal = () => {
  const { slug } = useParams();
  const page = getLegalPage(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const description = clipText(sectionsToPlainText(page.sections));

  return (
    <div className="bg-[#FAFBFD] font-sans antialiased">
      <Seo
        title={`${page.title} | ${SITE_NAME}`}
        description={description}
        path={`/legal/${slug}`}
        jsonLd={pageJsonLd({
          path: `/legal/${slug}`,
          name: page.title,
          description,
        })}
      />
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
