"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
// numbers
exports.x = 10.5;
// let y = 1234n;
let z = NaN;
// string
let str1 = "Hello world";
str1 = "";
let symbol = Symbol("as");
// let d = str1 + symbol;
// boolean
let o = true;
o = false;
// o = 1;
// nothing
// в случае ниже нужно явно указывать тип
let u = undefined;
let g = null;
// literal
// константа - нет типов, неизменяемо
const num = 108;
const str2 = "str";
// universal
// вернуться на время в js можно  с помощью типа any
let mm = 1;
mm = "str";
mm = [];
// mm.map(() => {})
// mm.toUpperCase()
// unknown
// когда неизвестно, что конкретно мы получаем в переменную
let xx = 2;
// xx.toUpperCase();
