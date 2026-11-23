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

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
chmodSync("/output", 0o755);
chmodSync("/output/entry.txt", 0o644);
