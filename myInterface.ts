interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;

  getCoupon(couponName: string, value: number): number;
}

const terrence: User = {
  dbId: 1,
  email: "terrence@gmail.com",
  userId: 2,
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
