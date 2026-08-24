import { describe, it, expect } from "vitest";

const createUser = () => {
  return {
    name: "Ali",
    age: 25,
  };
};

describe("createUser", () => {
  it("should return a user object", () => {
    //Arrange
    const expectedUser = {
      name: "Ali",
      age: 25,
    };

    //Act
    const user = createUser();

    //Assert
    expect(user).toEqual(expectedUser);
  });
});
