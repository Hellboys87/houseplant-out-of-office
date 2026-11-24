import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office: I'm a fern, unwatered since March. I'll reply the moment someone remembers I exist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
