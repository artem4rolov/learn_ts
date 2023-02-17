interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  // дата
  lastVisited: Date;
}

const user1: User = {
  login: "Artem",
  email: "artem4rolov@gmail.ru",
  password: "123456",
  isOnline: false,
  lastVisited: new Date(2023, 2, 16),
};

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  // дата
  lastVisited: Date;
  role: string;
}

const admin1: Admin = {
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

export function login(data: { login: string; password: string }): void {
  if (data.login.length > 0 && data.password.length > 0) {
    console.log("Hello, ", login);
  }
}

login(user1);
login(admin1);
