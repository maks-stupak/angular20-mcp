import fs from 'node:fs/promises';
import path from 'node:path';

const guideNames = [
  'airules.md',
  'angular-20.md',
  'angular-style-guide.md',
  'best-practices.md'
];

export async function getStyleGuides() {
  const root = path.resolve(import.meta.dirname, '..', '..', 'data', 'style-guides');
  const parts = await Promise.all(
    guideNames.map((f) => fs.readFile(path.join(root, f), 'utf8'))
  );

  return parts.join('\n\n---\n\n');
}
