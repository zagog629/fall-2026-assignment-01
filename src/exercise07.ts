export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const fs = require("fs");
  const path = require("path");
  const raw = fs.readFileSync(path.join(__dirname, "..", "data", "gradebook.json"), "utf-8");
  const gradebook: Gradebook = JSON.parse(raw);

  let total = 0;
  let count = 0;

  for (const student in gradebook) {
    if (subject in gradebook[student]) {
      total += gradebook[student][subject];
      count++;
    }
  }

  return count === 0 ? 0 : total / count;
}