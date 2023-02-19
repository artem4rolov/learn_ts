"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplePairCreator = void 0;
// замыкания
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
// сначала выполняем первую функцию, возвращаем в перменную toTupleWith1 вторую функцию
const toTupleWith1 = tuplePairCreator(1);
// затем выполняем вторую функцию, возвращаем массив из конкретных типов в переменную val1
const val1 = toTupleWith1("two");
