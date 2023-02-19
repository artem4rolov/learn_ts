"use strict";
// выше описаны все возможные варианты перегрузки, поэтому мы можем указать аргументы как any
function add(a, b) {
    return a + b;
}
add(1, 2);
add("1", "2");
// функция
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
