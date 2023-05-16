type Crush = {
  name: string;
  age?: number;
  profession: "programmer" | "housewife";
  address: string;
};

const crush1: Crush = {
  name: "moina pakhi",
  profession: "programmer",
  address: "nowakhali",
};

const crush2: Crush = {
  name: "tia pahki",
  profession: "housewife",
  address: "barishal",
};

const crush3: Crush = {
  name: "sadia",
  profession: "housewife",
  address: "dhaka",
};

//function type in a function as a parameter
type Oparation = (x: number, y: number) => number;
const calculate = (n1: number, n2: number, oparation: Oparation) => {
  return oparation(n1, n2);
};

console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x - y));
