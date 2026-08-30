import type { Event } from "../types/Event";

export class EventStore {
  private data: Event[];

  constructor() {
    this.data = [];
  }

  save(e: Event) {
    this.data.push({ ...e });
  }

  read() {
    return [...this.data];
  }

  removeLastEvent() {
    this.data.pop();
  }
}
