import { fetchInput } from "./utils/fetch-input";

const convertInput = (input: string) => {
  const pairs = input.split("\n");
  return pairs.map((pair) => {
    return pair.match(/\d+/g);
  });
};

const compareTasks = (pairs: any) => {
  return pairs.reduce((accumulator: number, currentIndex: string[]) => {
    if (
      parseInt(currentIndex[0]) <= parseInt(currentIndex[2]) &&
      parseInt(currentIndex[1]) >= parseInt(currentIndex[3])
    ) {
      return accumulator + 1;
    } else if (
      parseInt(currentIndex[0]) >= parseInt(currentIndex[2]) &&
      parseInt(currentIndex[1]) <= parseInt(currentIndex[3])
    ) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
};

const compareTasksPartTwo = (pairs: any) => {
  return pairs.reduce((accumulator: number, currentIndex: string[]) => {
    if (
      parseInt(currentIndex[0]) <= parseInt(currentIndex[2]) &&
      parseInt(currentIndex[2]) <= parseInt(currentIndex[1])
    ) {
      return accumulator + 1;
    } 
    else if (
      parseInt(currentIndex[0]) <= parseInt(currentIndex[3]) &&
      parseInt(currentIndex[3]) <= parseInt(currentIndex[1])
    ) {
      return accumulator + 1;
    } 
    else if (
      parseInt(currentIndex[2]) <= parseInt(currentIndex[0]) &&
      parseInt(currentIndex[0]) <= parseInt(currentIndex[3])
    ) {
      return accumulator + 1;
    } 
    else if (
      parseInt(currentIndex[2]) <= parseInt(currentIndex[1]) &&
      parseInt(currentIndex[1]) <= parseInt(currentIndex[3])
    ) {
      return accumulator + 1;
    } 
    return accumulator;
  }, 0);
};

console.log(
  compareTasksPartTwo(convertInput(fetchInput("../../inputs/04-camp-cleanup.txt")))
);
