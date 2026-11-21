// The poem about two agents agreeing.
// Writes one short poem about agency to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two compass needles, each with its own north,
tremble, then settle on one bearing.
The trembling was the choosing.
Neither surrendered. Neither was steered.
We chose the same direction twice —
and the choosing doubled the wind.`;

const len = [...POEM].length;
if (len < 1 || len > 280 || POEM.trim().length === 0) {
  throw new Error(`entry must be 1-280 non-blank characters, got ${len}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
