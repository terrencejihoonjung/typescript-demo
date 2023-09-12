// Defining Function's Parameters AND Return Type
function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

// Defining Parameter Types
function signUpUser(name: string, email: string, isPaid: boolean) {}

// Default Parameters
var loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// Setting type context for callback functions
// hero type is automatically deduced from string array heros
// we can specify return type as well

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// Being explicit with void functions
function consoleError(err: string): void {
  console.log(err);
}

// Being explicit with never functions. Never is similar to void but never is
// used when the function throws an exception or terminates execution of the program
function handleError(err: string): never {
  throw new Error(err);
}

let myValue = addTwo(5);
getUpper("terrence");
signUpUser("terrence", "terrencejung928@gmail.com", true);
loginUser("t", "t@t.com");

export {};
