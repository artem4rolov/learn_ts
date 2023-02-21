"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// теперь можем обновить поля в объекте todo (иммутабельность)
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
