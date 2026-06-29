import staff01 from '../assets/Staff01.png';
import staff02 from '../assets/Staff02.jpeg';
import staff03 from '../assets/Staff03.jpeg';
import staff04 from '../assets/Staff04.jpeg';
import staff05 from '../assets/Staff05.jpeg';

export const DOCTORS = [
  {
    id: 'dr-mamoona-fatima',
    name: 'Dr. Mamoona Fatima',
    specialty: 'Physiotherapist',
    experience: '12+ Years',
    languages: ['English', 'Arabic'],
    image: staff01,
    bio: 'Specializes in orthopedic and neurological rehabilitation, post-surgical recovery, and customized physiotherapy programs at home.',
    // dhaLicense: 'DHA-P-284719',
    rating: '4.9',
    reviewsCount: 142,
  },
  {
    id: 'shraddha-chandegara',
    name: 'Shraddha Chandegara',
    specialty: 'Medical Director',
    experience: '10+ Years',
    languages: ['English', 'Hindi'],
    image: staff02,
    bio: 'Oversees clinical excellence, specializing in critical care, medical protocols, and emergency home and hotel consultations.',
    // dhaLicense: 'DHA-P-193842',
    rating: '5.0',
    reviewsCount: 188,
  },
  {
    id: 'sayeda-marsha',
    name: 'Sayeda Marsha',
    specialty: 'General Practitioner',
    experience: '8+ Years',
    languages: ['English', 'Hindi', 'Urdu'],
    image: staff03,
    bio: 'Dedicated to family medicine, pediatric care, acute illness management, and preventative health screenings.',
    // dhaLicense: 'DHA-P-317506',
    rating: '4.9',
    reviewsCount: 96,
  },
  {
    id: 'rina-rathod',
    name: 'Rina Rathod',
    specialty: 'Registered Nurse',
    experience: '15+ Years',
    languages: ['English', 'Arabic', 'French'],
    image: staff04,
    bio: 'Expert in complex wound care, IV infusions, post-operative nursing, and chronic condition management.',
    // dhaLicense: 'DHA-P-402183',
    rating: '4.8',
    reviewsCount: 215,
  },
  {
    id: 'vivek-nayi',
    name: 'Vivek Nayi',
    specialty: 'Registered Nurse',
    experience: '9+ Years',
    languages: ['English', 'Mandarin', 'Hindi'],
    image: staff05,
    bio: 'Specializes in emergency nursing care, elderly assistance, pediatric support, and vaccination administration.',
    // dhaLicense: 'DHA-P-256904',
    rating: '4.9',
    reviewsCount: 110,
  },
];

export const getDoctorById = (id) => DOCTORS.find((doctor) => doctor.id === id);
