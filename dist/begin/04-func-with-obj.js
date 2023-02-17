"use strict";
function printPoint(point) {
    console.log(`Coordinate this point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: "1",
    y: "2",
};
printPoint(obj1);
// для вызова функции printPoint необходимым минимум является наличие двух аргументов x и y с типами string, все остальное - неважно
const obj2 = {
    x: "1",
    y: "2",
    z: 4,
};
printPoint(obj2);
function printName(user) {
    console.log("Hello", user.firstName.toUpperCase());
    // если второй ключ (user.lastName) есть - выводим второе сообщение
    if (user.lastName) {
        console.log("Nice to meet you, Mr. ", user.lastName.toUpperCase());
    }
}
printName({ firstName: "Artem" });
printName({ firstName: "Artem", lastName: "Frolov" });
