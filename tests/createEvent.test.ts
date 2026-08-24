import { describe, expect, it } from "vitest";
import { createEvent } from "../src/utils/createEvent";

describe("createEvent", () => {
  it("should create a valid event", () => {
    const event = createEvent(
      "commander_entered",
      "morningRoutine",
      "task_001",
    );

    expect(event.eventId).toBeDefined();

    expect(event.timestamp).toBeDefined();

    expect(event.type).toBe("commander_entered");

    expect(event.flow).toBe("morningRoutine");

    expect(event.taskId).toBe("task_001");
  });
});
