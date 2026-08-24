// Integration Test
// Goal:
// Test the connection between:

// createEvent()
// EventStore.save()
// EventStore.read()
// Expected:
// A created Event should be stored successfully.

// We need:
// - createEvent to create a valid Event.
// - EventStore to store the Event.
import { EventStore } from "../src/services/EventStore";
import { createEvent } from "../src/utils/createEvent";

// 2. Create an EventStore instance.
const eventStore = new EventStore();
// This represents our event storage.

// 3. Create a new Event.
// Use createEvent() instead of creating the object manually.
const sampleEvent = createEvent("commander_entered", "nightRoutine", "id_001");
// createEvent should:
// - generate eventId
// - generate timestamp
// - create a valid Event object.

// 4. Save the Event.
// Send the created Event to EventStore.
eventStore.save(sampleEvent);

// 5. Read stored events
console.log(eventStore.read());

// Get events from EventStore

// 6. Check the result.

// Expected:
// - EventStore should contain the created Event.
// - The stored Event should have the same data.

// 7. Print result for manual testing.
