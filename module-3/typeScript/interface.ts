//type
type User = {
  name: string;
  age: number;
};

//most of the time type user for premetive type (string, number, boolean) etc
const user1: User = {
  name: "name",
  age: 24,
};

//interface
interface UserInterface {
  name: string;
  age: number;
}

//most of the time interface used at Object
interface ExtendedUser extends UserInterface {
  role: string;
}

const user: ExtendedUser = {
  name: "mahabub",
  age: 24,
  role: "developer",
};

//type and interface at function
// function type with type
type AddNumber = (n1: number, n2: number) => number; //most of the time we use type for function type
const addNumber: AddNumber = (n1, n2) => {
  return n1 + n2;
};

//fucntion type with interface
interface AddNumber2 {
  (n1: number, n2: number): number;
}
const addNumber2: AddNumber2 = (n1, n2) => {
  return n1 + n2;
};

//interface at array type
interface RollNumber {
  [index: number]: number;
}

//type at array type
type RollNumberType = string[]; //most of the time we use type alias for array;

const rollNumber: RollNumberType = ["s", "t", "r"];
rollNumber.map((pro, i) => console.log(typeof pro));
