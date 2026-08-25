import { it, expect } from "vitest";

it("should be equal", () => {
  //Act and Arrange
  const five = 5;

  //Assert
  expect(five).toBe(5);
});

it("should have equal object values", () => {
  //Arrange and Act
  const user1 = {
    name: "Ali",
    age: 25,
  };

  const user2 = {
    name: "Ali",
    age: 25,
  };

  //Assert
  expect(user1).toEqual(user2);
});
