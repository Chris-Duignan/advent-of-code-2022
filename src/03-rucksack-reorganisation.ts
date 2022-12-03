import { fetchInput } from "./utils/fetch-input";

export function convertInput(input: string): string[][][] {
  const rucksacks = input.split("\n");
  const organisedRucksacks = rucksacks.map((rucksack) => {
    return [
      rucksack.slice(0, Math.ceil(rucksack.length / 2)).split(""),
      rucksack.slice(Math.ceil(rucksack.length / 2)).split(""),
    ];
  });
  return organisedRucksacks;
}

export function convertInputTask2(input:string): string[][][] {
    const groups = input.split("\n")

    const returnArr:string[][][] = [];
    for (let i = 0; i < groups.length; i+=3) {
        returnArr.push([groups.slice(i, i+3)])
    }

    return returnArr;
}

export function reduceRucksacks(rucksackArr: string[][][]): number {
  return rucksackArr.reduce<number>((accumulator, currentIndex) => {
    const duplicateCharacters: string[] = [];

    currentIndex[0].forEach((item: string) => {
      if (
        currentIndex[1].includes(item) &&
        !duplicateCharacters.includes(item)
      ) {
        duplicateCharacters.push(item);
        if (item.toUpperCase() === item) {
          accumulator += item.charCodeAt(0) - 38;
        } else {
          accumulator += item.charCodeAt(0) - 96;
        }
      }
    });

    return accumulator;
  }, 0);
}

export function reduceRucksacksTwo(rucksackArr: string[][][]): number {
    return rucksackArr.reduce<number>((accumulator, currentIndex) => {
      const duplicateCharacters: string[] = [];
      for (let i = 0; i  < currentIndex[0][0].length; i++) {
        if (currentIndex[0][1].includes(currentIndex[0][0][i]) && currentIndex[0][2].includes(currentIndex[0][0][i]) && !duplicateCharacters.includes(currentIndex[0][0][i])) {
            duplicateCharacters.push(currentIndex[0][0][i])
            if (currentIndex[0][0][i].toUpperCase() === currentIndex[0][0][i]) {
                accumulator += currentIndex[0][0][i].charCodeAt(0) - 38;
              } else {
                accumulator += currentIndex[0][0][i].charCodeAt(0) - 96;
              }
        }
      }
      return accumulator;
    }, 0);
  }

console.log(
  reduceRucksacksTwo(
    convertInputTask2(fetchInput("../../inputs/03-rucksack-reorganisation.txt"))
  )
);
