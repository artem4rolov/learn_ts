"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user1 = {
    login: "Artem",
    email: "artem4rolov@gmail.ru",
    password: "123456",
    isOnline: false,
    lastVisited: new Date(2023, 2, 16),
};
const admin1 = {
    login: "bla",
    email: "bla@mail.ru",
    password: "123456",
    isOnline: true,
    lastVisited: new Date(),
    role: "super admin",
};
// interface Admin extends User {
//   role: string;
// }
function login(data) {
    if (data.login.length > 0 && data.password.length > 0) {
        console.log("Hello, ", login);
    }
}
exports.login = login;
login(user1);
login(admin1);
