"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileResults = exports.findStartMessage = exports.findStart = void 0;
const fetch_input_1 = require("./utils/fetch-input");
const input = (0, fetch_input_1.fetchInput)("../../inputs/06-tuning-trouble.txt");
function findStart(bufferString) {
    for (let i = 0; i < bufferString.length; i++) {
        let set = new Set(bufferString.slice(i, i + 4));
        if (set.size === 4) {
            return i + 4;
        }
    }
    return -1;
}
exports.findStart = findStart;
function findStartMessage(bufferString) {
    for (let i = 0; i < bufferString.length; i++) {
        let set = new Set(bufferString.slice(i, i + 14));
        if (set.size === 14) {
            return i + 14;
        }
    }
    return -1;
}
exports.findStartMessage = findStartMessage;
function compileResults(bufferString) {
    return {
        taskOne: findStart(bufferString),
        taskTwo: findStartMessage(bufferString)
    };
}
exports.compileResults = compileResults;
console.log(compileResults(input));
