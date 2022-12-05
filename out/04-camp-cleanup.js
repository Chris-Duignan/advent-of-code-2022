"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_input_1 = require("./utils/fetch-input");
const convertInput = (input) => {
    const pairs = input.split("\n");
    return pairs.map((pair) => {
        return pair.match(/\d+/g);
    });
};
const compareTasks = (pairs) => {
    return pairs.reduce((accumulator, currentIndex) => {
        if (parseInt(currentIndex[0]) <= parseInt(currentIndex[2]) &&
            parseInt(currentIndex[1]) >= parseInt(currentIndex[3])) {
            return accumulator + 1;
        }
        else if (parseInt(currentIndex[0]) >= parseInt(currentIndex[2]) &&
            parseInt(currentIndex[1]) <= parseInt(currentIndex[3])) {
            return accumulator + 1;
        }
        else {
            return accumulator;
        }
    }, 0);
};
const compareTasksPartTwo = (pairs) => {
    return pairs.reduce((accumulator, currentIndex) => {
        if (parseInt(currentIndex[0]) <= parseInt(currentIndex[2]) &&
            parseInt(currentIndex[2]) <= parseInt(currentIndex[1])) {
            return accumulator + 1;
        }
        else if (parseInt(currentIndex[0]) <= parseInt(currentIndex[3]) &&
            parseInt(currentIndex[3]) <= parseInt(currentIndex[1])) {
            return accumulator + 1;
        }
        else if (parseInt(currentIndex[2]) <= parseInt(currentIndex[0]) &&
            parseInt(currentIndex[0]) <= parseInt(currentIndex[3])) {
            return accumulator + 1;
        }
        else if (parseInt(currentIndex[2]) <= parseInt(currentIndex[1]) &&
            parseInt(currentIndex[1]) <= parseInt(currentIndex[3])) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
};
console.log(compareTasksPartTwo(convertInput((0, fetch_input_1.fetchInput)("../../inputs/04-camp-cleanup.txt"))));
