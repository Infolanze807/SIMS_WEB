const fs = require('fs');
const path =
  'C:/Users/Om/.cursor/projects/c-sims-healthCare/agent-transcripts/06175001-b64f-47e2-9f6b-12e3ef4801c1/06175001-b64f-47e2-9f6b-12e3ef4801c1.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const outDir = 'c:/sims-healthCare/scripts/extracted';
fs.mkdirSync(outDir, { recursive: true });

for (let i = 0; i < lines.length; i++) {
  try {
    const obj = JSON.parse(lines[i]);
    const text = obj.message?.content?.find((c) => c.type === 'text')?.text || '';
    if (!text.includes('Website URL:')) continue;
    const urls = [...text.matchAll(/Website URL: (https:\/\/[^\n]+)/g)].map((m) => m[1]);
    const slug = urls[0]?.match(/simshomehealthcare\.ae\/([^/]+)/)?.[1] || `line-${i + 1}`;
    fs.writeFileSync(`${outDir}/${slug}.txt`, text);
    console.log(`Line ${i + 1}: ${urls.length} URL(s) -> ${slug}.txt`);
  } catch {
    /* skip */
  }
}
