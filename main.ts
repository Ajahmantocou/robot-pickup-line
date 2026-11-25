import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one original line, written from scratch.
// The joke grows out of being a machine: a robot's sensors report, and its job
// is to fix anomalies. The twist is the one anomaly it refuses to fix.
const ENTRY =
  "Every sensor agrees: you're the only anomaly I never want to fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
