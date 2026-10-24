import fs from 'node:fs';
import path from 'node:path';

export interface PdfDownload {
  url: string;
  name: string;
  size: number;
  fileName: string;
  folder: string;
}

interface Options {
  root: string;
  names?: Record<string, string>;
}

const titleCase = (slug: string) =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

export function pdfDownloads(
  modules: Record<string, unknown>,
  { root, names = {} }: Options,
): PdfDownload[] {
  const prefix = `${root}/`;

  return Object.entries(modules)
    .map(([key, url]) => {
      const rel = key.startsWith(prefix) ? key.slice(prefix.length) : path.basename(key);
      const fileName = path.basename(rel);
      const slug = fileName.replace(/\.pdf$/i, '');
      const size = fs.statSync(path.join(process.cwd(), root, rel)).size;

      return {
        url: String(url),
        name: names[slug] ?? titleCase(slug),
        size,
        fileName,
        folder: rel.includes('/') ? rel.split('/')[0] : '',
      };
    })
    .sort((a, b) =>
      `${a.folder}/${a.fileName}`.localeCompare(`${b.folder}/${b.fileName}`, undefined, {
        numeric: true,
      }),
    );
}
