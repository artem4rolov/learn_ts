let word: string | null = null;
const num = 10;

if (num > 5) {
  word = "abc";
}

// ! дает понять typesript, что значение действительно есть (там не null и не undefined)
console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
}

function printName2(person?: Person) {
  console.log(person!.name);
}
