// Defining
function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

// Defining Parameter Types
function signUpUser(name: string, email: string, isPaid: boolean) {}

// Default Parameters
var loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("terrence");
signUpUser("terrence", "terrencejung928@gmail.com", true);
loginUser("t", "t@t.com");

export {};
