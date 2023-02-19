"use strict";
// Array<string>
// string[]
// Promise<number>
// динамически принимаем массив конкретных данных
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray("2", "df");
