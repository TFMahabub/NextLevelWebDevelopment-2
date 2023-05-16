//string type data with promise-------------------
const makePromiseString = (): Promise<string> => {
  return new Promise((res, rej) => {
    const data: string = "Data is fetched";
    // const data: string = "";
    if (data) {
      res(data);
    } else {
      rej("Failed to fetched data at string :(");
    }
  });
};

const getPromiseString = async (): Promise<string> => {
  return await makePromiseString();
};

const resultOfMakePromiseString = getPromiseString();
// console.log(resultOfMakePromiseString);

//boolean type data with promise---------------------
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise((res, rej) => {
    const data: boolean = true;
    // const data: boolean = false;
    if (data) {
      res(data);
    } else {
      rej("Failed to fetched data at boolean :(");
    }
  });
};

const getPromiseBoolean = async (): Promise<boolean> => {
  return await makePromiseBoolean();
};

const resultOfMakePromiseBoolean = getPromiseBoolean();
// console.log(resultOfMakePromiseBoolean);

//number type data with number-----------------------
const makePromiseNumber = (): Promise<number | string> => {
  return new Promise((res, rej) => {
    const data: number = 24;
    // const data: number = 14;
    if (data >= 18) {
      res(data);
    } else {
      rej("Not Adult :(");
    }
  });
};

const getPromiseNumber = async (): Promise<number | string> => {
  return await makePromiseNumber();
};

const resultOfMakePromiseNumber = getPromiseNumber();
console.log(resultOfMakePromiseNumber);
