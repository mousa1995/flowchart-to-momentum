import { describe, expect, it } from "vitest";
import { EventStore } from "../src/services/EventStore";
import type { Event } from "../src/types/Event";

describe("EventStore", () => {
  it("should save and read events", () => {
    const store = new EventStore();

    const event: Event = {
      eventId: "event_001",
      type: "commander_entered",
      timestamp: 1000,
      flow: "morningRoutine",
      taskId: "task_001",
    };

    store.save(event);

    const result = store.read();

    expect(result.length).toBe(1);

    expect(result[0].eventId).toBe("event_001");
  });
});
