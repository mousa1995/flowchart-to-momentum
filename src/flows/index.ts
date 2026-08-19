import { morningRoutineFlow } from "./morningRoutineFlow";
import { nightRoutineFlow } from "./nightRoutineFlow.ts";
import { emergencyFlow } from "./emergencyFlow.ts";

export const flows = {
  morningRoutine: morningRoutineFlow,
  nightRoutine: nightRoutineFlow,
  emergency: emergencyFlow
};