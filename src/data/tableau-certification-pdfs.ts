import fs from 'node:fs';
import path from 'node:path';

export interface PdfDownload {
  url: string;
  name: string;
  size: number;
  fileName: string;
}

const ASSET_DIR = 'src/assets/blog/tableau-certifications';

const urls = import.meta.glob('../assets/blog/tableau-certifications/**/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const SPECIAL_NAMES: Record<string, string> = {
  'lod-decoder-card': 'LOD Decoder Card',
  'skillcertpro-cheat-sheet': 'SkillCertPro Cheat Sheet',
};

const titleCase = (slug: string) =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const nameFor = (slug: string) => SPECIAL_NAMES[slug] ?? titleCase(slug);

const sortKey = (rel: string) => {
  const [folder, file] = rel.split('/');
  return [['paper', 'answer-key', 'helper'].indexOf(folder), Number(/(\d+)/.exec(file)?.[1] ?? 0)];
};

const all = Object.entries(urls)
  .map(([key, url]) => {
    const rel = key.slice(key.indexOf('tableau-certifications/') + 'tableau-certifications/'.length);
    const fileName = path.basename(rel);
    const size = fs.statSync(path.join(process.cwd(), ASSET_DIR, rel)).size;

    return { url, name: nameFor(fileName.replace(/\.pdf$/, '')), size, fileName, rel };
  })
  .sort((a, b) => {
    const [folderA, numberA] = sortKey(a.rel);
    const [folderB, numberB] = sortKey(b.rel);
    return folderA - folderB || numberA - numberB;
  });

const byFolder = (folder: string): PdfDownload[] =>
  all
    .filter(({ rel }) => rel.startsWith(`${folder}/`))
    .map(({ rel, ...item }) => item);

export const tableauPapers = byFolder('paper');
export const tableauAnswers = byFolder('answer-key');
export const tableauHelpers = byFolder('helper');
