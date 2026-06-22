export const DOCTORS = [
  {
    id: 'dr-sarah-al-mansoori',
    name: 'Dr. Sarah Al Mansoori',
    specialty: 'General Practitioner',
    experience: '12+ Years',
    languages: ['English', 'Arabic'],
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    bio: 'Specializes in home visits, acute care, and chronic disease management across Dubai.',
    dhaLicense: 'DHA-P-284719',
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    specialty: 'Emergency Medicine',
    experience: '10+ Years',
    languages: ['English', 'Hindi'],
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    bio: 'Rapid-response physician for urgent home and hotel consultations, available 24/7.',
    dhaLicense: 'DHA-P-193842',
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    experience: '8+ Years',
    languages: ['English', 'Hindi', 'Urdu'],
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
    bio: 'Gentle, child-focused care for fever, infections, and wellness checks at home.',
    dhaLicense: 'DHA-P-317506',
  },
  {
    id: 'dr-ahmed-hassan',
    name: 'Dr. Ahmed Hassan',
    specialty: 'Internal Medicine',
    experience: '15+ Years',
    languages: ['English', 'Arabic', 'French'],
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    bio: 'Expert in diabetes, hypertension, and post-operative follow-up in private settings.',
    dhaLicense: 'DHA-P-402183',
  },
  {
    id: 'dr-emily-chen',
    name: 'Dr. Emily Chen',
    specialty: 'Family Medicine',
    experience: '9+ Years',
    languages: ['English', 'Mandarin'],
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127fb54?auto=format&fit=crop&q=80&w=600',
    bio: 'Comprehensive family care including travel medicine and preventive health screenings.',
    dhaLicense: 'DHA-P-256904',
  },
  {
    id: 'dr-omar-khalid',
    name: 'Dr. Omar Khalid',
    specialty: 'General Practitioner',
    experience: '11+ Years',
    languages: ['English', 'Arabic', 'Urdu'],
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    bio: 'Trusted for discreet hotel and corporate on-call visits with fast turnaround.',
    dhaLicense: 'DHA-P-378521',
  },
];

export const getDoctorById = (id) => DOCTORS.find((doctor) => doctor.id === id);
