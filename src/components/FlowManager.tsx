import { useState } from "react";
import { flows } from "../flows";
import FlowRenderer from "./FlowRenderer";

function FlowManager() {
  const [activeFlow, setActiveFlow] = useState("morningRoutine");
  const [currentNodeId, setCurrentNodeId] = useState("start");

  const currentFlow = flows[activeFlow];
  const currentNode = currentFlow[currentNodeId];

  return (<div>
      <h1>🇮🇷 عهد ایرانی</h1>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
    </div>);
}

export default FlowManager;