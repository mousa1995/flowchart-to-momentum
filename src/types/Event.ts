import type { FlowName } from "../flows/flowName";
import type {EventType} from "./EventType";

export interface Event {
  eventId: string;
  type: EventType;
  timestamp: number;
  flow: FlowName;
  taskId: string;
  interruptionId?: string;
}