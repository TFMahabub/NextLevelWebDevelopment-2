//normal function
function add(num1: number, num2: number): number | void {
  return num1 + num2;
}
add(1, 4);

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
