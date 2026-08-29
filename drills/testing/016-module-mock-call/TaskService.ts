import { logger } from "./Logger";

export const finishTask = (taskName: string) => {
  return logger.log(`Finished ${taskName}`);
};
