// One-off repair: rename leftover `.DELETE.<hash>` marker files back to their original
// names inside node_modules/next (the markers still contain the full original content).
import { readdirSync, renameSync, existsSync } from 'node:fs';
import { join } from 'node:path';

let renamed = 0;
let skipped = 0;

function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const f = join(d, e.name);
    if (e.isDirectory()) {
      walk(f);
      continue;
    }
    if (!e.name.includes('.DELETE.')) continue;
    const idx = e.name.lastIndexOf('.DELETE.');
    const orig = join(d, e.name.slice(0, idx));
    if (existsSync(orig)) {
      // real file already present; leave marker (harmless inside node_modules)
      skipped++;
      continue;
    }
    renameSync(f, orig);
    renamed++;
  }
}

walk('node_modules/next');
console.log('restored files:', renamed, '| skipped (real already present):', skipped);
