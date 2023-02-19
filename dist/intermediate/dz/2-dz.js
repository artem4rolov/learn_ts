"use strict";
// утверждаем, что принятый заказ был по телефону
function isATelephoneOrder(order) {
    // возвращаем true или false
    // поскольку заказ может быть undefined, а функция проверки должна возвращать true или false - сначала проверяем что заказ вообще есть (переводим в boolean значение) и только после этого проверяем наличие ключа callerNumber в объекте order
    return !!order && "callerNumber" in order;
}
// утверждаем, что принятый заказ был по сети интернет
function isAnInternetOrder(order) {
    // поскольку заказ может быть undefined, а функция проверки должна возвращать true или false -  сначала проверяем что заказ вообще есть (переводим в boolean значение) и только после этого проверяем наличие ключа email в объекте order
    return !!order && "email" in order;
}
function makeOrder(order) {
    // если это был интернет-заказ, то выводим email клиента
    if (isAnInternetOrder(order)) {
        console.log(order.email);
        // если это был телефонный заказ, то выводим номер клиента
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
