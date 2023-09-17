interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;

  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// "Reopening of the interface"
interface User {
  githubToken: string;
}

// Inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const terrence: Admin = {
  dbId: 1,
  email: "terrence@gmail.com",
  role: "admin",
  userId: 2,
  githubToken: "github",

  // Must be a function that returns a string
  startTrail: () => {
    return "trial started";
  },

  getCoupon: (name: "terrence", off: 2) => {
    return 2;
  },
};

terrence.email = "jung@gmail.com";
// terrence.dbId = 2 doesn't work
