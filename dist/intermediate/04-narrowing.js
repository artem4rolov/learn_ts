"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = void 0;
function example1(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    else if (typeof x === "number") {
        x.toFixed(2);
    }
    else if (x === undefined) {
        console.log("no value");
    }
    else {
        x;
    }
}
function example2(strs) {
    // if (typeof strs === 'object') {}
    // чтобы избежать null - проверяем, что strs вообще существует (null будет false) и если strs - объект, тогда идем дальше
    // if (Array.isArray(strs)) {
    if (strs && typeof strs === "object") {
        strs.join(" ");
    }
    else if (typeof strs === "string") {
        strs.toLocaleLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getDay();
    }
    else {
        x.join();
    }
}
function move(animal) {
    // если есть ключ swim - typescript подскажет какие методы доступны объекту animal
    if ("swim" in animal) {
        return animal.swim();
    }
    // в противном случае typescript покажет другие доступные методы
    return animal.fly();
}
exports.move = move;
