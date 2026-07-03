import staff01 from '../assets/Staff07.png';
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
    bio: 'Expert Senior Physiotherapy dedicated to active aging, safe movement, and personalized care.',
    dhaLicense: '11035623-003',
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
    bio: 'Expert medical leadership for your health and well-being. Committed to excellence in every aspect of care.',
    dhaLicense: '68816393-002',
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
    bio: 'Providing professional care across a wide range of conditions. Dedicated to safe, effective, and personalized treatment.',
    dhaLicense: '20210786-004',
    rating: '4.9',
    reviewsCount: 96,
  },
  {
    id: 'rina-rathod',
    name: 'Rina Rathod',
    specialty: 'DHA Licenses Nurse',
    experience: '15+ Years',
    languages: ['English', 'Arabic', 'French'],
    image: staff04,
    bio: 'Experienced DHA certified nurse ensuring safe and effective care. Committed to delivering compassionate, patient-focused support.',
    dhaLicense: '38268146-004',
    rating: '4.8',
    reviewsCount: 215,
  },
  {
    id: 'vivek-nayi',
    name: 'Vivek Nayi',
    specialty: 'DHA Licensed Nurse',
    experience: '9+ Years',
    languages: ['English', 'Mandarin', 'Hindi'],
    image: staff05,
    bio: 'DHA licensed healthcare professional ensuring quality patient support. Commited to safety, care, and patient satisfaction.',
    dhaLicense: '13794332-003',
    rating: '4.9',
    reviewsCount: 110,
  },
];

export const getDoctorById = (id) => DOCTORS.find((doctor) => doctor.id === id);
