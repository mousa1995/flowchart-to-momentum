const isDelaySignificant = (
  delayInMinutes: number,
  thresholdInMinutes: number,
): boolean => {
  //both delay and treshold are in minutes ?
  if (delayInMinutes > thresholdInMinutes) {
    return true;
  }
  return false;
};

export default isDelaySignificant;
