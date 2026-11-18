import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS = path.resolve('src/assets');
const EXTS = new Set(['.png', '.jpg', '.jpeg', '.jfif', '.webp']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = (await walk(ASSETS)).filter((file) => EXTS.has(path.extname(file).toLowerCase()));
let converted = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.webp') continue;

  const out = file.replace(/\.(png|jpe?g|jfif)$/i, '.webp');
  const inputStat = await fs.stat(file);

  try {
    const maxWidth = inputStat.size > 400_000 ? 1600 : 1400;
    const quality = inputStat.size > 800_000 ? 72 : 78;

    await sharp(file)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(out);

    const outStat = await fs.stat(out);
    const before = Math.round(inputStat.size / 1024);
    const after = Math.round(outStat.size / 1024);
    console.log(`${path.basename(file)}: ${before}KB -> ${after}KB`);
    converted += 1;
  } catch (error) {
    console.error(`Failed ${file}:`, error.message);
  }
}

console.log(`Converted ${converted} images`);
