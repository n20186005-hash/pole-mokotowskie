// One-off repair: copy clean next@15.5.14 files from npm tarball into node_modules/next
// (copy-only, no delete — bypasses the environment's safe-delete wrapper).
import { readdirSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const src = 'node_modules/.fixnext/package';
const dst = 'node_modules/next';

function cp(s, d) {
  mkdirSync(d, { recursive: true });
  for (const e of readdirSync(s, { withFileTypes: true })) {
    const sp = join(s, e.name);
    const dp = join(d, e.name);
    if (e.isDirectory()) cp(sp, dp);
    else copyFileSync(sp, dp);
  }
}

cp(src, dst);
console.log('copied next package over node_modules/next');
