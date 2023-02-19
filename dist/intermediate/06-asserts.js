"use strict";
// утверждаем (asserts), что user действительно является экземпляром User и его displayName это строка
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error("user has no displayName");
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log("Hello", user.displayName.toUpperCase());
}
