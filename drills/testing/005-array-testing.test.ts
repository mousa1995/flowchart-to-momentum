import { describe, it, expect } from "vitest";

const getSkills = () => {
  return ["React", "TypeScript", "Testing"];
};

describe("getSkills", () => {
  it("sohuld check the length of getSkills returned value", () => {
    //Arrange
    const length = 3;

    //Act
    const getSkillsReturnedValue = getSkills();

    //Assert
    expect(getSkillsReturnedValue).toHaveLength(length);
  });

  it("should return expected values", () => {
    //Arrange

    //Act
    const getSkillsReturnedValue = getSkills();

    //Assert
    expect(getSkillsReturnedValue).toEqual(["React", "TypeScript", "Testing"]);
  });
});

const getUsers = () => {
  return [
    {
      name: "Ali",
      age: 25,
    },
  ];
};
describe("getUsers", () => {
  it("should check the inner value of getUser", () => {
    //Arrange
    const expectedUser = {
      name: "Ali",
      age: 25,
    };

    //Act
    const user = getUsers();

    //Assert
    expect(user).toContainEqual(expectedUser);
  });
});
