import { describe, it, expect, vi } from "vitest";
import { startTask } from "./TaskService";

vi.mock("./Logger", () => ({
  logger: {
    log: vi.fn().mockReturnValue("logged with mock :D"),
  },
}));

describe("startTask", () => {
  it("should mock logger using vi.mock()", () => {
    //Arrange
    //Act
    const task = startTask("task");
    //Assert
    expect(task).toBe("logged with mock :D");
  });
});
