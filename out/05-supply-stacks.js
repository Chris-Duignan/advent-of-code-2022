"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackSort = exports.partOne = exports.convertInput = void 0;
const fetch_input_1 = require("./utils/fetch-input");
function convertInput(input) {
    const output = input.split("\n\n").map((element) => {
        return element.split("\n");
    });
    const returnObj = { stacks: {}, instructions: output.pop() };
    output[0].forEach((element) => {
        for (let i = 1; i < element.length; i += 4) {
            if (element[i] !== " ") {
                if (returnObj.stacks[(i + 3) / 4]) {
                    returnObj.stacks[(i + 3) / 4].push(element[i]);
                }
                else {
                    returnObj.stacks[(i + 3) / 4] = [element[i]];
                }
            }
        }
    });
    return returnObj;
}
exports.convertInput = convertInput;
function partOne(input) {
    input.instructions.forEach(instruction => {
        const instructionCode = instruction.match(/(\d+)/g);
        for (let i = 0; i < parseInt(instructionCode[0]); i++) {
            let transfer = input.stacks[instructionCode[1]].shift();
            input.stacks[instructionCode[2]].unshift(transfer);
        }
    });
    let answer = "";
    for (let i = 1; i <= Object.keys(input.stacks).length; i++) {
        answer += input.stacks[i][0];
    }
    return answer;
}
exports.partOne = partOne;
function stackSort(input) {
    //move 1 from 2 to 1
    // slice = ()
    input.instructions.forEach(instruction => {
        const instructionCode = instruction.match(/(\d+)/g);
        let transfer = input.stacks[instructionCode[1]].splice(0, parseInt(instructionCode[0]));
        input.stacks[instructionCode[2]].unshift(...transfer);
    });
    let answer = "";
    for (let i = 1; i <= Object.keys(input.stacks).length; i++) {
        answer += input.stacks[i][0];
    }
    return answer;
}
exports.stackSort = stackSort;
console.log(stackSort(convertInput((0, fetch_input_1.fetchInput)("../../inputs/05-supply-stacks.txt"))));
