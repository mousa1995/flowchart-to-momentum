import { useState } from "react";
import { flows } from "../flows";
import FlowRenderer from "./FlowRenderer";
import type { FlowName } from "../flows/flowName";

function FlowManager() {
  const [activeFlow] = useState<FlowName>("morningRoutine");
  const [currentNodeId, setCurrentNodeId] = useState("start");

  const currentFlow = flows[activeFlow];
  const currentNode = currentFlow[currentNodeId];

  return (<div>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
    </div>);
}

export default FlowManager;