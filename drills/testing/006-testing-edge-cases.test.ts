import { describe, it, expect } from "vitest";

const getFirstSkill = (skills: string[]) => {
  return skills[0];
};

describe("getFirstSkills", () => {
  it("should check first item of skills when length is more than 0", () => {
    //Arrange
    const first = "first";

    //Act
    const skills = getFirstSkill(["first", "second"]);

    //Assert
    expect(skills).toBe(first);
  });

  it("should check first item of skills when there is no skill", () => {
    //Arrange
    const first = [][0];

    //Act
    const skills = getFirstSkill([]);

    //Assert
    expect(skills).toBe(undefined);
  });
});
