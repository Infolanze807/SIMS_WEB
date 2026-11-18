import fs from 'node:fs';

const path = new URL('../src/Component/Header.jsx', import.meta.url);
let s = fs.readFileSync(path, 'utf8');

s = s.replace(/import \{ motion, AnimatePresence \} from 'framer-motion';\r?\n/, '');
s = s.replace(/\r?\n?[ \t]*<\/?AnimatePresence>/g, '');
s = s.replace(/<\/motion\.div>/g, '</div>');
s = s.replace(/<motion\.div([\s\S]*?)>/g, (_, attrs) => {
  const classMatch = attrs.match(/className="([^"]*)"/);
  return classMatch ? `<div className="${classMatch[1]}">` : '<div>';
});

// Logo dimensions
s = s.replace(
  /src=\{simsLogo\}\s*\n\s*alt="SIMS Healthcare"\s*\n\s*className="h-12 w-auto object-contain lg:h-16"/,
  `src={simsLogo}
            alt="SIMS Healthcare"
            width="200"
            height="64"
            decoding="async"
            className="h-12 w-auto object-contain lg:h-16"`
);

fs.writeFileSync(path, s);
console.log('Header motion stripped');
