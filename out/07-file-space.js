"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _File_fileName, _File_fileSize, _Directory_name, _Directory_children;
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(name = "", fileSize = 0) {
        _File_fileName.set(this, "");
        _File_fileSize.set(this, 0);
        this.parent = null;
        __classPrivateFieldSet(this, _File_fileName, name, "f");
        __classPrivateFieldSet(this, _File_fileSize, fileSize, "f");
    }
    get fileSize() {
        return __classPrivateFieldGet(this, _File_fileSize, "f");
    }
    get fileName() {
        return __classPrivateFieldGet(this, _File_fileName, "f");
    }
}
_File_fileName = new WeakMap(), _File_fileSize = new WeakMap();
class Directory {
    constructor(name = "") {
        _Directory_name.set(this, "");
        _Directory_children.set(this, new Map());
        this.parent = null;
        __classPrivateFieldSet(this, _Directory_name, name, "f");
    }
    get content() {
        return Array.from(__classPrivateFieldGet(this, _Directory_children, "f").values());
    }
    insertItem(item) {
        __classPrivateFieldGet(this, _Directory_children, "f").set(item.name, item);
        item.parent = this;
    }
}
_Directory_name = new WeakMap(), _Directory_children = new WeakMap();
const dir = new Directory("/");
const file = new File("my file");
dir.insertItem(file);
console.log(dir);
