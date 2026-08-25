import { describe, it, expect } from "vitest";
import { EventStore } from "../src/services/EventStore";
import { createEvent } from "../src/utils/createEvent";

describe("eventStore", () => {
  it("should check Event is defined", () => {
    //Arrange
    const event = createEvent("task_completed", "morningRoutine", "task1_001");
    const eventStore = new EventStore();

    //Act
    eventStore.save(event);

    //Assert
    expect(eventStore.read()).toContainEqual(event);
  });
});
