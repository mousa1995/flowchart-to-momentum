import { it, expect } from "vitest";

const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

it("should multiply two numbers", () => {
  const n = multiply(4, 5);

  expect(n).toBe(20);
});

it("should divide two numbers", () => {
  const divideResult = divide(10, 2);

  expect(divideResult).toBe(5);
});
