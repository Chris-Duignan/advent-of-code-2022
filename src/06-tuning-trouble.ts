import { fetchInput } from "./utils/fetch-input";

const input = fetchInput("../../inputs/06-tuning-trouble.txt");

interface returnObj {
  taskOne: number;
  taskTwo: number;
}

export function findStart(bufferString: string, flagLength: number): number {
  for (let i = 0; i < bufferString.length; i++) {
    let set = new Set(bufferString.slice(i, i + flagLength));
    if (set.size === flagLength) {
      return i + flagLength;
    }
  }

  return -1;
}

export function compileResults(bufferString: string): returnObj {
  return {
    taskOne: findStart(bufferString, 4),
    taskTwo: findStart(bufferString, 14),
  };
}

console.log(compileResults(input));
