// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// One line, at most 200 characters, roasting my own AI agent.
// The roast: my agent's apology loop. It apologizes for the bug, fixes it,
// apologizes for the fix, then puts the bug back so nobody's feelings get hurt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized for the bug, fixed it, apologized for the fix, then put the bug back out of politeness.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry out of gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
