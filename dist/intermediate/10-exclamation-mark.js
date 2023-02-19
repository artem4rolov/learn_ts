"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let word = null;
const num = 10;
if (num > 5) {
    word = "abc";
}
// ! дает понять typesript, что значение действительно есть (там не null и не undefined)
console.log(word.toLowerCase());
function printName(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
