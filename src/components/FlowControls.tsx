import type { FlowName } from "../flows/flowName";

interface FlowControlsProps {
    onNight: () => void;
    activeFlow: FlowName; 
}

function FlowControls({onNight, activeFlow} : FlowControlsProps) {
    return (
        <>
        {activeFlow !== "nightRoutine" && (
            <button onClick={onNight}>Go to Night Routine</button>
        )}
        </>
    )
}

export default FlowControls;


