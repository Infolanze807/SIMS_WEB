import healthCheckupAtHomeImage from '../assets/HealthCheckupAtHome03.webp';

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

export const SAME_DAY_LAB_CHECKUPS_AT_HOME_ARTICLE = [
  {
    type: 'paragraph',
    parts: [
      {
        italic:
          'Clinical Governance Notice: All diagnostic sample collections, laboratory referrals, and physician consultations strictly adhere to Dubai Health Authority (DHA) clinical standards, infection control protocols, and UAE patient confidentiality laws.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      'Patients across Dubai—including Dubai Marina, Downtown Dubai, Jumeirah, and Business Bay—can book same-day STD screenings, vitamin deficiency tests, and full body checkups at home through DHA-licensed home healthcare providers. A certified DHA-registered nurse arrives within 30 to 60 minutes for sterile, discreet blood and urine collection, with accredited laboratory reports delivered digitally within 6 to 24 hours.',
    ],
  },
  {
    type: 'image',
    src: healthCheckupAtHomeImage,
    alt: 'Same-day STD, vitamin deficiency, and full body checkups at home in Dubai',
    caption:
      'DHA-licensed nurses collect blood and urine samples at home for discreet, hospital-grade lab testing across Dubai.',
  },
  heading(2, 'Why At-Home Diagnostic Lab Testing Is Transforming Healthcare in Dubai'),
  paragraph(
    'Delaying routine blood work because of Sheikh Zayed Road traffic, crowded clinic waiting rooms, or privacy concerns often postpones early medical intervention. Mobile phlebotomy eliminates these barriers by bringing hospital-grade sample collection directly to your apartment, villa, hotel suite, or office.'
  ),
  list(
    [
      'Absolute Clinical Privacy:',
      'Samples are collected in the comfort of your personal space using discrete medical kits and encrypted reporting—ideal for sensitive sexual health screenings.',
    ],
    [
      'Zero Clinic Waiting Time:',
      'Complete your morning fasting blood draw from your living room without taking half a day off work.',
    ],
    [
      'Hospital-Grade Laboratory Precision:',
      'Every specimen is transported in temperature-monitored bio-carriers directly to DHA-licensed and CAP-accredited reference laboratories, ensuring the exact same analytical accuracy as leading Dubai hospitals.',
    ],
    [
      'Flexible 24/7 Scheduling:',
      'Early-morning fasting slots, evening visits, and weekend appointments fit seamlessly around busy work or travel schedules.',
    ]
  ),
  heading(2, 'Core Diagnostic Panels Available for Same-Day Home Collection'),
  {
    type: 'paragraph',
    parts: [
      'Whether you need targeted peace of mind or an annual preventative baseline, ',
      { link: 'at-home laboratory services', to: '/services/lab-test-at-home' },
      ' cover three essential diagnostic categories.',
    ],
  },
  heading(3, '1. Confidential Same-Day STD & STI Screening at Home'),
  {
    type: 'paragraph',
    parts: [
      'Sexual health testing demands speed, clinical accuracy, and complete discretion. ',
      { link: 'STD testing at home', to: '/services/std-test-at-home' },
      ' removes the awkwardness of public waiting rooms while following strict DHA patient confidentiality mandates.',
    ],
  },
  list(
    [
      'Pathogens & Biomarkers Screened:',
      'Comprehensive blood and urine multiplex PCR and serology panels detecting HIV (1 & 2 Ag/Ab Combo), Syphilis (TPPA / RPR), Hepatitis B (HBsAg), Hepatitis C (Anti-HCV), Chlamydia trachomatis, Neisseria gonorrhoeae, Herpes Simplex Virus (HSV 1 & 2), and Trichomonas vaginalis.',
    ],
    [
      'Turnaround Time:',
      'Rapid PCR and serology results are typically finalized within 6 to 24 hours.',
    ],
    [
      'Discreet Continuity of Care:',
      'If any marker indicates an active infection, a DHA-licensed Doctor on Call in Dubai can provide a private home consultation and issue an authorized electronic prescription in accordance with UAE health regulations.',
    ]
  ),
  heading(3, '2. Vitamin & Micronutrient Deficiency Panels'),
  paragraph(
    'Despite abundant sunshine in the United Arab Emirates, predominantly indoor lifestyles and air-conditioned environments contribute to widespread micronutrient deficiencies. Subtle symptoms—such as persistent fatigue, diffuse hair thinning, brain fog, muscle cramps, and frequent colds—frequently stem from correctable imbalances.'
  ),
  list(
    [
      'Key Biomarkers Analyzed:',
      'Vitamin D (25-Hydroxy), Vitamin B12 (Cobalamin), Serum Folate, Complete Iron Profile (Ferritin, Serum Iron, Transferrin Saturation, TIBC), Magnesium, Zinc, and Corrected Calcium.',
    ],
    [
      'Targeted Replenishment:',
      'Once laboratory results confirm specific deficiencies, a physician can recommend targeted oral supplementation or prescribe a personalized At-Home Vitamin or Iron IV Drip to restore optimal levels safely.',
    ]
  ),
  {
    type: 'paragraph',
    parts: [
      'Explore dedicated ',
      { link: 'vitamin and minerals testing', to: '/services/vitamin-minerals-test-at-home' },
      ' and physician-guided ',
      { link: 'IV therapy', to: '/services/iv-therapies' },
      ' options when replenishment is clinically indicated.',
    ],
  },
  heading(3, '3. Comprehensive Full Body Preventative Checkups'),
  paragraph(
    'Annual diagnostic checkups establish objective baselines for metabolic, endocrine, hepatic, and cardiovascular function—allowing early lifestyle or clinical intervention before chronic conditions develop.'
  ),
  {
    type: 'table',
    headers: ['Organ System', 'Key Diagnostic Tests Included', 'Clinical Purpose'],
    rows: [
      [
        'Hematology & Immunity',
        'Complete Blood Count (CBC), ESR, CRP',
        'Screens for anemia, hidden inflammation, and immune cell balance',
      ],
      [
        'Cardiovascular Health',
        'Full Lipid Profile (Total Cholesterol, LDL, HDL, Triglycerides)',
        'Evaluates arterial plaque risk and lipid metabolism',
      ],
      [
        'Glycemic Control',
        'Fasting Blood Glucose, HbA1c',
        'Detects insulin resistance, pre-diabetes, and diabetes',
      ],
      [
        'Liver & Kidney Function',
        'LFTs (ALT, AST, Bilirubin, Albumin), Renal Panel (Creatinine, Urea, Electrolytes)',
        'Assesses hepatic detoxification and kidney filtration efficiency',
      ],
      [
        'Thyroid & Hormones',
        'TSH, Free T3, Free T4, Cortisol / Total Testosterone',
        'Evaluates metabolic rate, energy regulation, and endocrine balance',
      ],
    ],
  },
  heading(2, 'How DHA-Compliant Home Sample Collection Works: Step-by-Step'),
  orderedList(
    [
      'Appointment & Clinical Triage:',
      'Select your diagnostic panel online or via phone and confirm your Dubai location (e.g., Dubai Marina, Palm Jumeirah, Downtown, JVC, or DIFC). A coordinator verifies fasting requirements and valid Emirates ID or passport details per DHA registration regulations.',
    ],
    [
      'Nurse Dispatch (30–60 Minutes):',
      'A DHA-licensed registered nurse arrives at your doorstep carrying single-use, sterile vacutainer systems and personal protective equipment (PPE).',
    ],
    [
      'Identity Verification & Gentle Collection (10 Minutes):',
      'Your identity is verified, blood or urine samples are collected using sterile venipuncture techniques, and unique barcode labels are affixed in your presence to eliminate sample mix-ups.',
    ],
    [
      'Validated Cold-Chain Transport:',
      'Specimens are sealed in temperature-logged bio-transport boxes and delivered immediately to a DHA-licensed partner laboratory.',
    ],
    [
      'Encrypted Report & Physician Explanation:',
      'Receive your official laboratory PDF via encrypted email or WhatsApp within 6 to 24 hours, accompanied by a complimentary physician review to explain any out-of-range values.',
    ]
  ),
  heading(2, 'Pre-Test Preparation Checklist for Accurate Lab Results'),
  list(
    [
      'Fasting Window (8–12 Hours):',
      'Full body checkups, lipid profiles, and fasting blood sugar tests require abstaining from food and caloric beverages (including coffee with milk or juice) for 8 to 12 hours prior to collection. Drinking plain water is strongly encouraged—staying hydrated makes veins easier to access.',
    ],
    [
      'Non-Fasting Panels:',
      'Standalone STD screenings, vitamin panels, and thyroid profiles generally do not require fasting unless bundled with a metabolic checkup.',
    ],
    [
      'Medication & Supplement Disclosure:',
      'Inform your nurse if you take high-dose Biotin (Vitamin B7)—commonly found in hair, skin, and nail supplements—or blood thinners, as biotin can occasionally interfere with immunoassay thyroid and hormone readings.',
    ]
  ),
  heading(2, 'Frequently Asked Questions (FAQ)'),
  heading(3, 'Are at-home blood tests as reliable as hospital laboratory tests in Dubai?'),
  paragraph(
    'Yes. DHA-licensed home healthcare providers adhere to identical pre-analytical phlebotomy protocols, cold-chain transport standards, and utilize the exact same CAP-accredited and DHA-regulated reference laboratories as Dubai’s leading hospitals.'
  ),
  heading(3, 'How quickly will I receive my STD screening or full body checkup results?'),
  paragraph(
    'Most routine hematology, vitamin deficiency, and rapid PCR STD panels are processed and delivered digitally within 6 to 24 hours. Specialized hormone or comprehensive wellness profiles typically take 24 to 36 hours.'
  ),
  heading(3, 'How is patient confidentiality protected during an at-home STD test in the UAE?'),
  paragraph(
    'All patient registrations, Emirates ID verifications, barcoded specimens, and diagnostic reports are strictly governed by UAE Federal Law on Medical Liability and DHA patient confidentiality regulations.'
  ),
  heading(3, 'Can I book a blood test and a vitamin IV drip during the same home visit?'),
  paragraph(
    'Yes. Many patients schedule a morning fasting blood draw to establish their baseline vitamin, mineral, and ferritin levels, followed by a physician-approved immune or hydration IV infusion during the same nursing visit.'
  ),
  heading(3, 'Are at-home blood tests safe and suitable for children, elderly parents, or pregnant women?'),
  paragraph(
    'Yes. Our DHA-licensed registered nurses are experienced in pediatric, geriatric, and prenatal phlebotomy. Utilizing ultra-fine butterfly needles and gentle venipuncture techniques, they ensure a calm, minimally invasive experience for seniors with fragile veins, expectant mothers, and children in the comfort of home.'
  ),
  heading(3, 'What happens if a nurse has difficulty finding a vein during a home visit?'),
  paragraph(
    'Our nurses are senior DHA-licensed clinicians trained in difficult venous access. Drinking 1 to 2 glasses of plain water 30 minutes before your appointment helps plump veins naturally. If needed, nurses use warm compresses and fine-gauge butterfly needles to ensure a smooth, single-prick collection.'
  ),
];
