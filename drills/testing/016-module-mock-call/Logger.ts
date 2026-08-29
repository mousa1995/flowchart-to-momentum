export const logger = {
  log: (message: string) => {
    console.log("REAL:", message);
    return "logged";
  },
};
