//normal function
function add(num1: number, num2: number = 10): number | void {
  //always try to use defalue value at last parameter;
  return num1 + num2;
}
add(1, 4);
add(1); //this function with get the default value from the parameter;

//arrow function
const addNumber = (num1: number, num2: number): number | void => {
  return num1 + num2;
};
addNumber(1, 2);

type Person = {
  name: string;
  balance: number;
  addBalance(money: number): number; //function type in an object
};

const person: Person = {
  name: "mahabub",
  balance: 2000,
  addBalance(money: number) {
    return this.balance + money; //function type in an object
  },
};

//check console.log
const myFriends: string[] = ["rejuan", "noyan", "ratan"];
const newFriends: string[] = ["hannan", "raju", "jinuk"];

myFriends.push(...newFriends);
// console.log(myFriends);

//type spleat oparator
const makeArray = (...friends: string[]): void => console.log(friends); //this function will get one of more string value and give you the this all value in an array;

makeArray("mahabub", "rejuan", "hannan");

//we can't tell type to distructure an array or object:
type DistructureingObject = {
  personName: string;
  personAge: number;
};
const distructureingObject: DistructureingObject = {
  personName: "mahabub",
  personAge: 25,
};
const { personName } = distructureingObject; //we can't tell type here
console.log(personName);
