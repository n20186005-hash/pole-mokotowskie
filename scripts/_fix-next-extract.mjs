// One-off repair (copy-only, no delete): restore missing/corrupt files of next@15.5.14
// in node_modules/next directly from the npm tarball stored in node_modules/.fixnext.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { join, dirname } from 'node:path';

const buf = gunzipSync(readFileSync('node_modules/.fixnext/next-15.5.14.tgz'));
const PREFIX = 'package/';
const missing = [];
let off = 0;

const readC = (a, b) => {
  let s = '';
  for (let i = a; i < b; i++) {
    if (buf[i] === 0) break;
    s += String.fromCharCode(buf[i]);
  }
  return s;
};

while (off + 512 <= buf.length) {
  const h = buf.subarray(off, off + 512);
  if (h[0] === 0) break;
  let name = readC(0, 100);
  const prefix = readC(345, 500);
  if (prefix) name = prefix + '/' + name;
  const size = parseInt(readC(124, 136).trim(), 8) || 0;
  const type = String.fromCharCode(h[156]);
  const dataStart = off + 512;
  if (name.startsWith(PREFIX) && type === '0') {
    const rel = name.slice(PREFIX.length);
    const out = join('node_modules/next', rel);
    if (!existsSync(out) || statSync(out).size !== size) {
      missing.push({ out, size, dataStart });
    }
  }
  off = dataStart + Math.ceil(size / 512) * 512;
}

let written = 0;
for (const f of missing) {
  mkdirSync(dirname(f.out), { recursive: true });
  writeFileSync(f.out, buf.subarray(f.dataStart, f.dataStart + f.size));
  written++;
}
console.log('scanned; missing+repaired files:', written);
