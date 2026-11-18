import mensHealthImage from '../assets/blog/mens-health-home-care-dubai.webp';

const heading = (level, text) => ({ type: 'heading', level, text });
const paragraph = (text) => ({ type: 'paragraph', parts: [text] });
const list = (...items) => ({
  type: 'list',
  items: items.map(([label, text]) => ({ label, text })),
});
const orderedList = (...items) => ({
  type: 'ordered-list',
  items: items.map(([label, text]) => ({ label, text })),
});
export const MENS_HEALTH_MONTH_HOME_CARE_ARTICLE = [
  paragraph(
    'Looking after your health shouldn’t cost you half a workday in Dubai traffic. Throughout Men’s Health Month, DHA-licensed home healthcare teams bring 24/7 on-call doctors, private hotel visits, at-home blood tests, and custom IV drip therapy straight to your door—reaching most neighborhoods and hotels across Dubai within 30 to 45 minutes.'
  ),
  {
    type: 'image',
    src: mensHealthImage,
    alt: 'DHA-licensed doctor providing men’s health checkup at home in Dubai',
    caption:
      'Men’s Health Month care at home in Dubai: doctor visits, lab tests, and IV therapy without clinic queues.',
  },
  heading(2, 'Why Most Men in Dubai Put Off Checkups'),
  paragraph(
    'Ask almost any man living in Dubai when he last had a full health checkup, and you will usually hear the same answer: “I’ve been meaning to, just haven’t found the time.”'
  ),
  paragraph(
    'Between early-morning meetings in DIFC, crawling evening traffic on Sheikh Zayed Road, frequent flights out of DXB, and family commitments on the weekend, sitting in a hospital waiting room for two hours rarely makes the to-do list. Most men only see a doctor when a fever knocks them flat or a nagging ache refuses to go away.'
  ),
  paragraph(
    'The catch is that the health issues affecting men the most—rising cholesterol, creeping blood sugar, low testosterone, and severe Vitamin D deficiency from working indoors all year—rarely announce themselves early on. Men’s Health Month is a timely nudge to stop waiting for warning signs. Thanks to DHA-licensed home healthcare, you no longer have to rearrange your week to get checked out; the clinic comes to you.'
  ),
  heading(2, 'Four Ways to Take Care of Your Health Without Stepping Outside'),
  paragraph(
    'Whether you are a Dubai resident, a busy executive, or in town for a conference, mobile medical care handles everything from sudden sick days to annual blood work right where you are.'
  ),
  heading(3, '1. A Doctor on Call, Day or Night'),
  {
    type: 'paragraph',
    parts: [
      'Waking up with a sharp sore throat, stomach bug, or fever is miserable enough without having to drive yourself to urgent care. When you book a ',
      { link: 'doctor on call in Dubai', to: '/services/doctor-on-call' },
      ', a DHA-licensed physician comes directly to your home—whether it is 2:00 PM on a Tuesday or 3:00 AM on a Sunday. SIMS Home Healthcare operates 24/7, 365 days a year. You get a proper physical exam, clear answers, and a digital prescription sent straight to your phone, all from your own couch.',
    ],
  },
  heading(3, '2. Private Hotel Visits for Travelers'),
  {
    type: 'paragraph',
    parts: [
      'Falling sick in a hotel room away from home is uniquely frustrating. Instead of asking the front desk where the nearest hospital is, ',
      { link: 'hotel doctor visits', to: '/services/doctor-at-hotel' },
      ' bring discreet medical care directly to your suite—from Palm Jumeirah and Dubai Marina to Downtown and Creek Harbour. Visiting doctors coordinate quietly with hotel reception and arrive with portable diagnostic gear to treat jet lag, food poisoning, dehydration, or seasonal flu on the spot.',
    ],
  },
  heading(3, '3. Morning Blood Tests Without the Fasting Commute'),
  {
    type: 'paragraph',
    parts: [
      'Getting routine blood work usually means waking up hungry, skipping your morning coffee, and sitting in traffic before a nurse draws your blood. With ',
      { link: 'lab tests at home in Dubai', to: '/services/lab-test-at-home' },
      ', a certified nurse knocks on your door at the exact hour you choose. Samples travel in temperature-controlled kits to accredited local labs, and your results land in your inbox within 12 to 24 hours.',
    ],
  },
  list(
    [
      'Energy & Hormones:',
      'Total and Free Testosterone, Cortisol, and a full Thyroid panel (TSH, Free T3, Free T4).',
    ],
    [
      'Heart & Blood Sugar:',
      'Full Lipid Profile (cholesterol and triglycerides), HbA1c, and fasting glucose.',
    ],
    [
      'Prostate & Organ Health:',
      'PSA screening (recommended yearly once you hit 40, or earlier if prostate issues run in your family), alongside liver and kidney function checks.',
    ],
    [
      'Everyday Deficiencies:',
      'Vitamin D3 (surprisingly low across the UAE despite the sunshine), Vitamin B12, iron, and magnesium.',
    ]
  ),
  heading(3, '4. Custom IV Drip Therapy for Real Recovery'),
  {
    type: 'paragraph',
    parts: [
      'Swallowing a handful of daily vitamins only gets you so far, since your digestive system breaks down much of what you take before your body can use it. ',
      { link: 'IV drip therapy at home', to: '/services/iv-therapies' },
      ' delivers fluids, electrolytes, amino acids, and vitamins straight into your bloodstream so your body absorbs 100% of them. Administered by a DHA-registered nurse while you catch up on emails or watch a game, popular options include:',
    ],
  },
  list(
    [
      'The Burnout Reset:',
      'B-Complex vitamins, B12, Magnesium, and Taurine to lift mental fog and steady your energy.',
    ],
    [
      'Post-Training Recovery:',
      'Amino acids, L-Carnitine, and hydration fluids to ease muscle soreness after heavy sessions at the gym or on the padel court.',
    ]
  ),
  heading(2, 'Visiting a Dubai Clinic vs. Booking Care at Home'),
  {
    type: 'table',
    headers: ['What Matters Most', 'Standard Clinic or Hospital', 'DHA Home Healthcare'],
    rows: [
      [
        'Getting There',
        'Fighting traffic and hunting for parking',
        'Zero travel — the medical team comes to you',
      ],
      [
        'Waiting Time',
        '45 to 90 minutes in a crowded lobby',
        'No waiting — your appointment starts on arrival',
      ],
      [
        'Privacy',
        'Public reception desks and shared waiting rooms',
        'Total discretion in your living room or hotel suite',
      ],
      [
        'Convenience',
        'Separate trips for the doctor, lab, and pharmacy',
        'One seamless visit for exams, blood draws, and IVs',
      ],
      [
        'Hours',
        'Limited evening and weekend slots',
        'Open 24/7, including weekends and public holidays',
      ],
    ],
  },
  heading(2, 'How It Works in Three Simple Steps'),
  orderedList(
    [
      'Pick What You Need:',
      'Choose a standalone men’s health blood panel, an urgent doctor visit, or a wellness IV drip.',
    ],
    [
      'Share Your Pin:',
      'Message your location—home address or hotel room number—and pick a time that suits your day.',
    ],
    [
      'Get Checked & Reviewed:',
      'A licensed clinician arrives at your door, handles your test or consultation, and follows up once your digital lab report is ready.',
    ]
  ),
  heading(2, 'Common Questions About Home Healthcare in Dubai'),
  heading(3, 'Are home doctors and nurses in Dubai properly licensed?'),
  paragraph(
    'Yes. Every reputable home healthcare provider in Dubai operates under strict Dubai Health Authority (DHA) licensing. Each visiting doctor, nurse, and lab technician holds an active DHA license and follows the exact same hygiene and clinical standards you would expect inside a top hospital.'
  ),
  heading(3, 'How fast can a doctor reach my home or hotel?'),
  paragraph(
    'In most parts of Dubai—including Downtown, DIFC, Jumeirah, Dubai Marina, Palm Jumeirah, Arabian Ranches, and Mirdif—a medical team typically arrives within 30 to 45 minutes of your booking, day or night.'
  ),
  heading(3, 'Which blood tests should men over 35 get every year?'),
  paragraph(
    'A solid annual baseline includes a Lipid Profile, HbA1c, Vitamin D3, Vitamin B12, Testosterone levels, and Liver & Kidney function tests. Once you turn 40, adding an annual PSA (Prostate-Specific Antigen) blood test is a smart preventive habit.'
  ),
  heading(3, 'Can I get my blood drawn and have an IV drip during the same visit?'),
  paragraph(
    'Absolutely. Your nurse will collect your fasting blood sample first—so nothing skews your lab numbers—and then set up your vitamin IV drip right away during the same appointment.'
  ),
];
