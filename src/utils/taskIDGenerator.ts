export const taskIDGenerator = (activeFlow: string, currentNodeId: string) => {
  return `${activeFlow}_${currentNodeId}`;
};
