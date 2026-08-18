import { useState } from "react";
import { flows } from "../flows";
import FlowRenderer from "./FlowRenderer";
import FlowControls from "./FlowControls";
import type { FlowName } from "../flows/flowName";


function FlowManager() {
  const goNight = () => {
    setActiveFlow("nightRoutine");
    setCurrentNodeId("start");
  }

  const [activeFlow, setActiveFlow] = useState<FlowName>("morningRoutine");
  const [currentNodeId, setCurrentNodeId] = useState("start");

  const currentFlow = flows[activeFlow];
  const currentNode = currentFlow[currentNodeId];

  return (<div>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
      <FlowControls onNight={goNight} activeFlow={activeFlow}/>
    </div>);
}

export default FlowManager;