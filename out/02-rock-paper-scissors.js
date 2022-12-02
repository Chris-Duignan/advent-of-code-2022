"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertInput = exports.fetchInput = exports.countScoreTwo = exports.countScore = void 0;
const fs_1 = require("fs");
function countScore(gamesArr) {
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
exports.countScore = countScore;
function countScoreTwo(gamesArr) {
    return gamesArr.reduce((previousVal, currentVal) => {
        if (currentVal[1] === 0) {
            return previousVal + ((currentVal[0] + 3 - 1) % 3) + 1;
        }
        else if (currentVal[1] === 1) {
            return previousVal + 3 + currentVal[0] + 1;
        }
        else {
            return previousVal + 6 + ((currentVal[0] + 1) % 3) + 1;
        }
    }, 0);
}
exports.countScoreTwo = countScoreTwo;
function fetchInput(path) {
    return (0, fs_1.readFileSync)(`${__dirname}/${path}`, "utf-8");
}
exports.fetchInput = fetchInput;
function convertInput(input) {
    const inputConv = input.split("\n").map((round) => {
        return round.split(" ");
    });
    const output = inputConv.map((round) => {
        return round.map((move) => {
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
exports.convertInput = convertInput;
console.log(countScoreTwo(convertInput(fetchInput("../inputs/02-rock-paper-scissors.txt"))));
