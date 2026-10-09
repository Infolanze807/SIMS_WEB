export const SITE_URL = 'https://www.simshomehealthcare.ae';
export const SITE_NAME = 'SIMS Home Healthcare';
export const HOME_TITLE = 'Sims Home Healthcare | 24/7 Doctor on call Dubai';
export const HOME_DESCRIPTION =
  'DHA-licensed doctors, nurses, and physiotherapists visit your home or hotel in Dubai 24/7. Book doctor visits, IV therapy, lab tests, and nursing care.';

export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const SAME_AS = [
  'https://www.facebook.com/SIMSHomeHealthcare',
  'https://www.instagram.com/simshomehealthcare/',
  'https://www.linkedin.com/company/sims-home-healthcare/',
  'https://www.youtube.com/@SIMSHomeHealthcareCenterLLC',
  'https://x.com/SIMSHealthDubai',
];

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'AB Center, 207 Sheikh Zayed Rd, Al Barsha First',
  addressLocality: 'Al Barsha',
  addressRegion: 'Dubai',
  addressCountry: 'AE',
};

const AREA_SERVED = {
  '@type': 'City',
  name: 'Dubai',
};

const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
};

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

export const clipText = (value, max = 160) => {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
};

export const organizationNode = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: 'connect@simshomehealthcare.ae',
  telephone: '+971525231028',
  address: ADDRESS,
  areaServed: AREA_SERVED,
  sameAs: SAME_AS,
});

export const localBusinessNode = () => ({
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: '+971525231028',
  email: 'connect@simshomehealthcare.ae',
  address: ADDRESS,
  areaServed: AREA_SERVED,
  openingHoursSpecification: OPENING_HOURS,
  parentOrganization: { '@id': ORG_ID },
  sameAs: SAME_AS,
  description: HOME_DESCRIPTION,
});

const FEATURED_SERVICES = [
  { name: 'Doctor at Home', path: '/services/doctor-at-home', serviceType: 'Home doctor visit' },
  { name: 'Doctor at Hotel', path: '/services/doctor-at-hotel', serviceType: 'Hotel doctor visit' },
  { name: 'IV Therapy at Home', path: '/services/iv-therapies', serviceType: 'IV therapy' },
  { name: 'Lab Test at Home', path: '/services/lab-test-at-home', serviceType: 'Home lab test' },
  { name: 'Physiotherapy at Home', path: '/services/physiotherapy-at-home', serviceType: 'Home physiotherapy' },
  { name: 'Nurse at Home', path: '/services/nursing-care-at-home', serviceType: 'Home nursing' },
];

export const serviceNode = ({ name, description, path, serviceType }) => ({
  '@type': 'Service',
  name,
  serviceType: serviceType || name,
  description,
  url: absoluteUrl(path),
  provider: { '@id': BUSINESS_ID },
  areaServed: AREA_SERVED,
});

export const homepageJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    organizationNode(),
    localBusinessNode(),
    ...FEATURED_SERVICES.map((service) =>
      serviceNode({
        ...service,
        description: `${service.name} by ${SITE_NAME}, available 24/7 across Dubai.`,
      }),
    ),
  ],
});

export const pageJsonLd = ({ path, name, description, type = 'WebPage' }) => ({
  '@context': 'https://schema.org',
  '@graph': [
    organizationNode(),
    localBusinessNode(),
    {
      '@type': type,
      name,
      description,
      url: absoluteUrl(path),
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': BUSINESS_ID },
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { '@id': ORG_ID },
    },
  ],
});

export const servicePageJsonLd = ({ name, description, path, faqs = [] }) => {
  const graph = [
    organizationNode(),
    localBusinessNode(),
    serviceNode({ name, description, path, serviceType: name }),
  ];

  const questions = faqs.filter((item) => item?.question && item?.answer);
  if (questions.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.question.replace(/^\d+\.\s*/, ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

const partText = (part) => {
  if (typeof part === 'string') return part;
  if (!part || typeof part !== 'object') return '';
  return part.bold || part.italic || part.link || part.text || '';
};

export const sectionsToPlainText = (sections = []) =>
  sections
    .map((section) => {
      if (!section) return '';
      if (section.type === 'heading') return section.text || '';
      if (section.type === 'paragraph') return (section.parts || []).map(partText).join('');
      if (section.type === 'image') return section.caption || section.alt || '';
      if (section.type === 'table') {
        const header = (section.headers || []).join(' | ');
        const rows = (section.rows || []).map((row) => row.join(' | ')).join('\n');
        return [header, rows].filter(Boolean).join('\n');
      }
      if (section.type === 'list' || section.type === 'ordered-list' || section.type === 'bullets') {
        return (section.items || [])
          .map((item) => {
            if (typeof item === 'string') return item;
            return [item.label, item.text].filter(Boolean).join(' ');
          })
          .join('\n');
      }
      return '';
    })
    .map((block) => block.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n\n');

export const blogIndexJsonLd = (posts = []) => {
  const page = pageJsonLd({
    path: '/blog',
    name: `${SITE_NAME} Blog`,
    description:
      'Guides on doctor visits, IV drips, lab tests, and post-surgery rehab at home in Dubai, written by SIMS Home Healthcare.',
    type: 'Blog',
  });

  page['@graph'].push({
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      description: post.excerpt,
    })),
  });

  return page;
};

export const blogPostingJsonLd = ({ post, path, articleBody, description, faqs = [] }) => {
  const published = post.date ? new Date(post.date) : null;
  const datePublished =
    published && !Number.isNaN(published.getTime()) ? published.toISOString() : undefined;

  const result = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationNode(),
    localBusinessNode(),
    {
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      articleBody,
      datePublished,
      author: {
        '@type': 'Person',
        name: post.author || 'SIMS Home Healthcare',
      },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: absoluteUrl(path),
      url: absoluteUrl(path),
      articleSection: post.category,
      about: {
        '@type': 'Thing',
        name: post.category || 'Home healthcare in Dubai',
      },
      isPartOf: { '@id': BUSINESS_ID },
    },
  ],
  };

  const questions = faqs.filter((item) => item?.question && item?.answer);
  if (questions.length) {
    result['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: String(item.question).replace(/^\d+\.\s*/, ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return result;
};
