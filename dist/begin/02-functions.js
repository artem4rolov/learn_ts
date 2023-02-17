"use strict";
function sum(a, b) {
    return a + b;
}
// стрелочные
const sum2 = (a, b) => a + b;
// функциональное выражение
const sum3 = function (a, b) {
    return a + b;
};
sum(2, 4);
// void говорит о том, что функция завершится (ничего не вернет, но завершится)
// userId - необязательный аргумент, который предполагает тип строки и undefined (если нет аргумента)
function log(name, userId) {
    console.log("hello", name, "with id", userId || "anonym");
}
log("Artem");
// never говорит о том, что функция никогда не завершится (поскольку там ошибка в теле - функция всегда будет ломаться)
function crash() {
    throw new Error("crash");
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
