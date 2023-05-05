//null
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching...");
  }
};
// searchName(null);

//unknown
const getMyCarSpeed = (speed: unknown) => {
  //function create er somoy type na janle unknown die kaj kora jai pore jokhon janbo type tokhon bosie nibo;
  if (typeof speed === "number") {
    console.log(`my speed is ${(speed * 1000) / 3600}`);
  } else if (typeof speed === "string") {
    const value = speed.split(" ");
    console.log((parseFloat(value[0]) * 1000) / 3600);
  }
};
// getMyCarSpeed(10);
// getMyCarSpeed("10 kmh^-1");

//never
const thowError = (message: string): never => {
  //if we know the function will never return anything like this you can use never type;
  throw new Error(message);
};
thowError("error hoice");
