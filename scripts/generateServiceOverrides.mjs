import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.join(__dirname, '../tmp-web-content.txt'), 'utf8');

const URL_TO_SLUG = {
  'doctor-at-home': 'doctor-at-home',
  'doctor-at-hotel': 'doctor-at-hotel',
  // 'pediatrician-at-home': 'pediatrician-at-home',
  // 'pediatrician-on-call': 'pediatrician-on-call',
  'lab-test-at-home': 'lab-test-at-home',
  'std-test-at-home': 'std-test-at-home',
  'nipt-test-at-home': 'nipt-test-at-home',
  'dna-test-at-home': 'dna-test-at-home',
  'hiv-test-at-home': 'hiv-test-at-home',
  'semen-analysis': 'semen-analysis',
  'hormones-lab-test': 'hormones-lab-test',
  'beta-hcg-test-at-home': 'beta-hcg-test-at-home',
  'vitamin-minerals-test-at-home': 'vitamin-minerals-test-at-home',
  'physiotherapy-at-home': 'physiotherapy-at-home',
  'nursing-care-at-home': 'nursing-care-at-home',
  // 'elderly-care-at-home': 'elderly-care',
  // 'mother-baby-care': 'mother-baby-care',
  'post-surgical-care': 'post-surgical-care',
  'ecg-at-home': 'ecg-at-home',
  'wound-care': 'wound-care',
  'dressing-care-at-home': 'dressing-care-at-home',
  'urine-catheter-management': 'urine-catheter-management',
  'medication-management': 'medication-management',
  'iv-therapy-at-home': 'iv-therapies',
  'oxygen-therapy-at-home': 'oxygen-therapy-at-home',
  'covid-pcr-test-at-home': 'covid-pcr-test-at-home',
  'flu-vaccination-at-home': 'flu-vaccination-at-home-in-dubai',
  'health-checkup-at-home': 'health-checkup-at-home',
  'injection-service': 'injection-service-at-home',
};

const EXPLORE_TITLE_TO_SLUG = {
  'iv therapy at home': 'iv-therapies',
  'lab tests at home': 'lab-test-at-home',
  'lab test at home': 'lab-test-at-home',
  // 'doctor for elderly care': 'elderly-care',
  // 'elderly care at home': 'elderly-care',
  // 'pediatrician at home': 'pediatrician-at-home',
  'physiotherapy at home': 'physiotherapy-at-home',
  // 'pediatrician on call': 'pediatrician-on-call',
  'wound care & dressing': 'wound-care',
  'wound care': 'wound-care',
  'dressing care at home': 'dressing-care-at-home',
  'prescription delivery': 'medication-management',
  'doctor on call': 'doctor-on-call',
  'doctor at home': 'doctor-at-home',
  'doctor at hotel': 'doctor-at-hotel',
  'nursing care at home': 'nursing-care-at-home',
  // 'mother & baby care': 'mother-baby-care',
  'post surgical care': 'post-surgical-care',
  'post-surgical care': 'post-surgical-care',
  'ecg at home': 'ecg-at-home',
  'oxygen therapy at home': 'oxygen-therapy-at-home',
  'iv therapy': 'iv-therapies',
  'std test at home': 'std-test-at-home',
  'nipt test at home': 'nipt-test-at-home',
  'dna test at home': 'dna-test-at-home',
  'hiv test at home': 'hiv-test-at-home',
  'semen analysis': 'semen-analysis',
  'hormones lab test': 'hormones-lab-test',
  'allergy & food intolerance test': 'allergy-food-intolerance-test',
  'beta hcg test at home': 'beta-hcg-test-at-home',
  'vitamin & minerals test at home': 'vitamin-minerals-test-at-home',
  'health checkup at home': 'health-checkup-at-home',
  'injection service': 'injection-service-at-home',
  'covid pcr test at home': 'covid-pcr-test-at-home',
  'flu vaccination at home': 'flu-vaccination-at-home-in-dubai',
};

const resolveExploreSlug = (title) => {
  const key = clean(title).toLowerCase();
  if (EXPLORE_TITLE_TO_SLUG[key]) return EXPLORE_TITLE_TO_SLUG[key];
  for (const [pattern, slug] of Object.entries(EXPLORE_TITLE_TO_SLUG)) {
    if (key.includes(pattern) || pattern.includes(key)) return slug;
  }
  return null;
};

const clean = (s) =>
  s
    .replace(/\*\*/g, '')
    .replace(/\\./g, '.')
    .replace(/\s+/g, ' ')
    .replace(/●/g, '•')
    .trim();

const linesBetween = (text, startRe, endRe) => {
  const start = text.search(startRe);
  if (start === -1) return '';
  const slice = text.slice(start);
  const relEnd = slice.slice(1).search(endRe);
  return relEnd === -1 ? slice : slice.slice(0, relEnd + 1);
};

const extractChecklist = (section) => {
  const items = [];
  for (const line of section.split('\n')) {
    const m = line.match(/^[✔️✅•●]\s*(.+)/);
    if (m) items.push(clean(m[1].replace(/^[️\uFE0F\s]+/, '')));
  }
  return items;
};

const extractReasons = (section) => {
  const reasons = [];
  const blocks = section.split(/\n(?=###\s)/);
  for (const block of blocks) {
    const titleMatch = block.match(/^###\s+(.+?)(?:\n|$)/);
    if (!titleMatch) continue;
    const title = clean(titleMatch[1]);
    if (!title || /^step\s+\d/i.test(title)) continue;
    if (/^(iv therapy|lab tests|doctor for|pediatrician|physiotherapy|wound care|prescription)/i.test(title)) {
      continue;
    }
    const desc = clean(
      block
        .slice(titleMatch[0].length)
        .split(/\n##|\n# /)[0]
        .replace(/\n+/g, ' ')
    );
    if (desc && desc.length > 5) reasons.push({ title, description: desc });
  }
  return reasons;
};

const collectPoints = (text) => {
  const points = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^[●•]\s*(.+)/) || line.match(/^\s+●\s*(.+)/);
    if (m) points.push(clean(m[1]));
  }
  for (const part of text.split(/[●•]/).slice(1)) {
    const p = clean(part.split('\n')[0]);
    if (p && p.length < 70) points.push(p);
  }
  return [...new Set(points)].slice(0, 4);
};

const stripTitleFromDescription = (title, description) => {
  if (!title || !description) return description;
  let desc = clean(description);
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  desc = desc.replace(new RegExp(`^${escaped}\\s*`, 'i'), '');
  for (const word of title.split(/\s+/).slice(0, 3)) {
    if (word.length > 3) desc = desc.replace(new RegExp(`^${word}\\s+`, 'i'), '');
  }
  return clean(desc);
};

const bestDescriptionLine = (lines, title) => {
  const candidates = lines
    .map((l) => clean(l))
    .filter((l) => l.length > 15 && !/^[●•]/.test(l));
  const best = candidates.sort((a, b) => b.length - a.length)[0];
  return best ? stripTitleFromDescription(title, best) : '';
};

const polishStepTitle = (title) => {
  let t = clean(title).replace(/\s*–\s*24\/7/i, ' – 24/7');
  if (/^book\s+anytime/i.test(t)) return 'Book Anytime – 24/7';
  if (/^book\s+instantly/i.test(t)) return 'Book Instantly';
  if (/^book\s+24\/7/i.test(t)) return 'Book 24/7';
  if (/^book\s+your/i.test(t)) return clean(t.replace(/\s{2,}.*/, '')) || t;
  if (/^book\s/i.test(t)) return clean(t.split(/\s{2,}|\. /)[0]) || t;
  if (/^reach\s+out/i.test(t)) return 'Reach Out Anytime';
  if (/^we\s+come/i.test(t)) return 'We Come to You';
  if (/^doctor\s+visits/i.test(t)) return 'Doctor Visits Your Hotel';
  if (/^doctor\s+arrives/i.test(t)) return 'Doctor Arrives';
  if (/^receive\s+expert\s+pediatric/i.test(t)) return 'Receive Expert Pediatric Care';
  if (/^receive\s+personalized/i.test(t)) return 'Receive Personalized Care';
  if (/^receive\s+complete/i.test(t)) return 'Receive Complete Care';
  if (/^receive\s+care/i.test(t)) return 'Receive Care';
  if (/^receive\s+your\s+results/i.test(t)) return 'Receive Your Results';
  if (/^receive\s+results/i.test(t)) return 'Receive Results';
  if (/^we\s+visit/i.test(t)) return 'We Visit You';
  if (/^sample\s+collection/i.test(t)) return 'Sample Collection at Home';
  if (/^get\s+your\s+results/i.test(t)) return 'Get Your Results';
  if (/^schedule/i.test(t)) return clean(t.slice(0, 50).replace(/\s+\S*$/, '')) || t;
  return t;
};

const parseH3StepBlock = (block) => {
  const body = block.replace(/^###\s*Step\s+\d+\s*:?\s*/i, '');
  const points = collectPoints(body);
  const lines = body
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^[●•]/.test(l));

  if (!lines.length) return null;

  let title = '';
  let description = '';

  if (lines.length === 1) {
    const first = clean(lines[0]);
    const dot = first.indexOf('. ');
    if (dot > 5 && dot < 80) {
      title = polishStepTitle(first.slice(0, dot));
      description = clean(first.slice(dot + 2));
    } else {
      title = polishStepTitle(first);
      description = first;
    }
  } else {
    let splitAt = 0;
    let acc = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 95) {
        splitAt = i;
        break;
      }
      acc += line.length;
      splitAt = i + 1;
      if (acc >= 8 && i + 1 < lines.length && lines[i + 1].length > 40) break;
    }
    title = polishStepTitle(lines.slice(0, splitAt).join(' '));
    description = clean(lines.slice(splitAt).join(' '));
  }

  if (!description) description = title;
  description = stripTitleFromDescription(title, description);
  if (description.length < 12) {
    const fallback = bestDescriptionLine(lines, title);
    if (fallback) description = fallback;
  }
  return { title, description, points };
};

const parseInlineStepBlock = (raw) => {
  const points = [];
  const parts = raw.split(/[●•]/).map((p) => clean(p)).filter(Boolean);
  const main = parts[0] || raw;
  parts.slice(1).forEach((p) => {
    if (p.length < 70) points.push(p);
  });

  let title = main;
  let description = main;
  const dot = main.indexOf('. ');
  if (dot > 8 && dot < 100) {
    title = polishStepTitle(main.slice(0, dot));
    description = clean(main.slice(dot + 2));
  } else if (main.length > 50) {
    title = polishStepTitle(main.slice(0, 45).replace(/\s+\S*$/, ''));
    description = main;
  } else {
    title = polishStepTitle(main);
  }

  description = stripTitleFromDescription(title, description);
  if (description === title || description.length < 12) {
    const dot2 = main.indexOf(' A ');
    if (dot2 > 10) {
      title = polishStepTitle(main.slice(0, dot2));
      description = clean(main.slice(dot2 + 3));
    }
    description = stripTitleFromDescription(title, description);
  }

  return { title, description, points: [...new Set(points)].slice(0, 4) };
};

const extractSteps = (section) => {
  if (!section) return [];

  const parts = section
    .split(/(?=(?:###\s*Step\s+\d+|\bStep\s+\d+\s*:))/i)
    .filter((p) => /\bStep\s+\d+/i.test(p));

  const steps = [];
  for (const part of parts.slice(0, 3)) {
    if (/^###\s*Step/i.test(part.trim())) {
      const s = parseH3StepBlock(part.trim());
      if (s) steps.push(s);
    } else {
      const body = part.replace(/^[\s\S]*?\bStep\s+\d+\s*:/i, '');
      const s = parseInlineStepBlock(clean(body.split(/\n##|\n#\s/)[0].replace(/\n+/g, ' ')));
      if (s?.title) steps.push(s);
    }
  }

  return steps;
};

const STEPS_END =
  /##\s+(?:What |Types of|Conditions|Hormone Tests|Available|Explore|Ideal For|Our services|All Services|Post-Operative|Wound Types|Dressing|Medications|Oxygen|PCR|Flu |Health Check|Injection|Services Included|Physiotherapy at Home|Vitamin|ECG Services|Post-Surgical|Semen|Who Should|Vitamin &|Types of IV)/i;

const extractStepsSection = (content) => {
  const stepIdx = content.search(/(?:###\s*Step\s+1\b|(?:^|\n)\s*Step\s+1\s*:)/im);
  if (stepIdx === -1) return '';

  const slice = content.slice(stepIdx);
  const relEnd = slice.search(STEPS_END);
  return relEnd === -1 ? slice.slice(0, 3500) : slice.slice(0, relEnd);
};

const extractStepsTitle = (content) => {
  const stepIdx = content.search(/(?:###\s*Step\s+1\b|(?:^|\n)\s*Step\s+1\s*:)/im);
  if (stepIdx === -1) return 'How It Works in 3 Simple Steps';

  const before = content.slice(Math.max(0, stepIdx - 800), stepIdx);
  const headings = [...before.matchAll(/(?:#|##|###)\s+([^\n]+)/g)].map((m) => clean(m[1]));

  for (let i = headings.length - 1; i >= 0; i--) {
    const h = headings[i];
    if (/step|how it works|how our|how the|easy steps|simple steps|easy booking|other medical services/i.test(h)) {
      return h;
    }
  }

  const patterns = [
    /##\s+(Other Medical Services We Offer)/i,
    /#\s+(How It Works[^\n]+)/i,
    /##\s+(How (?:It Works|Our|the)[^\n]+)/i,
    /##\s+(Lab at Home in 3[^\n]+)/i,
    /(?:##|###)\s+([^\n]*3 Easy Steps[^\n]*)/i,
    /(?:##|###)\s+([^\n]*3 Simple[^\n]*)/i,
  ];
  for (const re of patterns) {
    const m = content.match(re);
    if (m) return clean(m[1]);
  }

  return 'How It Works in 3 Simple Steps';
};

const extractExploreServices = (section) => {
  const items = [];
  const blocks = section.split(/\n(?=###\s)/);
  for (const block of blocks) {
    const titleMatch = block.match(/^###\s+(.+?)(?:\n|$)/);
    if (!titleMatch) continue;
    const title = clean(titleMatch[1]);
    if (!title || /views all/i.test(title)) continue;
    const description = clean(
      block
        .slice(titleMatch[0].length)
        .split(/\n###|\n##|\nViews/i)[0]
        .replace(/\n+/g, ' ')
        .replace(/\s*Learn more\s*$/i, '')
    );
    if (!description || description.length < 20) continue;
    items.push({ title, description, slug: resolveExploreSlug(title) });
  }
  const seen = new Set();
  return items.filter((item) => {
    const key = item.slug || item.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const extractFaqs = (section) => {
  const faqs = [];
  const blocks = section.split(/\n(?=\d+\\?\.\s)/);
  for (const block of blocks) {
    const qMatch = block.match(/^(\d+\\?\.\s*.+?)\s*\n/i);
    if (!qMatch) continue;
    const question = clean(qMatch[1]);
    const answer = clean(block.slice(qMatch[0].length).split(/\n##|\n\*\*\*/)[0]);
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
};

const extractTestimonials = (section) => {
  const testimonials = [];
  const blocks = section.split(/\*\*([^*]+)\*\*/).slice(1);
  for (let i = 0; i < blocks.length; i += 2) {
    const name = clean(blocks[i]);
    let text = clean(blocks[i + 1] || '');
    text = text.split(/##\s+/)[0].split(/Your Wellness Is Just A Call Away/i)[0].trim();
    if (!name || !text || text.length < 25) continue;
    if (/^book now/i.test(text) || /^book now/i.test(name)) continue;
    if (name === text) continue;
    text = text.replace(new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'i'), '').trim();
    if (!text || /^book now/i.test(text)) continue;
    const parts = name.split(' ').filter(Boolean);
    const initials = parts
      .slice(0, 2)
      .map((p) => p[0])
      .join('')
      .toUpperCase();
    testimonials.push({
      name,
      initials,
      role: 'Patient',
      location: 'Dubai',
      text,
    });
  }
  return testimonials;
};

const parsePage = (content) => {
  const heroBullets = [];
  const preAbout = content.split(/##\s+About Our/i)[0] || content;
  let pendingHero = '';
  for (const line of preAbout.split('\n')) {
    const m = line.match(/^##\s+(.+)/);
    if (m) {
      if (pendingHero) {
        const text = clean(pendingHero.replace(/\s*Call\s*\+971.*$/i, ''));
        if (text.length >= 25 && text.length <= 200) heroBullets.push(text);
      }
      pendingHero = m[1];
      continue;
    }
    if (/^#\s/.test(line.trim())) {
      if (pendingHero) {
        const text = clean(pendingHero.replace(/\s*Call\s*\+971.*$/i, ''));
        if (text.length >= 25 && text.length <= 200) heroBullets.push(text);
      }
      pendingHero = '';
      continue;
    }
    const trimmed = line.trim();
    if (
      pendingHero &&
      trimmed &&
      !/^#/.test(trimmed) &&
      !/^(facebook|instagram|linkedin|x)$/i.test(trimmed) &&
      !/^\*/.test(trimmed) &&
      !/^call\s*\+971/i.test(trimmed)
    ) {
      pendingHero += ` ${trimmed}`;
    }
  }
  if (pendingHero) {
    const text = clean(pendingHero.replace(/\s*Call\s*\+971.*$/i, ''));
    if (text.length >= 25 && text.length <= 200) heroBullets.push(text);
  }
  const filteredHeroBullets = heroBullets.filter(
    (text) =>
      !/phone|facebook|available 24|home$|about us|our services|contact/i.test(text) &&
      !/^step\s+\d/i.test(text)
  );

  const headlineMatch = content.match(/\n#\s+([^#\n][^\n]+(?:\n[^#\n]+)?)/);
  let headline = headlineMatch ? clean(headlineMatch[1]).replace(/\s*–\s*–\s*/g, ' – ') : '';
  if (/how it works/i.test(headline)) {
    const alt = content.match(/\n#\s+((?!How It Works)[^\n]+)/i);
    headline = alt ? clean(alt[1]) : headline;
  }

  const aboutSection =
    linesBetween(content, /##\s+About Our/i, /Learn More About Us/i) ||
    linesBetween(content, /##\s+About Our/i, /##\s+Why Choose/i);
  const introEyebrowMatch = content.match(/(?:##|###)\s+(About Our[^\n]+)/i);
  const introEyebrow = introEyebrowMatch ? clean(introEyebrowMatch[1]) : undefined;
  const introTitleMatch = aboutSection.match(/##\s+About[^\n]*\n+##\s+([^\n]+)/i);
  const introTitle = introTitleMatch ? clean(introTitleMatch[1]) : headline;
  const introBody = aboutSection
    .replace(/##[^\n]+\n/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^learn more/i.test(l));
  const introParagraphs = [];
  let current = '';
  for (const line of introBody) {
    if (/^#{1,3}\s/.test(line)) continue;
    current += (current ? ' ' : '') + line;
    if (current.length > 120 && /[.!?]$/.test(current)) {
      introParagraphs.push(clean(current));
      current = '';
    }
  }
  if (current) introParagraphs.push(clean(current));

  const whyHeadingMatch =
    content.match(/##\s+(Why Choose[^\n]+)/i) ||
    content.match(/##\s+(Trusted[^\n]+)/i);
  const postLearnMoreSection = linesBetween(
    content,
    /Learn More About Us/i,
    /(?:##\s+[^\n]*(?:3 Easy Steps|3 Simple Steps)|###\s+Step\s+1|(?:^|\n)\s*Step\s+1\s*:)/i
  );
  let reasonsTitle = whyHeadingMatch ? clean(whyHeadingMatch[1]) : 'Why Choose SIMS Home Healthcare';
  if (!whyHeadingMatch && postLearnMoreSection) {
    const altTitle = postLearnMoreSection.match(/\n##\s+([^\n#]+(?:\n[^#\n]+)?)/);
    if (altTitle) reasonsTitle = clean(altTitle[1].replace(/\n/g, ' '));
  }
  const reasonsSubtitleMatch = content.match(
    /##\s+Why Choose[^\n]+\n+##\s+([^\n]+)(?:\s*\n+([^\n#]+))?/i
  );
  const reasonsSubtitle = reasonsSubtitleMatch
    ? clean([reasonsSubtitleMatch[1], reasonsSubtitleMatch[2]].filter(Boolean).join(' '))
    : '';

  const whySection =
    linesBetween(
      content,
      /##\s+Why Choose/i,
      /(?:#\s+How It Works|##\s+How (?:Our|It|The)|##\s+Other Medical Services|##\s+Conditions We|##\s+What |##\s+Lab at Home|(?:##|###)\s+[^\n]*3 Easy Steps)/i
    ) ||
    linesBetween(
      content,
      /##\s+Trusted by/i,
      /(?:##\s+Lab at Home|##\s+How (?:Our|It|The)|##\s+What |##\s+Types of|(?:##|###)\s+[^\n]*3 Easy Steps)/i
    ) ||
    linesBetween(
      content,
      /##\s+Trusted[^\n]*/i,
      /(?:##\s+[^\n]*3 Easy Steps|###\s+[^\n]*3 Easy Steps|##\s+Conditions We|##\s+Types of)/i
    ) ||
    postLearnMoreSection;
  const reasons = extractReasons(whySection).slice(0, 8);

  const stepsTitle = extractStepsTitle(content);
  const stepsSection = extractStepsSection(content);
  const steps = extractSteps(stepsSection);

  const coverageSection =
    linesBetween(
      content,
      /##\s+(?:What (?:Our|We)|Conditions We|Types of|Who Can Benefit)[^\n]*/i,
      /##\s+(?:Ideal For|Explore|Hear from|Get A|Subscribe|Access DHA)/i
    ) || '';
  const coverageTitleMatch = content.match(
    /##\s+((?:What (?:Our|We)|Conditions We|Types of|Who Can Benefit)[^\n]*)/i
  );
  const coverageTitle = coverageTitleMatch ? clean(coverageTitleMatch[1]) : "What's Included";
  const coverageIntroMatch = coverageSection.match(/\n([^✔️✅•#\n][^\n]{20,})\n/);
  const coverageIntro = coverageIntroMatch ? clean(coverageIntroMatch[1]) : '';
  const coverage = extractChecklist(coverageSection);

  const idealSection = linesBetween(content, /##\s+Ideal For/i, /##\s+(?:Explore|Hear from|Get A|Subscribe)/i);
  const idealFor = extractChecklist(idealSection);

  const exploreSection =
    linesBetween(
      content,
      /##\s+Explore more of\s+our home health offerings/i,
      /##\s+(?:Hear from|What Our Patients)|Views All Services/i
    ) ||
    linesBetween(
      content,
      /##\s+Explore All[^\n]*/i,
      /##\s+(?:Hear from|What Our Patients)|Views All Services/i
    ) ||
    linesBetween(content, /##\s+All Services/i, /##\s+(?:Hear from|What Our Patients)/i);

  let exploreServices = extractExploreServices(exploreSection);
  const exploreTitleMatch =
    content.match(/##\s+(Explore more of\s+our home health offerings:?)/i) ||
    content.match(/##\s+(Explore All[^\n]+)/i) ||
    (exploreServices.length ? content.match(/##\s+(All Services)/i) : null);
  const exploreTitle = exploreTitleMatch
    ? clean(exploreTitleMatch[1])
    : exploreServices.length
      ? 'Explore more of our home health offerings'
      : undefined;

  const testimonialSection = linesBetween(
    content,
    /#+#\s+(?:Hear from Our Patients|What Our Patients Say)/i,
    /##\s+Get A DHA|##\s+[^#\n]*Frequently Asked Questions|###\s+[^#\n]*Frequently Asked Questions/i
  );
  const testimonials = extractTestimonials(testimonialSection);

  const ctaSection = linesBetween(content, /##\s+Get A DHA/i, /Your Wellness Is Just A Call Away/i);
  const ctaTitleMatch = content.match(/##\s+(Get A DHA[^\n]+)/i);
  const ctaTitle = ctaTitleMatch ? clean(ctaTitleMatch[1]) : 'DHA-Certified Care — 24/7 Across Dubai';
  const ctaDescription = clean(ctaSection.replace(/##[^\n]+/g, '').replace(/\n+/g, ' '));

  const faqSection = linesBetween(
    content,
    /Frequently Asked Questions/i,
    /##\s+Subscribe/i
  );
  const faqsTitleMatch = content.match(/#+#\s+([^#\n]*Frequently Asked Questions[^\n]*)/i);
  const faqsTitle = faqsTitleMatch ? clean(faqsTitleMatch[1]) : 'Frequently Asked Questions';
  const faqs = extractFaqs(faqSection);

  return {
    hero: {
      eyebrow: 'Available 24/7 Support',
      headline: headline || introTitle,
      subheadline: introTitle,
      bullets: filteredHeroBullets.slice(0, 4),
    },
    intro: {
      ...(introEyebrow ? { eyebrow: introEyebrow } : {}),
      title: introTitle,
      paragraphs: introParagraphs.filter((p) => p.length > 40).slice(0, 4),
    },
    reasonsTitle,
    reasonsSubtitle,
    reasons,
    stepsTitle,
    steps,
    coverageTitle,
    coverageIntro,
    coverage,
    idealFor,
    ...(exploreTitle ? { exploreTitle } : {}),
    ...(exploreServices.length ? { exploreServices } : {}),
    testimonials,
    cta: {
      title: ctaTitle,
      description: ctaDescription,
      buttonText: 'Your Wellness Is Just A Call Away',
    },
    faqsTitle,
    faqs,
  };
};

const chunks = raw.split(/\n_{3,}\s*\n|\n-------\s*\n/).filter((c) => c.includes('Website URL:'));
const hivChunk = fs.readFileSync(path.join(__dirname, 'chunks/hiv-test-at-home.txt'), 'utf8');
chunks.push(hivChunk);
const overrides = {};

for (const chunk of chunks) {
  const urlMatch = chunk.match(/Website URL:\s*https:\/\/simshomehealthcare\.ae\/([^/\s]+)\//);
  if (!urlMatch) continue;
  const urlSlug = urlMatch[1];
  const internalSlug = URL_TO_SLUG[urlSlug];
  if (!internalSlug) {
    console.warn('No slug mapping for', urlSlug);
    continue;
  }
  const contentStart = chunk.indexOf('Website Content:');
  const content = contentStart === -1 ? chunk : chunk.slice(contentStart);
  overrides[internalSlug] = parsePage(content);
  const o = overrides[internalSlug];
  console.log(
    internalSlug,
    '| steps:', o.steps.length,
    '| reasons:', o.reasons.length,
    '| explore:', o.exploreServices?.length ?? 0
  );
}

const header = `// Auto-generated from simshomehealthcare.ae — node scripts/generateServiceOverrides.mjs
export const DETAIL_OVERRIDES = `;

function toJs(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);
  if (Array.isArray(obj)) {
    if (!obj.length) return '[]';
    return `[\n${obj.map((v) => `${padIn}${toJs(v, indent + 1)}`).join(',\n')}\n${pad}]`;
  }
  if (obj && typeof obj === 'object') {
    const entries = Object.entries(obj);
    if (!entries.length) return '{}';
    return `{\n${entries
      .map(([k, v]) => `${padIn}${JSON.stringify(k)}: ${toJs(v, indent + 1)}`)
      .join(',\n')}\n${pad}}`;
  }
  if (typeof obj === 'string') return JSON.stringify(obj);
  return String(obj);
}

fs.writeFileSync(
  path.join(__dirname, '../src/data/serviceOverrides.js'),
  header + toJs(overrides, 0) + ';\n'
);
console.log('Wrote', Object.keys(overrides).length, 'service overrides');
