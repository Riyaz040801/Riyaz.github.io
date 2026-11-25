// Astro keeps the original (multi-MB) source images in dist/_astro even when no
// page uses them. This deletes any file in dist/_astro that nothing references,
// so the deployed site only contains the optimized versions.
import { readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const assetsDir = join(dist, '_astro');

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const textFiles = walk(dist).filter((p) => ['.html', '.js', '.css', '.json', '.xml'].includes(extname(p)));
const haystack = textFiles.map((p) => readFileSync(p, 'utf8')).join('\n');

let removed = 0;
let bytes = 0;
for (const file of readdirSync(assetsDir)) {
  if (!haystack.includes(file)) {
    const p = join(assetsDir, file);
    bytes += statSync(p).size;
    rmSync(p);
    removed++;
  }
}
console.log(`prune-dist: removed ${removed} unused files (${(bytes / 1e6).toFixed(1)} MB)`);
