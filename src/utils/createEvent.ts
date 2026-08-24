import type { FlowName } from "../flows/flowName";
import type { EventType } from "../types/EventType";
import type { Event } from "../types/Event";

export const createEvent = (
  type: EventType,
  flow: FlowName,
  taskId: string,
): Event => {
  const eventId = crypto.randomUUID();
  const timestamp = Date.now();

  return {
    eventId,
    type,
    timestamp,
    flow,
    taskId,
  };
};
