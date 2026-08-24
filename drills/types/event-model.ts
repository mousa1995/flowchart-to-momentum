// EventType
// ├── "task_started"
// ├── "task_completed"
// └── "task_cancelled"
export type EventType = "task_started" | "task_completed" | "task_cancelled";

// Event
// ├── id: string
// ├── timestamp: number
// └── type: EventType
export interface MomentumEvent {
  id: string;
  timestamp: number;
  type: EventType;
}

// بعد:

const momentumEvent: MomentumEvent = {
  id: "event_01",
  timestamp: 123,
  type: "task_completed",
};

console.log(momentumEvent);

// ## test ###
// E:\cmder\flowChart (main -> origin)
// λ npx tsx drills/types/event-model.ts
// { id: 'event_01', timestamp: 123, type: 'task_started' }

// ### Test 2 ###
//with task_deleted

// Type '"task_deleted"' is not assignable to type 'EventType'.ts(2322)
// event-model.ts(14, 5): The expected type comes from property 'type' which is declared here on type 'MomentumEvent'
