type genericArray<T> = Array<T>;
type genericArrayTupple<x, y> = [x, y];
type genericArrayTripple<x, y, z> = [x, y, z];

const rollNumberString: Array<string> = ["1", "2", "3", "4"]; //one type of value with manual type
const userNameAndRollNum: Array<{ name: string; roll: number }> = [
  //two type of value with manual type
  { name: "mahabub", roll: 5 },
];
const rollNumber: genericArray<number> = [1, 2, 3, 4]; //one type of value with generic type
interface RollNumberBooleanType {
  name: string;
  roll: number;
}
const rollNumberBoolean: genericArrayTupple<
  //two type of value with generic type
  boolean,
  RollNumberBooleanType
> = [true, { name: "m", roll: 5 }];
const genericType: genericArrayTripple<string, number, boolean> = [
  //three type of value with generic type
  "mahabub",
  23,
  true,
];
