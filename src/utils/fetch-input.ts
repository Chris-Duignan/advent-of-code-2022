import { readFileSync } from "fs";

export function fetchInput(path: string): string {
    return readFileSync(`${__dirname}/${path}`, "utf-8");
  }