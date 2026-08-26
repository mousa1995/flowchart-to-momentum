import { describe, it, expect, vi } from "vitest";

class UserService {
  constructor(private database: any) {}

  getUserName(id: number) {
    const user = this.database.find(id);

    return user.name;
  }
}

describe("UserService", () => {
  it("should return name with given id", () => {
    //Arrange
    const mockDatabase = {
      find: vi.fn().mockReturnValue({ name: "Ali" }),
    };
    //Act
    const userService = new UserService(mockDatabase).getUserName(1);
    //Assert
    expect(userService).toBe("Ali");
  });
});
