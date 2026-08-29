import { describe, it, expect, vi } from "vitest";
import { finishTask } from "./TaskService";
import { logger } from "./Logger";

vi.mock("./Logger", () => ({
  logger: {
    log: vi.fn().mockReturnValue("mocked"),
  },
}));

describe("TaskService", () => {
  it("should mock finshTask", () => {
    //Arrange
    //Act
    const task = finishTask("coding");

    //Aseert
    expect(task).toBe("mocked");
    expect(logger.log).toHaveBeenCalledWith("Finished coding");
  });
});
