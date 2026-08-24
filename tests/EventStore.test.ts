import { EventStore } from "../src/services/EventStore";
import type { Event } from "../src/types/Event";

// Test data

const ev1: Event = {
  eventId: "test",
  type: "commander_entered",
  timestamp: 10000,
  flow: "morningRoutine",
  taskId: "1",
  interruptionId: "good",
};

// Test 1:
// EventStore should save an event.

const store = new EventStore();

store.save(ev1);

console.log(store.read());

// Expected:
// The stored event should be returned.

// Test 2:
// EventStore should return a copy of the events array.

const events = store.read();

events.pop();

console.log(store.read());

// Expected:
// The original EventStore should still contain the event.

// Test 3:
// EventStore should protect stored events from external changes.

ev1.timestamp = 664631563;

console.log(store.read());

// Expected:
// The stored event timestamp should still be 10000.
