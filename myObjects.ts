const User = {
  name: "terrence",
  email: "terrence@gmail.com",
  isActive: true,
};

// // Object as parameter
// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "terrence", isPaid: false, email: "t@gmail.com" };

// // Weird behavior where object argument has more information than it should have, but function accepts it
// createUser(newUser);

// Object return type
// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// // Type Alias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// // Returning object of type "User"
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// // Function call with type User argument
// createUser({ name: "", email: "", isActive: true });

// readonly keyword + optional marker
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

// User instantiation
let myUser: User = {
  _id: "1245",
  name: "terrence",
  email: "terrence@gmail.com",
  isActive: true,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// Mix and Match Type Aliases
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
