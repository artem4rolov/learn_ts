"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
// функция prop выводит значение ключа какого-то объекта
// этот объект мы типизируем с помощью generic (<T>)
// и также мы ограничиваем входной параметр так, чтобы введенный ключ точно существовал у входного объекта
// ключ U должен совпадать (extends keyof) с любым ключом объекта типом T
function prop(key, obj) {
    return obj[key];
}
exports.prop = prop;
const obj1 = { a: 1, b: 2, c: 3 };
prop("a", obj1);
// prop("d", obj1); -> такого ключа у obj1 нет
