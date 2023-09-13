const User = {
  name: "terrence",
  email: "terrence@gmail.com",
  isActive: true,
};

// Object as parameter
function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "terrence", isPaid: false, email: "t@gmail.com" };

// Weird behavior where object argument has more information than it should have, but function accepts it
createUser(newUser);

// Object return type
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};
