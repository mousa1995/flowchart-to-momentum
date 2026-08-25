import { describe, it, expect } from "vitest";

const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
};

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    //Arrange

    //Act
    const result = divide(10, 2);

    //Assert
    expect(result).toBe(5);
  });

  it("should handle division by zero", () => {
    //Arrange

    //Act

    //Assert
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
