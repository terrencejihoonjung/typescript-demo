let greetings: string = "Hello Terrence";
greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 334455;

// boolean
let isLoggedIn: boolean = false;

// good practice
let userId2 = 334455;

// avoid using any
let hero; // given type "any" by default

function getHero() {
  return "thor";
}

hero = getHero(); // notice this variable is initially having a type of "any"

export {};
