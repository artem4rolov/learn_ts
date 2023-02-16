"use strict";
const x1 = "loading";
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id * 3);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log("Hello", person.join(" "));
        return 1;
    }
    console.log("Hello", person);
    return person;
}
