interface fetchedDataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  ami: true;
}

const getFetchingData = async (): Promise<fetchedDataType> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const getData = async (): Promise<void> => {
  const data = await getFetchingData();
  console.log(data);
};

console.log(getData());
console.log(getFetchingData());
