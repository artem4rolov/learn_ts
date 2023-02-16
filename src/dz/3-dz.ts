type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

const dev1: Developer = {
  login: "artem4rolov",
  skills: ["js", "ts", "react", "mongoDB", "rest"],
  level: "junior",
};

const dev2: Developer = {
  login: "artem4rolov",
  skills: ["js", "ts", "react", "mongoDB", "rest"],
  level: "middle",
};

function gradeDeveloper(dev: { level: Level }, newLevel: Level) {
  return (dev.level = newLevel);
}

console.log(gradeDeveloper(dev1, "middle"));
console.log(gradeDeveloper(dev2, "senior"));
