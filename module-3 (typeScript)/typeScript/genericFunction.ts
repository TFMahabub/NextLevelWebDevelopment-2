//arrow function
const createArray = (param: string): string[] => {
  //without generic type
  return [param];
};
//arrow function
const createArray1 = <T>(param: T): T[] => {
  //with generic type
  return [param];
};

const result1 = createArray1<string>("name"); //string type
const result2 = createArray1<number>(24); //number type
const result3 = createArray1<boolean>(true); //boolean type
const result4 = createArray1<{ name: string; age: number }>({
  name: "mahabub",
  age: 24,
}); //object type

//arrow function---------------------------------------------------
const createArray2 = <T, U>(param1: T, param2: U): [T, U] => {
  //with generic type
  return [param1, param2];
};

const result5 = createArray2<string, string>("name", "mahabub"); //string type
const result6 = createArray2<string, number>("mahabub", 24); //number type
const result7 = createArray2<string, boolean>("mahabub", true); //boolean type
const result8 = createArray2<{ name: string; age: number }, string>(
  {
    name: "mahabub",
    age: 24,
  },
  "web developer"
); //object type
const result89 = createArray2<{ name: string; age: number }, string[]>(
  {
    name: "mahabub",
    age: 24,
  },
  ["web developer", "fronend", "backend"]
); //object and array type

//function with spreed oparator------------------------------------
const crush6 = "kathrin langford";
const myInfo = {
  name: "mahabub",
  age: 24,
  salary: 1000,
};

const createMeIntoMyCrush = <T>(myInfo: T) => {
  return { ...myInfo, crush6 };
};

const rslt = createMeIntoMyCrush(myInfo);

console.log(createMeIntoMyCrush(myInfo));
