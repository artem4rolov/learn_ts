// alias - набор конкретных значений
type Status = "ok" | "loading" | "error";

const x1: Status = "loading";

function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id * 3);
  }
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log("Hello", person.join(" "));
    return 1;
  }
  console.log("Hello", person);
  return person;
}
