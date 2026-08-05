import { useState } from "react";
import { morningRoutineFlow } from "./flows/morningRoutineFlow.ts";
import  FlowRenderer  from "./components/FlowRenderer";


function App() {
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const currentNode = morningRoutineFlow[currentNodeId];

  return (
    <div>
      <h1>🇮🇷 عهد ایرانی</h1>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
    </div>
  );
}

export default App;