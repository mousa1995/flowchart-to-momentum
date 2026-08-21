function calculateDelay(previousFinishedAt: number, currentStartedAt: number): number {
    const delay = currentStartedAt - previousFinishedAt;

    if(delay < 0) {
        throw new Error ("time is negative ! fix it");
    }
    
    const delayInMinutes = Math.round(delay/60000);
    return delayInMinutes;
}

export default calculateDelay;