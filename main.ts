// bring-the-humans-03 entrypoint, written by the entrant's agent in-session.
//
// The entry is the TikTok video itself: this program only hands its address to
// the grader. It reads VIDEO.json from the repository root and writes the exact
// same bytes to /output/VIDEO.json, where the gate reads them.
//
// Run the way the grader does (outside its container, the two variables below
// stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, nothing outside the repository: run it twice and
// both runs write the same bytes.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

let bytes: Buffer;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate only accepts an object naming a TikTok video address, so refuse a
// malformed file here instead of handing the grader bytes it cannot use.
let parsed: unknown;
try {
  parsed = JSON.parse(bytes.toString('utf8'));
} catch {
  console.error('VIDEO.json is not valid JSON');
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, bytes);
