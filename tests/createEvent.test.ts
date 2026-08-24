import { createEvent } from "../src/utils/createEvent";

//       ↓
// Event معتبر می‌سازد
//       ↓
// eventId دارد
//       ↓
// timestamp دارد

// ### TEST ###
const createdEvent = createEvent("commander_entered", "morningRoutine", "1");

console.log(createdEvent);

console.log(createdEvent.eventId);
console.log(createdEvent.timestamp);
console.log(createdEvent.type);
