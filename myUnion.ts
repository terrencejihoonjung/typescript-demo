// When you are not sure of what type of data is coming in -> Union Type
let score: number | string = 33;

// Both are allowed
score = 3;
score = "3";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// Notice how there is no problem with the name/username conflict
let terrence: User | Admin = { name: "terrence", id: 334 }; // User type

// Here, variable terrence is now an Admin type
terrence = { username: "tj", id: 334 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  }

  // Making some API calls
  console.log(`DB id is ${id}`);
}

getDbId(3);
getDbId("3");

// Arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// Either all string or all numbers
const data3: string[] | number[] = ["1", "2", "3"];

// Can have strings or numbers
const data4: (string | number | boolean)[] = ["1", 2, false];

// Other
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
