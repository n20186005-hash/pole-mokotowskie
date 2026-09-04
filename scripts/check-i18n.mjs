/**
 * i18n parity check — makes sure every locale has the same keys and the same
 * number of items in every list.
 *
 * Usage: node scripts/check-i18n.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MSG = path.join(__dirname, '..', 'src', 'messages');
const LOCALES = ['zh', 'en', 'pl', 'ru', 'de'];

function flatten(value, prefix = '', out = {}) {
  if (Array.isArray(value)) {
    out[prefix] = `array(${value.length})`;
    return out;
  }
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  out[prefix] = typeof value;
  return out;
}

const tables = {};
for (const locale of LOCALES) {
  const file = path.join(MSG, `${locale}.json`);
  try {
    tables[locale] = flatten(JSON.parse(fs.readFileSync(file, 'utf8')));
  } catch (error) {
    console.error(`✗ ${locale}.json is not valid JSON: ${error.message}`);
    process.exit(1);
  }
}

const reference = tables.en;
const refKeys = Object.keys(reference);
const refSet = new Set(refKeys);
let problems = 0;

for (const locale of LOCALES) {
  const table = tables[locale];
  const missing = refKeys.filter((key) => !(key in table));
  const extra = Object.keys(table).filter((key) => !refSet.has(key));
  const lengthMismatch = refKeys.filter(
    (key) => reference[key].startsWith('array(') && table[key] !== reference[key]
  );

  if (missing.length) {
    problems += missing.length;
    console.log(`✗ ${locale}: missing ${missing.length} key(s): ${missing.slice(0, 8).join(', ')}`);
  }
  if (extra.length) {
    problems += extra.length;
    console.log(`! ${locale}: ${extra.length} extra key(s): ${extra.slice(0, 8).join(', ')}`);
  }
  if (lengthMismatch.length) {
    problems += lengthMismatch.length;
    console.log(
      `✗ ${locale}: list length differs: ${lengthMismatch
        .map((k) => `${k} (en ${reference[k]} vs ${locale} ${table[k]})`)
        .join(', ')}`
    );
  }
}

console.log(
  problems === 0
    ? `✓ i18n parity OK — ${refKeys.length} keys across ${LOCALES.length} locales`
    : `✗ ${problems} problem(s) found`
);
process.exit(problems === 0 ? 0 : 1);
