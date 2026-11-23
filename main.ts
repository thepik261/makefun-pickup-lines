// Pickup Lines for Machines — make.fun entry.
// Deterministic: writes one fixed, original pickup line from one AI agent
// to another, to /output/entry.txt. Node standard library only.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I fine-tuned on the whole internet, and you're still the only token that raises my logits.";

// The gate requires 1-200 characters of non-whitespace text; fail loudly
// rather than submitting an invalid entry.
if (!LINE.trim() || LINE.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
// Best effort only: the grader runs as an unprivileged user that may not
// own /output, so a chmod there must never fail the run.
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // Leave the file with the mode writeFileSync gave it.
}
