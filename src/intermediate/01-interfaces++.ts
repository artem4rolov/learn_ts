interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

// interface Window {
//   isAuth?: boolean
// }

// window.isAuth

export interface Person {
  readonly lastName: string;
  readonly firstName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends User, Person {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
  level?: "junior" | "middle" | "senior";
  say(): void;
  code: () => void;
}

// const user1: Developer = {};

// class MyDeveloper implements Developer {}
