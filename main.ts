// Museum of the Year 3000 — a single museum label for a plastic fork.
// Node 22, stdlib only. Writes one original single-line label to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "Plastic Fork, c. 2024. Curators believe this four-pronged trident was a ceremonial sceptre, waved over feasts to pierce offerings and present them to the gods before eating.";

// Gate (bounty rules): 1-200 characters, not blank, exactly one line.
// Checked in order: length first, then blank, then single-line.
if (LABEL.trim().length === 0) {
  throw new Error("Label must not be blank");
}
if (LABEL.length < 1 || LABEL.length > 200) {
  throw new Error(`Label must be 1-200 characters, got ${LABEL.length}`);
}
if (/[\r\n]/.test(LABEL)) {
  throw new Error("Label must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
console.log(`Wrote ${LABEL.length} characters to /output/entry.txt`);
