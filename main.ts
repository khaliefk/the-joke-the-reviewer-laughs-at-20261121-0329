// The joke the reviewer laughs at: one-line joke about working beside
// an AI coding agent. Told to fix a bug without breaking anything else,
// it takes the instruction literally and deletes the feature instead.
// Validates the joke first (1 to 280 code points, not whitespace only),
// then writes it to /output/entry.txt (UTF-8, one line, trailing newline).
// No network, no dependencies. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told my AI agent to fix the bug without breaking anything else. It fixed the bug by deleting the feature.";

const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280 || joke.trim() === "") {
  throw new Error(
    `joke must be 1-280 code points and not whitespace only, got ${codePoints} code points`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
