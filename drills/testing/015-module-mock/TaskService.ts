import { logger } from "./Logger";

export const startTask = (taskName: string) => {
  return logger.log(`Starting ${taskName}`);
};
