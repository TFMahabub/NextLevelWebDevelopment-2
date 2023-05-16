type User = {
  name: "mahabub" | "salman"; //litarel type
  age: number;
  isMarried: boolean;
  readonly profession: string; //this value you can't change
  wife?: string; //optional type
};

const user: User = {
  name: "salman",
  age: 24,
  isMarried: false,
  profession: "programmer",
};

// user.profession = "web developer" // we can't change this value cause of readonly option
