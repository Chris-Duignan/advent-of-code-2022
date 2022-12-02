import { readFileSync } from "fs";

export function countScore(gamesArr: number[][]): number {
  return gamesArr.reduce((previousVal, currentVal) => {
    if (currentVal[1] === currentVal[0]) {
      return previousVal + (currentVal[1] + 3) + 1;
    }
    if ((currentVal[1] - currentVal[0]) % 3 === 1) {
      return previousVal + (currentVal[1] + 6) + 1;
    }
    return previousVal + currentVal[1] + 1;
  }, 0);
}

export function countScoreTwo(gamesArr: number[][]): number {
  return gamesArr.reduce((previousVal, currentVal) => {
    if (currentVal[1] === 0) {
      return previousVal + ((currentVal[0]+3 -1) % 3) + 1;
    } else if (currentVal[1] === 1) {
      return previousVal + 3 + currentVal[0] + 1;
    } else {
      return previousVal + 6 + ((currentVal[0] + 1) % 3) + 1;
    }
  }, 0);
}

export function fetchInput(path: string): string {
  return readFileSync(`${__dirname}/${path}`, "utf-8");
}

export function convertInput(input: string): number[][] {
  const inputConv: string[][] = input.split("\n").map((round) => {
    return round.split(" ");
  });

  const output: number[][] = inputConv.map<number[]>((round: string[]) => {
    return round.map<number>((move: string) => {
      switch (move) {
        case "A":
        case "X":
          return 0;
        case "B":
        case "Y":
          return 1;
        default:
          return 2;
      }
    });
  });

  return output;
}

console.log(
  countScoreTwo(
    convertInput(fetchInput("../inputs/02-rock-paper-scissors.txt"))
  )
);
