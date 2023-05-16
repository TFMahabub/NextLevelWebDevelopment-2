type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address"; //manually korci
type NewTypeUsingKeyOf = keyof PersonType; //same with keyof method

const a: NewType = "age";
const b: NewTypeUsingKeyOf = "age";

const getPropertyByKey = <x, y extends keyof x>(object: x, key: y) => {
  //this function will get the key value;
  return object[key];
};

const result = getPropertyByKey({ name: "mahabub", age: 24 }, "age");
console.log(result);
