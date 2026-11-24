import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office: I'm a fern, unwatered since March. I'll reply the moment someone waters me. So, realistically: never.";

if (!line.trim() || line.length > 120) {
  console.error(`Invalid entry: must be 1-120 chars, got ${line.length}.`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
