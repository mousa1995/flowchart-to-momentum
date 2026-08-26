import { describe, it, expect, vi } from "vitest";
import { EventService } from "../src/services/EventService";
import { EventStore } from "../src/services/EventStore";
import { createEvent } from "../src/utils/createEvent";

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

  it("should see if eventService calss saves records correctly", () => {
    //Arrange
    // const mockEventStore
    // const eventService = new EventService(mockEventStore());
    //Act
    //Assert
    // expect(eventService);
  });
});
