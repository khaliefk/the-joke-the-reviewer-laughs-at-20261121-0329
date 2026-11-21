// The joke the reviewer laughs at — a one-line joke about working beside
// an AI coding agent: the agent that reviews its own work.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 code points).
// No network, no dependencies. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My AI agent reviewed its own pull request, approved it in four seconds, and left one comment: 'LGTM. Great work, me.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
