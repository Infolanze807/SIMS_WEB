import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, '../src/data/serviceDetailContent.js');
const lines = fs.readFileSync(file, 'utf8').split('\n');
const head = lines.slice(0, 18);
const tail = lines.slice(445);
const getServiceDetail = `export const getServiceDetail = (slug) => {
  const base = getServiceBySlug(slug);
  if (!base) return null;

  const override = DETAIL_OVERRIDES[base.slug] || {};
  const template = buildFromTemplate(base);
  const merged = mergeOverride(template, override);
  merged.slug = base.slug;
  merged.title = base.title;
  merged.image = base.image;
  merged.relatedSlugs = base.relatedSlugs;

  if (!merged.testimonials?.length) {
    merged.testimonials = [
      { name: 'Mohammed R.', initials: 'MR', role: base.title, location: 'Dubai', text: \`I used \${base.title.toLowerCase()} by SIMS Health Care — the process was private, quick, and professional. Staff ensured confidentiality throughout.\` },
      { name: 'Omar T.', initials: 'OT', role: base.title, location: 'Dubai', text: 'SIMS Healthcare provided excellent care. The team was professional, punctual, and very thorough. Highly recommended!' },
      { name: 'Zahra M.', initials: 'ZM', role: base.title, location: 'Dubai', text: \`Very satisfied with \${base.title.toLowerCase()} by SIMS Health Care. Staff was polite, punctual, and delivered with care and total privacy ensured.\` },
    ];
  }

  return merged;
};
`;

const tailWithoutOldGet = tail.slice(0, tail.length - 19).join('\n');
fs.writeFileSync(file, [...head, '', ...tailWithoutOldGet.split('\n'), getServiceDetail].join('\n'));
