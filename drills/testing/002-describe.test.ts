import { describe, it, expect } from "vitest";

const add = (a: number, b: number) => a + b;

const subtract = (a: number, b: number) => a - b;

describe("Calculator", () => {
  it("should add two numbers", () => {
    const addResult = add(2, 3);
    expect(addResult).toBe(5);
  });

  it("should subtract two numbers", () => {
    const subtractedResult = subtract(10, 2);
    expect(subtractedResult).toBe(8);
  });
});
