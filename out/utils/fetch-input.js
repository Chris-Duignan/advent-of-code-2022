"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchInput = void 0;
const fs_1 = require("fs");
function fetchInput(path) {
    return (0, fs_1.readFileSync)(`${__dirname}/${path}`, "utf-8");
}
exports.fetchInput = fetchInput;
