import type { EventStore } from "./EventStore";
import type { Event } from "../types/Event";

export class EventService {
  private eventStore: EventStore;
  constructor(eventStore: EventStore) {
    this.eventStore = eventStore;
  }

  recordEvent(event: Event): void {
    this.eventStore.save(event);
  }
}
