import doctorOnCallImage from '../assets/DoctorOnCall01.jpeg';
import labTestAtHomeImage from '../assets/LabTestAtHome01.jpeg';
import physiotherapyAtHomeImage from '../assets/PhysiotherapyAtHome003.jpeg';
import nursingCareAtHomeImage from '../assets/NursingAtHome01.jpeg';
import ivTherapiesImage from '../assets/IVTherapies02.jpeg';
import oxygenTherapyAtHomeImage from '../assets/OxygenTherapyAtHome03.jpeg';
import covidPCRTestAtHomeImage from '../assets/CovidPCRTestAtHome03.jpeg';
import fluVaccinationAtHomeInDubaiImage from '../assets/FluVaccinationAtHomeInDubai03.jpeg';
import healthCheckupAtHomeImage from '../assets/HealthCheckupAtHome03.jpeg';
import injectionServiceAtHomeImage from '../assets/InjectionServiceAtHome03.jpeg';
import doctorAtHomeImage from '../assets/DoctorAtHome02.jpeg';
import doctorAtHotelImage from '../assets/DoctorAtHotel01.jfif';
import homeVisitDoctorImage from '../assets/HomeVisitDoctor01.jfif';
import pediatricianAtHomeImage from '../assets/PediatricianAtHome02.jfif';
import pediatricianAtHotelImage from '../assets/PediatricianAtHotel01.jfif';
import stdTestAtHomeImage from '../assets/STDTestAtHome001.jpeg';
import NIPTTestAtHomeImage from '../assets/NIPTTestAtHome001.jpeg';
import dnaTestAtHomeImage from '../assets/DNATestAtHome01.jfif';
import hivTestAtHomeImage from '../assets/HIVTestAtHome01.jfif';
import semenAnalysisAtHomeImage from '../assets/SemanAnalytics001.jpeg';
import hormonesLabTestAtHomeImage from '../assets/HormonesLabTest02.jpg';
import allergyFoodIntoleranceTestAtHomeImage from '../assets/AllergyFood02.jpg';
import betaHcgTestAtHomeImage from '../assets/BetaHCG02.jpg';
import vitaminMineralsTestAtHomeImage from '../assets/Vitamin&MineralsTest01.jpeg';
import postSurgicalCareAtHomeImage from '../assets/PostSurgicalCare01.jfif';
import ecgAtHomeImage from '../assets/ECGAtHome02.jpg';
import woundCareAtHomeImage from '../assets/WoundCare01.jpeg';
import dressingCareAtHomeImage from '../assets/DressingCare02.jpg';
import urineCatheterManagementAtHomeImage from '../assets/UrineCatheterManagement01.jpeg';
import medicationManagementAtHomeImage from '../assets/MedicationManagement03.jpg';

export const SERVICES_CATALOG = [
  {
    slug: 'doctor-on-call',
    title: 'Doctor On Call',
    description:
      'Our DHA-certified doctors bring personalized medical care right to your doorstep, hotel room, or workplace anytime you need it.',
    image: doctorOnCallImage,
    category: 'doctor',
    relatedSlugs: ['doctor-at-home', 'doctor-at-hotel', 'home-visit-doctor', 
      // 'pediatrician-at-home', 'pediatrician-at-hotel'
    ],
  },
  {
    slug: 'lab-test-at-home',
    title: 'Lab Test at Home',
    description:
      'Get reliable, confidential lab tests at your convenience. Our licensed professionals cover a wide range of tests, delivered and collected safely at your location.',
    image: labTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['std-test-at-home', 'nipt-test-at-home', 'dna-test-at-home', 'hiv-test-at-home', 'vitamin-minerals-test-at-home'],
  },
  {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy at Home',
    description:
      'Personalized physiotherapy sessions delivered to your home, helping you recover from injuries, manage pain, and improve mobility in comfort.',
    image: physiotherapyAtHomeImage,
    category: 'physio',
    relatedSlugs: ['post-surgical-care', 'nursing-care-at-home', 'elderly-care'],
  },
  {
    slug: 'nursing-care-at-home',
    title: 'Nursing Care at Home',
    description:
      'Our trained nurses offer compassionate, professional care tailored to your needs, from elderly support to post-surgical recovery.',
    image: nursingCareAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['elderly-care', 'post-surgical-care', 'mother-baby-care', 'wound-care'],
  },
  {
    slug: 'iv-therapies',
    title: 'IV Therapies',
    description:
      'Boost energy, immunity, and hydration with our range of IV drip therapies, safely administered by licensed nurses at home or hotel.',
    image: ivTherapiesImage,
    category: 'general',
    relatedSlugs: ['injection-service-at-home', 'health-checkup-at-home', 'doctor-on-call'],
  },
  {
    slug: 'oxygen-therapy-at-home',
    title: 'Oxygen Therapy at Home',
    description:
      'Oxygen support for respiratory conditions delivered and monitored by healthcare professionals in your home.',
    image: oxygenTherapyAtHomeImage,
    category: 'general',
    relatedSlugs: ['nursing-care-at-home', 'doctor-on-call', 'covid-pcr-test-at-home'],
  },
  {
    slug: 'covid-pcr-test-at-home',
    title: 'Covid PCR Test at Home',
    description:
      'Certified COVID-19 PCR testing with quick home sample collection and official DHA-approved reports.',
    image: covidPCRTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['lab-test-at-home', 'health-checkup-at-home', 'flu-vaccination-at-home-in-dubai'],
  },
  {
    slug: 'flu-vaccination-at-home-in-dubai',
    title: 'Flu Vaccination at Home in Dubai',
    description:
      'Stay protected from seasonal flu with licensed nurses administering vaccines in the comfort and safety of your home.',
    image: fluVaccinationAtHomeInDubaiImage,
    category: 'general',
    relatedSlugs: ['injection-service-at-home', 'health-checkup-at-home', 'doctor-on-call'],
  },
  {
    slug: 'health-checkup-at-home',
    title: 'Health Checkup at Home',
    description:
      'Comprehensive health screening packages including lab tests and doctor consultations, tailored to your wellness goals and delivered to your doorstep.',
    image: healthCheckupAtHomeImage,
    category: 'general',
    relatedSlugs: ['lab-test-at-home', 'doctor-on-call', 'ecg-at-home'],
  },
  {
    slug: 'injection-service-at-home',
    title: 'Injection Service at Home',
    description:
      'SIMS Health Care offers safe and professional injection service at home with trained nurses, ensuring comfort, hygiene, and complete privacy.',
    image: injectionServiceAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['nursing-care-at-home', 'iv-therapies', 'medication-management'],
  },
  // {
  //   slug: 'pediatrician-at-home',
  //   title: 'Pediatrician at Home',
  //   description:
  //     'SIMS Health Care provides pediatrician at home services, ensuring expert, safe, and convenient healthcare for your child.',
  //   image: pediatricianAtHomeImage,
  //   category: 'doctor',
  //   relatedSlugs: ['pediatrician-at-hotel', 'doctor-on-call', 'doctor-at-home'],
  // },
  {
    slug: 'home-visit-doctor',
    title: 'Home Visit Doctor',
    description:
      'SIMS Health Care provides home visit doctor services in Dubai—DHA-certified physicians come to your doorstep 24/7 for fast, private medical care.',
    image: homeVisitDoctorImage,
    category: 'doctor',
    relatedSlugs: ['doctor-on-call', 'doctor-at-home', 'doctor-at-hotel', // 'pediatrician-at-home'
    ],
  },
  // {
  //   slug: 'pediatrician-at-hotel',
  //   title: 'Pediatrician at Hotel',
  //   description:
  //     'SIMS Health Care offers pediatrician at hotel services in Dubai—expert child care delivered discreetly to your hotel room, 24/7.',
  //   image: pediatricianAtHotelImage,
  //   category: 'doctor',
  //   relatedSlugs: ['pediatrician-at-home', 'doctor-on-call', 'doctor-at-hotel', 'home-visit-doctor'],
  // },
  {
    slug: 'doctor-at-home',
    title: 'Doctor at Home',
    description:
      'SIMS Health Care offers doctor at home services, providing safe, reliable, and personalized medical care at your doorstep.',
    image: doctorAtHomeImage,
    category: 'doctor',
    relatedSlugs: ['doctor-on-call', 'doctor-at-hotel', // 'pediatrician-at-home'
    ],
  },
  {
    slug: 'doctor-at-hotel',
    title: 'Doctor at Hotel',
    description:
      'SIMS Health Care provides doctor at hotel services, offering convenient, professional, and timely medical care wherever you stay.',
    image: doctorAtHotelImage,
    category: 'doctor',
    relatedSlugs: ['doctor-on-call', 'doctor-at-home', 
      // 'pediatrician-at-hotel', 
      'home-visit-doctor'],
  },
  {
    slug: 'beta-hcg-test-at-home',
    title: 'Beta HCG Test at Home',
    description:
      'SIMS Health Care provides Beta HCG testing at home with safe sample collection, accurate results, and complete privacy for pregnancy and health monitoring.',
    image: betaHcgTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['lab-test-at-home', 'nipt-test-at-home', 'hormones-lab-test'],
  },
  {
    slug: 'vitamin-minerals-test-at-home',
    title: 'Vitamin & Minerals Test at Home',
    description:
      'SIMS Health Care offers vitamin and minerals testing at home with safe sample collection, accurate results, and complete privacy for better health management.',
    image: vitaminMineralsTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['lab-test-at-home', 'health-checkup-at-home', 'hormones-lab-test'],
  },
  {
    slug: 'allergy-food-intolerance-test',
    title: 'Allergy & Food Intolerance Test',
    description:
      'SIMS Health Care offers allergy & food intolerance tests at home with safe sample collection, accurate results, and complete privacy for better health management.',
    image: allergyFoodIntoleranceTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['lab-test-at-home', 'hormones-lab-test', 'health-checkup-at-home'],
  },
  {
    slug: 'std-test-at-home',
    title: 'STD Test at Home',
    description:
      'SIMS Health Care offers confidential STD testing at home with safe sample collection, accurate results, and complete privacy.',
    image: stdTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['hiv-test-at-home', 'lab-test-at-home', 'dna-test-at-home'],
  },
  {
    slug: 'nipt-test-at-home',
    title: 'NIPT Test at Home',
    description:
      'SIMS Health Care provides NIPT testing at home with safe sample collection, accurate results, and complete privacy for expectant mothers.',
    image: NIPTTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['beta-hcg-test-at-home', 'lab-test-at-home', 'mother-baby-care'],
  },
  {
    slug: 'dna-test-at-home',
    title: 'DNA Test at Home',
    description:
      'SIMS Health Care offers DNA testing at home with safe sample collection, accurate results, and full privacy for reliable genetic analysis.',
    image: dnaTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['std-test-at-home', 'hiv-test-at-home', 'lab-test-at-home'],
  },
  {
    slug: 'hiv-test-at-home',
    title: 'HIV Test at Home',
    description:
      'SIMS Health Care provides HIV testing at home with discreet sample collection, accurate results, and complete privacy for your peace of mind.',
    image: hivTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['std-test-at-home', 'lab-test-at-home', 'semen-analysis'],
  },
  {
    slug: 'semen-analysis',
    title: 'Semen Analysis',
    description:
      'SIMS Health Care offers semen analysis at home with safe sample collection, accurate results, and complete privacy in a comfortable environment.',
    image: semenAnalysisAtHomeImage,
    category: 'lab',
    relatedSlugs: ['hormones-lab-test', 'lab-test-at-home', 'beta-hcg-test-at-home'],
  },
  {
    slug: 'hormones-lab-test',
    title: 'Hormones Lab Test',
    description:
      'SIMS Health Care provides hormones lab tests at home with safe sample collection, accurate results, and complete privacy for your health monitoring.',
    image: hormonesLabTestAtHomeImage,
    category: 'lab',
    relatedSlugs: ['lab-test-at-home', 'allergy-food-intolerance-test', 'health-checkup-at-home'],
  },
  // {
  //   slug: 'elderly-care',
  //   title: 'Elderly care',
  //   description:
  //     'SIMS Health Care offers compassionate elderly care at home with trained caregivers, ensuring dignity, safety, comfort, and reliable daily support.',
  //   image:
  //     'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1200',
  //   category: 'nursing',
  //   relatedSlugs: ['nursing-care-at-home', 'medication-management', 'physiotherapy-at-home'],
  // },
  {
    slug: 'medication-management',
    title: 'Medication Management',
    description:
      'SIMS Health Care offers medication management at home with expert guidance, timely reminders, and complete support to ensure safe and effective treatment.',
    image: medicationManagementAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['nursing-care-at-home', 'elderly-care', 'injection-service-at-home'],
  },
  {
    slug: 'ecg-at-home',
    title: 'ECG at Home',
    description:
      'SIMS Health Care provides ECG at home with expert technicians, accurate heart monitoring, and complete comfort in a safe and private environment.',
    image: ecgAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['health-checkup-at-home', 'doctor-on-call', 'nursing-care-at-home'],
  },
  {
    slug: 'wound-care',
    title: 'Wound Care',
    description:
      'SIMS Health Care offers wound care at home with expert medical attention, safe dressing, infection prevention, and faster healing in a comfortable environment.',
    image: woundCareAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['dressing-care-at-home', 'post-surgical-care', 'nursing-care-at-home'],
  },
  {
    slug: 'dressing-care-at-home',
    title: 'Dressing Care at Home',
    description:
      'SIMS Health Care provides dressing care at home with expert nurses, safe wound management, infection control, and personalized healing support.',
    image: dressingCareAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['wound-care', 'post-surgical-care', 'nursing-care-at-home'],
  },
  {
    slug: 'urine-catheter-management',
    title: 'Urine Catheter Management',
    description:
      'SIMS Health Care offers urine catheter management at home with expert care, hygiene maintenance, infection prevention, and patient comfort support.',
    image: urineCatheterManagementAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['nursing-care-at-home', 'elderly-care', 'post-surgical-care'],
  },
  // {
  //   slug: 'mother-baby-care',
  //   title: 'Mother & baby care',
  //   description:
  //     'SIMS Health Care provides mother & baby care at home with expert support, newborn checkups, feeding guidance, and postnatal care for a healthy recovery and growth.',
  //   image:
  //     'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1200',
  //   category: 'nursing',
  //   relatedSlugs: ['pediatrician-at-home', 'nipt-test-at-home', 'nursing-care-at-home'],
  // },
  {
    slug: 'post-surgical-care',
    title: 'Post-Surgical Care',
    description:
      'SIMS Health Care provides post-surgical care at home with expert monitoring, wound management, medication support, and faster, safe recovery in comfort.',
    image: postSurgicalCareAtHomeImage,
    category: 'nursing',
    relatedSlugs: ['physiotherapy-at-home', 'wound-care', 'nursing-care-at-home'],
  },
];

export const HEADER_NAV_SERVICES = [
  {
    title: 'Doctor On Call',
    slug: 'doctor-on-call',
    children: [
      { title: 'Doctor At Home', slug: 'doctor-at-home' },
      { title: 'Doctor at Hotel', slug: 'doctor-at-hotel' },
      { title: 'Home Visit Doctor', slug: 'home-visit-doctor' },
      // { title: 'Pediatrician at Home', slug: 'pediatrician-at-home' },
      // { title: 'Pediatrician at Hotel', slug: 'pediatrician-at-hotel' },
    ],
  },
  {
    title: 'Lab Test at Home',
    slug: 'lab-test-at-home',
    children: [
      { title: 'STD Test at Home', slug: 'std-test-at-home' },
      { title: 'NIPT Test at Home', slug: 'nipt-test-at-home' },
      { title: 'DNA Test at Home', slug: 'dna-test-at-home' },
      { title: 'HIV Test at Home', slug: 'hiv-test-at-home' },
      { title: 'Semen Analysis', slug: 'semen-analysis' },
      { title: 'Hormones Lab Test', slug: 'hormones-lab-test' },
      { title: 'Allergy & Food Intolerance Test', slug: 'allergy-food-intolerance-test' },
      { title: 'Beta HCG Test at Home', slug: 'beta-hcg-test-at-home' },
      { title: 'Vitamin & Minerals Test at Home', slug: 'vitamin-minerals-test-at-home' },
    ],
  },
  { title: 'Physiotherapy At Home', slug: 'physiotherapy-at-home', children: [] },
  {
    title: 'Nursing Care at Home',
    slug: 'nursing-care-at-home',
    children: [
      // { title: 'Elderly care at home', slug: 'elderly-care' },
      // { title: 'Mother & Baby Care', slug: 'mother-baby-care' },
      { title: 'Post Surgical Care', slug: 'post-surgical-care' },
      { title: 'ECG at Home', slug: 'ecg-at-home' },
      { title: 'Wound Care', slug: 'wound-care' },
      { title: 'Dressing Care at Home', slug: 'dressing-care-at-home' },
      { title: 'Urine Catheter Management', slug: 'urine-catheter-management' },
      { title: 'Medication Management', slug: 'medication-management' },
    ],
  },
  { title: 'IV Therapy at Home', slug: 'iv-therapies', children: [] },
  { title: 'Oxygen Therapy at Home', slug: 'oxygen-therapy-at-home', children: [] },
  { title: 'Covid PCR Test at Home', slug: 'covid-pcr-test-at-home', children: [] },
  { title: 'Flu Vaccination at Home', slug: 'flu-vaccination-at-home-in-dubai', children: [] },
  { title: 'Health Checkup at Home', slug: 'health-checkup-at-home', children: [] },
  { title: 'Injection Service', slug: 'injection-service-at-home', children: [] },
];

export const SLUG_ALIASES = {
  'elderly-care-at-home': 'elderly-care',
  'iv-therapy-at-home': 'iv-therapies',
  'flu-vaccination-at-home': 'flu-vaccination-at-home-in-dubai',
  'injection-service': 'injection-service-at-home',
};

export const resolveServiceSlug = (slug) => SLUG_ALIASES[slug] || slug;

export const getServiceBySlug = (slug) => {
  const resolved = resolveServiceSlug(slug);
  return SERVICES_CATALOG.find((service) => service.slug === resolved) ?? null;
};

export const getRelatedServices = (slugs = []) =>
  slugs.map((s) => getServiceBySlug(s)).filter(Boolean);
