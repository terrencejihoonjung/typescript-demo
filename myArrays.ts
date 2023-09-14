const superHeros: string[] = [];

// Alternative Way to Declare Arrays of a type
const heroPower: Array<number> = [];

// Type Alias Arrays
const allUsers: User[] = [];

type User = {
  name: string;
  isActive: boolean;
};

// Initializing 2D Arrays
const MLModels: number[][] = [[255, 255, 255], []];

superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "", isActive: true });
