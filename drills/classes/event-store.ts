// Define an Event type.
export interface Event {
  id: string;
  type: string;
  timestamp: number;
}

// Create an EventStore class.
class EventStore {
    private data : Event[];
    // Store all events in a private array.
    // The array should contain only Event objects.
    constructor() {
        this.data = [];
    }

    // Create a method named save.
    // It receives one Event.
    // Add that Event to the internal events array.
    save(e : Event) {
        this.data.push(e);
    }


    // Create a method named read.
    // It should return all stored events.
    read(){
        return this.data;
    }


}


// Create an EventStore instance.
const esi = new EventStore();

esi.save({
    id: "event_01",
    type: "task_started",
    timestamp: 123
  });

esi.save( {
    id: "event_02",
    type: "task_completed",
    timestamp: 456
  });

console.log(esi.read());



// E:\cmder\flowChart (main -> origin)
// λ npx tsx drills\classes\event-store.ts
// [
//   { id: 'event_01', type: 'task_started', timestamp: 123 },
//   { id: 'event_02', type: 'task_completed', timestamp: 456 }
// ]

// E:\cmder\flowChart (main -> origin)