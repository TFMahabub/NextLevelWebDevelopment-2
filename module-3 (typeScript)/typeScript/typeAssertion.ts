// typeAssertion
const kgToGram = (param: number | string): number | string | undefined => {
  if (typeof param === "number") {
    return param * 1000;
  }
  if (typeof param === "string") {
    return `the value is ${parseFloat(param) * 1000}`;
  }
};

console.log(kgToGram(10) as number); // 10000
console.log(kgToGram("10") as string); // the value is 10000
