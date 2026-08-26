import { describe, it, expect, vi } from "vitest";

const saveToDatabase = () => {
  return "Saved";
};

const createUser = (saveToDatabase: () => string) => {
  const result = saveToDatabase();

  return {
    username: "Ali",
    databaseStatus: result,
  };
};

describe("createUser", () => {
  it("should save data to dataBase", () => {
    //Arrange
    const mockedSave = vi.fn().mockReturnValue("Saved");
    //Act
    const user = createUser(mockedSave);

    //Assert
    expect(mockedSave).toHaveBeenCalled();
    expect(user.username).toBe("Ali");
    expect(user.databaseStatus).toBe("Saved");
  });
});
