"use strict";
const dev1 = {
    login: "artem4rolov",
    skills: ["js", "ts", "react", "mongoDB", "rest"],
    level: "junior",
};
const dev2 = {
    login: "artem4rolov",
    skills: ["js", "ts", "react", "mongoDB", "rest"],
    level: "middle",
};
function gradeDeveloper(dev, newLevel) {
    return (dev.level = newLevel);
}
console.log(gradeDeveloper(dev1, "middle"));
console.log(gradeDeveloper(dev2, "senior"));
