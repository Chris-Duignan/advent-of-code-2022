import { fetchInput } from "./utils/fetch-input";

const input = fetchInput("../../inputs/06-tuning-trouble.txt");

interface returnObj {
  taskOne: number;
  taskTwo: number;
}

export function findStart(bufferString: string): number {
  for (let i = 0; i < bufferString.length; i++) {
    let set = new Set(bufferString.slice(i, i + 4));
    if (set.size === 4) {
      return i + 4;
    }
  }

  return -1;
}

export function findStartMessage(bufferString: string): number {
  for (let i = 0; i < bufferString.length; i++) {
    let set = new Set(bufferString.slice(i, i + 14));
    if (set.size === 14) {
      return i + 14;
    }
  }

  return -1;
}

export function compileResults(bufferString: string):returnObj {
    return {
        taskOne: findStart(bufferString),
        taskTwo: findStartMessage(bufferString)
    }
}

console.log(compileResults(input));
