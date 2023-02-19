import { average } from "../begin/02-functions";

let str = "hello world";
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);

max(1, 2, 4);

// встроенная утилита ReturnType в TypeScript
type returnFn = ReturnType<typeof average>;
