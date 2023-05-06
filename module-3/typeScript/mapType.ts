//make number to string
const arrayOfNumbers = [1, 2, 3, 4, 5]; //["1", "2", "3"]
const makeString = arrayOfNumbers.map((num) => num.toString());
console.log(makeString);

//
type areaNumber = {
  height: number;
  width: number;
};

type a = areaNumber["height"]; //number
type b = areaNumber["width"]; //number

//maping wity manual type
interface AreaString {
  height: string;
  width: string;
  depth: string;
}
interface AreaNumber {
  height: number;
  width: number;
  depth: number;
}
interface AreaBoolean {
  height: boolean;
  width: boolean;
  depth: boolean;
}

//maping with dynamic type
interface Volume {
  height: number;
  width: string;
  depth: number;
}

//dynamic with key pare
type Area = {
  [key in keyof Volume]: string;
};

//depened
type AreaDevepended = {
  [key in keyof Volume]: Volume[key];
};

//generic
type AreaGeneric<T> = {
  [key in keyof T]: T[key];
};
type AreaGeneric2 = AreaGeneric<Volume>;
type AreaGeneric3 = AreaGeneric<{ abol: "abol"; tahol: "tabol" }>;
