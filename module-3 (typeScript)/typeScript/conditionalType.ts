//a type is depended on another type

//depended type
type a1 = string;
type a2 = a1 extends string ? string : null; //here the value is string

type x1 = null;
type x2 = x1 extends string ? string : null; //here the value is null

//key have or not checking
type sheikh = {
  wife1: string;
  wife2: string;
};
type checkProperty<T, K> = K extends keyof sheikh ? true : false;
type checkProperty2 = checkProperty<sheikh, "wife">;

//matha nosto kora condition
type Friends = "rejuan" | "ratan" | "hannan";
type RemoveFriends<T> = T extends "ratan" ? never : T;

type RestFriends = RemoveFriends<Friends>;

//dynamic friends name
type Friends2 = "raju" | "sabuj" | "mokhless";
type RemoveFriends2<T, K> = T extends K ? never : T;

type RestFriends2 = RemoveFriends2<Friends2, "raju">;
