export const logger = {
  log: (message: string) => {
    console.log("REAL LOG:", message);
    return "logged";
  },
};
