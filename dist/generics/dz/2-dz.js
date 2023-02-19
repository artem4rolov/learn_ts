"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
// const obj1 = { a: 2, b: "d" };
// values(obj1);
const obj1 = {
    a: 123,
    b: "srt",
};
const obj2 = {
    c: true,
    b: ["1, 2, 3"],
};
// console.log(keys(obj1));
console.log(values(obj2));
