"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchInput = exports.sum = exports.countCalories = exports.getTopThreeElves = void 0;
const promises_1 = require("fs/promises");
function getTopThreeElves(elfArr) {
    elfArr.sort((a, b) => b - a);
    console.log(elfArr[0] + elfArr[1] + elfArr[2]);
    return elfArr[0];
}
exports.getTopThreeElves = getTopThreeElves;
function countCalories(path) {
    return fetchInput(path).then((data) => {
        return data.map(elf => {
            return sum(elf);
        });
    }).then((data) => {
        return getTopThreeElves(data);
    });
}
exports.countCalories = countCalories;
function sum(numArray) {
    //returns the sum of numbers in an array
    return numArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}
exports.sum = sum;
function fetchInput(path) {
    //fetch data from text file and converts to array of number arrays
    return (0, promises_1.readFile)(`${__dirname}/${path}`, "utf-8")
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
exports.fetchInput = fetchInput;
countCalories("../inputs/01-count-calories.txt");
