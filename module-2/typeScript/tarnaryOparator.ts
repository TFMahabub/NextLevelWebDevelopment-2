//tarnary oparator
const age = 14;
const isAdult = age >= 18 ? "yes adult" : "no";
// console.log(isAdult);

//null and undifined
const isAuthentication = "";
const userName = isAuthentication ?? "Guest"; // (??) this means (Nullish Coalesnace Operator)
const userName2 = isAuthentication ? isAuthentication : "Guest";
console.log({ userName }); //   { userName: '' }
console.log({ userName2 }); //  { userName2: 'Guest' }

type Manush = {
  name: string;
  age: number;
  address: {
    city: "daka" | "borishal" | "nowakhali";
    road: string;
    home?: string;
  };
};

const manush1: Manush = {
  name: "mahabub",
  age: 24,
  address: {
    city: "daka",
    road: "khanepur",
  },
};

const home = manush1?.address?.home ?? "No Home";

console.log({ home }); //  { home: 'No Home' }
