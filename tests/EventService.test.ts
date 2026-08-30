import { describe, it, expect, vi } from "vitest";
import { EventService } from "../src/services/EventService";
import { EventStore } from "../src/services/EventStore";
import { createEvent } from "../src/utils/createEvent";
import { Event } from "../src/types/Event";

describe("EventService", () => {
  it("should check if an event is saved correctly", () => {
    //Arrange
    const eventStore = new EventStore();
    const eventService = new EventService(eventStore);
    const event = createEvent(
      "commander_exited",
      "morningRoutine",
      "taskId_01",
    );
    //Act
    eventService.recordEvent(event);
    //Assert
    expect(eventStore.read()[0].eventId).toBeDefined();
    expect(eventStore.read()[0].flow).toBeDefined();
    expect(eventStore.read()[0].taskId).toBeDefined();
    expect(eventStore.read()[0].timestamp).toBeDefined();
    expect(eventStore.read()[0].type).toBeDefined();

    expect(eventStore.read()[0].type).toBe("commander_exited");
    expect(eventStore.read()[0].flow).toBe("morningRoutine");
    expect(eventStore.read()[0].taskId).toBe("taskId_01");

    expect(eventStore.read()[0].eventId).toBeTypeOf("string");
    expect(eventStore.read()[0].timestamp).toBeTypeOf("number");
  });

  it("should call EventStore.save with the event", () => {
    // Arrange
    const eventStore = new EventStore();
    const saveSpy = vi.spyOn(eventStore, "save");

    const event: Event = {
      eventId: "event_001",
      type: "commander_exited",
      timestamp: 1000,
      flow: "morningRoutine",
      taskId: "task_001",
    };

    const eventService = new EventService(eventStore);

    // Act
    eventService.recordEvent(event);

    // Assert
    expect(saveSpy).toHaveBeenCalledWith(event);
  });
});
