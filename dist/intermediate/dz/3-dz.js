"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = void 0;
// исходная функция
function head(value) {
    return value[0];
}
exports.num = head([1, 3, 5]);
exports.num.toFixed(2);
const str = head("a");
str.length;
const bool = head([true, false]);
bool.valueOf();
