interface CrushInterface<T> {
  name: string;
  husband: T;
}
// -----------------------------------------
const crush1: CrushInterface<string> = {
  name: "kathrine langford",
  husband: "mahabub",
};

const crush2: CrushInterface<boolean> = {
  name: "kathrine langford",
  husband: true,
};

const crush3: CrushInterface<null> = {
  name: "kathrine langford",
  husband: null,
};

interface objectType {
  name: string;
  age: number;
}

const crush4: CrushInterface<objectType> = {
  name: "kathrine langford",
  husband: {
    name: "mahabub",
    age: 24,
  },
};

// ----------------CrushInterface2-----------------
interface CrushInterface2<T, U> {
  name: string;
  husband: T;
  office?: U;
}

interface objectType2 {
  name: string;
  age: number;
  profession: string;
}

const crush5: CrushInterface2<objectType2, boolean> = {
  name: "katherine langford",
  husband: {
    name: "mahabub",
    age: 24,
    profession: "programmer",
  },
  office: false,
};
