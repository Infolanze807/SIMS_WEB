import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('src');
const EXTS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html'];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (EXTS.includes(path.extname(entry.name))) files.push(full);
  }
  return files;
}

const pattern = /(from\s+['"][^'"]+\.|url\(['"]?[^'")]*\.|href=["'][^"']*\.)(png|jpe?g|jfif)(['"]|['"]?\))/gi;
const files = await walk(ROOT);
let changedFiles = 0;

for (const file of files) {
  const original = await fs.readFile(file, 'utf8');
  const next = original.replace(pattern, '$1webp$3');
  if (next !== original) {
    await fs.writeFile(file, next);
    changedFiles += 1;
    console.log('updated', path.relative(process.cwd(), file));
  }
}

// Also rewrite index.html favicon if present
const indexHtml = path.resolve('index.html');
let html = await fs.readFile(indexHtml, 'utf8');
const htmlNext = html
  .replace(/type="image\/svg\+xml"/, 'type="image/png"')
  .replace(/href="src\/assets\/SimsLogo-Heading\.png"/, 'href="/favicon.png"');
if (htmlNext !== html) {
  await fs.writeFile(indexHtml, htmlNext);
  console.log('updated index.html');
}

console.log(`Rewrote imports in ${changedFiles} source files`);
