//function with spreed oparator------------------------------------
interface MyInfo2Type {
  name: string;
  age: number;
  salary: number;
}

const myInfo2: MyInfo2Type = {
  name: "mahabub",
  age: 24,
  salary: 1000,
};

const createMeIntoMyCrush2 = <T>(myInfo: T) => {
  const crush7 = "kathrin langford";
  return { ...myInfo, crush7 };
};

const rslt2 = createMeIntoMyCrush2<MyInfo2Type>(myInfo2);
console.log(createMeIntoMyCrush2<MyInfo2Type>(myInfo2));

//function with spreed oparator with mendetori property-------------
//mandory type you want
interface MendotoryType {
  name: string;
  age: number;
  salary: number;
}

//parameter object type
interface MyInfo3Type {
  name: string;
  age: number;
  salary: number;
  profession: string;
}

//parameter object
const myInfo3: MyInfo3Type = {
  name: "mahabub",
  age: 24,
  salary: 1000,
  profession: "programmer",
};

//function
const createMeIntoMyCrush3 = <T extends MendotoryType>(myInfo: T) => {
  const crush8 = "kathrin langford";
  return { ...myInfo, crush8 };
};

const rslt3 = createMeIntoMyCrush3<MyInfo3Type>(myInfo3);
console.log(rslt3);
console.log(createMeIntoMyCrush3<MyInfo3Type>(myInfo3));
