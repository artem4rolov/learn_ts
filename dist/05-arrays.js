"use strict";
const numbers = [1, 2, 3, 4];
const strs = [];
// то же самое объявление типа массива со строками
const strs2 = [];
strs.push("strs");
const cars = [];
cars.push({ brand: "Audi", wheels: 3, type: "" });
const arrOfArr = [];
arrOfArr.push(["", ""]);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
