import { useState } from "react";
import { flows } from "../flows";
import FlowRenderer from "./FlowRenderer";
import FlowControls from "./FlowControls";
import type { FlowName } from "../flows/flowName";
import type { FlowPosition } from "../types/FlowPosition";

function FlowManager() {
  const [activeFlow, setActiveFlow] = useState<FlowName>("morningRoutine");
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [positions, setPositions] = useState<FlowPosition[]>([]);

  const currentFlow = flows[activeFlow];
  const currentNode = currentFlow[currentNodeId];

  const goNight = () => {
    setActiveFlow("nightRoutine");
    setCurrentNodeId("start");
  };

  const enterEmergency = () => {
    //1. موقعیت فعلی را Push کند
    const position = { flow: activeFlow, nodeId: currentNodeId };
    setPositions([...positions, position]);

    //2. وارد Emergency Flow شود
    setActiveFlow("emergency");

    //3. Node را روی start بگذارد
    setCurrentNodeId("start");
  };

  const exitEmergency = () => {
    if (positions.length === 0) {
      console.log("exitEmergency صدا زده شده، ولی Stack خالی بوده.");
      return;
    }

    //1.    آخرین Position را برداریم.
    const lastPosition = positions[positions.length - 1];

    //.2activeFlow را از position.flow بگیریم.
    const lastFlow = lastPosition.flow;

    //.3currentNodeId را از position.nodeId بگیریم.
    const lastNodeId = lastPosition.nodeId;

    //.4آن Position را از Stack حذف کنیم.
    const newPositions = positions.slice(0, positions.length - 1);

    setPositions(newPositions);

    //.5activeFlow و currentNodeId را به مقادیر قبلی برگردانیم.
    setActiveFlow(lastFlow);
    setCurrentNodeId(lastNodeId);
  };

  return (
    <div>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
      <FlowControls
        onExitEmergency={exitEmergency}
        onNight={goNight}
        onEmergency={enterEmergency}
        activeFlow={activeFlow}
      />
    </div>
  );
}

export default FlowManager;
