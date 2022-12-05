"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRucksacksTwo = exports.reduceRucksacks = exports.convertInputTask2 = exports.convertInput = void 0;
const fetch_input_1 = require("./utils/fetch-input");
function convertInput(input) {
    const rucksacks = input.split("\n");
    const organisedRucksacks = rucksacks.map((rucksack) => {
        return [
            rucksack.slice(0, Math.ceil(rucksack.length / 2)).split(""),
            rucksack.slice(Math.ceil(rucksack.length / 2)).split(""),
        ];
    });
    return organisedRucksacks;
}
exports.convertInput = convertInput;
function convertInputTask2(input) {
    const groups = input.split("\n");
    const returnArr = [];
    for (let i = 0; i < groups.length; i += 3) {
        returnArr.push([groups.slice(i, i + 3)]);
    }
    return returnArr;
}
exports.convertInputTask2 = convertInputTask2;
function reduceRucksacks(rucksackArr) {
    return rucksackArr.reduce((accumulator, currentIndex) => {
        const duplicateCharacters = [];
        currentIndex[0].forEach((item) => {
            if (currentIndex[1].includes(item) &&
                !duplicateCharacters.includes(item)) {
                duplicateCharacters.push(item);
                if (item.toUpperCase() === item) {
                    accumulator += item.charCodeAt(0) - 38;
                }
                else {
                    accumulator += item.charCodeAt(0) - 96;
                }
            }
        });
        return accumulator;
    }, 0);
}
exports.reduceRucksacks = reduceRucksacks;
function reduceRucksacksTwo(rucksackArr) {
    return rucksackArr.reduce((accumulator, currentIndex) => {
        const duplicateCharacters = [];
        for (let i = 0; i < currentIndex[0][0].length; i++) {
            if (currentIndex[0][1].includes(currentIndex[0][0][i]) && currentIndex[0][2].includes(currentIndex[0][0][i]) && !duplicateCharacters.includes(currentIndex[0][0][i])) {
                duplicateCharacters.push(currentIndex[0][0][i]);
                if (currentIndex[0][0][i].toUpperCase() === currentIndex[0][0][i]) {
                    accumulator += currentIndex[0][0][i].charCodeAt(0) - 38;
                }
                else {
                    accumulator += currentIndex[0][0][i].charCodeAt(0) - 96;
                }
            }
        }
        return accumulator;
    }, 0);
}
exports.reduceRucksacksTwo = reduceRucksacksTwo;
console.log(reduceRucksacksTwo(convertInputTask2((0, fetch_input_1.fetchInput)("../../inputs/03-rucksack-reorganisation.txt"))));
