import { useState } from "react";
import { morningFlow } from "./flows/morningFlow";
import  FlowRenderer  from "./components/FlowRenderer";


function App() {
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const currentNode = morningFlow[currentNodeId];

  return (
    <div>
      <h1>🇮🇷 عهد ایرانی</h1>
      <FlowRenderer node={currentNode} onSelect={setCurrentNodeId} />
    </div>
  );
}

export default App;