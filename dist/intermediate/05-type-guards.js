"use strict";
// предикат (функция - защитник)
function isFish(pet) {
    // используя утверждение (что-то as что-то) говорим typescript, что наше животное не может быть undefined
    // еоли условие тела функции вернет true, возвращаем true
    return pet.swim !== undefined;
}
function move(animal) {
    // если есть ключ swim - typescript подскажет какие методы доступны объекту animal
    if (isFish(animal)) {
        return animal.swim();
    }
    // в противном случае typescript покажет другие доступные методы
    return animal.fly();
}
