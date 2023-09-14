// const user: (string | number)[] = ["tj", 1];
let tupleUser: [string, number, boolean];
tupleUser = ["tj", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [112, "example@gmail.com"];
newUser[1] = "tj@gmail.com";

export {};
