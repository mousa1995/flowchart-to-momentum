import calculateDelay from "./calculateDelay";
import isDelaySignificant from "./isDelaySignificant";

const checkDelay = (
  endOfPreviousTask: number,
  startOfCurrentTask: number,
  threshold: number,
): boolean => {
  const delayInMinutes = calculateDelay(endOfPreviousTask, startOfCurrentTask);
  const thresholdInMinutes = Math.round(threshold);

  return isDelaySignificant(delayInMinutes, thresholdInMinutes);
};

export default checkDelay;
