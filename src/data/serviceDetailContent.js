import { getServiceBySlug } from './servicesCatalog';

const mergeOverride = (template, override) => {
  const merged = { ...template };
  for (const [key, value] of Object.entries(override)) {
    if (Array.isArray(value) && value.length === 0) {
      merged[key] = value;
      continue;
    }
    if (value && typeof value === 'object' && !Array.isArray(value) && merged[key]) {
      merged[key] = { ...merged[key], ...value };
    } else if (value !== undefined && value !== null) {
      merged[key] = value;
    }
  }
  return merged;
};

let overridesPromise = null;
const mergedBySlug = new Map();

const loadOverrideModules = () => {
  if (!overridesPromise) {
    overridesPromise = Promise.all([
      import('./serviceOverrides'),
      import('./serviceManualOverrides'),
    ]);
  }
  return overridesPromise;
};

const getOverrideForSlug = async (slug) => {
  if (mergedBySlug.has(slug)) return mergedBySlug.get(slug);

  const [generatedMod, manualMod] = await loadOverrideModules();
  const merged = mergeOverride(
    generatedMod.DETAIL_OVERRIDES[slug] || {},
    manualMod.MANUAL_OVERRIDES[slug] || {},
  );
  mergedBySlug.set(slug, merged);
  return merged;
};

const CATEGORY_DEFAULTS = {
  doctor: {
    reasons: [
      { title: '24/7 DHA-Certified Doctors', description: 'Licensed physicians available round-the-clock for home, hotel, and office visits across Dubai.' },
      { title: 'Fast Response Times', description: 'Our medical team typically arrives within 30–45 minutes of your request.' },
      { title: 'Private & Comfortable Care', description: 'Receive expert treatment in your own environment without hospital queues or exposure.' },
      { title: 'Comprehensive On-Site Treatment', description: 'From diagnosis to prescriptions and follow-up guidance—all handled at your location.' },
    ],
    steps: [
      { title: 'Contact Us 24/7', description: 'Call or WhatsApp +971 5252 310 28 to book your visit.', points: ['Available 24/7', 'Quick booking', 'Immediate confirmation'] },
      { title: 'Doctor Arrives at Your Location', description: 'A DHA-certified doctor comes to your home, hotel, or office equipped for care.', points: ['Licensed professionals', 'Fully equipped', 'Safe and discreet'] },
      { title: 'Receive Expert Medical Care', description: 'Get personalized consultation, treatment, and follow-up support on-site.', points: ['One-on-one attention', 'Prescriptions if needed', 'Aftercare guidance'] },
    ],
    coverage: [
      'Fever, flu, cold, and infections',
      'Minor injuries, cuts, and wounds',
      'Chronic condition management',
      'Pediatric and elderly care',
      'Hotel and tourist medical visits',
    ],
    faqs: (title) => [
      { question: `1. What is ${title}?`, answer: `${title} is a SIMS Home Healthcare service that brings DHA-certified medical professionals directly to your home, hotel, or office in Dubai—available 24/7 for your convenience.` },
      { question: '2. How quickly can a doctor arrive?', answer: 'We typically respond within 30 to 45 minutes across Dubai, depending on your location and time of request.' },
      { question: '3. Are your doctors DHA-certified?', answer: 'Yes. All our doctors and medical staff are licensed by the Dubai Health Authority (DHA) and trained in home-based patient care.' },
      { question: '4. Can I book for a hotel or office visit?', answer: 'Absolutely. We serve residents, tourists, and corporate clients at homes, hotels, and workplaces throughout Dubai.' },
    ],
  },
  lab: {
    reasons: [
      { title: 'DHA-Certified Sample Collection', description: 'Licensed phlebotomists collect samples safely at your home, hotel, or office.' },
      { title: 'Same-Day Appointments', description: 'Flexible scheduling with same-day collection available across Dubai.' },
      { title: 'Fast Digital Results', description: 'Reports delivered securely via email or WhatsApp within 12–24 hours.' },
      { title: 'Complete Privacy & Confidentiality', description: 'Discreet, professional service with strict hygiene protocols.' },
    ],
    steps: [
      { title: 'Book Your Test', description: 'Call or WhatsApp us 24/7 to schedule your home lab test.', points: ['Available 24/7', 'Easy booking', 'Immediate response'] },
      { title: 'Sample Collection at Home', description: 'Our professional arrives at your location for safe, hygienic sample collection.', points: ['Licensed staff', 'Sterile equipment', 'Professional visit'] },
      { title: 'Receive Digital Reports', description: 'Your sample is processed in DHA-approved labs with results delivered digitally.', points: ['Accurate results', 'Secure delivery', 'Follow-up if needed'] },
    ],
    coverage: [
      'Blood tests and health panels',
      'Specialized diagnostic testing',
      'Confidential and private collection',
      'DHA/MOH-approved lab processing',
      'Results within 12–24 hours',
    ],
    faqs: (title) => [
      { question: `1. What is ${title}?`, answer: `${title} by SIMS Health Care offers safe sample collection at your location with accurate results and complete privacy, processed in DHA-approved laboratories.` },
      { question: '2. How long do results take?', answer: 'Most results are delivered within 12 to 24 hours via secure digital channels.' },
      { question: '3. Is the service confidential?', answer: 'Yes. We ensure complete privacy and discretion throughout the entire testing process.' },
      { question: '4. Can I book from a hotel in Dubai?', answer: 'Yes. We collect samples from homes, hotels, and offices across Dubai.' },
    ],
  },
  nursing: {
    reasons: [
      { title: 'Skilled & Compassionate Nurses', description: 'Trained nursing professionals deliver expert care tailored to your needs.' },
      { title: '24/7 Home Nursing Support', description: 'Round-the-clock availability for elderly, post-surgical, and chronic care.' },
      { title: 'Personalized Care Plans', description: 'Customized nursing support based on your medical condition and recovery goals.' },
      { title: 'Safe & Hygienic Procedures', description: 'Strict infection control and professional medical standards at every visit.' },
    ],
    steps: [
      { title: 'Schedule Your Care', description: 'Contact us to discuss your nursing care requirements.', points: ['24/7 availability', 'Care assessment', 'Flexible scheduling'] },
      { title: 'Nurse Visits Your Home', description: 'A qualified nurse arrives equipped to provide the care you need.', points: ['Licensed nurses', 'Professional equipment', 'Safe procedures'] },
      { title: 'Ongoing Support & Monitoring', description: 'Continuous care with progress tracking and family updates as needed.', points: ['Regular visits', 'Medication support', 'Recovery monitoring'] },
    ],
    coverage: [
      'Post-surgical and wound care',
      'Elderly and chronic illness support',
      'Medication administration and management',
      'Mother and baby postnatal care',
      'ECG, dressing, and catheter management',
    ],
    faqs: (title) => [
      { question: `1. What does ${title} include?`, answer: `${title} by SIMS Health Care provides professional nursing support at home with expert care, safety, comfort, and personalized attention for patients of all ages.` },
      { question: '2. Are your nurses licensed?', answer: 'Yes. All our nurses are DHA-licensed and experienced in home-based medical care.' },
      { question: '3. Is 24/7 nursing care available?', answer: 'Yes. We offer round-the-clock nursing support for patients who need continuous care at home.' },
      { question: '4. Do you offer post-surgical care?', answer: 'Absolutely. We provide expert post-surgical monitoring, wound management, and medication support at home.' },
    ],
  },
  physio: {
    reasons: [
      { title: 'DHA-Certified Physiotherapists', description: 'Licensed therapists trained in orthopedic, neurological, and geriatric rehab.' },
      { title: 'Personalized Home Sessions', description: 'One-on-one treatment plans tailored to your recovery goals.' },
      { title: 'Flexible Scheduling', description: 'Same-day and weekend appointments available across Dubai.' },
      { title: 'Equipment Brought to You', description: 'Portable therapy tools and equipment provided for every session.' },
    ],
    steps: [
      { title: 'Book a Session', description: 'Call or WhatsApp to schedule your physiotherapy at home.', points: ['Easy booking', 'Same-day slots', 'Expert matching'] },
      { title: 'Therapist Comes to You', description: 'A licensed physiotherapist arrives fully equipped at your location.', points: ['DHA-certified', 'Full assessment', 'Immediate treatment'] },
      { title: 'Track Your Recovery', description: 'Ongoing sessions with progress monitoring and exercise plans.', points: ['Consistent care', 'Recovery milestones', 'Home exercise plans'] },
    ],
    coverage: [
      'Post-operative rehabilitation',
      'Back, neck, and joint pain',
      'Sports injury recovery',
      'Stroke and neurological rehab',
      'Elderly mobility and fall prevention',
    ],
    faqs: (title) => [
      { question: `1. What is ${title}?`, answer: `Licensed physiotherapists visit your home to provide rehabilitation, pain relief, and mobility exercises tailored to your condition.` },
      { question: '2. Who can benefit?', answer: 'Anyone recovering from surgery, managing chronic pain, athletes with injuries, or seniors with mobility challenges.' },
      { question: '3. Are therapists DHA-certified?', answer: 'Yes. All our physiotherapists are fully licensed and experienced in home-based rehabilitation.' },
      { question: '4. How long are sessions?', answer: 'Sessions typically last 45–60 minutes. Your treatment plan is discussed during the first visit.' },
    ],
  },
  general: {
    reasons: [
      { title: 'DHA-Approved Service', description: 'All services delivered by licensed healthcare professionals following Dubai health standards.' },
      { title: 'Convenient Home Delivery', description: 'Expert care brought directly to your home, hotel, or office—no clinic visits needed.' },
      { title: '24/7 Availability', description: 'Book anytime, including weekends and public holidays across Dubai.' },
      { title: 'Safe, Private & Professional', description: 'Strict hygiene protocols with complete confidentiality for every patient.' },
    ],
    steps: [
      { title: 'Book Your Service', description: 'Call or WhatsApp +971 5252 310 28 to schedule.', points: ['Available 24/7', 'Quick response', 'Easy booking'] },
      { title: 'We Come to You', description: 'Our certified professional arrives at your location within 30–45 minutes.', points: ['Licensed staff', 'Fully equipped', 'Professional care'] },
      { title: 'Receive Expert Care', description: 'Complete service delivered at your doorstep with follow-up support.', points: ['Personalized care', 'Safe procedures', 'Aftercare guidance'] },
    ],
    coverage: [
      'Professional at-home medical service',
      'DHA-certified healthcare staff',
      'Safe and hygienic procedures',
      'Available across all Dubai areas',
      '24/7 booking and support',
    ],
    faqs: (title) => [
      { question: `1. What is ${title}?`, answer: `SIMS Health Care offers ${title.toLowerCase()} with trained professionals, ensuring comfort, safety, and complete privacy at your location in Dubai.` },
      { question: '2. How do I book?', answer: 'Call or WhatsApp us 24/7 at +971 5252 310 28. Share your location and preferred time—we handle the rest.' },
      { question: '3. Are your staff licensed?', answer: 'Yes. All SIMS healthcare professionals are DHA-certified and trained for home-based care.' },
      { question: '4. Is the service available 24/7?', answer: 'Yes. We are available around the clock, including weekends and public holidays.' },
    ],
  },
};

const buildFromTemplate = (service) => {
  const defaults = CATEGORY_DEFAULTS[service.category] || CATEGORY_DEFAULTS.general;
  return {
    hero: {
      eyebrow: 'SIMS Home Healthcare Dubai',
      headline: service.title,
      subheadline: `Professional ${service.title} — Available 24/7 Across Dubai`,
      bullets: [
        service.description,
        'DHA-certified professionals at your home, hotel, or office.',
        'Fast, private, and professional medical support anywhere in Dubai.',
      ],
    },
    intro: {
      title: `Trusted ${service.title} in Dubai`,
      paragraphs: [service.description, 'At SIMS Home Healthcare, we bring DHA-approved medical care directly to your doorstep — whether at home, hotel, or office. Our experienced team provides 24/7 healthcare services across Dubai, ensuring you receive professional, private, and personalized treatment at your convenience.'],
    },
    reasonsTitle: `Why Choose SIMS for ${service.title}?`,
    reasons: defaults.reasons,
    stepsTitle: `${service.title} in 3 Easy Steps`,
    steps: defaults.steps,
    coverageTitle: `What's Included in ${service.title}`,
    coverageIntro: `Our ${service.title} service covers:`,
    coverage: defaults.coverage,
    faqsTitle: `${service.title} Frequently Asked Questions`,
    faqs: defaults.faqs(service.title),
  };
};

export const getServiceDetail = async (slug) => {
  const base = getServiceBySlug(slug);
  if (!base) return null;

  const override = await getOverrideForSlug(base.slug);
  const template = buildFromTemplate(base);
  const merged = mergeOverride(template, override);
  merged.slug = base.slug;
  merged.title = base.title;
  merged.image = override.image ?? merged.hero?.image ?? base.image;
  merged.relatedSlugs = override.relatedSlugs ?? base.relatedSlugs;

  if (merged.exploreServices?.length) {
    merged.exploreServices = merged.exploreServices.map((item) => {
      const svc = item.slug ? getServiceBySlug(item.slug) : null;
      return {
        ...item,
        slug: svc?.slug || item.slug || null,
        image: svc?.image || null,
      };
    });
  }

  return merged;
};
