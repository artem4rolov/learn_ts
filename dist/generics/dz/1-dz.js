"use strict";
// типизируем функцию append
// function append<T>(el: T, list: T[]): T;
// исходная функция append
function append(el, list) {
    return list.concat(el);
}
append("c", ["a", "b"]);
append(3, [1, 2, 2]);
append("", []);
