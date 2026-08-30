import { describe, it, expect, vi } from "vitest";

class Logger {
  log(message: string) {
    console.log(message);
  }
}

describe("Logger", () => {
  it("should spy on log", () => {
    // Arrange
    const logger = new Logger();

    const logSpy = vi.spyOn(logger, "log");

    // Act
    logger.log("Hello");

    // Assert
    expect(logSpy).toHaveBeenCalledWith("Hello");
  });
});
