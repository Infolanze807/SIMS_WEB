import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const assetsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/assets');

const jobs = [
  { input: 'Home01.png', output: 'Home01.webp', width: 960, quality: 72 },
  { input: 'DoctorOnCall04.png', output: 'DoctorOnCall04.webp', width: 800, quality: 72 },
  { input: 'WhoWeServe.png', output: 'WhoWeServe.webp', width: 900, quality: 72 },
  { input: 'Staff07.png', output: 'Staff07.webp', width: 720, quality: 72 },
  { input: 'Staff02.jpeg', output: 'Staff02.webp', width: 720, quality: 72 },
  { input: 'Staff03.jpeg', output: 'Staff03.webp', width: 720, quality: 72 },
  { input: 'Staff04.jpeg', output: 'Staff04.webp', width: 720, quality: 72 },
  { input: 'Staff05.jpeg', output: 'Staff05.webp', width: 720, quality: 72 },
  { input: 'DHALOGO.png', output: 'DHALOGO.webp', width: 192, quality: 80 },
  { input: 'Oncall.png', output: 'Oncall.webp', width: 1200, quality: 72 },
  { input: 'StepStep.png', output: 'StepStep.webp', width: 1200, quality: 72 },
  { input: 'IVTherapies001.jpeg', output: 'IVTherapies001.webp', width: 800, quality: 72 },
  { input: 'PhysiotherapyAtHome003.jpeg', output: 'PhysiotherapyAtHome003.webp', width: 800, quality: 72 },
  { input: 'LabTestAtHome02.jpeg', output: 'LabTestAtHome02.webp', width: 800, quality: 72 },
  { input: 'NursingAtHome01.jpeg', output: 'NursingAtHome01.webp', width: 800, quality: 72 },
  { input: 'HealthCheckupAtHome03.jpeg', output: 'HealthCheckupAtHome03.webp', width: 800, quality: 72 },
  { input: 'OxygenTherapyAtHome03.jpeg', output: 'OxygenTherapyAtHome03.webp', width: 800, quality: 72 },
  { input: 'CovidPCRTestAtHome03.jpeg', output: 'CovidPCRTestAtHome03.webp', width: 800, quality: 72 },
  { input: 'FluVaccinationAtHomeInDubai03.jpeg', output: 'FluVaccinationAtHomeInDubai03.webp', width: 800, quality: 72 },
  { input: 'InjectionServiceAtHome03.jpeg', output: 'InjectionServiceAtHome03.webp', width: 800, quality: 72 },
  { input: 'About01.jpg', output: 'About01.webp', width: 900, quality: 72 },
  { input: 'whychooseus01.jpg', output: 'whychooseus01.webp', width: 800, quality: 72 },
  { input: 'About0002.jpg', output: 'About0002.webp', width: 800, quality: 72 },
];

await mkdir(assetsDir, { recursive: true });

for (const job of jobs) {
  const inputPath = path.join(assetsDir, job.input);
  const outputPath = path.join(assetsDir, job.output);
  await sharp(inputPath)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(outputPath);
  console.log(`wrote ${job.output}`);
}
