import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lines = fs.readFileSync(path.join(__dirname, '../src/data/serviceDetailContent.js'), 'utf8').split('\n');
const manual = lines
  .slice(2, 438)
  .join('\n')
  .replace('const DETAIL_OVERRIDES =', 'export const MANUAL_OVERRIDES =');
fs.writeFileSync(
  path.join(__dirname, '../src/data/serviceManualOverrides.js'),
  `// Hand-curated overrides for key hub services\n${manual}\n`
);
