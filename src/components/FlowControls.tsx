import type { FlowName } from "../flows/flowName";

interface FlowControlsProps {
    activeFlow: FlowName; 
    onNight: () => void;
    onEmergency: () => void;
    onExitEmergency: () => void;
}

function FlowControls({onNight, onEmergency, onExitEmergency, activeFlow} : FlowControlsProps) {
    return (
        <>
        {activeFlow !== "nightRoutine" && activeFlow !== "emergency" &&(
            <button onClick={onNight}>Go to Night Routine</button>
        )}
        {activeFlow !== "emergency" && (
            <button onClick={onEmergency}>Enter Emergency</button>
        )}
        {activeFlow === "emergency" && (
            <button onClick={onExitEmergency}>Exit Emergency</button>
        )}
        </>
    )
}

export default FlowControls;


