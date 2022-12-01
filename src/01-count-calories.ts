import { readFile } from "fs/promises";

export function getTopThreeElves(elfArr: number[]): number {
  elfArr.sort((a,b) => b-a)
  console.log(elfArr[0] + elfArr[1] + elfArr[2]);
  return elfArr[0]
}

export function countCalories(path: string): Promise<number> {
  return fetchInput(path).then((data) => {
    return data.map(elf => {
      return sum(elf);
    })
  }).then((data) => {
    return getTopThreeElves(data);
  })
}

export function sum(numArray: number[]): number {
  //returns the sum of numbers in an array
  return numArray.reduce(
    (accumulator: number, currentValue: number): number =>
      accumulator + currentValue
  );
}

export function fetchInput(path: string): Promise<number[][]> {
  //fetch data from text file and converts to array of number arrays
  return readFile(`${__dirname}/${path}`, "utf-8")
    .then((input) => {
      return input.split("\n\n");
    })
    .then((input) => {
      return input.map((elf) => {
        return elf.split("\n");
      });
    })
    .then((input) => {
      const elves = input.map((element) => {
        const elf = [...element];
        return elf.map((meal) => {
          return parseInt(meal);
        });
      });
      return elves;
    });
}

countCalories("../inputs/01-count-calories.txt")