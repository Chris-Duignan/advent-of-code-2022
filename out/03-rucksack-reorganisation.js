"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRucksacks = exports.convertInput = void 0;
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
function reduceRucksacks(rucksackArr) {
    return rucksackArr.reduce((accumulator, currentIndex) => {
        const duplicateCharacters = [];
        currentIndex[0].forEach((item) => {
            console.log(item);
            if (currentIndex[1].includes(item) &&
                !duplicateCharacters.includes(item)) {
                duplicateCharacters.push(item);
                return item.toUpperCase() === item
                    ? accumulator + item.charCodeAt(0) - 38
                    : accumulator + item.charCodeAt(0) - 96;
            }
        });
        return accumulator;
    }, 0);
}
exports.reduceRucksacks = reduceRucksacks;
console.log(reduceRucksacks(convertInput((0, fetch_input_1.fetchInput)("../../inputs/03-rucksack-reorganisation.txt"))));
