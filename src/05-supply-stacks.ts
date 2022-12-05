import { fetchInput } from "./utils/fetch-input";

interface supplyStacks {
  stacks?: { [key: string]: string[] };
  instructions?: string[];
}

export function convertInput(input: string) {
  const output = input.split("\n\n").map((element) => {
    return element.split("\n");
  });
  const returnObj: supplyStacks = { stacks: {}, instructions: output.pop() };
  output[0].forEach((element) => {
    for (let i = 1; i < element.length; i += 4) {
      if (element[i] !== " ") {
        if (returnObj.stacks![(i + 3) / 4]) {
          returnObj.stacks![(i + 3) / 4].push(element[i]);
        } else {
          returnObj.stacks![(i + 3) / 4] = [element[i]];
        }
      }
    }
  });

  return returnObj;
}

export function partOne(input: supplyStacks) {

    input.instructions!.forEach(instruction => {
        const instructionCode = instruction.match(/(\d+)/g)
        for (let i = 0; i < parseInt(instructionCode![0]); i++) {
            let transfer = input.stacks![instructionCode![1]].shift()
            input.stacks![instructionCode![2]].unshift(transfer!)
        }
    })

    let answer:string = "";

    for (let i = 1; i <= Object.keys(input.stacks!).length; i++) {
        answer += input.stacks![i][0];
    }

    return answer;
}

export function stackSort(input: supplyStacks) {
    //move 1 from 2 to 1
    // slice = ()

    input.instructions!.forEach(instruction => {
        const instructionCode = instruction.match(/(\d+)/g)
        let transfer = input.stacks![instructionCode![1]].splice(0, parseInt(instructionCode![0]));
        input.stacks![instructionCode![2]].unshift(...transfer)
    })

    let answer:string = "";

    for (let i = 1; i <= Object.keys(input.stacks!).length; i++) {
        answer += input.stacks![i][0];
    }

    return answer;
}

console.log(stackSort(convertInput(fetchInput("../../inputs/05-supply-stacks.txt"))));
