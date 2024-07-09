import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import type { Edition } from "~/types/edition";
import type { EditionsInfo } from "~/types/editions-info";
import type { Info } from "~/types/info";

export function getInfo() {
  const content = fs.readFileSync(path.join(process.cwd(), "src/data/info.json"), "utf-8");
  const data = JSON.parse(content) as Info;
  return data;
}

export function getEditionsInfo() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "src/data/editions/index.json"),
    "utf-8",
  );
  const data = JSON.parse(content) as EditionsInfo;
  return data;
}

export function getEdition(name: string) {
  const content = fs.readFileSync(
    path.join(process.cwd(), `src/data/editions/${name}.json`),
    "utf-8",
  );
  const data = JSON.parse(content) as Edition;
  return data;
}
