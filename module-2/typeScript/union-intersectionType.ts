// union type
type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "mahabub",
  expertise: "javaScript",
  experience: 1,
};

//intersection type
type JuniorDeveloperIntersection = NoobDeveloper & {
  expertise: string;
  experience: number;
};

const newDeveloperIntersection: JuniorDeveloperIntersection = {
  name: "mahabub",
  expertise: "javaScript",
  experience: 1,
};
