type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "e" | "c" | "i";
// все значения из двух юнионов (дублирующиеся - определяются как один)
type Union3 = Union1 | Union2;

// только одинаковые значения из двух юнионов
type Union4 = Union1 & Union2;

type Union5 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

// const example: Union5 = {};

export type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly lastName: string;
  readonly firstName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Person;

// const user1: Employee = {};

type Developer = {
  skills: string[];
  level?: "junior" | "middle" | "senior";
  say(): void;
  code: (arg: string) => void;
} & Employee;
