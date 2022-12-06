"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileResults = exports.findStart = void 0;
const fetch_input_1 = require("./utils/fetch-input");
const input = (0, fetch_input_1.fetchInput)("../../inputs/06-tuning-trouble.txt");
function findStart(bufferString, flagLength) {
    for (let i = 0; i < bufferString.length; i++) {
        let set = new Set(bufferString.slice(i, i + flagLength));
        if (set.size === flagLength) {
            return i + flagLength;
        }
    }
    return -1;
}
exports.findStart = findStart;
function compileResults(bufferString) {
    return {
        taskOne: findStart(bufferString, 4),
        taskTwo: findStart(bufferString, 14),
    };
}
exports.compileResults = compileResults;
console.log(compileResults(input));
